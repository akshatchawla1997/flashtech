import React from 'react'
import stickerBg from "../../assets/StickerImg/subscribe-bg.png"
import sticker from "../../assets/StickerImg/subscribe-dec.png"

const WebSticker = () => {
    return (
        <div>
            <div className=' relative flex flex-row justify-center items-center my-20 '>
                <img src={stickerBg} alt="" />
                <img className="absolute top-[-20px] right-16" src={sticker} alt="" />
                <div className='absolute'>
                <div  className='text-center'>
                <h2 className='  text-white mb-6 font-extrabold  text-3xl'>Know Your Website Seo Score By Email </h2>
                </div>
                <div className='grid grid-cols-3 bg-slate-50 rounded-full p-4 '>
                    <div className=' w-full border-r border-gray-300'><input type="url" placeholder='Your Website Url' className=' m-1 w-72 px-3 py-1 focus:outline-none'/></div>
                    <div className='block'><input type="url" placeholder='Your Email' className=' m-1  w-72 px-3 py-1 focus:outline-none text'/></div>
                    <div className='text-end block'>
                        <button
                            type="button"
                            className="inline-block rounded-full bg-primary px-16 py-3 text-sm font-medium  leading-normal text-white bg-cyan-600 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                            Subscribe
                        </button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default WebSticker
