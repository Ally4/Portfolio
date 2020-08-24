import React, { Component } from "react";
import "./Queries.css";
import { Link } from "react-router-dom";
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
import Footer from "../Footer/Footer";
import Query from "./Query/Query";
import app from "../../config/fire";

const db = app.firestore();
class Queries extends Component {
  state = {
    queries: [],
  };

  componentDidMount() {
    const fetchedQueries = [];
    db.collection("Queries")
      .get()
      .then(async (querySnapshot) => {
        await querySnapshot.forEach((doc) => {
          fetchedQueries.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        this.setState({
          queries: fetchedQueries,
        });
      });
  }
  render() {
    return (
      <div>
        <NavbarAdmin />
        <div className="control_panel">
          <div className="control_list">
            <ul>
              <li>
                {" "}
                <Link to="/control"> Location </Link>
              </li>
              <li> Queries </li> <li> Profile </li>{" "}
            </ul>{" "}
          </div>{" "}
          <div className="control_items_queries">
            {" "}
            {this.state.queries.map((iterate) => (
              <Query
                key={iterate.id}
                id={iterate.id}
                email={iterate.data.email}
                name={iterate.data.name}
                message={iterate.data.message}
              />
            ))}{" "}
          </div>{" "}
        </div>{" "}
        <div className="footer_queries"><Footer /></div>        
      </div>
    );
  }
}

export default Queries;
