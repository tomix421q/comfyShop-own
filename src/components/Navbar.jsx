import React from 'react'
import logo from '../assets/logo.svg'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { links } from '../utils/constants'
import CartButtons from './CartButtons'
import { useProductsContext } from '../context/products_context'
import { useUserContext } from '../context/user_context'

const Navbar = () => {
  return (
    <>
      <div className='flex h-[5rem] bg-gray-400 justify-between items-center w-full mx-auto max-w-[1430px] md:p-6'>
        <Link to='/'>
          <img className='w-44 ' src={logo} alt='/' />
        </Link>

        <ul className='hidden md:flex space-x-8'>
          {links.map((link) => {
            const { id, text, url } = link
            return (
              <li
                key={id}
                className='lg:text-3xl  text-[1rem] uppercase hover:border-b'
              >
                <Link to={url}>{text}</Link>
              </li>
            )
          })}
        </ul>

        <div className='flex gap-4'>
          <CartButtons />
          <div className='p-2 flex md:hidden' type='button'>
            <FaBars size={30} />
          </div>
        </div>
      </div>
    </>
  )
}
export default Navbar
