import { useState  } from 'react'


function Text(props) {

    let [text, settext] = useState("");
    let [newt, setnewt] = useState('');
    const [textp, settextp] = useState(1);

    const upper = () => {
        const alertcap =() => {
            if (text === text.toUpperCase()) {
                props.showAlert("Warning" , "The word is already capitalized.");
            } else {
                props.showAlert("success" , "All Letters are Capital Now");
            }
        }
        if (text !== "") {
            setnewt(text.toUpperCase());
            settextp(2);
            alertcap();
        } else if (text === ""){
            setnewt(newt.toUpperCase());
            settextp(2);
            props.showAlert("Warning" , "Input is Empty");
        }
    }

    const low = () => {
        const alertlow =() => {
            if (text === text.toLowerCase()) {
                props.showAlert("Warning" , "The word is already capitalized.");
            } else {
                props.showAlert("success" , "All Letters are Capital Now");
            }
        }
        if (text !== "") {
            setnewt(newt.toLowerCase());
            settextp(2);
            alertlow();
        } else if (text === ""){
            setnewt(newt.toLowerCase());
            settextp(2);
            props.showAlert("Warning" , "Input is Empty");
        }
    }

    const firstletter = () => {
        let o = text.replace(/\b\w/g, char => char.toUpperCase());
        if (text !== "") {
            setnewt(o);
            settextp(2);
        } else if (text === ""){
            setnewt(o);
            settextp(2);
        }
    }

    const all =() => {
        setnewt("");
        settext("");
    }

    let word = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
    let char = text.replace(/\s/g, "").length;
    let spac = text.split(/\s/).length - 1;
    let entr = text.trim() === "" ? 0 : text.split(/\n+/).length ;

    function countCharacters(text) {
        let o =  text.trim().toUpperCase().replace(/\s/g, text.trim() === "" ? 0 : "" );
        let count = {}
        for (let char of o) {
            count[char] = (count[char] || 0) + 1;
        }
    
        return Object.entries(count).map(([char, num]) => `[${char}${num}]`);
    }

    const sorted = countCharacters(text).sort((a, b) => {
        let numA = parseInt(a.match(a.slice(2,(a.length)))[0]);
        let numB = parseInt(b.match(b.slice(2,(b.length)))[0]);
        return numB - numA;
    })

    let per =  [];
    let p = sorted;

    if (text !== ""  ) { 
        for(let i = 0; i < p.length; i++){
            let first = sorted[i].slice(2, sorted[i].length-1);
            per.push(Math.round( (100 / char * first) * 100) / 100);
        }
    }


    const relo = (event) => {    
        settext(event.target.value); 
        setnewt("");
        settextp(1); 
    }

    const deletspace = () => {
        let newText = text.split(/[ ]+/);
        let spcount = text.split(/[ ]+/).length-1;
        let calculatedExtraSpaces = spac - spcount; 

        settext(newText.join(" "));
        setnewt(newText.join(" "));

        if (calculatedExtraSpaces === 0) {
            props.showAlert("Warning" , "There is no Extra Space");
        } else {
            props.showAlert("success" , `Delet Extra spaces: ${calculatedExtraSpaces}`);
        }
    }

    const handleCopy = () => {
        const textToCopy = newt === "" ? text: newt;
        if (!textToCopy || textToCopy.trim() === "") {
             props.showAlert("Warning", "Input is Empty");
             return;
        } else {
            navigator.clipboard.writeText(textToCopy);
            props.showAlert("success", "Text copied to clipboard successfully!");
            console.log(textToCopy)
        }
    };

    const paste = async () => {
    try {
        const textFromClipboard = await navigator.clipboard.readText();
        
        if (!textFromClipboard || textFromClipboard.trim() === "") {
            props.showAlert("Warning", "Clipboard is Empty");
            return;
        }
        settext(prevText => prevText + textFromClipboard);
        props.showAlert("success", "Text pasted successfully!");
        console.log("Pasted Text:", textFromClipboard);       
        } catch (err) {
            props.showAlert("danger", "Browser blocked clipboard reading.");
        }
    };

    let historycount = 0

    const history = () => {
        if (text.trim() !== "") {
            props.hist(newt === "" ? text : newt); 
            settext("");
            historycount++
            props.hiscount(historycount)
            props.showAlert("success", "Saved to History!");
        } else {
            props.showAlert("Warning", "Cannot save empty text!");
        }
    }

  
 
    return (
        < >
            <div style={{ display :"flex" }}>
                <div className='w-75'>
                    <div className={`form-floating   bg-${props.first}`}  data-bs-theme={`${props.first}`}
                        style={{ border: `10px solid ${props.first === "light" ? "white" : "black"}` }}>
                        <textarea
                            className="form-control"
                            placeholder="Write something"
                            value={text}
                            onChange={relo}
                            style={ {height: "200px"}}
                        ></textarea>
                        <label>Write Text</label>
                    </div>
                    <div className={`form-floating   bg-${props.first}`}  data-bs-theme={`${props.first}`}
                        style={{ border: `10px solid ${props.first === "light" ? "white" : "black"}`}}>
                        <div  className="border border-2  p-2 text-break" 
                            style={{ 
                                width: '100%', 
                                height: 'auto',          
                                minHeight: '50px',  
                                whiteSpace: 'pre-wrap',    
                                backgroundColor: `${props.first === "light" ? "white" : "#212529"}`,
                                border: `10px solid ${props.first === "dark" ? "white" : "black"}`,
                                color: `${props.first === "dark" ? "white" : "black"}`
                            }}>
                            <p className="myText"> {textp === 1 ? text : newt}</p>
                        </div>
                    </div>
                    <div className='d-flex flex-wrap gap-2  p-3'
                        style={{ 
                            backgroundColor: `${props.first === "light" ? "white" : "#212529"}`,
                            border: `10px solid ${props.first === "light" ? "white" : "black"}`,
                            color: `${props.first === "dark" ? "white" : "black"}`,      
                        }}>
                        <p className="myText px-4">Words: {word}</p>
                        <p className="myText px-4">Characters: {char}</p>
                        <p className="myText px-4">Total Space: {spac}</p>
                        <p className="myText px-4">Total Lines: {entr}</p>            
                    </div>
                    <div className="d-flex flex-wrap " 
                     style={{ 
                        backgroundColor: `${props.first === "light" ? "white" : "#212529"}`,
                        border: `10px solid ${props.first === "light" ? "white" : "black"}`,
                        color: `${props.first === "dark" ? "white" : "black"}`,      
                        }}>
                        {p.map(function(elem , idx){   
                            return (
                                <div className=' w-25px '>  
                                    <p className="myText px-4 p-1" style={{ width : "220px" }} 
                                    id={idx}>Total {elem[1]} : {(elem.slice(2,(elem.length-1)))} {`( ${per[idx]} % )`}</p>
                                </div>
                                )
                            })
                        } 
                    </div>
                </div>
            
                <div className='w-25'
                style={{ 
                        display: 'flex',
                        flexWrap: 'wrap',
                        height: "200px",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: `${props.first === "light" ? "white" : "black"}`,
                        marginTop: "20px"
                        }}>
                    <button
                        className="btn btn-primary me-2 "
                        style={{ width: '110px', margin: "10px" }}
                        type="button"
                        onClick={upper}>
                        To Upper
                    </button>

                    <button
                        className="btn btn-primary me-2  "
                        style={{ width: '110px', margin: "10px" }}
                        type="button"
                        onClick={low}>
                        To Lower
                    </button>

                    <button
                        className="btn btn-primary me-2  "
                        style={{ width: '110px', margin: "10px" }}
                        type="button"
                        onClick={firstletter}>
                        First Capital
                    </button>

                    <button
                        className="btn btn-primary me-2  "
                        style={{ width: '110px', margin: "10px" }}
                        type="button"
                        onClick={all}>
                        Clear All
                    </button>

                    <button
                        className="btn btn-primary me-2  "
                        style={{ width: '110px', margin: "10px" }}
                        type="button"
                        onClick={deletspace}>
                        Delete Space
                    </button>

                    <button
                        className="btn btn-primary me-2  "
                        style={{ width: '110px', margin: "10px" }}
                        type="button"
                        onClick={handleCopy}>
                        Copy 
                    </button>
                    <button
                        className="btn btn-primary me-2  "
                        style={{ width: '110px', margin: "10px" }}
                        type="button"
                        onClick={history }>
                        Save  
                    </button>
                     <button
                        className="btn btn-primary me-2  "
                        style={{ width: '110px', margin: "10px" }}
                        type="button"
                        onClick={paste}>
                        Paste 
                    </button>
                </div>
            </div>            

        </>
    )
}

export default Text;