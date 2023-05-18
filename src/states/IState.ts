export abstract class IState {
    abstract open() : any;
    abstract close() : any;
    abstract acknowldge() : any;
}