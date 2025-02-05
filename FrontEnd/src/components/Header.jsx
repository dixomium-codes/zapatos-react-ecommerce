import Categories from "./Header/Categories";
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