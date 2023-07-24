import { useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
const WorkHistory = () => {
    const[showReview,setShowReview]=useState(false)
    const handleReview=()=>{
        setShowReview(prev=>!prev)
    }
  return (
    <div className="h-full px-20">
      <div className="bg-white">
        <div className="w-full border-b py-5 px-24">
          <h1 className="text-[#9E6F27] font-extrabold text-xl">
            Work History
          </h1>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-row py-5  px-24  justify-between">
            <div className="flex flex-col gap-3 items-center justify-center">
              <div className="flex flex-row gap-1 items-center text-xl font-bold hover:cursor-pointer">
                <AiOutlineStar size={32} color="#FFB803" />
                <p className="text-[#FFB803]">4.5</p>
              </div>
              <p className="">Rating</p>
            </div>
            <div className="flex flex-col gap-3 items-center justify-center">
              <p className="text-xl font-bold ">98</p>
              <p>Students</p>
            </div>
            <div className="flex flex-col gap-3 items-center justify-center">
              <p className="text-xl font-bold ">156</p>
              <p>lessons</p>
            </div>
            <div className="flex flex-col gap-3 items-center justify-center">
              <p className="text-xl font-bold ">100%</p>
              <p>Attendance</p>
            </div>v
            <div className="flex flex-col gap-3 items-center justify-center">
              <p className="text-xl font-bold ">80%</p>
              <p>Response</p>
            </div>
          </div>
          <div className="flex  items-center justify-center pb-5">
            <button className="border-2 border-[#9E6F27] text-[#9E6F27] rounded-3xl px-4  py-2" onClick={handleReview}>
              Show Reviews
            </button>
          </div>
          {showReview && (
            <>
               <div className="border mx-20 mb-16  py-5 rounded-lg">
            <div className="border-b px-4 flex flex-col gap-5 py-6">
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row items-center gap-3">
                  <img src="/assets/user3.png" alt=" user 3" />
                  <p>Owen lee</p>
                  <p className="text-[#5B5B5B]">1 month ago</p>
                </div>
                <div className="flex flex-row gap-1 items-center text-xl font-medium hover:cursor-pointer">
                  <p className="">4.5</p>
                  <AiOutlineStar size={32} color="#FFB803" />
                </div>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque augue quam, interdum quis eros vel, viverra
                  auctor elit.
                  <br /> uisque sodales viverra ante, at dignissim eros pretium
                  sed. Aliquam placerat est a tortor sagittiQs accumsan.
                </p>
              </div>
            </div>
            <div className="border-b px-4 flex flex-col gap-5 py-6">
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row items-center gap-3">
                  <img src="/assets/user3.png" alt=" user 3" />
                  <p>Owen lee</p>
                  <p className="text-[#5B5B5B]">1 month ago</p>
                </div>
                <div className="flex flex-row gap-1 items-center text-xl font-medium hover:cursor-pointer">
                  <p className="">4.5</p>
                  <AiOutlineStar size={32} color="#FFB803" />
                </div>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque augue quam, interdum quis eros vel, viverra
                  auctor elit.
                  <br /> uisque sodales viverra ante, at dignissim eros pretium
                  sed. Aliquam placerat est a tortor sagittiQs accumsan.
                </p>
              </div>
            </div>
            <div className="border-b px-4 flex flex-col gap-5 py-6">
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row items-center gap-3">
                  <img src="/assets/user3.png" alt=" user 3" />
                  <p>Owen lee</p>
                  <p className="text-[#5B5B5B]">1 month ago</p>
                </div>
                <div className="flex flex-row gap-1 items-center text-xl font-medium hover:cursor-pointer">
                  <p className="">4.5</p>
                  <AiOutlineStar size={32} color="#FFB803" />
                </div>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque augue quam, interdum quis eros vel, viverra
                  auctor elit.
                  <br /> uisque sodales viverra ante, at dignissim eros pretium
                  sed. Aliquam placerat est a tortor sagittiQs accumsan.
                </p>
              </div>
            </div>
            <div className="border-b px-4 flex flex-col gap-5 py-6">
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row items-center gap-3">
                  <img src="/assets/user3.png" alt=" user 3" />
                  <p>Owen lee</p>
                  <p className="text-[#5B5B5B]">1 month ago</p>
                </div>
                <div className="flex flex-row gap-1 items-center text-xl font-medium hover:cursor-pointer">
                  <p className="">4.5</p>
                  <AiOutlineStar size={32} color="#FFB803" />
                </div>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque augue quam, interdum quis eros vel, viverra
                  auctor elit.
                  <br /> uisque sodales viverra ante, at dignissim eros pretium
                  sed. Aliquam placerat est a tortor sagittiQs accumsan.
                </p>
              </div>
            </div>
            <div className="border-b px-4 flex flex-col gap-5 py-6">
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row items-center gap-3">
                  <img src="/assets/user3.png" alt=" user 3" />
                  <p>Owen lee</p>
                  <p className="text-[#5B5B5B]">1 month ago</p>
                </div>
                <div className="flex flex-row gap-1 items-center text-xl font-medium hover:cursor-pointer">
                  <p className="">4.5</p>
                  <AiOutlineStar size={32} color="#FFB803" />
                </div>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque augue quam, interdum quis eros vel, viverra
                  auctor elit.
                  <br /> uisque sodales viverra ante, at dignissim eros pretium
                  sed. Aliquam placerat est a tortor sagittiQs accumsan.
                </p>
              </div>
            </div>
            <div className="border-b px-4 flex flex-col gap-5 py-6">
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row items-center gap-3">
                  <img src="/assets/user3.png" alt=" user 3" />
                  <p>Owen lee</p>
                  <p className="text-[#5B5B5B]">1 month ago</p>
                </div>
                <div className="flex flex-row gap-1 items-center text-xl font-medium hover:cursor-pointer">
                  <p className="">4.5</p>
                  <AiOutlineStar size={32} color="#FFB803" />
                </div>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque augue quam, interdum quis eros vel, viverra
                  auctor elit.
                  <br /> uisque sodales viverra ante, at dignissim eros pretium
                  sed. Aliquam placerat est a tortor sagittiQs accumsan.
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center gap-1  pt-5">
              <button className="border-2 px-2 ">&lt;</button>
              <button className="border-2 px-2 ">1</button>
              <button className="border-2 px-2 ">2</button>
              <button className="border-2 px-2 ">...</button>
              <button className="border-2 px-2 ">9</button>
              <button className="border-2 px-2 ">10</button>
              <button className="border-2 px-2 ">&gt;</button>
            </div>
          </div>
            </>
          )}
       
        </div>
      </div>
    </div>
  );
};

export default WorkHistory;
