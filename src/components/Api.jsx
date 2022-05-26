import React from 'react'
import { useEffect, useState } from 'react';
import axios from "axios"
const Api = () => {
    const [page,setPage] = useState(1)
    const [totalcount,setTotalcount]= useState(0)
    const [limit,setLimit] = useState(5)
    const [todos,setTodos] = useState([])
    useEffect(() =>{
        const data = async () => {
          let res = await axios.get(`http://localhost:3000/todos?_page=${page}&_limit=${limit}`)
          setTodos(res.data)
          setTotalcount(Number(res.headers["x-total-count"]))
          console.log(res)
        }
        data()
      },[page,limit])
  return (
    <div>
           {todos.map((todo)=>(
        <h2 key={todo.id}>{todo.text}</h2>
      ))}
      <button
      disabled={page<=1}
       onClick={()=>{ 
          setPage(page-1)
      }}>{"<"}</button>
      <i>{page}</i>
      <button disabled={totalcount<=page*limit} onClick={()=>setPage(page+1)}>{">"}</button>
      <select onChange={(e)=>setLimit(Number(e.target.value))}>
          <option value={5}>5</option>
          <option value={10}>10</option>
      </select>
    </div>
  )
}

export default Api