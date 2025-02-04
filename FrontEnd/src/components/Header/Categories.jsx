import DownArrow from '../../assets/icons/Downarrow'
export default function Categories() {
    return (
        <>
            <div><ul className='bg-gray-100 flex items-center justify-center gap-[4vw] py-4'>
                <li className='flex items-center'><span className="font-medium">MEN</span><DownArrow /></li>
                <li className='flex items-center'><span className="font-medium">KIDS</span><DownArrow /></li>
                <li className='flex items-center'><span className="font-medium">WOMEN</span><DownArrow /></li>
                <li className='flex items-center'><span className="font-medium">SPORTS</span><DownArrow /></li>
                <li className='flex items-center'><span className="font-medium">BRANDS</span><DownArrow /></li>
                <li className='flex items-center'><span className="font-medium">SANDALS</span><DownArrow /></li>
            </ul></div>

        </>
    )
}