import { apiRequest } from "../ApiServices";

export const Signup = async ({
  firstname,
  lastname,
  email,
  password,
  avatar,
}) => {
  try {
    const formData = new FormData();

    // 2. Saara data isme add karein
    formData.append("firstname", firstname);
    formData.append("lastname", lastname);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("avatar", avatar); // Yeh wahi 'file' object hai
    const data = await apiRequest("/signup", {
      method: "POST",
      body: formData,
    });
    return data;
  } catch (error) {
    console.log("Signup Failed:", error.message);
    throw error;
  }
};
