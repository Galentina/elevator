import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { floorSelector } from './redux/floorSelector';
import { Elevator } from './components/Elevator';
import { floorAction } from './redux/actions';

function App() {
    const dispatch = useDispatch();
    const storeData = useSelector(floorSelector)

    //________"Open door" and "change arrows color" function________
    const elDirFloor = (floor: number, dir: string) => {
        const arrowUp = document.getElementById(`arrowUp${floor}`) as HTMLDivElement;
        const arrowDown = document.getElementById(`arrowDown${floor}`) as HTMLDivElement;
        (dir==='up') ? arrowUp.style.color = '#fbe161' : arrowDown.style.color = '#fbe161';

        //________Setting number of floor and direction in store________
        dispatch(floorAction.setDirection(dir));
        dispatch(floorAction.changeO(false));
        dispatch(floorAction.changeC(true));
        dispatch(floorAction.chosenFloor(floor))
        setTimeout(()=>{
            arrowUp.style.color = '#282c34';
            arrowDown.style.color = '#282c34';
            dispatch(floorAction.setDirection(''));
            dispatch(floorAction.changeO(true));
            dispatch(floorAction.changeC(false));
        }, 6000);
    }

    //_________________Creating floor buttons and arrows____________________

    const elFloors = storeData.elevator.map((elFloor: number, index: number) =>
        <div key={index} className='floorContainer'>
            <div className='leftButtons'>
                <div id={`arrowUp${elFloor}`}
                     style={{cursor: 'pointer', color:'#282c34'}}
                     onClick={()=> elDirFloor(elFloor, 'up')}>
                    &#9650;
                </div>
                <div id={`arrowDown${elFloor}`}
                     style={{cursor: 'pointer', color:'#282c34'}}
                     onClick={()=> elDirFloor(elFloor, 'down')}>
                    &#9660;
                </div>
            </div>
            <div className='floorButton'>{elFloor}</div>
        </div>
    )

    //_________________________Main app body_____________________

    return (
        <div className="container">
            <div className="left_container">
                <header className="left-header">Elevator</header>
            </div>
            <div className="right_container">
                <header className="right-header">Playground</header>
                <div className='floorButtonsContainer'>
                    {elFloors}
                </div>
                <div>
                    <Elevator />
                </div>
                <div className="footer">
                    <p>Galina Malareva</p>
                    <p>gala.malareva@gmail.com</p>
                </div>
            </div>
        </div>
    );
}

export default App;
