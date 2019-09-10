import React, { Component } from 'react'
import Swal from 'sweetalert2';

export class user extends Component {

    constructor(props) {
        super(props);
        
        
        // this.state = {
        //   random: this.handleClick(),
        //   random1: this.handleClick(), random2: this.handleClick()
        // };
        this.handleReply = this.handleReply.bind(this)
      }

    async handleReply(lala) {
        const { value: text } = await Swal.fire({
          input: 'textarea',
          inputPlaceholder: 'Type your message here...',
          showCancelButton: true,
          confirmButtonText: '➤ Send ',
        })
    
        if (text) {
          Swal.fire("Message sent to  " + lala)
        }
      }
    

    render() {
        return (
            <div className="container" style={{marginTop:"20px"}}>
                  

                <h3 className="text-center" style={{marginTop:"10px"}}> User Details: &nbsp;<strong> POSTMAN NAME</strong> </h3>

                    <table class="table table-striped table-bordered" style={{marginTop:"10px"}}>
                    <thead>
                        <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Date</th>
                        <th scope="col">Distribution Type</th>
                        <th scope="col">Milage</th>
                        <th scope="col">Weight Boxes</th>
                        <th scope="col">Additional Pickup</th>
                        <th scope="col">Map</th>
                        <th scope="col">Intract</th>
                        


                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td ><a href="/overview/name" className="text-primary">09-09-2019</a></td>
                        <td>Post</td>
                        <td>13</td>
                        <td>2 Kgs</td>
                        <td>2</td>
                        <td><a href="# "><i className="fa fa-map"></i></a></td>
                        <td><a href="# " data-toggle="modal" data-target="#exampleModal"><i className="fa fa-envelope"></i></a> &nbsp; <a href="# "><i className="fa fa-mobile"></i></a></td>
                        </tr>


                        <tr>
                        <th scope="row">2</th>
                        <td ><a href="/overview/name" className="text-primary">07-09-2019</a></td>
                        <td>Parcel</td>
                        <td>33</td>
                        <td>1.5 Kgs</td>
                        <td>0</td>
                        <td><a href="# "><i className="fa fa-map"></i></a></td>
                        <td><a href="# " data-toggle="modal" data-target="#exampleModal"><i className="fa fa-envelope"></i></a> &nbsp; <a href="# "><i className="fa fa-mobile"></i></a></td>
                        
                        </tr>



                        <tr>
                        <th scope="row">3</th>
                        <td ><a href="/overview/name" className="text-primary">08-09-2019</a></td>
                        <td>Letter</td>
                        <td>11</td>
                        <td>0.5 Kgs</td>
                        <td>2</td>
                        <td><a href="# "><i className="fa fa-map"></i></a></td>
                        <td><a href="# " data-toggle="modal" data-target="#exampleModal"><i className="fa fa-envelope"></i></a> &nbsp; <a href="# "><abbr title="+48722750363"><i className="fa fa-mobile"></i></abbr></a></td>
                        </tr>

                       
                    </tbody>

                    <thead>
                        <tr>
                        
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col" className="font-weight-bold">Summery</th>
                        <th scope="col" className="text-primary">57</th>
                        <th scope="col" className="text-primary">4</th>
                        <th scope="col" className="text-primary">4</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        
                        </tr>
                    </thead>

                    </table>


                    {/* <!-- Modal --> */}
                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Send Message To <strong>POSTMAN NAME</strong></h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <label for="formGroupExampleInput">Subject </label>
                                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Type Here Subject" />
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput2">Message</label>
                                <textarea class="form-control" row="15" id="formGroupExampleInput2" placeholder="Type Your Message" ></textarea>
                            </div>
                            <button className="btn btn-primary"> ➤ Send Message</button>
                        </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            {/* <button type="button" class="btn btn-primary" onClick={() => { this.handleReply("swingingChair49@usa.pl") }} >Save changes</button> */}
                        </div>
                        </div>
                    </div>
                    </div>



           </div>
        )
    }
}

export default user;
