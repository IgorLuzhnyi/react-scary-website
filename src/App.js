import { HashRouter, Route } from "react-router-dom";
import ContactData from "./components/contacts/ContactData";
import Contracts from "./components/contacts/Contracts";
import Header from "./components/header/Header";
import HomePage from "./components/home/HomePage";
import Movies from "./components/movies/Movies";
import Posts from "./components/posts/Posts";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Route path="/" component={Header} />
        <Route path="/" exact component={HomePage} />
        <Route path="/posts" component={Posts} />
        <Route path="/movies" component={Movies} />
        <Route path="/contacts" exact component={Contracts} />
        <Route path="/contacts/:test" component={ContactData} />
      </HashRouter>
    </div>
  );
}

export default App;
