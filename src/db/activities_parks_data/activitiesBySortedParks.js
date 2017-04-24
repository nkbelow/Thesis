const axios = require('axios');
const fs = require('fs');

let sortedDesiredRecs = [ { RecAreaName: 'Acadia National Park', RecAreaID: 2554 },
  { RecAreaName: 'American Samoa National Park', RecAreaID: 2847 },
  { RecAreaName: 'Arches National Park', RecAreaID: 2573 },
  { RecAreaName: 'Badlands National Park', RecAreaID: 2578 },
  { RecAreaName: 'Big Bend National Park', RecAreaID: 2584 },
  { RecAreaName: 'Biscayne National Park', RecAreaID: 2588 },
  { RecAreaName: 'Black Canyon Of The Gunnison National Park',
    RecAreaID: 2592 },
  { RecAreaName: 'Bryce Canyon National Park', RecAreaID: 2599 },
  { RecAreaName: 'Canyonlands National Park', RecAreaID: 2616 },
  { RecAreaName: 'Capitol Reef National Park', RecAreaID: 2617 },
  { RecAreaName: 'Carlsbad Caverns National Park',
    RecAreaID: 2622 },
  { RecAreaName: 'Channel Islands National Park',
    RecAreaID: 2631 },
  { RecAreaName: 'Congaree National Park', RecAreaID: 2644 },
  { RecAreaName: 'Crater Lake National Park', RecAreaID: 2647 },
  { RecAreaName: 'Cuyahoga Valley National Park',
    RecAreaID: 2652 },
  { RecAreaName: 'Death Valley National Park', RecAreaID: 2662 },
  { RecAreaName: 'Denali National Park & Preserve',
    RecAreaID: 2658 },
  { RecAreaName: 'Dry Tortugas National Park', RecAreaID: 2665 },
  { RecAreaName: 'Everglades National Park', RecAreaID: 2677 },
  { RecAreaName: 'Gates Of The Arctic National Park & Preserve',
    RecAreaID: 2716 },
  { RecAreaName: 'Glacier Bay National Park & Preserve',
    RecAreaID: 2726 },
  { RecAreaName: 'Glacier National Park', RecAreaID: 2725 },
  { RecAreaName: 'Grand Canyon National Park', RecAreaID: 2733 },
  { RecAreaName: 'Grand Teton National Park', RecAreaID: 13525 },
  { RecAreaName: 'Great Basin National Park', RecAreaID: 2732 },
  { RecAreaName: 'Great Sand Dunes National Park & Preserve',
    RecAreaID: 2738 },
  { RecAreaName: 'Great Smoky Mountains National Park',
    RecAreaID: 2739 },
  { RecAreaName: 'Guadalupe Mountains National Park',
    RecAreaID: 2744 },
  { RecAreaName: 'Haleakalā National Park', RecAreaID: 2751 },
  { RecAreaName: 'Hawai\'i Volcanoes National Park',
    RecAreaID: 2753 },
  { RecAreaName: 'Hot Springs National Park', RecAreaID: 2760 },
  { RecAreaName: 'Isle Royale National Park', RecAreaID: 2769 },
  { RecAreaName: 'Joshua Tree National Park', RecAreaID: 2782 },
  { RecAreaName: 'Katmai National Park & Preserve',
    RecAreaID: 2786 },
  { RecAreaName: 'Kenai Fjords National Park', RecAreaID: 2787 },
  { RecAreaName: 'Kings Canyon National Park', RecAreaID: 2931 },
  { RecAreaName: 'Kobuk Valley National Park', RecAreaID: 2795 },
  { RecAreaName: 'Lake Clark National Park & Preserve',
    RecAreaID: 2799 },
  { RecAreaName: 'Lassen Volcanic National Park',
    RecAreaID: 2803 },
  { RecAreaName: 'Mammoth Cave National Park', RecAreaID: 2818 },
  { RecAreaName: 'Mesa Verde National Park', RecAreaID: 2824 },
  { RecAreaName: 'Mount Rainier National Park', RecAreaID: 2835 },
  { RecAreaName: 'North Cascades National Park', RecAreaID: 2845 },
  { RecAreaName: 'Olympic National Park', RecAreaID: 2881 },
  { RecAreaName: 'Petrified Forest National Park',
    RecAreaID: 2856 },
  { RecAreaName: 'Pinnacles National Park', RecAreaID: 2893 },
  {"RecAreaName": "Redwood National and State Parks", "RecAreaID": 2901},

  { RecAreaName: 'Rocky Mountain National Park', RecAreaID: 2907 },
  { RecAreaName: 'Saguaro National Park', RecAreaID: 2917 },
  { RecAreaName: 'Sequoia & Kings Canyon National Park',
    RecAreaID: 2931 },
  { RecAreaName: 'Shenandoah National Park', RecAreaID: 2933 },
  { RecAreaName: 'Theodore Roosevelt National Park',
    RecAreaID: 2949 },
  { RecAreaName: 'Virgin Islands National Park', RecAreaID: 2967 },
  { RecAreaName: 'Voyageurs National Park', RecAreaID: 2970 },
  { RecAreaName: 'Wind Cave National Park', RecAreaID: 2980 },
  { RecAreaName: 'Wrangell - St Elias National Park & Preserve',
    RecAreaID: 2986 },
  { RecAreaName: 'Yellowstone National Park', RecAreaID: 2988 },
  { RecAreaName: 'Yosemite National Park', RecAreaID: 2991 },
  { RecAreaName: 'Zion National Park', RecAreaID: 2994 } ];

  'https://ridb.recreation.gov/api/v1/recareas/2856/activities'
  let i = 0;
  let activities =[];
  setInterval(() => {
    
    let config = {
    url: 'https://ridb.recreation.gov/api/v1/recareas/' + sortedDesiredRecs[i]['RecAreaID'] + '/activities',
    method: 'get',
    headers: {apikey: '678619474BB84AD4B7450C08F4AE1332'}
  }
    axios(config).then(result => {
      // console.log(sortedDesiredRecs[i]['RecAreaID']);
      // console.log(config['url']);
      // console.log(result['data']['RECDATA']);
      activities.push({result: result['data']['RECDATA'], ID: sortedDesiredRecs[i]['RecAreaID'], name:sortedDesiredRecs[i]['RecAreaName'], i: i })
      i++;
      if (i === 59) {
      fs.appendFile('activities.js', JSON.stringify(activities))
      clearInterval();
    }
    })
    .catch(err => {
      console.log(err);
    })
    
    console.log(i);
  }, 3000)