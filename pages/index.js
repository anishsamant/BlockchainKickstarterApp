import React, { Component } from "react";
import factory from "../ethereum/factory";
import { Card } from "semantic-ui-react";

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
        description: <a>View Campaign</a>, //description of the card
        fuild: true //stretches the card from the left to right of the container
      };
    });

    return <Card.Group items={items} />; //displays the provided content in a card format
  }

  render() {
    return (
      <div>
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.0/dist/semantic.min.css"
        />
        {this.renderCampaigns()}
      </div>
    );
  }
}

export default CampaignIndex;
