import { BrowserRouter, Route, Switch } from "react-router-dom"
import About from "./Components/About"
import Error from "./Components/Error"
import Navigation from "./Components/Navigation"
import FetchRandomUser from "./Components/FetchRandomUser"




function App() {
  return (
      <div>
      <BrowserRouter>
       <Navigation />
     <Switch>
      <Route exact path = "/" component = {FetchRandomUser} />
      <Route path = "/About" component = {About}/> 
      <Route path = "/Error" component= {Error} />
      </Switch>
      </BrowserRouter>
      </div>
   
 


    
  );
}

export default App;
