import React from 'react';
import { useState, useEffect} from 'react';



const OverdriveTimer = () => {
  
    const [seconds, setSeconds] = useState(10);
  

    useEffect(()=>{
        const timer = seconds > 0 && setInterval(() => setSeconds(seconds - 1), 1000);
      return () => clearInterval(timer as any);
    }, [seconds]);
  


    return (
        <div id="overdrive-timer">

           <p>{seconds}</p>

        </div>
    )
}

export default OverdriveTimer;