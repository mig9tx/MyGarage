import React from "react";

function Form({ q, handleInputChange, handleFormSubmit }) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="Query">
          <strong>Car</strong>
        </label>
        <input
          className="form-control center-align"
          id="Title"
          type="text"
          value={q}
          placeholder="Type in your VIN number"
          name="q"
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="pull-right">
        <button
          onClick={handleFormSubmit}
          type="submit"
          className="btn btn-large waves-effect waves-light hoverable blue accent-3"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default Form;