import React from 'react'
import { FaUser } from 'react-icons/fa'

const UsersDetails = () => {
  const user = {
    name:"John Doe",
    email:"john.doe@example.com",
    role:"Admin",
    status:"Active",
    bio:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem saepe, quis dignissimos, velit error sint eaque excepturi debitis omnis, voluptas natus nisi molestias porro aut non numquam reiciendis dolorem. Suscipit maiores sunt ratione ullam quam fugit omnis! Officiis minima magni iure quidem possimus repellat eligendi, provident ipsa ullam animi ex amet voluptatum fuga qui earum, corporis recusandae libero, labore nemo ea? Hic placeat facere non quam dolorum aperiam, quos soluta!",
    profilePicture:<FaUser className='w-10 h-10 object-cover'/>,
    activities:[
      {id: 1, description: "Updated password", timestamp: "2025-02-01"},
      {id: 2, description: "Change email address", timestamp: "2025-01-25"},
      {id: 3, description: "Logged in from a new device", timestamp: "2025-01-15"}
    ]
  }
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8'>
      <div className='max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8'>
        <div className='flex items-center mb-8'>
          <span className='w-20 h-20 rounded-full flex justify-center items-center bg-gray-100 object-cover mr-6'>{user.profilePicture}</span>
          <div>
            <h1 className='text-3xl font-bold text-gray-800'>{user.name}</h1>
            <p className='text-sm text-gray-600'>{user.email}</p>
            <p className='text-sm text-gray-600'>{user.role}</p>
            <p className={`text-sm mt-2 ${user.status === "Active" ? "text-green-500":"text-red-500"}`}>
              Status:{user.status}
            </p>
          </div>
        </div>
        {/* Bio Section */}
        <div className='mb-8'>
          <h2 className='text-xl font-semibold text-gray-700 mb-4'>About</h2>
          <p className='text-gray-600'>{user.bio}</p>
        </div>
        {/* Activities timeLine */}
        <div className='mb-8'>
          <h2 className='text-xl font-semibold text-gray-700 mb-4'>Recent Activities</h2>
          <ul className='space-y-2'>
            {user.activities.map((activiy)=>(
              <li key={activiy.id} className='flex items-center space-x-4'>
                <div className='bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center'>
                  <span>A</span>
                </div>
                <div>
                  <p className='text-gray-700'>{activiy.description}</p>
                  <p className='text-sm text-gray-500'>{activiy.timestamp}</p>
                </div>
              </li>
            ))}
            
          </ul>
        </div>
         {/* Action Settings */}
        <div className='flex justify-end space-x-4'>
          <button className='px-6 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors'>Cancel</button>
          <button className='px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors'>Save Changes</button>
        </div>
      </div>
    </div>
  )
}

export default UsersDetails
