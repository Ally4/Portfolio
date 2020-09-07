import React, { Component } from "react";
import "./Blogs.css";
import Navbar from "../Navbar/Navbar";
import Blog from "../Blog/Blog";
import Footer from "../Footer/Footer";
import app from "../../config/fire";


const db = app.firestore();
class Blogs extends Component {

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
    console.log(this.state.posts);
    return (
      <div>
        <Navbar />
        <div className="blog">
          <div className="head1">Blogs</div>
          <div className="head2">Blogs</div>
        </div>
        <div className="smallIntroBlog">Here are Ally`s blogs</div>
        <div className="arrange_all_user">
        <div className="arrange_user">
          {this.state.posts.map((iterate) => (
            <Blog
              key={iterate.id}
              id={iterate.id}
              picture={iterate.data.picture}
              title={iterate.data.title}
              script={iterate.data.script}
            />
          ))}
        </div>
        </div>
        <Footer />
      </div>
    );
  }
}


export default Blogs;
