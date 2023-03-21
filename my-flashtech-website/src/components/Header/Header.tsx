import { useEffect,useState } from 'react';
import logo from "../../assets/HeaderAssets/headerLogo/logo.png"
import {AiFillDatabase} from "react-icons/ai";

const Header = () => {
    const [sticky, setSticky] = useState(false);
    const [open ,isOpen]=useState(false);
    const menulinks=[
        {name:'Home',link:'#home'},
        {name:'About',link:'#aboutus'},
        {name:'Services',link:'#services'},
        {name:'Portfolio',link:'#portfolio'},
        {name:'Blog',link:'#blog'},
    ];
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            window.scrollY> 0 ? setSticky(true):setSticky(false)
        })
    },[])
    return (
        <>
        <nav className={`z-[9] fixed w-full left-0 top-0 pl-24 shadow-custom ${sticky?'text-gray-900 bg-white':'text-[#fafafa]'} bg-[#ffebec]` }>
            <div className='flex justify-between items-center'>
            <div><img className='w-56' src={logo} alt="" /></div>
            <div className={`${sticky?"md:bg-white/0 bg-[#fafafa] ":"bg-[#fafafa] text-gray-800 "} pr-24  md:block hidden px-7 font-medium rounded-bl-full `}>
                <ul className='text-base flex py-4 items-center gap-1'>
                    {
                        menulinks?.map((menu,i)=>(
                            <li key={i} className='px-3 hover:text-cyan-600'>
                                <a href={menu?.link}>{menu?.name}</a>
                            </li>
                        ))
                    }
                      <li  className='px-3 bg-[#fe3f40] text-white py-1 rounded-full hover:bg-cyan-600 '>
                                <a href="messageus">Contact Now</a>
                            </li>
                </ul>
            
            </div>
            <div onClick={()=>isOpen(!open)} className={`z-[999] text-3xl md:hidden m-5 ${open?"text-gray-900":"text-gray-500"}`}>
            <AiFillDatabase/>
            </div>
            <div className={`md:hidden text-gray-900 absolute w-2/3 h-screen px-7 py-2 font-medium bg-white top-0 ${open?"right-0":"right-[-100%]"}`}>
                <ul className='flex flex-col text-lg py-2 justify-center gap-10 h-full'>
                    {
                        menulinks?.map((menu,i)=>{
                            return(
                            <li key={i} className='px-6 hover:text-cyan-600'>
                            <a href={menu?.link}>{menu?.name}</a>
                            </li>
                            )
                        })
                    }
                </ul>
            </div>
            </div>
        </nav>
       
        </>
    )
}

export default Header
