import React from 'react'
import portfolio2 from "../../assets/IdeasImg/services-left-image.png"

const Ideas = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-center p-10 mx-10">
        <div className="w-1/2 ">
          <img src={portfolio2} alt="" className="h-42 pl-6 py-20 pr-20" />
        </div>
        <div className="w-1/2 ">
          <h1 className="text-3xl font-bold ">
            Grow Your Website With Our <br />{" "}
            <span className="text-[#03a4ed]">SEO</span> Service &{" "}
            <span className="text-[#fe3f40]">Project</span> Ideas
          </h1>
          <div className="py-10 text-gray-500">
            <p>
              Space Dynamic HTML5 template is free to use for your website
              projects <br />
              However, you are not permitted to redistribute the template ZIP
              file on any CSS <br /> template collection websites. Please
              contact us for more information. Thank you <br /> for your kind
              cooperation.
            </p>
          </div>

          <div className="py-10">
            <h1 className="text-xl font-bold ">Website Analysis</h1>
            <div className="w-[95%] bg-gray-200 h-1.5 mb-10">
              <div className="bg-[#fe3f40] h-1.5 w-[64%]"></div>
            </div>
            <h1 className="text-xl font-bold ">Website Analysis</h1>
            <div className="w-[95%] bg-gray-200 h-1.5 mb-10">
              <div className="bg-[#fe3f40] h-1.5 w-[74%]"></div>
            </div>
            <h1 className="text-xl font-bold ">Website Analysis</h1>
            <div className="w-[95%] bg-gray-200 h-1.5 mb-10">
              <div className="bg-[#fe3f40] h-1.5 w-[94%]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ideas
