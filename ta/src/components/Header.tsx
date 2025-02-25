import closed from '../assets/freeroomsDoorClosed.png'
import open from '../assets/freeRoomsLogo.png'
import title from '../assets/title.png'
import Grid from './icons/grid'
import Search from './icons/search'
import Map from './icons/map'
import { useState } from 'react';
import Dark from './icons/darkmode'
import { Card } from './Card'

function Header() {
    const [closedDoor, setClosedDoor] = useState(false);
    return (
        <header className="flex bg-white w-full min-h-[8%] border-b justify-center">
            <div className='flex justify-center bg-white w-full h-full'>
                <div className="flex flex-row w-full max-w-[98%] justify-between items-center">
                    <div className='flex flex-row mb-3'>
                        <img 
                            // If closed, display closed door if not display open door
                            src={closedDoor ? closed : open} 
                            className='w-[48px] h-[50px] cursor-pointer' 
                            // update state every on click to alter
                            onClick={() => setClosedDoor(!closedDoor)}
                        />
                        <img src={title} className='w-[75%] h-[37px] mt-2 max-[600px]:hidden' />
                    </div>
                       
                    <div className='flex flex-row mb-1 gap-[7px]'>
                        <Card>
                            <Search />
                        </Card>
                        <Card>
                            <Grid />
                        </Card>
                        <Card>
                            <Map />
                        </Card>
                        <Card>
                            <Dark />
                        </Card>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
