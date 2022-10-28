import React from 'react'

const Swap = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center w-[32%] border-2 mt-[60px] rounded-2xl bg-opacity-10 bg-white'>
            <label className='text-left pl-[15px] text-white my-[10px] font-semibold'>Swap</label>

            <div className=''>
                <input className='w-[95%] h-[80px] rounded-xl text-4xl pl-[10px]' placeholder='0'/>
                <div className=''>

                </div>
            </div>

            <br/>

            <div className=''>
            <input className='w-[95%] h-[80px] rounded-xl text-4xl pl-[10px]' placeholder='0'/>
            </div>

            <br/>
            
            <div>
            <button className='w-[95%] h-[60px] rounded-xl bg-slate-200 text-black mb-[10px] font-semibold text-xl'>Select a token</button>
            </div>
        </div>
    </div>
  )
}

export default Swap