import React from 'react'
import CartegoryPointerArrow from '../assets/icons/CartegoryPointerArrow'
import BlogIm1 from '../assets/images/BlogIm1.png'
import BlogIm2 from '../assets/images/BlogIm2.png'
import BlogIm3 from '../assets/images/BlogIm3.png'
import BlogIm4 from '../assets/images/BlogIm4.png'
import ReadMoreArrow from '../assets/icons/ReadMoreArrow'
import ActiveSlideDot from '../assets/icons/ActiveSlideDot'
import InnactiveSlideDot from '../assets/icons/InnactiveSlideDot'

export default function Blogs() {
    return (
        <div className='mx-[1vw] mb-10'>
            <div className='flex items-center justify-center mx-[1vw] mt-10'>
                <div className=' border-t border-[#ececec] w-full'></div>
                <div><span className='font-bold mx-2 text-2xl'>BLOGS</span></div>
                <div className='border-t border-[#ececec] w-full'></div>
            </div>

            <div className='flex items-center gap-2 mt-4 justify-center'>
                <span className='text-sm'>See all</span>
                <CartegoryPointerArrow />
            </div>

            <div className='grid grid-cols-4 gap-3 mt-15 '>
                <div className='flex flex-col '>
                    <img src={BlogIm1} alt="" srcset="" className='rounded-t' />
                    <div className='bg-gray-100 py-4 rounded-b flex flex-col gap-4 px-4' >
                        <span className='truncate font-medium text-xl'>Step Into Style: The Hottest Sneaker Trends of the Season</span>
                        <span className='text-xs'>Explore the must-have sneakers dominating streetwear and sportswear this year.</span>
                        <div className='flex mt-4 mb-4 items-center gap-2'>
                            <span className='text-xs font-light'>Read more</span>
                            <div className='relative top-0.5'>
                                <ReadMoreArrow />
                            </div>

                        </div>

                    </div>

                </div>
                <div className='flex flex-col '>
                    <img src={BlogIm2} alt="" srcset="" className='rounded-t' />
                    <div className='bg-gray-100 py-4 rounded-b flex flex-col gap-4 px-4' >
                        <span className='truncate font-medium text-xl'>Running on Clouds: Best Performance Shoes for Every Athlete</span>
                        <span className='text-xs'>Discover the top sneakers that blend speed, comfort, and style for peak performance.</span>
                        <div className='flex mt-4 mb-4 items-center gap-2'>
                            <span className='text-xs font-light'>Read more</span>
                            <div className='relative top-0.5'>
                                <ReadMoreArrow />
                            </div>

                        </div>

                    </div>

                </div>
                <div className='flex flex-col '>
                    <img src={BlogIm3} alt="" srcset="" className='rounded-t' />
                    <div className='bg-gray-100 py-4 rounded-b flex flex-col gap-4 px-4' >
                        <span className='truncate font-medium text-xl'>From Courts to Streets: How High-Tops Became a Fashion Staple</span>
                        <span className='text-xs'>Uncover the journey of high-top sneakers from sports arenas to everyday wear.</span>
                        <div className='flex mt-4 mb-4 items-center gap-2'>
                            <span className='text-xs font-light'>Read more</span>
                            <div className='relative top-0.5'>
                                <ReadMoreArrow />
                            </div>

                        </div>

                    </div>

                </div>
                <div className='flex flex-col '>
                    <img src={BlogIm4} alt="" srcset="" className='rounded-t' />
                    <div className='bg-gray-100 py-4 rounded-b flex flex-col gap-4 px-4' >
                        <span className='truncate font-medium text-xl'>Sustainable Kicks: Eco-Friendly Sneakers You’ll Love"</span>
                        <span className='text-xs'>Find stylish, sustainable footwear that’s good for your feet—and the planet.</span>
                        <div className='flex mt-4 mb-4 items-center gap-2'>
                            <span className='text-xs font-light'>Read more</span>
                            <div className='relative top-0.5'>
                                <ReadMoreArrow />
                            </div>

                        </div>

                    </div>


                </div>

            </div>
            <div className='flex items-center gap-2 justify-center mt-10'>
                <ActiveSlideDot />
                <InnactiveSlideDot />
                <InnactiveSlideDot />
                <InnactiveSlideDot />
            </div>
        </div>
    )
}
