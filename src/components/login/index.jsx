import { memo, useState } from 'react';
import { extend } from 'koot';
import classNames from 'classnames';

import { signIn } from '@api/app';
import portrait from '@assets/portrait.jpg';

import styles from './index.module.less';

// Functional Component =======================================================

let Login = extend({
    connect: true,
    styles,
})(({ dispatch }) => {
    const [submitting, setSubmitting] = useState(false);
    const [errorMsg, setErrorMsg] = useState();

    function onSubmit(evt) {
        evt.preventDefault();

        setSubmitting(true);
        setErrorMsg(undefined);

        const form = evt.currentTarget;
        // const url = form.getAttribute('action');
        // const method = form.getAttribute('method');
        const formData = new FormData(form);

        dispatch(signIn(formData)).catch((e) => {
            // console.log(Object.keys(e), e.response, e.toJSON());
            if (e.response.status === 403) {
                setErrorMsg('Auth failed!');
            }
            console.error(e);
            setSubmitting(false);
        });
        // console.log({ form, url, method });
    }

    return (
        <div className="select-none min-h-screen flex items-center justify-center bg-bg dark:bg-bg_dark py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <div className="mx-auto max-w-full w-36 relative rounded-full overflow-hidden shadow-md">
                        <img
                            className="block w-full relative inset-0"
                            src={portrait}
                            alt="Diablohu"
                            width="512"
                            height="512"
                        />
                    </div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-text_main dark:text-text_main_dark">
                        Sign-in
                    </h2>
                    {/* <p className="mt-2 text-center text-sm text-gray-600">
                        Or
                        <a
                            href="#"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                            start your 14-day free trial
                        </a>
                    </p> */}
                </div>
                <form
                    className="mt-8 space-y-6"
                    action="/api/sign-in"
                    method="POST"
                    onSubmit={onSubmit}
                >
                    {/* <input type="hidden" name="remember" value="true" /> */}
                    <div className="flex flex-col sm:flex-row flex-nowrap rounded-md shadow-sm -space-y-px sm:-space-x-px sm:-space-y-0">
                        <div className="flex-1">
                            <label htmlFor="email-address" className="sr-only">
                                Email
                            </label>
                            <input
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md sm:rounded-t-none sm:rounded-l-md focus:outline-none focus:ring-accent-500 focus:border-accent-500 focus:z-10 sm:text-sm"
                                placeholder="Email"
                            />
                        </div>
                        <div className="flex-1 sm:flex-none sm:w-24">
                            <label htmlFor="code" className="sr-only">
                                Auth Code
                            </label>
                            <input
                                name="code"
                                type="tel"
                                pattern="[0-9]{6}"
                                autoComplete="off"
                                required
                                className="appearance-none rounded-none relative block w-full pl-3 pr-2 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md sm:rounded-b-none sm:rounded-r-md focus:outline-none focus:ring-accent-500 focus:border-accent-500 focus:z-10 sm:text-sm"
                                placeholder="Auth Code"
                            />
                        </div>
                    </div>

                    {/* <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember_me"
                                name="remember_me"
                                type="checkbox"
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                            />
                            <label
                                htmlFor="remember_me"
                                className="ml-2 block text-sm text-gray-900"
                            >
                                Remember me
                            </label>
                        </div>

                        <div className="text-sm">
                            <a
                                href="#"
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                                Forgot your password?
                            </a>
                        </div>
                    </div> */}

                    {/*  duration-150 cursor-not-allowed */}
                    <div
                        className={classNames({
                            'cursor-not-allowed': submitting,
                        })}
                    >
                        <button
                            type="submit"
                            className={classNames([
                                // 'inline-flex',
                                // 'items-center',
                                'group',
                                'relative',
                                'w-full',
                                'flex',
                                'justify-center',
                                'py-2',
                                'px-4',
                                'border',
                                'border-transparent',
                                'text-sm',
                                'font-medium',
                                'rounded-md',
                                'text-white',
                                'bg-accent-600',
                                'hover:bg-accent-700',
                                'focus:outline-none',
                                'focus:ring-2',
                                'focus:ring-offset-2',
                                'focus:ring-accent-500',
                            ])}
                            disabled={submitting}
                        >
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                {/* <!-- Heroicon name: solid/lock-closed --> */}
                                <svg
                                    className={classNames(
                                        [
                                            'h-5',
                                            'w-5',
                                            'text-accent-300',
                                            'group-hover:text-accent-400',
                                        ],
                                        {
                                            'animate-spin': submitting,
                                        }
                                    )}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    {submitting ? (
                                        <>
                                            <circle
                                                className="opacity-30"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth={4}
                                            />
                                            <path
                                                // className="opacity-100"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            />
                                        </>
                                    ) : (
                                        <path
                                            fillRule="evenodd"
                                            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                            clipRule="evenodd"
                                        />
                                    )}
                                </svg>
                            </span>
                            Sign in
                        </button>
                    </div>
                    <div
                        className={classNames(
                            [
                                'group',
                                'relative',
                                'w-full',
                                'text-center',
                                'py-2',
                                'px-4',
                                'border',
                                'border-current',
                                'text-sm',
                                'font-medium',
                                'rounded-md',
                                'text-red-600',
                                'bg-red-50',
                            ],
                            {
                                'opacity-0': !errorMsg,
                            }
                        )}
                    >
                        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                            <svg
                                className={classNames([
                                    'h-5',
                                    'w-5',
                                    'text-red-500',
                                ])}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                />
                            </svg>
                        </span>
                        {errorMsg || '__'}
                    </div>
                </form>
            </div>
        </div>
    );
});

if (!__DEV__) Login = memo(Login);

export default Login;
