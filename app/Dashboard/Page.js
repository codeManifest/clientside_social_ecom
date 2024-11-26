'use client';
import React from "react";

export default function Page(){
    return(<>
    <div className="w-full h-[60rem] px-[15rem] " >
          <div className="w-[100%] h-[100%] flex flex-col justify-center" >
              <div className="w-[100%] h-[20rem] bg-blue-500 rounded-xl "> img </div>
              <div className="w-[full] h-[20rem] border-b-2 flex relative mt-20 "> 
                 <div className=" w-[200px] h-[200px] rounded-full bg-slate-700 border-blue-100 absolute left-5 top-10 z-0 "> </div>  
                 <span className="z-10 absolute left-64 top-40  " > NAME</span>
                 <span className="btn"> </span>
                 <button className=" z-20 px-4 h-10 bg-blue-500 text-white rounded hover:bg-blue-600 transition absolute right-10 top-40">
                   Edit Profile
                 </button>

              </div>
          </div>
    </div>
    </>);
}