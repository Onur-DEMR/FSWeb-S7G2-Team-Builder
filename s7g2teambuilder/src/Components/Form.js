import React from "react";

const Form = (props) => {
  return (
    <form>
      <label>
        Name
        <input type="text" name="Name" />
      </label>
      <label>
        E-mail
        <input type="text" name="E-mail" />
      </label>
      <label>
        Role
        <input type="text" name="Role" />
      </label>
      <label>
        Submit
        <input type="submit" name="Submit" />
      </label>
    </form>
  );
};

export default Form;
