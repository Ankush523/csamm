import React, { useState } from "react";
import { Select } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Swap = () => {
    const [swaptoken1, setSwapToken1] = useState('Select Token');
    const [swaptoken2, setSwapToken2] = useState('Select Token');

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col w-[32%] border-2 mt-[60px] rounded-2xl bg-opacity-10 bg-white">
        <label className="text-left pl-[15px] text-white my-[10px] font-semibold">
          Swap
        </label>

        <div className="flex flex-row justify-between bg-white mx-[10px] py-[20px] rounded-xl mb-[5px]">
          <input className="w-[235px] ml-[10px] h-[50px] text-4xl" placeholder="0"/>
          <Menu >
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} className="mr-[10px] h-[30px] my-[10px] font-semibold text-xl rounded-xl bg-slate-200 px-[10px]">
                <label>{swaptoken1}</label>
            </MenuButton>
            <MenuList className="bg-slate-900 text-white w-[160px] px-[10px] rounded-xl ml-[1px] pt-[3px]">
              <MenuItem  onClick={() => setSwapToken1('MATIC')}>
                <Image
                  boxSize="2rem"
                  borderRadius="full"
                  src="https://cdn-icons-png.flaticon.com/512/7016/7016537.png"
                  alt="MATIC"
                  mr="12px"
                />
                <span>MATIC</span>
              </MenuItem>
              <MenuItem onClick={() => setSwapToken1('USDC')} minH="40px">
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
          <input
            className="w-[235px] ml-[10px] h-[50px] text-4xl"
            placeholder="0"
          />
          <Menu >
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} className="mr-[10px] h-[30px] my-[10px] font-semibold text-xl rounded-xl bg-slate-200 px-[10px]">
                <label>{swaptoken2}</label>
            </MenuButton>
            <MenuList className="bg-slate-900 text-white w-[160px] px-[10px] rounded-xl ml-[1px] pt-[3px]">
              <MenuItem  onClick={() => setSwapToken2('MATIC')}>
                <Image
                  boxSize="2rem"
                  borderRadius="full"
                  src="https://cdn-icons-png.flaticon.com/512/7016/7016537.png"
                  alt="MATIC"
                  mr="12px"
                />
                <span>MATIC</span>
              </MenuItem>
              <MenuItem onClick={() => setSwapToken2('USDC')} minH="40px">
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
          <button className="w-[95.5%] h-[60px] rounded-xl bg-slate-200 text-black mb-[10px] font-semibold text-xl">
            Select a token
          </button>
        </div>
      </div>
    </div>
  );
};

export default Swap;
