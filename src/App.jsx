import { useState } from "react";
import "./App.css";

import { FaJs } from "react-icons/fa";
import { FaInstagram, FaGithub } from "react-icons/fa6";
import myImage from "./assets/images/profileImage.jpg";
import { TbBrandKotlin } from "react-icons/tb";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="h-svh">
        <div className="navbar  bg-base-300 backdrop-blur-xl fixed flex justify-between ">
          <div className="text-3xl p-5 btn btn-ghost">Zaved Ahmad</div>
          <div>
          <div className="btn  btn-ghost ">
            <FaGithub size={25} />
          </div>
          <div className=" btn btn-ghost ">
            <FaInstagram size={27} />
          </div>
          </div>
        </div>
        <div className="min-h-svh p-10 pt-30 flex gap-30  flex-col md:flex-row justify-around items-center bg-base-300">
          <div className="border-1 rounded-3xl border-amber-50 flex items-center p-5 justify-center">
            <div className=" rounded-2xl  flex text-center justify-center items-center h-70 w-100  md:m-0 md:w-120 flex-col gap-10 bg-amber-50 text-2xl shadow-2xl p-5">
              <span className="text-black">Hi I am Zaved Ahmad</span>{" "}
             
              <div className="bg-primary  p-5 rounded-2xl shadow-xl flex flex-col gap-5">
                <span> languages </span>
                <div>
                <span className="text-yellow-300 bg-stone-600 p-5 rounded-xl btn-lg btn">
                  <FaJs />
                  Javascript
                </span>{" "}
                <span className="text-purple-500 btn-lg bg-stone-300 btn p-5 rounded-xl">
                  <TbBrandKotlin />
                  Kotlin
                </span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full hidden lg:block max-w-[25rem]">
            <div className="absolute top-10 left-10 w-100 h-70 bg-amber-50  z-[5] rounded-lg"></div>
            <div className="absolute bottom-10 right-10 w-100 h-70 border-amber-50 border-1 bg-base-300   z-[5] rounded-lg"></div>
            <img
              src={myImage}
              alt="Description of image"
              className="relative h-70 w-100 rounded-lg sm:block object-cover shadow-2xl object-top z-[10]"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
