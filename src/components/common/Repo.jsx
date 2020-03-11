import * as React from "react";
import { Strong, TextInput, Button } from "evergreen-ui";
import {
  GH_BASE_URL
} from "../app/globals";

class Repo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rootArg: "",
      searchArg: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(e) {
                    // https://github.com/search?q=user%3Aedwindotcom+pages
                    let url = `${GH_BASE_URL}/search?q=user%3A${this.state.rootArg}+${this.state.searchArg}`;
                    window.open(url, "_blank");
                  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <TextInput
            name="rootArg"
            placeholder="User or Org"
            id={this.props.tab}
            onChange={this.handleChange}
            width={130}
          />
          <Strong size={500}> / </Strong>
          <TextInput
            name="searchArg"
            placeholder="Search Param"
            id={this.props.tab}
            onChange={this.handleChange}
            width={130}
          />
          &nbsp;
          <Button>GO</Button>
        </form>
      </div>
    );
  }
}

export default Repo;
