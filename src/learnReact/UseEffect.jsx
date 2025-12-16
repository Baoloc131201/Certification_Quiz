import React, { useEffect, useState } from 'react'
// useEffect will be call when count variable changed and if variable is not transmitted in dependency, useEffect will not be call
export default function UseEffect() {
  const [count, setCount] = useState(0);
  const [action, setAction] = useState("");
  const [scroll, setScreenScroll] = useState("");

   useEffect(()=>{
     fetch(`https://reqres.in/api/${action}`)
     .then((res)=>res.json())
     .then((res)=>console.log(res))
     .catch((error)=>console.log(error))
     console.log("useEffect of action")
     // componentDidUpdate
   },[action]);
  
   const handleWork = () =>{
     setCount(count=> count + 1);
   }
   
   useEffect(()=>{
     document.title = `You clicked ${count} time`;
     console.log("useEffect of count");
     // componentDidUpdate
   },[count])

   useEffect(()=>{
    // componentDidMount
    document.addEventListener(("scroll"),() => {
      setScreenScroll(window.scrollY);
    }
    )

     return ()=>{
        // componentWillUnmount
        
     }
   })
  
  return (
    <div style={{height:"3000px"}}>
        <p>you clicked {count} times</p>
        <button onClick={handleWork}>Click</button>
        <button onClick={()=>setAction("users")}>Get User</button>
        <p style={{position:"fixed", bottom:"20px", left:"20px"}}>{scroll}</p>
    </div>
  )

  // componentDidMount	useEffect(() => { /* ... */ }, [])
  // componentDidUpdate	useEffect(() => { /* ... */ }, [deps]) (chạy khi deps đổi)
  // componentWillUnmount	useEffect(() => { return () => { /* cleanup */ } }, []) chạy ngay trước khi component bị gỡ khỏi DOM. Dùng để: hủy timer, hủy event listener, đóng WebSocket, abort fetch…
}
