import React, { Fragment } from "react";
import { Button, Card, CardContent, Input } from "@material-ui/core";
import { Form, Formik } from "formik";

const initialValues = {
  photo1: "",
};

const AppUploadingImage = () => {
  return (
    <Fragment>
      <Card>
        <CardContent>
          <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {(formProps) => (
              <Form>
                <Input
                  type="file"
                  name="photo1"
                  onChange={(e) => formProps.setFieldValue("photo1", e.target)}
                />
                <Button type="submit">Submit</Button>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </Fragment>
  );
};

export default AppUploadingImage;
