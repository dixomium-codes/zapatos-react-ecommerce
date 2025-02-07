import Categories from "./Header/HeaderCategories";
import MiddleBar from "./Header/MiddleBar";
import TopBar from "./Header/TopBar";

export default function Header() {
    return (
        <>
            <div className="shadow-md shadow-gray-300 relative z-50"> <TopBar />
                <MiddleBar />
                <Categories /></div>

        </>
    )
}