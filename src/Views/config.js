const api = `http://localhost:8000/`;

const config = {
  apiUrl: {
    electric: `${api}api/1/bikes/electric/`,
    electricsummery: `${api}api/1/bikes/electric/summery/`,
    classic: `${api}api/1/deliveries/classic/`,
    classicSummery: `${api}api/1/deliveries/classic/summery`,
    walk: `${api}api/1/deliveries/walk/`,
    walksummerry: `${api}api/1/deliveries/walk/summery`,
    dashboard: `${api}api/1/deliveries/dashboard/`,
    user: `${api}api/1/deliveries/user/`,
    report: `${api}api/1/deliveries/report/`,
    reportModel: `${api}api/1/deliveries/user1/`,
    data: `${api}api/1/deliveries/data/`
  }
};

export default config;
