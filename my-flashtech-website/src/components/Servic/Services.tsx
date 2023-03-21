import React from 'react'
import Portfolio from "../../assets/ServicesImg/portfolio-image.png"

const Services = () => {
    return (
            <div className="w-full  h-[100vh]">
                <div className=" w-1/2 text-center flex justify-center mx-auto mt-16">
                    <h1 className="text-[2rem] font-bold">
                        See What Our Agency <br />
                        <span className="text-[#03a4ed]">Offers </span> & What We <br />
                        <span className="text-[#fe3f40]">Provide</span>
                    </h1>
                </div>
                <div className="flex justify-center mt-40 gap-10 ">
                    <div className="item w-auto">
                        <div className="border w-[17rem] h-[13rem] rounded-2xl relative outer bg-white">
                            <div className="flex justify-center mt-8">
                                <img src={Portfolio} alt="" className="" />
                            </div>
                            <div className="border w-[17rem] h-[10rem] rounded-2xl absolute  z-[-1] top-0 inner text-center " >
                                <h4 className="text-2xl text-white my-5 font-bold">
                                    SEO Analysis
                                </h4>
                                <p className="text-md text-white">
                                    Lorem ipsum dolor sit ameti <br /> ctetur aoi adipiscing eto.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="item w-auto">
                        <div className="border w-[17rem] h-[13rem] rounded-2xl relative outer bg-white">
                            <div className="flex justify-center mt-8">
                                <img src={Portfolio} alt="" className="" />
                            </div>
                            <div className="border w-[17rem] h-[10rem] rounded-2xl absolute z-[-1] top-0 inner text-center">
                                <h4 className="text-2xl text-white my-5 font-bold">
                                    SEO Analysis
                                </h4>
                                <p className="text-md text-white">
                                    Lorem ipsum dolor sit ameti <br /> ctetur aoi adipiscing eto.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="item w-auto">
                        <div className="border w-[17rem] h-[13rem] rounded-2xl relative outer bg-white">
                            <div className="flex justify-center mt-8">
                                <img src={Portfolio} alt="" className="" />
                            </div>
                            <div className="border w-[17rem] h-[10rem] rounded-2xl absolute z-[-1] top-0 inner text-center">
                                <h4 className="text-2xl text-white my-5 font-bold">
                                    SEO Analysis
                                </h4>
                                <p className="text-md text-white">
                                    Lorem ipsum dolor sit ameti <br /> ctetur aoi adipiscing eto.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="item w-auto">
                        <div className="border w-[17rem] h-[13rem] rounded-2xl relative outer bg-white">
                            <div className="flex justify-center mt-8">
                                <img src={Portfolio} alt="" className="" />
                            </div>
                            <div className="border w-[17rem] h-[10rem] rounded-2xl absolute z-[-1] top-0 inner text-center">
                                <h4 className="text-2xl text-white my-5 font-bold">
                                    SEO Analysis
                                </h4>
                                <p className="text-md text-white">
                                    Lorem ipsum dolor sit ameti <br /> ctetur aoi adipiscing eto.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      
    )
}

export default Services
