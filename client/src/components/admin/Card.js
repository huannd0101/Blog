import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  let classNamees1 = "card shadow h-100 py-2 " + props.border;
  let classNamees2 =
    "text-xs font-weight-bold text-uppercase mb-1 " + props.textColor;
  return (
    <div className="col-xl-3 col-md-6 mb-4">
      <div className={classNamees1}>
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <NavLink to={props.link}>
                <div className={classNamees2}>{props.title}</div>
                <div className="">{props.data}</div>
              </NavLink>
            </div>
            <div className="col-auto">
              <i className="fas fa-calendar fa-2x text-gray-300"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
