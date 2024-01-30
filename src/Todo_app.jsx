import React from 'react'
import { useState } from 'react'

function Todo_app() {

  const[activity,setactivity] = useState('');
  const[listdata ,setlistdata] = useState([]);

  function handledata(e){

    e.preventDefault();
    
    const updatedlist = [...listdata, activity]; 
    console.log(updatedlist);
    setlistdata(updatedlist);
    setactivity('');
  }
  function removeitem(i){

    const newlist = listdata.filter((ele,id)=>{
      return (!(i==id));
    })
    setlistdata(newlist);
  }

  function removeall(){

    setlistdata([]);

  }
  return (
     <>
    
    <div className='bg-sky-200 w-full h-screen'>
      <div className='bg-blue-950 w-1/2 h-[550px] m-auto'>
    <h1 className='text-5xl font-bold  text-white  mt-2  text-center'>TODO-APP</h1><br/>
    <input type="text" value={activity} onChange={(e)=>{setactivity(e.target.value)}} 
    className='w-[400px] h-10 ml-10'/>
    
    <button onClick={handledata} className=' bg-green-600 p-2 w-28 h-10 ml-2'>ADD</button>
    <p className='bg-sky-200 w-[400px] h-10 ml-10 mt-8  font-bold text-3xl pl-2'>HERE IS YOUR LIST :{")"}</p>

    {listdata!=[] && listdata.map((data,i)=>{
      return( 
         <p key={i}>
          <div className='bg-sky-200 w-[400px] h-10 ml-10 mt-6 inline-block pl-2 pt-2'>{data}</div>
          <div className='inline-block bg-green-600  h-10 w-24 pl-2  pt-2 ml-2'>
          <button onClick={()=>removeitem(i)}>Remove(-)</button></div>
        </p>

      )
    })}

<div className='bg-green-600  pl-2 pt-2  w-24 h-10 ml-60 mt-6'><button onClick={removeall}>Remove All</button></div>


      </div>
    </div>

   
     </>

  )
    

}

export default Todo_app