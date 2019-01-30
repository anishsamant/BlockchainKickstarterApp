import React, { Component } from "react";
import { Card, Button } from "semantic-ui-react";
import factory from "../ethereum/factory";
import Layout from "../components/Layout";
import { Link } from "../routes";

class CampaignIndex extends Component {
  //gets executed on the server side used exclusively by next js
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    return { campaigns };
  }

  renderCampaigns() {
    const items = this.props.campaigns.map(address => {
      //the function passed to the map method gets called for every element in the campaigns array
      //the error function passed to the map method returns the below properties
      return {
        header: address, //header of the card
        description: (
          <Link route={`campaigns/${address}`}>
            {/*This is matched with the rule given in the routes.js file
               Here address is the wildcard text*/}
            <a>View Campaign</a>
          </Link>
        ), //description of the card
        fluid: true //stretches the card from the left to right of the container
      };
    });

    return <Card.Group items={items} />; //displays the provided content in a card format
  }

  render() {
    return (
      <Layout>
        <div>
          <h3>Open Campaigns</h3>
          <Link route="campaigns/new">
            <a>
              <Button
                floated="right"
                content="Create Campaign"
                icon="add circle"
                primary
              />
            </a>
          </Link>
          {this.renderCampaigns()}
        </div>
      </Layout>
    );
  }
}

export default CampaignIndex;
