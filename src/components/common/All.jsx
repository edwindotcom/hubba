import * as React from "react";
import Component from "@reactions/component";
import { TextInput, Select, Button } from "evergreen-ui";
import Cookies from 'universal-cookie';
import {
  SEARCH_TYPE_ARRAY,
  GH_BASE_URL,
  SEARCH_TYPE_REPO
} from "../app/globals";

class All extends React.Component {
  
  constructor(props) {
    super(props);
    this.cookies = new Cookies();
    let orgArgCookie = this.cookies.get("orgArg") || ""
    this.state = {
      orgArg: orgArgCookie,
      rootArg: "",
      pathArg: "",
      showFilter: false,
      searchType: SEARCH_TYPE_REPO
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
    e.preventDefault()
    let qs;
    let url;

    if (this.state.orgArg !== "") {
      this.cookies.set("orgArg", this.state.orgArg, { path: "/" });
      // if user has a slash in it, search that repo
      if (this.state.orgArg.indexOf("/") > -1) {
        qs = `q=${this.state.rootArg}&type=${this.state.searchType}`;
        url = `${GH_BASE_URL}/${this.state.orgArg}/search?${qs}`;
      }else{
        qs = `q=user%3A${this.state.orgArg}+${this.state.rootArg}&type=${this.state.searchType}`;
        url = `${GH_BASE_URL}/search?${qs}`;
      }
    } else {
      qs = `q=${this.state.rootArg}&type=${this.state.searchType}`;
      url = `${GH_BASE_URL}/search?${qs}`;
    }
    window.open(url, "_blank");
  }

  render() {
    let repoFilter;
      repoFilter = (
        <TextInput
          name="orgArg"
          placeholder="User or Org"
          value={this.state.orgArg}
          onChange={this.handleChange}
          width={256}
        />
      );
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
        </form>
      </div>
    );
  }
}

export default All;
