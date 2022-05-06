import { Outlet } from 'react-router-dom'

import Directory from '../../components/directory/direcotry.component';

const Home = () => {
  return (
    <div>
      <Outlet />
      <Directory />
    </div>

  );
}

export default Home;
