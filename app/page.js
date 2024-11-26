'use client';


import { useRouter } from 'next/navigation';
import Feed from "./components/Feed";
import User_profile from "./components/User_profile";

// icons
import { FaRegHeart } from "react-icons/fa";
import { FaShare } from "react-icons/fa6";
import { FaCommentDots } from "react-icons/fa";
// import { FaOpencart } from "react-icons/fa";
import { IoIosPricetags } from "react-icons/io";
import { GrTools } from "react-icons/gr";
import dynamic from 'next/dynamic';

const Dashboard = dynamic(() => import('./Dashboard/Page'));

export default function Home() {

  const router = useRouter();
  
  return (
    <main className=" flex flex-col justify-between ">
      <div className="wrapper flex gap-2 items-center py-6 w-full bg-gray-700 ">
        <div className="w-[20%] text-center h-full"> biddings </div>
        <div className="w-[60%] h-full  justify-center flex ">
          {" "}
          <Feed />{" "}
        </div>
        <div  onClick={() => router.push('/Dashboard')} className="w-[20%] h-full  justify-center flex ">
          {" "}
          <User_profile profile="Nabin sharma" />{" "}
        </div>
      </div>
      <div className="wrapper flex gap-2 items-center py-6 w-full h-screen ">
        <div className="w-[20%] text-center h-full"> biddings </div>
        <div className="w-[60%] h-full  justify-center flex bg-black ">
          {/* post here */}

          <div className="h-[800px] w-full m-6 bg-[#0D0D0D] rounded-xl ">
            <div className="h-[60%] w-full bg-gray-300"></div>
            <div className="">
              <p className="my-5" >
                Lorem ipsum dolor sit😍 amet consectetur adipisicing elit. Atque
                animi nobis fugiat laboriosam quia eos reprehenderit quae
                similique ducimus quibusdam..
              </p>
            </div>
            
            <div className=" flex gap-6 items-center mt-4">
              <div className="flex gap-6 items-center ">
              <FaRegHeart size={20} /> <FaCommentDots size={20} />{" "}
              <FaShare size={20} />{" "}

              </div>
              <span className=" flex gap-2 items-center px-3 py-2 rounded-md bg-[#4B4376]">
                {" "}
                Ask price <IoIosPricetags size={18} />{" "}
              </span>{" "}
              <div>
              <GrTools size={20} title="Bidding" className="bg-red-600 h-[40px] w-[40px] p-2 rounded-full cursor-pointer" />


              </div>
            </div>
          </div>
        </div>
        <div className="w-[20%] h-full  justify-center flex "> </div>
      </div>
      <div className='w-full h-[100%]'> 
      {/* <Dashbord/> */}

      </div>
    </main>
  );
}
