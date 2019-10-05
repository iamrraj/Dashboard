// import React, { Component } from "react";

// class DeatilSummery extends Component {
//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //     dash: []
//   //   };
//   // }

//   // async componentDidMount() {
//   //   try {
//   //     const res = await fetch(
//   //       `http://localhost:8000/api/1/bikes/electric/${this.props.match.params.pk}`
//   //     );
//   //     const dash = await res.json();
//   //     // console.log(dash)
//   //     this.setState({
//   //       dash: dash.results
//   //     });
//   //   } catch (e) {
//   //     console.log(e);
//   //   }
//   // }
//   render() {
//     return (
//       <thead>
//         <tr className="thead">
//           <th scope="col"></th>
//           <th scope="col"></th>
//           <th scope="col" className="text-dark th">
//             <strong>SUMMERY</strong>
//           </th>
//           <th scope="col" className="text-dark th" style={{ width: "120px" }}>
//             {movie.summery.total_milage} Km
//           </th>
//           <th scope="col" className="text-dark th" style={{ width: "160px" }}>
//             {movie.summery.total_movingtime} hr
//           </th>

//           <th scope="col" className="text-dark th" style={{ width: "170px" }}>
//             {movie.summery.total_averagespeed} Km/hr
//           </th>
//           <th scope="col" className="text-dark th">
//             {movie.summery.total_letter}
//           </th>
//           <th scope="col" className="text-dark th" style={{ width: "120px" }}>
//             {movie.summery.total_ship_weight} kgs
//           </th>
//           <th scope="col" className="text-dark th">
//             {movie.summery.total_pack}
//           </th>
//           <th scope="col" className="text-dark th" style={{ width: "170px" }}>
//             {movie.summery.total_kg} kgs
//           </th>
//           <th scope="col" className="text-dark th">
//             {movie.summery.total_co2_save}
//           </th>
//           <th scope="col" className="text-dark th">
//             {movie.summery.total_boxes}
//           </th>
//         </tr>
//       </thead>
//     );
//   }
// }

// export default DeatilSummery;

// constructor(props){
//     super(props);
//     this.state={
//         blog: null,
//     };
// }

// async componentDidMount() {
//     try {
//         const { match: { params } } = this.props;
//         const blog = (await axios.get(`http://localhost:8000/api/ebike/${params.pk}`)).data;
//         console.log(blog)
//         this.setState({
//             blog,
//         });
//     }catch (e) {
//         console.log(e);
//     }
//   }
