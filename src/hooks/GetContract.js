import React from 'react';
import { useContract } from 'wagmi';
import CSAMMABI from '../SmartContracts/contracts/ABIs/CSAMMABI.json';
import { useSigner } from 'wagmi';

const GetContract = () => {

    const{data:signer}=useSigner();

    const contract = useContract({
        addressOrName: '0xAAc0E96668433475a9074a3a43080975a28EA947',
        contractInterface: CSAMMABI,
        signerOrProvider: signer,
      })

    return contract;
}
 
export default GetContract;