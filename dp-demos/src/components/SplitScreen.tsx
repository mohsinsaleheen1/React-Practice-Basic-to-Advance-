import React, { type ReactNode } from 'react'
interface SplitScreenProps{
  children:[ReactNode,ReactNode];
  leftWeight:number;
  rightWeight:number;
}
const SplitScreen = ({children,leftWeight,rightWeight}:SplitScreenProps) => {
  const [left,right]=children
  const leftWidth = `${leftWeight}rem`
  const rightWidth = `${rightWeight}rem` 
  return (
    <section className='flex w-screen'>
      <div style={{width:leftWidth}} className='p-4'>{left}</div>
      <div style={{width:rightWidth}} className='p-4'>{right}</div>
    </section>  
  )
}

export default SplitScreen
