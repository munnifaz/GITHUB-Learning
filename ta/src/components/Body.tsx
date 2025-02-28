import { useState, useEffect } from 'react';
import data from '../data/data';
import { CardFilterAdd, CardFilterList } from './Card';
import SearchBar from './SearchBar';

function Body() {
    const [isMd, setIsMd] = useState(false);
    
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMd(window.innerWidth < 768);
        };
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize); 
    }, []);

    return (
        <div className="flex flex-col bg-white w-full h-full overflow-y-scroll">
            <div className="flex justify-center bg-white w-full">
                {isMd ? (
                    <div className="flex flex-col w-full max-w-[97%] mt-4 gap-4">
                        <SearchBar />
                        <div className='flex flex-row justify-between'>
                            <CardFilterAdd />
                            <CardFilterList />
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-row w-full max-w-[97%] justify-between mt-4 gap-x-4">
                        <CardFilterAdd />
                        <SearchBar />
                        <CardFilterList />
                    </div>
                )}
            </div>

            <div className="grid grid-rows-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-5 px-5 py-4">
                {data.map((building, idx) => (
                    <div
                        key={idx}
                        className="relative h-[140px] w-[97%] xl:h-[370px] lg:h-[370px] md:h-[280px] sm:h-[210px] rounded-md overflow-hidden cursor-pointer"
                    >   
                        <img
                            src={building.building_picture}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-orange-500/30 opacity-0 hover:opacity-100 transition"></div>

                        <div className="absolute top-2 right-2 bg-white shadow-md flex items-center border w-[154px] h-[37px] rounded-2xl py-2 px-4">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                            <p className="text-[10.5px] text-black font-bold">
                                {building.rooms_available} rooms available
                            </p>
                        </div>

                        <div className="xl:absolute lg:absolute md:absolute sm:absolute bottom-2 left-2 right-2 bg-orange-500 py-3 px-4 h-[50px] rounded-xl font-bold text-white">
                            {building.name}
                        </div>
                        <div className='absolute text-white font-bold top-16 xl:hidden lg:hidden md:hidden sm:hidden px-4'>
                            <p>
                                {building.name}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Body;
