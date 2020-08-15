import React, { Component } from "react";
import "./BlogsAdmin.css";
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
import BlogAdmin from "../BlogAdmin/BlogAdmin";
import Footer from "../Footer/Footer";
import app from "../../config/fire";

const db = app.firestore();
class BlogsAdmin extends Component {
  state = {
    // posts: [
    //   {
    //     picture:"https://i.picsum.photos/id/24/4855/1803.jpg?hmac=ICVhP1pUXDLXaTkgwDJinSUS59UWalMxf4SOIWb9Ui4",
    //     title: "Tech and people",
    //     script: "The behaviour that people have regarding ...",
    //   },
    //   {
    //     picture:"https://i.picsum.photos/id/225/1500/979.jpg?hmac=jvGoek9ng_Y0GaBbzxN0KJhHaiPtk1VfRcukK8R8FxQ",
    //     title: "Tech and people",
    //     script: "The behaviour that people have regarding ...",
    //   },
    //   {
    //     picture:"https://i.picsum.photos/id/239/1739/1391.jpg?hmac=-Zh20gMdOuV7tHr4wGEUqACAxdvb7gkDlKKS9MIE1TU",
    //     title: "Tech and people",
    //     script: "The behaviour that people have regarding ...",
    //   },
    //   {
    //     picture:"https://i.picsum.photos/id/163/2000/1333.jpg?hmac=htdHeSJwlYOxS8b0TTpz2s8tD_QDlmsd3JHYa_HGrg8",
    //     title: "Tech and people",
    //     script: "The behaviour that people have regarding ...",
    //   },
    //   {
    //     picture:"https://i.picsum.photos/id/119/3264/2176.jpg?hmac=PYRYBOGQhlUm6wS94EkpN8dTIC7-2GniC3pqOt6CpNU",
    //     title: "Tech and people",
    //     script: "The behaviour that people have regarding ...",
    //   },
    //   {
    //     picture:"https://i.picsum.photos/id/1073/5472/3648.jpg?hmac=xCDetU9pLnLGZopbvHOQOkQRhTiYwyrzWc0YyHPzp5Y",
    //     title: "Tech and people",
    //     script: "The behaviour that people have regarding ...",
    //   },
    // ],
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
          {this.state.posts.map((iterate, index) => (
            <BlogAdmin
              key={index}
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
