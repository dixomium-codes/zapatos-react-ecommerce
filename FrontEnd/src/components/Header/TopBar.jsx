import TruckFastIcon from '../../assets/icons/TruckFast'

function TopBar() {


    return (
        <>
            <div className="bg-black">
                <div className='flex items-center justify-center p-1 space-x-1.5 '>
                    <div>
                        < TruckFastIcon />
                    </div>

                    <div>
                        <h1 className=" text-white text-[14px] font-light ">Spend $150 or more and get FREE SHIPPING on your order!</h1>
                    </div>
                </div>

            </div>
        </>
    );
}

export default TopBar
