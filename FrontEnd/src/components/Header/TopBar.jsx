import Account from '../../assets/icons/Account';
import Cart from '../../assets/icons/Cart';
import Phone from '../../assets/icons/Phone';
import TruckFastIcon from '../../assets/icons/TruckFast'
import Wishlist from '../../assets/icons/WishList';
import Humburger from '../../assets/images/Humburger';
import Zapatos from '../../assets/images/Zapatos';

function TopBar() {


    return (
        <>
            <div className="bg-black ">
                <div className='flex items-center justify-center p-1 space-x-1.5  '>
                    <div>
                        < TruckFastIcon />
                    </div>

                    <div>
                        <h1 className=" text-white text-[14px] font-light ">Spend $150 or more and get FREE SHIPPING on your order!</h1>
                    </div>
                </div>


           

            </div>
        </>
    );
}

export default TopBar
