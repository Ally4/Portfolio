import React, { Component } from "react";
import "./BlogsAdmin.css";
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
import BlogAdmin from "../BlogAdmin/BlogAdmin";
import Footer from "../Footer/Footer";
import app from "../../config/fire";

const db = app.firestore();
class BlogsAdmin extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    const fetchedPersons = [];
    db.collection("Blogs")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          fetchedPersons.push({ id: doc.id, data: doc.data() });
        });
      });
    this.setState({ posts: fetchedPersons });
  }

  render() {
    console.log(this.state.posts);
    return (
      <div>
        <NavbarAdmin />
        <div className="blog">
          <div className="head1">Blogs</div>
          <div className="head2">Blogs</div>
        </div>
        <div className="smallIntroBlog">Here are Ally`s blogs</div>
        <div className="arrange">
          {this.state.posts.map((iterate) => (
            <BlogAdmin
              key={iterate.id}
              id={iterate.id}
              picture={iterate.data.picture}
              title={iterate.data.title}
              script={iterate.data.script}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default BlogsAdmin;
