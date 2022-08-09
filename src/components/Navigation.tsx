import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <nav className='h-[50px] flex justify-between px-5 bg-gray-500 text-white items-center'>
        <span className='font-bold'>REACT</span>
        <span>
            <Link to='/' className='mr-10'>Products</Link>
              <Link to='/about' className='mr-5'>Adout</Link>
        </span>

    </nav>
  )
}
