import React, { Component, Fragment} from "react";
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
import Footer from "../Footer/Footer";
import app from "../../config/fire";
import "./Edit.css";

const db = app.firestore();

class Edit extends Component {
  state = {
    picture: "",
    title: "",
    script: ""
  }


  componentDidMount() {
    const {id} = this.props.match.params
    db.collection("Blogs").doc(id).get().then((doc) => {
        if (doc.exists) {
          this.setState({title: doc.data().title, picture: doc.data().picture, script: doc.data().script});
            console.log("Document data:", doc.data());
        } else {
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
  }

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };

  editBlog = (event) => {
    event.preventDefault();
    db.collection("Blogs").doc(this.props.match.params.id).update(this.state)
    .then(() => {
      alert("Blog successfully updated");
      this.props.history.push("/admin_blogs");
    })
    .catch(error => {
        console.error("Error updating document: ", error);
    });
    console.log(this.state);
  };

  render() {
    return (
      <Fragment>
        <NavbarAdmin />
        <div className="main">
          <div className="create_blog">
            <div className="container_create" id="create">
              <div className="create">
                <div className="head1">Edit blog</div>
              </div>
              <div className="subcontent_create">
                <div className="forms-create">
                  <form>
                    <input
                      value={this.state.picture}
                      type="text"
                      name="picture"
                      id="create"
                      onChange={this.handleChange}
                      placeholder="Picture"
                      required
                    />
                    <input
                      value={this.state.title}
                      type="text"
                      name="title"
                      id="create"
                      onChange={this.handleChange}
                      placeholder="Title"
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
                      onClick={this.editBlog}
                    >Update                     
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

export default Edit;
