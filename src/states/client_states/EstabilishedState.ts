import { Server } from "../../machines/Server";
import { IState } from "../IState";
import { ServerClosedState } from "../server_states/ClosedState";
import { ServerEstabilishedState } from "../server_states/EstabilishedState";

export class ClientEstabilishedState extends IState {

    constructor() {
        super();
        this.acknowldge();
    }

    open() {
        throw new Error("Connection already open");
    }
    close() {
        console.log("closing connection");
        Server.getInstance().setState(new ServerClosedState());
    }
    acknowldge() {
        console.log("Client: Connection Estabilished");
        Server.getInstance().setState(new ServerEstabilishedState());
    }
    
}