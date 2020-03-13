import * as React from "react";
import User from "./User";
import Org from "./Org";
import Issues from "./Issues";
import Path from "./Path";
import All from "./All";

import { TAB_USER, TAB_REPO, TAB_ORG, TAB_ALL, TAB_ISSUES, TAB_PATH } from "../app/globals";


class Content extends React.Component {
  render() {
      if (this.props.tab === TAB_USER) {
        return <User></User>
      } else if (this.props.tab === TAB_ORG) {
        return <Org></Org>;
      } else if (this.props.tab === TAB_ISSUES) {
        return <Issues></Issues>;
      } else if (this.props.tab === TAB_PATH) {
        return <Path></Path>;
      } else if (this.props.tab === TAB_ALL) {
        return <All></All>
      }
    }
}

export default Content;
