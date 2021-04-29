import './App.css';
import {Switch , Route } from 'react-router-dom'
import Routes from "Routing/Routes"

function App() {
  return (
    <div className="App">
      <Switch>
      { Routes.map(route => (
          <Route 
            key = {route.path}
            path ={route.path}
            component ={route.component}
          />
        ))}
      </Switch>
      
    </div>
  );
}

export default App;
