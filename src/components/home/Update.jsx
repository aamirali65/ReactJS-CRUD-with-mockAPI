import React from 'react'

const Update = () => {
  return (
    <div className='flex flex-col justify-center items-center m-5'>
    <div id="header" className='flex items-center justify-between w-full p-5 bg-sky-500'>
        <div id="logo" className='text-white text-2xl'><h1>User <strong>Management</strong></h1></div>
        <div id="nav" className='flex gap-5'>
            <input type="text" className='p-1 px-2' placeholder='Type to search'/>
            <button className='px-5 py-2 bg-slate-800 text-white'><span className='fa fa-search'></span></button>
            <button className='flex flex-row gap-2 items-center bg-white text-black px-5'><span className='fa fa-user'></span>Add New User</button>
            <button className='flex flex-row gap-2 items-center bg-white text-black px-5'>Log Out</button>
        </div>
    </div>
   
</div>
  )
}

export default Update