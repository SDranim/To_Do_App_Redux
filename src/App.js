import './App.css';
import Add from './Components/Add';
import List from './Components/List' 


function App() {
  return (
    <div className="app">
       <h1 className='app-title'>
         To Do App
       </h1>
       <Add/>
       <List/>
    </div>
  );
}

export default App;
