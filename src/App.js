import "./App.css";
import Initial from "./components/Initial";
import FormDemo from "./components/ejemplo1-demoFormulario/FormDemo";
import AppUploadingImage from "./components/ejemplo2-uploadingImageFile/AppUploadingImage";
import AppMaterial from "./components/ejemplo3-introMaterialUI/AppMaterial";
import FormularioFormikMaterial from "./components/ejemplo4-tutoFormik/ej1-form-useFormik-hook/FormularioFormikMaterial";
import SignUp from "./components/ejemplo4-tutoFormik/ej2-form-Formik-reactContext/SignUp";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <Switch>
          <Route exact path="/" component={Initial} />
          <Route exact path="/form-demo" component={FormDemo} />
          <Route exact path="/upload-image" component={AppUploadingImage} />
          <Route exact path="/intro-material" component={AppMaterial} />
          <Route
            exact
            path="/ej1-formik-form"
            component={FormularioFormikMaterial}
          />
          <Route exact path="/ej2-formik-form" component={SignUp} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
