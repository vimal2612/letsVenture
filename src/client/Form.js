import React from "react";
import useForm from "./formHook";
import validate from "./validate";
import { Button } from "react-bootstrap";

const Form = ({ setShow, setSuccess }) => {
  const { inputs, handleInputChange, handleSubmit, errors } = useForm(
    { email: "", fName: "", lName: "", file: [], setShow, setSuccess },
    validate
  );
  //   const handleModal = () => (modal ? setShow(false) : setShow(true));
  return (
    <form onSubmit={handleSubmit} className="form">
      <div>
        <label>Email Address</label>
        <input
          type="email"
          name="email"
          onChange={handleInputChange}
          value={inputs.email}
          required
        />
      </div>
      {errors.email && <p>errors.email</p>}
      <div>
        <label>First Name</label>
        <input
          type="text"
          name="fName"
          onChange={handleInputChange}
          value={inputs.fName}
          required
        />
      </div>
      {errors.fName && <p>errors.fName</p>}
      <div>
        <label>Last Name</label>
        <input
          type="text"
          name="lName"
          onChange={handleInputChange}
          value={inputs.lName}
          required
        />
      </div>
      {errors.lName && <p>errors.lName</p>}
      <div>
        {" "}
        <input
          type="file"
          name="file"
          value={inputs.file}
          onChange={handleInputChange}
          required
        />
      </div>
      {errors.file && <p>errors.file</p>}
      <Button type="submit" style={{ marginTop: "6px" }}>
        Submit
      </Button>
    </form>
  );
};

export default Form;
