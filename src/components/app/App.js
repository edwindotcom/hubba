/*global chrome*/

import React from "react";
import { Pane, Heading, Link } from "evergreen-ui";
import Search from "../common/Search.jsx";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Pane>
          <Heading size={900}>Hubba</Heading>
          <Search></Search>
          <Link
            marginRight={16}
            href="https://github.com/edwindotcom/hubba"
            float="right"
          >
            source/help
          </Link>
        </Pane>
      </div>
    );
  }
}

export default App;
