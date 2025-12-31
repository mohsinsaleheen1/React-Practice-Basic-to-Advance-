import { apiRequest } from "../apiService";
// import { configuration } from "../config";
export async function Signup(userName, userEmail, userPassword) {
  try {
    const data = await apiRequest({
      url: `http://localhost:3000/api/register`,
      params: {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userEmail,
          userPassword,
          userName,
        }),
      },
    });
    return data;
  } catch (error) {
    console.error("Signup failed:", error.message);
    throw error;
  }
}
export async function signin(userEmail, userPassword) {
  try {
    const data = await apiRequest({
      url: `http://localhost:3000/api/login`,
      params: {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userEmail,
          userPassword,
        }),
      },
    });
    if (data && data.token) {
      localStorage.setItem("userToken", data.token);
    }
    return data;
  } catch (error) {
    console.error("Login failed:", error.message);
    throw error;
  }
}
export async function Dashboard(params) {}
