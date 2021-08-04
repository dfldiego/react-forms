import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Initial = () => {
  return (
    <Fragment>
      <Link to="/form-demo">
        Demo - Formulario con Formik - Material ui - Yup
      </Link>
      <br />
      <Link to="/upload-image">Upload Image - Formik</Link>
      <br />
      <Link to="/intro-material">App Tutorial Material</Link>
      <br />
      <Link to="/ej1-formik-form">Ejercicio 1 - useFormik - Formulario</Link>
      <br />
      <Link to="/ej2-formik-form">Ejercicio 2 - Formik - signUp</Link>
    </Fragment>
  );
};

export default Initial;
