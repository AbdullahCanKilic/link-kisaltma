import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const AddUser = () => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, "acantim@gmail.com", "123456")
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("firebase user: ", user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  //   db.collection("users")
  //     .add({
  //       displayName: "Abdullah Can Kılıç",
  //       username: "acan",
  //       password: "Acan1453",
  //       timespan: firebase.firestore.FieldValue.serverTimestamp(),
  //     })
  //     .then(function (responce) {
  //       console.log("firebasep eklenen id: ", responce.id);
  //     })
  //     .catch(function (error) {
  //       console.error("firebasep add error: ", error);
  //     });
};

export default AddUser;
