import UpdatesInforamtion from "./Updatesinformation";

function  Updates(props) {
    return(        
        <>
            <div className="container my-4">       
                <div class="accordion accordion-flush" id="accordionFlushExample">
                    <UpdatesInforamtion first={props.first}  
                    number="One"
                    state="true"
                    title="First update 0.0.1"
                    information1="Light Mode / Dark Mode"
                    information2="Space Button"
                    information3="Alert Only For Mode & For Space Button"
                    />
                    <UpdatesInforamtion first={props.first}  
                    number="Two"
                    state="false"
                    title="Second update 0.0.2"
                    information1="Alerts for all buttons"
                    />
                    <UpdatesInforamtion first={props.first}  
                    number="Three"
                    state="false"
                    title="Third update 0.0.3"
                    information1="alert for button"
                    information2="copy button is added"
                    /> 
                    <UpdatesInforamtion first={props.first}  
                    number="Four"
                    state="false"
                    title="Fourth update 0.0.4"
                    information1="New Update Mode"
                    information2="Remove bugs"
                    information3="Title was change with image"
                    /> 
                    <UpdatesInforamtion first={props.first}  
                    number="Five"
                    state="false"
                    title="Fifth update 0.0.5"
                    information1="New History Mode"
                    /> 
                </div>
            </div>    
        </>
    )
}
export default Updates;
