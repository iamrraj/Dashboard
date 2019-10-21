const api = `http://localhost:8000/`;

const config = {
  apiUrl: {
    electric: `${api}api/1/bikes/electric/`,
    electricsummery: `${api}api/1/bikes/electric/summery/`,
    classic: `${api}api/1/classic/`, // "/api/1/classic/" -The New Api will be this
    classicSummery: `${api}api/1/classic/summery/`, // "/api/1/classic/summery" -The New Api will be this
    walk: `${api}api/1/walk/`, // "/api/1/walk/"" -The New Api will be this
    walksummerry: `${api}api/1/walk/summery/`, // "/api/1/walk/summery" -The New Api will be this
    dashboard: `${api}api/1/deliveries/dashboard1/`,
    // dashboard1: `${api}api/1/deliveries/dashboard/`,
    user: `${api}api/1/deliveries/postman/`, // "/api/1/deliveries/postman/" -The New Api will be this
    report: `${api}api/1/deliveries/report/`,
    reportModel: `${api}api/1/deliveries/user1/`,
    data: `${api}api/1/deliveries/data`,
    me: `${api}api/1/me/`,
    login: `${api}api/1/oauth/token/`,
    sms: `${api}api/1/push/sms/`
  }
};

export default config;
