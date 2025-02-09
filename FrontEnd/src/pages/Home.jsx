import Cartegories from "../components/Cartegories";
import Header from "../components/Header";
import HappeningNow from "../components/HappeningNow";
import HeroBanner from "../components/HeroBanner";
import TrendingSneakers from "../components/TrendingSneakers";
import Brands from "../components/Brands";
import Blogs from "../components/Blogs";
import NewsletterForm from "../components/NewsletterForm";

export default function Home() {
    return (
        <>
            <Header />
            <HeroBanner />
            <Cartegories />
            <HappeningNow />
            <TrendingSneakers/>
            <Brands/>
            <Blogs/>
            <NewsletterForm/>
        </>

    )
}