import { useState } from "react";
import { v4 } from "uuid";

const Edit = ({ add, submittingState }) => {
  const [firstName, setfirstName] = useState("");
  function firstNameOnchange(e) {
    setfirstName(e.target.value);
  }

  const [lastName, setlastName] = useState("");
  function lastNameOnchange(e) {
    setlastName(e.target.value);
  }

  console.log(firstName, lastName);

  function addItem() {
    submittingState.current = true;
    add(function (preData) {
      return [
       
        {
          id: v4(),
          firstName,
          lastName,
        },
        ...preData,
      ];
    });
  }

  return (
    <>
      <div className="row clearfix">
        <div className="col_half">
          <div className="input_field">
            {" "}
            <span>
              <i aria-hidden="true" className="fa fa-user"></i>
            </span>
            <input
              type="text"
              name="name"
              placeholder="First Name"
              value={firstName}
              onChange={firstNameOnchange}
            />
          </div>
        </div>
        <div className="col_half">
          <div className="input_field">
            {" "}
            <span>
              <i aria-hidden="true" className="fa fa-user"></i>
            </span>
            <input
              type="text"
              name="name"
              placeholder="Last Name"
              value={lastName}
              onChange={lastNameOnchange}
              required
            />
          </div>
        </div>
      </div>
      <div className="input_field">
        {/* <span style={{ left: '15px !important' }}><i aria-hidden="true" className="fa fa-envelope"></i></span> */}
        <input type="email" name="email" placeholder="Email" required />
      </div>
      <div className="input_field radio_option">
        <input type="radio" name="radiogroup1" id="rd1" />
        <label htmlFor="rd1">Male</label>
        <input type="radio" name="radiogroup1" id="rd2" />
        <label htmlFor="rd2">Female</label>
      </div>
      <div className="input_field select_option">
        <select>
          <option>Select a country</option>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
        <div className="select_arrow"></div>
      </div>
      <div className="input_field checkbox_option">
        <input type="checkbox" id="cb1" />
        <label htmlFor="cb1">I agree with terms and conditions</label>
      </div>
      <input
        className="button"
        onClick={addItem}
        type="submit"
        value="Insert"
      />
    </>
  );
};

export default Edit;
