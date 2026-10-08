import { useState } from 'react'

function Text(props) {

    let [text, settext] = useState("")
    let [newt, setnewt] = useState('')
    const [textp, settextp] = useState(1)
    let [totalSp, settotalsp] = useState(0)
    // let [words, setwords] = useState([''])

    const upper = () => {
        const alertcap =() => {
             if (text === text.toUpperCase()) {
                props.showAlert("Warinig" , "The word is already capitalized.")
            } else {
                props.showAlert("success" , "All Letters are Capital Now")
            }
        }
        if (text !== "") {

            setnewt(text.toUpperCase())
            settextp(2)
            alertcap()

        }else if (text === ""){
            setnewt(newt.toUpperCase())
            settextp(2)
            props.showAlert("Warinig" , "Input is Empty")

        }
    }

    const low = () => {
        const alertlow =() => {
             if (text === text.toLowerCase()) {
                props.showAlert("Warinig" , "The word is already capitalized.")
            } else {
                props.showAlert("success" , "All Letters are Capital Now")
            }
        }
        if (text !== "") {
            setnewt(newt.toLowerCase())
            settextp(2)
            alertlow()

        }else if (text === ""){
            setnewt(newt.toLowerCase())
            settextp(2)
            props.showAlert("Warinig" , "Input is Empty")
            //alertlow()
        }
    }
     const firstletter = () => {
         let o = text.replace(/\b\w/g, char => char.toUpperCase())
        if (text !== "") {
            // setnewt(text.toLowerCase())
            setnewt(o)
           settextp(2)

        }else if (text === ""){
            setnewt(o)
            settextp(2)
        }
    }

    const all =() => {
        setnewt("")
        settext("")
    }


    let word = text.trim() === "" ? 0 : text.trim().split(/\s+/).length
    let char = text.replace(/\s/g, "").length
    let spac = text.split(/\s/).length - 1
    let entr = text.split(/\n+/).length - 1
    //console.log(  text.replace(/\s+/g, `${char.toUpperCase()}`))
    
    
    
    function countCharacters(text) {
        let o =  text.trim().toUpperCase().replace(/\s/g, text.trim() === "" ? 0 : "" )
    let count = {}
    
    for (let char of o) {
        count[char] = (count[char] || 0) + 1
    }
    
    return Object.entries(count).map(([char, num]) => `[${char}${num}]`)
}



const sorted = countCharacters(text).sort((a, b) => {
    let numA = parseInt(a.match(a.slice(2,(a.length)))[0])
    let numB = parseInt(b.match(b.slice(2,(b.length)))[0])
    
    //console.log( parseInt(a.match(a.slice(2,(a.length-1)))[0]))
    
    
    return numB - numA
})

let per =  []

let p = sorted
if (text !== ""  ) { 
    for(let i = 0; i < p.length; i++){
    let first = sorted[i].slice(2, sorted[i].length-1)

    per.push(Math.round( (100 / char * first) * 100) / 100)

    }
}


const relo = (event) => {
    
    settext(event.target.value) 
    setnewt("") 
    settextp(1) 
}
const deletspace = () => {
    let newText = text.split(/[ ]+/);
    let spcount = text.split(/[ ]+/).length-1;
    let calculatedExtraSpaces = spac - spcount; 
    settotalsp(spac - spcount) ;
    

    settext(newText.join(" "));
    setnewt(newText.join(" "));
    console.log(totalSp)
    if (calculatedExtraSpaces === 0) {
        props.showAlert("Warning" , "There is no Extra Space")
    } else {
        props.showAlert("success" , `Delet Extra spaces: ${calculatedExtraSpaces}`)
    }
}



    return (
        < >

            <div className={`form-floating   bg-${props.first}`}  data-bs-theme={`${props.first}`}
           style={{ 
                        border: `10px solid ${props.first === "light" ? "white" : "black"}`
                          
                    }}>
                <textarea
                    className="form-control"
                    placeholder="Write something"
                    value={text}
                    onChange={relo}
                    style={ {
                                //minHeight: '50px',
                                height: "200px"
                             }
                    }
                ></textarea>

                <label>Write Text</label>
            </div>

            <div className={`form-floating   bg-${props.first}`}  data-bs-theme={`${props.first}`}
            style={{ 
                        border: `10px solid ${props.first === "light" ? "white" : "black"}`
                          
                    }}>
                <textarea
                    className="form-control"
                    placeholder="Result"
                    value={newt}
                    readOnly
                ></textarea>

                <label>Result</label>
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
                            <div className=' w-25px mx-5'>  
                            <p className="myText px-4" style={ {
                                width : "220px" }
                            } id={idx}>Total {elem[1]} : {(elem.slice(2,(elem.length-1)))} {`( ${per[idx]} % )`}</p>
                            </div>
                                )
                    })
                } 
            </div>
            <div 
            style={{ 
                    height: '150px',
                    display: 'flex',
                    alignItems: "center",
                    backgroundColor: `${props.first === "light" ? "white" : "black"}`,
                    border: `10px solid ${props.first === "light" ? "white" : "black"}`,
                    }}>
            <button
                className="btn btn-primary me-2"
                type="button"
                onClick={upper}
            >
                To Upper
            </button>

            <button
                className="btn btn-primary me-2"
                type="button"
                onClick={low}
            >
                To Lower
            </button>
             <button
                className="btn btn-primary me-2"
                type="button"
                onClick={firstletter}
            >
                Only First Letter Capital
            </button>

             <button
                className="btn btn-primary me-2"
                type="button"
                onClick={all}
            >
                Clera All
            </button>
            <button
                className="btn btn-primary me-2"
                type="button"
                onClick={deletspace}
            >
                Delet Spaces
            </button>
            </div>
            
            <div  className="border border-2  p-2 text-break" 
                    style={{ 
                        width: '100%', 
                        height: 'auto',          
                        minHeight: '50px',     
                        backgroundColor: `${props.first === "light" ? "white" : "#212529"}`,
                        border: `10px solid ${props.first === "dark" ? "white" : "black"}`,
                         color: `${props.first === "dark" ? "white" : "black"}`
                     
                    }}>
                <p className="myText"> {textp === 1 ? text : newt}</p>
            </div>


        </>
    )
    
}

export default Text;