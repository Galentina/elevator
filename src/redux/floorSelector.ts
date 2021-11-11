


export const floorSelector = (state: { elevator: number[],  floors: any, chosenFloor: number, direction: string }) => {

    return {
        elevator: state.floors.elevator,
        floors: state.floors.floors,
        chosenFloor: state.floors.chosenFloor,
        direction: state.floors.direction,
        doorO: state.floors.doorO,
        doorC: state.floors.doorC,
        star: state.floors.star,
    };
};
