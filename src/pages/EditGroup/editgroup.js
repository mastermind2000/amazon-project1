import React from "react";
import ReactDOM from "react-dom";
import { Form, Field } from "react-final-form";
import { TextField, Checkbox, Radio, Select } from "final-form-material-ui";
import {
  Typography,
  Paper,
  Link,
  Grid,
  Button,
  CssBaseline,
  RadioGroup,
  FormLabel,
  MenuItem,
  FormGroup,
  FormControl,
  FormControlLabel
} from "@material-ui/core";
// Picker
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

const onSubmit = async (values) => {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};
const validate = (values) => {
  const errors = {};
  if (!values.Name) {
    errors.Name = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  }
  if (!values.group) {
    errors.group = "Select a group";
  }
  if (!values.policy) {
    errors.policy = "Select a Policy";
  }
  return errors;
};
const Condition = ({ when, is, children }) => (
  <Field name={when} subscription={{ value: true }}>
    {({ input: { value } }) => (value === is ? children : null)}
  </Field>
);
export default function editgroup() {
  return (
    <div style={{ padding: 16, margin: "auto", maxWidth: 600 }}>
      <CssBaseline />
      <Form
        onSubmit={onSubmit}
        initialValues={{ role: "student" }}
        validate={validate}
        render={({ handleSubmit, reset, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit} noValidate>
            <Paper style={{ padding: 16 }}>
              <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    required
                    name="Name"
                    component={TextField}
                    type="text"
                    label="Name"
                  />
                </Grid>

                <Grid item xs={12}>
                  <Field
                    name="email"
                    fullWidth
                    required
                    component={TextField}
                    type="email"
                    label="Email"
                  />
                </Grid>
                <Grid item>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Add Roles</FormLabel>
                    <RadioGroup row>
                      <FormControlLabel
                        label="Student"
                        control={
                          <Field
                            name="role"
                            component={Radio}
                            type="radio"
                            value="student"
                          />
                        }
                      />
                      <FormControlLabel
                        label="Faculty"
                        control={
                          <Field
                            name="role"
                            component={Radio}
                            type="radio"
                            value="faculty"
                          />
                        }
                      />
                      <FormControlLabel
                        label="Admin"
                        control={
                          <Field
                            name="role"
                            component={Radio}
                            type="radio"
                            value="admin"
                          />
                        }
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Condition when="role" is="student">
                    <Field
                      fullWidth
                      name="group"
                      component={Select}
                      label="Apply Group"
                      formControlProps={{ fullWidth: true }}
                    >
                      <MenuItem value="Group1">Student</MenuItem>
                    </Field>
                  </Condition>
                  <Condition when="role" is="faculty">
                    <Field
                      fullWidth
                      name="group"
                      component={Select}
                      label="Apply Group"
                      formControlProps={{ fullWidth: true }}
                    >
                      <MenuItem value="Group2">Faculty</MenuItem>
                    </Field>
                  </Condition>
                  <Condition when="role" is="admin">
                    <Field
                      fullWidth
                      name="group"
                      component={Select}
                      label="Apply Group"
                      formControlProps={{ fullWidth: true }}
                    >
                      <MenuItem value="Group3">Admin</MenuItem>
                    </Field>
                  </Condition>
                </Grid>
                <Grid item xs={12}>
                  <Condition when="role" is="student">
                    <Field
                      fullWidth
                      name="policy"
                      component={Select}
                      label="Select Policies"
                      formControlProps={{ fullWidth: true }}
                    >
                      <MenuItem value="Policy1">
                        {" "}
                        Jupyter Notebook of instance type ml.t2.medium for 60
                        mins duration
                      </MenuItem>
                      <MenuItem value="Policy2">
                        Jupyter Notebook of instance type ml.t2.large for 30
                        mins duration
                      </MenuItem>
                      <MenuItem value="Policy3">
                        Processing Job of instance ml.t3.medium with instance
                        count 1 and additional volume for storage 1GB
                      </MenuItem>
                      <MenuItem value="Policy4">
                        Training Job of instance ml.t3.medium with instance
                        count 1 and additional volume for storage 1GB
                      </MenuItem>
                    </Field>
                  </Condition>
                </Grid>
                <Grid item style={{ marginTop: 16 }}>
                  <Button
                    type="button"
                    variant="contained"
                    onClick={reset}
                    disabled={submitting || pristine}
                  >
                    Reset
                  </Button>
                </Grid>
                <Grid item style={{ marginTop: 16 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={submitting}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </form>
        )}
      />
    </div>
  );
}
