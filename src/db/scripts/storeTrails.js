const database = require('../index.js');
const data = require('../../../data/ourNationalParks.js');
const Promise = require('bluebird');
const trailsHelper = require('../../server/handlers/trailsHelper.js')
const polygon = require('../../../pointInPolygon.js')

// const db = database.db;


exports.storeTrails = function() {
  data.ourNationalParks.forEach(function(park) {
    trailsHelper.trails({lat: park.latitude, lng: park.longitude}).then(function(result) {
      console.log(result);
      // db.query('INSERT INTO trails (name, latitude, longitude, length, park_id) VALUES ($1, $2, $3, $4, $5)', [trail.name, trail.lat, trail.lon, trail.activities.length, ])
    })
  })
}


// { city: 'Belden',
//     state: 'California',
//     country: 'United States',
//     name: 'Pacific Crest Trail: Northern California: N',
//     parent_id: null,
//     unique_id: 5928,
//     directions: 'cali',
//     lat: 40.006966,
//     lon: -121.249453,
//     description: null,
//     date_created: null,
//     children: [],
//     activities: [ [{ name: 'Pacific Crest Trail: Northern California: N',
//     unique_id: '2-2633',
//     place_id: 5928,
//     activity_type_id: 2,
//     activity_type_name: 'hiking',
//     url: 'http://www.tripleblaze.com/trail.php?c=3&i=2633',
//     attribs: { '"length"': '"134"' },
//     description: 'Section N of the Pacific Crest Trail runs 134.3 miles from Highway 70 at Belden Town Bridge to Burney Falls. After only a few miles of hiking along this section you\'ll leave the Sierra Nevada mountain range behind and head on up into the Cascade Mount Range and the Modoc Plateau. Volcanic Lassen Peak and Lassen Volcanic National Park are the highlights of this section.&lt;br /&gt;<br />&lt;br /&gt;<br />Along the way the trail passes Belden, CA; Indian Creek; Poison Spring; Road 26N02; Humbug Road 27N01; Humboldt Road at Humboldt Summit; Carter Meadow Trail junction; Junction to Butt Mountain summit; Highway 36; Stover Camp; North Stover Mountain; North Fork Feather River; Chester-Childs Meadows Road; Warner Valley Campground; Lower Twin Lake; Plantation Loop Road; Road 32N12; Old Station, CA; Road 32N90; Road 32N99; Road 33N22; Highway 44; Hat Creek Rim Fire Lookout site; Road 22; Cassel-Fall River Mills Road;  Rock Spring Creek; Cassel, CA; Highway 299; Burney, CA; and Highway 89.',
//     length: 134,
//     activity_type: 
//      { created_at: '2012-08-15T16:12:21Z',
//        id: 2,
//        name: 'hiking',
//        updated_at: '2012-08-15T16:12:21Z' },
//     thumbnail: null,
//     rank: null,
//     rating: 0 } ] ] }