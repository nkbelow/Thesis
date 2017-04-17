import React from 'react';
import {List} from 'semantic-ui-react';

const ActivitiesList = (props) => {
  console.log(props.activities);
  return (
    <List>
        {props.activities.map((activity, i) => {
          return <List.Item key={i}>
                   <List.Content>{activity.activity}</List.Content>
                 </List.Item> 
        })
      }
    </List>)
}

export default ActivitiesList;