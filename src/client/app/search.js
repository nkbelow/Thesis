import React from 'react';

class Filter extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			value = ""
		}
		this.handleClick.bind(this);
	}

	handleClick () {

	}

	render () {
		return (
			   <form>
			     <label for="search">Find a park:</label>
			     <input name="search" value={this.state.value}></input>
			     <button onClick="this.handleClick()" />
			   </form>
			   )
	}