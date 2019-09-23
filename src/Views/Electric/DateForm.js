import React, { Component } from 'react'

class DateForm extends Component {
    render() {
        return (
        <form onSubmit={this.props.loaddata} >
            <div className="row">
                <div className="col-sm-4">
                    <div class="form-group">
                        From 
                        <input type="date" name="from"  class="form-control datepicker" style={{ width:"150px",color:"#13B760"}} />
                    
                    </div>
                </div>

                <div className="col-sm-4">
                    <div class="form-group">
                        To
                        <input type="date" name="to"  class="form-control datepicker" style={{ width:"150px",color:"#13B760"}} />
                    </div>
                </div>
               <button type="submit" value="Get Data" className="btn btn-login" style={{height:"40px", marginTop:"13px"}} ></button>
            </div>
        </form>

        )
    }
}

export default DateForm;
