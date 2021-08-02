import "./App.css";
import Initial from "./components/Initial";
import FormDemo from "./components/FormDemo";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <Switch>
          <Route exact path="/" component={Initial} />
          <Route exact path="/form-demo" component={FormDemo} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
