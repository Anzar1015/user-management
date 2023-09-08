import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const UserDetails = () => {
  const { userid } = useParams();
  const [userdata, setUserdata] = useState({});

  useEffect(() => {
    fetch("http://localhost:8000/user/" + userid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setUserdata(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div>
      <div className="container">
        <div className="card row" style={{ textAlign: "left" }}>
          <div className="card-title">
            <h2>Employee Create</h2>
          </div>
          <div className="card-body"></div>
          {userdata && (
            <div>
              <h2>
                The Employee name is : {userdata.name} ({userdata.id})
              </h2>
              <h3>Contact Details</h3>
              <h5>Email is : {userdata.email}</h5>
              <h5>Phone is : {userdata.phone}</h5>
              <Link className="btn btn-danger" to="/">
                Back to Listing
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
