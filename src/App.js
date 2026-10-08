
import './App.css';
import Nav from './compounds/Navbar';
import Text from './compounds/Text';
import Alert from './compounds/Alert'
import { useState, useRef } from 'react';

function App() {
  const [first, setfirst] = useState("light");
  const [alerts, setAlerts] = useState(null)

  const timerRef = useRef(null);

  const showAlert = (msg, type) => {
     if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setAlerts({
      msg: msg,
      type: type
    })

    timerRef.current = setTimeout(() => {
      setAlerts(null);
    }, 2500);
  }

  const toggleMode = () => {
   if (first === "light") {
    setfirst("dark")
    document.body.style.backgroundColor = "black"
    showAlert("success" , "Dark Mode enable")
   } else {
    setfirst("light")
    document.body.style.backgroundColor = "white"
    showAlert("success" , "Light Mode enable")
   }
  }
  return (

    <>
    <Nav title="True" first={first} toggleMode={toggleMode} />
    <Alert alerts={alerts} />
    <Text first={first} toggleMode={toggleMode} showAlert={showAlert} />
    </>
  )
}



export default App;
