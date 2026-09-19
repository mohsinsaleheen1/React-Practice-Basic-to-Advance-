import React, { ReactNode } from 'react'
import "../globals.css"
import Link from 'next/link'
const AdminLayout = ({children}:{children:ReactNode}) => {
  return (
    <div className='min-h-screen flex flex-col'>
        {/* Admin Header */}
      <header className='bg-blue-800 text-white p-4'>
        <h1 className='text-2xl'>Admin Panel</h1>
        <nav>
            <ul className='flex space-x-4'>
                <li>
                    <Link href={"/admin/dashboard"} className='hover:text-gray-300'>Dashboard</Link>
                </li>
                <li>
                    <Link href={"/admin/users"} className='hover:text-gray-300'>Users</Link>
                </li>
                <li>
                    <Link href={"/admin/settings"} className='hover:text-gray-300'>Settings</Link>
                </li>
            </ul>
        </nav>
      </header>
      {/* main Content */}
      <div className='flex flex-1'>
        <aside className='w-64 bg-gray-100 p-4'>
            <ul>
                <li>
                    <Link href={"/admin/dashboard"}
                    className='block py-2 hover:bg-gray-300'>Dashboard</Link>
                </li>
                <li>
                    <Link href={"/admin/users"}
                    className='block py-2 hover:bg-gray-300'>Manage Users</Link>
                </li>
                <li>
                    <Link href={"/admin/settings"}
                    className='block py-2 hover:bg-gray-300'>Settings</Link>
                </li>
            </ul>
        </aside>
      </div>
      {/* Footer */}
        <footer className='bg-blue-800 text-white text-center p-4'>
            <p>&copy; 2026 ChallengeLayout NextJs</p>
        </footer>
    </div>
  )
}

export default AdminLayout
