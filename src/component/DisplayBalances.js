import React from "react";
import { Grid, Segment } from "semantic-ui-react";
import DisplayBalance from "./DisplayBalance";

function DisplayBalances() {
  return (
    <div>
      <DisplayBalance
        size="small"
        plabel="Your Balance:"
        pvalue="2,550.53"
      ></DisplayBalance>
      <Segment textAlign="center">
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <DisplayBalance
                pvalue="1,043.50"
                plabel="Income:"
                color="green"
              ></DisplayBalance>
            </Grid.Column>
            <Grid.Column>
              <DisplayBalance
                pvalue="623.50"
                plabel="Expense:"
                color="red"
              ></DisplayBalance>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  );
}

export default DisplayBalances;
