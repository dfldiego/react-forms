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
    </Fragment>
  );
};

export default Initial;
