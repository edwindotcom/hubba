import * as React from "react";
import { Pane, toaster, TextInput, Button, Strong } from "evergreen-ui";
import { GH_BASE_URL, trimStr } from "../app/globals";

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
    } else {
      let url;
      let searchStr = trimStr(this.state.searchArg);
      // Case: Is a path and has dot in filename - exact file
      if (searchStr.indexOf("/") > -1 && searchStr.indexOf(".") > -1) {
        url = `${GH_BASE_URL}/${this.state.pathArg}/blob/master/${this.state.searchArg}`;
      // Case: Not a path - file name search
      }else if (searchStr.indexOf("/") === -1) {
        url = `${GH_BASE_URL}/${this.state.pathArg}/search?q=in%3Apath+${this.state.searchArg}&unscoped_q=in%3Apath+${this.state.searchArg}`;
      // Case: Has slash in path, but not dot, it's a path 
      // } else if (searchStr.indexOf("/") == -1) {
      //   url = `${GH_BASE_URL}/${this.state.pathArg}/search?q=in%3Apath+${this.state.searchArg}&unscoped_q=in%3Apath+${this.state.searchArg}`;
      } else {
        url = `${GH_BASE_URL}/${this.state.pathArg}/tree/master/${this.state.searchArg}`;
      }
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
          <Strong>Path</Strong>
          <br />
          <TextInput
            name="searchArg"
            placeholder="Path, folder, or filename"
            id={this.props.tab}
            onChange={this.handleChange}
            width={230}
          />
          <Button>GO</Button>
        </form>
      </Pane>
    )
  }
}

export default Path;
