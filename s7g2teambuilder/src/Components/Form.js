import React from "react";

const Form = (props) => {
  const { handleChange, handleSubmit, newMember } = props;
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          onChange={handleChange}
          value={newMember.name}
          type="text"
          name="name"
        />
      </label>
      <label>
        E-mail
        <input
          onChange={handleChange}
          value={newMember.email}
          type="text"
          name="e-mail"
        />
      </label>
      <label>
        Role
        <input
          onChange={handleChange}
          value={newMember.role}
          type="text"
          name="role"
        />
      </label>
      <input type="submit" name="submit" />
    </form>
  );
};

export default Form;
