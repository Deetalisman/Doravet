import { useFormik } from "formik";
import { useState } from "react";
import * as yup from "yup";
function Pollform({
  setViewmain,
  Polls,
  setPoll,
  setPolls,
  setView,
  Viewmain,
}) {
  const [error, setError] = useState(false);
  function handleSub() {
    if (values.camname !== "") {
      setViewmain(true);
      setView(true);
      setPoll(false);
      console.log(values);
      console.log("submitted");
      setPolls([values, ...Polls]);
      console.log(Polls);
      setError(false);
    } else {
      console.log("submit");
      setError(true);
    }
  }
  const basicSchema = yup.object().shape({
    camname: yup.string().required("Required"),
    camdes: yup.string().required("Required"),
    start: yup.number().required("Required"),
    end: yup.number().required("Required"),
    question: yup.string().required("Required"),
  });
  const onSubmit = (values) => {
    console.log("submit");
    handleSub();
  };
  const { values, errors, handleSubmit, handleBlur, handleChange } = useFormik({
    initialValues: {
      camname: "",
      camdes: "",
      start: "",
      end: "",
      question: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });
  return (
    <div className="pollform">
      <form onSubmit={handleSubmit}>
        <div className="pollform1">
          <small>
            <label>Campaign name</label>
            <br></br>
            <input
              type="text"
              value={values.camname}
              id="camname"
              placeholder="e.g Headies Award"
              onBlur={handleBlur}
              onChange={handleChange}
            />
          </small>
          <br></br>

          <small>
            <label>Campaign description</label>
            <br></br>
            <input
              type="text"
              id="camdes"
              value={values.camdes}
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="Describe what the poll is about"
            />
          </small>
          <aside>
            <small>
              <label>Start Date</label>
              <br></br>
              <input
                type="date"
                value={values.start}
                id="start"
                placeholder="Aug"
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </small>
            <br></br>

            <small>
              <label>End Date</label>
              <br></br>
              <input
                type="date"
                id="end"
                value={values.end}
                placeholder="e.g Headies Award"
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </small>
          </aside>
        </div>
        <div className="pollform2">
          <small>
            <input
              type="text"
              value={values.question}
              id="question"
              placeholder="Question 1"
              onBlur={handleBlur}
              onChange={handleChange}
            />
          </small>
          <br></br>
          <div className="pollformsubmit">
            <button type="submit" className="createbutton" onClick={handleSub}>
              Create Campaign
            </button>
            {values.camname == "" && error && <p>Fill all field</p>}
          </div>
        </div>
      </form>
    </div>
  );
}

export default Pollform;
