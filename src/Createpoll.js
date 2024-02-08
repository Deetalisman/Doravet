import { Homepage } from "./homepage";
import { FaAlignJustify } from "react-icons/fa6";

export function Createpoll({ setPoll, setView }) {
  function handlePoll() {
    setPoll(true);
    setView(false);
  }
  return (
    <div className="createpoll">
      <div className="createpollmain">
        <FaAlignJustify className="createpollicon" />
        <p>Welcome Ishmael, let's get started.</p>
        <p>Create a poll</p>
        <button className="createbutton" onClick={handlePoll}>
          Create Poll
        </button>
      </div>
    </div>
  );
}
export default Homepage;
