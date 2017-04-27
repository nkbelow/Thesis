import React from 'react';
import {List, Popup} from 'semantic-ui-react';

const ActivitiesList = (props) => {
  const myStyle = {
      width:'40px',
      height:'40px',
      zIndex:'-100',
      position: 'relative',
      'boxShadow': '2px 2px 2px 1px rgba(0, 0, 0, 0.8)'
    }
  const activities = {
  'AUTO TOURING': 'AUTO TOURING', 
  'BIKING': 'BIKING',
  'CLIMBING': 'CLIMBING', 
  'FISHING': 'FISHING',
  'HORSEBACK RIDING': 'HORSEBACK RIDING',
  'HIKING': 'HIKING',
  'WILDLIFE VIEWING': 'WILDLIFE VIEWING',
  'PHOTOGRAPHY': 'PHOTOGRAPHY',
  'CAMPING': 'CAMPING',
  'BOATING': 'BOATING',
  'SWIMMING': 'SWIMMING',
  'DIVING': 'DIVING',
  'HUNTING': 'HUNTING',
  'PADDLING': 'PADDLING',
  'SNORKELING': 'SNORKELING',
  'HORSE CAMPING': 'HORSE CAMPING'
  }
  return (
    <List>
        {props.activities.map((activity, i) => {
          console.log('https://res.cloudinary.com/djzaih6fz/image/upload/snorkeling.png')
          return <Popup key={i} trigger={<List.Item>
                   <List.Content><img style={myStyle} src={`https://res.cloudinary.com/djzaih6fz/image/upload/${activities[activity.activity]}.png`} /> </List.Content>
                 </List.Item>}>
                 <Popup.Content>
                 {activity.activity}
                 </Popup.Content>
                 </Popup>
        })
      }
    </List>)
}

export default ActivitiesList;