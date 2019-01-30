import React, { Component } from "react";
import Layout from "../../components/Layout";
import Campaign from "../../ethereum/campaign";
import { Card, Grid } from "semantic-ui-react";
import web3 from "../../ethereum/web3";
import ContributeForm from "../../components/ContributeForm";
import { Link } from "../../routes";
import { Button } from "semantic-ui-react";

class CampaignShow extends Component {
  static async getInitialProps(props) {
    const campaign = Campaign(props.query.address); //takes out the wildcard token off the url, ie gives us the current campaign address.
    //console.log(props.query.address);
    const summary = await campaign.methods.getSummary().call();
    //console.log(summary);
    return {
      address: props.query.address,
      minimumContribution: summary[0],
      balance: summary[1],
      requestCount: summary[2],
      contributersCount: summary[3],
      manager: summary[4]
    };
  }

  renderCards() {
    const {
      minimumContribution,
      balance,
      requestCount,
      contributersCount,
      manager
    } = this.props;

    const items = [
      {
        header: manager,
        meta: "Address of manager",
        description:
          "The manager created this campaign and can create requests to withdraw money.",
        style: { overflowWrap: "break-word" }
      },
      {
        header: minimumContribution,
        meta: "Minimum Contribution (wei)",
        description:
          "You must contribute atleast this much amount in wei to become a contributer for this campaign.",
        style: { overflowWrap: "break-word" }
      },
      {
        header: requestCount,
        meta: "Number of requests",
        description:
          "A request is regarding the withdrawal of money from the contract. A request must be approved from the contributers for further processing.",
        style: { overflowWrap: "break-word" }
      },
      {
        header: contributersCount,
        meta: "Number of contributers",
        description:
          "The number of people who have already donated to the campaign.",
        style: { overflowWrap: "break-word" }
      },
      {
        header: web3.utils.fromWei(balance, "ether"),
        meta: "Campaign balance (ether)",
        description: "Total balance left in the campaign to spend.",
        style: { overflowWrap: "break-word" }
      }
    ];

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <h3>Campaign Details</h3>
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>{this.renderCards()}</Grid.Column>
            <Grid.Column width={6}>
              <ContributeForm address={this.props.address} />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Link route={`/campaigns/${this.props.address}/requests`}>
                <a>
                  <Button primary>View Requests</Button>
                </a>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    );
  }
}

export default CampaignShow;
