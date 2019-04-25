import React, { Component } from "react";

class WarningAlert extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            < React.Fragment >
                <div id="myModal" class="modal fade" role="dialog">
                    <div class="modal-dialog warning-alert">
                        <div class="modal-content">
                            <div class="modal-body">
                                <span class="icon warning"></span>
                                <h4>Error when getting data !</h4>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>

                    </div>
                </div>
            </React.Fragment >
        );
    }
}
export default WarningAlert;
