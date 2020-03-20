import React from 'react';
import App, { Container } from 'next/app';
import { Provider } from 'mobx-react';
import Header from '../components/header';

import initializeStore from '../stores/stores';

const INITIAL_DATA = {
    countStore: {
        count: 0
    },
    nameStore: {
        name: ""
    }
}

class CustomApp extends App {
    static async getInitialProps(appContext) {
        const mobxStore = initializeStore(INITIAL_DATA);
        appContext.ctx.mobxStore = mobxStore;
        const appProps = await App.getInitialProps(appContext);
        return {
            ...appProps,
            initialMobxState: mobxStore
        };
    }

    constructor(props) {
        super(props);
        const isServer = typeof window === 'undefined';
        this.mobxStore = isServer ? props.initialMobxState : initializeStore(props.initialMobxState);
    }

    render() {
        const { Component, pageProps } = this.props;
        return (
            <Provider {...this.mobxStore}>
                <Header />
                <Component {...pageProps} />
            </Provider>
        )
    }
}

export default CustomApp;