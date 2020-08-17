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
        <Navbar />
        <div className="blog">
          <div className="head1">Blogs</div>
          <div className="head2">Blogs</div>
        </div>
        <div className="smallIntroBlog">Here are Ally`s blogs</div>
        <div className="arrange">
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
        <Footer />
      </div>
    );
  }
}


export default Blogs;
