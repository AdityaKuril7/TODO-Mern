import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleAuth = async () => {
    if (isLogin) {
      const response = await axios.post(
        "http://localhost:8000/api/v1/user/login",
        {
          email,
          password,
        },
      );
      console.log(response.data);
      navigate("/home", {
        state: {
          userId: response.data.user._id,
          username: response.data.user.username,
          email: response.data.user.email,
        },
      });
    } else {
      const response = await axios.post(
        "http://localhost:8000/api/v1/user/signup",
        {
          username,
          email,
          password,
        },
      );
      console.log(response.data);
      setIsLogin(true);
      console.log("Done!");
    }
  };

  const scaleAnimaiton = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.5 },
  };
  const loginBtnanimation = {
    initial: { backgroundColor: isLogin ? "gray" : "blue" },
    animate: {
      backgroundColor: isLogin ? "blue" : "gray",
      opacity: isLogin ? 1 : 0.5,
    },
    exit: { backgroundColor: isLogin ? "gray" : "blue" },
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  };

  const signupBtnanimation = {
    initial: { backgroundColor: isLogin ? "blue" : "gray" },
    animate: {
      backgroundColor: isLogin ? "gray" : "blue",
      opacity: isLogin ? 0.5 : 1,
    },
    exit: { backgroundColor: isLogin ? "blue" : "gray" },
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={
          "h-screen w-screen flex justify-center bg-linear-to-tl from-orange-100 to-yellow-100 items-center"
        }
      >
        <motion.div
          animate={{ height: isLogin ? 550 : 650 }}
          className={`card ${
            isLogin ? "h-130" : "h-160"
          } w-130 shadow-2xl shadow-gray-500 bg-white rounded-[30px]`}
        >
          <header
            className={
              "h-10 w-full mt-15 flex flex-col justify-center items-center"
            }
          >
            <motion.p className={"text-3xl font-bold font-sans"}>
              {isLogin ? "Welcome Back" : "Create Account"}
            </motion.p>
            <p className={"mt-2 text-gray-700 font-sans font-semibold"}>
              {isLogin ? "Sign in to your account" : "Sign up to get started"}
            </p>
          </header>
          <div className={"flex justify-center items-center gap-x-5 mt-10"}>
            <motion.button
              {...loginBtnanimation}
              className={`w-50 text-white p-2 rounded-lg font-bold text-lg`}
              onClick={() => setIsLogin(true)}
            >
              Login
            </motion.button>
            <motion.button
              {...signupBtnanimation}
              className={`w-50 text-white p-2 rounded-lg font-bold text-lg`}
              onClick={() => setIsLogin(false)}
            >
              Sign up
            </motion.button>
          </div>
          <div className={"h-100 mt-5 flex flex-col items-center gap-y-5"}>
            <AnimatePresence mode={"wait"}>
              {!isLogin && (
                <motion.div
                  initial={{ translateX: 200 }}
                  animate={{ translateX: 0 }}
                  transition={{ duration: 0.5 }}
                  className={"mt-3"}
                >
                  <motion.label htmlFor="" className={"labels block"}>
                    Username
                  </motion.label>
                  <motion.input
                    {...scaleAnimaiton}
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className={"inputs"}
                    placeholder="username"
                  />
                </motion.div>
              )}
              <div>
                <motion.label
                  {...scaleAnimaiton}
                  htmlFor=""
                  className={"labels block"}
                >
                  Email
                </motion.label>
                <motion.input
                  {...scaleAnimaiton}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className={"inputs"}
                />
              </div>
              <div>
                <motion.label
                  {...scaleAnimaiton}
                  htmlFor=""
                  className={"labels block"}
                >
                  Password
                </motion.label>
                <motion.input
                  {...scaleAnimaiton}
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="password"
                  className={"inputs"}
                />
              </div>
              <button
                onClick={handleAuth}
                className={
                  "w-50 rounded-xl p-2 font-bold text-white bg-cyan-500 text-xl"
                }
              >
                {isLogin ? "Login" : "Signup"}
              </button>
              <p>
                Don't have an account ?{" "}
                <span
                  className={"text-purple-500  text-lg font-semibold"}
                  onClick={() => setIsLogin(false)}
                >
                  signup
                </span>
              </p>
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
