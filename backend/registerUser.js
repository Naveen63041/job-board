import axios from "axios";

const registerUser = async () => {
  try {
    const res = await axios.post("http://localhost:5000/api/auth/register", {
      name: "Sabbavarapu Naveen Kumar",
      email: "naveensabbavarapu111@gmail.com",
      password: "Naveen9686."
    });
    console.log("➡️", res.data);
  } catch (err) {
    console.error("❌ Registration failed:", err.message);
  }
};

registerUser();
