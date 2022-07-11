import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [data, setdata] = useState([{}]);
  useEffect(() => {
    fetch('/api').then(
    response => response.json()
  ).then(
    data =>{ setdata(data)
    }
    
    )
  }, []);
 
  
  return (
    <div className="App">
      {(typeof data.users === 'undefined') ? (<div>Loading...</div>) : (
        data.users.map((user, i) => (
          <p key={i}>{user}</p>
        ))
  )}
     
    </div>
  );
}

export default App;
