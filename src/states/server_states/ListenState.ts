import { Client } from "../../machines/Client";
import { IState } from "../IState";
import { ClientEstabilishedState } from "../client_states/EstabilishedState";

export class ServerListenState extends IState {

    constructor() {
        super();
        this.open();
    }

    open() {
        console.log("Sending SYN & ACK");
        Client.getInstance().setState(new ClientEstabilishedState())
    }
    close() {
        throw new Error("connection not estabilished yet");
    }
    acknowldge() {
        throw new Error("connection not estabilished yet");
    }

}