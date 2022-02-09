import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const isLoginUser = () => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, "acantim@gmail.com", "123456")
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("islogin: ", user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("islogin errorMessage: ", errorMessage);
    });
};

export default isLoginUser;
