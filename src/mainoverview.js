import { FaRegCircleQuestion } from "react-icons/fa6";
import { FaUserGroup } from "react-icons/fa6";
import { FaPlantWilt } from "react-icons/fa6";
import { FaCalendarDays } from "react-icons/fa6";
function Mainoverview({ Polls }) {
  return (
    <div className="mainoverview">
      <div className="mainoverview1">
        <div>
          <FaRegCircleQuestion className="overviewicon" />
          <aside>
            <p className="par">{Polls.length}</p>
            <p className="pars">Poll Questions</p>
          </aside>
        </div>
        <div>
          <FaPlantWilt className="overviewicon" />
          <aside>
            <p className="par">12</p>
            <p className="pars">Poll Options</p>
          </aside>
        </div>
        <div>
          <FaUserGroup className="overviewicon" />
          <aside>
            <p className="par">58</p>
            <p className="pars">Registered Voters</p>
          </aside>
        </div>
      </div>
      <Overviewpolls Polls={Polls} />
    </div>
  );
}

function Overviewpolls({ Polls }) {
  return (
    <div className="Overviewpolls">
      {Polls.map((Poll) => (
        <Overviewpoll Poll={Poll} />
      ))}
    </div>
  );
}

function Overviewpoll({ Poll }) {
  return (
    <div className="Overviewpoll">
      <p className="pollname">{Poll.camname}</p>
      <p className="polldes">{Poll.camdes}</p>
      <div className="Overviewpoll1">
        <div className="Overviewpoll2">
          <aside>
            <FaCalendarDays className="dateicon" />
            <p>Start Date</p>
          </aside>
          <p className="enddate">{Poll.start} </p>
        </div>
        <div>
          <aside>
            <FaCalendarDays className="dateicon" />
            <p>End Date</p>
          </aside>

          <p className="enddate">{Poll.end}</p>
        </div>
      </div>
      <br></br>
      <button className="votebutton">View result</button>
    </div>
  );
}
export default Mainoverview;
