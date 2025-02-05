
import Zapatos from "../assets/images/Zapatos";
import MyImage from "../assets/images/image 29.png";
import LeftArrow from "../assets/icons/LeftArrow"

import RightArrow from "../assets/icons/RightArrow";
import HeroTable from "../assets/images/heroTable";
export default function () {
    return (
        <>
            <div className="flex items-center  relative justify-center bg-gray-100 h-screen  lg:mx-[1vw]">

                <div className="relative flex justify-center  ">
                    <div className="w-[90vw] relative bottom-20 ">
                        <Zapatos />
                    </div>

                    <img src={MyImage} alt="Hero Image" className="absolute  w-[35vw] h-auto " />
                </div>

                <div className="absolute flex items-center gap-[87vw] top-[55vh]">
                    <div  className="w-[3vw] ">
                    <LeftArrow />
                    </div>
                    <div className="w-[3vw]">
                    <RightArrow />
                    </div>
                   
                </div>

                <div className="absolute   items-center top-[65vh] gap-[38vw] hidden lg:flex mx-4">
                    <div className="">
                        <span className="font-medium text-lg">
                            Discover the latest drops, limited editions, and <br />classic styles designed for every step of your <br />journey
                        </span>
                    </div>

                    <div className="flex flex-col items-end gap-5">
                        <span className="font-medium text-lg">Quality you can count on </span>
                        <div className="w-[55vh]">
                        <HeroTable />
                        </div>
                      
                    </div>

                </div>


            </div>


        </>
    )
}