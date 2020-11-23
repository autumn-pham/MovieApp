import React from "react";

class DislikeButton extends React.Component {
  state = {
    dislikes: 0
  };

  addDislike = () => {
    let newCount = this.state.dislikes + 1;
     this.setState({
     dislikes: newCount
     });
  };

  render() {
    const dislikes = this.state.dislikes;
    if (dislikes === 0) {
      return (
        <div>
          <button
            className="button"
            onClick={this.addDislike}
          >
            <i className="far fa-thumbs-down fa-lg" style={{ color: "#33c3f0" }}></i>
          </button>
        </div>
      );
    }
    if (dislikes === 1) {
      return (
        <div>
          <button className="button" onClick={this.addDislike}>
            <i className="fas fa-thumbs-down fa-lg" style={{ color: "red" }}></i>
          </button>
        </div>
      );
    }
    if (dislikes > 1) {
      return (
        <div>
          <button className="button" onClick={this.addDislike}>
            <i className="fas fa-thumbs-down fa-lg" style={{ color: "red" }}></i>{" "}
            {dislikes}
          </button>
        </div>
      );
    }
  }
}

export default DislikeButton;
