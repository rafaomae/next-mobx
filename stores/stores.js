import { useStaticRendering } from "mobx-react";
import CountStore from "./CountStore";
import NameStore from "./NameStore";

const isServer = typeof window === 'undefined';
useStaticRendering(isServer);

const initializeStore = (initialData) => {
    return {
        countStore: new CountStore(initialData.countStore),
        nameStore: new NameStore(initialData.nameStore)
    };
}

export default initializeStore;