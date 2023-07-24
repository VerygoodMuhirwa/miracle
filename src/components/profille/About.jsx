import { BsPencilFill } from "react-icons/bs";
import Calendar from "./Calendar";

const About = () => {
  return (
    <div className="h-full px-20">
      <div className="bg-white ">
        <div className="w-full border-b-2 py-5 px-20">
          <h1 className="text-[#9E6F27] font-extrabold text-xl">About</h1>
        </div>
        <div>
          <div className="flex flex-row relative py-5 px-20 items-center  border-b-2">
            <div>
              <p>
                I am a highly skilled full stack developer as well as the
                freelancer-based tutor and can teach you what you
              </p>
              <p>cannot learn from school </p>
            </div>
            <div className="bg-[#9E6F27] flex justify-center items-center rounded-full p-1 absolute right-2 top-2">
              <BsPencilFill size={20} color="white" />
            </div>
          </div>
          <div className="flex flex-col gap-8  py-5 px-20">
            <div className="relative flex flex-row ">
              <h1 className="text-xl font-bold">Availability</h1>
              <div className="bg-[#9E6F27] flex justify-center items-center rounded-full p-1 absolute right-2 top-2">
                <BsPencilFill size={20} color="white" />
              </div>
            </div>
            <div>
                <Calendar/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
