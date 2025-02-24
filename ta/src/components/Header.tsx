import closed from '../assets/freeroomsDoorClosed.png'
import freerooms from '../assets/freeRoomsLogo.png'
import title from '../assets/title.png'
import darkmode from '../assets/darkmode.png'
import grid from '../assets/grid.png'
import search from '../assets/search.png'
import map from '../assets/map.png'
import { useState } from 'react';

function Header() {
    
    const [closedDoor, setClosedDoor] = useState(false);
    return (
        <header className="flex bg-white w-full min-h-[8%] border-b justify-center">
            <div className='flex justify-center bg-white w-full h-full'>
                <div className="flex flex-row w-full max-w-[98%] justify-between items-center">
                    <div className='flex flex-row mb-3'>
                        <img 
                            // If closed, display closed door if not display open door
                            src={closedDoor ? closed : freerooms} 
                            className='w-[48px] h-[50px] cursor-pointer' 
                            // update state every on click to alter
                            onClick={() => setClosedDoor(!closedDoor)}
                        />
                        <img src={title} className='w-[75%] h-[37px] mt-2 max-[600px]:hidden' />
                    </div>
                       
                    <div className='flex flex-row mb-1 gap-[7px]'>
                        <div className="flex gap-2 justify-center items-center border-[1px] border-orange-300 h-[40px] w-[40px] bg-white rounded-md hover:bg-black/5 hover:border-orange-500 transition cursor-pointer">
                            <img src={search} className="flex w-6">
                            </img>
                        </div>
                        <div className="flex gap-2 justify-center items-center border-[1px] border-orange-300 h-[40px] w-[40px] bg-white rounded-md hover:bg-black/5 hover:border-orange-500 transition cursor-pointer">
                            <img src={grid} className="flex w-6">
                            </img>
                        </div>
                        <div className="flex gap-2 justify-center items-center border-[1px] border-orange-300 h-[40px] w-[40px] bg-white rounded-md hover:bg-black/5 hover:border-orange-500 transition cursor-pointer">
                            <img src={map} className="flex w-6">
                            </img>
                        </div>
                        <div className="flex gap-2 justify-center items-center border-[1px] border-orange-300 h-[40px] w-[40px] bg-white rounded-md hover:bg-black/5 hover:border-orange-500 transition cursor-pointer">
                            <img src={darkmode} className="flex w-6">
                            </img>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
