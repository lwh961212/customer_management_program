import React from "react";
import CustomerProfile from "../CustomerProfile/CustomerProfile";
import CustomerInfo from "../CustomerInfo/CustomerInfo";

function Customer({ name, birthday, gender, job, id, image }) {
  return (
    <div>
      <CustomerProfile name={name} id={id} image={image} />
      <CustomerInfo birthday={birthday} gender={gender} job={job} />
    </div>
  );
}

export default Customer;
