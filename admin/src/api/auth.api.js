

/* ============================
   AUTH API FUNCTIONS
   ============================ */

import api from "./axios";

// REGISTER (OWNER signup)
export const registerUser = (data) => {
    return api.post("/auth/register", {
        name: data.name,
        email: data.email,
        password: data.password,
        tenantName: data.tenantName,
    });
};

// LOGIN
export const loginUser = (email, password) => {
    return api.post("/auth/login", {
        email,
        password,
    });
};
