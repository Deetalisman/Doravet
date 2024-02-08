import imglogin from "./asset/Screenshot (142).png";
import img1 from "./asset/Frame 1762.png";

function Login() {
  return (
    <>
      <a href="/page1">
        <img src={img1} className="doravet" />
      </a>
      <div className="login">
        <aside className="loginleft">
          <h1>Login</h1>
          <p>Connect your wallet to access your account</p>
          <button className="createbutton" id="loginleftbut">
            Connect Wallet
          </button>{" "}
          <br></br>
          <a href="/homepage">
            <button className="createbutton" id="loginleftbutt">
              Login
            </button>
          </a>
          <p>
            Don't have an account? <a href="/register">Register</a>
          </p>
        </aside>
        <img src={imglogin} className="loginimg" />
      </div>
    </>
  );
}

export default Login;
