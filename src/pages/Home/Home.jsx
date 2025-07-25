import './Home.css';

import Sidebar from './../../components/SIdebar/Sidebar';
import Feed from '../../components/Feed/Feed';
const Home = ({ sidebar }) => {
  return (
    <>
      <Sidebar sidebar={sidebar} />
      <div className={`container ${!sidebar ? '' : 'large-container'}`}>
        <Feed />
      </div>
    </>
  );
};

export default Home;
