import './App.css';
// import Header from './component/header/Header';
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/">
              <Home></Home>
          </Route>
        </Switch>
    </Router>
);
}

export default App;
