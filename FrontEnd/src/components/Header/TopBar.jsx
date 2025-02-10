import Account from '../../../public/icons/Account';
import AccountOutline from '../../../public/icons/AccountOutline';
import Cart from '../../../public/icons/Cart';
import CartOutline from '../../../public/icons/CartOutline';
import Phone from '../../../public/icons/Phone';
import PhoneOutline from '../../../public/icons/PhoneOutline';
import TopBarDivider from '../../../public/icons/TopBarDivider';
import TruckFastIcon from '../../../public/icons/TruckFast'
import Wishlist from '../../../public/icons/WishList';
import WishListOutline from '../../../public/icons/WishListOutline';
import Humburger from '../../../public/images/Humburger';
import Logo from '../../../public/images/logo'

function TopBar() {


    return (
        <>
            <div className="bg-black py-2 md:py-0">
                <div className='hidden lg:flex items-center justify-center p-1 space-x-1.5  '>
                    <div>
                        < TruckFastIcon />
                    </div>

                    <div>
                        <h1 className=" text-white text-[14px] font-light ">Spend $150 or more and get FREE SHIPPING on your order!</h1>
                    </div>
                </div>


                <div className='lg:hidden flex items-center justify-between px-8 '>
                    <Humburger color="white" />

                    <div className='w-[20vw]'>
                        <Logo color='white' foot='black' />
                    </div>

                    <PhoneOutline />
                    <TopBarDivider />
                    <div className='hidden md:flex'>
                    <AccountOutline  />
                    
                    </div>
                    <div className='hidden md:flex'>
                    <TopBarDivider />
                    </div>
                   
                    
                   
                    <WishListOutline />
                    <TopBarDivider />
                    <CartOutline />
                </div>

            </div>
        </>
    );
}

export default TopBar
