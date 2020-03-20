import { observable, action } from "mobx";

class CountStore {
    @observable count = null;

    constructor(initialData = { count: 0 }) {
        this.count = initialData.count;
    }

    @action setCount(count) {
        this.count = count;
    }
}

export default CountStore;