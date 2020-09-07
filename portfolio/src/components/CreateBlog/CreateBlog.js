import React, { Component, Fragment } from "react";
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
import Footer from "../Footer/Footer";
import "./CreateBlog.css";

class CreateBlog extends Component {
  state = {
    title: "",
    text: "",
    blogs: {},
  };

  handleChangeTitle = (event) => {
    event.preventDefault();
    this.setState({
      title: event.target.value,
    });
  };

  handleChangeText = (event) => {
    event.preventDefault();
    this.setState({
      text: event.target.value,
    });
  };

  recordBlog = (event) => {
    event.preventDefault();
    const newBlog = {
      title: this.state.title,
      text: this.state.text,
    };
    this.setState({
      blogs: newBlog,
      title: "",
      text: "",
    });
  };



  render() {
    return (
      <Fragment>
      <NavbarAdmin />
      <div className="create_blog">
        <div className="container_create" id="create">
          <div className="create">
            <div className="head1">Create blog</div>
          </div>
          <div className="subcontent_create">
            <div className="forms-create">
              <form>
                <input
                  value={this.state.title}
                  type="text"
                  id="create"
                  onChange={this.handleChangeTitle}
                  placeholder="Title"
                  required
                />
                <textarea
                  value={this.state.text}
                  type="text"
                  id="create"
                  onChange={this.handleChangeText}
                  placeholder="Write the blog"
                  required
                />
                <br />
                <button
                  className="submit"
                  value="submit"
                  onClick={this.recordBlog}
                >
                  Submit
                </button>
              </form>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      </Fragment>
    );
  }
}

export default CreateBlog;