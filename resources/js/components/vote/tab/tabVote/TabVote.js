import React, { Component } from "react";
import autoBind from "react-autobind";
import FormInputInfo from './FormInputInfo'
import axios from 'axios'
import WarningAlert from '../../../utils/WarningAlert'

class TabVote extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
        this.state = {
            pollId: '',
            pollInfo: [],
            pollOption: [],
            participantVote: [],
            comments: [],
        }
    }
    componentDidMount() {
        axios.get(window.Laravel.baseUrl + '/api/vote')
            .then(response => {
                const { pollInfo, pollOption, participantVote, pollId, comments } = response.data;
                this.setState({
                    pollInfo: pollInfo,
                    pollOption: pollOption,
                    participantVote: participantVote,
                    pollId: pollId,
                    comments: comments,
                })
            })
            .catch(function (error) {
                $('#myModal').modal('show')
            })
    }
    loadData() {
        axios.get(window.Laravel.baseUrl + '/api/vote')
            .then(response => {
                const { pollInfo, pollOption, participantVote, pollId, comments } = response.data;
                this.setState({
                    pollInfo: pollInfo,
                    pollOption: pollOption,
                    participantVote: participantVote,
                    pollId: pollId,
                    comments: comments,
                })
            })
            .catch(function (error) {
                $('#myModal').modal('show')
            })
    }
    handleClickTabChildren1() {
        this.props.handleClickTabChildren1()
    }
    handleSubmit(name, email, option) {
        let url = window.Laravel.baseUrl + '/api/vote'
        const data = {
            name: name,
            email: email,
            option: option
        }
        axios.post(url, data)
            .then(response => {
                console.log(response)
                this.loadData()
                this.props.handleClickTabResult()
            })
            .catch(function (error) {
                $('#myModal').modal('show')
            })

    }

    render() {
        const countParticipantVote = this.state.participantVote.filter((countVote) => countVote.option.poll_id === this.state.pollId).length;
        const countComment = this.state.comments.length;

        return (
            < React.Fragment >
                <div className={this.props.tab == 1 ? "tabs-stage-div active-block" : "tabs-stage-div tab-none"}>
                    <WarningAlert />
                    <p className="tab-voting-title">{this.state.pollInfo.title}</p>
                    <p className="tab-voting-descrip">{this.state.pollInfo.description}</p>
                    <label className="poll-count poll-count-mobile">
                        <span className="label label-primary fa fa-user poll-details">
                            <span className="count-participant">&nbsp;{countParticipantVote}</span>
                        </span>
                        <span className="label label-info fa fa-comment poll-details">
                            <span className="comment-count">&nbsp;{countComment}</span>
                        </span>
                        <span className="label label-success fa fa-time poll-details">
                            {this.state.pollInfo.created_at}
                        </span>
                        <span className="span-date-close span-date-close-mobile poll-details2" data-placement="top" data-toggle="tooltip" title="" data-original-title="Thời gian đóng bầu chọn">
                            Thời gian đóng bầu chọn: <i>{this.state.pollInfo.date_close}</i>
                        </span>
                    </label>
                    <div className="line-tab-vote" />
                    <FormInputInfo
                        handleSubmit={this.handleSubmit}
                        tabChildren={this.props.tabChildren}
                        handleClickTabChildren2={this.props.handleClickTabChildren2}
                        handleClickTabChildren1={this.props.handleClickTabChildren1}
                        pollOption={this.state.pollOption}
                        participantVote={this.state.participantVote}
                        pollId={this.state.pollId}
                    />
                </div>
            </React.Fragment >
        );
    }
}
export default TabVote;
