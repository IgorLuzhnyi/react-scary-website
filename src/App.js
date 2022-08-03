import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ContactData from "./components/ContactData";
import Contracts from "./components/Contracts";
import HomePage from "./components/HomePage";
import Movies from "./components/Movies";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/posts" component={Posts} />
          <Route path="/movies" component={Movies} />
          <Route path="/contacts" exact component={Contracts} />
          <Route path="/contacts/:test" component={ContactData} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
