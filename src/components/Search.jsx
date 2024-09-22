import React from 'react'

export default function Search() {
  return (
    <section>
        <div className='relative h-16 mobile:w-[450px]'>
          <input
            className="outline-none text-sm w-full h-full pr-[6rem] rounded-xl border-none p-[1.2rem] focus:outline-[#1e1e1e80] focus:outline-1"
            type="text"
            id='id'
            placeholder="Search for specific plants"
          />

         <button
            className='flex items-center justify-center bg-[#C1DCDC] h-[48px] w-[48px] border-none rounded-xl absolute -right-[14px] top-1/2 transform -translate-x-1/2 -translate-y-1/2'
            type='submit'>
                <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        </div>
    </section>
  )
}