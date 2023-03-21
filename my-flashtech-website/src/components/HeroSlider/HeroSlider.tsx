import React from 'react';
import bannerLeft from "../../assets/HeroSliderImages/baner-dec-left.png";
import bannerRight from "../../assets/HeroSliderImages/baner-dec-right.png";
import bannerRightImg from "../../assets/HeroSliderImages/banner-right-image.png"


const HeroSlider = () => {
  return (
    <div>
       <div className="">
      <div className="absolute left-0 top-16 w-48 h-[467px] ">
        <img src={bannerLeft} className="" alt="" />
      </div>
      <div className="absolute right-0 top-16 w-24 h-72">
        <img src={bannerRight} className="" alt="" />
      </div>
      <div className=" mt-36 px-36">
        <div className="flex flex-row pr-11">
          <div className="w-[50%]">
            <h2 className="text-[#fe3f40] text-lg mb-4 font-bold">WELCOME TO SPACE DYNAMIC</h2>
            <h2 className="font-bold text-5xl text-black">
              We Make{" "}
              <em className="text-[#03a4ed]">
                {" "}
                Digital
                <br /> Ideas{" "}
              </em>
              & SEO <br />
              Marketing{" "}
            </h2>
            <p className="my-5 text-base text-black">
              Space Dynamic is a professional looking HTML template using a
              Bootstrap 5 (beta 2). This CSS template is free for you provided
              by{" "}
            </p>
            <div className="bg-[#03a4ed] p-3 rounded-full w-[90%] my-10">
              <div className="flex justify-center">
                <div className="relative my-1 xl:w-96" >
                  <input
                    type="url"
                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlInputURL"
                    placeholder="Example label"
                  />
                  <label
                    htmlFor="exampleFormControlInputURL"
                    className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                  >
                    Your Website Url
                  </label>
                </div>
                <div className="flex border justify-center items-center w-36 rounded-full bg-slate-100 text-black">
                  Analyze Site
                </div>
              </div>
            </div>
          </div>
          <div className="w-[50%]">
            <img src={bannerRightImg} alt="" />
          </div>
        </div>
      </div>
      <div></div>
    </div>
    </div>
  )
}

export default HeroSlider
