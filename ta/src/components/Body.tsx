import data from '../data/data'
import { CardFilterAdd, CardFilterList } from './Card';
import SearchBar from './SearchBar'

function Body() {
    return (
        <div className="flex flex-col bg-white w-full h-full overflow-y-scroll">
            <div className='flex justify-center bg-white w-full'>
                <div className="flex flex-row w-full max-w-[97%] justify-between mt-4 gap-x-4">
                    <div>
                        <CardFilterAdd>

                        </CardFilterAdd>
                    </div>
                        <SearchBar />
                    <div>
                        <CardFilterList>

                        </CardFilterList>
                    </div>
                </div>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 gap-y-5 px-5 py-4">
                {data.map((building, idx) => (
                    <div
                        key={idx}
                        className="relative w-[97%] h-[370px] rounded-md overflow-hidden cursor-pointer"
                    >   
                        <img
                            src={building.building_picture}
                            alt={building.name}
                            className="w-full h-full object-cover"
                        />
                       <div className="absolute inset-0 bg-orange-500/30 opacity-0 hover:opacity-100 transition"></div>

                        <div className="absolute top-2 right-2 bg-white shadow-md flex items-center border w-[154px] h-[37px] rounded-2xl py-2 px-4">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                            <p className="text-[10.5px] text-black font-bold">
                            {building.rooms_available} rooms available
                            </p>
                        </div>

                        <div className="absolute bottom-2 left-2 right-2 bg-orange-500 py-3 px-4 h-[50px] rounded-xl font-bold text-white">
                            {building.name}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Body;
