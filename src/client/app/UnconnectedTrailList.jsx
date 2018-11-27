import React from 'react';
import { Table } from 'semantic-ui-react'
import UnrecommendedItem from './UnrecommendedItem.jsx'

function UnconnectedTraiList(props) {
  return (
  	<div>
	    <Table celled>
	      <Table.Header>
	        <Table.Row>
	          <Table.HeaderCell textAlign='center' >Name</Table.HeaderCell>
	          <Table.HeaderCell textAlign='center' >Length</Table.HeaderCell>
	          <Table.HeaderCell textAlign='left'>Description</Table.HeaderCell>
	        </Table.Row>
	      </Table.Header>
	      <Table.Body>
		      {props.trails.map((trail) =>
		        <UnrecommendedItem key={trail.name.toString()}
		                  trail={trail} />
		      )}
	      </Table.Body>
	     </Table>
  	</div>
  );
}

export default UnconnectedTraiList