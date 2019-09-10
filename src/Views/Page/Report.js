import React, { Component } from 'react'

class Report extends Component {
    render() {
        return (
            <div className="container" style={{marginTop:"20px"}}>
            <form >
                <div className="row">
                    <div className="col-sm-5">
                        <div class="form-group">
                            From 
                            <input type="date" name="from"  class="form-control datepicker" style={{ width:"150px"}} />
                        
                        </div>
                    </div>

                    <div className="col-sm-4">
                        <div class="form-group">
                            To
                            <input type="date" name="from"  class="form-control datepicker" style={{ width:"150px"}} />
                        
                        </div>
                    </div>
                </div>
                <div class="form-group" style={{marginTop:"10px"}}>
                    <label for="exampleFormControlSelect2">Select Your Type</label>
                    <select multiple class="form-control" id="exampleFormControlSelect2" style={{width:"200px"}}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
                </div>
            </form>
            </div>
        )
    }
}

export default Report;
