import React from "react";

class LikeButton extends React.Component {
  state = {
    likes: 0
  };

  addLike = () => {
    let newCount = this.state.likes + 1;
     this.setState({
     likes: newCount
     });
  };

  render() {
    const likes = this.state.likes;
    if (likes === 0) {
      return (
        <div>
          <button
            className="button"
            onClick={this.addLike}
          >
            <i className="far fa-thumbs-up fa-lg" style={{ color: "black" }}></i>
          </button>
        </div>
      );
    }
    if (likes === 1) {
      return (
        <div>
          <button className="button" onClick={this.addLike}>
            <i className="fas fa-thumbs-up fa-lg" style={{ color: "#31A0BB" }}></i>
          </button>
        </div>
      );
    }
    if (likes > 1) {
      return (
        <div>
          <button className="button" onClick={this.addLike}>
            <i className="fas fa-thumbs-up fa-lg" style={{ color: "#31A0BB" }}></i>{" "}
            {likes}
          </button>
        </div>
      );
    }
  }
}

export default LikeButton;
