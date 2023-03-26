import axios from "axios";
import { useState, useEffect } from "react";
import './App.css';
import { Route, Routes } from "react-router-dom";
import PhoneDetail from "./components/PhoneDetail";
import PhoneList from "./components/PhoneList";

function App() {
  const [phones, setPhones] = useState(null)

  useEffect(() => {
    axios.get('http://localhost:5005/phones')
    .then(response => {
      setPhones(response.data);
    })
    .catch(err => console.log(err))
  }, []) 

  return (
    <div className="App">
      {phones ? 
        <div className="row m-2">
          <PhoneList phones={phones} />
          <Routes>
            <Route path="/:idPhone" element={ <PhoneDetail phones={phones} /> } />
          </Routes>
        </div>
        : <img src="https://tenor.com/es/view/loading-gif-9212724" alt="loading pictures"/>
      }
    </div>
  );
}

export default App;
