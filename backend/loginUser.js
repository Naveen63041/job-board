import axios from "axios";

const loginUser = async () => {
  try {
    const res = await axios.post("http://localhost:5000/api/auth/login", {
      email: "naveensabbavarapu111@gmail.com",
      password: "Naveen9686."
    });
    console.log("➡️", res.data);
  } catch (err) {
    console.error("❌ Login failed:", err.message);
  }
};

loginUser();
