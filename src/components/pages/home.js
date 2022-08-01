import React, { useState } from 'react'
import AfterConnect from '../HomeComponent/afterConnect';
import Connect from '../HomeComponent/connect';

export default function Home() {
    const [isConnected, setIsConnected] = useState(false);


    return (
        <>
            {isConnected ?
                <AfterConnect />
                :
                <Connect setIsConnected={setIsConnected} />
            }
        </>
    )

}