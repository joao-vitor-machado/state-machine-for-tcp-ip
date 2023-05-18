import { IState } from "../states/IState";
import { CLientClosedState } from "../states/client_states/ClosedState";

export class Client {

    private static instance: Client;
    private context : IState;

    constructor(){
        this.context = new CLientClosedState();
    }

    public static getInstance() : Client {
        if(!Client.instance) {
            this.instance = new Client();
        }
        return this.instance;
    }

    public setState(newState : IState) {
        this.context = newState;
    }

    async connect() {
        this.context.open();
    }

    async acknowledge() {
        this.context.acknowldge();
    }

    async closeConnection() {
        this.context.close();
    }
}