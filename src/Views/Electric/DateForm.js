import React, { useState } from "react";
import moment from "moment";
// import { format } from "date-fns";

// import "./index.js";

function DateForm({ loaddata }) {
  const [fromDate, setFromDate] = useState("");

  const [toDate, setToDate] = useState("");

  const assignFromDate = e => {
    console.log(e.target.value);
    setFromDate(e.target.value);
  };
  return (
    <form onSubmit={loaddata}>
      <div className="row">
        <div className="col-sm-4">
          <div className="form-group">
            <span style={{ opacity: "0.6", fontSize: "13px" }}>OD</span>
            <input
              type="date"
              name="from"
              id="startdate"
              value={fromDate}
              max={moment().format("YYYY-MM-DD")}
              onChange={assignFromDate}
              className="form-control datepicker"
              style={{ width: "150px" }}
            />
          </div>
        </div>
        <div className="col-sm-4">
          <div className="form-group">
            <span style={{ opacity: "0.6", fontSize: "13px" }}>DO</span>
            <input
              type="date"
              name="to"
              id="enddate"
              min={fromDate}
              value={toDate}
              max={moment().format("YYYY-MM-DD")}
              placeholder="Select Date"
              onChange={e => setToDate(e.target.value)}
              className="form-control datepicker"
              style={{ width: "150px" }}
            />
          </div>
        </div>

        <button
          type="submit"
          value="Get Data"
          className="btn btn-success"
          style={{ height: "40px", marginTop: "13px" }}
        >
          Wyświetl Dane
        </button>
      </div>
    </form>
  );
}

export default DateForm;
