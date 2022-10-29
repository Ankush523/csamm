import React from 'react'
import { Select } from '@chakra-ui/react';
import {MdArrowDropDown} from 'react-icons/md'
const Swap = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-col w-[32%] border-2 mt-[60px] rounded-2xl bg-opacity-10 bg-white'>
            <label className='text-left pl-[15px] text-white my-[10px] font-semibold'>Swap</label>

            <div className='flex flex-row justify-between bg-white mx-[10px] py-[20px] rounded-xl mb-[5px]'>
                <input className='w-[240px] ml-[10px] h-[50px] text-4xl' placeholder='0'/>
                <Select icon={<MdArrowDropDown />} placeholder='Select token' className='my-[10px] text-xl text-center font-semibold'>
                    <option value='MATIC'>MATIC</option>
                    <option value='USDC'>USDC</option>
                </Select>
            </div>


            <div className='flex flex-row justify-between bg-white mx-[10px] py-[20px] rounded-xl mb-[20px]'>
                <input className='w-[240px] ml-[10px] h-[50px] text-4xl' placeholder='0'/>
                <Select placeholder='Select token' className='my-[10px] text-xl text-center font-semibold'>
                    <option value='MATIC'>MATIC</option>
                    <option value='USDC'>USDC</option>
                </Select>
            </div>
            
            <div>
            <button className='w-[95.5%] h-[60px] rounded-xl bg-slate-200 text-black mb-[10px] font-semibold text-xl'>Select a token</button>
            </div>
        </div>
    </div>
  )
}

export default Swap