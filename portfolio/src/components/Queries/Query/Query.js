import React from "react";
import "./Query.css";

const Query = (props) => {
  return (
    <div className="card_query">
      <div className="arrangementQuery">
        <p className="email_query">{props.email}</p>
        <p className="name_query">{props.name}</p>
        <p className="message_query">{props.message}</p>
      </div>
    </div>
  );
};

export default Query;