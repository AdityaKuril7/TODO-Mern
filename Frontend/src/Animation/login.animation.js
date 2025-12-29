export const scaleAnimaiton = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5 },
};
export const loginBtnanimation = {
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

export const signupBtnanimation = {
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
