import React, { Component } from "react";
import { Button, Form, Input, Message } from "semantic-ui-react";
import Layout from "../../components/Layout";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";
import { Router } from "../../routes";
//Link helps to render anchor tags into React components and navigate around the application
//Router allows to programmatically redirect people from one page to another page within our app

class CampaignNew extends Component {
  state = {
    minimumContribution: "",
    errorMessage: "",
    loading: false
  };

  //event handler function to handle events once form is submited
  onSubmit = async event => {
    event.preventDefault(); //prevents browser from attempting to submit the form to the server

    this.setState({ loading: true, errorMessage: "" });

    //check for any invalid input from the user
    try {
      await window.ethereum.enable()
      const accounts = await web3.eth.getAccounts();
      await factory.methods
        .createCampaign(this.state.minimumContribution)
        .send({
          from: accounts[0]
          //When submitting through browser no need to explicitly mention gas required as metamask will automatically do it for us
        });

      Router.pushRoute("/"); //creates a new history in the browser data
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <h3>Create a Campaign</h3>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          {/*!! converts string to equivalent boolean value*/}
          <Form.Field>
            <label>Minimum Contribution</label>
            <Input
              label="wei"
              labelPosition="right"
              placeholder="Enter a value"
              value={this.state.minimumContribution}
              onChange={event => {
                this.setState({ minimumContribution: event.target.value });
              }}
            />
          </Form.Field>
          <Message
            error
            header="Opps! Something went wrong."
            content={this.state.errorMessage}
          />
          <Button loading={this.state.loading} primary>
            Create
          </Button>
        </Form>
      </Layout>
    );
  }
}

export default CampaignNew;
