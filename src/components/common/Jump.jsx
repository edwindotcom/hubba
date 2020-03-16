import * as React from "react";
import { Pane, Text, Select, TextInput, Button } from "evergreen-ui";
import { GH_BASE_URL, JUMP_PAGES, JUMP_ROOT, JUMP_GIST, GIST_BASE_URL } from "../app/globals";

class Jump extends React.Component {
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
    e.preventDefault();
    let url
    if (this.state.searchType == JUMP_ROOT) {
        url = `${GH_BASE_URL}/${this.state.searchArg}`;
    } else if (this.state.searchType == JUMP_GIST) {
        url = `${GIST_BASE_URL}/${this.state.searchArg}`;
    } else if (this.state.searchType == JUMP_PAGES) {
        url = `https://${this.state.searchArg}.github.io`;
    }

    window.open(url, "_blank");
  }

  render() {
    return (
      <Pane>
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
            <option key={JUMP_PAGES}>{JUMP_GIST}</option>
            <option key={JUMP_PAGES}>{JUMP_PAGES}</option>
          </Select>
          <Button>GO</Button>
        </form>
        <Pane margin={10}>
          <Text>Jump to a user or org space</Text>
        </Pane>
      </Pane>
    );
  }
}

export default Jump;
