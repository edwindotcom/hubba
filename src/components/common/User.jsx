import * as React from "react";
import { Select, TextInput, Button } from "evergreen-ui";
import { GH_BASE_URL, JUMP_PAGES, JUMP_ROOT } from "../app/globals";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchArg: "",
      searchType: JUMP_ROOT
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
    let url
    if (this.state.searchType == JUMP_ROOT) {
        url = `${GH_BASE_URL}/${this.state.searchArg}`;
    } else if (this.state.searchType == JUMP_PAGES) {
        url = `https://${this.state.searchArg}.github.io`;
    }

    window.open(url, "_blank");
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <TextInput
            name="searchArg"
            placeholder="Jump to User/Org"
            id={this.props.tab}
            onChange={this.handleChange}
            width={150}
          />
          <Select
            name="searchType"
            value={this.state.searchType}
            onChange={this.handleChange}
          >
            <option key={JUMP_ROOT}>{JUMP_ROOT}</option>
            <option key={JUMP_PAGES}>{JUMP_PAGES}</option>
          </Select>
          <Button>GO</Button>
        </form>
      </div>
    );
  }
}

export default User;
