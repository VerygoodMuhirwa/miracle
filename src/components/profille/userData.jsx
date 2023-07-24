import { BsPencilFill } from "react-icons/bs";
const UserData = () => {
  return (
    <div className="h-full px-20  relative">
      <div className="relative w-full h-40 ">
        <img
          src="/assets/codes.png"
          alt="codes image"
          className="absolute inset-0 w-full h-full object-cover rounded-t-lg r"
        />
        <div className="bg-[#9E6F27] flex justify-center items-center rounded-full p-1 absolute right-2 top-2">
          <BsPencilFill size={20} color="white" />
        </div>
      </div>
      <div className="absolute top-28 left-36  flex flex-row  justify-center items-center">
        <img
          src="/assets/user2.png"
          alt="user image"
          className="object-cover"
        />
        <div className="bg-[#9E6F27] flex justify-center items-center rounded-full p-1">
          <BsPencilFill size={20} color="white" />
        </div>
      </div>
      <div className="bg-white  flex justify-center pt-20 px-20 flex-col flex-wrap gap-10 rounded-b-md border-b-2 pb-5">
        <div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-2 items-center">
              <h1 className="text-[#9E6F27] text-xl">Dereck David</h1>
              <img src="/assets/canada.png" alt="" />
            </div>
            <div className="flex flex-col gap-1">
              <button className="bg-[#64B94F] px-5 py-2 rounded-md">
                Open to Collaborate
              </button>
              <div className="bg-[#9E6F27] flex justify-center items-center rounded-full px-2 py-1 self-end">
                <BsPencilFill size={20} color="white" />
              </div>
            </div>
          </div>

          <p>ID : saba298078</p>
        </div>
        <div>
          <p>Senior web developer</p>
        </div>
        <div className="flex flex-col  gap-3">
          <p>Tutor Skills : HTML, css, Javascript, jquery, PHP, MySQL</p>
          <p>Toronto, Canada (20:44 UTC+05:30)</p>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-6">
            <button className="border-2 border-[#9E6F27]  align-middle px-7 text-[#9E6F27] hover:bg-[#EDE4CE]  rounded-2xl">
              Share
            </button>
            <button className="border-2 border-[#9E6F27]  align-middle px-7 text-[#9E6F27] bg-[#FFEAB2] hover:bg-[#FFDD87] py-2 rounded-2xl">
              Favorite
            </button>
            <button className="border-2 border-[#9E6F27]  align-middle px-7 text-white bg-[#9E6F27] hover:bg-[#825E27] py-2 rounded-2xl">
              Message
            </button>
          </div>
          <div className="flex flex-col ">
            <button className="bg-[#009ED0] text-white px-5 py-2 rounded-md">
              Hourly Rate : 15USD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserData;
