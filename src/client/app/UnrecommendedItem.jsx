import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'semantic-ui-react'

function UnrecommendedItem(props) {
  return (
		<Table.Row>
      <Table.Cell textAlign='center' width={2}>{props.trail.name}</Table.Cell>
      <Table.Cell textAlign='center' width={1}>{props.trail.length === 0 ? 'Unknown' : props.trail.length}</Table.Cell>
      <Table.Cell width={16}>
      	<div className='trailItem'> {props.trail.description.replace(/<[^>]+>/g, '')} </div>
      </Table.Cell>
    </Table.Row>
  );
}

export default UnrecommendedItem