const Login = ({title}) => {
  return (
    <div>
      <div className="bg-[#D9D9D9]">
        <div>
            <h1>Log in</h1>
            <form>
                <div>
                    <label htmlFor="email"> Email address or user name</label>
                    <input type="text" id="email" />
                </div>
                <div>
                    <div>
                    <label htmlFor="password">Password</label>
                   <div>
                    <img src="/assets/passwordHidden.png" alt=" password hidden" />
                   </div>
                    </div>
                    <input type="password" id="password"  />

                </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
