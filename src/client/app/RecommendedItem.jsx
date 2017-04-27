import React from 'react';
import { connect } from 'react-redux';
import { Table, Icon } from 'semantic-ui-react'

function RecommendedItem(props) {
	const trail = props.trail;
  return (
		<Table.Row positive>
      <Table.Cell textAlign='center' width={3}>
      	<Icon name='checkmark' />
      	{trail.name}
      </Table.Cell>
      <Table.Cell textAlign='center' width={1}>{trail.length === 0 ? 'Unknown' : trail.length}</Table.Cell>
      <Table.Cell className='trailItem' width={16}>
        <div className='trailItem'> {trail.description.replace(/<[^>]+>/g, '')} </div>
      </Table.Cell>
    </Table.Row>
  );
}

export default RecommendedItem