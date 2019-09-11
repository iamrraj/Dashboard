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

                <form >
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
                                <input type="date" name="from"  class="form-control datepicker" style={{ width:"150px",color:"#13B760"}} />
                            
                            </div>
                        </div>
                    </div>
                </form>

                  

                {/* <h3 className="text-center" style={{marginTop:"10px"}}> User Details: &nbsp;<strong> POSTMAN NAME</strong> </h3> */}

                    <table class="table table-striped table-bordered" style={{marginTop:"10px"}}>
                    <thead>
                        <tr style={{background:"#CCEFDC"}}>
                        <th scope="col">Id</th>
                        <th scope="col">User</th>
                        <th scope="col">Traveled by walk</th>
                        <th scope="col">Distributed by Wal</th>
                        <th scope="col">Traveld By CB</th>
                        <th scope="col">Distributed by CB</th>
                        <th scope="col">Traveld By EB</th>
                        <th scope="col">Distributed by EB</th>
                        <th scope="col">Total Milage</th>
                        <th scope="col">Total Weight Transported</th>
                        


                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{background:"white"}}>
                        <th scope="row">1</th>
                        <td ><a href="/overview/lol" style={{color:"#13B760"}}  class="font-weight-bold">Anybody</a></td>
                        <td>45 Km</td>
                        <td>13 Kg</td>
                        <td>156 Km</td>
                        <td>340 Kg</td>
                        <td>440 Km</td>
                        <td>120 Kg</td>
                        <td>1233 Km</td>
                        <td>223 Kg</td>
                    
                        </tr>


                        <tr style={{background:"white"}}>
                        <th scope="row">1</th>
                        <td ><a href="/overview/lol" style={{color:"#13B760"}} class="font-weight-bold">Anyone</a></td>
                        <td>45 Km</td>
                        <td>13 Kg</td>
                        <td>156 Km</td>
                        <td>340 Kg</td>
                        <td>440 Km</td>
                        <td>120 Kg</td>
                        <td>1233 Km</td>
                        <td>223 Kg</td>
                        {/* <td><a href="# " data-toggle="modal" data-target="#exampleModal"><i className="fa fa-envelope"></i></a> &nbsp; <a href="# "><i className="fa fa-mobile"></i></a></td> */}
                        </tr>


                        <tr style={{background:"white"}}>
                        <th scope="row">1</th>
                        <td ><a href="/overview/lol" style={{color:"#13B760"}} class="font-weight-bold">Whatever</a></td>
                        <td>45 Km</td>
                        <td>13 Kg</td>
                        <td>156 Km</td>
                        <td>340 Kg</td>
                        <td>440 Km</td>
                        <td>120 Kg</td>
                        <td>1233 Km</td>
                        <td>223 Kg</td>
                        </tr>


                        <tr style={{background:"white"}}>
                        <th scope="row">1</th>
                        <td ><a href="/overview/lol" style={{color:"#13B760"}} class="font-weight-bold">WhoCares</a></td>
                        <td>45 Km</td>
                        <td>13 Kg</td>
                        <td>156 Km</td>
                        <td>340 Kg</td>
                        <td>440 Km</td>
                        <td>120 Kg</td>
                        <td>1233 Km</td>
                        <td>223 Kg</td>
                        </tr>
                       
                    </tbody>
                    <thead>
                        <tr>
                        
                        <th scope="col"></th>
                        <th scope="col" className="font-weight-bold">Summery</th>
                        <th scope="col">45 Km</th>
                        <th scope="col" className="text-primary">13 Kg</th>
                        <th scope="col" className="text-primary">156 km</th>
                        <th scope="col" className="text-primary">340 kg</th>
                        <th scope="col">440 km</th>
                        <th scope="col">120 Kg</th>
                        <th scope="col">1233 Km</th>
                        <th scope="col">223 Kgs</th>
                        
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
