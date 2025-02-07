import React from 'react'
import catgpic1 from '../assets/images/CARD.png'
import card2 from '../assets/images/CARD2.png'
import card3 from '../assets/images/CARD3.png'
import card4 from '../assets/images/CARD4.png'
import card5 from '../assets/images/CARD5.png'
import card6 from '../assets/images/CARD6.png'


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
                    <button className='bg-white px-2 py-1 absolute bottom-3 left-4 '>Men</button>
                </div>
                <div className='relative'> <img src={card2} alt="" srcset="" />
                    <button className='bg-white px-2 py-1 absolute bottom-3 left-4 '>Men</button>
                </div>
                <div className='relative'> <img src={card3} alt="" srcset="" />
                    <button className='bg-white px-2 py-1 absolute bottom-3 left-4 '>Men</button>
                </div>

                <div className='relative'><img src={card4} alt="" srcset="" />
                    <button className='bg-white px-2 py-1 absolute bottom-3 left-4 '>Men</button>
                </div>
                <div className='relative'><img src={card5} alt="" srcset="" />
                    <button className='bg-white px-2 py-1 absolute bottom-3 left-4 '>Men</button>
                </div>
                <div className='relative'><img src={card6} alt="" srcset="" />
                    <button className='bg-white px-2 py-1 absolute bottom-3 left-4 '>Men</button>
                </div>

            </div>


        </>

    )
}
