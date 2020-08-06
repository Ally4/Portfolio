import React, {
  Component
} from "react";
import "./Blogs.css";
import Navbar from "../Navbar/Navbar";
import Blog from '../Blog/Blog';
import CreateBlog from '../CreateBlog/CreateBlog';
import Footer from '../Footer/Footer';

class Blogs extends Component {
  state = {
    blogDetails: [{
        title: "Tech and people",
        script: "The behaviour that people have regarding ...",
      },
      {
        title: "Tech and people",
        script: "The behaviour that people have regarding ...",
      },
      {
        title: "Tech and people",
        script: "The behaviour that people have regarding ...",
      },
      {
        title: "Tech and people",
        script: "The behaviour that people have regarding ...",
      },
      {
        title: "Tech and people",
        script: "The behaviour that people have regarding ...",
      },
      {
        title: "Tech and people",
        script: "The behaviour that people have regarding ...",
      },
    ],
  };

  render() {
      return ( <
          div >
          <
          Navbar / >
          <
          div className = "blog" >
          <
          div className = "head1" > Blogs < /div> <
          div className = "head2" > Blogs < /div> <
          /div> <
          div className = "smallIntroBlog" > Here are Ally `s blogs</div>
      <div className="arrange">
    {this.state.blogDetails.map((iterate, index) => <Blog key={index} title={iterate.title} script={iterate.script} />)}  
    <CreateBlog />
      </div>
      <Footer />
      </div>
    );
  }
}

export default Blogs;