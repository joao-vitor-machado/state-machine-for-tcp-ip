import { Client } from "../../machines/Client";
import { IState } from "../IState";
import { CLientClosedState } from "../client_states/ClosedState";

export class ServerEstabilishedState extends IState {

    constructor() {
        super();
        this.acknowldge();
    }

    open() {
        throw new Error("Connection already open");
    }
    close() {
        console.log("closing connection");
    }
    acknowldge() {
        console.log("Server: connection estabilished");
        console.log("Waiting for action");
    }
    
}