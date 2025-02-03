import Categories from "./Header/Categories";
import MiddleBar from "./Header/MiddleBar";
import TopBar from "./Header/TopBar";

export default function Header() {
    return (
        <>
            <header className="shadow-md">
                <TopBar />
                <MiddleBar />
                <Categories />
            </header>



        </>
    )
}