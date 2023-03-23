import axios from "axios";
import { useState, useEffect } from "react";
import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import PhoneDetail from "./components/PhoneDetail";

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
        <div className="row">
          {phones ? 
            <div className="col-sm-6">
                {phones.map(phone => (
                  <div key={phone.id}>
                    <Link>{phone.name}</Link>
                  </div>
                ))}
              <div className="col-sm-6">
                <Routes>
                  <Route path="/:idPhone" element={ <PhoneDetail phones={phones} /> } />
                </Routes>
              </div>
            </div> : <img src="https://tenor.com/es/view/loading-gif-9212724" />
          }
      </div>
    </div>
  );
}

export default App;
