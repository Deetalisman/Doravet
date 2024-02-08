import img1 from "./asset/Frame 1762.png";
import img2 from "./asset/Group 15 1.png";

function Page1() {
  return (
    <div className="page1">
      <Page1top />
      <Page1bottom />
    </div>
  );
}

function Page1top() {
  return (
    <div className="page1top">
      <aside>
        <img src={img1} />
      </aside>
      <aside className="nav">
        <a>Feature</a>
        <a>FAQs</a>
        <a>FAQs</a>
      </aside>
      <a href="/login">
        <button className="createbutton">Create New Poll</button>
      </a>
    </div>
  );
}

function Page1bottom() {
  return (
    <div className="page1bottom">
      <aside>
        <p>Strategy for a better life.</p>
        <h1>
          <span>Cast Your Vote</span> In Accordance With Your Conviction.
        </h1>
        <p className="pass">
          Your voice is the catalyst for change.Join us on a transformative
          journey,empowering you to shape the future you desire.
        </p>
        <div>
          <a href="/login">
            <button className="createbutton">Create New Poll</button>
          </a>
          <button className="votebutton">Vote in a poll</button>
        </div>
      </aside>
      <article>
        <img src={img2} />
      </article>
    </div>
  );
}
export default Page1;
