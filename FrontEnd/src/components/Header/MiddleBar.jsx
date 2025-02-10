import Logo from "../../../public/images/logo";
import Search from "../../../public/icons/Search";
import Phone from "../../../public/icons/Phone";
import MailBox from "../../../public/icons/MailBox";
import Info from "../../../public/icons/Info";
import DownArrow from "../../../public/icons/Downarrow";
import Account from "../../../public/icons/Account";
import Wishlist from "../../../public/icons/WishList";
import Cart from "../../../public/icons/Cart";
import MiddleBarDividers from "../../../public/icons/MiddleBarDividers";

export default function MiddleBar() {
    return (
        <header className="hidden lg:flex  justify-between items-center py-3 px-6 bg-white gap-3 ">
            <div className="flex items-center gap-6 w-1/2">
            <div className="w-[12vw]">
            <Logo foot='#e2e2e2'/>
            </div>

       
                {/* Search Bar */}
                <div className="flex items-center relative flex-grow max-w-sm">
                    <input
                        className="border border-black-300  p-2 w-full pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-black-500"
                        placeholder="Search for products"
                    />
                    <div className="absolute right-3 pointer-events-none">
                        <Search />
                    </div>
                </div>
            </div>

            {/* Navigation List */}
            <ul className="flex items-center text-gray-700 text-sm font-medium">
                <li className="flex items-center gap-2 px-4 whitespace-nowrap"><Phone /><span>(804) 6623-9999</span></li>
                <MiddleBarDividers/>
                <li className="flex items-center gap-2 px-4"><MailBox /><span>supportoursmallbusiness@g.com</span></li>
                <MiddleBarDividers/>
                <li className="flex items-center gap-2 px-4"><Info /><span>Info</span><DownArrow /></li>
                <MiddleBarDividers/>
                <li className="flex items-center gap-2 px-4"><Account /><DownArrow /></li>
                <MiddleBarDividers/>
                <li className="flex items-center px-4"><Wishlist /></li>
                <MiddleBarDividers/>
                <li className="flex items-center px-4"><Cart /></li>
            </ul>
        </header>
    );
}
