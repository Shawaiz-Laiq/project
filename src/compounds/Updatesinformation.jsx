function UpdatesInforamtion(props) {
    return (

        <>          
            <div className="accordion-item" style={{
            color: `${props.first === "dark" ? "white" : "black"}`,
            backgroundColor: `${props.first === "light" ? "white" : "#343a40"}`,           
            }}>
                <h2 className="accordion-header" >
                    <button 
                    style={{
                    color: `${props.first === "dark" ? "white" : "black"}`,
                    backgroundColor: `${props.first === "light" ? "white" : "#343a40"}`,
                    border: "0.1px solid black"}}
                    className="accordion-button collapsed" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-theme={props.first}
                    data-bs-target={`#flush-collapse${props.number}`} 
                    aria-expanded="false" 
                    aria-controls={`flush-collapse${props.number}`}>
                        {props.title}
                    </button>
                </h2>
                <div id={`flush-collapse${props.number}`} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body" style={{
                     backgroundColor: `${props.first === "light" ? "gainsboro" : "black"}`,
                     border :`1px solid ${props.first === "dark" ? "white" : "black"}`}}>
                        <div>{props.information1}</div>
                        <div>{props.information2}</div>
                        <div>{props.information3}</div>
                        <center><div>{props.information4}</div></center>
                    </div>
                </div>
            </div>
        </>
   
    )
    
}

export default UpdatesInforamtion;