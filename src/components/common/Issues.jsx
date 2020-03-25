import * as React from "react";
import { Pane, toaster, TextInput, Button, Strong } from "evergreen-ui";
import { GH_BASE_URL } from "../app/globals";

class Issues extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pathArg: "",
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
    e.preventDefault();
    if (this.state.pathArg.indexOf("/") === -1) {
      toaster.danger("Slash '/' delimeter is required");
    }else{
      let url = `${GH_BASE_URL}/${this.state.pathArg}/issues?q=${this.state.searchArg}`;
      window.open(url, "_blank");
    }
  }

  render() {
    return (
      <Pane>
        <form onSubmit={this.handleSubmit}>
          <Strong>GitHub user/repo:</Strong> <br />
          <TextInput
            name="pathArg"
            placeholder="User/Repo"
            id={this.props.tab}
            onChange={this.handleChange}
            width={230}
          />
          <br />
          <Strong>Issues Query:</Strong>
          <br />
          <TextInput
            name="searchArg"
            placeholder="label:bug"
            id={this.props.tab}
            onChange={this.handleChange}
            width={230}
          />
          <Button>GO</Button>
        </form>
      </Pane>
    );
  }
}

export default Issues;
