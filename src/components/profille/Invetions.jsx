import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsPencilFill } from "react-icons/bs";
import { formDataActions } from "../../store/slices/formData";

const Invetions = () => {
  const dispatch = useDispatch();
  const [addNewData, setAddNewData] = useState(false);
  const [editData, setEditData] = useState(null);

  const inititialInvetion = useSelector((state) => state.formData.inventions);
  const [invetion, setInvetion] = useState({
    id: Math.floor(Math.random() * 90),
    title: "",
    description: "",
  });

  const udpateTitle = (e) => {
    setInvetion((prev) => ({ ...prev, title: e.target.value }));
  };

  const updateDesctiption = (e) => {
    setInvetion((prev) => ({ ...prev, description: e.target.value }));
  };
  const handleNewData = (e) => {
    e.preventDefault();

    // Add a new invention
    dispatch(formDataActions.addInvention(invetion));
    setAddNewData(false);
    setEditData(null); // Reset the edit state after successfully handling edit or adding a new invention
  };
  const handleEdit = (itemId) => {
    setEditData(itemId);
    const itemToEdit = inititialInvetion.find((item) => item.id === itemId);
    setInvetion({
      id: itemToEdit.id,
      title: itemToEdit.title,
      description: itemToEdit.description,
    });
    setAddNewData(false); // Close the add new data form when opening the edit form
  };

  const handleAddNewData = () => {
    if (editData) {
      // Reset the editData state to null if in edit mode
      setEditData(null);
    } else {
      // Toggle the addNewData state if not in edit mode
      setAddNewData((prev) => !prev);
    }
    // Reset the invetion state to its initial empty values
    setInvetion({
      id: Math.floor(Math.random() * 90),
      title: "",
      description: "",
    });
  };
  const handleEditChanges = (e) => {
    e.preventDefault();
    const editedInvention = {
      id: editData,
      title: invetion.title,
      description: invetion.description,
    };
    dispatch(formDataActions.editInvention(editedInvention));
    setEditData(null);
    setInvetion({
      id: null,
      title: "",
      description: "",
    });
  };

  const handleDelete = (id) => {
    dispatch(formDataActions.deleteInvetion({ id: id }));
  };

  return (
    <div className="h-full px-20">
      <div className="bg-white">
        <div className="w-full border-b py-5 px-24 relative ">
          <h1 className="text-[#9E6F27] font-extrabold text-xl">
            My Inventions
          </h1>
          <div
            className="absolute right-2 top-5 hover:cursor-pointer "
            onClick={handleAddNewData}
          >
            <img
              src="/assets/add.png"
              alt="add new invetion"
              className="object-cover"
            />
          </div>
        </div>
        <div>
          {addNewData && (
            <div className="border-b py-5">
              <form
                className="px-24 flex flex-col gap-5"
                onSubmit={handleNewData}
              >
                <div className="flex flex-col">
                  <label htmlFor="title" className="text-[#555555] ">
                    title
                  </label>
                  <input
                    type="text"
                    id="title"
                    className="border-2 w-5/12 rounded-md"
                    required
                    value={invetion.title}
                    onChange={udpateTitle}
                  />
                </div>
                <div className="flex flex-row w-full">
                  <div className="flex flex-col w-6/12">
                    <label htmlFor="description" className="text-[#555555] ">
                      Description
                    </label>
                    <input
                      type="text"
                      id="description"
                      className="border-2 w-10/12 h-24 rounded-md"
                      required
                      value={invetion.description}
                      onChange={updateDesctiption}
                    />
                  </div>
                  <div className="align-baseline self-end flex flex-row gap-5">
                    <input
                      type="submit"
                      value="Save"
                      className="px-10 bg-[#9E6F27] hover:bg-[#825E27] text-white py-1 rounded-xl"
                    />
                    <button
                      onClick={() => setAddNewData(false)}
                      className="px-10 hover:bg-[#EDE4CE] border-2 border-[#9E6F27] text-[#9E6F27] py-1 rounded-xl"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )}
          {inititialInvetion.map((item) =>
            editData == item.id ? (
              <>
                {" "}
                <form
                  key={item.id}
                  className="px-24 flex flex-col gap-5 py-5"
                  onSubmit={handleEditChanges}
                >
                  <div className="flex flex-col">
                    <label htmlFor="title" className="text-[#555555] ">
                      title
                    </label>
                    <input
                      type="text"
                      id="title"
                      className="border-2 w-5/12 rounded-md"
                      required
                      value={invetion.title}
                      onChange={udpateTitle}
                    />
                  </div>
                  <div className="flex flex-row w-full">
                    <div className="flex flex-col w-6/12">
                      <label htmlFor="description" className="text-[#555555] ">
                        Description
                      </label>
                      <input
                        type="text"
                        id="description"
                        className="border-2 w-10/12 h-24 rounded-md"
                        required
                        value={invetion.description}
                        onChange={updateDesctiption}
                      />
                    </div>
                    <div className="align-baseline self-end flex flex-row gap-5">
                      <input
                        type="submit"
                        value="Save"
                        className="px-10 bg-[#9E6F27] hover:bg-[#825E27] text-white py-1 rounded-xl"
                      />
                      <button
                        onClick={() => setEditData(null)}
                        className="px-10 hover:bg-[#EDE4CE] border-2 border-[#9E6F27] text-[#9E6F27] py-1 rounded-xl"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="px-10 bg-[#666666] border-2  text-white  hover:opacity-50 py-1 rounded-xl"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </form>
              </>
            ) : (
              <div
                key={item.id}
                className="border-b pl-24 py-5 flex flex-col gap-5"
              >
                <div className="relative">
                  <h1 className="text-medium font-bold">{item.title}</h1>
                  <div
                    className="bg-[#9E6F27] flex justify-center items-center rounded-full p-1 absolute right-2 top-2 hover:cursor-pointer"
                    onClick={() => handleEdit(item.id)} // Pass the itemId to handleEdit
                  >
                    <BsPencilFill size={20} color="white" />
                  </div>
                </div>
                <p>{item.description}</p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Invetions;
