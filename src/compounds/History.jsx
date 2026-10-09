import React from 'react';

function History(props) {

  return (
    <div className="container my-3" style={{
            color: `${props.first === "dark" ? "white" : "black"}`,
            backgroundColor: `${props.first === "light" ? "white" : "#343a40"}`,           
            }}>
      <h2>Your History</h2>
      <ul className="list-group">
        {props.history.map((item, index) => {
          return (
            <li key={index} className="list-group-item my-2" style={{
            color: `${props.first === "dark" ? "white" : "black"}`,
            backgroundColor: `${props.first === "light" ? "white" : "black"}`,           
            }}>
              <h5>{item.title}</h5>
              <p><strong>Information:</strong> {item.information}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default History;
