export interface IFloorAction {
    type: string;
    payload: number;
}

export interface IState {
    elevator: number[];
    floors: number[];
    chosenFloor: number;
    direction: 'down' | 'up' | '';
    doorC: boolean;
    doorO: boolean;
    star: number;
}
