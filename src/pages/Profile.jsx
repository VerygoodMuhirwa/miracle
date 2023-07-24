import About from "../components/profille/About"
import UserData from "../components/profille/userData"


function Profile() {
  return (
    <div className=" bg-[#D9D9D9] py-5  flex flex-col gap-6">
   <div>
    <UserData/>
   </div>
   <div>
    <About/>
   </div>
    </div>
  )
}

export default Profile