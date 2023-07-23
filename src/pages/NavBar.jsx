import { Link,  useNavigate } from "react-router-dom"

const NavBar = () => {
    const navigate=useNavigate()
    const handleLogoClick=()=>{
        navigate("/")
    }
  return (
    <div>
        <div className=" bg-white flex flex-row justify-between items-center px-24  border border-b-1 py-2">
        <div>
            <img src="/assets/logoDark.png" alt="company logo" className="object-contain w-12 h-12 hover:cursor-pointer" onClick={handleLogoClick}   />
        </div>
        <Link to="/login" className="flex justify-center items-center  rounded-xl border-2 border-[333]   px-5 py-1">Login</Link>
        </div>
        
    </div>
  )
}

export default NavBar
