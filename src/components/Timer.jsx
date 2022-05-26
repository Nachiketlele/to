import React, { useState } from 'react'

const Timer = () => {
    const [watch,setWatch] = useState(0)
    const [timer,setTimer]=useState(null)

    const start = ()=>{
            let id = setInterval(()=>{
              setWatch((show)=>show+1)
            },1000)
            setTimer(id)
    }
    const pause = () =>{
        clearInterval(timer)
    }
    const reset = () =>{
        clearInterval(timer)
        setWatch(0)
    }
  return (
    <div>
          <h1>{watch}</h1>
        <button onClick={start}><i class="fa-solid fa-play"></i></button>
        <button onClick={pause} ><i class="fa-solid fa-pause"></i></button>
        <button onClick={reset}><i class="fa-solid fa-arrow-rotate-left"></i></button>
    </div>
  )
}

export default Timer