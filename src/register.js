import img1 from "./asset/Frame 1762.png";
import img3 from "./asset/Group 15 1.png";
import img5 from "./asset/Frame 24.png";
import img4 from "./asset/healthicons_fingerprint-outline.png";
import { Formik, useFormik } from "formik";
import * as yup from "yup";
import { useState } from "react";
function Register() {
  function handleReg(e) {
    handleConnect();
    handleSubmit();
    e.preventDefault();
  }
  const onSubmit = (values, actions) => {
    actions.resetForm();
  };
  const basicSchema = yup.object().shape({
    email: yup.string().required("Required").email("enter a valid email"),
    firstname: yup.string().required("Required").min(6),
    lastname: yup.string().required("Required").min(4),
    organization: yup.string().required("Required"),
  });
  const { errors, values, handleSubmit, handleChange, handleBlur, touched } =
    useFormik({
      initialValues: {
        email: "",
        firstname: "",
        lastname: "",
        organization: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });
  const [connect, setConnect] = useState(false);
  function handleConnect() {
    setConnect((connect) => !connect);
    console.log(connect);
  }
  return (
    <div className="register1">
      <a href="/page1">
        <img src={img1} />
      </a>
      <div className="register">
        <form>
          <h1>Register</h1>
          <p className="regp">Enter your details to register on platform</p>
          <small>
            <label>Email Address</label>
            <br></br>
            <input
              type="text"
              id="email"
              placeholder="Email Address"
              values={values.email}
            />
          </small>
          <aside className="fnlname">
            <small>
              <label>First Name</label>
              <br></br>
              <input
                type="text"
                id="firstname"
                placeholder="First Name"
                values={values.firstname}
              />
            </small>
            <small className="lastname">
              <label>Last Name</label>
              <br></br>
              <input
                type="text"
                id="lastname"
                placeholder="Last Name"
                values={values.lastname}
              />
            </small>
          </aside>
          <br></br>
          <small>
            <label>Name of Organization</label>
            <br></br>
            <input
              type="text"
              id="organization"
              placeholder="Name of Organization"
              values={values.organization}
            />
          </small>
          <br></br>
          <br></br>
          <button
            className="createbutton"
            id="reg"
            onClick={handleReg}
            type="submit"
          >
            Register
          </button>
          <p>
            Already have an account? <a href="/login">Log in</a>
          </p>
          <p className="sign">
            By signing up you accept our{" "}
            <span>terms and condition & privacy policy</span>
          </p>
        </form>
        <img src={img5} className="registerimg" />
      </div>
      {connect && <Connectwallet handleConnect={handleConnect} />}
    </div>
  );
}

function Connectwallet({ handleConnect }) {
  return (
    <div className="connect">
      <div className="connect1">
        <p>Connect wallet to complete registration</p>
        <button className="createbutton" onClick={handleConnect}>
          Connect
        </button>
      </div>
    </div>
  );
}
export default Register;
