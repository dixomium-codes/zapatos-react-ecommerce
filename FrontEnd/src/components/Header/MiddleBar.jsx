import Logo from "../../assets/images/logo";
import Search from "../../assets/icons/Search";
import Phone from "../../assets/icons/Phone";
import MailBox from "../../assets/icons/MailBox";
import Info from "../../assets/icons/Info";
import DownArrow from "../../assets/icons/Downarrow";
import Account from "../../assets/icons/Account";
import Wishlist from "../../assets/icons/WishList";
import Cart from "../../assets/icons/Cart";
import MiddleBarDividers from "../../assets/icons/MiddleBarDividers";

export default function MiddleBar() {
    return (
        <header className="hidden lg:flex  justify-between items-center py-3 px-6 bg-white gap-3">
            <div className="flex items-center gap-6 w-1/2">
                <Logo foot='#e2e2e2'/>
                {/* Search Bar */}
                <div className="flex items-center relative flex-grow max-w-md">
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
