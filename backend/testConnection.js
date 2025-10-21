import axios from "axios";

async function testBackend() {
  try {
    const response = await axios.get("http://localhost:5000");
    console.log("✅ Backend is reachable!");
    console.log("Response:", response.data);
  } catch (error) {
    if (error.response) {
      console.log("❌ Server responded with error:", error.response.status);
      console.log(error.response.data);
    } else if (error.request) {
      console.log("❌ No response received from server.");
      console.log(error.request);
    } else {
      console.log("❌ Error setting up request:", error.message);
    }
  }
}

testBackend();