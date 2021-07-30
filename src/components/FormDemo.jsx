import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { Field, Formik, Form } from "formik";
/* import InvestmentDetails from "./InvestmentDetails"; */

// valores iniciales (fuera del componente)
const initialValues = {
  fullName: "",
  initialInvestment: undefined,
  investmentRisk: [],
  commentAboutInvestmentRisk: "",
  dependents: -1,
  acceptedTermsAndConditions: false,
};

const FormDemo = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4">New Account</Typography>

        <Formik initialValues={initialValues} onSubmit={() => {}}>
          {({ values }) => (
            <Form>
              <Field name="fullName" />
              <Field name="initialInvestment" type="number" />

              <Field name="investmentRisk" type="checkbox" value="High" />
              <Field name="investmentRisk" type="checkbox" value="Medium" />
              <Field name="investmentRisk" type="checkbox" value="Low" />

              <Field name="commentAboutInvestmentRisk" as="textarea" />

              <Field name="dependents" as="select">
                <option value={0}>0</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </Field>

              <Field name="acceptedTermsAndConditions" type="checkbox" />

              <pre>{JSON.stringify(values, null, 4)}</pre>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
};

export default FormDemo;
