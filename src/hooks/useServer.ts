import axios, { AxiosResponse } from 'axios';

const createServer = async (path: string, params: Object) => {
    return await axios.get(`http://autoschool.local:666/api/${path}`, {
        params
    });
}

interface Item {
    id: string;
}

type TypeItem = Item & object;

interface Response<T> {
    success: boolean;
    message: string;
    items: T[];
}

interface IMethods {
    query: string;
}

interface IServer<T> {
    endpoint: string;
    binding?: IMethods;
    model?: ObjectConstructor;
}


const API_URL = 'http://autoschool.local:666/api/';

export class Server<T extends ObjectConstructor> {
    private readonly _endpoint: string;
    private readonly _binding: IMethods | undefined;
    private _model: ObjectConstructor;

    public query(params?: object): Promise<object[]> {
        return this.call(this._binding?.query || '', params);
    }

    public call(method?: string, params?: object): Promise<object[] | TypeItem[]> {
        const pathList = [this._endpoint];
        if (method) {
            pathList.push(method);
        }
        const path = pathList.join('/');
        return axios.get(API_URL + path, {
            params
        }).then((data: AxiosResponse<Response<T>>) => {
            if (data.data.items?.length) {
                return data.data.items.map((item) => {
                    return new this._model(item);
                });
            } else {
                return data.data.items;
            }
        });
    }

    constructor(data: IServer<T>) {
        this._endpoint = data.endpoint;
        this._binding = data.binding;
        this._model = data.model || Object;
    }
}

