import { useState } from "react";
import axios from "axios";
function App() {
  const [data, setData] = useState([]);
  async function getUser() {
    try {
      const response = await axios.get("http://127.0.0.1:8000/tours");
      //127.0.0.1:8000/tours

      console.log(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }
  getUser();
  return (
    <div>
      <h1>Hello world</h1>
    </div>
  );
}

export default App;
