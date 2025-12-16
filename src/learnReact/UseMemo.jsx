import React, {useMemo, useState} from 'react'

function expressiveFunction(number){
   console.log("start")
   const start = new Date();
   
   while((new Date() - start < 3000));
   console.log("the end", new Date() - start, "ms"); 
   return number * number;
}

export default function UseMemo() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(10);

  const number = useMemo(()=>{
    return expressiveFunction(num);
  },[num]) 

  return (
    <div>
        <h1>UseMemo</h1>
        <p>You click {count} times</p>
        <button onClick={()=>setCount(count + 1)}>click count</button>
        <p>Number : {number}</p>
        <button onClick={()=>setNum(num + 10)}>click num</button>
    </div>
    
  )
}
