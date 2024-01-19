import { auth } from "./auth/firebaseAuth";
import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";

function App() {
  const [userData, setUserData] = useState(null);

  // 구글 로그인
  function handleGoogleLogin() {
    const providerGoogle = new GoogleAuthProvider(); // provider 구글 설정
    signInWithPopup(auth, providerGoogle) // 팝업창 띄워서 로그인
      .then((data) => {
        setUserData(data); // user data 설정
        console.log(data); // console에 UserCredentialImpl 출력
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // 깃허브 로그인
  function handleGihhubLogin() {
    const providerGit = new GithubAuthProvider();
    signInWithPopup(auth, providerGit)
    .then((result) => {
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      
      // The signed-in user info.
      const user = result.user;
      setUserData(result);
      console.log(result);

      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      console.log(email);
      // The AuthCredential type that was used.
      const credential = GithubAuthProvider.credentialFromError(error);
      // ...
  });
}

  return (
    <div>
      <h3>구글 로그인 테스트</h3>
      <button onClick={handleGoogleLogin}>구글 로그인</button>
      <button onClick={handleGihhubLogin}>깃허브 로그인</button>
      <h4>로그인하면 아래쪽에 이름이 나타납니다.</h4>
      <div style={{whiteSpace:"pre-line"}}>
        {userData
          ? "당신의 email : " + userData.user.email
          + "\n당신의 displayName" + userData.user.displayName
          + "\n당신의 accessToken : " + userData.user.accessToken 
          + "\n당신의 idToken : " + userData._tokenResponse.idToken
          : "로그인 버튼을 눌러주세요 :)"}
      </div>
    </div>
  );
}

export default App;
