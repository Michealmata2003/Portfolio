import React from 'react'

const Title = ({title, des}) => {
  return (
    <div className="flex flex-col gap-4 font-titleFont mb-14 ">
      <h3 className=" text-4xl md:text-5xl text-gray-900 dark:text-white font-bold">
       {title}
      </h3>
      <p className="text-sm font-semibold text-gray-600  w-[70%] text-center m-auto ">{des}</p>
    
    </div>
  );
}

export default Title