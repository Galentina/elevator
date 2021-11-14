import { floorTypes } from './types';
import {IFloorAction, IState} from "../floorTypes";

const initialState: IState = {
    elevator: [0, 1, 2, 3, 4, 5],
    floors: [],
    chosenFloor: 0,
    direction: 'up',
    doorC: false,
    doorO: true,
    star: 0
}

export const floorReducer = (state = initialState, action: IFloorAction) => {
    switch (action.type) {

        case floorTypes.getFloors: {
                        let dir;
            const newFloors = [...state.floors, action.payload];
                        const sum = newFloors.reduce((a: number, b: number) => a + b);
            if (state.chosenFloor === 0) dir = 'up';
            else if (state.chosenFloor === 5) dir = 'down';
            else if (state.direction === '') {
                (sum/newFloors.length > state.chosenFloor) ? dir = 'up' : dir = 'down';
            }
            else dir = state.direction;
            if (state.direction ==='up') {
                newFloors.sort((a: number, b: number) => a - b)
            } else if (state.direction ==='down') {
                newFloors.sort((a: number, b: number) => b - a)
            }
            return {
                ...state,
                direction: dir,
                floors: newFloors.filter(el => el !==state.chosenFloor),
            }
        }
        case floorTypes.chosenFloor: {
            return {
                ...state,
                chosenFloor: action.payload,
            }
        }
        case floorTypes.setDirection: {
            return {
                ...state,
                direction: action.payload,
            }
        }
        case floorTypes.resetFloors: {
            return {
                ...state,
                floors: [],
            }
        }
        case floorTypes.changeDoorC: {
            return {
                ...state,
                doorC: action.payload,
            }
        }
        case floorTypes.changeDoorO: {
            return {
                ...state,
                doorO: action.payload,
            }
        }
        case floorTypes.setStar: {
            return {
                ...state,
                star: action.payload,
            }
        }

        default: return state;
    }
};
