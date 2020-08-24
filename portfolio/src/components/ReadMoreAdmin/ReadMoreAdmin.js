import React, { Component, Fragment } from "react";
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
import Footer from "../Footer/Footer";
import app from "../../config/fire";
import "./ReadMoreAdmin.js";

const db = app.firestore();

class ReadMoreAdmin extends Component {
  state = {
    picture: "",
    title: "",
    script: "",
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    db.collection("Blogs")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          this.setState({
            title: doc.data().title,
            picture: doc.data().picture,
            script: doc.data().script,
          });
          console.log("Document data:", doc.data());
        } else {
          console.log("No such document!");
        }
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
  }

  back = (event) => {
    event.preventDefault();
    this.props.history.push("/admin_blogs");
  };

  render() {
    return (
      <Fragment>
        <NavbarAdmin />
        <div className="main_user">
          <div className="create_blog_user">
            <div className="container_create_user" id="create_user">
              <div className="subcontent_create_user">
                <div className="forms-create_user">
                  <img src={this.state.title} alt="blog"></img>
                  <h1>{this.state.title}</h1>
                  <p>{this.state.script}</p>
                  <br />
                  <button className="submit" value="submit" onClick={this.back}>
                    Back
                  </button>
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

export default ReadMoreAdmin;
