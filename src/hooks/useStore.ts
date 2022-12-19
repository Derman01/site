interface Listener {
    [method: string]: (data?: any) => void;
}

class Store {
    private static _listener: Listener = {};

    public static call(method: string, data?: any) : void {
        if (Store._listener[method]) {
            Store._listener?.[method](data);
        }
    }

    public static listen(method: string, callback: (data?: any) => void): void {
        Store._listener[method] = callback;
    }

}

export default Store;