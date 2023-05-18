import { Server } from "../../machines/Server";
import { IState } from "../IState";
import { ServerListenState } from "../server_states/ListenState";

export class CLientClosedState extends IState {

    constructor() {
        super();
        console.log("connection closed");
        console.log("no connection estabilished");
    }

    open() {
        console.log("sending SYN");
        Server.getInstance().setState(new ServerListenState());
    }
    close() {
        throw new Error("No connection estabilished yet");
    }
    acknowldge() {
        throw new Error("No connection estabilished yet");
    }

}