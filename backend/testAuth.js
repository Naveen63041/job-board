import axios from "axios";

// Server URL
const BASE_URL = "http://localhost:5000/api/auth";

// Test user data
const user = {
  name: "Sabbavarapu Naveen Kumar",
  email: "naveensabbavarapu111@gmail.com",
  password: "Naveen9686."
};

async function registerUser() {
  try {
    console.log("➡️ Registering user...");
    const response = await axios.post(`${BASE_URL}/register`, user);
    console.log("✅ Registration success:", response.data);
  } catch (error) {
    if (error.response) {
      console.log("❌ Registration failed:", error.response.data);
    } else {
      console.log("❌ Registration failed (no response):", error.message);
    }
  }
}

async function loginUser() {
  try {
    console.log("➡️ Logging in...");
    const response = await axios.post(`${BASE_URL}/login`, {
      email: user.email,
      password: user.password
    });
    console.log("✅ Login success:", response.data);
  } catch (error) {
    if (error.response) {
      console.log("❌ Login failed:", error.response.data);
    } else {
      console.log("❌ Login failed (no response):", error.message);
    }
  }
}

// Run tests
async function testAuth() {
  await registerUser();
  await loginUser();
}

testAuth();
