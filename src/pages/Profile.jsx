import About from "../components/profille/About";
import Certificate from "../components/profille/Certificate";
import Education from "../components/profille/Education";
import Experience from "../components/profille/Experience";
import Invetions from "../components/profille/Invetions";
import Patents from "../components/profille/Patents";
import WorkHistory from "../components/profille/WorkHistory";
import UserData from "../components/profille/userData";

function Profile() {
  return (
    <div className=" bg-[#D9D9D9] py-5  flex flex-col gap-6">
      <div>
        <UserData />
      </div>
      <div>
        <About />
      </div>
      <div>
        <WorkHistory />
      </div>
      <div>
        <Invetions />
      </div>
      <div>
        <Patents />
      </div>
      <div>
        <Education />
      </div>
      <div>
        <Experience />
      </div>
      <div>
        <Certificate/>
      </div>
     
    </div>
  );
}

export default Profile;
