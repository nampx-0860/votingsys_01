import React, { Component } from "react";
import autoBind from "react-autobind"
import SimpleReactValidator from 'simple-react-validator';

class FormComment extends Component {
    constructor(props) {
        super(props);
        autoBind(this)
        this.state = {
            name: '',
            content: '',
            arrNewComment: [],
        };
        this.validator = new SimpleReactValidator({
            messages: {
                required: 'Vui lòng nhập :attribute của bạn !',
            },
        });
    }
    handleInputChange(e) {
        const value = e.target.value;
        const name = e.target.name;
        const content = e.target.content;

        this.setState({
            [name]: value,
            [content]: value,
        });

    }
    handleSubmit() {
        var name = this.state.name
        var content = this.state.content
        var user = null //thay đổi khi login
        var created_at = new Date();
        var arrNewComment = { name: name, content: content, user: user, created_at: created_at }
        const newComments = this.props.comments.concat(arrNewComment);
        if (this.validator.allValid()) {
            this.props.handleSubmit(this.state.name, this.state.content, this.props.pollId, newComments)
            this.setState({
                name: '',
                content: '',
            })
            this.validator.hideMessages()
        } else {
            this.validator.showMessages();
            this.forceUpdate();
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="comments-area-foot">
                    {<div className="validation">{this.validator.message('tên', this.state.name, 'required')}</div>}
                    {<div className="validation">{this.validator.message('nội dung bình luân', this.state.content, 'required')}</div>}
                    <div className="comments-container">
                        <ul id="comments-list" className="comments-list">
                            <li>
                                <div className="comment-main-level">
                                    <div className="comment-avatar"><img src="/templates/votingsys/img/user/user-default.png" alt="" /></div>
                                    <div className="comment-box box-comment-input">
                                        <input
                                            type="text" name="name"
                                            placeholder=" Nhập tên..."
                                            className="form-control comment-input"
                                            onChange={this.handleInputChange}
                                            value={this.state.name}
                                        />
                                        <textarea
                                            className="form-control" rows="4" name="content"
                                            placeholder=" Nhập nội dung bình luận..."
                                            onChange={this.handleInputChange}
                                            value={this.state.content}
                                        />
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Lưu bình luận</button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default FormComment;
