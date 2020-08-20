import React, { Component, Fragment} from "react";
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
import Footer from "../Footer/Footer";
import app from "../../config/fire";
import "./ReadMoreAdmin.css";

const db = app.firestore();

class ReadMoreAdmin extends Component {
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


  back = (event) => {
    event.preventDefault();
      this.props.history.push("/admin_blogs");
  };

  render() {
    return (
      <Fragment>
        <NavbarAdmin />
        <div className="main">
          <div className="create_blog">
            <div className="container_create" id="create">
              <div className="subcontent_create">
                <div className="forms-create">
                  <form>
                    <input
                      value={this.state.title}
                      type="text"
                      name="title"
                      id="create"
                      placeholder="Title"
                      required
                    />
                    <textarea
                      value={this.state.script}
                      type="text"
                      id="create"
                      name="script"
                      placeholder="Write the blog"
                      required
                    />
                    <br />
                     <button
                       className="submit"
                       value="submit"
                       onClick={this.back}
                     >Back                     
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

export default ReadMoreAdmin;



















