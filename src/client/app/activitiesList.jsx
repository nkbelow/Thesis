import React from 'react';

const ActivitiesList = (props) => {
  console.log(props.activities);
  return (
    <ol>
        {props.activities.map((activity, i) => {
          return <li key={i}>{activity.activity}</li> 
        })
      }
    </ol>)
}

export default ActivitiesList;