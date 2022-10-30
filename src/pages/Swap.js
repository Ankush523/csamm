import React, { useState } from "react";
import { Select } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import GetContract from "../hooks/GetContract";
import abi from '../SmartContracts/contracts/ABIs/CSAMMABI.json'
import { useContract, useSigner } from "wagmi";
import { ethers } from "ethers";


const Swap = () => {
  const [swaptoken1, setSwapToken1] = useState('Select Token');
  const [swaptoken2, setSwapToken2] = useState('Select Token');
  const [swapamount, setSwapAmount] = useState(0);
  const{data:signer}=useSigner();

  console.log(signer)

  const contract = new ethers.Contract('0x9400A4476ff0D02993a1D8AFEd99a17e80c430fE', abi, signer);

  console.log(contract)

  //const contract = GetContract();
  const doswap = async() => {

    const tx = await contract.swap(swaptoken1,swapamount.toString());
    await tx.wait();
    console.log(tx);
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col w-[32%] border-2 mt-[60px] rounded-2xl bg-opacity-10 bg-white">
        <label className="text-left pl-[15px] text-white my-[10px] font-semibold">
          Swap
        </label>

        <div className="flex flex-row justify-between bg-white mx-[10px] py-[20px] rounded-xl mb-[5px]">
          <input className="w-[235px] ml-[10px] h-[50px] text-4xl" placeholder="0" onChange={(e)=>setSwapAmount(e.target.value)}/>
          <Menu >
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} className="mr-[10px] h-[30px] my-[10px] font-semibold text-xl rounded-xl bg-slate-200 px-[10px]">
                <label>{swaptoken1}</label>
            </MenuButton>
            <MenuList className="bg-slate-900 text-white w-[fit-content] px-[10px] rounded-xl ml-[1px] pt-[3px]">
              <MenuItem  onClick={() => setSwapToken1('0x8059CAb268a92EcCEE353Ac0c504C3F14561B945')}>
                <Image
                  boxSize="2rem"
                  borderRadius="full"
                  src="https://cdn-icons-png.flaticon.com/512/7016/7016537.png"
                  alt="MATIC"
                  mr="12px"
                />
                <span>MATIC</span>
              </MenuItem>
              <MenuItem onClick={() => setSwapToken1('0xE2CE5601385801b4c62e05f9456bf7E549283be2')} minH="40px">
                <Image
                  boxSize="2rem"
                  borderRadius="full"
                  src="https://cdn-icons-png.flaticon.com/512/7016/7016549.png"
                  alt="USDC"
                  mr="12px"
                />
                <span>USDC</span>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>

        <div className="flex flex-row justify-between bg-white mx-[10px] py-[20px] rounded-xl mb-[20px]">
          <label className="w-[235px] ml-[10px] h-[50px] text-4xl" placeholder="0">{swapamount}</label>
          <Menu >
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} className="mr-[10px] h-[30px] my-[10px] font-semibold text-xl rounded-xl bg-slate-200 px-[10px]">
                <label>{swaptoken2}</label>
            </MenuButton>
            <MenuList className="bg-slate-900 text-white w-[fit-content] px-[10px] rounded-xl ml-[1px] pt-[3px]">
              <MenuItem  onClick={() => setSwapToken2('0x8059CAb268a92EcCEE353Ac0c504C3F14561B945')}>
                <Image
                  boxSize="2rem"
                  borderRadius="full"
                  src="https://cdn-icons-png.flaticon.com/512/7016/7016537.png"
                  alt="MATIC"
                  mr="12px"
                />
                <span>MATIC</span>
              </MenuItem>
              <MenuItem onClick={() => setSwapToken2('0xE2CE5601385801b4c62e05f9456bf7E549283be2')} minH="40px">
                <Image
                  boxSize="2rem"
                  borderRadius="full"
                  src="https://cdn-icons-png.flaticon.com/512/7016/7016549.png"
                  alt="USDC"
                  mr="12px"
                />
                <span>USDC</span>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>

        <div>
          <button className="w-[95.5%] h-[60px] rounded-xl bg-slate-200 text-black mb-[10px] font-semibold text-xl" onClick={() => doswap()}>
            Select a token
          </button>
        </div>
      </div>
    </div>
  );
};

export default Swap;
