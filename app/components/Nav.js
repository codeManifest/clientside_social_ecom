import Link from 'next/link'
import React from 'react'
import { RiHome8Fill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa6";
import { FiShoppingBag } from "react-icons/fi";
import { IoMdNotifications } from "react-icons/io";





function Nav() {
  let style_class = [
    'hover:scale-[1.2] transition-all '
  ]
  return (
    <nav className='flex gap-20' >
     <Link className={`${style_class}`} href={'/'}> <RiHome8Fill size={30}/> </Link>
     <Link  className={`${style_class}`}href={'/'}> <FaUsers size={30}/> </Link>

     <Link className={`${style_class}`} href={'/'}> <FiShoppingBag size={30}/> </Link>
     <Link className={`${style_class}`} href={'/'}> <IoMdNotifications size={30}/> </Link>

    </nav>
  )
}

export default Nav