import * as React from "react";
import { Pane, Select, Button } from "evergreen-ui";
import Cookies from "universal-cookie";
import {
    GH_BASE_URL,
    JUMP_PAGES,
    JUMP_ROOT,
    JUMP_GIST,
    JUMP_TEAM,
    JUMP_ACTIONS,
    JUMP_ACTIONS_WF,
    GIST_BASE_URL,
    trimStr,
} from "../app/globals";

class Jump extends React.Component {
    constructor(props) {
        super(props);
        // Set Cookies for last value and the history of values
        this.cookies = new Cookies();
        let searchArgCookie = this.cookies.get("searchArg") || "";
        let searchArrayCookie = this.cookies.get("searchArray") || [];

        this.state = {
            searchArg: searchArgCookie,
            searchArray: searchArrayCookie,
            searchType: JUMP_ROOT,
        };
        console.log(this.state.searchArray);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let url;
        let searchArg = trimStr(this.state.searchArg);
        // Cookies
        this.cookies.set("searchArg", this.state.searchArg, { path: "/" });
        this.state.searchArray.push(this.state.searchArg)
        this.cookies.set("searchArray", this.state.searchArray, {
            path: "/",
        });

        // If it's github.com just pass the string through
        if (this.state.searchType === JUMP_ROOT) {
            url = `${GH_BASE_URL}/${searchArg}`;
        } else {
            // If NOT github.com
            if (searchArg.indexOf("/") > -1) {
                let [rootArg, repoArg] = searchArg.split("/");
                if (this.state.searchType === JUMP_GIST) {
                    url = `${GIST_BASE_URL}/${rootArg}`;
                } else if (this.state.searchType === JUMP_PAGES) {
                    url = `https://${rootArg}.github.io/${repoArg}`;
                } else if (this.state.searchType === JUMP_TEAM) {
                    url = `https://github.com/orgs/${rootArg}/teams`;
                } else if (this.state.searchType === JUMP_ACTIONS) {
                    url = `https://github.com/${searchArg}/actions`;
                } else if (this.state.searchType === JUMP_ACTIONS_WF) {
                    url = `https://github.com/${searchArg}/tree/master/.github/workflows`;
                }
            } else {
                // Just an org param
                if (this.state.searchType === JUMP_GIST) {
                    url = `${GIST_BASE_URL}/${searchArg}`;
                } else if (this.state.searchType === JUMP_PAGES) {
                    url = `https://${searchArg}.github.io`;
                } else if (this.state.searchType === JUMP_TEAM) {
                    url = `https://github.com/orgs/${searchArg}/teams`;
                }else{
                    url = `${GH_BASE_URL}/${searchArg}`;
                }
            }
        }

        window.open(url, "_blank");
    }

    render() {
        return (
            <Pane>
                <form onSubmit={this.handleSubmit}>
                    {/* <TextInput
                        name="searchArg"
                        placeholder="Jump to User/Org"
                        id={this.props.tab}
                        value={this.state.searchArg}
                        onChange={this.handleChange}
                        width={150}
                    /> */}
                    <input
                        name="searchArg"
                        placeholder="Jump to User/Org"
                        id={this.props.tab}
                        value={this.state.searchArg}
                        onChange={this.handleChange}
                        width={150}
                        list="opts"
                    />
                    <datalist id="opts">
                        {this.state.searchArray.map((val) => (
                            <option value={val}>{val}</option>
                        ))}
                    </datalist>
                    <Select
                        name="searchType"
                        value={this.state.searchType}
                        onChange={this.handleChange}
                    >
                        <option key={JUMP_ROOT}>{JUMP_ROOT}</option>
                        <option key={JUMP_GIST}>{JUMP_GIST}</option>
                        <option key={JUMP_PAGES}>{JUMP_PAGES}</option>
                        <option key={JUMP_TEAM}>{JUMP_TEAM}</option>
                        <option key={JUMP_ACTIONS}>{JUMP_ACTIONS}</option>
                        <option key={JUMP_ACTIONS_WF}>{JUMP_ACTIONS_WF}</option>
                    </Select>
                    <Button>GO</Button>
                </form>
            </Pane>
        );
    }
}

export default Jump;
