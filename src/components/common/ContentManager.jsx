import * as React from "react";
import User from "./User";
import Repo from "./Repo";
import Org from "./Org";
import Issues from "./Issues";
import All from "./All";

import { TAB_USER, TAB_REPO, TAB_ORG, TAB_ALL, TAB_ISSUES } from "../app/globals";


class Content extends React.Component {
  render() {
      if (this.props.tab == TAB_USER) {
        return <User></User>
      } else if (this.props.tab == TAB_REPO) {
        return <Repo></Repo>;
      } else if (this.props.tab == TAB_ORG) {
        return <Org></Org>;
      } else if (this.props.tab == TAB_ISSUES) {
        return <Issues></Issues>;
      } else if (this.props.tab == TAB_ALL) {
        return <All></All>
      }
    }
}

export default Content;
