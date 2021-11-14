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
            const newFloors = [...state.floors, action.payload]
            return {
                ...state,
                floors: newFloors,
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
