import Logo from "../../assets/logo"
import Search from "../../assets/icons/Search"

export default function MiddleBar() {
    return (
        <>
            <div className="flex items-center  space-x-3 ">
                <Logo />
                <div className="flex items-center justify-center relative w-full p-">
                    <input className="px-3 border border-gray-900 p-1 w-full" placeholder="Search for products" />
                    <div className="absolute right-3 pointer-events-none">
                        <Search />
                    </div>

                </div>

            </div>

        </>
    )
}
