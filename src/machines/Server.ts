import { IState } from "../states/IState";
import { ServerClosedState } from "../states/server_states/ClosedState";

export class Server {
    
    private static instance : Server;
    private context : IState;

    constructor(){
        this.context = new ServerClosedState();
    }

    public static getInstance() : Server {
        if(!Server.instance) {
            this.instance = new Server();
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