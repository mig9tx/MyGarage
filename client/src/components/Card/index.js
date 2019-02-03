import React from "react";

function Card({ icon, title, children }) {
  return (
    <div className="lbl-service-card">
      <div className="yd-reviews review-card intro">
        <h2>
          <strong>
            <i className={`fa fa-${icon}`} aria-hidden="true" /> {title}
          </strong>
        </h2>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
}

export default Card;
