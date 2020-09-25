import React, { useCallback, useState } from 'react';
import { ShowIcrement } from './ShowIcrement';
import '.././02-useEffect/effect.css';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10)
    
    // const increment = () =>{
    //     setCounter(counter + 1);
    // }

    const increment = useCallback( ( num ) => {
        setCounter(c => c + num);
    }, [setCounter] );
    
    return (
        <div>
            <h1>useCallback Hoook: { counter }</h1>
            <hr />

        <ShowIcrement increment={ increment }/>
            
        </div>
    )
}
