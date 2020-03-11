import * as React from "react";
import Component from "@reactions/component";
import { Pane, Tab, Tablist} from "evergreen-ui";
import ContentManager from "./ContentManager";
import { TAB_ALL, TAB_USER, TAB_ORG, TAB_REPO, TAB_ISSUES } from "../app/globals";

class Search extends React.Component {
  render() {
    return (
      <Component
        initialState={{
          selectedIndex: 0,
          tabs: [TAB_ALL, TAB_REPO, TAB_ORG, TAB_USER, TAB_ISSUES]
        }}
      >
        {({ state, setState }) => (
          <Pane>
            <Tablist marginBottom={10} flexBasis={240} marginRight={10}>
              {state.tabs.map((tab, index) => (
                <Tab
                  key={tab}
                  id={tab}
                  onClick={() => setState({ rootToken: "edwindotcom" })}
                  onSelect={() => setState({ selectedIndex: index })}
                  isSelected={index === state.selectedIndex}
                  aria-controls={`panel-${tab}`}
                >
                  {tab}
                </Tab>
              ))}
            </Tablist>
            <Pane
              // padding={}
              flex={1}
              alignItems="left"
              display="flex"
            >
              {state.tabs.map((tab, index) => (
                <Pane
                  key={tab}
                  id={`panel-${tab}`}
                  role="tabpanel"
                  aria-labelledby={tab}
                  aria-hidden={index !== state.selectedIndex}
                  display={index === state.selectedIndex ? "block" : "none"}
                >
                  <ContentManager tab={tab}></ContentManager>
                </Pane>
              ))}
            </Pane>
          </Pane>
        )}
      </Component>
    );
  }
}

export default Search;
