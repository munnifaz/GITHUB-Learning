import closed from '../assets/freeroomsDoorClosed.png'
import freerooms from '../assets/freeRoomsLogo.png'
import title from '../assets/title.png'

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
                            alt="FreeRooms Logo"
                        />
                        <img src={title} className='w-[75%] h-[37px] mt-2' />
                    </div>
                       
                    <div className='flex flex-row mb-1 gap-[7px]'>
                        <div className="flex gap-2 justify-content items-center border-[1px] border-orange-300 h-[40px] w-[40px] bg-white rounded-md hover:bg-black/5 hover:border-orange-500 transition cursor-pointer"></div>
                        <div className="flex gap-2 justify-content items-center border-[1px] border-orange-300 h-[40px] w-[40px] bg-white rounded-md hover:bg-black/5 hover:border-orange-500 transition cursor-pointer"></div>
                        <div className="flex gap-2 justify-content items-center border-[1px] border-orange-300 h-[40px] w-[40px] bg-white rounded-md hover:bg-black/5 hover:border-orange-500 transition cursor-pointer"></div>
                        <div className="flex gap-2 justify-content items-center border-[1px] border-orange-300 h-[40px] w-[40px] bg-white rounded-md hover:bg-black/5 hover:border-orange-500 transition cursor-pointer"></div>
                        <div className="flex gap-2 justify-content items-center border-[1px] border-orange-300 h-[40px] w-[40px] bg-white rounded-md hover:bg-black/5 hover:border-orange-500 transition cursor-pointer"></div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
