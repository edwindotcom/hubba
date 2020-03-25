import * as React from "react";
import Component from "@reactions/component";
import { Pane, TextInput, Select, Button, Text } from "evergreen-ui";
import {
  SEARCH_TYPE_ARRAY,
  GH_BASE_URL,
  SEARCH_TYPE_USER,
  SEARCH_TYPE_REPO
} from "../app/globals";

class All extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userArg: "",
      rootArg: "",
      pathArg: "",
      showFilter: false,
      searchType: SEARCH_TYPE_USER
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleFilter = this.toggleFilter.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault()
    let qs;
    if (this.state.userArg !== "") {
      let userArg;
      // if user has a slash in it, only use the first token
      if (this.state.userArg.indexOf("/") > -1) {
        userArg = this.state.userArg.split("/")[0];
      } else {
        userArg = this.state.userArg;
      }
      qs = `q=user%3A${userArg}+${this.state.rootArg}&type=${this.state.searchType}&language=`;
    } else {
      qs = `q=${this.state.rootArg}&type=${this.state.searchType}&language=`;
    }
    let url = `${GH_BASE_URL}/search?${qs}`;
    window.open(url, "_blank");
  }

  toggleFilter() {
    let { showFilter } = this.state;
    if (this.state.searchType === SEARCH_TYPE_USER){
      this.setState({searchType: SEARCH_TYPE_REPO})
    }
      this.setState({
        showFilter: !showFilter
      });
  }

  render() {
    let repoFilter;
    if (this.state.showFilter) {
      repoFilter = (
        <TextInput
          name="userArg"
          placeholder="User or Org"
          onChange={this.handleChange}
          width={256}
        />
      );
    } else {
      repoFilter = (<div></div>);
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {repoFilter}
          <TextInput
            name="rootArg"
            placeholder="Search..."
            onChange={this.handleChange}
            width={150}
          />
          <Component>
            {({ state, setState }) => (
              <Select
                name="searchType"
                value={this.state.searchType}
                onChange={this.handleChange}
              >
                {SEARCH_TYPE_ARRAY.map(val => (
                  <option key={val}>{val}</option>
                ))}
                }
              </Select>
            )}
          </Component>
          <Button>GO</Button>
          <br></br>
          <Pane float="right">
            <Text
              cursor="pointer"
              onClick={this.toggleFilter}
              name="showFilter"
              value="{true}"
              textDecoration="underline"
            >
              Filter by Repo
            </Text>
          </Pane>
          <Pane marginTop={20}>
            <Text>Easily browse and search GitHub</Text>
          </Pane>
        </form>
      </div>
    );
  }
}

export default All;
