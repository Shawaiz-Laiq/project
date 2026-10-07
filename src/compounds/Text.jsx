import { useState } from 'react'

function Text() {

    let [text, settext] = useState("")
    let [newt, setnewt] = useState('')
    const [textp, settextp] = useState(1)
    // let [words, setwords] = useState([''])

    const upper = () => {
        if (text !== "") {

            setnewt(text.toUpperCase())
            settextp(2)

        }else if (text === ""){
            setnewt(newt.toUpperCase())
            settextp(2)

        }
    }

    const low = () => {
        if (text !== "") {
            // setnewt(text.toLowerCase())
            setnewt(newt.toLowerCase())
           settextp(2)

        }else if (text === ""){
            setnewt(newt.toLowerCase())
            settextp(2)
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
    console.log(i)

    }
}


const relo = (event) => {
    
    settext(event.target.value) 
    setnewt("") 
    settextp(1) 
}



    return (
        <>

            <div className="form-floating mb-3">
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

            <div className="form-floating mb-3">
                <textarea
                    className="form-control"
                    placeholder="Result"
                    value={newt}
                    readOnly
                ></textarea>

                <label>Result</label>
            </div>

            <div className='d-flex flex-wrap gap-2 border p-3'>
                <p className="myText px-4">Words: {word}</p>
                <p className="myText px-4">Characters: {char}</p>
                <p className="myText px-4">Total Space: {spac}</p>
                <p className="myText px-4">Total Lines: {entr}</p>
            </div>
            <div className="d-flex flex-wrap">
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
            
            <div  className="border border-2 border-dark rounded p-2 text-break" 
                    style={{ 
                        width: '100%', 
                        height: 'auto',          
                        minHeight: '50px',     
                    }}>
                <p className="myText"> {textp === 1 ? text : newt}</p>
            </div>


        </>
    )
    
}

export default Text;