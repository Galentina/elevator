import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { floorSelector } from '../redux/floorSelector';
import { floorAction } from '../redux/actions';

export const Elevator: FC = () => {
    const dispatch = useDispatch()
    const storeData = useSelector(floorSelector)
    const doorO = storeData.doorO;
    const doorC = storeData.doorC

    //_______________________Creating movement list__________________________

    const star = storeData.star;
    const setFloorList = (floor: number) => {
        if (floor !== storeData.chosenFloor) {
            dispatch(floorAction.getFloors(floor));
            dispatch(floorAction.setStar (100));
            dispatch(floorAction.changeO(false));
            dispatch(floorAction.changeC(true));
        }
    }

    //_______________________________Movement between floors________________________________
    const changeFloor = () => {
        dispatch(floorAction.setStar (0));
        const elevatorItem = document.getElementById('elevator') as HTMLDivElement;
        let floors = storeData.floors;
        if (storeData.chosenFloor >= Math.min(...storeData.floors)) {
            floors = floors.filter((el: number) => el < storeData.chosenFloor).sort((a: number, b: number) => a - b);
        } else if (storeData.chosenFloor <= Math.min(...storeData.floors)) {
            floors = floors.filter((el: number) => el > storeData.chosenFloor).sort((a: number, b: number) => b - a);
        }
        dispatch(floorAction.chosenFloor(floors[0]));
        for (let i = 0; i < floors.length; i++) {
            dispatch(floorAction.changeO(false));
            dispatch(floorAction.changeC(true));
            elevatorItem.style.transition = `transform ${floors[i] * 6}s ease-in-out)`;
            elevatorItem.style.transform = `translateY(-${floors[i] * 100}px)`;
            dispatch(floorAction.chosenFloor(floors[i]));
            dispatch(floorAction.changeO(true));
            dispatch(floorAction.changeC(false));
        }
        dispatch(floorAction.resetFloors());
    }

    const smallButtons = storeData.elevator.map((elFloor: number, index: number) =>
        <div key={index} className='smallItems' onClick={() => setFloorList(elFloor)}>{elFloor}</div>
    )

    // __________________________________Elevator body____________________________________
    return (
        <>
            <div id={'elevator'} style={{ transition: `transform 7s ease-in-out`}}
                 className='elContainer'>
                <div className='elButtonContainer'>
                    {smallButtons}
                </div>
                <div className='elDoorContainer'>
                    <div id='doorOpen'
                         className={ doorO ? 'elDoor' : 'elDoor selected' }>
                        &#x25C0;|&#x25B6;
                    </div>
                    <div id='doorClose'
                         className={ doorC ? 'elDoor' : 'elDoor selected' }
                         onClick={() => changeFloor()}>
                        &#x25B6;|&#x25C0;
                    </div>
                    <span id='star'
                          style={{opacity: `${star}%`}}
                          className='click'>
                        Click
                    </span>
                </div>
            </div>
        </>

    )
}



