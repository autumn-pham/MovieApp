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
            <i className="far fa-thumbs-down fa-lg" style={{ color: "black" }}></i>
          </button>
        </div>
      );
    }
    if (dislikes === 1) {
      return (
        <div>
          <button className="button" onClick={this.addDislike}>
            <i className="fas fa-thumbs-down fa-lg" style={{ color: "#C81D32" }}></i>
          </button>
        </div>
      );
    }
    if (dislikes > 1) {
      return (
        <div>
          <button className="button" onClick={this.addDislike}>
            <i className="fas fa-thumbs-down fa-lg" style={{ color: "#C81D32" }}></i>{" "}
            {dislikes}
          </button>
        </div>
      );
    }
  }
}

export default DislikeButton;
