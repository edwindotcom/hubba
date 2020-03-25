/*global chrome*/

import React from "react";
import { Pane, Heading } from "evergreen-ui";
import logo from "../../assets/icon128.png"
import Hubba from "../common/Hubba";

function openLink() {
  chrome.tabs.create({
    url: "https://github.com/edwindotcom/hubba"
  });
}

const linkStyle = {
  position: "absolute",
  right: 4,
  bottom: 4,
  display: "flex",
  justifyContent: "center",
  flexDirection: "column-reverse",
  alignItems: "flex-end"
};
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Pane>
          <Pane flex={1} alignItems="center" display="flex">
            <img src={logo} alt="Logo" height={48} width={48} />
            <Heading size={900}>Hubba</Heading>
          </Pane>
          <Hubba></Hubba>
          <Pane style={linkStyle}>
            <Heading
              cursor="pointer"
              size={100}
              onClick={openLink}
            >
              source/help
            </Heading>
          </Pane>
        </Pane>
      </div>
    );
  }
}

export default App;
