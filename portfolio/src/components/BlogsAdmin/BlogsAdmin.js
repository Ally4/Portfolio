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
    const fetchedPosts = [];
    db.collection("Blogs")
      .get()
      .then( async (querySnapshot) => {
     await querySnapshot.forEach((doc) => {
          fetchedPosts.push({ id: doc.id, data: doc.data() });
        });
        console.log(`The console ${fetchedPosts[4]}`);
        this.setState({ posts: fetchedPosts });
      })
  }

  render() {
    return (
      <div>
        <NavbarAdmin />
        <div className="blog">
          <div className="head1">Blogs</div>
          <div className="head2">Blogs</div>
        </div>
        <div className="smallIntroBlog">Here are Ally`s blogs</div>
        <div className="arrange_admin">
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
