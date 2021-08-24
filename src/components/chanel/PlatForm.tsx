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
function PlatForm({ nextStep, handleChange, values }: any) {
  const Continue = (e: any) => {
    e.preventDefault();
    nextStep();
  };
  return (
    <Container component="main" maxWidth="lg">
      <div>
        <form>
          <div className="row mx-auto">
            <div className="col-lg-8 shade-Channel bg-white br-8">
              <div className="row mx-auto px-lg-4 px-md-3">
                <div className="text-center col-12">
                  <h5 className="font-weight-bold my-3 my-lg-4">
                    Where would you like to sell
                  </h5>
                </div>
                <div className="col-md-6 ">
                  <label>
                    <input
                      type="radio"
                      name="product"
                      className="card-input-element"
                    />
                    <div className="panel panel-default card-input shade-card br-8">
                      <div className="my-2">
                        <i className="fab fa-ebay fa-2x text-info"></i>
                      </div>
                      <div className=" font-weight-bold">Marketplace</div>
                      <div className="panel-body">Product specific content</div>
                    </div>
                  </label>
                </div>
                <div className="col-md-6">
                  <label>
                    <input
                      type="radio"
                      name="product"
                      className="card-input-element"
                    />
                    <div className="panel panel-default card-input">
                      <div className="panel-heading">Product B</div>
                      <div className="panel-body">Product specific content</div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div className="col-lg-4"></div>
          </div>
          <Grid container spacing={2}>
            <Button
              onClick={Continue}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Next
            </Button>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default PlatForm;
