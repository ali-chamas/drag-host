import { Button, Input, Typography } from "@material-tailwind/react";
import { useContext, useState } from "react";
import { userType } from "../../../../tools/data-types/userType";
import { UserContext, UserContextType } from "../../../../context/userContext";
import { sendRequest } from "../../../../tools/request-method/request";

const Login = ({ setType, isDark }: { setType: any; isDark: boolean }) => {
  const [userInfo, setUserInfo] = useState<userType | {}>({});
  const { addUser } = useContext(UserContext) as UserContextType;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | any>("");

  const handleLogin = async () => {
    setLoading(true);
    try {
      const res = await sendRequest("POST", "/auth/login", userInfo);
      if (res.status == 200) {
        addUser(res.data.token, res.data.user);

        setError("");
      } else {
        setError(res.data);
      }
    } catch (error: any) {
      console.log(error);
      setError(error?.response.data || "something went wrong");
    }
    setLoading(false);
  };

  return (
    <form className=" flex flex-col items-center gap-6 w-[300px] md:w-[410px] ">
      <h1 className="text-primary text-xl md:text-2xl  lg:text-3xl">
        {" "}
        LET'S CONTINUE THE JOUNEY!!
      </h1>

      <Input
        label="Username "
        className="w-full"
        color={isDark ? "white" : "black"}
        onChange={(e) => setUserInfo({ ...userInfo, username: e.target.value })}
      />

      <Input
        label="Password "
        type="password"
        color={isDark ? "white" : "black"}
        onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
      />

      <Button
        loading={loading}
        onClick={handleLogin}
        className="btn-primary-white  "
      >
        Continue
      </Button>
      {error && <small className="text-red-400">{error}</small>}
      <Typography>
        Doesn't have an account?{" "}
        <button
          className="text-cyan-800 font-bold dark:text-cyan-400"
          onClick={() => setType("singup")}
        >
          Sign Up
        </button>
      </Typography>
    </form>
  );
};

export default Login;
