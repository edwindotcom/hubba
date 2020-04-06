import * as React from "react";
import { Pane, Text, Select, TextInput, Button } from "evergreen-ui";
import {
  GH_BASE_URL,
  JUMP_PAGES,
  JUMP_ROOT,
  JUMP_GIST,
  JUMP_TEAM,
  GIST_BASE_URL,
  trimStr
} from "../app/globals";

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
    let url;
    let searchArg = trimStr(this.state.searchArg);

    // If it's github.com just pass the string through
    if (this.state.searchType === JUMP_ROOT) {
      url = `${GH_BASE_URL}/${searchArg}`;
    } else {
      // If NOT github.com
      if (searchArg.indexOf("/") > -1) {
        let [rootArg, repoArg] = searchArg.split("/");
        if (this.state.searchType === JUMP_GIST) {
          url = `${GIST_BASE_URL}/${rootArg}`;
        } else if (this.state.searchType === JUMP_PAGES) {
          url = `https://${rootArg}.github.io/${repoArg}`;
        } else if (this.state.searchType === JUMP_TEAM) {
          url = `https://github.com/orgs/${rootArg}/teams`;
        }
      } else {
        // Just an org param
        if (this.state.searchType === JUMP_GIST) {
          url = `${GIST_BASE_URL}/${searchArg}`;
        } else if (this.state.searchType === JUMP_PAGES) {
          url = `https://${searchArg}.github.io`;
        } else if (this.state.searchType === JUMP_TEAM) {
          url = `https://github.com/orgs/${searchArg}/teams`;
        }
      }
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
            <option key={JUMP_GIST}>{JUMP_GIST}</option>
            <option key={JUMP_PAGES}>{JUMP_PAGES}</option>
            <option key={JUMP_TEAM}>{JUMP_TEAM}</option>
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
