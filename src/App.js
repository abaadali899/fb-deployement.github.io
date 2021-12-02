
import './App.css';

import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import  Widgets  from './Widgets';
import Login from './Login';
import { useStatevalue } from './StateProvider';

function App() {
  const [{user},dispatch] = useStatevalue();
 // const user =null;
  return (
    //BEM naming convention 
    <div className="app">
      {!user ?(
        <Login/>
      ) :(
      
    <>
    <Header />
       <div className='app__body'> 
       <Sidebar/>  
       <Feed/>
      <Widgets/>
      </div>
      </>
      )}
    </div>
  );
}

export default App;
