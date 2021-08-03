import "./App.css";
import Initial from "./components/Initial";
import FormDemo from "./components/ejemplo1-demoFormulario/FormDemo";
import AppUploadingImage from "./components/ejemplo2-uploadingImageFile/AppUploadingImage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <Switch>
          <Route exact path="/" component={Initial} />
          <Route exact path="/form-demo" component={FormDemo} />
          <Route exact path="/upload-image" component={AppUploadingImage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
