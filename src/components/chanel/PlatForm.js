import React from "react";
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
function PlatForm({ nextStep, handleChange, values }) {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };
  return (
    <Container component="main" maxWidth="xs">
      <div>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <label>
                <input type="radio" name="product" class="card-input-element" />
                <div class="panel panel-default card-input">
                  <div class="panel-heading">Product A</div>
                  <div class="panel-body">Product specific content</div>
                </div>
              </label>
            </Grid>
            <Grid item xs={12}>
              <label>
                <input type="radio" name="product" class="card-input-element" />

                <div class="panel panel-default card-input">
                  <div class="panel-heading">Product B</div>
                  <div class="panel-body">Product specific content</div>
                </div>
              </label>
            </Grid>
            {/* <Grid item xs={12}>
              <TextField
                placeholder="Username"
                label="Username"
                onChange={handleChange("username")}
                defaultValue={values.username}
                // variant="outlined"
                autoComplete="username"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                placeholder="Password"
                label="Password"
                onChange={handleChange("password")}
                defaultValue={values.password}
                // variant="outlined"
                autoComplete="password"
                fullWidth
                type="password"
              />
            </Grid> */}
          </Grid>
          <Button
            onClick={Continue}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Next
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default PlatForm;
