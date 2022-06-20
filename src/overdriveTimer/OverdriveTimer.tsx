import React from 'react';
import './overdriveTimer.css';
import { useState, useEffect} from 'react';
import { connect } from 'react-redux';



const OverdriveTimer = ({canselOverdrive}:{canselOverdrive:any}) => {
  
    const [seconds, setSeconds] = useState(10);
  

    useEffect(()=>{
        const timer = seconds > 0 && setInterval(() => setSeconds(seconds - 1), 1000);
        seconds<=0&&canselOverdrive();
      return () => 
        clearInterval(timer as any);
    }, [seconds, canselOverdrive]);
  


    return (
        <div id="overdrive-timer">

           <p>{seconds}</p>

        </div>
    )
}

const mapStateToProps = (state:any) => ({ counter: state.counter.counter as any , level: state.level.level as any});
const mapDispatchToProps = (dispatch:any) => {
    return {
      // dispatching plain actions
      canselOverdrive: () => dispatch({ type: 'CANSEL_OVERDRIVE' }) as any,
    
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(OverdriveTimer);