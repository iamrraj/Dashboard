import $ from "jquery";

// $("#exampleModal").on("submit", function() {
//   $("#StudentModal").on("hide.bs.modal", function(e) {
//     e.preventDefault();
//   });
// });

$("#select_all").click(function() {
  $("#selectOptions option").prop("selected", true);
});

// Get Data from filter date and This All Data Belongs to Report Page To display the data by
// So i edited that page an di include new data combine with diffferent api together

// getData = async e => {
//   try {
//     // alert("Your favorite flavor is: " + this.state.value);
//     const edd = e.target.elements.edd.value;
//     const selections = [...e.target.elements.selectOptions.options].filter(
//       opt => opt.selected
//     );
//     const selectedValues = selections.map(opt => opt.value);
//     const selectedString = selectedValues.join(",");
//     const modee = e.target.elements.modee.value;
//     const from = e.target.elements.from.value;
//     const to = e.target.elements.to.value;
//     e.preventDefault();
//     const res = await fetch(
//       `${config.apiUrl.report}?date__lte=${to}&date__gte=${from}&user=${selectedString}&mode=${modee}&electric_bike=${edd}`
//     );
//     const movies = await res.json();
//     console.log(movies);
//     this.setState({
//       movies
//     });
//   } catch (e) {
//     console.log(e);
//   }
// };
