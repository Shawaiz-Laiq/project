
import './App.css';
import Nav from './compounds/Navbar';
import Text from './compounds/Text';
import Alert from './compounds/Alert'
import Updates from './compounds/Updates'
import History from './compounds/History'
import { useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 

function App() {
  const [first, setfirst] = useState("light");
  const [alerts, setAlerts] = useState(null)
  const [history, sethistory] = useState([])

  const timerRef = useRef(null);

  const hist = (value) => {
   if (value.trim() === "") return; 

   const titleWords = [
     "Zero", "First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth", "Ninth", "Tenth"
   ];

   sethistory(prevHistory => {
       const nextIndex = prevHistory.length + 1; 
       const displayTitle = titleWords[nextIndex] || `${nextIndex}th`;
       const newHistoryItem = {
           title: `${displayTitle} Title`, 
           information: value 
       };

       const updatedHistory = [...prevHistory, newHistoryItem];
       console.log("Updated History Array:", updatedHistory); 
       return updatedHistory;
   });
}

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
    <Router>
    <Nav title="Words Counter" about="Updates" first={first} toggleMode={toggleMode} />
    <Alert alerts={alerts} />
      <Routes>
        <Route exact path="Updates" element={<Updates first={first} />} />       
        <Route exact path="/" element={<Text first={first} toggleMode={toggleMode} showAlert={showAlert} hist={hist} />} />
         <Route exact path="history" element={<History history={history} first={first} />} />       
      </Routes>
    </Router>
  
    
    </>
  )
}



export default App;
