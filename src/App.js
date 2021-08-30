import Home from "./Home";
import Details from "./Details";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Home/:id" component={Details} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
