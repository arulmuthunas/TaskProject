import React, { Component } from "react";
import { Provider } from "react-redux";
import { Store } from "./Redux/store";
import Router from "./Router";
import { ReduxNetworkProvider } from 'react-native-offline';
export default function ReduxWrapper() {
      return (
            <Provider store={Store}>
                  <Router />
            </Provider>
      );
}
