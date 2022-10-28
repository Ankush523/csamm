import React from 'react';
import { useContract } from 'wagmi';
import CSAMMABI from '../SmartContracts/contracts/ABIs/CSAMMABI.json';
import { useSigner } from 'wagmi';

const GetContract = () => {

    const{data:signer}=useSigner();

    const contract = useContract({
        addressOrName: '0x40575e43BB7eF49Ca7027BBBEDafb927aE93a676',
        contractInterface: CSAMMABI,
        signerOrProvider: signer,
      })

    return contract;
}
 
export default GetContract;