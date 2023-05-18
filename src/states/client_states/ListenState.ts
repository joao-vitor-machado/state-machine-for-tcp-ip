import { IState } from "../IState";

export class ClientListenState extends IState {
    open() {
        console.log("Estabeleshing connection");
    }
    close() {
        throw new Error("connection not estabilished yet");
    }
    acknowldge() {
        throw new Error("connection not estabilished yet");
    }

}