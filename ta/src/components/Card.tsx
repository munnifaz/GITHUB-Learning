import React from "react";
import FilterList from "./icons/filterlist";
import FilterAdd from "./icons/filteradd";
interface CardProps {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="flex gap-2 justify-center items-center border-[1px] border-orange-300 h-[40px] w-[40px] bg-white rounded-md hover:bg-black/5 hover:border-orange-500 transition cursor-pointer">
      {children}
    </div>
  );
}


export const CardFilterList: React.FC = () => {
  return (
    <div className="flex justify-start px-4 gap-2 items-center border-[2px] border-orange-500 h-[44px] w-[134px] bg-white rounded-xl cursor-pointer">
        <FilterList>
        </FilterList>
        <p className='flex text-orange-500 font-bold'>
            Filters 
        </p>
    </div>
  )
}

export const CardFilterAdd: React.FC = () => {
  return (
    <div className="flex gap-2 justify-start px-4 items-center border-[2px] border-orange-500 h-[44px] w-[120px] bg-white rounded-xl cursor-pointer">
        <FilterAdd>
        </FilterAdd>
        <p className='flex text-orange-500 font-bold'>
            Sort
        </p>
    </div>
  )
}

