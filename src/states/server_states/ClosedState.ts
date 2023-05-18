import { Client } from "../../machines/Client";
import { IState } from "../IState";
import { CLientClosedState } from "../client_states/ClosedState";

export class ServerClosedState extends IState {

    constructor() {
        super();
        this.close();
    }

    open() {
        throw new Error("No connection estabilished yet");
    }
    close() {
        Client.getInstance().setState(new CLientClosedState());
    }
    acknowldge() {
        throw new Error("No connection estabilished yet");
    }

}