import React, { Component } from "react";

class FormHandler extends Component {
	constructor(props) {
		super(props);

		this.state = {
			userName: "",
            comments:'',
            topic:'react',
		};
	}
	handleUserNameChnaged = (event) => {
		this.setState({
			userName: event.target.value,
		});
	};
    handleCommentsChanged = event =>{
        this.setState({
            comments:event.target.value
        })
    }
    handleTopicChanged = event =>{
        this.setState({
            topic:event.target.value
        })
    }
    handleSubmit = event =>{
        alert(`${this.state.userName} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div>
					<label>UserName</label>
					<input
						type="text"
						value={this.state.userName}
						onChange={this.handleUserNameChnaged}
					/>
				</div>
                <div>
                    <label>Comments</label>
                    <textarea value={this.state.comments} onChange={this.handleCommentsChanged} />
                </div>
                <div>
                    <label>
                        Topic
                    </label>
                    <select value={this.state.topic} onChange={this.handleTopicChanged} >
                        <option value='react'>React</option>
                        <option value='angular'>Angular</option>
                        <option value='vue'>Vue</option>

                    </select>
                </div>
                <button type="submit">Submit</button>
			</form>
		);
	}
}

export default FormHandler;
