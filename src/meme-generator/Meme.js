import React, {useState, useEffect} from 'react'
import "../App.css";
import "./Meme.css";

const Meme = () => {
	//create state to hold some templates
	const [templates, setTemplates] = useState("")
	const [randImg, setRandImg] = useState("")

	const [topText, setTopText] = useState('')
	const [bottomText, setBottomText] = useState('')


	useEffect(() => {
		fetch ("https://api.imgflip.com/get_memes")
		.then (res => res.json())
		.then (data => {
			const randNum = Math.floor(Math.random() * data.data.memes.length);
			setRandImg(data.data.memes[randNum].url)
		})
    }, [templates]);
    // only run after first render [] - dont run before

// setTemplates(templates[randNum].url)


return (
    
	<div className="card meme">
		<h3 className="name">Meme Generator <span role='img' aria-label='smile'>🤣</span></h3>
		<div 
			style={{
				backgroundImage: `url(${randImg})`, 
				backgroundSize: 'contain', 
				backgroundRepeat: 'no-repeat', 
				backgroundPosition: '50% 50%', 
				minWidth: '200px', 
				height: "250px", 
			}}
		> 
			<p className="memeText">
				{topText}
			</p>
			<p className="memeText">
				{bottomText}
			</p>
		</div>
		<button onClick={() => setTemplates(Symbol())}> pick a random meme</button>
		<br/>
		<input 
			placeholder="enter top text here" 
			type="topText" 
			value={topText} 
			onChange={e => setTopText(e.target.value)} 
		/> 
		<br/>
		<input 
			placeholder="enter bottom text" 
			type="bottomText" 
			value={bottomText} 
			onChange={e => setBottomText(e.target.value)} 
		/> 
	</div>

)

}

export default Meme