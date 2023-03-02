import React from 'react'
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
// import { useProductsContext } from '../context/products_context'
// import { useCartContext } from '../context/cart_context'
// import { useUserContext } from '../context/user_context'

const CartButtons = () => {
  return (
    <div className='flex items-center justify-between m-auto gap-5 ]'>
      {/* CART BTN */}
      <Link to='/cart' className='flex '>
        <p className='hidden md:block text-2xl'> Cart</p>
        <div className='relative items-center'>
          <FaShoppingCart size={30} className='flex z-10  ml-1 ' />
          <span className='absolute top-[-20px] left-[25px] z-20 text-black rounded-full bg-red-300  p-1 text-lg'>
            12
          </span>
        </div>
        {/* LOGIN BTN */}
      </Link>
      <div type='button' className='flex '>
        <p className='hidden md:block text-2xl'> Login</p>
        <FaUserPlus size={30} className=' ml-1' />
      </div>
    </div>
  )
}

export default CartButtons
