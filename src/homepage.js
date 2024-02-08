import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import img1 from "./asset/Frame 1762.png";
import { useState } from "react";
import { Createpoll } from "./Createpoll";
import Pollform from "./pollform";
import Mainoverview from "./mainoverview";
import { FaHouse } from "react-icons/fa6";
import { FaPrescriptionBottle } from "react-icons/fa6";
import { FaPeopleRobbery } from "react-icons/fa6";
import { FaBell } from "react-icons/fa6";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
export function Homepage() {
  const [View, setView] = useState(true);
  const [Viewmain, setViewmain] = useState(false);
  const [Poll, setPoll] = useState(false);
  const [Voters, setVoters] = useState(false);
  const [Polls, setPolls] = useState([]);
  function handlePoll() {
    setPoll(true);
    setView(false);
  }
  function handleView() {
    setView(true);
    setPoll(false);
  }
  return (
    <div className="Homepage">
      <div className="Homepageleft">
        <img src={img1} />
        <aside>
          <li className={View ? "back" : ""} onClick={handleView}>
            <FaHouse id="icon" /> Overview
          </li>
          <li className={Poll && "back"} onClick={handlePoll}>
            <FaPrescriptionBottle id="icon" /> Poll
          </li>
          <li className={Voters && "back"}>
            <FaPeopleRobbery id="icon" /> Voters
          </li>
          <li>
            <FaBell id="icon" />
            Notifications
          </li>
          <li>
            <FaArrowRightFromBracket id="iconn" />
            Log out
          </li>
        </aside>
      </div>
      <div className="Homepageright">
        <div className="Homepagerightbar">
          <h2>{View ? "Overview" : Poll ? "Poll" : "Voters"}</h2>
          <aside>
            <a className="support">Support</a>
            <a>
              <FaUser id="icon" />
              Ishmael
            </a>
          </aside>
        </div>
        <div className="ground">
          {View && !Viewmain && (
            <Createpoll setPoll={setPoll} setView={setView} />
          )}
          {Poll && (
            <Pollform
              Viewmain={Viewmain}
              setViewmain={setViewmain}
              setPoll={setPoll}
              setPolls={setPolls}
              Polls={Polls}
              setView={setView}
            />
          )}
          {Viewmain && View && <Mainoverview Polls={Polls} />}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
