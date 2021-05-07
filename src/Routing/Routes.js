export const Routes ={
    // Home :{ path:"/" },
    DashboardOverview:{path:"/"},

    //Authorization Pages
    Signin: { path: "/sign-in" },
    Signup: { path: "/sign-up" },
    ForgotPassword: { path: "/forgot-password" },
    ResetPassword: { path: "/reset-password" },
    Lock: { path: "/lock" },

    //Pages
    ViewRiders: {path: "/riders/view-riders"},
    AddRider: {path: "/riders/add-rider"},
    Transactions: {path: "/transactions"},

    //Error Pages
    NotFound: { path: "/Pages/Authorization/NotFound" },
    ServerError: { path: "/Pages/Authorization/ServerError" },
    Simple:{path:"/simple"}
    
};