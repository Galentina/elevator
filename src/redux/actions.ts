import { floorTypes } from "./types";

export const floorAction = Object.freeze({

   getFloors: (data: number) => {
       return {
           type: floorTypes.getFloors,
           payload: data,
       }
    },
    chosenFloor: (data: number) => {
        return {
            type: floorTypes.chosenFloor,
            payload: data,
        }
    },
    setDirection: (data: string) => {
        return {
            type: floorTypes.setDirection,
            payload: data,
        }
    },
    resetFloors: () => {
        return {
            type: floorTypes.resetFloors,
        }
    },
    changeC: (data: boolean) => {
        return {
            type: floorTypes.changeDoorC,
            payload: data,
        }
    },
    changeO: (data: boolean) => {
        return {
            type: floorTypes.changeDoorO,
            payload: data,
        }
    },
    setStar: (data: number) => {
        return {
            type: floorTypes.setStar,
            payload: data,
        }
    }
});
