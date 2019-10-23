import React, { useState } from "react";
import moment from "moment";

function Demo() {
  const [fromDate, setFromDate] = useState("");

  const [toDate, setToDate] = useState("");

  const assignFromDate = e => {
    console.log(e.target.value);
    setFromDate(e.target.value);
  };

  return (
    <div className="row">
      <div className="col-sm-6">
        <div class="form-group">
          <span style={{ opacity: "0.6", fontSize: "13px" }}>OD</span>
          <input
            type="date"
            name="from"
            value={fromDate}
            max={moment().format("YYYY-MM-DD")}
            onChange={assignFromDate}
            class="form-control datepicker"
            style={{ width: "150px" }}
          />
        </div>
      </div>

      <div className="col-sm-4">
        <div class="form-group">
          <span style={{ opacity: "0.6", fontSize: "13px" }}>DO</span>
          <input
            type="date"
            name="to"
            min={fromDate}
            id="enddate"
            value={toDate}
            max={moment().format("YYYY-MM-DD")}
            placeholder="Select Date"
            class="form-control datepicker"
            onChange={e => setToDate(e.target.value)}
            style={{ width: "150px" }}
          />
        </div>
      </div>
    </div>
  );
}
export default Demo;
