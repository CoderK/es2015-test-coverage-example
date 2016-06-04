'use strict';

module.exports = function (config) {
    let browsers = ['Chrome'];
    let preprocessors = ['webpack'];
    let reporters = ['mocha'];
    let webpack = {
        devtool: 'inline-source-map',
        module: {
            loaders: [
                {
                    test: /(\.js)$/,
                    exclude: /(node_modules)/,
                    loader: ['babel-loader'],
                    query: {
                        presets: ['es2015']
                    }
                }
            ]
        }
    };

    if (config.coverage) {
        browsers = ['PhantomJS'];
        reporters = ['mocha', 'coverage'];
        preprocessors = ['webpack', 'sourcemap'];
        webpack.isparta = {
            embedSource: true,
            noAutoWrap: true,
            babel: {
                presets: ['es2015']
            }
        };
        webpack.module.preLoaders = [
            {
                test: /(\.js)$/,
                exclude: /(__tests__|node_modules)/,
                loader: 'isparta'
            }
        ];
    }

    config.set({
        browsers,
        reporters,
        webpack,
        frameworks: ['mocha'],
        files: [
            './src/**/__tests__/*-test.js'
        ],
        plugins: [
            'karma-chrome-launcher',
            'karma-chai',
            'karma-mocha',
            'karma-sourcemap-loader',
            'karma-webpack',
            'karma-mocha-reporter',
            'karma-coverage',
            'karma-phantomjs-launcher'
        ],
        preprocessors: {
            './src/**/__tests__/*-test.js': preprocessors
        },
        coverageReporter: {
            type: 'html',
            dir: 'coverage'
        },
        webpackMiddleware: {
            noInfo: true //please don't spam the console when running in karma!
        },
        singleRun: config.coverage
    });
};
