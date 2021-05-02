import { BrowserRouter, Route, Switch } from "react-router-dom"
import About from "./Components/About"
import Error from "./Components/Error"
import Navigation from "./Components/Navigation"
import FetchRandomUser from "./Components/FetchRandomUser"
import Userform from "./Components/Userform"




function App() {
  return (
      <div>
      <BrowserRouter>
       <Navigation />
     <Switch>
      <Route exact path = "/" component = {FetchRandomUser} />
      <Route path = "/About" component = {About}/> 
      <Route path = "/Error" component= {Error} />
      <Route path = "/Userform" component={Userform} />

      </Switch>
      </BrowserRouter>
      </div>
   
 


    
  );
}

export default App;
