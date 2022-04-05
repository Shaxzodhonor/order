
import { Route, Switch } from 'react-router';
import './App.scss';
import SideBar from './components/sideBar/sideBar';

import Home from './pages/home/home';
import Dashboard from './pages/dashboard/dashboard';
import Settings from './pages/settings/Settings';

function App() {

  return (
  <>
  <SideBar />
   <Switch>
      <Route path='/settings' component={Settings} />
      <Route path='/dashboard' component={Dashboard} />
      <Route path='/discount'><h1 style={{color: "white"}}>Discount</h1></Route>
      <Route path='/messages'><h1 style={{color: "white"}}>Messages</h1></Route>
      <Route path='/notifications'><h1 style={{color: "white"}} >Notifications</h1></Route>
      <Route path='/'  component={Home} />
      <Route path='*'>Error</Route>
   </Switch>
  </>)
}

export default App;
