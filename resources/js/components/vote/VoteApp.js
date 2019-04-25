import React, { Component } from "react";
import autoBind from "react-autobind";
import TabVote from './tab/tabVote/TabVote';
import TabInfo from './tab/tabInfo/TabInfo';
import TabResult from './tab/tabResult/TabResult';
import axios from 'axios'
import WarningAlert from '../utils/WarningAlert'

class VoteApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: 1,
            tabChildren: 1,
            pollId: '',
            pollOptionFake: [],
            participantVote: [],
        };
        autoBind(this);
    }
    componentDidMount() {
        axios.get(window.Laravel.baseUrl + '/api/vote')
            .then(response => {
                const { pollOption, participantVote, pollId } = response.data;
                this.setState({
                    pollOptionFake: pollOption,
                    participantVote: participantVote,
                    pollId: pollId,
                })
            })
            .catch(function (error) {
                $('#myModal').modal('show')
            })
    }
    handleClickTabVote() {
        this.setState({
            tab: 1
        });
    }
    handleClickTabInfo() {
        this.setState({
            tab: 2
        });
    }
    handleClickTabResult() {
        this.setState({
            tab: 3
        });
        this.loadData()
    }
    handleClickTabChildren1() {
        this.setState({
            tabChildren: 1
        });
    }
    handleClickTabChildren2() {
        this.setState({
            tabChildren: 2
        });
    }

    loadData() {
        axios.get(window.Laravel.baseUrl + '/api/vote')
            .then(response => {
                const { pollOption, participantVote, pollId } = response.data;
                this.setState({
                    pollOptionFake: pollOption,
                    participantVote: participantVote,
                    pollId: pollId,
                })
            })
            .catch(function (error) {
                $('#myModal').modal('show')
            })
    }
    render() {
        return (
            <div className="tabs">
                <WarningAlert />
                <ul className="tabs-nav">
                    <li id="first-tab" className={this.state.tab == 1 ? "tab-active" : ""}>
                        <a onClick={() => this.handleClickTabVote()}>
                            Bình chọn
                        </a>
                    </li>
                    <li className={this.state.tab == 2 ? "tab-active" : ""}>
                        <a onClick={() => this.handleClickTabInfo()}>
                            Thông tin
                        </a>
                    </li>
                    <li className={this.state.tab == 3 ? "tab-active" : ""}>
                        <a onClick={() => this.handleClickTabResult()}>
                            Kết quả
                        </a>
                    </li>
                </ul>
                <div className="tabs-stage">
                    <TabVote
                        tab={this.state.tab}
                        tabChildren={this.state.tabChildren}
                        handleClickTabResult={this.handleClickTabResult}
                        handleClickTabChildren1={this.handleClickTabChildren1}
                        handleClickTabChildren2={this.handleClickTabChildren2}
                    />
                    <TabInfo tab={this.state.tab} />
                    <TabResult
                        tab={this.state.tab}
                        pollId={this.state.pollId}
                        pollOptionFake={this.state.pollOptionFake}
                        participantVote={this.state.participantVote}
                    />
                </div>
            </div>
        );
    }
}
export default VoteApp;
