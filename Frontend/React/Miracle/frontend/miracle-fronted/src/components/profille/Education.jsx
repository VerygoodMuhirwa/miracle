import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsPencilFill } from "react-icons/bs";
import { formDataActions } from "../../store/slices/formData";

const Education = () => {
  const dispatch = useDispatch();
  const [addNewData, setAddNewData] = useState(false);
  const [editData, setEditData] = useState(null);

  const educattionInitialValues = useSelector((state) => state.formData.education);
  const [education, setEducation] = useState({
    id: Math.floor(Math.random() * 90),
    school: "",
    description: "",
  });

  const updateSchool = (e) => {
    setEducation((prev) => ({ ...prev, school: e.target.value }));
  };

  const updateShoolDescription = (e) => {
    setEducation((prev) => ({ ...prev, description: e.target.value }));
  };
  const handleNewData = (e) => {
    e.preventDefault();

    // Add a new invention
    dispatch(formDataActions.addEducation(education));
    setAddNewData(false);
    setEditData(null); // Reset the edit state after successfully handling edit or adding a new invention
  };
  const handleEdit = (itemId) => {
    setEditData(itemId);
    const itemToEdit = educattionInitialValues.find((item) => item.id === itemId);
    setEducation({
      id: itemToEdit.id,
      school: itemToEdit.school,
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
    setEducation({
      id: Math.floor(Math.random() * 90),
      school: "",
      description: "",
    });
  };
  const handleEditChanges = (e) => {
    e.preventDefault();
    const editEducation = {
      id: editData,
      school: education.school,
      description: education.description,
    };
    dispatch(formDataActions.editEducation(editEducation));
    setEditData(null);
    setEducation({
      id: null,
      school: "",
      description: "",
    });
  };

  const handleDelete = (id) => {
    dispatch(formDataActions.deleteEducation({ id: id }));
  };

  return (
    <div className="h-full  sm:px-20   overflow-x-auto-hidden">
      <div className="bg-white">
        <div className="w-full border-b py-5 px-24 relative md:px-24   ss:px-[5%]">
          <h1 className="text-[#9E6F27] font-extrabold text-xl">
            Education
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
                  <label htmlFor="school" className="text-[#555555] ">
                    School
                  </label>
                  <input
                    type="text"
                    id="school"
                    className="border-2 w-5/12 rounded-md"
                    required
                    value={education.school}
                    onChange={updateSchool}
                  />
                </div>
                <div className="flex ss:flex-col w-full ss:gap-6 ">
                  <div className="flex flex-col md:w-6/12  md:block w-full">
                    <label htmlFor="description" className="text-[#555555] ">
                      Description
                    </label>
                    <input
                      type="text"
                      id="description"
                      className="border-2 w-10/12 h-24 rounded-md"
                      required
                      value={education.description}
                      onChange={updateShoolDescription}
                    />
                  </div>
                  <div className="align-baseline  flex md:flex-row ss:flex-col ss:gap-3 md:justify-between  gap-5 ss:w-full">
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
          {educattionInitialValues.map((item) =>
            editData == item.id ? (
              <>
                {" "}
                <form
                  key={item.id}
                  className="border-b  py-5 flex ss:px-[5%] flex-col gap-5"
                  onSubmit={handleEditChanges}
                >
                  <div className="flex flex-col">
                    <label htmlFor="school" className="text-[#555555] ">
                      School
                    </label>
                    <input
                      type="text"
                      id="school"
                      className="border-2 w-5/12 indent-5 rounded-md"
                      required
                      value={education.school}
                      onChange={updateSchool}
                    />
                  </div>
                  <div className="flex ss:flex-col w-full ss:gap-6  ">
                    <div className="flex flex-col md:w-6/12  md:block w-full">
                      <label htmlFor="description" className="text-[#555555] ">
                        Description
                      </label>
                      <input
                        type="text"
                        id="description"
                        className="border-2 w-[70%] ss:w-full indent-5  h-24 rounded-md"
                        required
                        value={education.description}
                        onChange={updateShoolDescription}
                      />
                    </div>
                    <div className="align-baseline  flex md:flex-row ss:flex-col ss:gap-3 md:justify-between  gap-5 ss:w-full">
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
                  className="border-b  py-5 flex ss:px-[5%] flex-col gap-5"
              >
                <div className="relative">
                  <h1 className="text-medium font-bold">{item.school}</h1>
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

export default Education;
