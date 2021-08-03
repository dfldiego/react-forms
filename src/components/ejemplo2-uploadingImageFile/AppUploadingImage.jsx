import React, { Fragment } from "react";
import { Button, Card, CardContent, Input } from "@material-ui/core";
import { Form, Formik } from "formik";

const initialValues = {
  photo1: "",
};

const AppUploadingImage = () => {
  const baseURL = "http://localhost:3000/image";
  return (
    <Fragment>
      <Card>
        <CardContent>
          <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
              console.log(values);
              let data = new FormData();
              data.append("photo1", values.photo1);
              return fetch(baseURL, {
                method: "post",
                headers: new Headers({ Accept: "application/json" }),
                body: data,
              })
                .then((response) => response.json())
                .then((data) => console.log(data))
                .catch((err) => console.log(err));
            }}
          >
            {(formProps) => (
              <Form>
                <Input
                  type="file"
                  name="photo1"
                  onChange={(e) =>
                    formProps.setFieldValue("photo1", e.target.files[0])
                  }
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
