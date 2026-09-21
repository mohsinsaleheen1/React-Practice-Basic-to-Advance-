import React from 'react'
import Sidebar from '../components/Sidebar'
import { games } from '../db/data'
import Gamecard from '../components/Gamecard'

const Games = () => {
  return (
    <div className='flex h-screen'>
      {/* Sidebar */}
      <Sidebar/>
      <div className='flex-1 bg-gray-100 p-5'>
        <h1 className='text-2xl font-bold mb-4'>Featured Games</h1>
        <div className='flex gap-4'>
            <div className='flex gap-4'>
                {games.map(game => (
                    <Gamecard key={game.id} game={game}/>
                ))}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Games