import React, { useState, useRef,useEffect } from 'react'

export const Timer = () => {

    const [time, setTime] = useState(0)
    const interValRef = useRef(null)
    const [running, setRunning] = useState(true)


    const handleStart = () => {
        clearInterval(interValRef.current);
        if (running) {
            interValRef.current = setInterval(() => {
                setTime((time) => time + 1)
            }, 1000)
        }
        return () => clearInterval(interValRef.current)
    }

    const Reset = () => {
        setTime(0)
        clearInterval(interValRef.current)
    }

    const Pause = () => {
        setRunning(false)
    }

    const Resume=()=>{
        setRunning(true)
    }

    useEffect(() => {
        if (running) {
            handleStart(); 
        }
        return () => {
          clearInterval(interValRef.current); 
        };
      }, [running]); 

    return (
        <> 
        

            <div id="form">
                <div>
                    {time}
                </div>
                <button onClick={handleStart}>Start</button>
                <button onClick={running ? Pause : Resume}>
                    {running ? 'Pause' : 'Resume'}
                </button>
                <button onClick={Reset}>Reset</button>
            </div>
        </>
    )
}

export default Timer

