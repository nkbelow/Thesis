import React from 'react';
import { Table, Header } from 'semantic-ui-react'
import RecommendedItem from './RecommendedItem.jsx'
import UnrecommendedItem from './UnrecommendedItem.jsx'

function ConnectedTrailList(props) {
    let recommendedTrails = [];
    let otherTrails = [];
    for(var i = 0; i < props.trails.length; i++){
      if(props.trails[i].length !== 0 && props.trails[i].length <= props.distance){
        recommendedTrails.push(props.trails[i]);
      } else {
      	otherTrails.push(props.trails[i]);
      }
    }
  return (
  	<div>
	  <Header textAlign='center' as='h3'>
	    According to Fitbit, your past weeks average distance per day was {Math.round(props.distance)} miles.
	    <Header.Subheader>
	      Trails in green have mile lengths that you are ready to conquer now!
	    </Header.Subheader>
	  </Header>
	    <Table celled stackable>
	      <Table.Header>
	        <Table.Row>
	          <Table.HeaderCell textAlign='center' >Name</Table.HeaderCell>
	          <Table.HeaderCell textAlign='center' >Length (miles)</Table.HeaderCell>
	          <Table.HeaderCell textAlign='center'>Description</Table.HeaderCell>
	        </Table.Row>
	      </Table.Header>
	      <Table.Body>
		      {recommendedTrails.map((trail) =>
		        <RecommendedItem key={trail.name.toString()}
		                  trail={trail} />
		      )}
		      {otherTrails.map((trail) =>
		        <UnrecommendedItem key={trail.name.toString()}
		                  trail={trail} />
		      )}
	      </Table.Body>
	     </Table>
  	</div>
  );
}

export default ConnectedTrailList