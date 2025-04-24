class CentralDeLuzes {
    static instance;

    constructor() {
        if (instance) {
            throw new Error("Essa instancia já existe");
        }
        this.luz = false;
        instance = this;
    }
}