import React, {useState, useEffect} from "react"
import '../style.css'

const Quotes = () => {

    const stoicApi = "https://randomstoicquotesapi.herokuapp.com/api/v1/quotes";

    const [randQuote, setRandQuote] = useState('')
    const [currentQuote, setCurrentQuote] = useState('')

    useEffect(() => {
        fetch (stoicApi)
        .then(res => res.json())
        .then(data => {
            const randNum = Math.floor(Math.random() * data.data.length);
            setRandQuote(data.data[randNum].attributes.text) 
        })  
    }, [currentQuote])
// why does below have to be outside?? why isn't it global / how do i make it global above
    return (
        <div className="card">
            <h3>Stoic Quote Generator <span>🛡</span></h3>
            <div className="quoteSpace">
                {randQuote}
            </div>
            <br/><br/>
            <button 
                className="buttonStyle" 
                onClick={() => setCurrentQuote(Symbol())}
            > 
                give me a new quote
            </button>
        </div>
    )

}
export default Quotes