import React from "react";
import ReactDOM from "react-dom";
const Random1 = {
    src:"https://picsum.photos/200/300",
    alt:"Random1",
    width:"200px",
    height:"200px"
}
const Img_Div ={
    display:"flex",
    justifyContent:"center"
}
const SimpleArray = [
    {
        title:"yumm",
        src:"https://picsum.photos/200/300"
    },
    {
        title:"superb",
        src:"https://picsum.photos/id/237/200/300"
    },
    {
        title:"woww",
        src:"https://picsum.photos/200/300"
    }
]
class ComponentClass extends React.Component {
    scream() {
        alert('aaahhh!!!');
    }
	render() {
        const Test = SimpleArray[1]
		return (
			<>
				<h1>This is Component class.</h1>
				<p>This is my first class.</p>
				<blockquote style={{margin:'50px 0px'}}>
					<p>What is important now is to recover our senses.</p>
					<cite>
						<a
							target="_blank"
							href="https://en.wikipedia.org/wiki/Susan_Sontag">
							Susan Sontag
						</a>
					</cite>
				</blockquote>
                <div  style={Img_Div} >
                    <img src={Random1.src} alt={Random1.alt} width={Random1.width} height={Random1.height}/>
                    <img src={Random1.src} alt={Random1.alt} width={Random1.width} height={Random1.height}/>
                    <img src={Random1.src} alt={Random1.alt} width={Random1.width} height={Random1.height}/>
                </div>
                <div>
                    <h1>{Test.title}</h1>
                    <img src={Test.src}/>
                </div>
                <button onClick={this.scream}>AAAAHHH</button>
			</>
		);
	}
}
export default ComponentClass;
