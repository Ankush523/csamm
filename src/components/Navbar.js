import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import {SearchIcon} from '@chakra-ui/icons';
const Navbar = () => {
    return (
        <div className='flex flex-row w-[100vw] bg-bgcolor h-[fit-content] p-[20px] justify-between'>
            <div className='flex flex-row justify-between gap-7'>
                <img src="https://cryptologos.cc/logos/sushiswap-sushi-logo.png?v=023" alt="" className='w-[40px] h-[40px]'/>
                <button className='text-bgtext text font-semibold hover:bg-hoverbg hover:rounded-md hover:text-white px-[10px]' >Swap</button>
                <button className='text-bgtext text font-semibold hover:bg-hoverbg hover:rounded-md hover:text-white px-[10px]' >Tokens</button>
                <button className='text-bgtext text font-semibold hover:bg-hoverbg hover:rounded-md hover:text-white px-[10px]' >Pool</button>
            </div>
            <input className='rounded-md w-[350px] px-[120px] bg-opacity-60 bg-black ' placeholder="Search tokens" />
            <ConnectButton/>
        </div>
    );
}
 
export default Navbar;