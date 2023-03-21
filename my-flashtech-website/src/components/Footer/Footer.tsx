import React from 'react'
import { BsFacebook } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs"
import { BsSkype } from "react-icons/bs"
import { BsTwitter } from "react-icons/bs"
import Logo from "../../assets/LogoIcon/icon.png"
import bgImg from "../../assets/FooterImg/footer-dec.png"

const Footer = () => {

    return (
        <div className=''>
            <div className="w-full  flex  justify-center gap-4 p-5 flex-wrap relative  mt-36  bg-slate-100" >
                <div className="absolute top-[-140px]">
                    <img src={bgImg} alt="footer" />
                </div>
                <div className='flex w-full justify-center'>
                    <div className="w-1/5 ">
                        <div>
                            <img className="h-12" src={Logo} alt="logo" />
                            <p className="text-gray-500 mailto:py-5">info@company.com</p>
                        </div>
                        <div className="flex justify-start gap-2 my-5">
                            <div className="w-9 h-9 border rounded-full text-center flex justify-center p-2.5 bg-[#03a4ed] text-white hover:bg-[#fe3f40] duration-300"  >
                                <BsFacebook className=" w-3.5 h-3.5" />
                            </div>
                            <div className="w-9 h-9  rounded-full text-center flex justify-center p-2.5 bg-[#03a4ed] text-white hover:bg-[#fe3f40] duration-300"  >
                                <BsLinkedin className=" w-3.5 h-3.5" />
                            </div>
                            <div className="w-9 h-9  rounded-full text-center flex justify-center p-2.5 bg-[#03a4ed] text-white hover:bg-[#fe3f40] duration-300"  >
                                <BsSkype className=" w-3.5 h-3.5" />
                            </div>
                            <div className="w-9 h-9  rounded-full text-center flex justify-center p-2.5 bg-[#03a4ed] text-white hover:bg-[#fe3f40] duration-300"  >
                                <BsTwitter className=" w-3.5 h-3.5" />
                            </div>
                        </div>
                    </div>
                    <div className="w-1/5 "><h1 className="text-xl font-bold">services</h1>
                        <ul className="text-gray-500 py-5">
                            <li>SEO Development</li>
                            <li>SEO Development</li>
                            <li>SEO Development</li>
                            <li>SEO Development</li>
                        </ul>
                    </div>
                    <div className="w-1/5"><h1 className="text-xl font-bold">community</h1>
                        <ul className="text-gray-500 py-5">
                            <li>SEO Development</li>
                            <li>SEO Development</li>
                            <li>SEO Development</li>
                            <li>SEO Development</li>
                        </ul>
                    </div>
                    <div className="w-1/5 "><h1 className="text-xl font-bold ">Subscribe Newsletters</h1><p className="text-gray-500 py-5">Get our latest news and ideas to your inbox</p> <input type="text" placeholder="Your Email" className="text-black placeholder-white n w-full h-10 rounded-3xl bg-[#03a4ed] outline-none p-3" /></div>
                </div>
            
            </div>
            <div className='text-center text-gray-500 bg-slate-300 text-base py-4'>
                <h2>All Rights Reserved....... <span className='text-blue-400'>shahbaz@gmail.com</span></h2>
            </div>
        </div>
    )
}

export default Footer
