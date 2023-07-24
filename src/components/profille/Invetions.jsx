import { BsPencilFill } from "react-icons/bs";
const Invetions = () => {
  return (
    <div className="h-full px-20">
      <div className="bg-white">
        <div className="w-full border-b py-5 px-24 relative ">
          <h1 className="text-[#9E6F27] font-extrabold text-xl">
            My Inventions
          </h1>
          <div className="absolute right-2 top-5 ">
            <img
              src="/assets/add.png"
              alt="add new invetion"
              className="object-cover"
            />
          </div>
        </div>
        <div>
          <div>
            <div className="border-b  pl-24 py-5 flex flex-col gap-5">
              <div className="relative">
                <h1 className="text-medium font-bold">
                  Lorem ipsum dolor sit amet
                </h1>
                <div className="bg-[#9E6F27] flex justify-center items-center rounded-full p-1 absolute right-2 top-2">
                  <BsPencilFill size={20} color="white" />
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                Maiores eius, praesentium nihil consectetur, quas illo nesciunt
                blanditiis eos cupiditate delectus aperiam. Ex quae iste
                recusandae tenetur excepturi delectus, ipsa deleniti.
              </p>
            </div>
            <div className="border-b  pl-24 py-5 flex flex-col gap-5">
              <div className="relative">
                <h1 className="text-medium font-bold">
                  Lorem ipsum dolor sit amet
                </h1>
                <div className="bg-[#9E6F27] flex justify-center items-center rounded-full p-1 absolute right-2 top-2">
                  <BsPencilFill size={20} color="white" />
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                Maiores eius, praesentium nihil consectetur, quas illo nesciunt
                blanditiis eos cupiditate delectus aperiam. Ex quae iste
                recusandae tenetur excepturi delectus, ipsa deleniti.
              </p>
            </div>
            <div className="border-b  pl-24 py-5 flex flex-col gap-5">
              <div className="relative">
                <h1 className="text-medium font-bold">
                  Lorem ipsum dolor sit amet
                </h1>
                <div className="bg-[#9E6F27] flex justify-center items-center rounded-full p-1 absolute right-2 top-2">
                  <BsPencilFill size={20} color="white" />
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                Maiores eius, praesentium nihil consectetur, quas illo nesciunt
                blanditiis eos cupiditate delectus aperiam. Ex quae iste
                recusandae tenetur excepturi delectus, ipsa deleniti.
              </p>
            </div>
            <div className="border-b  pl-24 py-5 flex flex-col gap-5">
              <div className="relative">
                <h1 className="text-medium font-bold">
                  Lorem ipsum dolor sit amet
                </h1>
                <div className="bg-[#9E6F27] flex justify-center items-center rounded-full p-1 absolute right-2 top-2">
                  <BsPencilFill size={20} color="white" />
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                Maiores eius, praesentium nihil consectetur, quas illo nesciunt
                blanditiis eos cupiditate delectus aperiam. Ex quae iste
                recusandae tenetur excepturi delectus, ipsa deleniti.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invetions;
