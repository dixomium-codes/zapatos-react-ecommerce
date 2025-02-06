
import Zapatos from "../assets/images/Zapatos";
import MyImage from "../assets/images/image 29.png";
import LeftArrow from "../assets/icons/LeftArrow"

import RightArrow from "../assets/icons/RightArrow";
import HeroTable from "../assets/images/heroTable";
import TruckFastIcon from "../assets/icons/TruckFast";
import RightPointerArrow from "../assets/icons/RightPointerArrow";


export default function () {
    return (
        <>

            <div className="mt-6 md:mt-0">
                <div className='flex items-center justify-center p-1 space-x-1.5 md:hidden bg-gray-50 '>
                    <div>
                        < TruckFastIcon color='black' />
                    </div>

                    <div>
                        <h1 className=" text-black text-xs ">Spend $150 or more and get <u>FREE SHIPPING</u> on your order!</h1>
                    </div>
                </div>

                <div className="flex items-center  relative justify-center bg-gray-100 md:h-[100vh] lg:h-screen  lg:mx-[1vw] md:mt-6 lg:mt-0 h-[60vh] ">
                    <div className="relative flex justify-center md:bottom-20 lg:bottom-0">
                        <div className="w-[80vw] md:w-[90vw] relative lg:bottom-20 md:bottom-[15vh] bottom-[20vh]">
                            <Zapatos />
                        </div>
                        

                        <img src={MyImage} alt="Hero Image" className="absolute md:w-[60vw] lg:w-[35vw] h-auto md:left-40 lg:left-auto w-[60vw] top-[-5vh] md:top-0" />
                    </div>
                  

                    <div className="absolute flex items-center gap-[80vw] md:gap-[87vw] md:top-[55vh]">
                        <div className="lg:w-[3vw] md:w-[4vw] w-[7vw] ">
                            <LeftArrow />
                        </div>
                        <div className="lg:w-[3vw] md:w-[4vw] w-[7vw]">
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
                    <button className="absolute bottom-[8vh] md:bottom-[2vh] lg:bottom-[12vh]">
                        <div className="bg-black flex space-x-2 items-center py-2 px-4">
                            <span className="text-white">Exprole New Arrivals</span>
                            <RightPointerArrow />
                        </div>
                    </button>
                

                </div>




            </div>

        </>
    )
}