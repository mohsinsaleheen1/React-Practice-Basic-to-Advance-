import React from 'react'

const Members = () => {
  if(2<4){
    throw new Error("Error")
  }
  return (
    <div className="border p-[10rem] w-[30rem]">
      Members
    </div>
  )
}
export default Members
