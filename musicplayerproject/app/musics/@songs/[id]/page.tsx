import React from 'react'

const Song = async({params}:{params:{id:string}}) => {
    const {id}= await params
  return (
    <div className='text-white text-2xl'>
      Song : {id}
    </div>
  )
}

export default Song
