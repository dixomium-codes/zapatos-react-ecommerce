import React from 'react'
import CartegoryPointerArrow from '../assets/icons/CartegoryPointerArrow'
import Brooks from '../assets/images/Brooks.png'
import Vans from '../assets/images/Vans.png'
import Fila from '../assets/images/Fila.png'
import Nike from '../assets/images/Nike.png'
import Mizuno from '../assets/images/Mizuno.png'
import Salomon from '../assets/images/Salomon.png'
import Adidas from '../assets/images/Adidas.png'

export default function Brands() {
    return (

        <>
            <div className='flex items-center justify-center mx-[1vw] mt-10'>
                <div className=' border-t border-[#ececec] w-full'></div>
                <div><span className='font-bold mx-2 text-2xl'>BRANDS</span></div>
                <div className='border-t border-[#ececec] w-full'></div>
            </div>
           
            <div className='flex items-center gap-2 mt-4 justify-center'>
                <span className='text-sm'>See all</span>
                <CartegoryPointerArrow />
            </div>

            <div className='flex items-center justify-between my-15 mx-[1vw]'>
               <img src={Brooks} alt="" srcset="" />
               <img src={Vans} alt="" srcset="" />
               <img src={Fila} alt="" srcset="" />
               <img src={Nike} alt="" srcset="" />
               <img src={Mizuno} alt="" srcset="" />
               <img src={Salomon} alt="" srcset="" />
               <img src={Adidas} alt="" srcset="" />
            </div>

        </>



    )
}
