import { StrictMode, memo, useState, useEffect } from 'react';
import { extend } from 'koot';
import classNames from 'classnames';
import axios from 'axios';
import 'tailwindcss/tailwind.css';

import { updateSession } from '@api/app';
import Login from '@components/login';

import styles from './app.module.less';

// ============================================================================

const App = extend({
    connect: (state) => ({
        auth: state.app?.session?.auth,
    }),
    data(state, renderProps, dispatch) {
        // console.log(state.app.session);
        if (state.app.session) return;
        return dispatch(updateSession());
    },
    // ssr: false,
    styles,
})(({ className, children, location, auth, ...props }) => (
    <StrictMode>
        <div
            className={classNames([
                className,
                {
                    'is-home':
                        location.pathname === '' || location.pathname === '/',
                },
            ])}
        >
            {!auth ? <Login /> : <Layout />}
        </div>
    </StrictMode>
));
export default App;

// ============================================================================

const TestDb = memo(() => {
    const [collections, setCollections] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('/api/test-db-connection').then((res) => {
            const list = res?.data?.data;
            if (Array.isArray(list)) setCollections(list);
            setLoading(false);
        });
    }, []);

    return (
        <div className="test-db">
            {loading ? (
                <>
                    Connecting to MongoDB...
                    <br />
                    Please wait
                </>
            ) : (
                <>
                    MongoDB connect successfully!
                    <br />
                    Collections: {collections.join(', ')}
                </>
            )}
        </div>
    );
});

let Layout = () => (
    <div className="min-h-screen flex items-center justify-center bg-bg dark:bg-bg_dark py-12 px-4 sm:px-6 lg:px-8 text-text_main dark:text-text_main_dark">
        <TestDb />
    </div>
);
if (!__DEV__) Layout = memo(Layout);
