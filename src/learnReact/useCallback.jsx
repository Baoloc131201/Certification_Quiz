import { Button } from '@mui/material'
import React, { useState } from 'react'

export default function useCallback() {
    //https://jsonplaceholder.typicode.com/users
    const [user,setUsers] = useState([]);

    const getData = (type) => {
        return fetch(`https://jsonplaceholder.typicode.com/${type}`);
    }

    const handleClick = () => {
        getData("users")
        .then(res => res.json())
        .then((res)=>{
            const user = res.data;
            setUsers(user);
        })
    }

  return (
    <div>
        <h1>Data:</h1>
        <Button onClick={handleClick}>Get User Data</Button>
        <p>{JSON.stringify(user)}</p>
    </div>
  )
}
