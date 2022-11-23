import { useState } from "react";
import { LoginSocialFacebook } from "reactjs-social-login";


function App() {
  const [Data, setData] = useState(null);

  return (
    <>
   
      {!Data ? <LoginSocialFacebook appId="860411101973983"
        onResolve={(res) => {
          console.log(res)
          setData(res.data)
        }}
        onReject={(err) => {
          console.log(err)
        }}
      >
        <button>Login</button>
      </LoginSocialFacebook> : ' '}
      {Data ? <div>
        <h1>{Data.name}</h1>
        <img src={Data.picture.data.url} style={{borderRadius:"50%",width:'300px'}}></img>
      </div>:''}
    </>
  );
}

export default App;
