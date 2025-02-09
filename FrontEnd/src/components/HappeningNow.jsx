import React from 'react'

import CartegoryPointerArrow from '../assets/icons/CartegoryPointerArrow'
import Brook1 from '../assets/images/brook-ghost-15.png'
import Brook2 from '../assets/images/brook-ghost-15(2).png'
import Brook3 from '../assets/images/brook-ghost-15(3).png'
import Brook4 from '../assets/images/brook-ghost-15(4).png'
import AddToWish from '../assets/icons/AddToWish'
import FullStar from '../assets/icons/FullStar'
import HalfStar from '../assets/icons/HalfStar'
import Avatar from '../assets/images/Avatar.png'
import ActiveSlideDot from '../assets/icons/ActiveSlideDot'
import InnactiveSlideDot from '../assets/icons/InnactiveSlideDot'

export default function HappeningNow() {
    return (

        <>
            <div className='flex items-center mt-12 mx-[1vw] '>
                <div className='w-full border-t border-gray-200'></div>
                <h1 className='font-bold text-center whitespace-nowrap mx-2'>HAPPENING NOW!</h1>
                <div className='w-full border-t border-gray-200'></div>
            </div>
            <div className='flex items-center justify-center gap-2 mt-4'>
                <span className=' text-center text-sm'>See all</span>
                <CartegoryPointerArrow />
            </div>

            <div className="grid grid-cols-4 gap-8 mx-[1vw] mt-10 mb-4  auto-rows-fr">
                <div className='flex flex-col gap-2'>
                    <div className='bg-[#ececec]'>
                        <span className='relative px-2 py-1 top-3 left-2 bg-[#D9D9D9] shadow-md font-medium'>SALE!</span>
                        <img src={Brook1} alt="" srcset="" />
                        <div className='float-right relative right-5 bottom-4'><AddToWish /> </div>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <h1 className='font-medium'>BROOKS GHOST 15</h1>
                        <div className='flex items-center gap-2 '>
                            <div className='flex items-center '>
                                <FullStar />
                                <FullStar />
                                <FullStar />
                                <FullStar />
                                <HalfStar />
                            </div>
                            <div>
                                <span className='text-s font-normal'>4.9 </span>
                                <span className='text-s font-light text-[#888]'>(15 reviews)</span>
                            </div>

                        </div>

                        <div className='flex items-center gap-1'>
                            <span className='text-xs text-[#888] line-through font-light'>$775.00</span>
                            <span className="font-bold">$299.00</span>
                        </div>

                        <div className='flex items-center gap-2 my-4'>
                            <img src={Avatar} alt="" />
                            <img src={Avatar} alt="" />
                            <img src={Avatar} alt="" />

                            <span className='text-xs text-[#888] '>+3 Style</span>


                        </div>


                    </div>
                    <div className='flex flex-col'>
                        <span className='text-sm text-[#888]'>Specification:</span>
                        <span className='text-sm'>Running, Engineering, Mesh</span>
                    </div>
                </div>



                <div className='flex flex-col gap-2'>
                    <div className='bg-[#ececec]'>
                        <span className='relative px-2 py-1 top-3 left-2 bg-[#D9D9D9] shadow-md font-medium'>SALE!</span>
                        <img src={Brook2} alt="" srcset="" />
                        <div className='float-right relative right-5 bottom-4'><AddToWish /> </div>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <h1 className='font-medium'>BROOKS GHOST 15</h1>
                        <div className='flex items-center gap-2 '>
                            <div className='flex items-center '>
                                <FullStar />
                                <FullStar />
                                <FullStar />
                                <FullStar />
                                <HalfStar />
                            </div>
                            <div>
                                <span className='text-s font-normal'>4.9 </span>
                                <span className='text-s font-light text-[#888]'>(15 reviews)</span>
                            </div>

                        </div>

                        <div className='flex items-center gap-1'>
                            <span className='text-xs text-[#888] line-through font-light'>$775.00</span>
                            <span className="font-bold">$299.00</span>
                        </div>

                        <div className='flex items-center gap-2 my-4'>
                            <img src={Avatar} alt="" />
                            <img src={Avatar} alt="" />
                            <img src={Avatar} alt="" />

                            <span className='text-xs text-[#888] '>+3 Style</span>


                        </div>


                    </div>
                    <div className='flex flex-col'>
                        <span className='text-sm text-[#888]'>Specification:</span>
                        <span className='text-sm'>Running, Engineering, Mesh</span>
                    </div>
                </div>

                <div className='flex flex-col gap-2'>
                    <div className='bg-[#ececec]'>
                        <span className='relative px-2 py-1 top-3 left-2 bg-[#D9D9D9] shadow-md font-medium'>SALE!</span>
                        <img src={Brook3} alt="" srcset="" />
                        <div className='float-right relative right-5 bottom-4'><AddToWish /> </div>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <h1 className='font-medium'>BROOKS GHOST 15</h1>
                        <div className='flex items-center gap-2 '>
                            <div className='flex items-center '>
                                <FullStar />
                                <FullStar />
                                <FullStar />
                                <FullStar />
                                <HalfStar />
                            </div>
                            <div>
                                <span className='text-s font-normal'>4.9 </span>
                                <span className='text-s font-light text-[#888]'>(15 reviews)</span>
                            </div>

                        </div>

                        <div className='flex items-center gap-1'>
                            <span className='text-xs text-[#888] line-through font-light'>$775.00</span>
                            <span className="font-bold">$299.00</span>
                        </div>

                        <div className='flex items-center gap-2 my-4'>
                            <img src={Avatar} alt="" />
                            <img src={Avatar} alt="" />
                            <img src={Avatar} alt="" />

                            <span className='text-xs text-[#888] '>+3 Style</span>


                        </div>


                    </div>
                    <div className='flex flex-col'>
                        <span className='text-sm text-[#888]'>Specification:</span>
                        <span className='text-sm'>Running, Engineering, Mesh</span>
                    </div>
                </div>


                <div className='flex flex-col gap-2'>
                    <div className='bg-[#ececec]'>
                        <span className='relative px-2 py-1 top-3 left-2 bg-[#D9D9D9] shadow-md font-medium'>SALE!</span>
                        <img src={Brook4} alt="" srcset="" />
                        <div className='float-right relative right-5 bottom-4'><AddToWish /> </div>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <h1 className='font-medium'>BROOKS GHOST 15</h1>
                        <div className='flex items-center gap-2 '>
                            <div className='flex items-center '>
                                <FullStar />
                                <FullStar />
                                <FullStar />
                                <FullStar />
                                <HalfStar />
                            </div>
                            <div>
                                <span className='text-s font-normal'>4.9 </span>
                                <span className='text-s font-light text-[#888]'>(15 reviews)</span>
                            </div>

                        </div>

                        <div className='flex items-center gap-1'>
                            <span className='text-xs text-[#888] line-through font-light'>$775.00</span>
                            <span className="font-bold">$299.00</span>
                        </div>

                        <div className='flex items-center gap-2 my-4'>
                            <img src={Avatar} alt="" />
                            <img src={Avatar} alt="" />
                            <img src={Avatar} alt="" />

                            <span className='text-xs text-[#888] '>+3 Style</span>


                        </div>


                    </div>
                    <div className='flex flex-col'>
                        <span className='text-sm text-[#888]'>Specification:</span>
                        <span className='text-sm'>Running, Engineering, Mesh</span>
                    </div>
                </div>

            </div>
            <div className='flex items-center gap-2 justify-center mt-20'>
                <ActiveSlideDot />
                <InnactiveSlideDot/>
                <InnactiveSlideDot/>
                <InnactiveSlideDot/>
            </div>
        </>
    )
}
