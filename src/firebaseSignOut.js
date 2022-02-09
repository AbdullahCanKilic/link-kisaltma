import firebase from "firebase/compat/app";

const SignOut = () => {
  firebase
    .auth()
    .signOut()
    .then(
      function () {
        console.log("Signed Out Ok");
      },
      function (error) {
        console.error("Sign Out Error", error);
      }
    );
};

export default SignOut;
