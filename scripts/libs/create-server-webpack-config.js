const fs = require('fs-extra');
const path = require('path');
const forever = require('forever-monitor');
const webpack = require('webpack');

const { aliases } = require('../../koot.config');

// const apiServer = require('./config');

/**
 * 创建独立服务器的 Webpack 配置对象
 * @async
 * @param {Object} options
 * @param {string} options.id
 * @param {string} options.name
 * @param {string} options.distPathname
 * @param {string|number} options.port
 * @param {string} options.portConstName
 * @returns {Object}
 */
module.exports = async (options = {}) => {
    const { main, id, name, distPathname, port, portConstName } = options;

    /** 当前是否是开发环境 */
    const isEnvDevelopment = process.env.WEBPACK_BUILD_ENV === 'dev';
    const dist = path.resolve(
        __dirname,
        '../../',
        process.env.KOOT_DIST_DIR,
        distPathname
    );

    const config = {
        mode: 'development',
        devtool: isEnvDevelopment ? 'cheap-module-source-map' : 'source-map',
        target: 'async-node',
        watch: isEnvDevelopment ? true : false,
        output: {
            filename: '[name].js',
            path: dist
        },
        plugins: [
            new webpack.DefinePlugin({
                [portConstName]: port,
                __DREAMARI_THIS_SERVER_DIST__: JSON.stringify(dist)
            }),
            new webpack.EnvironmentPlugin(['KOOT_DIST_DIR'])
        ],
        entry: {
            run: [main]
        },
        module: {
            rules: [
                {
                    test: /\.(js|mjs|cjs|ts)$/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            cwd: __dirname,
                            cacheDirectory: true,
                            presets: [
                                [
                                    '@babel/preset-env',
                                    {
                                        modules: false,
                                        exclude: [
                                            '@babel/plugin-transform-regenerator',
                                            '@babel/plugin-transform-async-to-generator'
                                        ]
                                    }
                                ],
                                '@babel/preset-typescript'
                            ],
                            compact: 'auto'
                        }
                    }
                }
            ]
        },
        optimization: {
            splitChunks: false,
            removeAvailableModules: false,
            removeEmptyChunks: false,
            mergeDuplicateChunks: false,
            occurrenceOrder: false,
            concatenateModules: false
        },
        resolve: {
            modules: ['__modules', 'node_modules'],
            extensions: ['.js', '.ts', '.mjs', '.cjs'],
            alias: aliases
        },
        stats: {
            all: false,
            modules: isEnvDevelopment,
            maxModules: 0,
            errors: true,
            warnings: true,
            moduleTrace: isEnvDevelopment,
            errorDetails: true,
            performance: isEnvDevelopment
        },
        performance: {
            maxEntrypointSize: 100 * 1024 * 1024,
            maxAssetSize: 100 * 1024 * 1024
        },
        externals: {
            koa: 'commonjs koa',
            'koa-body': 'commonjs koa-body',
            'koa-router': 'commonjs koa-router'
        }
    };

    if (isEnvDevelopment) {
        let child;

        const exitHandler = async (...args) => {
            child.stop();
        };
        process.on('exit', exitHandler);
        process.on('SIGINT', exitHandler);
        process.on('SIGUSR1', exitHandler);
        process.on('SIGUSR2', exitHandler);
        process.on('uncaughtException', exitHandler);

        config.plugins.push({
            apply: compiler => {
                compiler.hooks.watchRun.tap(
                    'DevOtherServerPlugin',
                    compilation => {
                        if (child) {
                            child.stop();
                        } else {
                            child = new forever.Monitor(
                                path.resolve(dist, 'run.js'),
                                {
                                    max: 1,
                                    silent: false,
                                    uid: `dreamari-dev-${id}`,
                                    killTree: true
                                }
                            );
                            child.on('watch:restart', function(info) {
                                console.warn(`💬 ${name} restarting`);
                            });
                        }
                    }
                );
                compiler.hooks.afterEmit.tap(
                    'DevOtherServerPlugin',
                    compilation => {
                        child.start();
                    }
                );
            }
        });
    } else {
        if (fs.existsSync(dist)) fs.emptyDirSync(dist);
    }

    return config;
};
