import React, { Component, Fragment } from "react";
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
import Footer from "../Footer/Footer";
import app from "../../config/fire";
import "./CreateBlog.css";

const db = app.firestore();

class CreateBlog extends Component {
  state = {
    picture: "",
    title: "",
    script: "",
  };

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };

  recordBlog = (event) => {
    event.preventDefault();
    db.collection("Blogs")
      .add({
        title: this.state.title,
        picture: this.state.picture,
        script: this.state.script,
      })
      .then((doc) => alert("Your blog is saved"))
      .catch((err) => console.log(err));
    this.setState({ title: "", picture: "", script: "" });
  };

  render() {
    return (
      <Fragment>
        <NavbarAdmin />
        <div className="main">
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
                      name="title"
                      id="create"
                      onChange={this.handleChange}
                      placeholder="Title"
                      required
                    />

                    <input
                      value={this.state.picture}
                      type="text"
                      name="picture"
                      id="create"
                      onChange={this.handleChange}
                      placeholder="Picture"
                      required
                    />
                    <textarea
                      value={this.state.script}
                      type="text"
                      id="create"
                      name="script"
                      onChange={this.handleChange}
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
                  <div>
                    <p></p>
                  </div>
                </div>
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
