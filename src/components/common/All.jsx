import * as React from "react";
import Component from "@reactions/component";
import { TextInput, Select, Button } from "evergreen-ui";
import { SEARCH_TYPE_ARRAY, GH_BASE_URL, SEARCH_TYPE_USER } from "../app/globals";

class All extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rootArg: "",
      searchType: SEARCH_TYPE_USER
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    let qs = `q=${this.state.rootArg}&type=${this.state.searchType}&language=`;
    let url = `${GH_BASE_URL}/search?${qs}`;
    window.open(url, "_blank");
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <TextInput
            name="rootArg"
            placeholder="Search"
            id={this.props.tab}
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
