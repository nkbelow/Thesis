import React from 'react';

class Filter extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			popularityFilter: false,
			activities : {
				hasHiking: false,
				hasBiking: false,
				hasClimbing: false,
				hasFishing: false,
				hasBoating: false,
				hasHorsebackRiding: false,
				hasWildlifeViewing: false,
				hasSwimming: false,
				hasAutoTouring: false,
				hasPhotography: false
			},
			hasLodging: false
		}
	}
	render () {
		return (
			    <form>
				  <fieldset>
				  	<label for="popularity">Filter by: </label>
				  	<select name="popularity" value={this.state.popularityFilter} />
				      <option value=true>Popularity</option>
				  </fieldset>
				  <fieldset>
				  	<input type="checkbox" name="hiking" checked={this.state.activities.hasHiking} />
				  	<input type="checkbox" name="biking" checked={this.state.activities.hasBiking} />
				  	<input type="checkbox" name="climbing" checked={this.state.activities.hasCliming} />
				  	<input type="checkbox" name="fishing" checked={this.state.activities.hasFishing} />
				  	<input type="checkbox" name="boating" checked={this.state.activities.hasBoating} />
				  	<input type="checkbox" name="horseback" checked={this.state.activities.hasHorsebackRiding} />
				  	<input type="checkbox" name="wildlife" checked={this.state.activities.hasWildlifeViewing} />
				  	<input type="checkbox" name="biking" checked={this.state.activities.hasSwimming} />
				  	<input type="checkbox" name="autoTouring" checked={this.state.activities.hasAutoTouring} />
				  	<input type="checkbox" name="photography" checked={this.state.activities.hasPhotography} />    
				  </fieldset>
				  <fieldset>
				  	<label for="lodging">Has Lodging: </label>
				  	<input type="checkbox" name="lodging" checked={this.state.hasLodging} />
				  </fieldset>
				  <button value = "Send" onClick="this.sendFilters()"/>
				</form>
			   )
	}
}

export default Filter;
