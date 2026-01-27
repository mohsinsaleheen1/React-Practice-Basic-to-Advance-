import { apiRequest } from "../ApiServices";

export const Signup = async (firstname, lastname, email, password) => {
  try {
    const data = await apiRequest("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(firstname, lastname, email, password),
    });
    return data;
  } catch (error) {
    console.log("Signup Failed:", error.message);
    throw error;
  }
};
