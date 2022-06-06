import React from "react";

export default class Iframe extends React.Component {
    render() {
        return (
            <div>
                <iframe src={this.props.src} height={this.props.height} width={this.props.width}/>
            </div>
        )
    }
};
