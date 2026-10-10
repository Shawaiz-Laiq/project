import UpdatesInforamtion from "./Updatesinformation";

function  Updates(props) {
    return(        
        <>
            <div className="container my-4" style={{ maxHeight: "70vh",
              overflowY: "auto",        
              scrollbarWidth: "none", 
              msOverflowStyle: "none" }}   >    
                <div class="accordion accordion-flush" id="accordionFlushExample">
                    <UpdatesInforamtion first={props.first}  
                    number="One"
                    state="true"
                    title="First update 0.0.1"
                    information1="Light Mode / Dark Mode"
                    information2="Space Button"
                    information3="Alert Only For Mode & For Space Button"
                    information4="Date 08-Oct-2026 "
                    />
                    <UpdatesInforamtion first={props.first}  
                    number="Two"
                    state="false"
                    title="Second update 0.0.2"
                    information1="Alerts for all buttons"
                    information4="Date 08-Oct-2026 "
                    />
                    <UpdatesInforamtion first={props.first}  
                    number="Three"
                    state="false"
                    title="Third update 0.0.3"
                    information1="alert for button"
                    information2="copy button is added"
                    information4="Date 08-Oct-2026 "
                    /> 
                    <UpdatesInforamtion first={props.first}  
                    number="Four"
                    state="false"
                    title="Fourth update 0.0.4"
                    information1="New Update Mode"
                    information2="Remove bugs"
                    information3="Title was change with image"
                    information4="Date 09-Oct-2026 "
                    /> 
                    <UpdatesInforamtion first={props.first}  
                    number="Five"
                    state="false"
                    title="Fifth update 0.0.5"
                    information1="New History Mode"
                    information4="Date 09-Oct-2026 "
                    /> 
                    <UpdatesInforamtion first={props.first}  
                    number="Sixth"
                    state="false"
                    title="Sixth update 0.0.6"
                    information1="New Paste Button Added"
                    information2="Copy Button Now Working"
                    information3="History Notification"
                    information4="Date 10-Oct-2026 "
                    /> 
                    <UpdatesInforamtion first={props.first}  
                    number="Seventh"
                    state="false"
                    title="Seventh update 0.0.7"
                    information1="Add Alert Height"
                    information2="Add History Height"
                    information3="This Was The Last on 10-Oct-2025 at 2:00pm Best Of Luck mail shawaizlaiq20@gmail.com "
                    information4="Thanks "
                    /> 
                </div>
            </div>    
        </>
    )
}
export default Updates;
