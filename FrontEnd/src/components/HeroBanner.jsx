
import Zapatos from "../assets/images/Zapatos";
import MyImage from "../assets/images/image 29.png";
import LeftArrow from "../assets/icons/LeftArrow"

import RightArrow from "../assets/icons/RightArrow";
import HeroTable from "../assets/images/heroTable";
export default function () {
    return (
        <>
            <div className="flex items-center  relative justify-center bg-amber-100">
                <div className="absolute flex z-100 items-center justify-between top-75 gap-300">
                    <LeftArrow />
                    <RightArrow />
                </div>

                <div className="absolute flex z-100 items-center justify-between top-100 gap-120">
                    <div className="">
                    <span className="font-bold">
                        Discover the latest drops, limited editions, and <br/>classic styles designed for every step of your <br/>journey
                    </span>
                    </div>
                    
                    <div className="flex flex-col items-end gap-6">
                        <span className="font-bold">Quality you can count on </span>
                        <HeroTable />
                    </div>

                </div>




                <div className="relative flex justify-center ">
                    <Zapatos />

                    <img src={MyImage} alt="Hero Image" className="absolute top-40 w-md" />

                </div>
            </div>


        </>
    )
}