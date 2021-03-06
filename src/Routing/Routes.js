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
    Individual:{path:"/riders/view-riders/:id"},
    AddRider: {path: "/riders/add-rider"},
    Transactions: {path: "/transactions"},
    LastTransaction:{path:"/riders/last-transaction/:id"},
    Settings:{path:"/settings"},

    //Error Pages
    NotFound: { path: "/Pages/Authorization/NotFound" },
    ServerError: { path: "/Pages/Authorization/ServerError" },
    Simple:{path:"/simple"}
    
};