import * as React from "react";
import Component from "@reactions/component";
import { Pane, TextInput, Select, Button, Text } from "evergreen-ui";
import { SEARCH_TYPE_ARRAY, GH_BASE_URL, SEARCH_TYPE_USER } from "../app/globals";

class All extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

  handleSubmit(event) {
    let qs;
    if(this.state.pathArg != ""){
      qs = `q=user%3A${this.state.pathArg}+${this.state.rootArg}&type=${this.state.searchType}&language=`;
    }else{
      qs = `q=${this.state.rootArg}&type=${this.state.searchType}&language=`;
    }
    let url = `${GH_BASE_URL}/search?${qs}`;
    window.open(url, "_blank");
  }

  toggleFilter() {
    let { showFilter } = this.state;
    this.setState({
      showFilter: !showFilter
    });
  }

  render() {
    let repoFilter;
    if (this.state.showFilter) {
      repoFilter = (
        <TextInput
          name="pathArg"
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
            >
              Filter by Repo
            </Text>
          </Pane>
          <Pane
            margin={10}
            float="left"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            width={300}
            height={160}
          >
            <Text>Easily browse and search GitHub</Text>
          </Pane>
        </form>
      </div>
    );
  }
}

export default All;
