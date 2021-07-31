import React, { Fragment } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  FormGroup,
  MenuItem,
  TextField,
  Typography,
} from "@material-ui/core";
import { Field, Formik, Form, useField, ErrorMessage } from "formik";
import { array, boolean, mixed, number, object, string } from "yup";
/* import InvestmentDetails from "./InvestmentDetails"; */

// valores iniciales (fuera del componente)
const initialValues = {
  fullName: "",
  initialInvestment: 0,
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

        <Formik
          validationSchema={object({
            fullName: string()
              .required("Your name is mandatory")
              .min(2)
              .max(100),
            initialInvestment: number().required().min(2),
            dependents: number().required().min(0).max(5),
            acceptedTermsAndConditions: boolean().oneOf([true]),
            investmentRisk: array(
              string().oneOf(["High", "Medium", "Low"])
            ).min(1),
            commentAboutInvestmentRisk: mixed().when("investmentRisk", {
              is: (investmentRisk) =>
                investmentRisk.find((ir) => ir === "High"),
              then: string().required().min(20).max(100),
              otherwise: string().min(28).max(100),
            }),
          })}
          initialValues={initialValues}
          onSubmit={(values, formikHelpers) => {
            return new Promise((res) => {
              setTimeout(() => {
                console.log(values);
                console.log(formikHelpers);
                console.log("-------");
                res();
              }, 5000);
            });
          }}
        >
          {({ values, errors, isSubmitting, isValidating }) => (
            <Form>
              <Box mb={2}>
                <FormGroup>
                  <Field name="fullName" as={TextField} label="Full Name" />
                  <ErrorMessage name="fullName" />
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
                  <ErrorMessage name="initialInvestment" />
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
                  <MyCheckbox
                    name="investmentRisk"
                    value="very Low"
                    label="very Low"
                  />
                </FormGroup>
                <ErrorMessage name="investmentRisk" />
              </Box>
              <Box mb={2}>
                <FormGroup>
                  <Field
                    name="commentAboutInvestmentRisk"
                    as={TextField}
                    multiline
                    rowsmin={3}
                    maxRows={10}
                  />
                  <ErrorMessage name="commentAboutInvestmentRisk" />
                </FormGroup>
              </Box>
              <Box mb={2}>
                <FormGroup>
                  <Field name="dependents" as={TextField} select>
                    <MenuItem value={-1} disabled>
                      --Select one dependents--
                    </MenuItem>
                    <MenuItem value={0}>0</MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                  </Field>
                  <ErrorMessage name="dependents" />
                </FormGroup>
              </Box>
              <Box mb={2}>
                <FormGroup>
                  <MyCheckbox
                    name="acceptedTermsAndConditions"
                    label="Accepted terms and conditions"
                  />
                  <ErrorMessage name="acceptedTermsAndConditions" />
                </FormGroup>
              </Box>
              <Box mb={2}>
                <Button
                  variant="contained"
                  type="submit"
                  disabled={isSubmitting || isValidating}
                >
                  Submit
                </Button>
              </Box>
              <pre>{JSON.stringify(errors, null, 4)}</pre>
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
