/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import { useAuth } from '../utils/context/authContext';

function Home() {
  const { user } = useAuth();
  return (
    <div id="home">
      <h4 id="greeting" className="serif">Hello {user.displayName}! </h4>
      <div id="page-top">
        <div>
          <h1 className="serif">About Mentor Connect</h1>
          <p className="text-block">Our mentoring programs often facilitate networking opportunities, allowing mentees to connect with professionals and leaders in their field. This exposure can be particularly beneficial for individuals who may not have access to established networks or connections. By building these relationships, mentees gain access to valuable resources, career opportunities, and support systems.<br /><br /> Learn more about finding a mentor by clicking <a href="/mentors"><b>here</b></a>.</p>
        </div>
        <div>
          <img src="/meeting.jpg" style={{ height: '300px' }} alt="two people meeting" />
        </div>
      </div>
      <div id="page-bottom">
        <img src="/mentoring.jpg" style={{ height: '190px', width: '250px' }} alt="two people meeting" />
        <p className="text-block-small"><b>Matching:</b> Mentees are carefully matched with mentors based on their specific needs, goals, interests, and backgrounds.</p>
        <img src="/mentors2.jpg" style={{ height: '190px' }} alt="two people meeting" />
        <p className="text-block-small"><b>Skill Development:</b> A mentor can help acquire the skills to overcome barriers and achieve goals, regardless of background or starting point.</p>
        <img src="/mentors3.jpg" style={{ height: '190px', width: '300px' }} alt="two people meeting" />
      </div>
    </div>
  );
}

export default Home;
