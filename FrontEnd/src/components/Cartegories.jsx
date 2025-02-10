import React from 'react'
import catgpic1 from '../../public/images/CARD.png'
import card2 from '../../public/images/CARD2.png'
import card3 from '../../public/images/CARD3.png'
import card4 from '../../public/images/CARD4.png'
import card5 from '../../public/images/CARD5.png'
import card6 from '../../public/images/CARD6.png'
import RightPointerArrow from '../../public/icons/RightPointerArrow'
import CartegoryPointerArrow from '../../public/icons/CartegoryPointerArrow'


export default function Cartegories() {
    return (
        <>
            <div className='flex items-center justify-between mx-4 mt-8 mb-4'>
                <div className=' border-t w-full  border-gray-300  '></div>
                <h2 className='font-bold text-center whitespace-nowrap mx-2 '>FIND YOUR PERFECT PAIR</h2>
                <div className='border-t w-full border-gray-300 '></div>

            </div>

            <div className='grid grid-cols-3 grid-rows-2 gap-4 mx-4'>
                <div className='relative'><img src={catgpic1} alt="" srcset="" />
                    <div className='bg-white px-2 py-1 absolute bottom-3 left-4 flex items-center gap-2  shadow-sm'>
                        <button className='font-medium text-lg'>MEN</button>

                        <CartegoryPointerArrow />


                    </div>
                </div>
                <div className='relative'> <img src={card2} alt="" srcset="" />
                    <div className='bg-white px-2 py-1 absolute bottom-3 left-4 flex items-center gap-2  shadow-sm'>
                        <button className='font-medium text-lg'>KIDS</button>

                        <CartegoryPointerArrow />


                    </div>
                </div>
                <div className='relative'> <img src={card3} alt="" srcset="" />
                    <div className='bg-white px-2 py-1 absolute bottom-3 left-4 flex items-center gap-2  shadow-sm'>
                        <button className='font-medium text-lg'>WOMEN</button>

                        <CartegoryPointerArrow />


                    </div>
                </div>

                <div className='relative'><img src={card4} alt="" srcset="" />
                    <div className='bg-white px-2 py-1 absolute bottom-3 left-4 flex items-center gap-2  shadow-sm'>
                        <button className='font-medium text-lg'>SPORTS</button>

                        <CartegoryPointerArrow />


                    </div>
                </div>
                <div className='relative '><img src={card5} alt="" srcset="" />
                    <div className='bg-white px-2 py-1 absolute bottom-3 left-4 flex items-center gap-2  shadow-sm'>
                        <button className='font-medium text-lg'>BRANDS</button>

                        <CartegoryPointerArrow />


                    </div>

                </div>
                <div className='relative'><img src={card6} alt="" srcset="" />
                    <div className='bg-white px-2 py-1 absolute bottom-3 left-4 flex items-center gap-2  shadow-sm'>
                        <button className='font-medium text-lg'>SANDALS</button>

                        <CartegoryPointerArrow />


                    </div>
                </div>

            </div>


        </>

    )
}
