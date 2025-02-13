"use client";
import React, { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "#/store/store";
interface IStoreProvider {
    children: React.ReactNode;
}
export const StoreProvider = (props: IStoreProvider) => {
    const storeRef = useRef<AppStore>(undefined);
    if (!storeRef.current) {
        storeRef.current = makeStore();
    }
    return (
        <Provider store={storeRef.current}>
            {props.children}
        </Provider>
    )
}