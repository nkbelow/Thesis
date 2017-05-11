import React from 'react';
import {List, Popup, Image} from 'semantic-ui-react';
import Masonry from 'react-masonry-component';

const ActivitiesList = (props) => {
  const myStyle = {
      width:'100px',
      height:'100px',
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
    <Masonry>
        {props.activities.map((activity, i) => {
          return (<Popup key={i} trigger={
                    <Image style={myStyle} src={`https://res.cloudinary.com/djzaih6fz/image/upload/${activities[activity.activity]}.png`} />
                  }>
                 <Popup.Content>
                 {activity.activity}
                 </Popup.Content>
                 </Popup>)
        })
      }
      </Masonry>
      )
}

export default ActivitiesList;