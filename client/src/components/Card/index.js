import React from "react";

function Card({ icon, title, children }) {
  return (
    <div className="card z-depth-0 mt-4">
      <div className="card-header">
        <h3>
          <strong>
            <i className={`fa fa-${icon}`} aria-hidden="true" /> {title}
          </strong>
        </h3>
      </div>
      <div className="card-body z-depth-0">{children}</div>
    </div>
  );
}

export default Card;
