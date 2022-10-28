import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
const Navbar = () => {
    return (
        <div className='flex flex-row w-[100vw] bg-bgcolor h-[fit-content] p-[20px] justify-between'>
            <div className='flex flex-row justify-between gap-10'>
                <img src="https://cryptologos.cc/logos/sushiswap-sushi-logo.png?v=023" alt="" className='w-[40px] h-[40px]'/>
                <button className='text-bgtext text-xl font-mono hover:bg-hoverbg hover:rounded-md px-[10px]' >Swap</button>
                <button className='text-bgtext text-xl font-mono hover:bg-hoverbg hover:rounded-md px-[10px]' >Pool</button>
            </div>
            <ConnectButton/>
        </div>
    );
}
 
export default Navbar;