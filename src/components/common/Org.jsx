import * as React from "react";
import { Strong, TextInput, Button } from "evergreen-ui";
import {
  GH_BASE_URL
} from "../app/globals";

class Org extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rootArg: "",
      repoArg: ""
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
    let qs = `q=${this.state.repoArg}&type=&language=`;
    let url = `${GH_BASE_URL}/${this.state.rootArg}?${qs}`;
    window.open(url, "_blank");
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <TextInput
            name="rootArg"
            placeholder="Search Org Repos"
            id={this.props.tab}
            onChange={this.handleChange}
            width={130}
          />
          <Strong size={500}> / </Strong>
          <TextInput
            name="repoArg"
            placeholder="Repo Filter"
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

export default Org;
