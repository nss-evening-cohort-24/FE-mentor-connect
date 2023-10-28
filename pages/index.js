/* eslint-disable @next/next/no-img-element */
import meeting from '../public/meeting.jpg';
import { useAuth } from '../utils/context/authContext';

function Home() {
  const { user } = useAuth(); // TODO: COMMENT IN FOR AUTH
  return (
    <div id="home">
      <h4 id="greeting">Hello {user.displayName}! </h4>
      <div id="page-top">
        <div>
          <h1>Our Organization</h1>
          <p className="text-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin sed libero enim sed faucibus turpis. Integer vitae justo eget magna fermentum. Facilisi etiam dignissim diam quis enim. Et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Urna duis convallis convallis tellus id interdum. Ultricies integer .</p>
        </div>
        <div>
          <img src="/meeting.jpg" style={{ height: '300px' }} alt="two people meeting" />
        </div>
      </div>
      <div id="page-bottom">
        <img src={meeting} alt="two people meeting" />
        <p className="text-block-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin sed libero enim sed faucibus turpis.</p>
        <img src={meeting} alt="two people meeting" />
        <p className="text-block-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin sed libero enim sed faucibus turpis.</p>
        <img src={meeting} alt="two people meeting" />
        <p className="text-block-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin sed libero enim sed faucibus turpis.</p>
      </div>
    </div>
  );
}

export default Home;
