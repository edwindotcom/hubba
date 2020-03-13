import * as React from "react";
import { toaster, TextInput, Button, Strong } from "evergreen-ui";
import { GH_BASE_URL, trimSlash } from "../app/globals";

class Path extends React.Component {
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
    if (this.state.pathArg.indexOf("/") == -1) {
      toaster.danger("Slash '/' delimeter is required");
    }else{
          let url
          let searchStr = trimSlash(this.state.searchArg);

          if(searchStr.indexOf('.') > -1 ){
           url = `${GH_BASE_URL}/${this.state.pathArg}/blob/master/${this.state.searchArg}`;
          }else{
            url = `${GH_BASE_URL}/${this.state.pathArg}/tree/master/${this.state.searchArg}`;
          }
           window.open(url, "_blank");
         }
  }

  render() {
    return (
      <div>
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
          <Strong>Path</Strong>
          <br />
          <TextInput
            name="searchArg"
            placeholder="Path from repo root"
            id={this.props.tab}
            onChange={this.handleChange}
            width={230}
          />
          <Button>GO</Button>
        </form>
      </div>
    );
  }
}

export default Path;
