import Account from '../../assets/icons/Account';
import AccountOutline from '../../assets/icons/AccountOutline';
import Cart from '../../assets/icons/Cart';
import CartOutline from '../../assets/icons/CartOutline';
import Phone from '../../assets/icons/Phone';
import PhoneOutline from '../../assets/icons/PhoneOutline';
import TopBarDivider from '../../assets/icons/TopBarDivider';
import TruckFastIcon from '../../assets/icons/TruckFast'
import Wishlist from '../../assets/icons/WishList';
import WishListOutline from '../../assets/icons/WishListOutline';
import Humburger from '../../assets/images/Humburger';
import Logo from '../../assets/images/logo'

function TopBar() {


    return (
        <>
            <div className="bg-black ">
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

                    <div className=''>
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
