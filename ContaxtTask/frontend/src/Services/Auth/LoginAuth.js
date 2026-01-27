import { apiRequest } from "../ApiServices";

export const loginUsers = async (email, password) => {
  try {
    const data = await apiRequest("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email, password),
    });
    return data;
  } catch (error) {
    console.log("Signup Failed:", error.message);
    throw error;
  }
};
