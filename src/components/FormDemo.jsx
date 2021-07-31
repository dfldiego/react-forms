import React from "react";
import {
  Box,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  FormGroup,
  MenuItem,
  TextField,
  Typography,
} from "@material-ui/core";
import { Field, Formik, Form, useField } from "formik";
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
              <Box mb={2}>
                <FormGroup>
                  <Field name="fullName" as={TextField} label="Full Name" />
                </FormGroup>
              </Box>
              <Box mb={2}>
                <FormGroup>
                  <Field
                    name="initialInvestment"
                    type="number"
                    as={TextField}
                    label="Initial Investment"
                  />
                </FormGroup>
              </Box>
              <Box mb={2}>
                <FormGroup>
                  <MyCheckbox
                    name="investmentRisk"
                    value="High"
                    label="High - Super Risky"
                  />
                  <MyCheckbox
                    name="investmentRisk"
                    value="Medium"
                    label="Medium - Risky"
                  />
                  <MyCheckbox
                    name="investmentRisk"
                    value="Low"
                    label="Low - Safe"
                  />
                </FormGroup>
              </Box>
              <Box mb={2}>
                <FormGroup>
                  <Field
                    name="commentAboutInvestmentRisk"
                    as={TextField}
                    multiline
                    rows={3}
                    rowsMax={10}
                  />
                </FormGroup>
              </Box>
              <Box mb={2}>
                <FormGroup>
                  <Field name="dependents" as={TextField} select>
                    <MenuItem value={0}>0</MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                  </Field>
                </FormGroup>
              </Box>
              <Box mb={2}>
                <FormGroup>
                  <MyCheckbox
                    name="acceptedTermsAndConditions"
                    label="Accepted terms and conditions"
                  />
                </FormGroup>
              </Box>
              <pre>{JSON.stringify(values, null, 4)}</pre>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
};

export default FormDemo;

export function MyCheckbox(props) {
  const [field] = useField({
    name: props.name,
    type: "checkbox",
    value: props.value,
  });
  return (
    <FormControlLabel
      control={<Checkbox {...props} {...field} />}
      label={props.label}
    />
  );
}
