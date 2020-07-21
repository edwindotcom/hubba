import * as React from "react";
import Jump from "./Jump";
import Issues from "./Issues";
import Path from "./Path";
import All from "./All";

import { TAB_JUMP, TAB_ALL, TAB_ISSUES, TAB_PATH } from "../app/globals";


class Content extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          currentOrgRepo: null
      };    
  }

  setOrgRepo = (val) => {
        this.setState({ currentOrgRepo: val })
        console.log("currentOrgRepo: " + this.state.currentOrgRepo);
  }

  render() {
      if (this.props.tab === TAB_JUMP) {
        return <Jump></Jump>;
      } else if (this.props.tab === TAB_ISSUES) {
        return <Issues></Issues>;
      } else if (this.props.tab === TAB_PATH) {
        return <Path></Path>;
      } else if (this.props.tab === TAB_ALL) {
        return <All callback={this.setOrgRepo}></All>;
      }
    }
}

export default Content;
