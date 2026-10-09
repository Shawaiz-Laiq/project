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
                    backgroundColor: `${props.first === "light" ? "white" : "#343a40"}`,}}
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
                     backgroundColor: `${props.first === "light" ? "white" : "black"}`}}>
                        <div>{props.information1}</div>
                        <div>{props.information2}</div>
                        <div>{props.information3}</div>
                        <div>{props.information4}</div>
                    </div>
                </div>
            </div>
        </>
   
    )
    
}

export default UpdatesInforamtion;