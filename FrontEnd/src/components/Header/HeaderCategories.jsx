import DownArrow from '../../assets/icons/Downarrow'
import Search from '../../assets/icons/Search'
import TruckFastIcon from '../../assets/icons/TruckFast'
export default function HeaderCategories() {
    return (
        <>
            <div className='hidden lg:block '>
                <ul className='bg-white flex items-center justify-center gap-[4vw] py-4 '>
                    <li className='flex items-center'><span className="font-medium ">MEN</span><DownArrow /></li>
                    <li className='flex items-center'><span className="font-medium">KIDS</span><DownArrow /></li>
                    <li className='flex items-center'><span className="font-medium">WOMEN</span><DownArrow /></li>
                    <li className='flex items-center'><span className="font-medium">SPORTS</span><DownArrow /></li>
                    <li className='flex items-center'><span className="font-medium">BRANDS</span><DownArrow /></li>
                    <li className='flex items-center'><span className="font-medium">SANDALS</span><DownArrow /></li>
                </ul></div>

            <div className=''>
                <div className="lg:hidden flex items-center relative flex-grow  py-2  mx-8 ">
                    <input
                        className="border border-black-300  p-2 w-full pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-black-500"
                        placeholder="Search for products"
                    />
                    <div className="absolute right-3 pointer-events-none">
                        <Search />
                    </div>


                </div>

                <div className='hidden items-center justify-center p-1 space-x-1.5 md:flex bg-gray-100 shadow-md lg:hidden'>
                    <div>
                        < TruckFastIcon color='black' />
                    </div>

                    <div>
                        <h1 className=" text-black text-[14px font-normal ">Spend $150 or more and get <u>FREE SHIPPING</u> on your order!</h1>
                    </div>
                </div>
            </div>
        </>
    )
}