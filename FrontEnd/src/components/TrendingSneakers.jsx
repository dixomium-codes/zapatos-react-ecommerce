import React from 'react'
import trend1 from '../../public/images/TRENDING1.png'
import trend2 from '../../public/images/TRENDING2.png'
import trend3 from '../../public/images/TRENDING3.png'
import trend4 from '../../public/images/TRENDING4.png'

export default function TrendingSneakers() {
    return (
        <div className='mx-[1vw]'>
            <div className='flex items-center mt-12 mx-[1vw] mb-12'>
                <div className='w-full border-t border-gray-200'></div>
                <h1 className='font-bold text-center whitespace-nowrap mx-2'>TRENDING SNEAKER STYLE</h1>
                <div className='w-full border-t border-gray-200'></div>
            </div>

            <div className='flex flex-col gap-2'>
                <img src={trend1} alt="" srcset="" />
                <div className='grid grid-cols-3 gap-2'>
                    <img src={trend2} alt="" srcset="" />
                    <img src={trend3} alt="" srcset="" />
                    <img src={trend4} alt="" srcset="" />
                </div>
            </div>




        </div>
    )
}
