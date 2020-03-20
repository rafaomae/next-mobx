import { action, observable } from "mobx";

class NameStore {
    @observable name = "";

    constructor(initialData = { name: "Dale" }) {
        this.name = initialData.name
    }

    @action setName(name) {
        this.name = name;
    }
}

export default NameStore;