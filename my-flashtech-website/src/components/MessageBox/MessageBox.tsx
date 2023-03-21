import React, { useState } from 'react';
import Icon from "../../assets/WebIcon/icon.png";
import { BsFillChatDotsFill } from "react-icons/bs"

const MessageBox = () => {
  const [popup, setPopup] = useState(false);
  return (
    <>
      <div
        className="fixed w-20 h-20 bg-[#03a4ed] bottom-5 right-5 rounded-full flex justify-center items-center text-white text-4xl z-[999] animate-bounce sm:right-8 cursor-pointer"
        onClick={() => setPopup(!popup)}
      >
        <BsFillChatDotsFill />
      </div>
      {popup ? (
        <div className=" flex flex-col items-center min-h-screen   sm:justify-center sm:pt-0  fixed inset-0 z-10 overflow-y-auto bg-black bg-opacity-50">
          <div className="border border-white p-2 w-[30vw]">
            <div className="px-6 py-4 overflow-hidden bg-[#fff] shadow-md rounded sm:rounded-lg">
              <div className="flex justify-center py-4">
                <img className="h-14" src={Icon} alt="" />
              </div>
              <div className=" pb-10 text-center  tracking-tight">
                <h1  className="text-black text-2xl font-bold">It's more than a website. </h1>
                <p>Send your message we will get <br/>back to you..!</p>
              </div>
              <form>
                <div className="flex justify-center gap-10">
                  <div className="relative mb-3 xl:w-96" data-te-input-wrapper-init>
                    <input
                      type="text"
                      className="border border-[#8f8f8f] rounded-2xl focus:outline-[#03a4ed] focus:outline focus:outline-offset-2 outline-4 peer block min-h-[auto] w-full bg-transparent py-2 px-4"
                      placeholder="Name"
                    />
                  </div>
                </div>

                <div className="flex justify-center">

                  <div className="relative my-2 xl:w-96" data-te-input-wrapper-init>
                    <input
                      type="text"
                      className="border border-[#8f8f8f] rounded-2xl focus:outline-[#03a4ed] focus:outline focus:outline-offset-2 outline-4 peer block min-h-[auto] w-full bg-transparent py-2 px-4"
                      placeholder="Mobile Number"
                    />
                  </div>
                </div>
                <div className="flex justify-center">

                  <div className="relative my-2 xl:w-96" data-te-input-wrapper-init>
                    <input
                      type="text"
                      className="border border-[#8f8f8f] rounded-2xl focus:outline-[#03a4ed] focus:outline focus:outline-offset-2 outline-4 peer block min-h-[auto] w-full bg-transparent py-2 px-4"
                      placeholder="Your E-mail"
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="relative my-2 xl:w-[150vw]" data-te-input-wrapper-init>
                    <textarea
                      className="border border-[#8f8f8f] rounded-2xl focus:outline-[#03a4ed] focus:outline focus:outline-offset-2 outline-4 peer block min-h-[auto] w-full bg-transparent py-2 px-4"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                </div>
                
                <div className="flex items-center justify-center mt-4">
                  <button
                    type="submit"
                    className="inline-flex items-center px-20 py-3 ml-4 text-base font-semibold tracking-widest text-white  transition duration-150 ease-in-out bg-[#03a4ed] border border-transparent rounded-full active:bg-gray-900 false"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default MessageBox
