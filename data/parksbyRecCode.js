const axios = require('axios');
const fs = require('fs');

// var config = {
//   url: 'https://ridb.recreation.gov/api/v1/organizations/128/recareas',
//   method: 'get',
//   headers: {apikey: '678619474BB84AD4B7450C08F4AE1332'},
//   params: {
//     offset: 0
//   }
// }
// for (var i = 0; i < 12; i++) {
//   (function(index) {
//     axios(config).then((result) => {
//       console.log(result['data'])
//       config['params']['offset'] += 50;
//       console.log(config['params']['offset'])
//     })
    
//   })(i)
// }
let recAreas = [
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2013-04-10",
      "RecAreaEmail": "cure_vis_mail@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 1182,
      "RecAreaPhone": "970- 641-2337",
      "RecAreaDescription": "Recreation at the three reservoirs of the Aspinall Unit is managed by the National Park Service under agreement with the Bureau of Reclamation, Western Colorado Area Office - Northern Division, Grand Junction, Colorado. Formerly, the Curecanti Unit, in 1980 it was renamed the Wayne N. Aspinall Unit in honor of former Congressman Aspinall; a strong supporter of the <A HREF=\"http://www.usbr.gov/dataweb/html/crsp.html\">Colorado River Storage Project</a>.  The Aspinall Unit, also referred to as the Curecanti National Recreation Area, consists of three dams and reservoirs - <A HREF=\"http://www.usbr.gov/dataweb/dams/co01689.htm\">Morrow Point</a>, <A HREF=\"http://www.usbr.gov/dataweb/dams/co00387.htm\">Crystal</a>, and <A HREF=\"http://www.usbr.gov/dataweb/dams/co01675.htm\">Blue Mesa</a>.Water activities at Morrow Point Reservoir include fishing and boating (pack-in boats).  The concessionaire provides guided fishing opportunities and a scenic guided boat tour (1.5 miles) May 1-Oct. 1.  Call the Elk Marina at (970) 641-0707 for reservations.  Both Morrow Point and Crystal require a vigorous hike to reach either reservoir.  The exercise is worth the trip for nature lovers and photographers.  Fishing enthusiasts can select from rainbow, German brown, or lake (mackinaw) trout, or kokanee salmon.Blue Mesa Reservoir's water activities include boating, fishing, sailboarding, waterskiing, and swimming.  Ice fishing and cross-country skiing are some winter activities.  Camping and picnicking areas are available.  The reservoir area's natural beauty is a perfect setting for nature lovers and photographers.  A variety of trout and kokanee salmon are found at Blue Mesa.While no entrance fees to the recreation area are charged, there are camping and boating fees in place.Current Resevoir Water Levels<A HREF=\"http://www.usbr.gov/uc/water/crsp/crsp_cs_asp.html\">Blue Mesa Reservoir</a>, <A HREF=\"http://www.usbr.gov/uc/water/crsp/crrc.html\">Crystal Reservoir</a>,\r\n\r\nThere are two visitor centers, Elk Creek and Cimarron, which are operated seasonally by the National Park Service.  Northeast of the town of Cimarron are the remains of a narrow-gauge trestle across the Cimarron River, on which sits Denver and Rio Grande Railroad Engine 278, a tender, and a caboose used on trips through the Black Canyon of the Gunnison when the railroad was still operational.  Listed in the National Register of Historic Places, the trestle and its historic \"rolling stock\" can be viewed by the public.",
      "RecAreaMapURL": "http://www.nps.gov/cure/webvc/blcamap.pdf",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Morrow Point and Crystal Reservoirs are located about 57 miles southeast of Delta on Colorado Highway 92.  For Blue Mesa go east on U.S. Highway 50 from Montrose to the Lake Fork Junction of Highway 50 and 92.  The dam is just off Colorado Highway 92.",
      "Keywords": "",
      "RecAreaName": "Aspinall, Wayne N., Unit"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "ntsl_interpretation@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 1719,
      "RecAreaPhone": "(801) 741-1012 ",
      "RecAreaDescription": "Imagine yourself an emigrant headed for Oregon: would promises of lush farmlands and a new beginning lure you to leave home and walk for weeks? More than 2,000 miles of trail ruts and traces can still be seen along the Oregon National Historic Trail in six states-reminders of the sacrifices, struggles, and triumphs of early American settlers.",
      "RecAreaMapURL": "",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p> Imagine yourself an emigrant headed for Oregon: would promises of lush farmlands and a new beginning lure you to leave home and walk for weeks? More than 2,000 miles of trail ruts and traces can still be seen along the Oregon National Historic Trail in six states-reminders of the sacrifices, struggles, and triumphs of early American settlers.</p>",
      "Keywords": "",
      "RecAreaName": "Oregon National Historic Trail"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -85.67330523,
          37.5858662
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "ABLI_Administration@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -85.67330523,
      "RecAreaID": 2553,
      "RecAreaPhone": "(270) 358 3137",
      "RecAreaDescription": "For over a century people from around the world have come to rural Central Kentucky to honor the humble beginnings of our 16th president, Abraham Lincoln.  His early life on Kentucky's frontier shaped his character and prepared him to lead the nation through Civil War.  The country's first memorial to Lincoln, built with donations from young and old, enshrines the symbolic birthplace cabin.",
      "RecAreaMapURL": "http://www.nps.gov/abli/planyourvisit/maps.htm",
      "RecAreaLatitude": 37.5858662,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Abraham Lincoln Birthplace National Historical Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -68.30063316,
          44.30777545
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "acadia_information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -68.30063316,
      "RecAreaID": 2554,
      "RecAreaPhone": "(207) 288 3338",
      "RecAreaDescription": "People have been drawn to the rugged coast of Maine throughout history. Awed by its beauty and diversity, early 20th-century visionaries donated the land that became Acadia National Park. The park is home to many plants and animals, and the tallest mountain on the U.S. Atlantic coast. Today visitors come to Acadia to hike granite peaks, bike historic carriage roads, or relax and enjoy the scenery.",
      "RecAreaMapURL": "http://www.nps.gov/acad/planyourvisit/maps.htm",
      "RecAreaLatitude": 44.30777545,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "From Boston take I-95 north to Augusta, Maine, then Route 3 east to Ellsworth, and on to Mount Desert Island. For an alternate route, continue on I-95 north to Bangor, Maine, then take Route 1A east to Ellsworth. In Ellsworth, take Route 3 to Mount Desert Island. \n\nhttp://www.nps.gov/acad/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Acadia National Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -71.01160356,
          42.2553961
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "ADAM_Visitor_Center@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -71.01160356,
      "RecAreaID": 2555,
      "RecAreaPhone": "",
      "RecAreaDescription": "From the sweet little farm at the foot of Penn's Hill to the gentleman's country estate at Peace field, Adams National Historical Park is the story of \"heroes, statesman, philosophers ... and learned women\" whose ideas and actions helped to transform thirteen disparate colonies into one united nation.",
      "RecAreaMapURL": "http://www.nps.gov/adam/planyourvisit/maps.htm",
      "RecAreaLatitude": 42.2553961,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Adams National Historical Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -103.753886,
          42.42170419
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "agfo_ranger_activities@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -103.753886,
      "RecAreaID": 2556,
      "RecAreaPhone": "",
      "RecAreaDescription": "During the 1890s, scientists rediscovered what the Lakota Sioux already knew—bones preserved in one of the world's most significant Miocene Epoch mammal sites.\n\nYet, this place called \"Agate\" is a landscape that reflects many influences—from early animals roaming the valleys and hills, to tribal nations calling the High Plains home, to explorers passing through or settling in the American West.",
      "RecAreaMapURL": "http://www.nps.gov/agfo/planyourvisit/maps.htm",
      "RecAreaLatitude": 42.42170419,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Agate Fossil Beds National Monument"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -156.112002,
          59.05180188
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "KATM_Visitor_Information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -156.112002,
      "RecAreaID": 2557,
      "RecAreaPhone": "(907) 246 3305",
      "RecAreaDescription": "The headwaters of Alagnak Wild River lie within the rugged Aleutian Range of neighboring Katmai National Park and Preserve. Meandering west towards Bristol Bay and the Bering Sea, the Alagnak traverses the beautiful Alaska Peninsula, providing an unparalleled opportunity to experience the unique wilderness, wildlife, and cultural heritage of southwest Alaska.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 59.05180188,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Located on the Alaska Peninsula, 290 miles southwest of Anchorage, the Alagnak Wild River is inaccessible by road.<br />\n<br />\nBy Air<br />\nThe Alagnak may be directly accessed via air taxi flights chartered from Anchorage, King Salmon, Iliamna, Kodiak, Soldotna, Homer, or other nearby Alaska towns and villages. Regularly scheduled commercial flights to King Salmon (AKN), which serves as NPS administrative headquarters and the starting point for most Alagnak adventures, are available from Ted Stevens Anchorage International Airport (ANC) via PenAir and Alaska Airlines.<br />\n </p>",
      "Keywords": "",
      "RecAreaName": "Alagnak Wild River"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -122.4230206,
          37.82676234
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "goga_alcatraz@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -122.4230206,
      "RecAreaID": 2558,
      "RecAreaPhone": "",
      "RecAreaDescription": "Alcatraz Island offers a close-up look at the site of the first lighthouse and US built fort on the West Coast, the infamous federal penitentiary long off-limits to the public, and the history making 18 month occupation by Indians of All Tribes. Rich in history, there is also a natural side to the Rock—gardens, tide pools, bird colonies, and bay views beyond compare.",
      "RecAreaMapURL": "http://www.nps.gov/alca/planyourvisit/maps.htm",
      "RecAreaLatitude": 37.82676234,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Alcatraz Island"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -166.5197218,
          53.9143076
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "janis_kozlowski@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -166.5197218,
      "RecAreaID": 2559,
      "RecAreaPhone": "(907) 581 1276",
      "RecAreaDescription": "During World War II the remote Aleutian Islands, home to the Unangan (Aleut) people for over 8,000 years, became a fiercely contested battleground in the Pacific. This thousand-mile-long archipelago saw invasion by Japanese forces, the occupation of two islands; a mass relocation of Unangax civilians; a 15-month air war; and one of the deadliest battles in the Pacific Theater.",
      "RecAreaMapURL": "http://www.nps.gov/aleu/planyourvisit/maps.htm",
      "RecAreaLatitude": 53.9143076,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Getting There</p>\n<p>Plane<br />\nThe park is located on Amaknak Island in the Aleutian Island Chain, 800 miles west of Anchorage, the nearest large urban center. It can be reached by air through commercial and charter flights from Anchorage.</p>\n<p>Public Transportation<br />\nAlaska Marine Highway (Ferry System)<br />\n </p>",
      "Keywords": "",
      "RecAreaName": "Aleutian World War II National Historic Area"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -101.6717008,
          35.5819662
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "lamr_interpretation@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -101.6717008,
      "RecAreaID": 2560,
      "RecAreaPhone": "",
      "RecAreaDescription": "13,000 years ago this site was already well-known by mammoth hunters as a place to get the best stone for their tools. Centuries passed but the colorful flint found right here in the Texas panhandle never lost its value and usefulness. Visit and gain a sense of how integral this site was to the survival, commerce and culture of the High Plains.",
      "RecAreaMapURL": "http://www.nps.gov/alfl/planyourvisit/maps.htm",
      "RecAreaLatitude": 35.5819662,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Alibates Flint Quarries is located approximately 35 miles north of Amarillo, Texas. From I-40 in Amarillo, take Lakeside exit north towards Lake Meredith National Recreation Area. Exit on TX 136 north towards Borger. After about 30 miles, turn west, from TX 136 onto Cas Johnson Road. Park Service signs will be visible. Proceed approximately 3 miles to \"Y\" intersection and bear to right. Go northwest approximately 2 miles to the Alibates Flint Quarries National Monument Visitor Center.</p>\n<p>From Fritch, take TX 136 south seven miles and make a right on Cas Johnson Road.</p>\n<p><br />\n </p>",
      "Keywords": "",
      "RecAreaName": "Alibates Flint Quarries National Monument"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -78.57431622,
          40.42977467
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "Nathan_Koozer@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -78.57431622,
      "RecAreaID": 2561,
      "RecAreaPhone": "",
      "RecAreaDescription": "The first railroad to circumvent the Allegheny Mountains, the Allegheny Portage Railroad was the finishing piece of the Pennsylvania Mainline Canal.  \"The Portage,\" opened in 1834, marking the first time that there was one, direct route between Philadelphia and Pittsburgh.  All things to all people, it served merchants, passengers, slaves in pursuit of freedom, and soldiers from the Mexican War.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 40.42977467,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Plane<br />\nApproximately 2 1/2 hours from Greater Pittsburgh International Airport. <br />\nCommuter flights may be available to the Johnstown Municipal Airport (45 minutes away) or the Altoona/Blair County Airport in Martinsburg, PA (45 minutes away)</p>\n<p>Car<br />\nThe park is located just off U.S. 22 approximately 12 miles west of Altoona and 10 miles east of Ebensburg. Take the Gallitzin Exit and follow the signs.</p>\n<p>Public Transportation<br />\nAmtrack stops in Johnstown and Altoona. There is no public transportation to or within the park.</p>\n<p><br />\n </p>",
      "Keywords": "",
      "RecAreaName": "Allegheny Portage Railroad National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -101.075821,
          29.53539777
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "amis_interpretationt@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -101.075821,
      "RecAreaID": 2562,
      "RecAreaPhone": "",
      "RecAreaDescription": "An oasis in the desert, Amistad National Recreation Area consists of the US portion of the International Amistad Reservoir. Amistad, whose name comes from the Spanish word meaning friendship, is best known for excellent water-based recreation, camping, hiking, rock art viewing, and its rich cultural history. Amistad is also home to a wide variety of plant and animal life above and below the water.",
      "RecAreaMapURL": "http://www.nps.gov/amis/planyourvisit/maps.htm",
      "RecAreaLatitude": 29.53539777,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p><strong>GETTING THERE</strong></p>\n<p><strong>Car<br />\n</strong>Amistad National Recreation Area is located on the US and Mexico border near Del Rio, Texas and is between San Antonio and Big Bend National Park. The park is 150 miles west of San Antonio on US Highway 90, and about 250 miles east of Big Bend via US Highways 90 and 385. Access to Amistad from the north or south is on US Highways 277 and 377. <br />\n<br />\n<strong>Plane</strong><br />\nContinental Airlines provides service between Del Rio (DRT) and Houston.</p>\n<p><strong>Public Transportation<br />\n</strong>Bus and AMTRAK (rail) stations are located in Del Rio on 1 North Main Street. For AMTRAK information dial 1-800-USA-RAIL. For bus service call Del Rio Multi-Modal Transportation Center at (830)775-7515.<br />\n </p>",
      "Keywords": "",
      "RecAreaName": "Amistad National Recreation Area"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          145.7231096,
          15.21680033
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "amme_administration@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": 145.7231096,
      "RecAreaID": 2563,
      "RecAreaPhone": "",
      "RecAreaDescription": "American Memorial Park honors the American and Marianas people who gave their lives during the Marianas Campaign of World War II. 5,204 names are inscribed on a memorial which was dedicated during the 50th Anniversary of the Invasion of Saipan. Within the 133-acre boundary are white beaches, sporting areas, picnic sites, playgrounds, walkways, and a 30-acre protected wetland and mangrove forest.",
      "RecAreaMapURL": "http://www.nps.gov/amme/planyourvisit/maps.htm",
      "RecAreaLatitude": 15.21680033,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "The park is centrally located along the western shoreline of Saipan in Garapan Village.\n\nTraveling from the airport, proceed north on Airport Road (Tun Herman Pan Highway) until the road ends at Monsignor Guerrero Road (16 Highway). Turn left on Monsignor Guerrero Road, and continue until the road ends at Beach Road. Turn right onto Beach Road, and continue until the road ends at the park's mall entrance. You will see a sign for American Memorial Park in front of you, and the Court of Honor and Flag Circle in the distance. Turn left onto Micro Beach Road and proceed to the parking lot and Visitor Center on your right.\n\nThe park is within easy walking distance from hotels in Garapan's tourist district. From other locations, the park can be reached by taxi or rental car.\n\nCamping is not allowed at American Memorial Park. There are no entrance fees.",
      "Keywords": "",
      "RecAreaName": "American Memorial Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -76.96314236,
          38.89644397
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -76.96314236,
      "RecAreaID": 2564,
      "RecAreaPhone": "",
      "RecAreaDescription": "Whether you exercise along the river trail or relax by the water, Anacostia Park is a breath of fresh air and a space to unwind amid a bustling city.",
      "RecAreaMapURL": "http://www.nps.gov/anac/planyourvisit/maps.htm",
      "RecAreaLatitude": 38.89644397,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "From Baltimore-Washington Pkwy/295\nFollow the Baltimore-Washington Parkway South toward Washington, DC. Take the left lanes to 295 South, stay in center ln. From 295, take the eastbound Pennsylvania Avenue exit. Take the first right onto Fairlawn Avenue. Go to the stop sign and turn right again on Nicholson Street to enter the park. Turn right to get to the skating pavilion and tennis court area.\n\nFrom Interstate Route 395\nFollow I-395 North into Washington, DC toward the Southeast-Southwest Freeway. Stay left and follow the sign for I-295 south. Then follow the sign for Pennsylvania Avenue. Exit onto Pennsylvania Avenue. Cross the bridge. Take the first right onto Fairlawn Avenue. Go to the stop sign and turn right again on Nicholson Street to enter the park. Turn right to get to the skating pavilion and tennis court area.\n\nFrom METRO:\nTake the GREEN line to Anacostia station. Exit left, towards to metro parking lot and follow sidewalk path and Enter park through the fence gate.",
      "Keywords": "",
      "RecAreaName": "Anacostia Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -84.12988898,
          32.19831758
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "ande_information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -84.12988898,
      "RecAreaID": 2566,
      "RecAreaPhone": "(229) 924 0343",
      "RecAreaDescription": "The Camp Sumter military prison at Andersonville was one of the largest Confederate military prisons during the Civil War. During the 14 months the prison existed, more than 45,000 Union soldiers were confined here. Of these, almost 13,000 died here. Today, Andersonville National Historic Site is a memorial to all American prisoners of war throughout the nation's history.",
      "RecAreaMapURL": "http://www.nps.gov/ande/planyourvisit/maps.htm",
      "RecAreaLatitude": 32.19831758,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "From the north, via I-75\nFollow I-75 south to Exit 135 (Perry). Head southwest on GA-224 from the interstate to Montezuma, approximately 20 miles. Just outside Montezuma, turn right on GA-26 and follow to the intersection of GA-49. Turn left on GA-49 and head south approximately 6 miles to Andersonville. The park entrance will be on the left.\n\nFrom the south, via I-75\nFollow I-75 north to Exit 101 (Cordele). Head west on US-280 from Cordele to Americus, approximately 30 miles. In Americus, turn right onto GA-49 and head north approximately 10 miles to Andersonville. The park entrance will be on the right, after passing the park exit and cemetery entrance.",
      "Keywords": "",
      "RecAreaName": "Andersonville National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -157.5544362,
          56.85317675
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "KATM_Visitor_Information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -157.5544362,
      "RecAreaID": 2567,
      "RecAreaPhone": "(907) 246 3305",
      "RecAreaDescription": "Given its remote location and challenging weather conditions, Aniakchak is one of the most wild and least visited in places in the National Park System. This landscape is a vibrant reminder of Alaska's location in the volcanically active \"Ring of Fire\" as it is home to an impressive six mile (10 km) wide, 2,500 ft (762 m) deep caldera formed during a massive volcanic eruption 3,500 years ago.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 56.85317675,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Located on the Alaska Peninsula, 450 miles southwest of Anchorage, Aniakchak National Monument and Preserve is inaccessible by road. Notoriously bad weather makes access to Aniakchak unpredictable. Drop-offs and/or pick-ups may be significantly delayed.</p>\n<p>By Air<br />\nAniakchak National Monument may be directly accessed via air taxi flights chartered from King Salmon, AK and other nearby small towns and villages. Air charters can land you at Meshik Lake, Surprise Lake in the caldera, or Aniakchak, Amber, or Kujulik bays on the Pacific Ocean. Regularly scheduled commercial flights to King Salmon (AKN), which serves as NPS administrative headquarters and the starting point for many Aniakchak adventures, are available from Ted Stevens Anchorage International Airport (ANC) via PenAir and Alaska Airlines.</p>\n<p>By Boat<br />\nPower boats can reach the Preserve portions of Aniakchak from villages along the Pacific Ocean coastline.</p>",
      "Keywords": "",
      "RecAreaName": "Aniakchak National Monument & Preserve"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -82.83709021,
          36.15624509
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "Lizzie_Watts@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -82.83709021,
      "RecAreaID": 2568,
      "RecAreaPhone": "(423) 639 3711",
      "RecAreaDescription": "The Andrew Johnson National Historic Site and National Cemetery interprets the life and legacy of the 17th President. Andrew Johnson's presidency, 1865-1869, illustrates the United States Constitution at work following President Lincoln's assassination and during attempts to reunify a nation torn by civil war. His presidency shaped the future of the United States and his influences continue today.",
      "RecAreaMapURL": "http://www.nps.gov/anjo/planyourvisit/maps.htm",
      "RecAreaLatitude": 36.15624509,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Getting There:<br />\n<br />\nPlane<br />\nThe closest airport is the Tri-Cities Regional Airport, 43 miles northeast of Greeneville. From the airport, take I-81 South to exit 36 and follow the signs to Greeneville.<br />\n<br />\nCar<br />\nFrom I-81S take exit 36 to Rt. 172 south to Greeneville. Follow the signs to the Visitor Center. <br />\nFrom I-81N take exit 23 to Rt. 11E north to Greeneville. Follow the signs to the Visitor Center.<br />\n<br />\nThe Andrew Johnson Visitor Center is located on the corner of College and Depot Streets in historic downtown Greeneville, TN.</p>\n<p>Public Transportation<br />\nThere is no public transportation available to the site.<br />\n </p>",
      "Keywords": "",
      "RecAreaName": "Andrew Johnson National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -77.73828017,
          39.46763452
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "ANTI_Superintendent@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -77.73828017,
      "RecAreaID": 2569,
      "RecAreaPhone": "(301) 432 5124",
      "RecAreaDescription": "23,000 soldiers were killed, wounded or missing after twelve hours of savage combat on September 17, 1862. The Battle of Antietam ended the Confederate Army of Northern Virginia's first invasion into the North and led to Abraham Lincoln's issuance of the preliminary Emancipation Proclamation.",
      "RecAreaMapURL": "http://www.nps.gov/anti/planyourvisit/maps.htm",
      "RecAreaLatitude": 39.46763452,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Antietam National Battlefield"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -78.79856982,
          37.38022164
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "ernie_price@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -78.79856982,
      "RecAreaID": 2570,
      "RecAreaPhone": "",
      "RecAreaDescription": "On April 9, 1865, the surrender of the Army of Northern Virginia in the McLean House in the village of Appomattox Court House, Virginia signaled the end of the nation's largest war. Two important questions about its future were answered. Could the nation survive a civil war intact, and would that nation exist without slavery? The answer to both was yes and a new nation was born.",
      "RecAreaMapURL": "http://www.nps.gov/apco/planyourvisit/maps.htm",
      "RecAreaLatitude": 37.38022164,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Appomattox Court House National Historical Park is located in south central Virginia approximately 95 miles west of Richmond and 22 miles east of Lynchburg.  The main visitor parking area is located on Va. Rt. 24, 2 miles (4.8 km) northeast of the town of Appomattox of off U.S. 460. The closest airport is in Lynchburg, Virginia, 22 miles (40.3 km) west.  Tour groups are welcome and bus parking is available at the site. Groups are requested to contact the park for reservations at least 30 days prior to arrival. 434-352-8987 ext. 231.<br />\n </p>",
      "Keywords": "",
      "RecAreaName": "Appomattox Court House National Historical Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -90.66045665,
          46.96240467
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "apis_webmaster@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -90.66045665,
      "RecAreaID": 2571,
      "RecAreaPhone": "(715) 779 3397",
      "RecAreaDescription": "Along windswept beaches and cliffs, visitors experience where water meets land and sky, culture meets culture, and past meets present. The 21 islands and 12 miles of mainland host a unique blend of cultural and natural resources.  Lighthouses shine over Lake Superior and the new wilderness areas. Visitors can hike, paddle, sail, or cruise to experience these Jewels of Lake Superior.",
      "RecAreaMapURL": "http://www.nps.gov/apis/planyourvisit/maps.htm",
      "RecAreaLatitude": 46.96240467,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "By Automobile\n\nThe headquarters visitor center is one block off Wisconsin Route 13 on the corner of 4th Street and Washington Avenue in the city of Bayfield.\n\nThe visitor center and fishery exhibit at Little Sand Bay is accessible by road or lake access, 13 miles north of Bayfield off County Road K on Little Sand Bay Road.\n\nMeyers Beach, located at the end of Meyers Road off Highway 13 about 5 miles east of Cornucopia, offers lake access and a trailhead.\n\nIsland facilities are only accessible by water.",
      "Keywords": "",
      "RecAreaName": "Apostle Islands National Lakeshore"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -76.4337548,
          40.41029575
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -76.4337548,
      "RecAreaID": 2572,
      "RecAreaPhone": "(304) 535 6270",
      "RecAreaDescription": "The Appalachian Trail is a 2,180+ mile long public footpath that traverses the scenic, wooded, pastoral, wild, and culturally resonant lands of the Appalachian Mountains. Conceived in 1921, built by private citizens, and completed in 1937, today the trail is managed by the National Park Service, US Forest Service, Appalachian Trail Conservancy, numerous state agencies and thousands of volunteers.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 40.41029575,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Appalachian National Scenic Trail"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -109.5863666,
          38.72261844
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "archinfo@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -109.5863666,
      "RecAreaID": 2573,
      "RecAreaPhone": "",
      "RecAreaDescription": "Visit Arches and discover a landscape of contrasting colors, landforms and textures unlike any other in the world. The park has over 2,000 natural stone arches, in addition to hundreds of soaring pinnacles, massive fins and giant balanced rocks. This red rock wonderland will amaze you with its formations, refresh you with its trails, and inspire you with its sunsets.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 38.72261844,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Arches National Park is located in southeast Utah:\n    5 miles north of Moab, Utah\n    110 miles southwest of Grand Junction, Colorado\n    160 miles northwest of Durango, Colorado\n    236 miles south of Salt Lake City, Utah\n    360 miles southwest of Denver, Colorado\n\nTravel by Plane\nCommercial airlines serve Grand Junction, Durango, Moab and Salt Lake City.\n\nTravel by Bus\nNationwide bus service is available to Green River, Utah (50 miles from Moab) and Grand Junction.\n\nTravel by Train\nAmtrak stops at Grand Junction and Green River.\n\nShuttles & Taxis\nCommercial van services and taxis operate between Grand Junction, Moab and other destinations.For additional information on transportation options in and around Moab, contact the Grand County Travel Council.\n\nGetting Around the Park\nMost visits to Arches involve traveling by personal vehicle along the scenic drive, which provides access to many viewpoints and trailheads. The park does not provide a shuttle bus service.",
      "Keywords": "",
      "RecAreaName": "Arches National Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -91.30837178,
          34.00389998
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -91.30837178,
      "RecAreaID": 2575,
      "RecAreaPhone": "(870) 548 2207",
      "RecAreaDescription": "Located at the confluence of two rivers, Arkansas Post has served as a gathering place for many cultures throughout human history - it represents cultural cooperation, conflict, synthesis, and diversity.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 34.00389998,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Arkansas Post National Memorial"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -75.24524611,
          38.05593172
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "asis_information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -75.24524611,
      "RecAreaID": 2576,
      "RecAreaPhone": "410-641-1441",
      "RecAreaDescription": "Want to live on the edge? Visit a place recreated each day by ocean wind and waves. Life on Assateague Island has adapted to an existence on the move. Explore sandy beaches, salt marshes, maritime forests and coastal bays. Rest, relax, recreate and enjoy some time on the edge of the continent.",
      "RecAreaMapURL": "http://www.nps.gov/asis/planyourvisit/maps.htm",
      "RecAreaLatitude": 38.05593172,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>By Car<br />\nThere are two entrances to Assateague Island National Seashore. Assateague's north entrance is at the end of Route 611, eight miles south of Ocean City, MD. The south entrance is at the end of Route 175, two miles east of Chincoteague, VA. There is no vehicle access between the two entrances on Assateague Island. Vehicles must return to the mainland to access either the north or south entrance.</p>\n<p>By Plane<br />\nThe closest airports are Ocean City Municipal Airport (410-213-2471) and Salisbury-Wicomico County Regional Airport (410-548-4827).</p>\n<p>Public Transportation<br />\nThere is no public transportation available.<br />\n<br />\n </p>",
      "Keywords": "",
      "RecAreaName": "Assateague Island National Seashore"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -107.9999245,
          36.83682216
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "AZRU_Information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -107.9999245,
      "RecAreaID": 2577,
      "RecAreaPhone": "(505) 334 6174",
      "RecAreaDescription": "Pueblo people describe this site as part of their migration journey. Today you can follow their ancient passageways to a distant time. Explore a 900-year old ancestral Pueblo Great House of over 400 masonry rooms. Look up and see original timbers holding up the roof. Search for the fingerprints of ancient workers in the mortar. Listen for an echo of ritual drums in the reconstructed Great Kiva.",
      "RecAreaMapURL": "http://www.nps.gov/azru/planyourvisit/maps.htm",
      "RecAreaLatitude": 36.83682216,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>By car: Aztec Ruins National Monument is located on Ruins Road about 1/2 mile north of New Mexico Highway 516, in the City of Aztec, New Mexico.<br />\nFrom Albuquerque/Bloomfield: Follow Highway 550 north into the City of Aztec, turn left at the \"T\" intersection onto Highway 516, drive 3/4 mile, then turn right immediately after crossing the river onto Ruins Road. Follow Ruins Road ½ mile to the Monument.<br />\nFrom Durango: Follow Highway 550 south into the City of Aztec. Highway 550 will become 516. Follow 516 and turn right immediately after crossing the river onto Ruins Road. Follow Ruins Road ½ mile to the Monument.<br />\nFrom Farmington: Follow Highway 516 east into the City of Aztec; 1/4 mile past Lightplant Road turn left onto Ruins Road. Follow Ruins Road ½ mile to the Monument.<br />\n </p>",
      "Keywords": "",
      "RecAreaName": "Aztec Ruins National Monument"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -102.482942,
          43.68584846
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "badl_information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -102.482942,
      "RecAreaID": 2578,
      "RecAreaPhone": "",
      "RecAreaDescription": "The rugged beauty of the Badlands draws visitors from around the world. These striking geologic deposits contain one of the world's richest fossil beds. Ancient mammals such as the rhino, horse, and saber-toothed cat once roamed here. The park's 244,000 acres protect an expanse of mixed-grass prairie where bison, bighorn sheep, prairie dogs, and black-footed ferrets live today.",
      "RecAreaMapURL": "http://www.nps.gov/badl/planyourvisit/maps.htm",
      "RecAreaLatitude": 43.68584846,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Badlands National Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -106.3317124,
          35.77898596
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "BAND_Visitor_Center@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -106.3317124,
      "RecAreaID": 2579,
      "RecAreaPhone": "",
      "RecAreaDescription": "Bandelier National Monument protects over 33,000 acres of rugged but beautiful canyon and mesa country as well as evidence of a human presence here going back over 11,000 years.  Petroglyphs, dwellings carved into the soft rock cliffs, and standing masonry walls pay tribute to the early days of a culture that still survives in the surrounding communities.",
      "RecAreaMapURL": "http://www.nps.gov/band/planyourvisit/maps.htm",
      "RecAreaLatitude": 35.77898596,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Bandelier National Monument"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -76.85410921,
          39.02604289
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "nace_superintendent@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -76.85410921,
      "RecAreaID": 2581,
      "RecAreaPhone": "(301) 344 3948",
      "RecAreaDescription": "This 29-mile highway connects Baltimore, MD and Washington, D.C. The parkway has carried visitors to and from the capital city since 1954.",
      "RecAreaMapURL": "http://www.nps.gov/bawa/planyourvisit/maps.htm",
      "RecAreaLatitude": 39.02604289,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "The Baltimore Washington Parkway is located between Washington D.C. and Baltimore, Maryland.  It is also known as Route 295.\nThe Baltimore Washington Parkway Maintenance is located at Greenbelt Park 6565 Greenbelt Road, Greenbelt, Maryland 20770.  The phone number is 301-344-3948.\nThe passport stamp is located at the same address.\nThe United States Park Police has jursidiction for the parkway. Thier phone number is 301-344-4250.",
      "Keywords": "",
      "RecAreaName": "Baltimore-Washington Parkway"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -164.4086432,
          65.96087902
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "jennifer_thelen@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -164.4086432,
      "RecAreaID": 2582,
      "RecAreaPhone": "",
      "RecAreaDescription": "Imagine a place of whimsical beauty and larger-than-life landscapes: an ancestral home to ice-age giants and turbulent volcanic activity. A land that holds secrets to the intriguing history of human migration, sustains people that have lived here before its establishment as a preserve and continues to be part of a wide breadth of? traditions. Bering Land Bridge is unlike any other place on earth.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 65.96087902,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Getting There</p>\n<p>Plane<br />\nThe Preserve is vast and access is limited. There are no roads that lead directly into it, and summer access is usually by bush planes and small boats. Winter access is mostly by small planes on skis, by snowmachine, or by dog sleds.</p>\n<p>Nome<br />\nAdministrative Offices for Bering Land Bridge National Preserve are located on Front Street in Nome. You must take a commercial airline flight to Nome. The Interpretive Center in Nome offers limited exhibits on the Preserve and Beringia, has an interactive educational computer program, films and offers programs and workshops year round.</p>\n<p>A small road system and rental cars are available in Nome. The Preserve is only accessible by the methods listed above from Nome as well.</p>",
      "Keywords": "",
      "RecAreaName": "Bering Land Bridge National Preserve"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -103.4266499,
          38.03977546
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "beol_interpretation@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -103.4266499,
      "RecAreaID": 2583,
      "RecAreaPhone": "(719) 383 5010",
      "RecAreaDescription": "Bent's Old Fort National Historic Site features a reconstructed 1840s adobe fur trading post on the mountain branch of the Santa Fe Trail where traders, trappers, travelers, and the Cheyenne and Arapaho tribes came together in peaceful terms for trade.  Today, living historians recreate the sights, sounds, and smells of the past with guided tours, demonstrations and special events.",
      "RecAreaMapURL": "http://www.nps.gov/beol/planyourvisit/maps.htm",
      "RecAreaLatitude": 38.03977546,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Bent's Old Fort National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -103.2297897,
          29.29817767
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "bibe_info@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -103.2297897,
      "RecAreaID": 2584,
      "RecAreaPhone": "(432) 477 2251",
      "RecAreaDescription": "There is a place in Far West Texas where night skies are dark as coal and rivers carve temple-like canyons in ancient limestone. Here, at the end of the road, hundreds of bird species take refuge in a solitary mountain range surrounded by weather-beaten desert. Tenacious cactus bloom in sublime southwestern sun, and diversity of species is the best in the country. This magical place is Big Bend.",
      "RecAreaMapURL": "http://www.nps.gov/bibe/planyourvisit/maps.htm",
      "RecAreaLatitude": 29.29817767,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Several Texas highways lead to Big Bend National Park: If traveling south from Alpine, TX, follow TX 118 through Study Butte, TX where the highway enters the park through Maverick Entrance Station. Park headquarters is 23 miles from this west entrance. If traveling from the west, follow Texas FM 170 from Presidio, TX to Study Butte, TX, then turn right on TX 118 to enter the park through the west entrance. If traveling from the east, take US 385 south from Marathon, TX which enters the park through the north entrance at Persimmon Gap. Persimmon Gap is 26 miles from park headquarters.",
      "Keywords": "",
      "RecAreaName": "Big Bend National Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -108.1443943,
          45.13154227
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "bica_info_requests@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -108.1443943,
      "RecAreaID": 2585,
      "RecAreaPhone": "(406) 666 2412",
      "RecAreaDescription": "The vast, wild landscape of Bighorn Canyon National Recreation Area offers visitors unparalleled opportunities to immerse themselves in the natural world, and experience the wonders of this extraordinary place. With over 120,000 acres, one can find an astounding diversity in ecosystems, wildlife, and more than 10,000 years of human history to explore. ..",
      "RecAreaMapURL": "http://www.nps.gov/bica/planyourvisit/maps.htm",
      "RecAreaLatitude": 45.13154227,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p><strong>By Plane<br />\n</strong>Logan International Airport in Billings, Montana for either North or South entrances.<br />\nYellowstone Regional Airport in Cody, Wyoming for South entrance.<br />\nPrivate Planes - The 5U7 airstrip in Fort Smith, Montana is unattended and a day use VFR airstrip. There are mountains and power lines surrounding the airstrip. It is suggested that with winds permitting take off should be done on Runway 07 and landings on Runway 25.</p>\n<p><strong>By Car</strong><br />\nNorth Entrance - Fort Smith, Montana - Take Interstate 90 to Hardin, Montana. Turn on Highway 313 traveling 40 miles south to Fort Smith, Montana and the North entrance.<br />\nSouth entrance - near Lovell, Wyoming - From 14A turn north on Highway 37, continuing 9 miles to South entrance.</p>\n<p><strong>Public Transportation</strong><br />\nNone available.<br />\n </p>",
      "Keywords": "",
      "RecAreaName": "Bighorn Canyon National Recreation Area"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -81.08120629,
          25.97079602
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "bob_degross@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -81.08120629,
      "RecAreaID": 2586,
      "RecAreaPhone": "(239) 695 1201",
      "RecAreaDescription": "The freshwaters of the Big Cypress Swamp, essential to the health of the neighboring Everglades, support the rich marine estuaries along Florida's southwest coast. Protecting over 729,000 acres of this vast swamp, Big Cypress National Preserve contains a mixture of tropical and temperate plant communities that are home to a diversity of wildlife, including the elusive Florida panther.",
      "RecAreaMapURL": "http://www.nps.gov/bicy/planyourvisit/maps.htm",
      "RecAreaLatitude": 25.97079602,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Big Cypress National Preserve is located in Southwest Florida between the cities of Miami and Naples. Interstate 75 (Alligator Alley) and US-41 (Tamiami Trail) are the main roads that traverse the site. Visitor facilities and most activities originate from Tamiami Trail. <br />\nOasis Visitor Center is located along the Tamiami Trail, 50 miles west of Miami, and 50 miles east of Naples. Big Cypress Swamp Welcome Center is located near Naples and Everglades City, along US-41, five miles east of the State Road 29 intersection.</p>",
      "Keywords": "",
      "RecAreaName": "Big Cypress National Preserve"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -113.6458443,
          45.64647324
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "biho_visitor_information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -113.6458443,
      "RecAreaID": 2587,
      "RecAreaPhone": "(406) 689 3155",
      "RecAreaDescription": "On August 9, 1877 gun shots shattered a chilly dawn on a sleeping camp of Nez Perce. By the time the smoke cleared on August 10, almost 90 Nez Perce were dead along with 31 soldiers and volunteers. Big Hole National Battlefield was created to honor all who were there.",
      "RecAreaMapURL": "http://www.nps.gov/biho/planyourvisit/maps.htm",
      "RecAreaLatitude": 45.64647324,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Big Hole is located on Highway 43 ten miles west of the town of Wisdom in southwestern Montana. The physical address is:\n16425 Hwy 43 West\nWisdom, MT 59761",
      "Keywords": "",
      "RecAreaName": "Big Hole National Battlefield"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -80.21023851,
          25.490587
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "bisc_information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -80.21023851,
      "RecAreaID": 2588,
      "RecAreaPhone": "",
      "RecAreaDescription": "Within sight of downtown Miami, yet worlds away, Biscayne protects a rare combination of aquamarine waters, emerald islands, and fish-bejeweled coral reefs. Here too is evidence of 10,000 years of human history, from pirates and shipwrecks to pineapple farmers and presidents. Outdoors enthusiasts can boat, snorkel, camp, watch wildlife...or simply relax in a rocking chair gazing out over the bay.",
      "RecAreaMapURL": "http://www.nps.gov/bisc/planyourvisit/maps.htm",
      "RecAreaLatitude": 25.490587,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Physical Address<br />\n9700 SW 328 Street<br />\nHomestead, Florida 33033</p>\n<p>From the North <br />\nConvoy Point can be reached from either the Florida Turnpike or from US-1.<br />\n• From the Florida Turnpike: Take the Florida Turnpike south, to Exit 6 (Speedway Blvd.). Turn left from exit ramp and continue south to S.W. 328th Street (North Canal Drive). Turn left and continue to the end of the road. It is approximately five miles, and the entrance is on the left.<br />\n• From US-1: Drive south to Homestead. Turn left on SW 328th Street (North Canal Drive), and continue to the end of the road. It is approximately nine miles, and the entrance is on the left.<br />\nFrom the South<br />\nTraveling on US-1 (Overseas Highway), drive north to Homestead. Turn right on SW 328th Street (North Canal Drive — first light after Florida Turnpike entrance), and continue to the end of the road. The entrance is approximately nine miles on the left.<br />\n </p>",
      "Keywords": "",
      "RecAreaName": "Biscayne National Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -84.66506688,
          36.5348388
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "biso_information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -84.66506688,
      "RecAreaID": 2589,
      "RecAreaPhone": "",
      "RecAreaDescription": "Encompassing 125,000 acres of the Cumberland Plateau, Big South Fork National River and Recreation Area protects the free-flowing Big South Fork of the Cumberland River and its tributaries. The area boasts miles of scenic gorges and sandstone bluffs, is rich with natural and historic features and has been developed to provide visitors with a wide range of outdoor recreational activities.",
      "RecAreaMapURL": "http://www.nps.gov/biso/planyourvisit/maps.htm",
      "RecAreaLatitude": 36.5348388,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/biso/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Big South Fork National River & Recreation Area"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -94.3384557,
          30.42356654
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "bith_administration@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -94.3384557,
      "RecAreaID": 2590,
      "RecAreaPhone": "",
      "RecAreaDescription": "Life of all types abounds in the Big Thicket. This national preserve protects the incredible diversity of life found where multiple habitats converge in southeast Texas. Hiking trails and waterways meander through nine different ecosystems, from longleaf pine forests to cypress-lined bayous. It is a place of discovery, a place to wander and explore, a place to marvel at the richness of nature.",
      "RecAreaMapURL": "http://www.nps.gov/bith/planyourvisit/maps.htm",
      "RecAreaLatitude": 30.42356654,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "The Big Thicket National Preserve Visitor Center is located at 6102 FM 420, Kountze, Texas. It is 8 miles north of Kountze and approximately 30 miles north of Beaumont via US 69/287.</p>\n\nMany navigational systems erroneously guide users to remote sections of the preserve or to our former office in Beaumont. The correct coordinates to the visitor center are shown below. Please check your road map or call our visitor center at (409) 951-6700 to verify directions to the visitor center.</p> \n \nThe nearest commercial airport is the Jack Brooks Regional Airport in Beaumont. There are two airports in Houston. There is no public transportation to the preserve.</p>\n\nBig Thicket National Preserve does not collect entrance fees.</p>\n\nThere are no developed campgrounds or designated backcountry campsites in the preserve. Primitive overnight camping is allowed in certain areas; a free camping permit is required. These are available at the preserve visitor center.",
      "Keywords": "",
      "RecAreaName": "Big Thicket National Preserve"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -71.668818,
          42.201158
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "kevin_klyberg@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -71.668818,
      "RecAreaID": 2591,
      "RecAreaPhone": "",
      "RecAreaDescription": "The Blackstone River runs from Worcester, MA to Providence, RI. Its waters powered the Slater Mill in Pawtucket, RI, America's first successful cotton spinning mill. This creative spark began the nation's transformation from Farm to Factory. Today, the Blackstone River Valley is a special type of National Park - a living landscape containing thousands of natural and historic treasures.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 42.201158,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/blac/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "John H. Chafee Blackstone River Valley National Heritage Corridor"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -107.7242756,
          38.57779869
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "CURE_Info@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -107.7242756,
      "RecAreaID": 2592,
      "RecAreaPhone": "(970) 641 2337",
      "RecAreaDescription": "Big enough to be overwhelming, still intimate enough to feel the pulse of time, Black Canyon of the Gunnison exposes you to some of the steepest cliffs, oldest rock, and craggiest spires in North America. With two million years to work, the Gunnison River, along with the forces of weathering, has sculpted this vertical wilderness of rock, water, and sky.",
      "RecAreaMapURL": "http://www.nps.gov/blca/planyourvisit/maps.htm",
      "RecAreaLatitude": 38.57779869,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Black Canyon of the Gunnison National Park is located approximately 250 miles southwest of Denver.</p>\n<p>South Rim: 15 miles east of Montrose, via U.S. Highway 50 and CO Highway 347<br />\nNorth Rim: 11 miles south of Crawford, via CO Highway 92 and North Rim Road (unpaved)</p>\n<p>There is no bridge between the north and south rims of the canyon. Allow two to three hours to drive from one side to the other.</p>\n<p>PUBLIC TRANSPORTATION <br />\nBy bus: To Montrose or Grand Junction<br />\nBy train: To Grand Junction<br />\nThere is no public transportation within the park.</p>\n<p>PLANE<br />\nCommercial airline service is available to Montrose, Gunnison and Grand Junction.</p>\n<p> </p>",
      "Keywords": "",
      "RecAreaName": "Black Canyon Of The Gunnison National Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -81.0420999,
          36.53386746
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "blri_info@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -81.0420999,
      "RecAreaID": 2593,
      "RecAreaPhone": "828-670-1924",
      "RecAreaDescription": "A Blue Ridge Parkway experience is unlike any other: a slow-paced and relaxing drive revealing stunning long-range vistas and close-up views of the rugged mountains and pastoral landscapes of the Appalachian Highlands. The Parkway meanders for 469 miles, protecting a diversity of plants and animals, and providing opportunities for enjoying all that makes this region of the country so special.",
      "RecAreaMapURL": "http://www.nps.gov/blri/planyourvisit/maps.htm",
      "RecAreaLatitude": 36.53386746,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p class=\"subhead\" style=\"margin: auto 0in\"><b style=\"mso-bidi-font-weight: normal\"><span style=\"font-family: Candara\"><font size=\"3\">The Parkway connects Shenandoah National Park near Waynesboro, VA (Milepost 0) with Great Smoky Mountains National Park near Cherokee, NC (Milepost 469).  There are entrances and exits at all major federal and state highways and part of a Parkway experience is getting into the towns and communities of the region.  <st1:city w:st=\"on\">Asheville</st1:city> and Boone, NC and <st1:place w:st=\"on\"><st1:city w:st=\"on\">Roanoke</st1:city>, <st1:state w:st=\"on\">VA</st1:state></st1:place> are the largest cities along the way.  In <st1:state w:st=\"on\"><st1:place w:st=\"on\">Virginia</st1:place></st1:state>, Interstates 64, 81, and 77 all have directions for accessing the Parkway.  The same is true for Interstates 40 and 26 in <st1:state w:st=\"on\"><st1:place w:st=\"on\">North Carolina</st1:place></st1:state>.<o:p></o:p></font></span></b></p>",
      "Keywords": "",
      "RecAreaName": "Blue Ridge Parkway"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -80.98366657,
          37.56577087
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "neri_interpretation@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -80.98366657,
      "RecAreaID": 2594,
      "RecAreaPhone": "",
      "RecAreaDescription": "The Bluestone River and the rugged and ancient gorge it has carved is a richly diverse and scenic area of the southern Appalachians. Bluestone National Scenic River is preserved as a living landscape that provides an unspoiled experience for visitors and a haven for a variety of plants and animals. The park protects a 10.5-mile section of the Bluestone River in southern West Virginia.",
      "RecAreaMapURL": "http://www.nps.gov/blue/planyourvisit/maps.htm",
      "RecAreaLatitude": 37.56577087,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Bluestone National Scenic River is located in southeastern West Virginia and is best accessed via one of two West Virginia State Parks that lie at each end, Bluestone State Park to the north and Pipestem Resort State Park to the south. To reach these parks from I-64, take exit 139, then south on Rt. 20. Bluestone State Park is 15 miles and Pipestem is 22 miles. From I-77 take exit 14 to Rt.20 north. Pipestem is 14 miles and Bluestone is 22 miles. For more information contact the Sandstone Visitor Center of nearby New River Gorge National River.</p>",
      "Keywords": "",
      "RecAreaName": "Bluestone National Scenic River"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -71.06764181,
          42.35908295
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "boaf_mail@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -71.06764181,
      "RecAreaID": 2595,
      "RecAreaPhone": "(617) 742 5415",
      "RecAreaDescription": "Centered on the north slope of Beacon Hill, the African American community of 19th century Boston led the city and the nation in the fight against slavery and injustice. These remarkable men and women, together with their allies, were leaders in Abolition Movement, the Underground Railroad, the Civil War, and the early struggle for equal rights and education.",
      "RecAreaMapURL": "http://www.nps.gov/boaf/planyourvisit/maps.htm",
      "RecAreaLatitude": 42.35908295,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/boaf/planyourvisit/directions.htm\n\n\nThe site's administrative offices are found at 15 Street in Boston.  Our Rangers and programs can be found at the Museum of African American History, 46 Joy Street, on Beacon Hill in downtown Boston.",
      "Keywords": "",
      "RecAreaName": "Boston African American National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -70.93941138,
          42.30905526
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "boha_information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -70.93941138,
      "RecAreaID": 2596,
      "RecAreaPhone": "",
      "RecAreaDescription": ". . . where you can walk a Civil War-era fort, visit historic lighthouses, explore tide pools, hike lush trails, camp under the stars, or relax while fishing, picnicking or swimming-all within reach of downtown Boston. Youth programs, visitor services, research, wildlife management, and more are coordinated on the park's 34 islands and peninsulas by the Boston Harbor Islands Partnership.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 42.30905526,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Boston Harbor Islands National Recreation Area"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -71.05536763,
          42.36957407
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "BOST_Email@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -71.05536763,
      "RecAreaID": 2597,
      "RecAreaPhone": "(617) 242 5641",
      "RecAreaDescription": "Discover how one city could be the Cradle of Liberty, site of the first major battle of American Revolution, and home to many who espoused that freedom can be extended to all.",
      "RecAreaMapURL": "http://www.nps.gov/bost/planyourvisit/maps.htm",
      "RecAreaLatitude": 42.36957407,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/bost/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Boston National Historical Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -79.73185833,
          37.11520539
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "betsy_haynes@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -79.73185833,
      "RecAreaID": 2598,
      "RecAreaPhone": "",
      "RecAreaDescription": "On April 5, 1856, Booker T. Washington was born a slave on the 207-acre farm of James Burroughs. After the Civil War, Washington became the first principal of Tuskegee Normal and Industrial School. Later as an adviser, author and orator, his past would influence his philosophies as the most influential African American of his era. Come explore his birthplace.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 37.11520539,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Plane<br />\nAir service is available to both Roanoke, VA (25 miles from the park) and Lynchburg, VA (50 miles from the park).</p>\n<p>Car<br />\nThe park is located in Franklin County, VA, 16 miles northeast of Rocky Mount, VA via VA 40E and VA 122N; 25 miles southeast of Roanoke, VA via US 220S, VA 40E, and VA 122N; and 50 miles southwest of Lynchburg, VA via US 460W and VA 122S.</p>\n<p>Public Transportation<br />\nPublic transportation to the park is not available. A personal or rental vehicle is required.</p>\n<p> </p>",
      "Keywords": "",
      "RecAreaName": "Booker T Washington National Monument"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -112.1826689,
          37.58399144
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "brca_information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -112.1826689,
      "RecAreaID": 2599,
      "RecAreaPhone": "",
      "RecAreaDescription": "There is no place like Bryce Canyon. Hoodoos (odd-shaped pillars of rock left standing from the forces of erosion) can be found on every continent, but here is the largest collection of hoodoos in the world! Descriptions fail. Photographs do not do it justice. Bring your sense of wonder and imagination when visiting Bryce Canyon National Park.",
      "RecAreaMapURL": "http://www.nps.gov/brca/planyourvisit/maps.htm",
      "RecAreaLatitude": 37.58399144,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/brca/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Bryce Canyon National Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -88.72889343,
          34.50611958
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "natr_interpretation@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -88.72889343,
      "RecAreaID": 2600,
      "RecAreaPhone": "(800) 305 7417",
      "RecAreaDescription": "The Confederate victory at Brices Cross Roads was a significant victory for Major General Nathan Bedford Forrest, but its long term effect on the war proved costly for the Confederates. Brices Cross Roads is an excellent example of winning the battle, but losing the war.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 34.50611958,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Brices Cross Roads National Battlefield Site can be found 15 miles north of Tupelo, Mississippi. To get there, exit off of U.S. Highway 45 onto Rt. 370, in Baldwyn, Mississippi. The battlefield is located 6 miles west of Baldwyn, on Rt. 370. Visitors should also consider visiting the Brice's Crossroads Visitor and Interpretive Center in Baldwyn. To get there, exit U.S. 45 at Rt. 370 and turn east. Take the first right off of Rt. 370 to the center. (You may notice the center as the brick building with more than a dozen flagpoles). For more information, contact the Natchez Trace Parkway Visitor Center in Tupelo, at 1-800-305-7417.</p>",
      "Keywords": "",
      "RecAreaName": "Brices Cross Roads National Battlefield Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -95.67614437,
          39.03787665
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "BRVB_Interp_Ranger@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -95.67614437,
      "RecAreaID": 2601,
      "RecAreaPhone": "(785) 354 4273",
      "RecAreaDescription": "The story of Brown v. Board of Education, which ended legal segregation in public schools, is one of hope and courage. When the people agreed to be plaintiffs in the case, they never knew they would change history. The people who make up this story were ordinary people. They were teachers, secretaries, welders, ministers and students who simply wanted to be treated equally.",
      "RecAreaMapURL": "http://www.nps.gov/brvb/planyourvisit/maps.htm",
      "RecAreaLatitude": 39.03787665,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "The site is located in downtown Topeka, Kansas at 1515 SE Monroe Street.\n\nFrom the east (Missouri)\nFrom I-70 westbound, take right Exit 362C, 10th Street. Turn left onto 10th Street. At the next intersection, turn left onto Monroe Street. Turn left onto 17th Street, and then turn left to enter the visitor parking lot. \n\nFrom the west (Colorado)\nFrom I-70 eastbound, take right Exit 362B, 8th Street. This exit merges with Monroe Street. Stay on Monroe Street, and then turn left onto 17th Street. Turn left to enter the visitor parking lot. \n\nFrom the south (Oklahoma)\nFrom I-335 northbound, take right Exit 177, South Topeka. This exit will lead to a toll booth. Immediately after the toll booth, take right Exit 6, Topeka Boulevard. Turn left onto Topeka Boulevard. Stay on Topeka Boulevard and then turn right onto 17th Street. Turn left to enter the visitor parking lot.",
      "Keywords": "",
      "RecAreaName": "Brown v. Board of Education National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -92.90761584,
          36.04116481
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "buff_information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -92.90761584,
      "RecAreaID": 2602,
      "RecAreaPhone": "",
      "RecAreaDescription": "Established in 1972, Buffalo National River flows freely for 135 miles and is one of the few remaining undammed rivers in the lower 48 states. Once you arrive, prepare to journey from running rapids to quiet pools while surrounded by massive bluffs as you cruise through the Ozark Mountains down to the White River.",
      "RecAreaMapURL": "http://www.nps.gov/buff/planyourvisit/maps.htm",
      "RecAreaLatitude": 36.04116481,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Plane <br />\nAirports are located in Harrison, AR, Branson, MO, Springfield, MO, Northwest Arkansas, AR , Fayetteville, AR, and Little Rock, AR.</p>\n<p>Car<br />\nBuffalo National River is a long, narrow park that is crossed by three main highways. Using Harrison as a starting point: To reach the Upper District, visitors travel south from Harrison on Highway 7, or Highway 43; To reach the Middle District, visitors travel 31 miles south of Harrison on Highway 65; To reach the Lower District, visitors take Highway 65 south from Harrison for five miles, then take Highway 62/412 to the east to Yellville, and Highway 14 south.</p>\n<p>Public Transportation<br />\nNo public transportation in the park.<br />\n<br />\n<br />\n </p>",
      "Keywords": "",
      "RecAreaName": "Buffalo National River"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -64.6222179,
          17.81026717
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "CHRI_Web_Requests@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -64.6222179,
      "RecAreaID": 2603,
      "RecAreaPhone": "",
      "RecAreaDescription": "Welcome to Buck Island! Before you come, please watch our 2014 Telly Award winning film \"Caribbean Gem.\" Watching this will catch you up on 50+ years of National Park Service protection and civic engagement. Learn what we do every day to preserve this resource for Virgin Islanders and visitors alike.\n\nFor the General Management Plan and Environmental Compliance, visit the News page.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 17.81026717,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/BUIS/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Buck Island Reef National Monument"
    },

  {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -117.2415985,
          32.6722503
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "terry_petrovich@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -117.2415985,
      "RecAreaID": 2604,
      "RecAreaPhone": "(619) 557 5450",
      "RecAreaDescription": "Climbing out of his boat and onto shore in 1542, Juan Rodriguez Cabrillo stepped into history as the first European to set foot on what is now the West Coast of the United States. In addition to telling the story of 16th century exploration, the park is home to a wealth of cultural and natural resources. Join us and embark on your own Voyage of Discovery.",
      "RecAreaMapURL": "http://www.nps.gov/cabr/planyourvisit/maps.htm",
      "RecAreaLatitude": 32.6722503,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/cabr/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Cabrillo National Monument"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -109.3388303,
          36.14319567
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "CACH_Interpretation@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -109.3388303,
      "RecAreaID": 2605,
      "RecAreaPhone": "(928) 674 2106",
      "RecAreaDescription": "For nearly 5,000 years, people have lived in these canyons - longer than anyone has lived uninterrupted anywhere on the Colorado Plateau.  In the place called Tseyi, their homes and images tell us their stories. Today, Navajo families make their homes, raise livestock, and farm the lands in these canyons. The National Park Service and Navajo Nation actively work together to manage park resources.",
      "RecAreaMapURL": "http://www.nps.gov/cach/planyourvisit/maps.htm",
      "RecAreaLatitude": 36.14319567,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Getting There</p>\n<p>By Plane: International airports located in Phoenix, AZ (5 hours) or Albuquerque, NM (4 hours). Municipal airports located in Flagstaff, AZ (3 hours); Farmington, NM (2 hours) and Gallup, NM (1 1/2 hours). Local airstrip for medical transport only.</p>\n<p>By Car: The Visitor Center is 3 miles (4.8 km) from Route 191 in Chinle, AZ.</p>\n<p>From Flagstaff, AZ, take I-40 East then Hwy 191 North.</p>\n<p>From Gallup, NM, take Hwy 264 West then Hwy 191 North.</p>\n<p>From Kayenta, AZ, take Route 59 Southeast then Hwy 191 South.</p>\n<p>Other Public Transportation: Amtrak train stations and Greyhound bus stations located in Gallup, NM or Flagstaff, AZ.</p>\n<p>Navajo Transit System operates buses throughout the Navajo Nation. Call 928-729-4002 for more information.<br />\n </p>",
      "Keywords": "",
      "RecAreaName": "Canyon de Chelly National Monument"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -74.01680558,
          40.70347795
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -74.01680558,
      "RecAreaID": 2606,
      "RecAreaPhone": "(212) 344 7220",
      "RecAreaDescription": "Located at the southern tip of Manhattan Island, Castle Clinton stands where New York City began, and represents not only the city's growth, but the growth of a nation. Initially intended to prevent a British invasion in 1812, the fortification has transformed over the years to welcome theatergoers, immigrants, sightseers, and now, millions of visitors to New York Harbor.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 40.70347795,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Castle Clinton is located in historic Battery Park and is only directly accessable by foot, bicycle or wheelchair. You can not directly drive to the site. Local parking is near impossible to find and expensive. All public transportation options are located outside the park.</p>\n<p>Subways: #1 train to South Ferry, #4 or #5 to Bowling Green, R or W train to Whitehall Street. Staten Island Ferry to Battery Park.</p>\n<p>Buses: M1, M6, or M15 bus to Battery Park.</p>",
      "Keywords": "",
      "RecAreaName": "Castle Clinton National Monument"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -70.04319832,
          41.92381465
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "CACO_Superintendent@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -70.04319832,
      "RecAreaID": 2607,
      "RecAreaPhone": "(508) 771 2144",
      "RecAreaDescription": "The great Outer Beach described by Thoreau in the 1800s is protected within the national seashore. Forty miles of pristine sandy beach, marshes, ponds, and uplands support diverse species. Lighthouses, cultural landscapes, and wild cranberry bogs offer a glimpse of Cape Cod's past and continuing ways of life. Swimming beaches and walking and biking trails beckon today's visitors.",
      "RecAreaMapURL": "http://www.nps.gov/caco/planyourvisit/maps.htm",
      "RecAreaLatitude": 41.92381465,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "From Boston area: Take Route 3 south, to the Sagamore Bridge in Bourne. Follow Route 6 eastward to Eastham and Provincetown. From Providence, RI: Take I-95 north to, I-195. Follow Route 6 eastward as described above.\n\nOnce on Cape, most park features are off Route 6 from Eastham to Provincetown. Stop at a park visitor center, or at a chamber of commerce, to get a map of the local vicinity",
      "Keywords": "",
      "RecAreaName": "Cape Cod National Seashore"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -111.5325383,
          32.99702582
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "CAGR_Ranger_Activities@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -111.5325383,
      "RecAreaID": 2608,
      "RecAreaPhone": "",
      "RecAreaDescription": "Explore the mystery and complexity of an extended network of communities and irrigation canals. An Ancient Sonoran Desert People's farming community and \"Great House\" are preserved at Casa Grande Ruins. Whether the Casa Grande was a gathering place for the Desert People or simply a waypoint marker in an extensive system of canals and trading partners is but part of the mystique of the Ruins",
      "RecAreaMapURL": "http://www.nps.gov/cagr/planyourvisit/maps.htm",
      "RecAreaLatitude": 32.99702582,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/cagr/planyourvisit/directions.htm\nThe park is in Coolidge, Arizona, about an hour-long drive from either Phoenix or Tucson. From Interstate 10 take the Coolidge exits and follow the signs to the park entrance.",
      "Keywords": "",
      "RecAreaName": "Casa Grande Ruins National Monument"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -75.65061112,
          35.41370839
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "caha_general_information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -75.65061112,
      "RecAreaID": 2609,
      "RecAreaPhone": "",
      "RecAreaDescription": "The sound of ocean waves, the starry night sky, or the calm of the salt marshes, you can experience it all. Shaped by the forces of water, wind, and storms these islands are ever changing. The plants, wildlife, and people who live here adapt continually. Whether you are enjoying the beach, kayaking the sound, or climbing the Cape Hatteras Lighthouse there is something for everyone to explore!",
      "RecAreaMapURL": "http://www.nps.gov/caha/planyourvisit/maps.htm",
      "RecAreaLatitude": 35.41370839,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "From Nags Head, head south on US 158 and turn left onto NC 12.\n\nFrom Manteo, head east on US 64 and turn right onto NC 12.\n\nFrom Cedar Island, take the ferry across to Ocracoke Village.",
      "Keywords": "",
      "RecAreaName": "Cape Hatteras National Seashore"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -76.990332,
          38.889993
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -76.990332,
      "RecAreaID": 2610,
      "RecAreaPhone": "",
      "RecAreaDescription": "The Capitol Hill Parks include several park areas east of the U.S. Capitol. Included in this group are Folger, Lincoln, Stanton, and Marion Parks, the Eastern Market and Potomac Avenue Metro stations, and several smaller land parcels such as Seward Square, Twining Square, the Maryland Avenue Triangles, the Pennsylvania Avenue Medians, and 59 inner-city triangles and squares.",
      "RecAreaMapURL": "http://www.nps.gov/cahi/planyourvisit/maps.htm",
      "RecAreaLatitude": 38.889993,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/cahi/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Capitol Hill Parks"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -163.5037786,
          67.41499986
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "WEAR_webmail@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -163.5037786,
      "RecAreaID": 2611,
      "RecAreaPhone": "",
      "RecAreaDescription": "North of the Arctic Circle, the monument forms 70 miles of shoreline on the Chukchi Sea.  More than 114 beach ridges provide evidence of human use for 5,000 years.  The Inupiat continue to use the area today.  Vast wetlands provide habitat for shorebirds from as far away as South America.  Hikers and boaters can see carpets of wildflowers among shrubs containing wisps of qiviut from muskoxen.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 67.41499986,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Cape Krusenstern National Monument lies within a remote area of northwest Alaska and is bordered by the Arctic Ocean and Chukchi Sea.</p>\n<p>Visitors generally access the monument via the regional hub in Kotzebue. Commercial airlines provide daily service from Fairbanks or Anchorage, to Kotzebue. Chartered flights with licensed air taxi services, booked in advance, can take backcountry travelers to remote destinations within the monument.</p>\n<p>Summer access may include motorized/non-motorized watercraft, aircraft, or by foot. (Note: traveling by foot in the summer would be an arduous, roundabout journey.) Options for winter access include snowmobile, aircraft, or foot.<br />\n<br />\n<br />\n<br />\n </p>",
      "Keywords": "",
      "RecAreaName": "Cape Krusenstern National Monument"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "ntsl_interpretation@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 2612,
      "RecAreaPhone": "(801) 741 1012",
      "RecAreaDescription": "Follow in the footsteps of over 250,000 emigrants who traveled to the gold fields and rich farmlands of California during the 1840s and 1850s-the greatest mass migration in American history. More than 1,000 miles of trail ruts and traces can still be seen across 10 states on the California National Historic Trail.",
      "RecAreaMapURL": "http://www.nps.gov/cali/planyourvisit/maps.htm",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Those portions of the California National Historic Trail authorized by Congress include nearly 2,000 miles of historic trail that was once the primary \"road\" taken by farmers, enterprising business managers, gold-seekers and fortune hunters who chose to make a new life on the California frontier. The route passes through ten states from Missouri to California.<br />\n </p>",
      "Keywords": "",
      "RecAreaName": "California National Historic Trail"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -76.34319082,
          34.8267961
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "CALO_Information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -76.34319082,
      "RecAreaID": 2613,
      "RecAreaPhone": "(252) 728 2250",
      "RecAreaDescription": "A boat ride three miles off-shore brings you to the barrier islands of Cape Lookout National Seashore.  Horse watching, shelling, fishing, birding, camping, lighthouse climbing, and touring historic villages--there's something for everyone at Cape Lookout.  Be sure to bring all the food, water, and supplies you need (and carry your trash out of the park) when visiting these remote beaches.",
      "RecAreaMapURL": "http://www.nps.gov/calo/planyourvisit/maps.htm",
      "RecAreaLatitude": 34.8267961,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Only one section of Cape Lookout National Seashore is reachable by car -- the Visitor Center located on the eastern end of Harkers Island, approximately 20 mi (30 km) east of Beaufort, NC and 30 mi (50 km) south of the Cedar Island terminus of the North Carolina State Ferry route from Ocracoke Island to Cedar Island.\n\nBarrier Island Destinations\n\nThe islands within the seashore are reached only by boat, either your personal boat or one of the privately operated ferries.\n\nPassenger ferries leave from the communities of Harkers Island, Beaufort, Morehead City and Ocracoke, NC. The ferries from Davis and Atlantic, NC can transport passengers and 4-wheel drive vehicles. More ferry contact information can be found at http://www.nps.gov/calo/planyourvisit/ferry.htm.\n\nFor more detailed directions, please visit http://www.nps.gov/calo/planyourvisit/directions.htm.",
      "Keywords": "",
      "RecAreaName": "Cape Lookout National Seashore"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -76.0083312988,
          36.9280548096
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "laura_carathanasis@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -76.0083312988,
      "RecAreaID": 2614,
      "RecAreaPhone": "(757) 898 2410",
      "RecAreaDescription": "English colonists first landed here in April 1607, erected a wooden cross and gave thanks for a successful crossing to a new land. In 1781, Americans could watch from these same sand dunes the largest naval battle of the Revolutionary War. Our French Allies defeated a British fleet just off this shore to set the stage for General George Washington's victory at Yorktown.",
      "RecAreaMapURL": "",
      "RecAreaLatitude": 36.9280548096,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Yorktown Battlefield Visitor Center, 1000 Colonial Parkway, Yorktown, Virginia 23690.\nHistoric Jamestowne Visitor Center, 1368 Colonial Parkway, Jamestown, Virginia 23081",
      "Keywords": "",
      "RecAreaName": "Cape Henry Memorial Part of Colonial National Historical Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -80.75419576,
          28.78637529
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "cana_superintendent@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -80.75419576,
      "RecAreaID": 2615,
      "RecAreaPhone": "",
      "RecAreaDescription": "Since ancient times, this barrier island has provided sanctuary to both people and wildlife. Many threatened and endangered species find refuge here, including sea turtles who nest on its shores. Like first natives and early settlers, you too can find tranquility. Stroll down a wooded trail. Reflect on a pristine undeveloped shoreline - the way things used to be.",
      "RecAreaMapURL": "http://www.nps.gov/cana/planyourvisit/maps.htm",
      "RecAreaLatitude": 28.78637529,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Canaveral National Seashore is located midway along Florida's east coast between Daytona Beach & Melbourne, and is accessible via US 1, I-95 and FL 528 (Beachline Expressway).  Take I-95 exit 249 east to reach the northern end of the park (Apollo Beach) & I-95 exit 220 east to reach the southern end of the park (Playalinda Beach).  For detailed directions & GEO coordinates, please see our park web page at the following URL:\nhttp://www.nps.gov/cana/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Canaveral National Seashore"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -109.8801624,
          38.24555783
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "canyinfo@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -109.8801624,
      "RecAreaID": 2616,
      "RecAreaPhone": "",
      "RecAreaDescription": "Canyonlands invites you to explore a wilderness of countless canyons and fantastically formed buttes carved by the Colorado River and its tributaries. Rivers divide the park into four districts: Island in the Sky, The Needles, The Maze, and the rivers themselves. These areas share a primitive desert atmosphere, but each offers different opportunities for sightseeing and adventure.",
      "RecAreaMapURL": "http://www.nps.gov/cany/planyourvisit/maps.htm",
      "RecAreaLatitude": 38.24555783,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Car\nThere are two paved entrances into Canyonlands: Highway 313 leads to the Island in the Sky, while Highway 211 leads to the Needles. Roads to the Maze are a mixture of graded dirt and 4WD and may become impassable when wet.\n\nPlane\nCommercial airlines serve Grand Junction, CO and Salt Lake City, UT. By car, these cities are at least 2 and 4 hours (respectively) away from the closest park entrance (Island in the Sky). Commercial air service is also available between Denver and Moab.\n\nBus\nGreyhound travels along Interstate 70, making stops at Grand Junction, CO and Green River, UT. Commercial vans/shuttles operate between Moab and Salt Lake City as well as Grand Junction.\n\nTrain\nAmtrak stops at Grand Junction, CO and Green River, UT. Commercial van services operate between Grand Junction and Moab.\n\nPublic Transportation\nThere is no public transportation to Canyonlands.",
      "Keywords": "",
      "RecAreaName": "Canyonlands National Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -111.247048378,
          38.2821653131
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "CARE_Interpretation@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -111.247048378,
      "RecAreaID": 2617,
      "RecAreaPhone": "(435) 425 3791",
      "RecAreaDescription": "Located in south-central Utah in the heart of red rock country, Capitol Reef National Park is a hidden treasure filled with cliffs, canyons, domes and bridges in the Waterpocket Fold, a geologic monocline (a wrinkle on the earth) extending almost 100 miles.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 38.2821653131,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Directions to Capitol Reef National Park</p>\n<p>Traveling westbound on Interstate 70: Take Utah State Highway 24 west towards Hanksville (exit 149). Stay on Highway 24 for 95 miles to reach the park Visitor Center.</p>\n<p>Traveling on Interstate 15: Take US Highway 50 east at Scipio (exit 188) towards Salina for 30 miles. At the junction with Utah State Highway 89/259, turn right (south) and travel 8 miles. Turn left (east) onto Utah State Highway 24 towards Sigurd. Continue on Highway 24 for 82 miles to reach the park Visitor Center.<br />\n </p>",
      "Keywords": "",
      "RecAreaName": "Capitol Reef National Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -93.00131977,
          31.65408447
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "barbara_justice@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -93.00131977,
      "RecAreaID": 2618,
      "RecAreaPhone": "(318) 356 8441",
      "RecAreaDescription": "The Cane River region is home to a unique culture; the Creoles. The nearly three hundred year relationship between the Cane River Creoles and their homeland was shaped by the river. This relationship was tested by flood, drought, war, and numerous other obstacles. Their resilience and resourcefulness has allowed the Creole culture to endure and thrive.",
      "RecAreaMapURL": "http://www.nps.gov/cari/planyourvisit/maps.htm",
      "RecAreaLatitude": 31.65408447,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "To reach Oakland Plantation, take I-49 to Exit 127, Flora/Cypress. Head east on LA Highway 120 toward Cypress. Cross over LA Highway 1 onto LA Highway 494. The parking lot and entrance pavilion for Oakland are 4.5 miles east of Highway 1 on the left.\nTo reach the grounds of Magnolia Plantation, take I-49 to Exit 119, Derry. Head east on LA Highway 119. Cross over LA Highway 1 and proceed for two miles. The grounds of Magnolia Plantation are on the right.\nThe main house of Magnolia is privately owned by descendents of the original family. Tours of the home may be available: contact the Natchitoches Parish Tourist Commission at (318) 352-6398 for more information.",
      "Keywords": "",
      "RecAreaName": "Cane River Creole National Historical Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -82.45106258,
          35.26815509
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "carl_administration@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -82.45106258,
      "RecAreaID": 2619,
      "RecAreaPhone": "",
      "RecAreaDescription": "Carl Sandburg provided a popular voice for the American people of the twentieth century and still speaks to us through his words, songs and the beauty and serenity of Carl Sandburg Home National Historic Site.\n\nExplore Sandburg's legacy and Experience Your America!",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 35.26815509,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "The park is located three miles south of Hendersonville, NC on Little River Road off of the Greenville Highway/Rt. 225 in Flat Rock, NC. Visitors using GPS or mapping software should use 1800 Little River Road and look for the signs directing you to the visitor parking lot on Little River Road.",
      "Keywords": "",
      "RecAreaName": "Carl Sandburg Home National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -81.31217173,
          29.89785701
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "casa_ranger_activities@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -81.31217173,
      "RecAreaID": 2620,
      "RecAreaPhone": "(904) 829 6506",
      "RecAreaDescription": "A monument not only of stone and mortar but of human determination and endurance, the Castillo de San Marcos symbolizes the clash between cultures which ultimately resulted in our uniquely unified nation.  Still resonant with the struggles of an earlier time, these original walls provide tangible evidence of America's grim but remarkable history.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 29.89785701,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>The Castillo de San Marcos National Monument is located in downtown St. Augustine, Florida. St. Augustine is located on Florida's Northeastern Atlantic coast about midway between Jacksonville and Daytona Beach.</p>\n<p>Nearby Jacksonville and Daytona are served by international airports with easy access to I-95. Rental cars are available at the airports and also in St. Augustine.</p>\n<p>From I-95: Take the exit for St. Augustine Historic Sites and Downtown (Route 16, Exit 318). Follow Rt. 16 to US 1. Turn right on US 1 for two miles to Castillo Drive. Turn left on Castillo to the traffic light. Turn right at the light. The Castillo and parking are ahead on the left.</p>\n<p>From US A1A: The Castillo is located on A1A in downtown St. Augustine.</p>\n<p> </p>",
      "Keywords": "",
      "RecAreaName": "Castillo de San Marcos National Monument"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -77.46417665,
          39.65068457
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "cato_superintendent@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -77.46417665,
      "RecAreaID": 2621,
      "RecAreaPhone": "",
      "RecAreaDescription": "President Franklin D. Roosevelt created programs to give people a chance to rebuild their lives from the Great Depression. The Works Progress Administration and the Civilian Conservation Corps gave this land a second opportunity and through re-growth, a new role as a recreation area.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 39.65068457,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/cato/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Catoctin Mountain Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -104.5529688,
          32.14089463
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "cave_park_information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -104.5529688,
      "RecAreaID": 2622,
      "RecAreaPhone": "(575) 785 2232",
      "RecAreaDescription": "High ancient sea ledges, deep rocky canyons, flowering cactus and desert wildlife - treasures above the ground in the Chihuahuan Desert. Hidden beneath the surface are more than 119 caves - formed when sulfuric acid dissolved limestone leaving behind caverns of all sizes.\n\nLooking for park and cave hours?",
      "RecAreaMapURL": "http://www.nps.gov/cave/planyourvisit/maps.htm",
      "RecAreaLatitude": 32.14089463,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Carlsbad Caverns National Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -103.9710427,
          36.78171096
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "CAVO_interp@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -103.9710427,
      "RecAreaID": 2623,
      "RecAreaPhone": "",
      "RecAreaDescription": "Come view a dramatic landscape—a unique place of mountains, plains, and sky. Born of fire and forces continually reshaping the earth's surface, Capulin Volcano provides access to nature's most awe-inspiring work.",
      "RecAreaMapURL": "http://www.nps.gov/cavo/planyourvisit/maps.htm",
      "RecAreaLatitude": 36.78171096,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Car<br />\nInterstate 25 is the major north/south route through the state. The monument is located 33 miles east of Interstate 25 at Raton, NM, via US Highway 64/87. The park entrance is on New Mexico Highway 325, 3 miles north of the town of Capulin which is at the junction of NM Hwy 325 and US Hwy 64/87.</p>\n<p>From the east, the monument is 58 miles west of Clayton, NM, also via US Hwy64/87.</p>\n<p>Plane<br />\nMajor airlines operate in Albuquerque, Colorado Springs, Denver, and Amarillo. Albuquerque and Denver are approximately 270 miles from the monument. Colorado Springs and Amarillo are about 190 miles.</p>\n<p><br />\nPublic Transportation<br />\nThere is no commercial transportation available to the park.</p>\n<p> </p>",
      "Keywords": "",
      "RecAreaName": "Capulin Volcano National Monument"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -112.845268,
          37.63545562
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -112.845268,
      "RecAreaID": 2624,
      "RecAreaPhone": "",
      "RecAreaDescription": "Discover one of America's most special parks! Crowning the grand staircase, Cedar Breaks sits at over 10,000 feet and looks down into a half-mile deep geologic amphitheater. Come wander among timeless bristlecone pines, stand in lush meadows of wildflower, ponder crystal-clear night skies and experience the richness of our subalpine forest.",
      "RecAreaMapURL": "http://www.nps.gov/cebr/planyourvisit/maps.htm",
      "RecAreaLatitude": 37.63545562,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Visitors traveling south on I-15, exit at Parowan, then take Utah Highway 143 east, to Cedar Breaks National Monument. Visitors traveling north on I-15, exit at Cedar City, then take Utah Highway 14 east for 18 miles, then Utah Highway 148 north for 4 miles, until you reach Cedar Breaks National Monument. Visitors traveling north or south on U.S. Highway 89, can take either Utah Highway 143 from Panguitch to Cedar Breaks National Monument, or Utah Highway 14 west, to Utah Highway 148 north, to Cedar Breaks National Monument. <br />\n </p>",
      "Keywords": "",
      "RecAreaName": "Cedar Breaks National Monument"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -106.4544011,
          31.76729634
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "washington_watley@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -106.4544011,
      "RecAreaID": 2625,
      "RecAreaPhone": "",
      "RecAreaDescription": "Chamizal is more than just an urban park to recreate or enjoy a quiet afternoon. These grounds are a reminder of the harmonious settlement of a 100-year border dispute between the United States and Mexico. We celebrate the cultures of the borderlands to promote the same mutual respect that helped to diplomatically resolve an international disagreement.",
      "RecAreaMapURL": "http://www.nps.gov/cham/planyourvisit/maps.htm",
      "RecAreaLatitude": 31.76729634,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Visitors traveling east or west on I-10, exit 22B Hwy 54 and travel south on Hwy 54. Following the brown Chamizal National Memorial directional signs, turn right onto Paisano Drive. Turn left at light onto San Marcial Street. The memorial entrance is on the left.\n\nAfter driving into the park, follow the one-way paved road around the outdoor stage area to the large paved parking area located in front of the administrative building. The Memorial's main parking area offers lighted and secured parking for 162 vehicles, with an additional 5 spaces for handicapped parking. The area behind the outdoor stage is not open for public parking.",
      "Keywords": "",
      "RecAreaName": "Chamizal National Memorial"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -84.28953177,
          33.99698333
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "chat_superintendent@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -84.28953177,
      "RecAreaID": 2626,
      "RecAreaPhone": "(678) 538 1200",
      "RecAreaDescription": "Today the river valley attracts us for so many reasons. Take a solitary walk to enjoy nature's display, raft leisurely through the rocky shoals with friends, fish the misty waters as the sun comes up, or have a picnic on a Sunday afternoon. Get Outdoors and experience your Chattahoochee River National Recreation Area as you have never done before.",
      "RecAreaMapURL": "http://www.nps.gov/chat/planyourvisit/maps.htm",
      "RecAreaLatitude": 33.99698333,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Start your visit to the recreation area at the Island Ford Visitor Contact Station. Here you will be able to pick up maps, as well as the latest information on the park.</p>\n<p>Below is a map link and GPS coordinates to obtain driving directions to the Island Ford unit entrance. Click on the link and enter your current location to obtain driving directions to the park entrance. If you have a GPS unit in your vehicle, enter the GPS coordinates into your unit for driving directions to the park entrance. Once you arrive at the entrance follow the entrance road for approximately one mile to the Island Ford Visitor Contact Station.</p>\n<P>\n<a id=\"CPNEWWIN:NewWindow^top=,left=,width=,height=,toolbar=1,location=1,directories=0,status=1,menubar=1,scrollbars=1,resizable=1@http://goo.gl/maps/Iot9Z|\" href=\"http://goo.gl/maps/Iot9Z\"><strong>MAP</strong></a>\n<BR>\nGPS Coordinates: 33° 59' 40.64\" N 84° 20' 2.16</P>\n<P><a href=\"/chat/planyourvisit/unitdirections.htm\">Driving Directions to All Park Units</P>",
      "Keywords": "",
      "RecAreaName": "Chattahoochee River National Recreation Area"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -85.28749537,
          34.94317623
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "CHCH_superintendent@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -85.28749537,
      "RecAreaID": 2627,
      "RecAreaPhone": "",
      "RecAreaDescription": "In 1863, Union and Confederate forces fought for control of Chattanooga, known as the \"Gateway to the Deep South.\" The Confederates were victorious at nearby Chickamauga in September. However, renewed fighting in Chattanooga that November provided Union troops victory and control of the city. After the fighting, a Confederate soldier ominously wrote, \"This...is the death-knell of the Confederacy.\"",
      "RecAreaMapURL": "http://www.nps.gov/chch/planyourvisit/maps.htm",
      "RecAreaLatitude": 34.94317623,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Chickamauga & Chattanooga National Military Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -107.9560076,
          36.03963414
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "ramona_begay@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -107.9560076,
      "RecAreaID": 2628,
      "RecAreaPhone": "(505) 786 7014",
      "RecAreaDescription": "Today the massive buildings of the ancestral Pueblo peoples still testify to the organizational and engineering abilities not seen anywhere else in the American Southwest. For a deeper contact with the canyon that was central to thousands of people between 850 and 1250 A.D., come and explore Chaco through guided tours, hiking & biking trails, evening campfire talks, and night sky programs.",
      "RecAreaMapURL": "http://www.nps.gov/chcu/planyourvisit/maps.htm",
      "RecAreaLatitude": 36.03963414,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Chaco Culture National Historical Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -97.00715669,
          34.46050507
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "chic_web_coordinator@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -97.00715669,
      "RecAreaID": 2629,
      "RecAreaPhone": "(580) 622 7234",
      "RecAreaDescription": "Springs, streams, lakes- whatever its form, water is the attraction at Chickasaw National Recreation Area. Little Niagara and Rock Creek beckon waders and swimmers. Relax in the coolness of shaded streams or take a dip in a swimming hole. Veterans Lake calls anglers to test their skills. Lake of the Arbuckles provides excellent motorboating, skiing, fishing and swimming.",
      "RecAreaMapURL": "http://www.nps.gov/chic/planyourvisit/maps.htm",
      "RecAreaLatitude": 34.46050507,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Chickasaw National Recreation Area"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -109.341607,
          32.01214618
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "suzanne_moody@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -109.341607,
      "RecAreaID": 2630,
      "RecAreaPhone": "(520) 364 3468",
      "RecAreaDescription": "A \"Wonderland of Rocks\" is waiting for you to explore at Chiricahua National Monument. The 8-mile paved scenic drive and 17-miles of day-use hiking trails provide opportunities to discover the beauty, natural sounds, and inhabitants of this 11,985 acre site. Visit the Faraway Ranch Historic District to discover more about the people who have called this area home.",
      "RecAreaMapURL": "http://www.nps.gov/chir/planyourvisit/maps.htm",
      "RecAreaLatitude": 32.01214618,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Chiricahua National Monument"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -119.9112735,
          33.98680093
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "chis_information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -119.9112735,
      "RecAreaID": 2631,
      "RecAreaPhone": "(805) 658 5730",
      "RecAreaDescription": "Channel Islands National Park encompasses five remarkable islands and their ocean environment, preserving and protecting a wealth of natural and cultural resources. Isolation over thousands of years has created unique animals, plants, and archeological resources found nowhere else on Earth and helped preserve a place where visitors can experience coastal southern California as it once was.",
      "RecAreaMapURL": "http://www.nps.gov/chis/planyourvisit/maps.htm",
      "RecAreaLatitude": 33.98680093,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Directions\nhttp://www.nps.gov/chis/planyourvisit/directions.htm\nWhile the mainland visitor centers in Ventura and Santa Barbara are readily accessible by car or public transportation, the islands are only accessible by park concessionaire boats and planes or private boat. Advanced planning is highly recommended.\nThe Robert J. Lagomarsino Visitor Center at Channel Islands National Park\n1901 Spinnaker Drive\nVentura, CA 93001\n(805) 658-5730\nThe visitor center is located in the Ventura Harbor in Ventura, California. Ventura is located 70 miles north of Los Angeles and 30 miles south of Santa Barbara. Plane, train, and bus service are all available to Los Angeles and Santa Barbara. Only train, bus, and private car transportation are available from Los Angeles and Santa Barbara to Ventura.\nFees\nhttp://www.nps.gov/chis/planyourvisit/feesandreservations.htm\nThere are no entrance fees to visit the park.",
      "Keywords": "",
      "RecAreaName": "Channel Islands National Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -77.89763546,
          39.3909816
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "choh_information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -77.89763546,
      "RecAreaID": 2632,
      "RecAreaPhone": "",
      "RecAreaDescription": "Preserving America's early transportation history, the C&O Canal began as a dream of passage to Western wealth. Operating for nearly 100 years the canal was a lifeline for communities along the Potomac River as coal, lumber and agricultural products floated down the waterway to market. Today it endures as a pathway for discovering historical, natural and recreational treasures!",
      "RecAreaMapURL": "http://www.nps.gov/choh/planyourvisit/maps.htm",
      "RecAreaLatitude": 39.3909816,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/choh/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Chesapeake & Ohio Canal National Historical Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -79.82487582,
          32.84577392
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "fosu_information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -79.82487582,
      "RecAreaID": 2633,
      "RecAreaPhone": "",
      "RecAreaDescription": "Charles Pinckney was a principal author and a signer of the United States Constitution. This remnant of his coastal plantation is preserved to tell the story of a \"forgotten founder,\" his life of public service, the lives of enslaved African Americans on South Carolina Lowcountry plantations and their influences on Charles Pinckney.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 32.84577392,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Please note this is our physical address only. No mail is delivered at this address. For directions to the park, please see our directions page:\n\nhttp://www.nps.gov/chpi/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Charles Pinckney National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -64.72906227,
          17.73771903
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "CHRI_Web_Requests@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -64.72906227,
      "RecAreaID": 2634,
      "RecAreaPhone": "",
      "RecAreaDescription": "No place in the Caribbean still demonstrates the architectural, economic, and political influence of Europe like Christiansted National Historic Site. Come wander through 18th century buildings in one the Caribbean's few urban parks. It is a unique experience that you will never forget.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 17.73771903,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "www.nps.gov/chri",
      "Keywords": "",
      "RecAreaName": "Christiansted National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2013-04-10",
      "RecAreaEmail": "chimrock@scottsbluff.net",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 2635,
      "RecAreaPhone": "Visitor Information (308) 586-2581 <br>",
      "RecAreaDescription": "Chimney Rock has become one of the most famous landmarks in the American West. This unique formation--the most noted on the Oregon Trail--has come to symbolize the greatest voluntary migration in the history of mankind. The site is adminstered by the Nebraska State Historical Society which operates the Ethel and Christopher J. Abbot Visitor Center at the Chimney Rock National Historic Site. The Visitor Center features museum exhibits explaining the westward migration of the nineteenth century and the significant role Chimney Rock had in the memories of those who traveled the trails west. <P>",
      "RecAreaMapURL": "http://www.nps.gov/chro/pphtml/maps.html",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Car - 1.5 miles south of Highway 92 on Chimney Rock Road. <P> <br>",
      "Keywords": "",
      "RecAreaName": "Chimney Rock National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -113.7124097,
          42.0699024
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "wallace_keck@partner.nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -113.7124097,
      "RecAreaID": 2637,
      "RecAreaPhone": "",
      "RecAreaDescription": "Emigrants of the California Trail describe the rocks here in vivid detail as \"a city of tall spires,\" \"steeple rocks,\" and \"the silent city.\" Today, this backcountry byway attracts rock climbers, campers, hikers, hunters, and those with the spirit of adventure. There's inspirational scenery, exceptional opportunities for geologic study, and remnants of the Old West awaiting your discovery.",
      "RecAreaMapURL": "http://www.nps.gov/ciro/planyourvisit/maps.htm",
      "RecAreaLatitude": 42.0699024,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p><strong>Getting There</strong></p>\n<p><strong>Car</strong><br />\nFrom Boise, take I-84 East to exit 216 (Declo); go south on Idaho 77 to Conner Creek, then southwest on the Elba-Almo road to the visitor center in Almo and the park entrance. From Pocatello, take I-86 West to I-84 West to exit 216 and proceed as above. From Ogden and the Wasatch Front, take I-84 west to exit 245 (Sublette) and go west to Malta. From Malta take Idaho 77 to Conner Creek, then southwest on the Elba-Almo road to the visitor center in Almo and the park entrance. There is a seasonal summer route from Burley (Idaho 27) to Oakley, then south along the City of Rocks Back Country Byway.</p>\n<p><strong>Plane</strong><br />\nThe nearest air service is Burley (charter) 45 miles north, Twin Falls (85 miles NW), Salt Lake City (170 miles SE), Boise (215 miles NW), Pocatello (100 miles NE).</p>\n<p><strong>Public Transportation<br />\n</strong>There is no public transportation to the reserve.<br />\n </p>",
      "Keywords": "",
      "RecAreaName": "City Of Rocks National Reserve"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -108.6920709,
          39.05045016
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "colm_info@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -108.6920709,
      "RecAreaID": 2641,
      "RecAreaPhone": "",
      "RecAreaDescription": "Colorado National Monument preserves one of the grand landscapes of the American West. But this treasure is much more than a monument. Towering monoliths exist within a vast plateau and canyon panorama. You can experience sheer-walled, red rock canyons along the twists and turns of Rim Rock Drive, where you may spy bighorn sheep and soaring eagles.",
      "RecAreaMapURL": "http://www.nps.gov/colm/planyourvisit/maps.htm",
      "RecAreaLatitude": 39.05045016,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>By Plane from the Grand Junction Regional Airport: American Airlines, Frontier Airlines, Great Lakes Airlines, United Express/Skywest, Delta Connection/Skywest, US Airways and Allegiant Airlines currently serve the Grand Junction area.</p>\n<p>For travelers going Westbound through the Grand Valley: Take Highway I-70 to Grand Junction, and take Exit 31 (Horizon Drive). Follow signs through Grand Junction to the east entrance.</p>\n<p>For travelers going Eastbound through the Grand Valley: Take Highway I-70 to Exit 19 (Fruita) and go south on Highway 340 to the west entrance, which is approximately three miles from Fruita. The Visitor Center and Campground are four miles up from the west entrance.</p>\n<p>Public Transportation: Tour bus and taxi service is available. Contact the Grand Junction Visitor and Convention Bureau for more information.<br />\nAmtrak provides daily service to Grand Junction.</p>\n<p> </p>",
      "Keywords": "",
      "RecAreaName": "Colorado National Monument"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -76.61998123,
          37.22824435
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "roger_green@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -76.61998123,
      "RecAreaID": 2642,
      "RecAreaPhone": "(757) 898 3400",
      "RecAreaDescription": "On May 13, 1607, Jamestown was established as the first permanent English settlement in North America. Three cultures came together – European, Virginia Indian and African–to create a new society that would eventually seek independence from Great Britain. On October 19, 1781, American and French troops defeated the British at Yorktown in the last major battle of the American Revolutionary War.",
      "RecAreaMapURL": "http://www.nps.gov/colo/planyourvisit/maps.htm",
      "RecAreaLatitude": 37.22824435,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Colonial National Historical Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -80.74867805,
          33.79187523
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "cong_information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -80.74867805,
      "RecAreaID": 2644,
      "RecAreaPhone": "",
      "RecAreaDescription": "Astonishing biodiversity exists in Congaree National Park, the largest intact expanse of old growth bottomland hardwood forest remaining in the southeastern United States.   Waters from the Congaree and Wateree Rivers sweep through the floodplain, carrying nutrients and sediments that nourish and rejuvenate this ecosystem and support the growth of national and state champion trees.",
      "RecAreaMapURL": "http://www.nps.gov/cong/planyourvisit/maps.htm",
      "RecAreaLatitude": 33.79187523,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Congaree National Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -81.80935433,
          35.13160654
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "COWP_Information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -81.80935433,
      "RecAreaID": 2645,
      "RecAreaPhone": "",
      "RecAreaDescription": "\"...our success was complete...\"\n  -- Daniel Morgan to Nathanael Greene, January 19, 1781\n\nA pasturing area at the time of the battle, this Revolutionary War site commemorates the place where Daniel Morgan and his army turned the flanks of Banastre Tarleton's British army. This classic military tactic, known as a double envelopment, was one of only a few in history.",
      "RecAreaMapURL": "http://www.nps.gov/cowp/planyourvisit/maps.htm",
      "RecAreaLatitude": 35.13160654,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>· From I-85 northbound, take exit 83. Turn left, on Hwy 110. Drive about 8 miles. At the intersection for Hwys 110, 221, and 11, turn right. The park is about a half mile on the right. <br />\n· From I-85 southbound, take exit 92 at Gaffney, west toward Chesnee on Hwy 11. The park is about 10 miles on the left. <br />\n· From I-26 eastbound, take exit 5, east toward Chesnee on Hwy 11. The park is about 20 miles on the right. <br />\n· From I-26 westbound, take I-85 North, take exit 83. Turn left, on Hwy 110. Drive about 8 miles. At the intersection for Hwys 110, 221, and 11, turn right. The park is about a half mile on the right. <br />\n<br />\nGPS Directional Devices:<br />\nTo reach the physical address of the Visitor Center please use the following address:<br />\n4001 Chesnee Highway<br />\nGaffney, SC 29341 <br />\nOR</p>\n<p>Lat / Long: 35.13418 / -81.81514</p>",
      "Keywords": "",
      "RecAreaName": "Cowpens National Battlefield"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "jcarter@caneriverheritage.org",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 2646,
      "RecAreaPhone": "(318) 356 5555",
      "RecAreaDescription": "More than 300-years of history are etched into the rural landscape of colonial forts, plantations, churches, cemeteries, and homes that comprise Cane River National Heritage Area. Historically, this region lay at the intersection of the French and Spanish Realms in the New World, with the town of Natchitoches originating as an important 18th century trade center.",
      "RecAreaMapURL": "http://www.nps.gov/crha/planyourvisit/maps.htm",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>The core of the national heritage area is south of Natchitoches, Louisiana (the oldest permanent settlement in the Louisiana Purchase Territory) between Interstate 49 and the Red River, and extends along both sides of Cane River Lake for approximately 35 miles.</p>",
      "Keywords": "",
      "RecAreaName": "Cane River National Heritage Area"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -122.1338414,
          42.94065854
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "craterlake@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -122.1338414,
      "RecAreaID": 2647,
      "RecAreaPhone": "(541) 594 3000",
      "RecAreaDescription": "Crater Lake inspires awe. Native Americans witnessed it form 7,700 years ago, when a violent eruption triggered the collapse of a towering volcano. Scientists marvel at its purity: fed by rain and snow, it's the deepest lake in the USA and perhaps the most pristine on earth. Artists, photographers, and sightseers stand in wonder at its blue water and stunning setting. Come visit, and be amazed!",
      "RecAreaMapURL": "http://www.nps.gov/crla/planyourvisit/maps.htm",
      "RecAreaLatitude": 42.94065854,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Crater Lake National Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -113.4791609,
          43.20345611
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "crmo_information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -113.4791609,
      "RecAreaID": 2648,
      "RecAreaPhone": "(208) 527 1300",
      "RecAreaDescription": "Craters of the Moon is a vast ocean of lava flows with scattered islands of cinder cones and sagebrush. We invite you to explore this \"weird and scenic landscape\" where yesterday's volcanic events are likely to continue tomorrow...",
      "RecAreaMapURL": "http://www.nps.gov/crmo/planyourvisit/maps.htm",
      "RecAreaLatitude": 43.20345611,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p><strong>Getting There</strong></p>\n<p><strong>Plane<br />\n</strong>Nearest airports are located in Hailey, Idaho (60 miles / 97 km), Idaho Falls, Idaho (84 miles / 135 km), and Twin Falls, Idaho (90 miles / 145 km).</p>\n<p><strong>Car<br />\n</strong>18 miles (28 km) west of Arco, Idaho on Highway 20/26/93, 24 miles (39 km) east of Carey, Idaho on Highway 20/26/93, 84 miles (135 km) from Idaho Falls, and 90 miles (145 km) from Twin Falls.<br />\n </p>",
      "Keywords": "",
      "RecAreaName": "Craters Of The Moon National Monument & Preserve"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -83.6114083,
          36.62503076
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "CUGA_Superintendent@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -83.6114083,
      "RecAreaID": 2649,
      "RecAreaPhone": "",
      "RecAreaDescription": "At Cumberland Gap, the first great gateway to the west, follow the buffalo, the Native American, the longhunter, the pioneer... all traveled this route through the mountains into the wilderness of Kentucky. Modern day explorers and travelers stand in awe at this great gateway and the many miles of trails and scenic features found in the park.",
      "RecAreaMapURL": "http://www.nps.gov/cuga/planyourvisit/maps.htm",
      "RecAreaLatitude": 36.62503076,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Cumberland Gap National Historical Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -81.45253575,
          30.85857484
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "CUIS_INFO@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -81.45253575,
      "RecAreaID": 2650,
      "RecAreaPhone": "",
      "RecAreaDescription": "St Marys is the gateway to Cumberland Island, Georgia's largest and southernmost barrier island. Here pristine maritime forests, undeveloped beaches and wide marshes whisper the stories of both man and nature. Natives, missionaries, enslaved African Americans and Wealthy Industrialists all walked here.  Cumberland Island is also home to over 9,800 acres of Congressionally designated Wilderness.",
      "RecAreaMapURL": "http://www.nps.gov/cuis/planyourvisit/maps.htm",
      "RecAreaLatitude": 30.85857484,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Passenger ferry access only to Cumberland Island. Take Exit 3 off of Interstate 95 in the state of Georgia. The exit ends at a stop light. Turn left onto Highway 40 going East. Follow Highway 40 into historic downtown St. Marys.  Highway 40 (Osborne Street) will dead end at the waterfront.  Turn right on St. Marys Street. The visitor center will be on the left side of the street (113 West St. Marys Street) and parking is located one block further on the right side of the street behind 101 Wheeler Street.</p>",
      "Keywords": "",
      "RecAreaName": "Cumberland Island National Seashore"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -107.3303371,
          38.46584558
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "cure_info@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -107.3303371,
      "RecAreaID": 2651,
      "RecAreaPhone": "(970) 641 2337",
      "RecAreaDescription": "Curecanti National Recreation Area is a series of three reservoirs along the once wild Gunnison River. The reservoirs that make up Curecanti today are a destination for water-based recreation high in the Rocky Mountains. Best known for salmon and trout fishing, Curecanti also offers opportunities for hiking, boating, camping, and bird watching.",
      "RecAreaMapURL": "http://www.nps.gov/cure/planyourvisit/maps.htm",
      "RecAreaLatitude": 38.46584558,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Curecanti National Recreation Area is located approximately 200 miles southwest of Denver.</p>\n<p>U.S. Highway 50 runs the length of Curecanti between Montrose and Gunnison, Colorado. The recreation area is also accessed from CO Hwy 149 and CO Hwy 92.</p>\n<p>PUBLIC TRANSPORTATION <br />\nBy bus: To Montrose or Grand Junction <br />\nBy train: To Grand Junction</p>\n<p>PLANE <br />\nCommercial airline service is available to Gunnison, Montrose and Grand Junction.<br />\n </p>",
      "Keywords": "",
      "RecAreaName": "Curecanti National Recreation Area"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -81.57116722,
          41.26093905
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "cuva_info@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -81.57116722,
      "RecAreaID": 2652,
      "RecAreaPhone": "",
      "RecAreaDescription": "Though a short distance from the urban areas of Cleveland and Akron, Cuyahoga Valley National Park seems worlds away. The park is a refuge for native plants and wildlife, and provides routes of discovery for visitors. The winding Cuyahoga River gives way to deep forests, rolling hills, and open farmlands. Walk or ride the Towpath Trail to follow the historic route of the Ohio & Erie Canal.",
      "RecAreaMapURL": "http://www.nps.gov/cuva/planyourvisit/maps.htm",
      "RecAreaLatitude": 41.26093905,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>The park is located in northeastern Ohio between the cities of Cleveland and Akron.</p>\n<p>By Plane:<br />\nCleveland Hopkins International Airport (15 miles) and Akron-Canton Regional Airport (20 miles) offer many daily flights to the area.</p>\n<p>By Car:<br />\nCuyahoga Valley National Park can be accessed by many different highways, including I-77, I-271, I-80 (Ohio Turnpike), and State Route 8. Park signs are visible from each of these freeways as you get close to the valley. For more details, call (330) 657-2752.</p>\n<p>By Bus:<br />\nBus stations are located in downtown Cleveland and Akron.<br />\n </p>",
      "Keywords": "",
      "RecAreaName": "Cuyahoga Valley National Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -84.10442045,
          39.78944467
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "amiee_ginnever@nps.gov, robert_w_petersen@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -84.10442045,
      "RecAreaID": 2653,
      "RecAreaPhone": "(937) 225 7705",
      "RecAreaDescription": "Three exceptional men from Dayton, Ohio, Wilbur Wright, Orville Wright and Paul Laurence Dunbar, found their creative outlet here through accomplishments and failures, and finally success. However, these men offered the world something far greater, they offered the world hope, and the ability to take a dream and make it a reality.",
      "RecAreaMapURL": "http://www.nps.gov/daav/planyourvisit/maps.htm",
      "RecAreaLatitude": 39.78944467,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/daav/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Dayton Aviation Heritage National Historical Park"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2013-10-01",
      "RecAreaEmail": "DEWA_Interpretation@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 2655,
      "RecAreaPhone": "",
      "RecAreaDescription": "Middle Delaware National Scenic River is a 40-mile stretch of river entirely located within, and entirely administered by, Delaware Water Gap National Recreation Area.\n\nIn additon to the Middle Delaware, the Delaware River is part of four additional national park units:",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/anac/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Delaware National Scenic River"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -75.2365978807,
          40.6690786779
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -75.2365978807,
      "RecAreaID": 2656,
      "RecAreaPhone": "(610) 923 3548",
      "RecAreaDescription": "Come journey through five Pennsylvania counties bursting with heritage and brimming with outdoor adventure. Follow the D&L Trail, a historic pathway marked with stories about hearty lumberjacks, coal miners, lock tenders, and railroaders. Explore the history of the Corridor at the National Canal Museum or along quiet canal paths, challenging bike trails and the rippling waters of the river.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 40.6690786779,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Delaware & Lehigh National Heritage Corridor"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -151.0526568,
          63.29777484
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "denali_info@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -151.0526568,
      "RecAreaID": 2658,
      "RecAreaPhone": "(907) 683 2294",
      "RecAreaDescription": "Denali is six million acres of wild land, bisected by one ribbon of road. Travelers along it see the relatively low-elevation taiga forest give way to high alpine tundra and snowy mountains, culminating in North America's tallest peak, 20,310' Denali. Wild animals large and small roam un-fenced lands, living as they have for ages. Solitude, tranquility and wilderness await.",
      "RecAreaMapURL": "http://www.nps.gov/dena/planyourvisit/maps.htm",
      "RecAreaLatitude": 63.29777484,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "You can reach Denali from Anchorage or Fairbanks via Alaska State Highway 3. Visit http://www.nps.gov/dena/planyourvisit/directions.htm for more details.",
      "Keywords": "",
      "RecAreaName": "Denali National Park & Preserve"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -119.0873903,
          37.6152564
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "DEPO_Visitor_Information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -119.0873903,
      "RecAreaID": 2659,
      "RecAreaPhone": "",
      "RecAreaDescription": "Established in 1911 by presidential proclamation, Devils Postpile National Monument protects and preserves the Devils Postpile formation, the 101-foot high Rainbow Falls, and pristine mountain scenery.  The formation is a rare sight in the geologic world and ranks as one of the world's finest examples of columnar basalt. Its columns tower 60 feet high and display an unusual symmetry.",
      "RecAreaMapURL": "http://www.nps.gov/depo/planyourvisit/maps.htm",
      "RecAreaLatitude": 37.6152564,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "BY PLANE\n\nThe closest commercial airport is the Mammoth Lakes/Yosemite Airport (MMH), located on California Highway 395 just south of Mammoth Lakes. From the Mammoth Lakes/Yosemite Airport drive north on CA Highway 395 to the Mammoth Lakes/Highway 203 exit. Turn left at the stop sign onto State Route 203 into Mammoth Lakes.\n\nThe next closest airport is the Reno/Tahoe International Airport (RNO). From Reno, drive south on U.S. Highway 395 for approximately 3 hours (170 miles) to State Route 203.\n\nBY CAR\nFrom U.S. Highway 395, drive 10 miles west on S.R. 203 to Minaret Vista and then another 8 miles on a paved, steep mountain road. Please note that this road is single lane for approximately 3 miles. Most visitors must park at the Mammoth Mountain Ski Area and use the mandatory shuttle. The shuttle bus operates from mid-June through the Wednesday after Labor Day.",
      "Keywords": "",
      "RecAreaName": "Devils Postpile National Monument"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -82.64335416,
          27.52272613
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "daniel_stephens@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -82.64335416,
      "RecAreaID": 2660,
      "RecAreaPhone": "",
      "RecAreaDescription": "In May 1539, Conquistador Hernando de Soto's army of soldiers, hired mercenaries, craftsmen and clergy made landfall in Tampa Bay. They were met with fierce resistance of indigenous people protecting their homelands. De Soto's quest for glory and gold would be a four year, four thousand mile odyssey of intrigue, warfare, disease, and discovery that would form the history of the United States.",
      "RecAreaMapURL": "http://www.nps.gov/deso/planyourvisit/maps.htm",
      "RecAreaLatitude": 27.52272613,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "De Soto National Memorial"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -104.7156341,
          44.59064655
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "deto_interpretation@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -104.7156341,
      "RecAreaID": 2661,
      "RecAreaPhone": "",
      "RecAreaDescription": "An astounding geologic feature that protrudes out of the rolling prairie surrounding the Black Hills, this site is considered sacred to the Northern Plains Indians and other tribes. Hundreds of parallel cracks make it one of the finest traditional crack climbing areas in North America. Devils Tower entices us to explore and define our place in the natural and cultural world.",
      "RecAreaMapURL": "http://www.nps.gov/deto/planyourvisit/maps.htm",
      "RecAreaLatitude": 44.59064655,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Car\nVisitors traveling east on I-90 exit at Moorcroft, WY. Visitors traveling west on I-90 use any of three Sundance, WY exits. From Moorcroft or Sundance, take 14 north to 24, take 24 north to Devils Tower.\nA scenic alternative for visitors traveling west on I-90 – take exit 199, follow 111 north to 24, take 24 west through the town of Hulett to Devils Tower.",
      "Keywords": "",
      "RecAreaName": "Devils Tower National Monument"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -117.134395,
          36.48753731
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "deva_information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -117.134395,
      "RecAreaID": 2662,
      "RecAreaPhone": "(760) 786 3200",
      "RecAreaDescription": "In this below-sea-level basin, steady drought and record summer heat make Death Valley a land of extremes. Yet, each extreme has a striking contrast. Towering peaks are frosted with winter snow. Rare rainstorms bring vast fields of wildflowers. Lush oases harbor tiny fish and refuge for wildlife and humans. Despite its morbid name, a great diversity of life survives in Death Valley.",
      "RecAreaMapURL": "http://www.nps.gov/deva/planyourvisit/maps.htm",
      "RecAreaLatitude": 36.48753731,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/deva/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Death Valley National Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -74.94751173,
          41.12793491
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "DEWA_Interpretation@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -74.94751173,
      "RecAreaID": 2663,
      "RecAreaPhone": "",
      "RecAreaDescription": "Paddlers slip down the river between low forested mountains; anglers wade the trout streams; hikers scan the valley from the ridge or peer into the 1000-foot-deep Water Gap. The valley has known human hand and voice for 10,000 years. Floodplains nourished the Native farmer; waterfalls drew the Victorian vacationer. Today, a 70,000-acre park welcomes those who seek the outdoors close to home.",
      "RecAreaMapURL": "http://www.nps.gov/dewa/planyourvisit/maps.htm",
      "RecAreaLatitude": 41.12793491,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Headquarter PA: From I-84: Take US 209 S to Bushkill, turn E onto River Rd & continue 1 mile to HQ on left. From I-80: Take PA Exit 309 onto US 209 N & continue 9 miles to the first light in Bushkill PA. Turn E onto River Rd & continue 1 mile to HQ on left.\nMillbrook Village NJ: From I-80 eastbound: Cross the Delaware River and take the first exit ramp on right (no exit #). Turn sharp right at the end of the ramp. Continue 11 miles on Old Mine Rd to Millbrook.From I-80 westbound: Take NJ Exit 4C; follow Rt. 94 N 9 miles to the light in Blairstown at Rt. 521/Bridge Rd. Turn hard left toward the church steeple and at the stop sign turn right, then left, for Rt. 602. Continue 6 miles NW to Millbrook.\nDingmans Falls Visitor Center: From I-84: Take US 209 S to mile 13 and turn W onto Johnny B Rd just after the light at Rt. 739. Continue 1 mile to the visitor center.\nFrom I-80: Take Exit 309 onto US 209 N & continue 23 miles to mile marker 13. \nTurn W onto Johnny B Rd. Continue 1 mile to the visitor center.",
      "Keywords": "",
      "RecAreaName": "Delaware Water Gap National Recreation Area"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -108.9333714,
          40.50739742
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "dino_information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -108.9333714,
      "RecAreaID": 2664,
      "RecAreaPhone": "(435) 781 7700",
      "RecAreaDescription": "Dinosaurs once roamed here. Their fantastic remains are still visible embedded in the rocks. Today, the mountains, desert and untamed rivers flowing in deep canyons, support an array of life. Petroglyphs hint at earlier cultures. Later, homesteaders and outlaws found refuge here. Whether your passion is science, adventure, history or scenery, Dinosaur offers much to explore.",
      "RecAreaMapURL": "http://www.nps.gov/dino/planyourvisit/maps.htm",
      "RecAreaLatitude": 40.50739742,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Dinosaur National Monument covers over 210,000 acres in Colorado and Utah. Dinosaur Fossils are only viewable on the Utah side of the Monument. Begin your journey at the Quarry Visitor Center, seven miles north of Jensen, Utah. During the summer, shuttles take visitors to the Quarry Exhibit Hall, the primary place to see dinosaur fossils. On the Colorado side, the Canyon Visitor Center is the main entrance to the to the dramatic scenery of the Green and Yampa Rivers. From here you can access the Harpers Corner Scenic Drive. Echo Park, and the Yampa Bench Roads. There are no fossils in the Colorado side of the monument.\n\nInternet Mapping\nMany internet-based mapping services do not have correct locations for Dinosaur National Monument's visitor centers. The addresses below will help give better directions.\nQuarry Visitor Center\n11625 E 1500 S\nJensen, UT 84035\n\nCanyon Visitor Center\n4545 Highway 40\nDinosaur, CO 81610",
      "Keywords": "",
      "RecAreaName": "Dinosaur National Monument"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -82.87176297,
          24.64884965
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "DRTO_Information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -82.87176297,
      "RecAreaID": 2665,
      "RecAreaPhone": "",
      "RecAreaDescription": "Almost 70 miles (113 km) west of Key West lies the remote Dry Tortugas National Park. The 100-square mile park is mostly open water with seven small islands.  Accessible only by boat or seaplane, the park is known the world over as the home of magnificent Fort Jefferson, picturesque blue waters, superlative coral reefs and marine life,   and the vast assortment of bird life that frequent the area.",
      "RecAreaMapURL": "http://www.nps.gov/drto/planyourvisit/maps.htm",
      "RecAreaLatitude": 24.64884965,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Dry Tortugas National Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -122.6877213,
          48.21403036
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -122.6877213,
      "RecAreaID": 2666,
      "RecAreaPhone": "(360) 678 6084",
      "RecAreaDescription": "This stunning landscape at the gateway to Puget Sound, with its rich farmland and promising seaport, lured the earliest American pioneers north of the Columbia River to Ebey's Landing. Today Ebey's Landing National Historical Reserve preserves the historical, agricultural and cultural traditions of both native and Euro-American – while offering spectacular opportunities for recreation.",
      "RecAreaMapURL": "http://www.nps.gov/ebla/planyourvisit/maps.htm",
      "RecAreaLatitude": 48.21403036,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Ebey's Landing National Historical Reserve"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -74.23821139,
          40.78549896
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "karen_sloat-olsen@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -74.23821139,
      "RecAreaID": 2668,
      "RecAreaPhone": "(973) 736 0550",
      "RecAreaDescription": "Thomas Edison's home and laboratory are a step back in time, when machines were run by belts and pulleys and music was played on phonographs.  Where to the passerby, the buildings betray little evidence of the industries they once started.  Discover where America's greatest inventor changed our world forever.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 40.78549896,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/edis/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Thomas Edison National Historical Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -91.19687517,
          43.08095081
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "sheila_oberreuter@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -91.19687517,
      "RecAreaID": 2669,
      "RecAreaPhone": "",
      "RecAreaDescription": "The mounds preserved here are considered sacred by many Americans, especially the Monument's 20 culturally associated American Indian tribes. A visit offers opportunities to contemplate the meanings of the mounds and the people who built them. The 200 plus American Indian mounds are located in one of the most picturesque sections of the Upper Mississippi River Valley.",
      "RecAreaMapURL": "http://www.nps.gov/efmo/planyourvisit/maps.htm",
      "RecAreaLatitude": 43.08095081,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/efmo/planyourvisit/directions.htm\nEffigy Mounds National Monument is located 3 miles north of Marquette, Iowa at 151 Hwy 76, Harpers Ferry, Iowa 52146.",
      "Keywords": "",
      "RecAreaName": "Effigy Mounds National Monument"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -107.9950948,
          34.88422799
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "lisa_collins@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -107.9950948,
      "RecAreaID": 2672,
      "RecAreaPhone": "(505) 876 2783",
      "RecAreaDescription": "The richly diverse volcanic landscape of El Malpais offers solitude, recreation, and discovery. Explore cinder cones, lava tube caves, sandstone bluffs, and hiking trails. Wildlife abounds in the open grasslands and forests. While some may see a desolate environment, people have been adapting to and living in this extraordinary terrain for generations. Come discover the land of fire and ice!",
      "RecAreaMapURL": "http://www.nps.gov/elma/planyourvisit/maps.htm",
      "RecAreaLatitude": 34.88422799,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "El Malpais National Monument is located south of Grants, New Mexico, off of I-40. If traveling on I-40, the closest visitor center is the Northwest New Mexico Visitor Center at Exit 85 in Grants. From Exit 85, turn south towards the dead end, and take the last left turn. Drive in on Eury Boulevard to the visitor center; there is plenty of oversize parking for RVs, buses, and vehicles with trailers. The center is open daily from 8 am to 5 pm.",
      "Keywords": "",
      "RecAreaName": "El Malpais National Monument"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -108.3463984,
          35.03895916
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "richard_bacon@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -108.3463984,
      "RecAreaID": 2673,
      "RecAreaPhone": "(505) 783 4226",
      "RecAreaDescription": "Imagine the comfort and refreshment of finding water after days of dusty travel. A reliable waterhole hidden at the base of a sandstone bluff made El Morro (the headland) a popular campsite for hundreds of years. Here, Ancestral Puebloans, Spanish and American travelers carved over 2,000 signatures, dates, messages, and petroglyphs. We invite you to make El Morro a stopping point on your travels.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 35.03895916,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>From Albuquerque, NM, or from the east: take Interstate 40 west to Grants. At exit 81, go south on Highway 53 for 42 miles to El Morro National Monument.</p>\n<p>From Flagstaff, AZ, or from the west: take Interstate 40 east to Gallup. At exit 20, go south on Highway 602 for about 31 miles. Turn east (left) onto Highway 53. El Morro is 25 more miles. If you’d like to drive through Zuni from the west, take exit 339 from Interstate 40 in AZ, and go south on Highway 191 for 24 miles. Take Highway 61/53 into Zuni. El Morro is about 36 miles from Zuni.</p>\n<p>Caution: Commercial trucks frequent Highway 53. Please exercise caution when turning onto and off of the highway.<br />\n </p>",
      "Keywords": "",
      "RecAreaName": "El Morro National Monument"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "erie_canal@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 2675,
      "RecAreaPhone": "(518) 237 7000",
      "RecAreaDescription": "Explore the Erie Canal and discover America's most famous and influential man-made waterway. Nowhere else will you find the distinctive locks and low bridges of the New York State Canal System or discover towns and cities whose watery front doors still give way to lively Main Streets. \n\nMore than 500 miles of historic waterways and trails are here to explore.",
      "RecAreaMapURL": "http://www.nps.gov/erie/planyourvisit/maps.htm",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Erie Canalway covers 524 miles across the middle of New York State, from Albany to Buffalo, with multiple ways to travel--bicycle, car, boat, train, or bus-- and dozens of places to visit and stay.\n\nFor information on planning a visit to the Erie Canalway, please visit the official website:\nwww.eriecanalway.org",
      "Keywords": "",
      "RecAreaName": "Erie Canalway National Heritage Corridor"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -122.0271566,
          37.82604456
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "EUON_general_info@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -122.0271566,
      "RecAreaID": 2676,
      "RecAreaPhone": "(925) 838 0249",
      "RecAreaDescription": "America's only Nobel Prize winning playwright, Eugene O'Neill, chose to live in Northern California at the height of his writing career. Isolated from the world and within the walls of his home, O'Neill wrote his final and most memorable plays; The Iceman Cometh, Long Day's Journey Into Night, and A Moon for the Misbegotten.",
      "RecAreaMapURL": "http://www.nps.gov/euon/planyourvisit/maps.htm",
      "RecAreaLatitude": 37.82604456,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Reservations are required to visit the site. All visitors are shuttled to the site on National Park Service vehicles from the Town of Danville. Directions to the shuttle pick-up location are provided when reservations are made.<br />\n </p>\n<p>Airports: Accessible from Oakland International Airport, approximately. 45 minutes; San Francisco International Airport, approximately. 60 minutes; San Jose International Airport, approximately. 90 minutes (estimated times are without traffic).<br />\n<br />\n </p>\n<p>Take BART to Walnut Creek and transfer to the County Connection bus #121. The bus stops in several places in Danville. Appropriate bus stop will be indicated at the time of your reservation.</p>\n<p> </p>",
      "Keywords": "",
      "RecAreaName": "Eugene O'Neill National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -80.88200301,
          25.37294225
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "EVER_Information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -80.88200301,
      "RecAreaID": 2677,
      "RecAreaPhone": "",
      "RecAreaDescription": "Everglades National Park protects an unparalleled landscape that provides important habitat for numerous rare and endangered species like the manatee,  American crocodile, and the elusive Florida panther.\n\nAn international treasure as well -  a World Heritage Site, International Biosphere Reserve, a Wetland of International Importance, and a specially protected area under the Cartagena Treaty.",
      "RecAreaMapURL": "http://www.nps.gov/ever/planyourvisit/maps.htm",
      "RecAreaLatitude": 25.37294225,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/ever/planyourvisit/index.htm",
      "Keywords": "",
      "RecAreaName": "Everglades National Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -73.00013462,
          40.69668638
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "FIIS_information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -73.00013462,
      "RecAreaID": 2681,
      "RecAreaPhone": "",
      "RecAreaDescription": "Immerse yourself in an enchanting collage of coastal life and history. Rhythmic waves, high dunes, ancient maritime forests, historic landmarks and glimpses of wildlife, Fire Island has been a special place for diverse plants, animals and people for centuries. Far from the pressure of nearby big-city life, dynamic barrier island beaches offer both solitude and camaraderie, and spiritual renewal.",
      "RecAreaMapURL": "http://www.nps.gov/fiis/planyourvisit/maps.htm",
      "RecAreaLatitude": 40.69668638,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "The Fire Island Lighthouse is located on the west end of Fire Island, adjacent to Robert Moses State Park. Take Robert Moses Causeway to Robert Moses State Park Field # 5 (fee charged in season) & walk 3/4-mile boardwalk to lighthouse.\nFor Wilderness: Take William Floyd Parkway (Route 46) to Smith Point County Park for access to the Wilderness Visitor Center. Parking is available (fee is charged in season) just east of small, round NPS visitor center. \nFor William Floyd Estate: Once on William Floyd Parkway (Route 46), continue approximately 3 miles south to Havenwood Drive traffic light. There will be a William Floyd Estate sign on your right and a Mastic Beach Business District sign on your left.  Make a left onto Havenwood Drive which turns into Neighborhood Road. Continue approximately 2 miles east to end of Neighborhood Road. Turn left onto Park Drive. The park entrance is located approximately 1/4 mile on your right.",
      "Keywords": "",
      "RecAreaName": "Fire Island National Seashore"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -105.2803396,
          38.91260586
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "FLFO_information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -105.2803396,
      "RecAreaID": 2683,
      "RecAreaPhone": "(719) 748 3253",
      "RecAreaDescription": "Beneath a grassy mountain valley in central Colorado lies one of the richest and most diverse fossil deposits in the world. Petrified redwood stumps up to 14 feet wide and thousands of detailed fossils of insects and plants reveal the story of a very different, prehistoric Colorado.",
      "RecAreaMapURL": "http://www.nps.gov/flfo/planyourvisit/maps.htm",
      "RecAreaLatitude": 38.91260586,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>By Plane:<br />\nColorado Springs is the closest airport to the Monument.</p>\n<p>By Car:<br />\nDIRECTIONS: Visitors traveling north/south on I-25: Exit at US 24 West, travel 35 miles to town of Florissant, then follow signs two miles south to the visitor center on Teller County 1. Visitors traveling east/west on US 24: Exit to the town of Florissant, then follow signs two miles south on Teller County 1 to the visitor center. Visitors traveling from the town of Cripple Creek: Follow Teller County Road 1 north for 16 miles. TRANSPORTATION: To Park: access by US Highway 24 and Teller County Road 1.<br />\n </p>",
      "Keywords": "",
      "RecAreaName": "Florissant Fossil Beds National Monument"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -109.451132,
          32.14925942
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -109.451132,
      "RecAreaID": 2684,
      "RecAreaPhone": "(520) 847 2500",
      "RecAreaDescription": "Fort Bowie commemorates the bitter conflict between Chiricahua Apaches and the U.S. military - a lasting monument to the bravery and endurance of U.S. soldiers in paving the way for settlement and the taming of the western frontier. It provides insight into a \"clash of cultures,\" a young nation in pursuit of \"manifest destiny,\" and the hunter/gatherer society fighting to preserve its existence.",
      "RecAreaMapURL": "http://www.nps.gov/fobo/planyourvisit/maps.htm",
      "RecAreaLatitude": 32.14925942,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Car<br />\nFrom Willcox: Travel 20 miles southeast on Arizona Highway 186 and turn left on Apache Pass Road. Drive 8 miles on this unpaved road to the Fort Bowie Trailhead. Be prepared to walk the three miles round trip to the ruins and back to your car.</p>\n<p>From Bowie: Drive 13 miles south on Apache Pass Road to the trailhead. The last mile is unpaved.</p>\n<p>The park is 116 miles east of Tucson via I-10, and 227 miles from Phoenix, AZ. Travel on I-10 to Bowie, then drive 13 miles south on Apache Pass Road to the trailhead.</p>\n<p>Obtain gas in Willcox or Bowie; gasoline is not available at or near the fort.</p>\n<p>Plane<br />\nMajor airports are in Tucson (116 miles) or Phoenix (227 miles). Several rental car companies are available at each one.</p>\n<p>Public Transportation<br />\nThere is no public transportation to Fort Bowie.<br />\n </p>",
      "Keywords": "",
      "RecAreaName": "Fort Bowie National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -110.7624754,
          41.85635223
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "marcia_fagnant@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -110.7624754,
      "RecAreaID": 2685,
      "RecAreaPhone": "",
      "RecAreaDescription": "Some of the world's best preserved fossils are found in the flat-topped ridges of southwestern Wyoming's cold sagebrush desert. Fossilized fishes, insects, plants, reptiles, birds, and mammals are exceptional for their abundance, variety, and detail of preservation. Most remarkable is the story they tell of ancient life in a subtropical landscape.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 41.85635223,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Forty-five miles north of Interstate 80, Kemmerer, Wyoming is at the crossroads of U.S. Highways 189 and 30. The monument is 9 miles west of Kemmerer on U.S. Highway 30. Follow the signs to the visitor center.\nCommercial transportation or tour buses are not available. The monument is a 2.5 hour drive from Salt Lake City International Airport.",
      "Keywords": "",
      "RecAreaName": "Fossil Butte National Monument"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -81.49802072,
          30.38468309
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -81.49802072,
      "RecAreaID": 2686,
      "RecAreaPhone": "",
      "RecAreaDescription": "At the settlement of <em>la Caroline</em>, French settlers struggled for survival in a new world.  Many sought religious freedom in a new land, while others were soldiers or tradesmen starting a new life.  The climactic battles fought here between the French and Spanish marked the first time that European nations fought for control of lands in what is now the United States.  It would not be the last time. ",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 30.38468309,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Fort Caroline National Memorial"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2013-04-10",
      "RecAreaEmail": "FOCL_Superintendent@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 2687,
      "RecAreaPhone": "Headquarters 503-861-2471 <br> Visitor Information 503-861-2471ext.214 <br> Visitor Information (TDD) 503-861-4408 <br> Education Program Information 503-861-4422 <br>",
      "RecAreaDescription": "Fort Clatsop National Memorial is a very busy place now that the bicentennial is in full swing.  Due to increased visitation, how visitors visit the park differs throughout the year.  Be sure to check the information carefully which pertains to the dates you wish to visit the park.  If you have any questions please call the park at: 503-861-2471 <P>Present through June 13, 2004. Park Hours are 9:00 am to 5:00 pm. All Groups of 10 or more must have a reservation to visit the park.  School groups can make reservations through the park's education program. See the education program information on this website.  Tour groups can make reservations through the tour office. <P> June 14- September 6, 2004. Park Hours are 9:00 am to 7:00 pm. Timed Ticket Reservations Required for all Visitors. Beginning June 14, 2004 the park will implement a timed entry ticketing system.  All visitors will need to purchase tickets in advance for a specific time to enter the park.  Tickets can be purchased by phone or on-line: 1-800-967-2283 http://reservations.nps.gov <P>September 7, 2004 until mid-June 2005. Park Hours are 9:00 am to 5:00 pm. Only groups of 10 or more need to have a reservation.  See spring 2004 above for information. <P> This site commemorates the 1805-06 winter encampment of the 33- member Lewis and Clark Expedition. A 1955 community-built replica of the explorers' 50'x50' Fort Clatsop is the focus of the park. The fort, historic canoe landing, and spring are nestled in the coastal forests and wetlands of the Coast Range as it merges with the Columbia River Estuary. The park is located approximately 5 miles south of Astoria, Oregon. <P>The Salt Works unit commemorates the expedition's salt-making activities. Salt obtained from seawater was essential to the explorers' winter at Fort Clatsop and their journey back to the United States in 1806. This site is located in the city of Seaside, Oregon. <P>",
      "RecAreaMapURL": "http://www.nps.gov/focl/pphtml/maps.html",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Public Transportation - During the summer visitors are encouraged to leave their cars at their lodging facilities or designated parking lots throughout the region and hop on the Explorer Shuttle to visit Fort Clatsop. Most motels and campgrounds will be serviced by the Shuttle. <P>",
      "Keywords": "",
      "RecAreaName": "Fort Clatsop National Memorial"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -103.8961904,
          30.59930381
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "FODA_ Superintendent@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -103.8961904,
      "RecAreaID": 2688,
      "RecAreaPhone": "(432) 426 3224",
      "RecAreaDescription": "Fort Davis is one of the best surviving examples of an Indian Wars' frontier military post in the Southwest. From 1854 to 1891, Fort Davis was strategically located to protect emigrants, mail coaches, and freight wagons on the Trans-Pecos portion of the San Antonio-El Paso Road and on the Chihuahua Trail.",
      "RecAreaMapURL": "http://www.nps.gov/foda/planyourvisit/maps.htm",
      "RecAreaLatitude": 30.59930381,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p><em>From</em> <strong>El Paso</strong>: Take I-10 east to Van Horn. At Van Horn take Highway 90 east. Just south of Valentine take Highway 505 and then 166 east. Turn left on Highway 17 and follow it to Fort Davis or continue south on Highway 90 to Marfa and then turn left on Highway 17 to Fort Davis. Alternate Route: From Van Horn take I-10 east to Kent and then turn south on 118 to Fort Davis. (About 4 hours)</p>\n<p><em>From</em> <strong>Midland/Odessa</strong>: Take I-20 west to Pecos. From Pecos take Highway 17 south through Balmorhea to Fort Davis. (About 2.5 hours)</p>\n<p><em>From</em> <strong>San Antonio</strong>: Take I-10 west to Balmorhea. Then take Highway 17 south to Fort Davis. (About 7 hours)</p>\n<p><em>From</em> <strong>Del Rio</strong>: Take Highway 90 west to Alpine. From Alpine take Highway 118 north to Fort Davis. (About 3.5 hours)</p>",
      "Keywords": "",
      "RecAreaName": "Fort Davis National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -87.92445695,
          36.49019078
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "doug_richardson@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -87.92445695,
      "RecAreaID": 2689,
      "RecAreaPhone": "(931) 232 5348",
      "RecAreaDescription": "Brigadier General Ulysses S. Grant was becoming quite famous as he wrote these words following the surrender of Confederate Fort Donelson on Sunday, February 16, 1862. The Union victory at Fort Donelson elated the North, and stunned the South. Within days of the surrender, Clarksville and Nashville would fall into Union hands. Grant and his troops had created a pathway to victory for the Union.",
      "RecAreaMapURL": "http://www.nps.gov/fodo/planyourvisit/maps.htm",
      "RecAreaLatitude": 36.49019078,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Fort Donelson National Battlefield"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -76.94955824,
          38.87731289
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "julie_kutruff@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -76.94955824,
      "RecAreaID": 2690,
      "RecAreaPhone": "",
      "RecAreaDescription": "Will be hosting garden information sessions and 2016 permit issuance on the following date:\n\nJuly 16,2016 10:00AM - 12:00PM\n\nLocation will be at Fort Dupont Park Activity Center\n3600 F Street & Minnesota Ave, SE Washington, DC 200",
      "RecAreaMapURL": "http://www.nps.gov/fodu/planyourvisit/maps.htm",
      "RecAreaLatitude": 38.87731289,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "www.nps.gov/fodu/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Fort Dupont Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -81.39452014,
          31.2214699
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "denise_spear@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -81.39452014,
      "RecAreaID": 2691,
      "RecAreaPhone": "",
      "RecAreaDescription": "Georgia's fate was decided in 1742 when Spanish and British forces clashed on St. Simons Island. Fort Frederica's troops defeated the Spanish, ensuring Georgia's future as a British colony. Today, the archeological remnants of Frederica are protected by the National Park Service.",
      "RecAreaMapURL": "http://www.nps.gov/fofr/planyourvisit/maps.htm",
      "RecAreaLatitude": 31.2214699,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p><strong>Coming South on Interstate 95 to U.S. 17:<br />\n</strong>Take Exit 38 and turn left onto Spur 25/Golden Isles Parkway. Follow Spur 25 until it ends at U.S. 17. Take a right onto U.S. 17 (south). <br />\n<br />\n<strong>Coming North on Interstate 95 to U.S. 17:<br />\n</strong>Take Exit 29 and turn right onto U.S. 17 (north).<br />\n<br />\n<strong>U.S. 17 to Fort Frederica:</strong><br />\nFrom U.S. 17, take the F.J. Torras Causeway to St. Simons Island. At first traffic light on the island, turn left onto Sea Island Road. Go 1.5 miles to next traffic light, and turn left onto Frederica Road. Follow Frederica Road for two miles (take second right off roundabout). The park entrance is located 300 yards past Christ Church.<br />\n </p>",
      "Keywords": "",
      "RecAreaName": "Fort Frederica National Monument"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -104.5459112,
          42.20301694
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "Steve_Fullmer@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -104.5459112,
      "RecAreaID": 2692,
      "RecAreaPhone": "",
      "RecAreaDescription": "Originally established as a private fur trading fort in 1834, Fort Laramie evolved into the largest and best known military post on the Northern Plains before its abandonment in 1890. This \"grand old post\" witnessed the entire sweeping saga of America's western expansion and Indian resistance to encroachment on their territories.",
      "RecAreaMapURL": "http://www.nps.gov/fola/planyourvisit/maps.htm",
      "RecAreaLatitude": 42.20301694,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>By Motor Vehicle - The park is located in Southeast Wyoming. From I-25 take exit 92 to U.S. Highway 26, proceed east to the Town of Fort Laramie, turn right on State Highway 160 and travel 3 miles to the park entrance.</p>\n<p>From U.S. Highways 26/85, proceed west from the town of Lingle on Highway 26 to the Town of Fort Laramie, turn left on State Highway 160 and travel 3 miles to the park entrance.</p>\n<p>By Airplane - International Airport is in Denver, Colorado (200 miles south) and Local Airports with passenger service are located in Scottsbluff, Nebraska (52 miles), Cheyenne Wyoming (98 miles) and Casper Wyoming (120 Miles). <br />\n </p>",
      "Keywords": "",
      "RecAreaName": "Fort Laramie National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -99.21836664,
          38.18047491
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "fols_internet@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -99.21836664,
      "RecAreaID": 2693,
      "RecAreaPhone": "",
      "RecAreaDescription": "Discover a complete and authentic army post from the 1860s -1870s! This well-preserved fort on the Santa Fe Trail shares a tumultuous history of the Indian Wars era. The sandstone constructed buildings sheltered troops who were known as the Guardians of the Santa Fe Trail.",
      "RecAreaMapURL": "http://www.nps.gov/fols/planyourvisit/maps.htm",
      "RecAreaLatitude": 38.18047491,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>By Plane</p>\n<p>The closest airport is near the town of Great Bend Kansas--located 27 miles northeast of Fort Larned NHS. A much larger airport with more flight options would be the Wichita Mid-Continent Airport in the town of Wichita, Kansas--located 130 miles to the southeast.</p>\n<p>By Car</p>\n<p>Fort Larned NHS is six miles west of the town of Larned on Kansas Highway 156. The park is located just off the highway with only a 1/4 mile drive to parking. The parking lot is big enough for RVs with a looped road so backing is not necessary.</p>\n<p>From Interstate 70 travel 30 miles west of Salina, Fort Larned NHS is 83 miles southwest after taking exit 225. The park is also accessible by KS-156 and various other state roads.</p>\n<p> </p>",
      "Keywords": "",
      "RecAreaName": "Fort Larned National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -81.23567535,
          29.7121489
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "foma_site_supervisor@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -81.23567535,
      "RecAreaID": 2694,
      "RecAreaPhone": "",
      "RecAreaDescription": "Coastal Florida was a major field of conflict as European nations fought for control in the New World. As part of this struggle, Fort Matanzas guarded St. Augustine's southern river approach. The colonial wars are over, but the monument is still protecting—not just the historic fort, but also the wild barrier island and the plants and animals who survive there amidst a sea of modern development.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 29.7121489,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Fort Matanzas National Monument"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -76.58044165,
          39.26395314
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "FOMC_Superintendent@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -76.58044165,
      "RecAreaID": 2695,
      "RecAreaPhone": "",
      "RecAreaDescription": "by the dawn's early light, a large red, white and blue banner? Whose broad stripes and bright stars . . . were so gallantly streaming! over the star-shaped Fort McHenry during the Battle of Baltimore, September 13-14, 1814. The valiant defense of the fort inspired Francis Scott Key to write \"The Star-Spangled Banner.\"",
      "RecAreaMapURL": "http://www.nps.gov/fomc/planyourvisit/maps.htm",
      "RecAreaLatitude": 39.26395314,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "From I-83.\nTake I-83 South until the expressway turns into President Street. Use the two right lanes to make a right onto Lombard Street. Then use the two left lanes to make a left onto Light Street. Using the two left lanes, bear left onto Key Highway (you should be passing the sign for Federal Hill on your right). Make a right onto Lawrence Street then a left onto Fort Avenue. Fort Avenue dead ends into the Fort's front gate. \n\nFrom I-95. \nTake I-95 exit 55 to E McComas street (you should be parallel  to the highway). Make a right onto Andre Street then a right onto Fort Avenue. Fort Avenue dead ends into the Fort's front gate.",
      "Keywords": "",
      "RecAreaName": "Fort McHenry National Monument and Historic Shrine"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2013-04-10",
      "RecAreaEmail": "fosu_information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 2696,
      "RecAreaPhone": "(843) 883 3123",
      "RecAreaDescription": "http://www.nps.gov/fosu/planyourvisit/directions.htm",
      "RecAreaMapURL": "",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/fosu/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Fort Moultrie National Monument"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -79.59033344,
          39.81306048
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "brian_reedy@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -79.59033344,
      "RecAreaID": 2697,
      "RecAreaPhone": "",
      "RecAreaDescription": "The battle at Fort Necessity in the summer of 1754 was the opening action of the French and Indian War. This war was a clash of British, French and American Indian cultures. It ended with the removal of French power from North America. The stage was set for the American Revolution.",
      "RecAreaMapURL": "http://www.nps.gov/fone/planyourvisit/maps.htm",
      "RecAreaLatitude": 39.81306048,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/fone/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Fort Necessity National Battlefield"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -122.473747,
          37.80837439
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "george_su@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -122.473747,
      "RecAreaID": 2698,
      "RecAreaPhone": "",
      "RecAreaDescription": "From its vantage point overlooking the spectacular Golden Gate, Fort Point defended the San Francisco Bay following California's Gold Rush through World War II. Its beautifully arched casemates display the art of 3rd system brick masonry and interacts gracefully with the Golden Gate Bridge.",
      "RecAreaMapURL": "http://www.nps.gov/fopo/planyourvisit/maps.htm",
      "RecAreaLatitude": 37.80837439,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Fort Point is located at the south anchorage of the Golden Gate Bridge at the end of Marine Drive on the Presidio of San Francisco.\n\nBy car from San Francisco and points south, take Highway 101 north and exit right at the Golden Gate Bridge toll plaza before getting on bridge. Turn right at end of exit ramp and then left onto Lincoln Boulevard. Take the first left onto Long Avenue and follow onto Marine Drive and Fort Point at its end.\n\nBy car from the north, take Highway 101 across the Golden Gate Bridge. Stay in right toll lane and exit immediately past the bridge toll plaza. Turn right at end of exit ramp and loop under toll plaza. At end of road, turn left onto Lincoln Boulevard. Take the first left onto Long Avenue and follow onto Marine Drive and Fort Point at its end.\n\nBy public transit, San Francisco Muni 28 bus stops at bridge toll plaza. Follow trail signs northeast of plaza area to Fort Point at base of bluffs. Free PresidiGo shuttle service stops at Fort Point on weekends.",
      "Keywords": "",
      "RecAreaName": "Fort Point National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -80.93361681,
          32.0308274
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "FOPU_Information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -80.93361681,
      "RecAreaID": 2699,
      "RecAreaPhone": "(912) 786 5787",
      "RecAreaDescription": "For much of the 19th century, masonry fortifications were the United States' main defense against overseas enemies. However, during the Civil War, new technology proved its superiority to these forts. The Union army used rifled cannon and compelled the Confederate garrison inside Fort Pulaski to surrender. The siege was a landmark experiment in the history of military science and invention",
      "RecAreaMapURL": "http://www.nps.gov/fopu/planyourvisit/maps.htm",
      "RecAreaLatitude": 32.0308274,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Depart I-95 South/GA-405 South/Tom Coleman Hwy at exit 99A\nTake ramp right for I-16 East toward Savannah\nAt exit 167B, take ramp left for Montgomery St toward Downtown/Savannah/Civic Ctr\nBear left onto Montgomery St\nTurn right onto W Liberty St (COURTYARD by Marriott on the corner)\nKeep straight onto E Liberty St\nTurn left onto Randolph St\nTurn right onto E President St\nRoad name changes to Islands Expy\nKeep straight onto US-80 East/GA-26 East\nTurn left at Entrance to Fort Pulaski National Monument\nPulaski National Monument entrance is approximately 15 miles east of Savannah.",
      "Keywords": "",
      "RecAreaName": "Fort Pulaski National Monument"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -75.71496865,
          35.93278602
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "caha_general_information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -75.71496865,
      "RecAreaID": 2700,
      "RecAreaPhone": "",
      "RecAreaDescription": "Fort Raleigh National Historic Site protects and preserves known portions of England's first New World settlements from 1584 to 1590.\n\nThis site also preserves the cultural heritage of the Native Americans, European Americans and African Americans who have lived on Roanoke Island.",
      "RecAreaMapURL": "http://www.nps.gov/fora/planyourvisit/maps.htm",
      "RecAreaLatitude": 35.93278602,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "From Manteo, head north on US 64 for about 3 miles. Turn right onto Fort Raleigh Rd.",
      "Keywords": "",
      "RecAreaName": "Fort Raleigh National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -94.70429174,
          37.84358849
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "fosc_superintendent@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -94.70429174,
      "RecAreaID": 2701,
      "RecAreaPhone": "(620) 223 0310",
      "RecAreaDescription": "Promises made and broken! A town attacked at dawn! Thousands made homeless by war! Soldiers fighting settlers! Each of these stories is a link in the chain of events that encircled Fort Scott from 1842-1873. All of the site's structures, its parade ground, and its tallgrass prairie bear witness to this era when the country was forged from a young republic into a united transcontinental nation.",
      "RecAreaMapURL": "http://www.nps.gov/fosc/planyourvisit/maps.htm",
      "RecAreaLatitude": 37.84358849,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Fort Scott National Historic Site is located in downtown Fort Scott, Kansas. U.S. Highways 69 and 54 intersect here. Fort Scott is about 90 miles south of Kansas City and 60 miles northwest of Joplin, Missouri. It is 4 miles from the Kansas-Missouri border.</p>\n<p>Signs directing visitors to Fort Scott are posted on Highway 69 for visitors coming from the north and the south and on Highway 54 for visitors coming from the east and the west.</p>\n<p>The entrance to the site is one block west of the intersection of Highway 69 and Highway 54 east. (Highway 54 west splits off from Highway 69 about 1/2 mile north of town.)</p>\n<p><br />\n </p>\n<p> </p>",
      "Keywords": "",
      "RecAreaName": "Fort Scott National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -94.43129079,
          35.38834746
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "michael_groomer@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -94.43129079,
      "RecAreaID": 2702,
      "RecAreaPhone": "",
      "RecAreaDescription": "From the establishment of the first Fort Smith on December 25, 1817, to the final days of Judge Isaac C. Parker's jurisdiction over Indian Territory in 1896, Fort Smith National Historic Site preserves almost 80 years of history. \n\nExplore life on the edge of Indian Territory through the stories of soldiers, the Trail of Tears, dangerous outlaws, and the brave lawmen who pursued them.",
      "RecAreaMapURL": "http://www.nps.gov/fosm/planyourvisit/maps.htm",
      "RecAreaLatitude": 35.38834746,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Fort Smith National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -75.45557626,
          43.21053441
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "willie_scott@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -75.45557626,
      "RecAreaID": 2703,
      "RecAreaPhone": "",
      "RecAreaDescription": "For centuries, the Oneida Carrying Place, a six mile portage connecting the Mohawk River and Wood Creek, served as a vital link for those traveling by water from the ocean to the Great Lakes. When Europeans arrived, nations fought for control of the carry, the homelands of the Six Nations Confederacy, and the rich resources of North America. In this struggle, Fort Stanwix would play a vital role.",
      "RecAreaMapURL": "http://www.nps.gov/fost/planyourvisit/maps.htm",
      "RecAreaLatitude": 43.21053441,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/fost/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Fort Stanwix National Monument"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -79.87068744,
          32.75654469
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "fosu_information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -79.87068744,
      "RecAreaID": 2704,
      "RecAreaPhone": "",
      "RecAreaDescription": "Decades of growing strife between North and South erupted in civil war on April 12, 1861, when Confederate artillery opened fire on this Federal fort in Charleston Harbor. Fort Sumter surrendered 34 hours later. Union forces would try for nearly four years to take it back.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 32.75654469,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Please note this is the physical location of Park Headquarters, the Fort Moultrie unit and our mailing address. For directions to all of our various sites, please see our Directions page:\n\nhttp://www.nps.gov/fosu/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Fort Sumter National Monument"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -105.0145185,
          35.90700629
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "foun_interpretation@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -105.0145185,
      "RecAreaID": 2706,
      "RecAreaPhone": "(505) 425 8025",
      "RecAreaDescription": "Exposed to the wind, within a sweeping valley of short grass prairie, amid the swales of the Santa Fe Trail, lie the territorial-style adobe remnants of the largest 19th century military fort in the region. For forty years, 1851-1891, Fort Union functioned as an agent of political and cultural change, whether desired or not, in New Mexico and throughout the Southwest.",
      "RecAreaMapURL": "http://www.nps.gov/foun/planyourvisit/maps.htm",
      "RecAreaLatitude": 35.90700629,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Plane<br />\nFly to Albuquerque, NM or Denver, CO.</p>\n<p>Car<br />\nFrom Albuquerque (156 miles), Santa Fe (94 miles) or Las Vegas, NM (28 miles) take I-25 north, exit 366 at Watrous, 8 miles on NM 161.</p>\n<p>From Denver (313 miles), Colorado Springs (243 miles) or Raton (95 miles) take I-25 south, exit 366 at Watrous, 8 miles on NM 161.</p>\n<p>Public Transportation<br />\nNo bus or public transportation service to Fort Union.</p>\n<p> </p>\n<p> </p>",
      "Keywords": "",
      "RecAreaName": "Fort Union National Monument"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -122.6617043,
          45.62234841
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "nadine_renfro@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -122.6617043,
      "RecAreaID": 2708,
      "RecAreaPhone": "",
      "RecAreaDescription": "Located on the north bank of the Columbia River, in sight of snowy mountain peaks and a vibrant urban landscape, this park has a rich cultural past. From a frontier fur trading post, to a powerful military legacy, the magic of flight, and the origin of the American Pacific Northwest, history is shared at four unique sites. Discover stories of transition, settlement, conflict, and community.",
      "RecAreaMapURL": "http://www.nps.gov/fova/planyourvisit/maps.htm",
      "RecAreaLatitude": 45.62234841,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Driving directions to Fort Vancouver (including Pearson Air Museum)\nFrom I-5, take the Mill Plain Boulevard exit (Exit 1-C) and head east. Turn south onto Fort Vancouver Way. At the traffic circle, go east on Evergreen Boulevard and follow signs to the Fort Vancouver Visitor Center. The reconstructed fort site is south of the visitor center - follow the park road that connects the visitor center parking lot to the fort parking lot.\nFrom I-205, go west on Highway 14 about six miles, then take I-5 north. From I-5, take the Mill Plain Boulevard exit (Exit 1-C) and head east. Turn south onto Fort Vancouver Way.At the traffic circle, go east on Evergreen Boulevard and follow signs to the Fort Vancouver Visitor Center (1501 E. Evergreen Blvd.). The reconstructed fort site and Pearson Air Museum are south of the Visitor Center. To get to these resources from the Visitor Center, follow the park road south until it reaches E. Fifth St. The reconstructed fort's parking lot is immediately south of Fifth St.",
      "Keywords": "",
      "RecAreaName": "Fort Vancouver National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -77.02174195,
          38.70875364
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "NACE_Fort_Washington_Park@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -77.02174195,
      "RecAreaID": 2709,
      "RecAreaPhone": "(301) 763 4600",
      "RecAreaDescription": "Built to defend the river approach to  Washington, DC, Fort Washington has stood as silent sentry for over 200 years. As technologies advanced so did Fort Washington, from the brick and stone of the 19th century to the concrete and steel of the 20th century.",
      "RecAreaMapURL": "http://www.nps.gov/fowa/planyourvisit/maps.htm",
      "RecAreaLatitude": 38.70875364,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>From I-95/495 take exit 3, Indian Head Higway South/MD 210. Travel about 4 miles to Fort Washington Road, turn right. The park is located at the end of the road.</p>\n<p> </p>\n<p>From Waldorf, MD: MD228 to Indian Head Highway/MD210 North. Turn left onto Old Fort Road. Continue to end of road, at the stop sign turn left onto Fort Washington Road, continue to park entrance.<br />\n </p>",
      "Keywords": "",
      "RecAreaName": "Fort Washington Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -76.98508147,
          38.86298458
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "nate_johnson@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -76.98508147,
      "RecAreaID": 2711,
      "RecAreaPhone": "",
      "RecAreaDescription": "Frederick Douglass spent his life fighting for justice and equality. Born into slavery in 1818, he escaped as a young man and became a leading voice in the abolitionist movement. People everywhere still find inspiration today in his tireless struggle, brilliant words, and inclusive vision of humanity. Douglass's legacy is preserved here at Cedar Hill, where he lived his last 17 years.",
      "RecAreaMapURL": "http://www.nps.gov/frdo/planyourvisit/maps.htm",
      "RecAreaLatitude": 38.86298458,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "From I-495/95 Beltway\nTake Exit 3 north onto Indian Head highway (MD 210), which becomes South Capitol Street. Bear right onto Martin Luther King Jr. Avenue. Turn right on W Street for four blocks. The visitor center parking lot will be on your right.\nFrom the National Mall\nTravel southeast on Pennsylvania Avenue. Turn right on 11th Street. Follow 11th until it ends at the bottom of a hill. Take the bridge across the river, then continue straight onto Martin Luther King Jr. Ave. at the far end of the bridge. Travel two blocks on MLK then at the light turn left onto W Street. Take W Street for 4 blocks and the parking lot will be on your right.\nFrom I-295 South\nTake exit 2 for Malcolm X Avenue and turn left onto Malcolm X Ave. Turn left onto Martin Luther King Jr. Avenue. Drive for approximately 5-10 minutes. Turn right onto W street, the site will be 4 blocks down on the right.",
      "Keywords": "",
      "RecAreaName": "Frederick Douglass National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -79.92504169,
          39.77543423
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "kitty_seifert@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -79.92504169,
      "RecAreaID": 2713,
      "RecAreaPhone": "",
      "RecAreaDescription": "Albert Gallatin is best remembered for his thirteen year tenure as Secretary of the Treasury during the Jefferson and Madison administrations. In that time he reduced the national debt, purchased the Louisiana Territory and funded the Lewis & Clark exploration. Gallatin's accomplishments and contributions are highlighted at Friendship Hill, his restored country estate.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 39.77543423,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Friendship Hill National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -71.13202567,
          42.32424266
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "alan_banks@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -71.13202567,
      "RecAreaID": 2714,
      "RecAreaPhone": "",
      "RecAreaDescription": "Frederick Law Olmsted (1822-1903) is recognized as the founder of American landscape architecture and the nation's foremost parkmaker. Olmsted moved his home to suburban Boston in 1883 and established the world's first full-scale professional office for the practice of landscape design. During the next century, his sons and successors perpetuated Olmsted's design ideals, philosophy, and influence.",
      "RecAreaMapURL": "http://www.nps.gov/frla/planyourvisit/maps.htm",
      "RecAreaLatitude": 42.32424266,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Frederick Law Olmsted National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -77.6470428,
          38.28277118
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "frsp_info@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -77.6470428,
      "RecAreaID": 2715,
      "RecAreaPhone": "(540) 373 6122",
      "RecAreaDescription": "Fredericksburg, Chancellorsville, Wilderness, and Spotsylvania--this is America's battleground, where the Civil War roared to its bloody climax. No place more vividly reflects the War's tragic cost in all its forms. A town bombarded and looted. Farms large and small ruined. Refugees by the thousands forced into the countryside. More than 85,000 men wounded; 15,000 killed--most in graves unknown.",
      "RecAreaMapURL": "http://www.nps.gov/frsp/planyourvisit/maps.htm",
      "RecAreaLatitude": 38.28277118,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Fredericksburg & Spotsylvania National Military Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -153.2917758,
          67.75961636
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "GAAR_Visitor_Information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -153.2917758,
      "RecAreaID": 2716,
      "RecAreaPhone": "(907) 692 5494",
      "RecAreaDescription": "This vast landscape does not contain any roads or trails. Visitors discover intact ecosystems where people have lived with the land for thousands of years. Wild rivers meander through glacier-carved valleys, caribou migrate along age-old trails, endless summer light fades into aurora-lit night skies of winter. It remains virtually unchanged except by the forces of nature.",
      "RecAreaMapURL": "http://www.nps.gov/gaar/planyourvisit/maps.htm",
      "RecAreaLatitude": 67.75961636,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Gates Of The Arctic National Park & Preserve"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -81.00420836,
          38.20614947
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "neri_interpretation@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -81.00420836,
      "RecAreaID": 2717,
      "RecAreaPhone": "",
      "RecAreaDescription": "The 25 miles of free-flowing Gauley River and the six miles of the Meadow River pass through scenic gorges and valleys containing a wide variety of natural and cultural features. The Gauley River contains several class V+ rapids, making it one of the most adventurous white water boating rivers in the east.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 38.20614947,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Plane<br />\nThe largest airport is at Charleston, about 65 miles from Summersville. There are also small airports at Summersville and Beckley.</p>\n<p>Car<br />\nFrom Route 19 take Route 129 West at Mount Nebo. The river access area is reached by taking the second left after you cross over the dam on Route 129.</p>\n<p>Getting Around</p>\n<p>At the present time, the only public access to the Gauley River National Recreation Area is just downstream of Summersville Dam.</p>",
      "Keywords": "",
      "RecAreaName": "Gauley River National Recreation Area"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -73.9171087,
          40.56536246
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "GATE_JABAspecialparkuses@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -73.9171087,
      "RecAreaID": 2718,
      "RecAreaPhone": "(718) 354 4606",
      "RecAreaDescription": "There are three geographic units: Sandy Hook, New Jersey; Jamaica Bay and Staten Island, New York City. The NYC units include Jamaica Bay Wildlife Refuge, Fort Tilden, Riis Park in Queens, Floyd Bennett Field and Canarsie Pier in Brooklyn. Staten Island has Great Kills Park, Miller Field and Fort Wadsworth. These sites and others make up the 27,000 acres of Gateway, one national park.",
      "RecAreaMapURL": "http://www.nps.gov/gate/planyourvisit/maps.htm",
      "RecAreaLatitude": 40.56536246,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Gateway National Recreation Area"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -87.53545212,
          38.67912659
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "Jason_M_Collins@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -87.53545212,
      "RecAreaID": 2720,
      "RecAreaPhone": "",
      "RecAreaDescription": "The British flag would not be raised above Fort Sackville Feb. 25, 1779. At 10 a.m., the garrison surrendered to American Colonel George Rogers Clark. His American army, aided by French residents of the Illinois country, had marched through freezing floodwaters to gain this victory. The fort's capture assured United States claims to the frontier, an area nearly as large as the original 13 states.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 38.67912659,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>The George Rogers Clark National Historical Park is located within the city of Vincennes, Indiana. Vincennes is located along the Wabash river in the southwestern part of the state. Evansville is approximately 50 miles to the south and Terre Haute is approximately 50 miles to the north. Highway 41 provides good roads from both of these cities. Highway 50 provides access from the east and west. From Hwy 50 east and west or from Hwy 41 from the north use the 6th Street exit and stay on 6th Street till reaching the intersection with Barnett Street (approximately 2.5 miles). Turn right on Barnett and follow it to the park. On Hwy 41 from the South use the Willow Street exit. Turn right on Willow Street for approximately 2 miles to its intersections with South 6th Street, turn right. Travel four blocks and turn left on Barnett Street which will lead to the park.</p>",
      "Keywords": "",
      "RecAreaName": "George Rogers Clark National Historical Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -77.23246758,
          39.81557366
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "GETT_superintendent@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -77.23246758,
      "RecAreaID": 2722,
      "RecAreaPhone": "",
      "RecAreaDescription": "The Battle of Gettysburg was a turning point in the Civil War, the Union victory that ended General Robert E. Lee's second and most ambitious invasion of the North. Often referred to as the \"High Water Mark of the Rebellion\", Gettysburg was the Civil War's bloodiest battle and was also the inspiration for President Abraham Lincoln's immortal \"Gettysburg Address\".",
      "RecAreaMapURL": "http://www.nps.gov/gett/planyourvisit/maps.htm",
      "RecAreaLatitude": 39.81557366,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/gett/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Gettysburg National Military Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -108.2706711,
          33.22715258
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "gicl_information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -108.2706711,
      "RecAreaID": 2724,
      "RecAreaPhone": "",
      "RecAreaDescription": "For thousands of years, groups of nomadic people used the caves of the Gila River as temporary shelter. In the late 1200's, people of the Mogollon Culture decided it would be a good place to call home. They built rooms, crafted pottery and raised children in the cliff dwellings for about twenty years. Then the Mogollon moved on, leaving the walls for us as a glimpse into the past.",
      "RecAreaMapURL": "http://www.nps.gov/gicl/planyourvisit/maps.htm",
      "RecAreaLatitude": 33.22715258,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Gila Cliff Dwellings National Monument"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -113.8009306,
          48.68414678
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "glac_questions@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -113.8009306,
      "RecAreaID": 2725,
      "RecAreaPhone": "",
      "RecAreaDescription": "As the Crown of the Continent, Glacier is the headwaters for streams that flow to the Pacific Ocean, the Gulf of Mexico, and to Hudson's Bay. What happens here affects waters in a huge section of North America. Due to a detection of invasive mussel populations in central Montana, Glacier has closed all park waters to boating until further notice. Please see the press release for further details.",
      "RecAreaMapURL": "http://www.nps.gov/glac/planyourvisit/maps.htm",
      "RecAreaLatitude": 48.68414678,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Glacier National Park is located in the northwest corner of Montana along the spine of the Rocky Mountains.</p>\n<p>By Car<br />\nThe West Glacier Entrance is accessible from U.S. Highway 2. All three east side entrances (St. Mary, Two Medicine, or Many Glacier) can be reached from Highway 89, then following signage to the respective entrance.</p>\n<p>By Plane<br />\nGlacier Park International Airport in Kalispell, Montana is 25 miles west of park headquarters in West Glacier, Montana. There are also airports in Great Falls, Montana (between 130 miles to 165 miles east of East Glacier Park, St Mary, Two Medicine and Many Glacier Entrances) and Missoula, Montana (156 miles south of West Glacier).</p>\n<p>Car rentals are available at airports. Shuttles are available at the Kalispell airport.</p>\n<p>By Train<br />\nAmtrak services both East Glacier and West Glacier. Glacier Park Inc., provides a shuttle service at these locations. Please call them at 406-892-2525 for more information.<br />\n </p>",
      "Keywords": "",
      "RecAreaName": "Glacier National Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -136.8407579,
          58.80086718
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "glba_administration@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -136.8407579,
      "RecAreaID": 2726,
      "RecAreaPhone": "",
      "RecAreaDescription": "Covering 3.3 million acres of rugged mountains, dynamic glaciers, temperate rainforest, wild coastlines and deep sheltered fjords, Glacier Bay National Park is a highlight of Alaska's Inside Passage and part of a 25-million acre World Heritage Site—one of the world's largest international protected areas. From sea to summit, Glacier Bay offers limitless opportunities for adventure and inspiration.",
      "RecAreaMapURL": "http://www.nps.gov/glba/planyourvisit/maps.htm",
      "RecAreaLatitude": 58.80086718,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Glacier Bay National Park and Preserve lies west of Juneau, AK and can only be reached by plane or boat. The only road merely connects the small town of Gustavus and its airfield to park headquarters at Bartlett Cove (10 miles). \n\nAlaska Airlines provides daily jet service from Juneau to Gustavus (about 30 minutes) in the summer season. Year-round scheduled air service to Gustavus is also provided by a variety of small air taxis and charters.\n\nMany visitors arrive in Glacier Bay as passengers on board cruise ships, tour boats, charter boats, and their own private vessels.\n\nThe Alaska Marine Highway system now provides regular ferry service to Gustavus. The ferry dock is located in Gustavus, 9 miles from Glacier Bay park headquarters in Bartlett Cove. Check the AMHS website for schedules, times, and rates. If you are planning on bringing a vehicle, please be aware that vehicle based activities may be limited.\n\nFor more information, please visit:\nhttp://www.nps.gov/glba/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Glacier Bay National Park & Preserve"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -110.7718311,
          37.51841301
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "glca_carl_hayden@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -110.7718311,
      "RecAreaID": 2727,
      "RecAreaPhone": "(928) 608 6200",
      "RecAreaDescription": "Encompassing over 1.25 million acres, Glen Canyon National Recreation Area offers unparalleled opportunities for water-based & backcountry recreation. The recreation area stretches for hundreds of miles from Lees Ferry in Arizona to the Orange Cliffs of southern Utah, encompassing scenic vistas, geologic wonders, and a vast panorama of human history.",
      "RecAreaMapURL": "http://www.nps.gov/glca/planyourvisit/maps.htm",
      "RecAreaLatitude": 37.51841301,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/glca/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Glen Canyon National Recreation Area"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -77.14012206,
          38.96912315
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -77.14012206,
      "RecAreaID": 2729,
      "RecAreaPhone": "(301) 320 1410",
      "RecAreaDescription": "Glen Echo Park began in 1891 as a National Chautauqua Assembly \"to promote liberal and practical education.\" By 1911, it transformed into DC's premier amusement park until it closed in 1968. Since 1971, the National Park Service has owned and operated the site and today, with the help of the Glen Echo Park Partnership for Arts and Culture, offers year-round cultural and recreational activities.",
      "RecAreaMapURL": "http://www.nps.gov/glec/planyourvisit/maps.htm",
      "RecAreaLatitude": 38.96912315,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/glec/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Glen Echo Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -122.6007386,
          37.85982543
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "goga_socialmedia_goga@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -122.6007386,
      "RecAreaID": 2730,
      "RecAreaPhone": "",
      "RecAreaDescription": "Experience a park so rich it supports 19 distinct ecosystems with over 2,000 plant and animal species. Go for a hike, enjoy a vista, have a picnic or learn about the centuries of overlapping history from California's indigenous cultures, Spanish colonialism, the Mexican Republic, US military expansion and the growth of San Francisco. All of this and more awaits you, so get out and find your park.",
      "RecAreaMapURL": "http://www.nps.gov/goga/planyourvisit/maps.htm",
      "RecAreaLatitude": 37.85982543,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Plane\n\nSan Francisco, Oakland, and San Jose International Airports service the San Francisco Bay Area.\n\nCar\n\nGolden Gate NRA can be reached by Highways 1, 101 and 280 from the north and south San Francisco Bay Area, and by Highway 880 from the East Bay.\n\nPublic Transportation\n\nThere are various bus lines that run to and through the park. To get the best information on transit to the park areas you are interested in visiting, refer to the public transit information site: www.511.org\n\nTransit & Trails\n\nTransit and Trails connects you to the Bay Area's parks and open spaces by helping you Find, Plan and Share your outdoor adventures. Locate trailheads near you (or any location) and they will help you get there on public transportation or get the directions you need to walk, bike, or drive there: www.transitandtrails.org",
      "Keywords": "",
      "RecAreaName": "Golden Gate National Recreation Area"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -114.2579782,
          38.94617378
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "grba_interpretation@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -114.2579782,
      "RecAreaID": 2732,
      "RecAreaPhone": "",
      "RecAreaDescription": "From the 13,000-foot summit of Wheeler Peak, to the sage-covered foothills, Great Basin National Park is a place to sample the stunning diversity of the larger Great Basin region. Come and partake of the solitude of the wilderness, walk among ancient bristlecone pines, bask in the darkest of night skies, and explore mysterious subterranean passages. There's a whole lot more than just desert here!",
      "RecAreaMapURL": "http://www.nps.gov/grba/planyourvisit/maps.htm",
      "RecAreaLatitude": 38.94617378,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/grba/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Great Basin National Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -112.6836024,
          36.17280161
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "grca_information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -112.6836024,
      "RecAreaID": 2733,
      "RecAreaPhone": "(928) 638 7888",
      "RecAreaDescription": "Unique combinations of geologic color and erosional forms decorate a canyon that is 277 river miles (446km) long, up to 18 miles (29km) wide, and a mile (1.6km) deep. Grand Canyon overwhelms our senses through its immense size \n\nThe South Rim of the park is open all year \nThe North Rim of the park is closed for winter. \nThe North Rim reopens on May 15 for the 2017 Season",
      "RecAreaMapURL": "http://www.nps.gov/grca/planyourvisit/maps.htm",
      "RecAreaLatitude": 36.17280161,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/grca/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Grand Canyon National Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -76.89722133,
          38.98328267
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "nace_superintendent@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -76.89722133,
      "RecAreaID": 2734,
      "RecAreaPhone": "",
      "RecAreaDescription": "Just twelve miles from Washington, D.C., Greenbelt Park is located in suburban Greenbelt, Maryland. \nThe park features a 174 site campground with specific site reservations, nine miles of trails, and three picnic areas.  \nThe campground is open all year round.\nThe campground is known for its affordability, safety, peaceful surroundings, and National Park Service hospitality.",
      "RecAreaMapURL": "http://www.nps.gov/gree/planyourvisit/maps.htm",
      "RecAreaLatitude": 38.98328267,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/gree/planyourvisit/directions.htm\n\nOff I-95 South\nTake Exit 23 Route 201 Kenilworth Avenue South(toward Bladensburg). (this will be a left). Drive on Kenilworth Avenue (Route 201). Once crossing over I-95, you will see sign for Route 193 Greenbelt Road. Veer right to Take Route 193 East.\nTake a left on Greenbelt Road .\n(Greenbelt Road is Route 193 and is an overpass over Route 201) \nThe park entrance is a quarter mile on the right hand side of Greenbelt Road across from Fridays restaurant and Marriott Courtyard.\n\nFrom I-95 North  (points north)\nTake Exit 23 Route 201 Kenilworth Avenue South (toward Bladensburg). \nUpon exiting I-95, Take a right on Route 201 (Southbound).\nVeer right and you will see Route 193, Greenbelt Road.  Take a left on Greenbelt Road .\n(Greenbelt Road is an overpass over Route 201 that is also known as Route 193.) \nThe park is a quarter mile on the right hand side of Greenbelt Road across from Fridays restaurant)",
      "Keywords": "",
      "RecAreaName": "Greenbelt Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -77.25128326,
          38.98776107
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "gwmp_superintendent@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -77.25128326,
      "RecAreaID": 2735,
      "RecAreaPhone": "",
      "RecAreaDescription": "At Great Falls, the Potomac River builds up speed and force as it falls over a series of steep, jagged rocks and flows through the narrow Mather Gorge. The Patowmack Canal offers a glimpse into the early history of this country.  Great Falls Park has many opportunities to explore history and nature, all in a beautiful 800-acre park only 15 miles from the Nation's Capital.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 38.98776107,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/grfa/planyourvisit/directions.htm\nFrom I-495, take exit 44, Rt. 193 (Georgetown Pike).  Take Georgetown Pike west for 4 miles.  Take a right on Old Dominion Drive. Old Dominion ends at the park's entrance station.\nPublic transportation is not available.  It is possible to take a taxi from the nearest Metro station, West Falls Church.  Beginning in late fall 2013, the new Tysons Metro station will be the closest to the park.\nEntrance fees are $10.00 per private non-commercial vehicle (including passengers) and $5.00 per person entering on foot, horseback, and bicyclists.\nAnnual passes, senior passes, and access passes are available.\nSwimming and wading are illegal.  Stay safe, stay out of the river.",
      "Keywords": "",
      "RecAreaName": "Great Falls Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -112.7467024,
          46.41358923
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "julie_croglio@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -112.7467024,
      "RecAreaID": 2736,
      "RecAreaPhone": "(406) 846 2070",
      "RecAreaDescription": "Wide open spaces, the hard-working cowboy, his spirited cow pony, and vast herds of cattle are among the strongest symbols of the American West. Once the headquarters of a 10 million acre cattle empire, Grant-Kohrs Ranch National Historic Site preserves these symbols and commemorates the role of cattlemen in American history.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 46.41358923,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Grant-Kohrs Ranch is located directly off I-90 midway between Yellowstone NP and Glacier NP in Deer Lodge, Montana. We are easily accessible from the interstate. The ranch is 1/2 mile from exit 184. We can also be accessed from exit 187. After a short 2 mile drive through the city of Deer Lodge you will see Grant-Kohrs Ranch located at the north end of town.</p>\n<p>Grant-Kohrs Ranch National Historic Site is a great place to stop and stretch your legs. There are public restrooms and picnic areas on site.<br />\n </p>",
      "Keywords": "",
      "RecAreaName": "Grant-Kohrs Ranch National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -89.75573031,
          47.99294217
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "GRPO_interpretation@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -89.75573031,
      "RecAreaID": 2737,
      "RecAreaPhone": "",
      "RecAreaDescription": "Travel into the past to discover the present. Explore the partnership of the Grand Portage Ojibwe and the North West Company during the North American fur trade and the NPS today. Follow pathways into a distant time. Experience the sights and smells of a bustling depot reconstructed in its exact location. Hear the beat of the drum echo over Gichigami - Lake Superior.",
      "RecAreaMapURL": "http://www.nps.gov/grpo/planyourvisit/maps.htm",
      "RecAreaLatitude": 47.99294217,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Grand Portage National Monument"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -105.5919572,
          37.79256812
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "grsa_interpretation@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -105.5919572,
      "RecAreaID": 2738,
      "RecAreaPhone": "719-378-6399",
      "RecAreaDescription": "The tallest dunes in North America are the centerpiece in a diverse landscape of grasslands, wetlands, conifer and aspen forests, alpine lakes, and tundra. Experience this diversity through hiking, sand sledding, splashing in Medano Creek, wildlife watching, and more!",
      "RecAreaMapURL": "http://www.nps.gov/grsa/planyourvisit/maps.htm",
      "RecAreaLatitude": 37.79256812,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/grsa/planyourvisit/directions.htm\nTo access the main park area, including the Dunes Parking Lot, Visitor Center, and Pinyon Flats Campground, take Highway 150 from the south or County Road 6 from the west. Both are paved highways. DO NOT USE COMPUTER MAPPING PROGRAMS IN THE ROCKY MOUNTAINS FOR HIGHWAY TRAVEL. The most commonly used web and dashboard mapping programs have directed visitors to drive over hiking trails or primitive 4WD roads to reach the park. Numerous visitors have become stranded in snow or stuck at a remote trailhead trying to use GPS to reach the main park area. Use the map shown, or any Colorado highway map.",
      "Keywords": "",
      "RecAreaName": "Great Sand Dunes National Park & Preserve"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -83.50818326,
          35.60116374
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -83.50818326,
      "RecAreaID": 2739,
      "RecAreaPhone": "",
      "RecAreaDescription": "Ridge upon ridge of forest straddles the border between North Carolina and Tennessee in Great Smoky Mountains National Park. World renowned for its diversity of plant and animal life, the beauty of its ancient mountains, and the quality of its remnants of Southern Appalachian mountain culture, this is America's most visited national park.",
      "RecAreaMapURL": "http://www.nps.gov/grsm/planyourvisit/maps.htm",
      "RecAreaLatitude": 35.60116374,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "The park has three main entrances: Cherokee in North Carolina, and Gatlinburg and Townsend in Tennessee. Please visit the park's website at http://www.nps.gov/grsm/planyourvisit/directions.htm for directions to these entrances.",
      "Keywords": "",
      "RecAreaName": "Great Smoky Mountains National Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -78.16540204,
          38.02745704
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "noel_harrison@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -78.16540204,
      "RecAreaID": 2740,
      "RecAreaPhone": "(540) 371 1112",
      "RecAreaDescription": "Green Springs National Historic Landmark District in Virginia's Piedmont encompasses over 14,000 acres. Its farmsteads offer a continuum of rural vernacular architecture in original context with minimal alteration. Landscapes and buildings, many predating the Civil War and connected to one another visually and through family relationships of early occupants, are today preserved through easements.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 38.02745704,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Green Springs"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2017-04-04",
      "RecAreaEmail": "grte_info@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 2741,
      "RecAreaPhone": "not available",
      "RecAreaDescription": "Rising above a scene rich with extraordinary wildlife, pristine lakes, and alpine terrain, the Teton Range stands monument to the people who fought to protect it. These are mountains of the imagination. Mountains that led to the creation of Grand Teton National Park where you can explore over two hundred miles of trails, float the Snake River or enjoy the serenity of this remarkable place.",
      "RecAreaMapURL": "",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "John D Rockefeller Jr Memorial Parkway"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -79.8424561,
          36.13225478
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "GUCO_Administration@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -79.8424561,
      "RecAreaID": 2742,
      "RecAreaPhone": "",
      "RecAreaDescription": "\"I never saw such fighting since God made me. The Americans fought like demons.\"\n\n-Lt. General Charles, Earl Cornwallis\n\nThe largest battle of the Revolutionary War's Southern Campaign was fought at the small North Carolina backcountry hamlet of Guilford Courthouse. The battle proved to be a turning point for British military operations in the Revolutionary War.",
      "RecAreaMapURL": "http://www.nps.gov/guco/planyourvisit/maps.htm",
      "RecAreaLatitude": 36.13225478,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Guilford Courthouse National Military Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -87.75064297,
          30.29924926
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "guis_information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -87.75064297,
      "RecAreaID": 2743,
      "RecAreaPhone": "",
      "RecAreaDescription": "What is it that entices people to the sea?  Poet John Masefield wrote, \"I must go down to the seas again, for the call of the running tide is a wild call and a clear call that may not be denied.\"  Millions of visitors are drawn to the islands in the northern Gulf of Mexico for the white sandy beaches, the aquamarine waters, a boat ride, a camping spot, a tour of an old fort, or a place to fish.",
      "RecAreaMapURL": "http://www.nps.gov/guis/planyourvisit/maps.htm",
      "RecAreaLatitude": 30.29924926,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Gulf Islands National Seashore"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -104.885527,
          31.92304462
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "gumo_superintendent@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -104.885527,
      "RecAreaID": 2744,
      "RecAreaPhone": "(915) 828 3251",
      "RecAreaDescription": "Guadalupe Mountains National Park is the world's premier example of a fossil reef from the Permian Era.  The park is known for its extensive hiking and backpacking opportunities in one of the nation's most pristine wilderness areas.  Birding, history, and many other opportunities to learn and have fun await visitors in this hidden gem of West Texas.",
      "RecAreaMapURL": "http://www.nps.gov/gumo/planyourvisit/maps.htm",
      "RecAreaLatitude": 31.92304462,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p><strong>By Car<br />\n</strong>Guadalupe Mountains National Park is located in far West Texas on U.S. Highway 62/180. The driving distance is 110 miles east of El Paso, Texas, or 56 miles southwest of Carlsbad, New Mexico.</p>\n<p>Visitors traveling to Dog Canyon, on the park's north side, can access the area via New Mexico State Road 137.</p>\n<p><strong>By Plane<br />\n</strong>The closest large commercial airline service is El Paso, Texas. Other airlines serve Albuquerque, New Mexico, Lubbock and Midland, Texas and Mesa Airlines offers passenger service between Albuquerque and Carlsbad, New Mexico.</p>\n<p><strong>Public Transportation<br />\n</strong>There is no public transportation or shuttle service available in the park.</p>",
      "Keywords": "",
      "RecAreaName": "Guadalupe Mountains National Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -94.35522737,
          36.9871322
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "GWCA_interpretation@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -94.35522737,
      "RecAreaID": 2745,
      "RecAreaPhone": "",
      "RecAreaDescription": "The young child known as the \"Plant Doctor\" tended his secret garden while observing the day-to-day operations of a 19th century farm. Nature and nurture ultimately influenced George on his quest for education to becoming a renowned agricultural scientist, educator, and humanitarian.",
      "RecAreaMapURL": "http://www.nps.gov/gwca/planyourvisit/maps.htm",
      "RecAreaLatitude": 36.9871322,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>From Interstate 44:</p>\n<p>From Exit 11A on I-44, take US 71 south to Highway V. Go east 4 miles, then south ½ mile on Carver Road.</p>\n<p>From Exit 18A on I-44, take Highway 59 south to Diamond. Go west 2 miles on Highway V, then south ½ mile on Carver Road.</p>\n<p>From Neosho, MO:</p>\n<p>Take US 71 north to Highway V. Go east 4 miles, then south ½ mile on Carver Road.</p>\n<p>Take Highway 59 north to Diamond. Go west 2 miles on Highway V, then south ½ mile on Carver Road.<br />\n </p>",
      "Keywords": "",
      "RecAreaName": "George Washington Carver National Monument"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -77.08528147,
          38.85452263
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "gwmp_superintendent@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -77.08528147,
      "RecAreaID": 2746,
      "RecAreaPhone": "703-289-2500",
      "RecAreaDescription": "The George Washington Memorial Parkway was designed for recreational driving. It links sites that commemorate important episodes in American history and preserve habitat for local wildlife. The parkway and its associated trails provide a scenic place to play and rest in the busy Washington, DC metropolitan area.",
      "RecAreaMapURL": "http://www.nps.gov/gwmp/planyourvisit/maps.htm",
      "RecAreaLatitude": 38.85452263,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>The George Washington Memorial Parkway runs between Mount Vernon and I-495 (the Beltway), at exit 45.  Clara Barton and Glen Echo are located in Maryland on the Clara Barton Parkway.  Take exit 41 from I-495.  Great Falls Park is on Georgetown Pike.  Take exit 44 to route 193 West, the park's entrance will be on the right at the first traffic light.</p>",
      "Keywords": "",
      "RecAreaName": "George Washington Memorial Parkway"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -77.74088546,
          39.31865949
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "harpersferry_info@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -77.74088546,
      "RecAreaID": 2747,
      "RecAreaPhone": "(304) 535 6029",
      "RecAreaDescription": "A visit to this quaint, historic community, at the confluence of the Potomac and Shenandoah rivers, is like stepping into the past.  Stroll the picturesque streets, visit exhibits and museums, or hike our trails and battlefields. Spend a day or a weekend.  We have something for everyone, so come and discover Harpers Ferry!",
      "RecAreaMapURL": "http://www.nps.gov/hafe/planyourvisit/maps.htm",
      "RecAreaLatitude": 39.31865949,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "The physical address of the Park Visitor Center is 171 Shoreline Drive, Harpers Ferry, WV 25425\nGPS coordinates are: N39 19.007 - W77 45.381\nGPS Alternatives: 171 Shoreline Drive (Harpers Ferry National Historical Park)\nor try intersection of Shoreline Drive and Campground Road\nFor more (turn by turn directions), see our website: http://www.nps.gov/hafe/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Harpers Ferry National Historical Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -114.9443074,
          42.79074114
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "hafo_information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -114.9443074,
      "RecAreaID": 2748,
      "RecAreaPhone": "(208) 933 4100",
      "RecAreaDescription": "Did you know horses evolved in North America?  The Hagerman Horse, Equus simplicidens, was the first true horse (but its bones resemble Grevy's zebra bones). It's the park's most famous fossil but we have over two hundred different species.  From saber-toothed cat, mastodon, bear, camel, and ground sloth, to much smaller animals, the scientific study of Pliocene fossils is the key to Hagerman.",
      "RecAreaMapURL": "http://www.nps.gov/hafo/planyourvisit/maps.htm",
      "RecAreaLatitude": 42.79074114,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "The Visitor Center is located on Rt. 30, directly across from the high school.",
      "Keywords": "",
      "RecAreaName": "Hagerman Fossil Beds National Monument"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -156.1591775,
          20.70693015
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -156.1591775,
      "RecAreaID": 2751,
      "RecAreaPhone": "(808) 572 4400",
      "RecAreaDescription": "This special place vibrates with stories of ancient and modern Hawaiian culture and protects the bond between the land and its people. The park also cares for endangered species, some of which exist nowhere else. Come visit this special place - renew your spirit amid stark volcanic landscapes and sub-tropical rain forest with an unforgettable hike through the backcountry.",
      "RecAreaMapURL": "http://www.nps.gov/hale/planyourvisit/maps.htm",
      "RecAreaLatitude": 20.70693015,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Haleakalā National Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -155.4700257,
          19.3355036
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "HAVO_interpretation@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -155.4700257,
      "RecAreaID": 2753,
      "RecAreaPhone": "(808) 985 6000",
      "RecAreaDescription": "Volcanoes are monuments to Earth's origin, evidence that its primordial forces are still at work. During a volcanic eruption, we are reminded that our planet is an ever-changing environment whose basic processes are beyond human control. As much as we have altered the face of the Earth to suit our needs, we can only stand in awe before the power of an eruption.",
      "RecAreaMapURL": "http://www.nps.gov/havo/planyourvisit/maps.htm",
      "RecAreaLatitude": 19.3355036,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/havo/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Hawai'i Volcanoes National Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -91.35232139,
          41.66793558
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "heho_interpretation@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -91.35232139,
      "RecAreaID": 2754,
      "RecAreaPhone": "(319) 643 2541",
      "RecAreaDescription": "Born in a two-room cottage, Herbert Hoover could have been any small town boy. Orphaned at age nine, he left West Branch, never to live here again. The landscape and buildings of the early years remain, however, to tell how family, faith, education, and hard work opened a world of opportunity— even the presidency of the United States— to a child of simple beginnings.",
      "RecAreaMapURL": "http://www.nps.gov/heho/planyourvisit/maps.htm",
      "RecAreaLatitude": 41.66793558,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/heho/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Herbert Hoover National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -85.73413589,
          32.97668879
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "HOBE_Information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -85.73413589,
      "RecAreaID": 2755,
      "RecAreaPhone": "",
      "RecAreaDescription": "On 27 March 1814, Major General Andrew Jackson 's army of 3,300 men attacked Chief Menawa's 1,000 Red Stick Creek warriors fortified in a horseshoe shaped bend of the Tallapoosa River.  Over 800 Red Sticks died that day.  The battle ended the Creek War, resulted in a land cession of 23,000,000 acres to the United States and created a national hero of Andrew Jackson.",
      "RecAreaMapURL": "http://www.nps.gov/hobe/planyourvisit/maps.htm",
      "RecAreaLatitude": 32.97668879,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Horseshoe Bend National Military Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -83.08049456,
          39.31594374
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "rick_perkins@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -83.08049456,
      "RecAreaID": 2756,
      "RecAreaPhone": "(740) 774 1126",
      "RecAreaDescription": "Earthen mounds and embankments forming huge geometric enclosures grace the landscape of the Ohio River Valley. These monumental structures were built by Native American hands almost 2,000 years ago. Hopewellian people gathered at these earthworks for feasts, funerals and rites of passage.  Come learn about these sacred spaces and reflect upon the lives of these American Indians.",
      "RecAreaMapURL": "http://www.nps.gov/hocu/planyourvisit/maps.htm",
      "RecAreaLatitude": 39.31594374,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Hopewell Culture National Historical Park is located in south-central Ohio at the foothills of the Appalachian Mountains.<br />\n<br />\nBy Plane</p>\n<p>The nearest airport is the Port Columbus International Airport (CMH) located 55 miles north of the park. From the airport, take I-270 south. Exit on US Route 23 heading south. Exit at State Route 207 just north of Chillicothe and turn right, follow signs to the park via State Route 207 & State Route 104.</p>\n<p>By Car</p>\n<p>The park's Mound City Group Visitor Center in Chillicothe, Ohio is located on US Route 104, two miles north of the US Route 35 overpass.<br />\n<br />\n<br />\n</p>",
      "Keywords": "",
      "RecAreaName": "Hopewell Culture National Historical Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -96.83387781,
          40.28802381
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "susan_cook@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -96.83387781,
      "RecAreaID": 2759,
      "RecAreaPhone": "",
      "RecAreaDescription": "With the promise of Free Land, the Homestead Act of 1862 enticed millions to cultivate the frontier. Families, immigrants, women, and freed slaves flooded 10 percent of the nation's land to chase their American Dream. American Indian cultures and natural environments gave way to diverse settlement, agricultural success, and industrial advancement—building our nation and changing the land forever.",
      "RecAreaMapURL": "http://www.nps.gov/home/planyourvisit/maps.htm",
      "RecAreaLatitude": 40.28802381,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Going east or west on Interstate 80:\nIn Lincoln, exit onto Highway 77 South toward Beatrice. Once in Beatrice, continue with directions below...\n\nFrom Beatrice:\nOnce in downtown Beatrice, head west on Highway 136 (also called Main Street). Noticeable things you will pass are train tracks, a park, and a Dairy Queen. After you pass Casey's General Store/gas station, turn right to go north on Nebraska State Highway 4. After the road has turned west and you have traveled 4 miles, you will enter Homestead National Monument and see signs for the different buildings at the park. First you will pass the Heritage Center on the hill to your left. The Education Center is 3/4 miles further, also on your left. In another 1/4 miles you will reach the Freeman School on your right.",
      "Keywords": "",
      "RecAreaName": "Homestead National Monument of America"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -93.06332936,
          34.52414366
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "HOSP_Interpretation@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -93.06332936,
      "RecAreaID": 2760,
      "RecAreaPhone": "(501) 624 2701",
      "RecAreaDescription": "Water. That's what first attracted people, and they have been coming here ever since to use these soothing thermal waters to heal and relax. Rich and poor alike came for the baths, and a thriving city built up around the hot springs. Together nicknamed \"The American Spa,\" Hot Springs National Park today surrounds the north end of the city of Hot Springs, Arkansas. Come discover it for yourself.",
      "RecAreaMapURL": "http://www.nps.gov/hosp/planyourvisit/maps.htm",
      "RecAreaLatitude": 34.52414366,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/hosp/planyourvisit/directions.htm\n\nDriving Directions\n\nHot Springs National Park is in downtown Hot Springs; Bathhouse Row is on Central Avenue with the mountains of the park flanking the street. Visitors traveling north-south on I-30 take the Hot Springs US 70 West exit south of Benton, the Hot Springs US 270 West exit at Malvern, or the Hot Springs Ark. 7 North exit near Arkadelphia. Visitors traveling south on Ark. 7 will come through downtown Hot Springs where the visitor center is located. Visitors traveling south on US 71 from Fort Smith, or north on US 71 from Texarkana, take the US 270 East exit and take 270B through town. Visitors coming from Oklahoma on US 70 would take US 70B into Hot Springs. When you get into the city you will see signs for the National Park. The Visitor Center is located downtown on Highway 7 North or Central Avenue.",
      "Keywords": "",
      "RecAreaName": "Hot Springs National Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -109.0047977,
          37.39134092
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "hoveinfo@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -109.0047977,
      "RecAreaID": 2761,
      "RecAreaPhone": "(970) 562 4282",
      "RecAreaDescription": "Once home to over 2,500 people, Hovenweep includes six prehistoric villages built between A.D. 1200 and 1300. Explore a variety of structures, including multistory towers perched on canyon rims and balanced on boulders. The construction and attention to detail will leave you marveling at the skill and motivation of the builders.",
      "RecAreaMapURL": "http://www.nps.gov/hove/planyourvisit/maps.htm",
      "RecAreaLatitude": 37.39134092,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Hovenweep National Monument is located along the border between southeast Utah and southwest Colorado, just north and west of Cortez, Colorado.\n\nBy Car\n\nPaved roads lead to the visitor center and Square Tower Group from Cortez, Colorado (County Road G / McElmo Canyon Road), from Highway 191 south of Blanding, Utah, and from Pleasant View, Colorado. All roads into the outlying units are dirt and are not maintained regularly, making them impassable during inclement weather. High-clearance vehicles are recommended for visiting these sites. \n\nBy Bus\n\nCommercial bus and van shuttles service nearby towns, but not Hovenweep specifically.\n\nBy Plane\n\nCommercial airlines serve Cortez and Grand Junction, CO, Salt Lake City and Moab, UT, and Albuquerque, NM as well as other cities in the Four Corners area.\n\nPublic Transportation\n\nThere is no public transportation to Hovenweep.",
      "Keywords": "",
      "RecAreaName": "Hovenweep National Monument"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 2764,
      "RecAreaPhone": "(608) 441 5610",
      "RecAreaDescription": "A mere 15,000 years ago during the Ice Age, much of North America lay under a huge glacier. Mammoths, saber tooth cats and cave lions roamed the earth! Some of the best evidence of this glacier is found in Wisconsin such as the state's many lakes, river valleys, gently rolling hills, and ridges. The nearly 1,200 mile Ice Age National Scenic Trail, established in 1980, traces the glacier's edge.",
      "RecAreaMapURL": "http://www.nps.gov/iatr/planyourvisit/maps.htm",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>The Ice Age National Scenic Trail stretches nearly 1,200 miles across Wisconsin. Its western end is located in Interstate State Park on the St. Croix River in Polk County. The eastern end is located in Potawatomi State Park on Green Bay in Door County.<br />\n<br />\nCommercial airports are located in major cities and regional communities throughout the state at varying distances from the Ice Age National Scenic Trail.<br />\n<br />\nNumerous trailheads with parking are located throughout the state.<br />\n<br />\nSelected points on or near the Ice Age National Scenic Trail are accessible by public transportation. These are typically located in and around metropolitan areas.<br />\n </p>",
      "Keywords": "",
      "RecAreaName": "Ice Age National Scenic Trail"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2013-04-10",
      "RecAreaEmail": "ILMI_Administration@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 2765,
      "RecAreaPhone": "Headquarters 815/588-6040 <br>",
      "RecAreaDescription": "The Illinois & Michigan Canal, completed in 1848, connected the Great Lakes to the Mississippi River watershed along a longstanding Indian portage route. The 97-mile canal extended from the Chicago River near Lake Michigan to the Illinois River at Peru, Illinois.  It rapidly transformed Chicago from a small settlement to a critical transportation hub between the East and the developing Midwest.  The towpath trail along the canal is a State park that runs through a rural and wooded landscape linking a number of towns laid out by the original canal commission.  <P>",
      "RecAreaMapURL": "http://www.nps.gov/ilmi/pphtml/maps.html",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Plane - Both of Chicago's major airports (O'Hare and Midway) are served by numerous airlines. <P> <br>\n\n\tCar - Five interstates (39, 55, 80, 355, and 294) run through or bisect the Corridor.  <P> <br>\n\n\t\n\n\tPublic Transportation - Pace Suburban Bus Service (847) 364-7223 operates between Midway Airport and Joliet, and the Chicago metropolitan region. METRA (Metropolitan Rail) (312) 322-6777 operates two lines between Chicago and Joliet: the Heritage Corridor and the Rock Island. Amtrak (1-800-USA-RAIL) has stops in Chicago (Union Station), Summit and Joliet. <P>",
      "Keywords": "",
      "RecAreaName": "Illinois & Michigan Canal National Heritage Corridor"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -75.14794157,
          39.94746112
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "indevisitorinfo@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -75.14794157,
      "RecAreaID": 2766,
      "RecAreaPhone": "(215) 597 8787",
      "RecAreaDescription": "Goods, ideas, and people intermingled in early Philadelphia.  In this diverse city, a new republic was born.  The Declaration of Independence and U.S. Constitution were both debated and signed inside Independence Hall.  Nearby sits the Liberty Bell, an international symbol of liberty.",
      "RecAreaMapURL": "http://www.nps.gov/inde/planyourvisit/maps.htm",
      "RecAreaLatitude": 39.94746112,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "From the South\nTake I-95 North.\nFollow signs for Central Phila./I-676 (Exit 22).\nFollow signs for Phila./Independence Hall/Callowhill Street.\nKeep right at the ramp fork.\nStay straight on Callowhill Street.\nTurn left onto North 6th Street.\nThe parking facility is under our building on the left side of 6th Street between Arch and Market Streets. \n\nvia Benjamin Franklin Bridge:\nTake the NJ Turnpike to Exit 4.\nTake Route 73 North to Route 38 West to US-30.\nTake US-30 West over the Benjamin Franklin Bridge to I-676.\nFollow signs for 5th and 6th Streets.\nStay in right lane.\nGo past 5th Street exit.\nFollow signs for Independence Hall/6th Street.\nMake a right at the first light onto Franklin Street.\nGo around bend.\nMerge onto 6th Street South.\nStay to your left toward 6th Street/Independence Hall.\nThe parking facility is under our building on the left side of 6th Street between Arch and Market Streets.",
      "Keywords": "",
      "RecAreaName": "Independence National Historical Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -87.09647445,
          41.63765525
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "INDU_Communications@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -87.09647445,
      "RecAreaID": 2767,
      "RecAreaPhone": "",
      "RecAreaDescription": "Indiana Dunes National Lakeshore hugs 15 miles of the southern shore of Lake Michigan and has much to offer. Whether you enjoy scouting for rare species of birds or flying kites on the sandy beach, the national lakeshore's 15,000 acres will continually enchant you.  Hikers will enjoy 50 miles of trails over rugged dunes, mysterious wetlands, sunny prairies, meandering rivers and peaceful forests.",
      "RecAreaMapURL": "http://www.nps.gov/indu/planyourvisit/maps.htm",
      "RecAreaLatitude": 41.63765525,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Indiana Dunes National Lakeshore"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -88.82780657,
          48.01145819
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "ISRO_ParkInfo@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -88.82780657,
      "RecAreaID": 2769,
      "RecAreaPhone": "",
      "RecAreaDescription": "Explore a rugged, isolated island, far from the sights and sounds of civilization. Surrounded by Lake Superior, Isle Royale offers unparalleled solitude and adventures for backpackers, hikers, boaters, kayakers, canoeists and scuba divers. Here, amid stunning scenic beauty, you'll find opportunities for reflection and discovery, and make memories that last a lifetime.",
      "RecAreaMapURL": "http://www.nps.gov/isro/planyourvisit/maps.htm",
      "RecAreaLatitude": 48.01145819,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Isle Royale National Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -76.75469561,
          37.20027185
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "kirk_kehrberg@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -76.75469561,
      "RecAreaID": 2771,
      "RecAreaPhone": "(757) 898 2400",
      "RecAreaDescription": "Walk in the steps of Captain John Smith and Pocahontas where a successful English colonization of North America began.  Despite early struggles to survive, the 1607 settlement evolved into a prosperous colony.  As the colony expanded, the Virginia Indians were pushed out of their homeland.  In 1619, the arrival of Africans was recorded, marking the origin of slavery in English North America.",
      "RecAreaMapURL": "",
      "RecAreaLatitude": 37.20027185,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Historic Jamestowne Part of Colonial National Historical Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -103.829994,
          43.73102945
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "jeca_interpretation@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -103.829994,
      "RecAreaID": 2772,
      "RecAreaPhone": "(605) 673 8300",
      "RecAreaDescription": "Immerse yourself within the third longest cave in the world. With over 180 miles of mapped and surveyed passages, this underground wilderness appeals to human curiosity. Its splendor is revealed through fragile formations and glimpses of brilliant color. Its maze of passages lure explorers, and its scientific wealth remains a mystery. This resource is truly a jewel in the National Park Service.",
      "RecAreaMapURL": "http://www.nps.gov/jeca/planyourvisit/maps.htm",
      "RecAreaLatitude": 43.73102945,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p><strong>Plane</strong></p>\n<p>The nearest major airport is 54 miles away in Rapid City, South Dakota.</p>\n<p><strong>Car </strong></p>\n<p>The main Visitor Center and cave entrance are 13 miles west of Custer, South Dakota on U.S. Highway 16, and about 24 miles east of Newcastle, Wyoming on U.S. Highway 16, and 53 miles from Rapid City, South Dakota via U.S. Highway 16 West and 385. <br />\n </p>\n<p> </p>",
      "Keywords": "",
      "RecAreaName": "Jewel Cave National Monument"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -119.8811491,
          44.62566508
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "joda_interpretation@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -119.8811491,
      "RecAreaID": 2777,
      "RecAreaPhone": "",
      "RecAreaDescription": "Colorful rock formations at John Day Fossil Beds preserve a world class record of plant and animal evolution, changing climate, and past ecosystems that span over 40 million years.  Exhibits and a working lab at the Thomas Condon Paleontology Center as well as scenic drives and hikes at all three units allow visitors to explore the prehistoric past of Oregon and see science in action.",
      "RecAreaMapURL": "http://www.nps.gov/joda/planyourvisit/maps.htm",
      "RecAreaLatitude": 44.62566508,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "John Day Fossil Beds National Monument"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -78.77448601,
          40.34584534
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "Nathan_Koozer@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -78.77448601,
      "RecAreaID": 2780,
      "RecAreaPhone": "(814) 495 4643",
      "RecAreaDescription": "The South Fork dam failed on Friday, May 31, 1889 and unleashed 20,000,000 tons of water that devastated Johnstown, PA.  The flood killed 2,209 people but it brought the nation and the world together to aid the \"Johnstown sufferers.\"  The story of the Johnstown Flood reminds us all, \"...that we must leave nothing undone for the preservation and protection of our brother men.\"",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 40.34584534,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Car<br />\nTake US 219 to Saint Michael/Sidman exit. Head East on PA 869. Turn left onto Lake Road at sign for Johnstown Flood National Memorial<br />\n<br />\n </p>",
      "Keywords": "",
      "RecAreaName": "Johnstown Flood National Memorial"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -115.8398125,
          33.91418525
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "jotr_info@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -115.8398125,
      "RecAreaID": 2782,
      "RecAreaPhone": "(760) 367 5500",
      "RecAreaDescription": "Two distinct desert ecosystems, the Mojave and the Colorado, come together in Joshua Tree National Park. A fascinating variety of plants and animals make their homes in a land sculpted by strong winds and occasional torrents of rain. Dark night skies, a rich cultural history, and surreal geologic features add to the wonder of this vast wilderness in southern California. Come explore for yourself.",
      "RecAreaMapURL": "http://www.nps.gov/jotr/planyourvisit/maps.htm",
      "RecAreaLatitude": 33.91418525,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Joshua Tree National Park is located about 140 miles east of Los Angeles, 175 miles northeast of San Diego, 215 miles southwest of Las Vegas, Nevada, and 222 miles west of Phoenix, Arizona. You can approach Joshua Tree from Interstate 10 or California Highway 62 (the Twentynine Palms Highway). See http://www.nps.gov/jotr/planyourvisit/directions.htm for more information.\n\nDo not rely on GPS directions to navigate to or within Joshua Tree National Park! Vehicle navigation systems sometimes try to route you onto backcountry roads with ruts or soft sand that may be impassable to your vehicle.",
      "Keywords": "",
      "RecAreaName": "Joshua Tree National Park"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "hale_sargent@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 2783,
      "RecAreaPhone": "(510) 817 1323",
      "RecAreaDescription": "\"¡Vayan Subiendo!\"(\"Everyone mount up!\") was the rousing call from Juan Bautista de Anza. In 1775-76, he led some 240 men, women, and children on an epic journey to establish the first non-Native settlement at San Francisco Bay. Today, the 1,200-mile Juan Bautista de Anza National Historic Trail connects history, culture, and outdoor recreation from Nogales, Arizona, to the San Francisco Bay Area.",
      "RecAreaMapURL": "http://www.nps.gov/juba/planyourvisit/maps.htm",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "The 1,200-mile Juan Bautista de Anza National Historic Trail links culture, history, and outdoor recreation through 20 counties in Arizona and California. Sites along the Anza Trail are administered by local cities, counties and organizations, as well as state and federal agencies. Explore an online map at http://www.anzahistorictrail.org",
      "Keywords": "",
      "RecAreaName": "Juan Bautista de Anza National Historic Trail"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -156.0306932,
          19.68083237
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "ruth_aloua@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -156.0306932,
      "RecAreaID": 2784,
      "RecAreaPhone": "808-326-9057",
      "RecAreaDescription": "To survive in a hot and arid environment the native Hawaiians (kanaka maoli) used ancient fishing skills, including the building of fishponds, and the knowledge of the location of precious fresh water (wai) that flows into the many brackish pools throughout the park. The spirit of the people (poe) and the knowledge of the elders (kupuna) created a tradition of respect and reverence for this area.",
      "RecAreaMapURL": "http://www.nps.gov/kaho/planyourvisit/maps.htm",
      "RecAreaLatitude": 19.68083237,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Kaloko-Honokōhau National Historical Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -156.9511609,
          21.1731108
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "KALA_Administration@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -156.9511609,
      "RecAreaID": 2785,
      "RecAreaPhone": "(808) 567 6802",
      "RecAreaDescription": "When Hansen's disease (leprosy) was introduced to the Hawaiian Islands, King Kamehameha V banished all afflicted to the isolated Kalaupapa peninsula on the north shore of Molokai.  \n\nSince 1866, more than 8000 people, mostly Hawaiians, have died at Kalaupapa. Once a prison, Kalaupapa is now refuge for the few remaining residents who are now cured, but were forced to live their lives in isolation.",
      "RecAreaMapURL": "http://www.nps.gov/kala/planyourvisit/maps.htm",
      "RecAreaLatitude": 21.1731108,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Kalaupapa National Historical Park is an extremely isolated place, surrounded on three sides by ocean and 2000 foot cliffs on the fourth. Consequently, there is no road access into the peninsula and Kalaupapa cannot be reached by automobile. To get to the park visitors must travel by air, on foot, or on mule.  For additional information, please refer to the park website: http://www.nps.gov/kala/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Kalaupapa National Historical Park"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2014-01-27",
      "RecAreaEmail": "KATM_Visitor_Information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 2786,
      "RecAreaPhone": "",
      "RecAreaDescription": "Katmai National Monument was established in 1918 to protect the volcanically devastated region surrounding Mount Katmai and the Valley of Ten Thousand Smokes. Today, Katmai National Park and Preserve remains an active volcanic landscape, but it also protects 9,000 years of human history as well as important habitat for salmon and the thousands of brown bears that feed on them.",
      "RecAreaMapURL": "http://www.nps.gov/katm/planyourvisit/maps.htm",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Katmai National Park & Preserve is located on the Alaska Peninsula, across the Shelikof Strait from Kodiak Island. Park Headquarters is in King Salmon, about 290 air miles southwest of Anchorage. Several commercial airlines provide daily flights into King Salmon as there is no road access. Brooks Camp, approximately 30 air miles from King Salmon, is a common destination for visitors to the Park. Brooks Camp can only be reached via small float plane or boat.",
      "Keywords": "",
      "RecAreaName": "Katmai National Park & Preserve"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -150.106502,
          59.81804414
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "kefj_information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -150.106502,
      "RecAreaID": 2787,
      "RecAreaPhone": "(907) 422 0500",
      "RecAreaDescription": "At the edge of the Kenai Peninsula lies a land where the ice age lingers. Nearly 40 glaciers flow from the Harding Icefield, Kenai Fjords' crowning feature. Wildlife thrives in icy waters and lush forests around this vast expanse of ice. Native Alutiiq relied on these resources to nurture a life entwined with the sea. Today, shrinking glaciers bear witness to the effects of our changing climate.",
      "RecAreaMapURL": "http://www.nps.gov/kefj/planyourvisit/maps.htm",
      "RecAreaLatitude": 59.81804414,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Kenai Fjords National Park is located just outside the town of Seward in south-central Alaska, 126 miles south of Anchorage. Seward is accessible year-round via the Seward Highway, a National Scenic Byway. \n\nFollow the Seward Highway (AK-1) south from Anchorage. It will become AK-9 around mile 35 (87 miles from Anchorage) with AK-1 heading to Homer and Kenai. Continue on AK-9 to Seward.\n\n- Information Center (summer only): Turn left on S. Harbor Street (mile post 1). Go one block, and turn right on Fourth Street. It will be the second building on the left. \n\n- Exit Glacier Area / Nature Center / trails / campground (summer only): Turn right on to Herman Leirer Road (mile 3), and proceed 8 miles. The road will end at the parking lot for the nature center.\n\n- Administrative Offices (contact station for winter): Turn left on Washington Street (mile post 0). Continue across Fourth Street, and building will be on right.",
      "Keywords": "",
      "RecAreaName": "Kenai Fjords National Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -84.59214186,
          33.95370717
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "KEMO_Superintendent@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -84.59214186,
      "RecAreaID": 2788,
      "RecAreaPhone": "",
      "RecAreaDescription": "Kennesaw Mountain National Battlefield Park is a 2,965 acre National Battlefield that preserves a Civil War battleground of the Atlanta Campaign. Opposing forces maneuvered and fought here from June 19, 1864 until July 2, 1864. Although most famous as a Civil War battlefield, Kennesaw Mountain has a much richer story.",
      "RecAreaMapURL": "http://www.nps.gov/kemo/planyourvisit/maps.htm",
      "RecAreaLatitude": 33.95370717,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/kemo/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Kennesaw Mountain National Battlefield Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -76.94340616,
          38.91284776
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -76.94340616,
      "RecAreaID": 2789,
      "RecAreaPhone": "(202) 426-5991",
      "RecAreaDescription": "In an age old dance wind, water, and land combine here.  Sparkling in the sun on a breezy day, this natural area of Anacostia Park has origins in a 1926 act of Congress to preserve the forests, water quality, and recreation value of the waterways of Washington, DC.  The park reflects the policies that affect rivers and wetlands.  Come, join the dance.",
      "RecAreaMapURL": "http://www.nps.gov/keaq/planyourvisit/maps.htm",
      "RecAreaLatitude": 38.91284776,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Take Route 295 southbound if you are coming from north of Route 50 or Route 50, to the Eastern Avenue Exit. Go straight up the exit ramp. Make a right onto Douglas Street. At the end of Douglas Street, make another right onto Anacostia Avenue to get to Kenilworth Aquatic Gardens. Go left to get to Kenilworth Recreation Park.\nIf you are coming from south of Route 50, take Route 295 north to the Burroughs Street Exit. At the bottom of the ramp turn left. Go straight to Kenilworth Recreation Park. To get to Aquatic Gardens, go to the right of the athletic field entrance to follow Lee Street to 40th around a curve to Anacostia Avenue. Pass a hand ball court and wooded area to the gardens on your left.\nBy Metro: Take the Deanwood stop on the Orange line. Exit metro station to the left towards Polk St. Go straight and take the pedestrian overpass across Kenilworth Avenue and go left on Douglas Street. Go right on Anacostia Avenue and enter any open gate on your left.",
      "Keywords": "",
      "RecAreaName": "Kenilworth Park & Aquatic Gardens"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -88.52275344,
          47.1792308
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "KEWE_Information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -88.52275344,
      "RecAreaID": 2790,
      "RecAreaPhone": "",
      "RecAreaDescription": "From 7,000 years ago to the 1900s people mined Keweenaw copper. Native peoples made copper into tools and trade items. Investors and immigrants arrived in the 1800s in a great mineral rush, developing thriving industries and cosmopolitan communities. Though the mines have since closed, their mark is still visible on the land and people.",
      "RecAreaMapURL": "http://www.nps.gov/kewe/planyourvisit/maps.htm",
      "RecAreaLatitude": 47.1792308,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Keweenaw National Historical Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -81.38978712,
          35.13900723
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "KIMO_superintendent@nps.gov, Katherine_Lynn@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -81.38978712,
      "RecAreaID": 2791,
      "RecAreaPhone": "",
      "RecAreaDescription": "Thomas Jefferson called it \"The turn of the tide of success.\" The battle of Kings Mountain, fought October 7th, 1780, was an important American victory during the Revolutionary War. The battle was the first major patriot victory to occur after the British invasion of Charleston, SC in May 1780. The park preserves the site of this important battle.",
      "RecAreaMapURL": "http://www.nps.gov/kimo/planyourvisit/maps.htm",
      "RecAreaLatitude": 35.13900723,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Plane</p>\n<p>Large airline carriers operate in Charlotte, NC and Greenville, SC. Both cities are within an hours drive of the park. Car rentals are available at both locations.</p>\n<p>Car</p>\n<p>Kings Mountain National Military Park is located on South Carolina Highway 216. From Greenville, SC travel on I-85 North to NC Exit #2, turn right. From Charlotte, NC travel on I- 85 South to NC Exit #2, turn left.<br />\n </p>\nTo reach the physical address of the Visitor Center please use the following coordinates:<br />\n<p>Lat / Long: 35.14044 / -81.37700</p>",
      "Keywords": "",
      "RecAreaName": "Kings Mountain National Military Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -135.2618535,
          59.61042373
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "KLGO_Ranger_Activities@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -135.2618535,
      "RecAreaID": 2792,
      "RecAreaPhone": "(907) 983 9200",
      "RecAreaDescription": "Headlines screamed \"Gold!\" The dream of a better life catapulted thousands of people to Alaska and the Yukon Territory. Their journey shaped them, and changed the people they encountered and the north forever. Today, the park remembers the trails, boomtowns, and stories of the Klondike Gold Rush.",
      "RecAreaMapURL": "http://www.nps.gov/klgo/planyourvisit/maps.htm",
      "RecAreaLatitude": 59.61042373,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Skagway is situated at the northernmost point of the Inside Passage in southeast Alaska. Located just 96 air miles north of Juneau and 110 highway miles south of Whitehorse, Canada, Skagway can be reached by land, sea or air.</p>",
      "Keywords": "",
      "RecAreaName": "Klondike Gold Rush National Historical Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -122.3319664,
          47.5993663
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "KLSE_ranger_activities@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -122.3319664,
      "RecAreaID": 2793,
      "RecAreaPhone": "(206) 220 4240",
      "RecAreaDescription": "The Seattle unit of the Klondike Gold Rush National Historical Park preserves the story of the stampede to the Yukon gold fields and Seattle's crucial role in this event. The headlines of a Seattle newspaper on July 17, 1897, Gold! Gold! Gold! Gold! ignited dreams of easy riches in the minds of thousands as word of a rich gold strike in northwestern Canada. A dream that would prove all but dream.",
      "RecAreaMapURL": "http://www.nps.gov/klse/planyourvisit/maps.htm",
      "RecAreaLatitude": 47.5993663,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "The park's address is 319 Second Avenue South, Seattle, WA 98104. It is located entirely within a brick three-story building at the northwest corner of Second Avenue South and South Jackson Street. Park signage is extremely small and often missed. The park entrance is about forty feet east of the sign for the Cadillac Hotel.\n\nStreet parking near the park is metered, scant and limited to two hours. Sundays and holidays  street parking is free. The park is within walking distance of several mass transit facilities; the International District light rail and bus station; the Washington State Ferry Terminal (Pier 52); the West Seattle/Downtown Seattle Water Taxi (Pier 50); and the King Street Station (Amtrak and Sounder trains).",
      "Keywords": "",
      "RecAreaName": "Klondike Gold Rush - Seattle Unit National Historical Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -101.3860533,
          47.3540219
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -101.3860533,
      "RecAreaID": 2794,
      "RecAreaPhone": "",
      "RecAreaDescription": "Earthlodge people hunted bison and other game, but were in essence farmers living in villages along the Missouri and its tributaries. The site was a major Native American trade center for hundreds of years prior to becoming an important market place for fur traders after 1750.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 47.3540219,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p><strong>Plane</strong><br />\nFly into Bismarck or Minot, ND. Hazen, ND (15 miles from site) has an airport for small planes.</p>\n<p><strong>Car<br />\n</strong>One-half mile north of Stanton, ND on County Road 37. One hour northwest of Bismarck,ND and one and half hour southwest of Minot,ND</p>\n<p><strong>Public Transportation<br />\n</strong>Charter and tour bus parking available at Visitor Center parking lot<br />\n </p>",
      "Keywords": "",
      "RecAreaName": "Knife River Indian Villages National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -159.2002293,
          67.35631336
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "WEAR_webmail@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -159.2002293,
      "RecAreaID": 2795,
      "RecAreaPhone": "",
      "RecAreaDescription": "Caribou, sand dunes, the Kobuk River, Onion Portage - just some of the facets of Kobuk Valley National Park. Half a million caribou migrate through, their tracks crisscrossing sculpted dunes. The Kobuk River is an ancient and current path for people and wildlife. For 9000 years, people came to Onion Portage to harvest caribou as they swam the river. Even today, that rich tradition continues.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 67.35631336,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Kobuk Valley National Park is a remote area. There are no roads that provide access.</p>\n<p>Commercial airlines provide service from Anchorage to Kotzebue or Fairbanks to Bettles. Once in Kotzebue or Bettles, you must fly to the park with various air taxi operators. There are scheduled flights to villages and chartered flights to remote park areas. Summer access may include motorized/non-motorized watercraft, aircraft, or by foot. (Note: Traveling by foot in the summer would be an arduous, roundabout journey.) Winter access may include snowmobiles, aircraft or by foot.</p>\n<p> </p>",
      "Keywords": "",
      "RecAreaName": "Kobuk Valley National Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -121.5172189,
          41.75915823
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "labe_interpretation@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -121.5172189,
      "RecAreaID": 2797,
      "RecAreaPhone": "",
      "RecAreaDescription": "Lava Beds National Monument is a land of turmoil, both geological and historical. Over the last half-million years, volcanic eruptions on the Medicine Lake shield volcano have created a rugged landscape dotted with diverse volcanic features. More than 700 caves, Native American rock art sites, historic battlefields and campsites, and a high desert wilderness experience await you!",
      "RecAreaMapURL": "http://www.nps.gov/labe/planyourvisit/maps.htm",
      "RecAreaLatitude": 41.75915823,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Lava Beds is a truly remote park, in a corner of California most people never visit. Most roads into this area wind through mountains and along rivers, and travel takes longer than most visitors are accustomed to. Services may be few and far between, and winter driving conditions can be encountered anytime between fall and spring.\n\nHowever, the Lava Beds visitor is rewarded not only with a myriad of exciting outdoor opportunities, but with sweeping vistas, quiet places, dark night skies, and the opportunity to experience plenty of other outdoor adventures along the way.\n\nIf you can allot an extra day, or two or three, for your visit to Lava Beds and the surrounding area, you won't regret it!\n\nFor more inforamtion on how to get here please visit http://www.nps.gov/labe/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Lava Beds National Monument"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -120.6844858,
          48.35377221
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "noca_interpretation@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -120.6844858,
      "RecAreaID": 2798,
      "RecAreaPhone": "(360) 854 7200",
      "RecAreaDescription": "Less than three hours from Seattle, an alpine landscape beckons. Discover communities of life adapted to moisture in the west and recurring fire in the east. Explore jagged peaks crowned by more than 300 glaciers. Listen to cascading waters in forested valleys. Witness a landscape sensitive to the Earth's changing climate. Help steward the ecological heart of the Cascades.",
      "RecAreaMapURL": "http://www.nps.gov/noca/planyourvisit/maps.htm",
      "RecAreaLatitude": 48.35377221,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Lake Chelan National Recreation Area"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -153.55535,
          60.57405857
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "LACL_visitor_information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -153.55535,
      "RecAreaID": 2799,
      "RecAreaPhone": "(806) 814 9894",
      "RecAreaDescription": "Lake Clark National Park is a land of stunning beauty where volcanoes steam, salmon run, bears forage, craggy mountains reflect in shimmering turquoise lakes, and local people and culture still depend on the land and water of their home.  Solitude is found around every bend in the river and shoulder of a mountain.  Venture into the park to become part of the wilderness.",
      "RecAreaMapURL": "http://www.nps.gov/lacl/planyourvisit/maps.htm",
      "RecAreaLatitude": 60.57405857,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Air Charter Services<br />\nAccess to the Lake Clark region is by small aircraft and many air taxi services provide transportation to the park. Float planes may land on the many lakes throughout the area. Wheeled planes land on open beaches, gravel bars, or private airstrips in or near the park. A one to two-hour flight from Anchorage, Kenai or Homer will provide access to most points within the park and preserve.</p>\n<p>Car<br />\nThere is no highway access to the park and preserve.</p>\nVisit http://www.nps.gov/lacl/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Lake Clark National Park & Preserve"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -101.6820066,
          35.61926203
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "Lamr_Interpretation@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -101.6820066,
      "RecAreaID": 2801,
      "RecAreaPhone": "(806) 857 3151",
      "RecAreaDescription": "Within the dry and windswept high plains of the Texas Panhandle lies a hidden oasis, a welcoming haven where wildlife and humans find respite from the dry grasslands above. Through this plain, the Canadian River has cut dramatic 200-foot canyons, or breaks, where humans have eked out a living for over 13,000 years. Lake Meredith now occupies these hidden coves where early humans once roamed.",
      "RecAreaMapURL": "http://www.nps.gov/lamr/planyourvisit/maps.htm",
      "RecAreaLatitude": 35.61926203,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>There are several different ways to get to Lake Meredith. If you are coming from Amarillo, exit Loop 335 North, then exit Hwy 136 North to Fritch. Headquarters is located at 419 E. Broadway in Fritch. If coming from the North you can take 1913 from the Dumas Highway or 1913 from US 287.</p>\n<p>The airport in Amarillo is approximately 35 miles south of Lake Meredith if traveling by air. Rental Cars are available.<br />\n<br />\n </p>",
      "Keywords": "",
      "RecAreaName": "Lake Meredith National Recreation Area"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -118.3513713,
          48.17148735
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "laro_web_master@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -118.3513713,
      "RecAreaID": 2802,
      "RecAreaPhone": "",
      "RecAreaDescription": "In 1941 the Grand Coulee Dam was built on the Columbia River as part of the Columbia River Basin project, creating a 130-mile long lake. Named for President Franklin D. Roosevelt, Lake Roosevelt National Recreation Area provides opportunities for boating, fishing, swimming, camping, canoeing, hunting and visiting historic Fort Spokane and St. Paul's Mission.",
      "RecAreaMapURL": "http://www.nps.gov/laro/planyourvisit/maps.htm",
      "RecAreaLatitude": 48.17148735,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "From Spokane, Seattle, and Wenatchee, the Grand Coulee and Fort Spokane areas of Lake Roosevelt are accessible from many points on U.S. Highway 2. The Kettle Falls area can be reached by taking U.S. Highway 395 North through Colville from Spokane or by taking State Route 20 East from the Okanogan Valley.\n\nFor more information, please visit http://www.nps.gov/laro/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Lake Roosevelt National Recreation Area"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -121.4075993,
          40.49354575
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "LAVO_information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -121.4075993,
      "RecAreaID": 2803,
      "RecAreaPhone": "",
      "RecAreaDescription": "Lassen Volcanic National Park is home to steaming fumaroles, meadows freckled with wildflowers, clear mountain lakes, and numerous volcanoes. Jagged peaks tell the story of its eruptive past while hot water continues to shape the land. Lassen Volcanic offers opportunities to discover the wonder and mysteries of volcanoes and hot water for visitors willing to explore the undiscovered.",
      "RecAreaMapURL": "http://www.nps.gov/lavo/planyourvisit/maps.htm",
      "RecAreaLatitude": 40.49354575,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Lassen Volcanic National Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -95.9245147705,
          41.2646141052
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "lecl_information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -95.9245147705,
      "RecAreaID": 2804,
      "RecAreaPhone": "",
      "RecAreaDescription": "Between May 1804 and September 1806, 31 men, one woman, and a baby traveled from the plains of the Midwest to the shores of the Pacific Ocean. They called themselves the Corps of Discovery. In their search for a water route to the Pacific Ocean, they opened a window into the west for the young United States.",
      "RecAreaMapURL": "http://www.nps.gov/lecl/planyourvisit/maps.htm",
      "RecAreaLatitude": 41.2646141052,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/lecl/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Lewis & Clark National Historic Trail"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -107.4183614,
          45.55633048
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "jerry_jasmer@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -107.4183614,
      "RecAreaID": 2805,
      "RecAreaPhone": "(406) 638 2621",
      "RecAreaDescription": "This area memorializes the U.S. Army's 7th Cavalry and the Sioux and Cheyenne in one of the Indian's last armed efforts to preserve their way of life. Here on June 25 and 26 of 1876, 263 soldiers, including Lt. Col. George A. Custer and attached personnel of the U.S. Army, died fighting several thousand Lakota, and Cheyenne warriors.",
      "RecAreaMapURL": "http://www.nps.gov/libi/planyourvisit/maps.htm",
      "RecAreaLatitude": 45.55633048,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>By airplane: Billings Logan International Airport is located 65 miles NW<br />\nAirport in Sheridan, Wyoming, 73 miles to the South.</p>\n<p>By car: Interstate 90, Exit 510 at Jct 212.</p>\n<p>By Public Transportation: Bus service available at Billings, MT, Sheridan, WY with travel to Crow Agency, Montana, 1.5 miles NW of the Little Bighorn Monument.<br />\n </p>",
      "Keywords": "",
      "RecAreaName": "Little Bighorn Battlefield National Monument"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -85.61734327,
          34.41461863
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "Liri_Information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -85.61734327,
      "RecAreaID": 2809,
      "RecAreaPhone": "",
      "RecAreaDescription": "Little River is unique because it flows for most of its length atop Lookout Mountain in northeast Alabama. Forested uplands, waterfalls, canyon rims and bluffs, pools, boulders, and sandstone cliffs offer settings for a variety of recreational activities. Natural resources and cultural heritage come together to tell the story of the Preserve, a special place in the Southern Appalachians.",
      "RecAreaMapURL": "http://www.nps.gov/liri/planyourvisit/maps.htm",
      "RecAreaLatitude": 34.41461863,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "For GPS users: 472 AL Hwy 35, Fort Payne, AL 35967\nFrom I-59 S take Exit 222, Left - follow Gault Avenue to AL Hwy 35, Left (by City Park) - follow AL Hwy 35 up the mountain. Just before bridge is gate to come to Little River Canyon Center.\nFrom I-59 N take Exit 218, Right - Follow Glenn Blvd to US Hwy 11, Left - follow Gault Ave S to AL Hwy 35 (by City Park) - follow AL Hwy 35 up the mountain. Just before the bridge is gate to come to Little River Canyon Center.\nFrom Georgia, follow GA 20 to AL 9 to AL 35 to AL Hwy 35 bridge, turn Right into gate to Little River Canyon Center.",
      "Keywords": "",
      "RecAreaName": "Little River Canyon National Preserve"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -77.05145832,
          38.87858036
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "gwmp_superintendent@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -77.05145832,
      "RecAreaID": 2813,
      "RecAreaPhone": "(703) 289 2500",
      "RecAreaDescription": "From this distance the seat of national power appears pristine across the river, so President Johnson came here often when he needed to escape from the stresses of building a Great Society. After he died, his wife chose this place for his memorial. A landscape of serpentine paths, white pines, a granite monolith, and an open meadow honors his legacy of social justice and conservation legislation.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 38.87858036,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>The LBJ Memorial Grove is located near the Pentagon and Arlington Memorial Cemetery.</p>\n<p>The George Washington Memorial Parkway provides direct access to the LBJ Grove parking areas.  The LBJ Grove is accessable from all major travel routes from the South and West of Washington, including I-495, I-395, and I-66.</p>",
      "Keywords": "",
      "RecAreaName": "LBJ Memorial Grove on the Potomac"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -98.60692433,
          30.2519655
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "Liz_Lindig@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -98.60692433,
      "RecAreaID": 2814,
      "RecAreaPhone": "",
      "RecAreaDescription": "---Lyndon Baines Johnson\n\nLyndon B. Johnson National Historical Park tells the story of our 36th President beginning with his ancestors until his final resting place on his beloved LBJ Ranch. This entire \"circle of life\" gives the visitor a unique perspective into one of America's most noteworthy citizens by providing the most complete picture of any American president.",
      "RecAreaMapURL": "http://www.nps.gov/lyjo/planyourvisit/maps.htm",
      "RecAreaLatitude": 30.2519655,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Lyndon B Johnson National Historical Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -68.4110870361,
          47.2831115723
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "acadia_information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -68.4110870361,
      "RecAreaID": 2815,
      "RecAreaPhone": "207-728-6826",
      "RecAreaDescription": "Maine Acadians share beliefs and experiences tying them to a common religion, languages, and history. The St. John River, land, and family are essential to their culture. The National Park Service supports the Maine Acadian Heritage Council, an association of historical societies, cultural clubs, towns, and museums that work together to support Maine Acadian culture in the St. John Valley.",
      "RecAreaMapURL": "http://www.nps.gov/maac/planyourvisit/maps.htm",
      "RecAreaLatitude": 47.2831115723,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "By Car\nThe Saint John Valley is located in northern Aroostook County, Maine, 200 miles north of Bangor at the northern terminus of U.S. Route 1. It is best reached by private vehicle. From Interstate 95, use exits at Sherman or Smyrna Mills for Route 11 to Fort Kent, or the exit at Houlton for U.S. Route 1 North.\n\nBy Plane\nNorthern Maine Regional Airport at Presque Isle\nFlights and rental cars are available. For more information, call 207-764-2550.\n\nFrenchville Airport (Maine)\nFor information about charter air service, call the airport at 207-543-6300. Rental cars are available at the airport by reservation only, as vehicles are not based at the airport.\n\nSt. Leonard Regional Airport (Canada)\nCharter or private airplane services only. There are rental cars available at the airport. For more information, call 506-423-7571.",
      "Keywords": "",
      "RecAreaName": "Maine Acadian Culture"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -72.53424638,
          43.63348732
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "MABI_Superintendent@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -72.53424638,
      "RecAreaID": 2817,
      "RecAreaPhone": "(802) 457 3368",
      "RecAreaDescription": "The forest & fields in their white winter cloak are a place of magic & sublime beauty. Grab your skis or snowshoes & adventure along the park's groomed ski trails and natural back-country trails.  Ski passes are required for the groomed trails - available from the Woodstock Nordic Center. Check out our winter weekend programs to learn about the snowy inhabitants & history of this storied landscape",
      "RecAreaMapURL": "http://www.nps.gov/mabi/planyourvisit/maps.htm",
      "RecAreaLatitude": 43.63348732,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/mabi/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Marsh - Billings - Rockefeller National Historical Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -86.13090198,
          37.19760458
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "MACA_Information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -86.13090198,
      "RecAreaID": 2818,
      "RecAreaPhone": "(270) 758 2180",
      "RecAreaDescription": "Mammoth Cave National Park preserves the cave system and a part of the Green River valley and hilly country of south central Kentucky. This is the world's longest known cave system, with more than 400 miles explored. Early guide Stephen Bishop called the cave a \"grand, gloomy and peculiar place,\" but its vast chambers and complex labyrinths have earned its name - Mammoth.",
      "RecAreaMapURL": "http://www.nps.gov/maca/planyourvisit/maps.htm",
      "RecAreaLatitude": 37.19760458,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p><strong>From the North:</strong> Take Interstate 65 to Exit 53 (Cave City Exit). Turn right onto KY-70. Follow 70/255 as it becomes the Mammoth Cave Parkway in the park. Follow the Mammoth Cave Parkway to the Visitor Center.</p>\n<p><strong>From the South:</strong> Take Interstate 65 to Exit 48 (Park City Exit). Turn left onto KY-255 and follow 255 as it becomes the Park City Road into the park. Follow Park City Road until it joins the Mammoth Cave Parkway; turn left. Follow the Mammoth Cave Parkway to the Visitor Center.</p>\n<p><strong>Physical Address:</strong>\nMammoth Cave National Park\nP.O. Box 7\nMammoth Cave, KY 42259</p>\n<p><strong>GPS Coordinates:</strong>\nLat/Long: N 37° 11' 13.115'' ¦ W 86° 06' 05.197''\nDecimal Degrees: +37.186976 ¦ -86.101444\nUTM (Zone 16N, NAD83): 579779.491 ¦ 4115977.605 m</p>\n<p>NOTE: Commercial vehicles are prohibited on the park's roads.</p>",
      "Keywords": "",
      "RecAreaName": "Mammoth Cave National Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -77.5353468,
          38.81710063
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "MANA_Info_Request@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -77.5353468,
      "RecAreaID": 2820,
      "RecAreaPhone": "(703) 361 1339",
      "RecAreaDescription": "On July 21, 1861, two armies clashed for the first time on the fields overlooking Bull Run. Heavy fighting swept away any notion of a quick war. In August 1862, Union and Confederate armies converged for a second time on the plains of Manassas. The Confederates won a solid victory bringing them to the height of their power.",
      "RecAreaMapURL": "http://www.nps.gov/mana/planyourvisit/maps.htm",
      "RecAreaLatitude": 38.81710063,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Manassas National Battlefield Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -118.1547177,
          36.72559195
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "MANZ_superintendent@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -118.1547177,
      "RecAreaID": 2821,
      "RecAreaPhone": "",
      "RecAreaDescription": "In 1942, the United States government ordered more than 110,000 men, women, and children to leave their homes and detained them in remote, military-style camps. Manzanar War Relocation Center was one of ten camps where Japanese American citizens and resident Japanese aliens were incarcerated during World War II.",
      "RecAreaMapURL": "http://www.nps.gov/manz/planyourvisit/maps.htm",
      "RecAreaLatitude": 36.72559195,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Manzanar National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -73.70834257,
          42.36819596
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "MAVA_info@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -73.70834257,
      "RecAreaID": 2822,
      "RecAreaPhone": "(518) 758 6986",
      "RecAreaDescription": "Politics before the Civil War was a whirlwind of opposing interest groups. Martin Van Buren was able to unite those groups becoming president in 1837. As frustration and violence over the extension of slavery grew in the 1840's, Van Buren ran for the presidency twice more from this house. He hoped to unite sectional interests but failed; ultimately so did the union.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 42.36819596,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/mava/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Martin Van Buren National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -77.43746979,
          37.54781499
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "ajena_rogers@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -77.43746979,
      "RecAreaID": 2823,
      "RecAreaPhone": "",
      "RecAreaDescription": "Maggie Lena Walker devoted her life to civil rights advancement, economic empowerment, and educational opportunities for Jim Crow-era African Americans and women. As a bank president, newspaper editor, and fraternal leader, Walker served as an inspiration of pride and progress. Today, Walker's home is preserved as a tribute to her enduring legacy of vision, courage, and determination.",
      "RecAreaMapURL": "http://www.nps.gov/mawa/planyourvisit/maps.htm",
      "RecAreaLatitude": 37.54781499,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Visitors traveling north on I-95 take exit 76A, Chamberlayne Avenue, turn left at the light, go to the first light and turn left onto West Leigh Street. Go 3 blocks to 2nd Street where the National Historic Site is located on the left.\n\nVisitors traveling south on I-95, take exit 76B at Belvidere and turn left at the stop sign onto West Leigh Street. Go approximately 8 blocks to 2nd Street where the National Historic Site is located on the left.\n\nVisitors traveling east on I-64: take I-95 South and the directions for traveling south on I-95.\n\nVisitors traveling west on I-64, take the Downtown/ 5th Street exit. Turn right at the first light, Jackson Street. Go two blocks to 3rd Street and turn left. At the next light (Leigh Street) turn right. Turn right onto 2nd Street. The National Historic Site is located on the left at 600 North 2nd Street.\n\nStreet parking is available without charge.",
      "Keywords": "",
      "RecAreaName": "Maggie L Walker National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -108.4624032,
          37.23908345
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "meve_general_information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -108.4624032,
      "RecAreaID": 2824,
      "RecAreaPhone": "970-529-4465",
      "RecAreaDescription": "Mesa Verde, Spanish for green table, offers a spectacular look into the lives of the Ancestral Pueblo people who made it their home for over 700 years, from AD 600 to 1300. Today the park protects nearly 5,000 known archeological sites, including 600 cliff dwellings. These sites are some of the most notable and best preserved in the United States.",
      "RecAreaMapURL": "http://www.nps.gov/meve/planyourvisit/maps.htm",
      "RecAreaLatitude": 37.23908345,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Mesa Verde National Park is in Southwestern Colorado. The park entrance and Mesa Verde Visitor and Research Center is on Highway 160 between the towns of Cortez (9 miles) and Mancos (7 miles), Colorado. The first view of a cliff dwelling is 21 miles (about 45 minutes) past the park entrance along a steep, narrow, winding road.\n\nThe nearest airports are Cortez, Colorado; Durango, Colorado; and Farmington, New Mexico. The closest bus station is in Durango, Colorado.",
      "Keywords": "",
      "RecAreaName": "Mesa Verde National Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -71.30738884,
          42.4562778
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -71.30738884,
      "RecAreaID": 2825,
      "RecAreaPhone": "",
      "RecAreaDescription": "At Minute Man National Historical Park the opening battle of the Revolution is brought to life as visitors explore the battlefields and structures associated with April 19, 1775, and witness the American revolutionary spirit through the writings of the Concord authors.",
      "RecAreaMapURL": "http://www.nps.gov/mima/planyourvisit/maps.htm",
      "RecAreaLatitude": 42.4562778,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Minute Man National Historical Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -102.0272131,
          43.89558013
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "mimi_information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -102.0272131,
      "RecAreaID": 2826,
      "RecAreaPhone": "",
      "RecAreaDescription": "During the Cold War, a vast arsenal of nuclear missiles were placed in the Great Plains. Hidden in plain sight, for thirty years 1,000 missiles were kept on constant alert; hundreds remain today. The Minuteman Missile remains an iconic weapon in the American nuclear arsenal. It holds the power to destroy civilization, but is meant as a nuclear deterrent to maintain peace and prevent war.",
      "RecAreaMapURL": "http://www.nps.gov/mimi/planyourvisit/maps.htm",
      "RecAreaLatitude": 43.89558013,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "The visitor center is located on the north side of Exit 131 off Interstate 90 in western South Dakota. This is 75 miles east of Rapid City. Please do not use our mailing address in a GPS unit. This will take you to the town of Philip which is 30 miles from the visitor center.\nLaunch Control Facility Delta-01 is 4 mile west of headquarters, off exit 127. Launch Facility Delta-09 (missile silo) is located south of Interstate 90, off exit 116. It is approximately 15 miles west of park headquarters.\n Latitude: 43.84 Longitude: -101.89",
      "Keywords": "",
      "RecAreaName": "Minuteman Missile National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -93.04689808,
          44.87447858
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "miss_info@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -93.04689808,
      "RecAreaID": 2827,
      "RecAreaPhone": "",
      "RecAreaDescription": "In the middle of a bustling urban setting, this 72 mile river park offers quiet stretches for fishing, boating and canoeing.  Other spots are excellent for birdwatching, bicycling and hiking.  And there are plenty of visitor centers that highlight the history and science of the Mississippi River.  If you are interested in the Mississippi River, this is a great place to start your exploration.",
      "RecAreaMapURL": "http://www.nps.gov/miss/planyourvisit/maps.htm",
      "RecAreaLatitude": 44.87447858,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Instructions to parking. The NPS Visitor Center is located in the lobby of the Science Museum.\nEastbound on I-94: Take the Kellogg Blvd exit and and drive to the Eagle Street intersection. Take Eagle Street down the hill to Chestnut Street and turn left to the lower parking ramp entrance.\nNorthbound on I-35E: Take the Kellogg Blvd exit and and drive to the Eagle Street intersection. Take Eagle Street down the hill to Chestnut Street and turn left to the lower parking ramp entrance.\nWestbound on I-94: Take the 6th Street exit (from the left lane). Follow 6th Street and turn left onto West 7th Street. Drive south to Chestnut Street and turn left to the lower parking entrance.\nSouthbound on I-35E: Take the 10th Street exit to Jackson Street; turn left and go south to 7th Street and turn right on 7th Street to the intersection with Eagle Street. Turn left on Eagle and drive to Chestnut. Turn left to the parking entrance.\n101-199 N Chestnut St, St Paul, MN\nGPS coordinates: 44.942656, -93.100133",
      "Keywords": "",
      "RecAreaName": "Mississippi National River & Recreation Area"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -97.59077822,
          42.7882189
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "daniel_peterson@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -97.59077822,
      "RecAreaID": 2828,
      "RecAreaPhone": "(605) 665 0209",
      "RecAreaDescription": "Imagine a 100-mile stretch of North America's longest river, a vestige of the untamed American West. The Missouri National Recreational River is where imagination meets reality. Two free flowing stretches of the Missouri make up the National Park. Relive the past by making an exploration of the wild, untamed and mighty river that continues to flow as nature intended.",
      "RecAreaMapURL": "http://www.nps.gov/mnrr/planyourvisit/maps.htm",
      "RecAreaLatitude": 42.7882189,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "The Missouri National Recreational River does not have a visitor center. The park does have an administrative/headquarters office where visitors can obtain information.\nDirections to the MNRR Administrative Office\nThis is the park's headquarters located at 508 East Second Street in Yankton. Map\nFrom US Highway 81 in Nebraska: Cross the bridge into South Dakota and take the first right onto Second Street. Go east about 5 blocks; the office will be on your left.\nFrom US Highway 81 in South Dakota: Go through Yankton and take the last left turn before the bridge (2nd St.). Go east about 5 blocks; the office will be on your left.\nFrom US Highway 50 west of Yankton: Turn right on Highway 81, go through Yankton and take the last left turn before the bridge (2nd St.). Go east about 5 blocks; the office will be on your left.\nFrom US Highway 50 East of Yankton: Turn left at the first stoplight (Burleigh/Second St.) The park office is the first building on the right.",
      "Keywords": "",
      "RecAreaName": "Missouri National Recreational River"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -111.8147857,
          34.62237771
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "MOCA_Ranger_Activities@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -111.8147857,
      "RecAreaID": 2829,
      "RecAreaPhone": "",
      "RecAreaDescription": "Today we gaze through the windows of the past into one of the best preserved cliff dwellings in North America. This 20 room high-rise apartment, nestled into a towering limestone cliff, tells a story of ingenuity, survival and ultimately, prosperity in an unforgiving desert landscape.\n\nCome marvel at this enduring legacy of the Sinagua culture and reveal a people surprisingly similar to ourselves.",
      "RecAreaMapURL": "http://www.nps.gov/moca/planyourvisit/maps.htm",
      "RecAreaLatitude": 34.62237771,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/moca/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Montezuma Castle National Monument"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -78.11031134,
          34.45820776
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "matthew_woods@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -78.11031134,
      "RecAreaID": 2830,
      "RecAreaPhone": "(910) 283 5591",
      "RecAreaDescription": "In the early morning hours of February 27, 1776 Loyalist forces charged across a partially dismantled Moores Creek Bridge. Beyond the bridge, nearly 1,000 North Carolina Patriots waited quietly with cannons and muskets poised to fire. This battle marked the last broadsword charge by Scottish Highlanders and the first significant victory for the Patriots in the American Revolution.",
      "RecAreaMapURL": "http://www.nps.gov/mocr/planyourvisit/maps.htm",
      "RecAreaLatitude": 34.45820776,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Getting Here<br />\n<br />\nThe park is located along NC 210 approximately 20 miles NW of Wilmington, NC. From Wilmington follow US 421 North, then turn west onto NC 210. Or from I-40, use exit 408, then travel west on NC 210 for 15 miles to reach the park.<br />\n </p>",
      "Keywords": "",
      "RecAreaName": "Moores Creek National Battlefield"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -115.5168258,
          35.12485941
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "MOJA_Superintendent@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -115.5168258,
      "RecAreaID": 2831,
      "RecAreaPhone": "(760) 252 6100",
      "RecAreaDescription": "Singing sand dunes, volcanic cinder cones, Joshua tree forests, and carpets of wildflowers are all found at this 1.6 million acre park. A visit to its canyons, mountains and mesas will reveal long-abandoned mines, homesteads, and rock-walled military outposts. Located between Los Angeles and Las Vegas, Mojave provides serenity and solitude from major metropolitan areas.",
      "RecAreaMapURL": "http://www.nps.gov/moja/planyourvisit/maps.htm",
      "RecAreaLatitude": 35.12485941,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Directions to Mojave National Preserve\n\nlocated east of Barstow, Calif., between I-15 and I-40.\nFrom I-15: Exit Kelbaker Road at Baker, Calif., or Zyzyx Road, Cima Road, or Nipton Road.\n\nFrom I-40: Exit Kelbaker Road, Essex Road, or Goffs Road.\n\nDirections to Kelso Depot Visitor Center\n\nFrom I-15: Exit Kelbaker Road at Baker, Calif., and drive south 34 miles to Kelso Depot.\n\nFrom I-40: Exit Kelbaker Road (28 miles east of Ludlow, Calif.) and drive north 22 miles to Kelso Depot.\n\n\nDirections to Hole-in-the-Wall Information Center\n\nFrom I-40: Exit Essex Road and drive north 10 miles to the junction with Black Canyon Road. Hole-in-the-Wall is 10 miles north on Black Canyon Road.",
      "Keywords": "",
      "RecAreaName": "Mojave National Preserve"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -77.39637677,
          39.36084236
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "mono_mail@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -77.39637677,
      "RecAreaID": 2832,
      "RecAreaPhone": "(301) 662 3515",
      "RecAreaDescription": "During the summer of 1864, the Confederacy carried out a bold plan to turn the tide of the Civil War in their favor.  They planned to capture Washington, D.C. and influence the elections of 1864.  On July 9, 1864, however, Federal soldiers, outnumbered three to one, fought gallantly along the banks of the Monocacy River in an effort to buy time for Union reinforcement to arrive in Washington D.C.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 39.36084236,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/mono/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Monocacy National Battlefield"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2013-04-10",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 2833,
      "RecAreaPhone": "",
      "RecAreaDescription": "Welcome to National Capital Parks-East! We invite you&nbsp;to&nbsp;journey to parks Beyond the Capital of Washington, D.C. &nbsp;National Capital Parks-East is 13 park sites, parkways and&nbsp;statuary covering&nbsp;more than 8,000 acres of historic, cultural, and recreational parklands from Capitol Hill to the nearby Maryland suburbs.",
      "RecAreaMapURL": "",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/nace/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Suitland Parkway"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "ntsl_interpretation@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 2834,
      "RecAreaPhone": "",
      "RecAreaDescription": "Explore the Mormon Pioneer National Historic Trail across five states to see the route 70,000 Mormons traveled from 1846 to 1869 to escape religious persecution. The Pioneer Company of 1846-1847 established the first route from Nauvoo, Illinois, to Salt Lake City, Utah, covering about 1,300 miles.",
      "RecAreaMapURL": "http://www.nps.gov/mopi/planyourvisit/maps.htm",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Five hundred covered wagons rolled northwestward out of Sugar Creek, Illinois on Sunday, March 1, 1846, heading across Iowa toward the Missouri River. The sketchy and oft-revised Mormon plan was to reach and cross the Missouri by mid-April. The bulk of the emigration would develop a string of farm-stations west of the river, to support the next wave of pioneers. Meanwhile, a \"swift company\" of select men would ride hard over the Rocky Mountains to their final destination to make preparations for a new life in the valley of the Great Salt Lake. The national historic trail route passes through five states from Nauvoo, Illinois to Salt Lake City, Utah. Those portions of the Mormon Pioneer National Historic Trail authorized by Congress include nearly 1,300 miles of historic trail and resources.</p>\n<p><br />\n </p>",
      "Keywords": "",
      "RecAreaName": "Mormon Pioneer National Historic Trail"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -121.7043885,
          46.86075416
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "morainfo@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -121.7043885,
      "RecAreaID": 2835,
      "RecAreaPhone": "(360) 569 2211",
      "RecAreaDescription": "Ascending to 14,410 feet above sea level, Mount Rainier stands as an icon in the Washington landscape. An active volcano, Mount Rainier is the most glaciated peak in the contiguous U.S.A., spawning six major rivers. Subalpine wildflower meadows ring the icy volcano while ancient forest cloaks Mount Rainier's lower slopes. Wildlife abounds in the park's ecosystems. A lifetime of discovery awaits.",
      "RecAreaMapURL": "http://www.nps.gov/mora/planyourvisit/maps.htm",
      "RecAreaLatitude": 46.86075416,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "For detailed directions to Mount Rainier National Park please visit our website at http://www.nps.gov/mora/planyourvisit/directions.htm.",
      "Keywords": "",
      "RecAreaName": "Mount Rainier National Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -74.53455122,
          40.7650755
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "MORR_Interpretation@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -74.53455122,
      "RecAreaID": 2836,
      "RecAreaPhone": "",
      "RecAreaDescription": "Morristown National Historical Park commemorates the sites of General Washington and the Continental army's winter encampment of December 1779 to June 1780, where they survived through what would be the coldest winter on record. The park also maintains a museum & library collection related to the encampments & George Washington, as well as items relating to pre- and post-Revolutionary America.",
      "RecAreaMapURL": "http://www.nps.gov/morr/planyourvisit/maps.htm",
      "RecAreaLatitude": 40.7650755,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "By Airplane:\nThe closest major airport is Newark International Airport, located near Newark, NJ\n\nBy Car:\nMorristown is located along interstate 287 in New Jersey.\n\nTraveling Southbound on 287 -Take exit 36.\n1. On the exit ramp take the fork for \"Morris Avenue/ Lafayette\".\n2. After you get off the exit ramp you need to immediately get over to the left to turn left at the light onto Ridgedale Ave.\n3. Left at the next light onto Morris Avenue (Route 510 East).\n4. Stay to the left. Go over 287.\n5. Continue on the left towards the left fork.  Follow the signs for Washington's Headquarters.  This is part of a large loop.  \n6. Make a left on Washington Place.  \n\nTraveling Northbound on 287\n1.Take exit 36A\n2. At the end of the exit ramp, curve to the right to be on Morris Avenue (Route 510 East).\n3. Immediately merge into the left lane.\n4. Continue on the left towards the left fork.  Follow the signs for Washington's Headquarters.  \n5. Make a left onto Washington Place",
      "Keywords": "",
      "RecAreaName": "Morristown National Historical Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -103.4525186,
          43.88037021
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "Ed_Menard@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -103.4525186,
      "RecAreaID": 2837,
      "RecAreaPhone": "(605) 574 2523",
      "RecAreaDescription": "Majestic figures of George Washington, Thomas Jefferson, Theodore Roosevelt and Abraham Lincoln, surrounded by the beauty of the Black Hills of South Dakota, tell the story of the birth, growth, development and preservation of this country. From the history of the first inhabitants to the diversity of America today, Mount Rushmore brings visitors face to face with the rich heritage we all share.",
      "RecAreaMapURL": "http://www.nps.gov/moru/planyourvisit/maps.htm",
      "RecAreaLatitude": 43.88037021,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Getting There <br />\nPlane <br />\nRapid City Regional Airport: 35 miles to the memorial from Rapid City Regional Airport. <br />\nCar<br />\nCar Visitors traveling on I-90 should exit at Rapid City and follow Highway 16 southwest to Keystone and then Highway 244 to Mount Rushmore. Visitors coming from the south should follow Highway 385 north to Highway 244, which is the road leading to the memorial. <br />\nPublic Transportation <br />\nRental cars or private tour companies can bring visitors to the memorial from Rapid City, SD. Personal vehicles are the most common form of transportation. No public transportation options exist. <br />\nGetting Around <br />\nMount Rushmore National Memorial facilities are concentrated in a central area with pedestrian access from parking. Plan on at least a 2 hour stay to fully enjoy the memorial. <br />\n </p>",
      "Keywords": "",
      "RecAreaName": "Mount Rushmore National Memorial"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -90.06749669,
          29.96303129
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "JAZZ_Superintendent@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -90.06749669,
      "RecAreaID": 2838,
      "RecAreaPhone": "(504) 613 4062",
      "RecAreaDescription": "Only in New Orleans could there be a National Park for jazz! Drop by our visitor center at the Old U.S. Mint to inquire about musical events around town. In the mood for a world class musical experience? Attend a jazz concert or ranger performance at the new state of the art performance venue on the 3rd floor of the Old U.S. Mint.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 29.96303129,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>To reach our Visitor Center by car: <br />\nTravel on I-10, heading towards New Orleans. Exit at Orleans Avenue #235A and turn south towards the Vieux Carre (French Quarter). Orleans Avenue turns into Basin Street. Continue on Basin Street and turn left on Conti Street. Turn left on North Peters (last road before the river). Visitor Center is on riverside of street, past Cafe DuMonde, underneath Galvez Restaurant.<br />\nRegional airport servicing New Orleans is the Louis Armstrong International Airport (MSY). <br />\n </p>\n<p> </p>",
      "Keywords": "",
      "RecAreaName": "New Orleans Jazz National Historical Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -115.8761258,
          46.07019093
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "NEPE_Visitor_Information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -115.8761258,
      "RecAreaID": 2839,
      "RecAreaPhone": "",
      "RecAreaDescription": "For thousands of years the valleys, prairies, mountains, and plateaus of the inland northwest have been home to the Nimiipuu or Nez Perce people. Extremely resilient they have adapted and survived the settling of the United States.  Explore these places. Learn their stories.",
      "RecAreaMapURL": "http://www.nps.gov/nepe/planyourvisit/maps.htm",
      "RecAreaLatitude": 46.07019093,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>The Spalding Visitor Center is located ten miles east of Lewiston, Idaho on U.S. Hwy 95.</p>\n<p>The visitor center for Big Hole National Battlefield is located ten miles west of Wisdon, Montana on State Highway 43.</p>",
      "Keywords": "",
      "RecAreaName": "Nez Perce National Historical Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -80.99956002,
          37.86878554
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "neri_interpretation@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -80.99956002,
      "RecAreaID": 2840,
      "RecAreaPhone": "",
      "RecAreaDescription": "A rugged, whitewater river flowing northward through deep canyons, the New River is among the oldest rivers on the continent. The park encompasses over 70,000 acres of land along the New River, is rich in cultural and natural history, and offers an abundance of scenic and recreational opportunities.",
      "RecAreaMapURL": "http://www.nps.gov/neri/planyourvisit/maps.htm",
      "RecAreaLatitude": 37.86878554,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>DIRECTIONS: <br />\nLocated in southern West Virginia, just over one hour east of Charleston, and 20 minutes from Beckley. Take a look at our map showing the location of the park..</p>\n<p>TRANSPORTATION: <br />\nTo Park: by personal vehicle via Interstate 64 & 77, U.S. Route 19. Airports in Beckley and Charleston; AMTRAK stops at Montgomery, Thurmond (\"flag\" stop - reservations required), Prince, and Hinton. <br />\nIn Park: personal vehicle, by foot, or boat; bicycle and horseback on designated trails.</p>",
      "Keywords": "",
      "RecAreaName": "New River Gorge National River"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -99.61680329,
          39.39167606
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "NICO_Ranger_Activities@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -99.61680329,
      "RecAreaID": 2841,
      "RecAreaPhone": "",
      "RecAreaDescription": "Formerly enslaved African Americans left Kentucky in organized colonies at the end of the of post-Civil War Reconstruction period to experience freedom in the \"promised land\" of Kansas. Nicodemus represents the involvement of African Americans in the westward expansion and settlement of the Great Plains. It is the oldest and only remaining Black settlement west of the Mississippi River.",
      "RecAreaMapURL": "http://www.nps.gov/nico/planyourvisit/maps.htm",
      "RecAreaLatitude": 39.39167606,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "From Denver, take Interstate 70 east to Colby, Kansas (approximately 4 hours), then exit on Highway 24 (east) to Nicodemus (approximately 1.5 hours).<br />\nFrom Kansas City take interstate 70 west to Hays (approximately 4.5 hours), and exit at Highway 183 north to Stockton, then west on Highway 24 to Nicodemus (approximately 1 hour).</p>\n<p>Car<br />\n<p>From Omaha take Interstate 80 toward Kearney to exit 257. Nicodemus is approximately 2 hours from Kearney. Take exit 257 toward Holdrege Highway 183 S toward Stockton, KS. From Stockton take Highway 24 W to Nicodemus (approximately 19 mintues).\nThe Visitor Center (Township Hall) is south of the Roadside Park off Highway 24.",
      "Keywords": "",
      "RecAreaName": "Nicodemus National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -99.91870646,
          42.79413083
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "niobrara_nsr@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -99.91870646,
      "RecAreaID": 2842,
      "RecAreaPhone": "",
      "RecAreaDescription": "The 76 miles of the Niobrara National Scenic River winds through dramatic bluffs, incredible wildlife diversity, gorgeous waterfalls, world-class fossil resources, and plenty of floating fun for the whole family. Less than 1/4 of one percent of US rivers are designated under the National Wild & Scenic Rivers System. Come discover why this prairie river has earned this honor.",
      "RecAreaMapURL": "http://www.nps.gov/niob/planyourvisit/maps.htm",
      "RecAreaLatitude": 42.79413083,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Visitors travel to Valentine, Nebraska to start their float trip or to tour the river valley. The Niobrara National Scenic River Headquarters Office is located at 214 W. Highway 20 in Valentine. This office is open 8:30 A.M. - 4:30 P.M. seven days a week Memorial Day through Labor Day and 8:00 A.M. - 4:30 P.M. Monday - Friday the rest of the year.\n\n<p><strong>Plane<br />\n</strong>The nearest major airports are in Rapid City, SD (220 miles); Denver, CO (391 miles); and Omaha, NE (300 miles)</p>\n<p><strong>Car</strong><br />\nValentine is 76 miles south of I-90 (Murdo, SD Exit) on Hwy 83; or 130 miles north of I-80 (North Platte, NE Exit) on Hwy 83.  It is 138 miles east of Chadron , NE on US 20 and 237 miles west of Sioux Falls, IA on US 20.</p>\n<p><strong>Public Transit</strong><br />\nThere are no public transportation services (bus, taxi, etc.) near the area.</p>",
      "Keywords": "",
      "RecAreaName": "Niobrara National Scenic River"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -82.01636079,
          34.14273587
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "nisi_web@nps.gov, Katherine_Lynn@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -82.01636079,
      "RecAreaID": 2843,
      "RecAreaPhone": "(864) 543 4068",
      "RecAreaDescription": "Here settlers struggled against the harsh backcountry to survive. Cherokee Indians hunted and fought to keep their land, two towns and a trading post were formed and abandoned to the elements. Two Revolutionary War battles that claimed over 100 lives took place at this location.",
      "RecAreaMapURL": "http://www.nps.gov/nisi/planyourvisit/maps.htm",
      "RecAreaLatitude": 34.14273587,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Heading North I-26: At the Newberry exit, take Highway 34 to the town of Ninety Six, South Carolina (about 35 miles). Turn left at the second traffic light onto Hwy 248. The Park is located 2 miles south on your left.\n\nHeading South I-26: At Clinton (exit 51) follow Hwy 72 toward Greenwood/ Coronaca. At Coronaca, turn left onto Hwy 246/ 248 toward Ninety Six. Hwy 246 will branch off, but follow Hwy 248. The Park is located 2 miles south of the town of Ninety Six on Hwy 248.\nFrom Interstate I-20 -- Take exit 5 onto US Highway 25 north. Follow the Heritage Corridor signs to Epworth. Turn right onto Epworth Camp Road. It will dead end onto Hwy 178. Turn left onto Hwy 178. Follow the Park signs and turn right onto Hwy 248. The Park will be about 4 miles on your right. \nFrom Interstate I-85 (Greenville) -- Take SC Highway 25 south to the stoplight at Hodges. Turn left onto Highway 246/ 248 toward the town of Ninety Six. Hwy 246 will branch off, but follow Hwy 248 through the town of Ninety six 2 miles.",
      "Keywords": "",
      "RecAreaName": "Ninety Six National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -159.831694,
          68.01027053
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "WEAR_webmail@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -159.831694,
      "RecAreaID": 2844,
      "RecAreaPhone": "(907) 442 3890",
      "RecAreaDescription": "As one of North America's largest mountain-ringed river basins with an intact ecosystem, the Noatak River environs features some of the Arctic's finest arrays of plants and animals. The river is classified as a national wild and scenic river, and offers stunning wilderness float-trip opportunities - from deep in the Brooks Range to the tidewater of the Chukchi Sea.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 68.01027053,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Noatak National Preserve is a very remote area. There are no roads that provide access.</p>\n<p>Commercial airlines provide service from Anchorage to Kotzebue or Fairbanks to Bettles. Once in Kotzebue or Bettles, you must fly to the preserve with various air taxi operators. There are scheduled flights to villages and chartered flights to remote park areas. Summer access may include motorized/non-motorized watercraft, aircraft, or by foot. (Note: Traveling by foot in the summer would be an arduous, roundabout journey.) Winter access may include snowmobiles, aircraft or by foot.</p>\n<p> </p>\n<p> </p>",
      "Keywords": "",
      "RecAreaName": "Noatak National Preserve"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -121.2069423,
          48.71171756
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "noca_interpretation@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -121.2069423,
      "RecAreaID": 2845,
      "RecAreaPhone": "(360) 854 7200",
      "RecAreaDescription": "Less than three hours from Seattle, an alpine landscape beckons. Discover communities of life adapted to moisture in the west and recurring fire in the east. Explore jagged peaks crowned by more than 300 glaciers. Listen to cascading waters in forested valleys. Witness a landscape sensitive to the Earth's changing climate. Help steward the ecological heart of the Cascades.",
      "RecAreaMapURL": "http://www.nps.gov/noca/planyourvisit/maps.htm",
      "RecAreaLatitude": 48.71171756,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Primary access to North Cascades National Park and Ross Lake National Recreation Area is from the State Route 20 (SR 20) corridor. Due to avalanche danger, the Washington State Department of Transportation typically closes the roadway between Ross Dam Trailhead and Lone Fir Campground from November to April.\n\nThe Silver-Skagit Road to Hozomeen provides the only road access to the Ross Lake shoreline. This 37 mile (60 km) gravel road connects with B.C. Highway 1 (Exit 168) near Hope, British Columbia.\n\nHiker and climber access to the northern Picket Range and Mount Shuksan is available from State Route 542 (SR 542) east of Bellingham and the Baker Lake Road northwest of Concrete.\n\nPassenger ferry and plane access to Stehekin is available from Chelan on U.S. Route 97.\n\nHiker access to Stehekin begins at the Cascade Pass trailhead on the gravel Cascade River Road, the southbound Pacific Crest Trail from State Route 20 near the Rainy Pass picnic area, and from trailheads on the Twisp River Road.",
      "Keywords": "",
      "RecAreaName": "North Cascades National Park"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "IATR_Interpretation@nps.gov <IATR_Interpretation@nps.gov>",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 2846,
      "RecAreaPhone": "(101) 125 6651",
      "RecAreaDescription": "From New York to North Dakota, you're never far from a great outdoor adventure.\n\nWhen completed the trail will be the longest continuous hiking trail in the United States. The trail links scenic, natural, historic, and cultural areas across seven states allowing visitors to experience a variety of northern landscapes.\n\nCome and experience your America, at a walking pace.",
      "RecAreaMapURL": "http://www.nps.gov/noco/planyourvisit/maps.htm",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Getting There</p>\n<p>Plane<br />\nCommercial airports are located in major cities and regional communities at varying distances from the North Country National Scenic Trail.</p>\n<p>Car<br />\nPublic roads and highways access the North Country National Scenic Trail at numerous locations.</p>\n<p>Public Transportation<br />\nSelected points on or near the North Country National Scenic Trail are accessible by public transportation.</p>",
      "Keywords": "",
      "RecAreaName": "North Country National Scenic Trail"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -169.8503777,
          -14.22865935
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "npsa_info@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -169.8503777,
      "RecAreaID": 2847,
      "RecAreaPhone": "",
      "RecAreaDescription": "The National Park of American Samoa welcomes you into the heart of the South Pacific, to a world of sights, sounds, and experiences that you will find in no other national park in the United States. \n\nEnjoy this unique national park and the welcoming people of American Samoa. We are here to protect its rich culture and natural resources. Come explore them with us!",
      "RecAreaMapURL": "http://www.nps.gov/npsa/planyourvisit/maps.htm",
      "RecAreaLatitude": -14.22865935,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Since the national park is in a remote part of the South Pacific and has limited access opportunities, unless you live in American Samoa, more than casual planning is required to visit the park. The nearest airport is Pago Pago International Airport on Tutuila Island.\n\nCurrently, Hawaiian Airlines is the only major carrier to American Samoa. They provide two flights a week round-trip from Honolulu.\n\nThe International Airport at Upolu in nearby (Western) Samoa is served by several flights weekly from Australia, New Zealand, and Fiji. Connecting flights serve Tutuila from Upolu by small aircraft nearly daily.\n\nSmall planes serve park areas on Ta'u Island and the nearby nation of Samoa. Transportation to the other park area on Ofu Island is by local boat from Ta'u.\nPolynesian Airlines is the only carrier to the Manu'a Islands. Flexibility is important when venturing to these remote islands. For more information call 684-699-9126 or 684-699-9127.",
      "Keywords": "",
      "RecAreaName": "National Park of American Samoa"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -81.377,
          35.14044
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "benjamin_b_richardson@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -81.377,
      "RecAreaID": 2848,
      "RecAreaPhone": "(864) 936 3477",
      "RecAreaDescription": "Stretching 330 miles through four states (Virginia, Tennessee, North and South Carolina) the Overmountain Victory National Historic Trail traces the route used by patriot militia during the pivotal Kings Mountain campaign of 1780. Follow the campaign by utilizing a Commemorative Motor Route which uses existing state highways marked with the distinctive trail logo, or 87 miles of walkable pathways.",
      "RecAreaMapURL": "http://www.nps.gov/ovvi/planyourvisit/maps.htm",
      "RecAreaLatitude": 35.14044,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>The Trail travels over 330 miles through four states. Please refer to map of the route through appropriate link. <br />\n<br />",
      "Keywords": "",
      "RecAreaName": "Overmountain Victory National Historic Trail"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -91.25709817,
          37.13968894
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "ozar_interpretation@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -91.25709817,
      "RecAreaID": 2850,
      "RecAreaPhone": "",
      "RecAreaDescription": "Ozark National Scenic Riverways is the first national park area to protect a river system. The Current and Jacks Fork Rivers are two of the finest floating rivers you'll find anywhere. Spring-fed, cold and clear they are a delight to canoe, swim, boat or fish. Besides these two famous rivers, the park is home to hundreds of freshwater springs, caves, trails and historic sites such as Alley Mill.",
      "RecAreaMapURL": "http://www.nps.gov/ozar/planyourvisit/maps.htm",
      "RecAreaLatitude": 37.13968894,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Ozark National Scenic Riverways"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -97.46296072,
          26.02387351
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "paal_interpretation@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -97.46296072,
      "RecAreaID": 2851,
      "RecAreaPhone": "(956) 541 2785",
      "RecAreaDescription": "On May 8, 1846, United States and Mexican troops clashed on the prairie of Palo Alto. The battle was the first in a two-year long war that changed the map of North America. Palo Alto Battlefield National Historical Park preserves the site of this notable battle and provides an understanding of the causes, events, and consequences of the U.S.-Mexican War.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 26.02387351,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>By Plane<br />\nBrownsville is readily accessible via a number of area airports. The closest terminal is the Brownsville/South Padre Island International Airport in Brownsville. Other options include airports in Harlingen, Texas, McAllen, Texas, and Matamoros, Mexico.<br />\n<br />\nBy Car<br />\nPalo Alto Battlefield National Historical Park lies at the northeast corner of the intersection of FM 1847 (Paredes Line Road) and FM 511, approximately five miles north of downtown Brownsville, TX. From Rt. 77/83 take the FM 511 exit and drive east approximately two miles to reach FM 1847. The park visitor center is located on the east side of 1847, 1,000 feet north of the intersection.<br />\n<br />\nGetting here<br />\nThe battlefield lies ten miles north of the Rio Grande River in Cameron County, at the southern tip of Texas.<br />\n<br />\n </p>",
      "Keywords": "",
      "RecAreaName": "Palo Alto Battlefield National Historical Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -77.02506554,
          38.89426856
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "national_mall@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -77.02506554,
      "RecAreaID": 2852,
      "RecAreaPhone": "",
      "RecAreaDescription": "A street unlike any other.  It is known the world over as the heart of the Nation's Capital. America's history has marched, paraded, promenaded, and protested its way along the Avenue.",
      "RecAreaMapURL": "http://www.nps.gov/paav/planyourvisit/maps.htm",
      "RecAreaLatitude": 38.89426856,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/paav/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Pennsylvania Avenue"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -97.35901135,
          27.05381186
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "pais_visitor_center@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -97.35901135,
      "RecAreaID": 2853,
      "RecAreaPhone": "",
      "RecAreaDescription": "Padre Island National Seashore separates the Gulf of Mexico from the Laguna Madre, one of a few hypersaline lagoons in the world.  The park protects 70 miles of coastline, dunes, prairies, and wind tidal flats teeming with life.  It is a safe nesting ground for the Kemp's ridley sea turtle and a haven for 380 bird species.  It also has a rich history, including the Spanish shipwrecks of 1554.",
      "RecAreaMapURL": "http://www.nps.gov/pais/planyourvisit/maps.htm",
      "RecAreaLatitude": 27.05381186,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Directions</p>\n<p>Plane<br />\nThe nearest major airport is Corpus Christi International Airport, which is approximately 43 miles away.</p>\n<p>Car<br />\nThe National Seashore is located southeast of the city of Corpus Christi, Texas. Visitors to the area should head east through the city on Highway 358. After crossing the JFK Causeway onto Padre Island, Highway 358 changes to Park Road 22. Continue about 10 miles south on Park Road 22. The physical address for Malaquite Visitor Center is 20420 Park Road 22, Corpus Christi, TX 78418.</p>\n<p> </p>",
      "Keywords": "",
      "RecAreaName": "Padre Island National Seashore"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -113.6682797,
          36.41535465
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "amber_franklin@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -113.6682797,
      "RecAreaID": 2854,
      "RecAreaPhone": "(435) 688 3200",
      "RecAreaDescription": "Parashant provides a sense of solitude to those who venture into its isolated domain. The Monument's expansive landscape encompasses a chronicle of natural and cultural history that is just waiting to be discovered. For those prepared and equipped to explore the largely undeveloped landscape, a trip into the Parashant is a journey into the wild.",
      "RecAreaMapURL": "http://www.nps.gov/para/planyourvisit/maps.htm",
      "RecAreaLatitude": 36.41535465,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Parashant Grand Canyon-Parashant National Monument"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -105.6814684,
          35.54192238
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "peco_visitor_information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -105.6814684,
      "RecAreaID": 2855,
      "RecAreaPhone": "",
      "RecAreaDescription": "In the midst of piñon, juniper, and ponderosa pine woodlands of the Sangre de Cristo Mountains not far from Santa Fe, the remains of Indian pueblos stand as meaningful reminders of people who once prevailed. Pecos National Historical Park helps visitors explore the cultural exchange and geographic features that played such crucial roles in the rich history of the Pecos Valley.",
      "RecAreaMapURL": "http://www.nps.gov/peco/planyourvisit/maps.htm",
      "RecAreaLatitude": 35.54192238,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Car<br />\nTwenty-five miles east of Santa Fe, NM off of Interstate 25. Visitors travelling north on I-25, take exit 299 on to HWY 50 to the Pecos village and south two miles on State Road 63. Those travelling south take exit 307, five miles north to the park on State Road 63.</p>\n<p>Public Transportation<br />\nNo public transportation to the park<br />\n </p>",
      "Keywords": "",
      "RecAreaName": "Pecos National Historical Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -109.7877678,
          34.98387664
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "PEFO_Superintendent@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -109.7877678,
      "RecAreaID": 2856,
      "RecAreaPhone": "(928) 524 6228",
      "RecAreaDescription": "Did you know that Petrified Forest is more spectacular than ever? While the park has all the wonders known for a century, there are many new adventures and discoveries to share. There are backcountry hikes into areas never open before such as Red Basin and little known areas like the Martha's Butte. There are new exhibits that bring the stories to life. Come rediscover Petrified Forest!",
      "RecAreaMapURL": "http://www.nps.gov/pefo/planyourvisit/maps.htm",
      "RecAreaLatitude": 34.98387664,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Coming from the west, take Highway 180 from Holbrook to the South entrance of the park; follow the road through the park and exit on Interstate 40 through the North entrance of the park.</p>\n<p>From the east, take exit #311 off Interstate 40 and follow the road through the North entrance, continue south to Highway U.S. 180. Make a right and return to I-40 at Holbrook.</p>",
      "Keywords": "",
      "RecAreaName": "Petrified Forest National Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -77.06659744,
          38.68679958
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "Nace_fort_washington_park@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -77.06659744,
      "RecAreaID": 2857,
      "RecAreaPhone": "",
      "RecAreaDescription": "Piscataway Park is home to bald eagles, beavers, deer, foxes, ospreys, and many other species. To complement the surroundings, the park has, in addition to a public fishing pier and two boardwalks over fresh water tidal wetlands, a variety of nature trails, meadows, and woodland areas. The Park is also home to National Colonial Farm.",
      "RecAreaMapURL": "http://www.nps.gov/pisc/planyourvisit/maps.htm",
      "RecAreaLatitude": 38.68679958,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>National Colonial Farm <br />\nDirections from the D.C. area Take the beltway (I-295 or I-495) going south. Take exit 2A or 3A onto Indian Head Highway (MD Route 210 South), go approximately 9.2 miles. After you pass Farmington Road, you will take a right at the next stop light onto Livingston Road (look for B&J Carryout). Drive one block and turn right on Biddle Road. At the stop sign, turn left on Bryan Point Road and follow 3.5 miles to the end. Make a right into the visitors parking lot.</p>\n<p>Directions from route 301, Crain Highway In Waldorf, MD, turn right onto Route 228 and follow seven miles to the end. Turn right (north) onto Indian Head highway and move into the far left lane. Take the next left turn onto Livingston Road (look for B&J Carryout). Drive one block and turn right on Biddle Road. At the stop sign, turn left on Bryan Point Road and follow 3.5 miles to the end. Make a right into the visitors parking lot.</p>\n<p> </p>",
      "Keywords": "",
      "RecAreaName": "Piscataway Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -112.7398567,
          36.86282666
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "pisp_interpretation@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -112.7398567,
      "RecAreaID": 2858,
      "RecAreaPhone": "(928) 643 7105",
      "RecAreaDescription": "American Indians, Mormon ranchers, plants, animals, and many others have depended on the life-giving water found in the beautiful desert oasis at Pipe Spring. Learn about pioneer and Kaibab Paiute life by exploring the museum, historic fort and cabins, garden, orchard, and Ridge Trail. Visit with rangers and ranch animals, and attend living history demonstrations and talks.",
      "RecAreaMapURL": "http://www.nps.gov/pisp/planyourvisit/maps.htm",
      "RecAreaLatitude": 36.86282666,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Plane<br />\nMcCarran Airport in Las Vegas, Nevada is 3.5 hours west of Pipe Spring (via Interstate 15). The Salt Lake International Airport is 6 hours north of Pipe Spring (via Interstate 15).<br />\n<br />\nCar<br />\nFrom Interstate 15, turn onto Utah State Route 9 in Hurricane, Utah. Take Utah State Route 59 east out of Hurricane. This road turns into Arizona State Route 389 at the state line. Pipe Spring is 45 miles east of Hurricane. From Utah Highway 89 and 89A, turn onto Arizona State Route 389 in Fredonia, Arizona. Pipe Spring is 15 miles west of Fredonia.</p>\n<p>Public Transportation<br />\nBus and shuttle transportation are available from Las Vegas to St. George, Utah. From St. George follow the By Car directions from Interstate 15.</p>",
      "Keywords": "",
      "RecAreaName": "Pipe Spring National Monument"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "ntsl_interpretation@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 2860,
      "RecAreaPhone": "801 741 1012",
      "RecAreaDescription": "It is hard to believe that young men once rode horses to carry mail from Missouri to California in the unprecedented time of only 10 days. This relay system along the Pony Express National Historic Trail in eight states was the most direct and practical means of east-west communications before the telegraph.",
      "RecAreaMapURL": "http://www.nps.gov/poex/planyourvisit/maps.htm",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Those portions of the Pony Express National Historic Trail authorized by Congress include nearly 1,900 miles of historic trail that was once the primary \"road\" taken by young riders on swift horses to carry the US Mail between St. Joseph, Missouri and Sacramento, California--often in ten days or less with good weather. The route passes through eight states from Missouri to California.<br />\n </p>",
      "Keywords": "",
      "RecAreaName": "Pony Express National Historic Trail"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "phnst@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 2862,
      "RecAreaPhone": "",
      "RecAreaDescription": "Linking the tidal Potomac and upper Youghiogheny river basins, the evolving Potomac Heritage Trail network follows paths once traveled by George Washington. You can follow many of the same routes today—on foot, bicycle, horse and by boat—exploring contrasting landscapes between the Chesapeake Bay and the Allegheny Plateau.",
      "RecAreaMapURL": "http://www.nps.gov/pohe/planyourvisit/maps.htm",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Directions to trailheads and other facilities associated with segments of the Potomac Heritage National Scenic Trail network can be found on maps and the Web sites of Trail segment managers. <br />\n </p>",
      "Keywords": "",
      "RecAreaName": "Potomac Heritage National Scenic Trail"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -91.40829834,
          32.6424361
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "povertypoint@crt.state.la.us",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -91.40829834,
      "RecAreaID": 2863,
      "RecAreaPhone": "",
      "RecAreaDescription": "Now a nearly forgotten culture, Poverty Point at its peak 3,000 years ago was part of an enormous trading network that stretched for hundreds of miles across the continent. It was - and is - also an engineering marvel, the product of five million hours of labor. Explore the culture of a highly sophisticated people who left behind one of North America's most important archeological sites.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 32.6424361,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Directions: From Interstate 20, take the Delhi exit and travel north of LA 17, east on LA 134 and north on <br />\nLA 577. GPS Coordinates: N 32 38.2500; W 91 24.4164. <br />\n </p>",
      "Keywords": "",
      "RecAreaName": "Poverty Point National Monument"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -122.8797804,
          38.05511241
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "pore_webmaster@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -122.8797804,
      "RecAreaID": 2864,
      "RecAreaPhone": "(415) 464 5100",
      "RecAreaDescription": "From its thunderous ocean breakers crashing against rocky headlands and expansive sand beaches to its open grasslands, brushy hillsides, and forested ridges, Point Reyes offers visitors over 1500 species of plants and animals to discover. Home to several cultures over thousands of years, the Seashore preserves a tapestry of stories and interactions of people. Point Reyes awaits your exploration.",
      "RecAreaMapURL": "http://www.nps.gov/pore/planyourvisit/maps.htm",
      "RecAreaLatitude": 38.05511241,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/pore/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Point Reyes National Seashore"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -122.4662415,
          37.79718395
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "Will_Elder@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -122.4662415,
      "RecAreaID": 2865,
      "RecAreaPhone": "",
      "RecAreaDescription": "For 218 years, the Presidio served as an army post for three nations. World and local events, from military campaigns to World Fairs and earthquakes, left their mark. Come enjoy the history and the natural beauty of the Presidio. Explore centuries of architecture. Reflect in a national cemetery. Walk along an historic airfield, through forests or to beaches, and admire spectacular vistas.",
      "RecAreaMapURL": "http://www.nps.gov/prsf/planyourvisit/maps.htm",
      "RecAreaLatitude": 37.79718395,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Presidio of San Francisco"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -122.5808047,
          37.89658027
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "goga_socialmedia_goga@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -122.5808047,
      "RecAreaID": 2866,
      "RecAreaPhone": "",
      "RecAreaDescription": "Walk among old growth coast redwoods, cooling their roots in the fresh water of Redwood Creek and lifting their crowns to reach the sun and fog. Federally protected as a National Monument since 1908, this primeval forest is both refuge and laboratory, revealing our relationship with the living landscape. What will you discover in Muir Woods?",
      "RecAreaMapURL": "http://www.nps.gov/muwo/planyourvisit/maps.htm",
      "RecAreaLatitude": 37.89658027,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Muir Woods is located 11 miles north of the Golden Gate Bridge. Take Highway 101 to the Highway 1/ Stinson Beach Exit. Follow the signs to Muir Woods. Roads to the park are steep and winding. Vehicles over 35 feet long are prohibited. Parking space is very limited and fills quickly on most days. There are no RV parking facilities. For an interactive map, please visit maps.google.com/maps and type in Muir Woods National Monument.\n\nMuir Woods National Monument does not have a street address of the type used by search engines such as mapquest and yahoo maps. Because of this, map searches often direct people to the center of a zip code, which in the case of Muir Woods is several miles away. Always look at the map carefully to see if the destinations are actually labeled Muir Woods. Sometimes our address works, and sometimes it doesn't. Please be aware of this when using a map search engine.",
      "Keywords": "",
      "RecAreaName": "Muir Woods National Monument"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -110.0022436,
          37.6045329
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "nabrinfo@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -110.0022436,
      "RecAreaID": 2867,
      "RecAreaPhone": "",
      "RecAreaDescription": "Three majestic natural bridges invite you to ponder the power of water in a landscape usually defined by its absence. View them from an overlook, or hit the trails and experience their grandeur from below. Declared a National Monument in 1908, the bridges are named \"Kachina,\" \"Owachomo\" and \"Sipapu\" in honor of the Native Americans that once made this area their home.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 37.6045329,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Bus\nCommercial bus and van shuttles service nearby towns. There is no bus service to the monument itself.\n\nCar\nThe entrance to Natural Bridges is at the end of Highway 275, which is roughly 35 miles west of Blanding, UT on Highway 95. Driving time from Blanding is roughly 45 minutes.  \n\nPlane\nCommercial airlines serve Cortez, CO, Grand Junction, CO, Salt Lake City, UT as well as other cities in the southwest.\n\nGETTING AROUND\n\nVisitors usually tour the scenic drive by car or bicycle.",
      "Keywords": "",
      "RecAreaName": "Natural Bridges National Monument"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2013-04-10",
      "RecAreaEmail": "National_Mall@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 2868,
      "RecAreaPhone": "Headquarters 202.485.9880 <br> Visitor Informaiton 202.426.6841 <br>",
      "RecAreaDescription": "National Capital Parks - Central (NACC) was established in 1965 to administer the National Park Service units in the memorial core of our nation's capital. Today, NACC preserves and interprets more than a dozen NPS areas including the Vietnam Veterans Memorial, the Korean War Veterans Memorial, the Franklin Delano Roosevelt Memorial, Ford's Theatre National Historic Site and the House Where Lincoln Died (Petersen House), Pennsylvania Avenue National Historical Park, and the Old Post Office Tower. <P>These areas, along with hundreds of smaller parks, serve as settings for government buildings and the museums of the Smithsonian Institution. Each year NACC issues permits for thousands of special events and First Amendment activities on The National Mall, and hosts more than 10 million visitors who journey to Washington D.C. to find inspiration among the principle symbols of America's heritage. <P>",
      "RecAreaMapURL": "http://www.nps.gov/nacc/pphtml/maps.html",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Plane - Three major airports link Washington, D.C. with the rest of the country and the world. Ronald Reagan National Airport, Dulles Airport, and Baltimore-Washington Airport all have limosine, cab, or Metro services available that will connect with the National Mall. <P> <br>\n\n\tCar - Interstates 66 and 395 provide access to the Mall from the south. Interstate 495, New York Avenue, Rock Creek Parkway, George Washington Memorial Parkway, and the Cabin John Parkway provide access from the North. Interstate 66, Route 50 and 29 provide access from the West. Routes 50, 1, and 4 provide access from the East. <P> <br>\n\n\t\n\n\tPublic Transportation - There are several metro train routes from the suburban areas surrounding the city. <P>",
      "Keywords": "",
      "RecAreaName": "National Capital Parks-Central"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -76.98495791,
          38.85301412
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -76.98495791,
      "RecAreaID": 2869,
      "RecAreaPhone": "202 690 5185",
      "RecAreaDescription": "Welcome to National Capital Parks-East. We invite you to journey to parks Beyond the Capital of Washington, D.C.  National Capital Parks-East is 13 park sites, parkways and statuary covering more than 8,000 acres of historic, cultural, and recreational parklands from Capitol Hill to the nearby Maryland suburbs",
      "RecAreaMapURL": "",
      "RecAreaLatitude": 38.85301412,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/nace/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "National Capital Parks-East"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2013-04-10",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 2870,
      "RecAreaPhone": "202.426.6841",
      "RecAreaDescription": "Each year, millions of people visit the National Mall and Memorial Parks to recreate, to commemorate presidential legacies, to honor our nation's veterans, to make their voices heard, and to celebrate our nation's commitment to freedom and equality.",
      "RecAreaMapURL": "http://www.nps.gov/nama/planyourvisit/maps.htm",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/nama/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "National Mall & Memorial Parks"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -91.39040665,
          31.54697621
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "natc_superintendent@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -91.39040665,
      "RecAreaID": 2871,
      "RecAreaPhone": "(601) 446 5790",
      "RecAreaDescription": "Discover the history of all the peoples of Natchez, Mississippi, from European settlement, African enslavement, the American cotton economy, to the Civil Rights struggle on the lower Mississippi River.",
      "RecAreaMapURL": "http://www.nps.gov/natc/planyourvisit/maps.htm",
      "RecAreaLatitude": 31.54697621,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "From Jackson, MS:\nTake 55 South. Proceed on Highway 84 west to Highway 61 into Natchez. Turn right on Highway 84 west towards the Mississippi River Bridge and Louisiana. Turn right onto Canal Street and the visitor center is on the left.\nFrom Vicksburg, MS:\nProceed into Natchez via Highway 61 and turn right onto Highway 84 west towards the Mississippi River Bridge and Louisiana. Turn right onto Canal Street and the visitor center will is on your left.\nFrom Baton Rouge, LA:\nProceed north on Highway 61 and turn left on Highway 84 towards the Mississippi River Bridge and Louisiana. Turn right onto Canal Street and the visitor center is on the left.\nFrom Alexandria and Vidalia, LA:\nProceed east on Highway 84 and cross the Mississippi River. Upon entering Mississippi the visitor center is on the left.",
      "Keywords": "",
      "RecAreaName": "Natchez National Historical Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -89.03092439,
          33.78002293
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "natr_interpretation@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -89.03092439,
      "RecAreaID": 2872,
      "RecAreaPhone": "800-305-7417",
      "RecAreaDescription": "The Natchez Trace Parkway is a 444-mile drive through exceptional scenery and 10,000 years of North American history.  Used by American Indians, \"Kaintucks,\" settlers, and future presidents, the Old Trace played an important role in American history. Today, visitors can enjoy not only a scenic drive but also hiking, biking, horseback riding, and camping.",
      "RecAreaMapURL": "http://www.nps.gov/natr/planyourvisit/maps.htm",
      "RecAreaLatitude": 33.78002293,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Natchez Trace Parkway"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -110.5504015,
          36.71755643
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "NAVA_Superintendent@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -110.5504015,
      "RecAreaID": 2873,
      "RecAreaPhone": "(928) 672 2700",
      "RecAreaDescription": "The prehistoric Puebloan Ancestors built Tsegi Phase villages within the natural sandstone alcoves of our canyons. The resilient Ancestral Puebloans paved the way for current Native American groups in the Southwest region. These villages, which date from AD 1250 to 1300, thrill all who visit with original architectural elements such as roof beams, masonary walls, rock art, and hand and foot holds.",
      "RecAreaMapURL": "http://www.nps.gov/nava/planyourvisit/maps.htm",
      "RecAreaLatitude": 36.71755643,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Navajo National Monument is located at the end of State Highway 564 off of US Highway 160.</p>\n<p> </p>",
      "Keywords": "",
      "RecAreaName": "Navajo National Monument"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -70.92322321,
          41.63540552
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "NEBE_info@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -70.92322321,
      "RecAreaID": 2874,
      "RecAreaPhone": "",
      "RecAreaDescription": "\"The town itself is perhaps the dearest place to live in, in all New England..nowhere in all America will you find more patrician-like houses, parks and gardens more opulent, than in New Bedford...all these brave houses and flowery gardens came from the Atlantic, Pacific, and Indian oceans. One and all, they were harpooned and dragged up hither from the bottom of the sea.\"\n\nH. Melville, \"Moby-Dick\"",
      "RecAreaMapURL": "http://www.nps.gov/nebe/planyourvisit/maps.htm",
      "RecAreaLatitude": 41.63540552,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://nps.gov/nebe/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "New Bedford Whaling National Historical Park"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2017-04-04",
      "RecAreaEmail": "karen_saxton@partner.nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 2875,
      "RecAreaPhone": "(732) 842 4000",
      "RecAreaDescription": "The Trail will show you roads less traveled where you can find historic villages, migrating eagles, and boardwalks on miles of sandy beaches. \nThis auto-trail stretches nearly 300 miles along New Jersey's shore and bays. Explore the Trail's five regions and you'll find the nation's oldest operating lighthouse; the town where revolutionaries burned British tea; and the state's official tall ship",
      "RecAreaMapURL": "http://www.nps.gov/neje/planyourvisit/maps.htm",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Each region has a color-coded regional brochure that focuses on Trail themes with descriptions of sites, a map of the region, directions, hours, and phone numbers.</p>\n<p>Get regional brochures at welcome centers, staffed sites, and at some local information centers, or write for them to:</p>\n<p>New Jersey Coastal Heritage Trail Route, P.O. Box 568, Newport, NJ 08345<br />\n </p>",
      "Keywords": "",
      "RecAreaName": "New Jersey Coastal Heritage Trail Route"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2013-04-10",
      "RecAreaEmail": "WEAR_webmail@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 2876,
      "RecAreaPhone": "Headquarters 907-442-8300 <br> Summer Visitor Information 907-442-3760 <br>",
      "RecAreaDescription": "Western Arctic National Parklands is a management unit which includes Noatak National Perserve, Cape Krusenstern National Monument and Kobuk Valley National Park near Kotzebue, AK and Bering Land Bridge National Preserve located on the Seward Peninsula near Nome, AK.  <P>",
      "RecAreaMapURL": "http://www.nps.gov/nwak/pphtml/maps.html",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Western Arctic National Parklands"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -84.5979170501,
          36.1056026037
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "obri_information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -84.5979170501,
      "RecAreaID": 2877,
      "RecAreaPhone": "",
      "RecAreaDescription": "The Obed Wild and Scenic River looks much the same today as it did when the first white settlers strolled its banks in the late 1700s. While meagerly populated due to poor farming soil, the river was a hospitable fishing and hunting area for trappers and pioneers. Today, the Obed stretches along the Cumberland Plateau and offers visitors a variety of outdoor recreational opportunities.",
      "RecAreaMapURL": "http://www.nps.gov/obed/planyourvisit/maps.htm",
      "RecAreaLatitude": 36.1056026037,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "The Obed Wild and Scenic River Visitor Center is located at 208 North Maiden Street in downtown Wartburg, Tennessee.\nFrom the East, take State Route 62 West, then veer to the right onto State Route 27. Make a left onto Kingston Street, and follow the brown Obed road signs to the Visitor Center on North Maiden Street.\nFrom the West, take State Route 62 East, then make a right onto State Route 27 South. Make a right onto Kingston Street, and follow the brown Obed road signs to the Visitor Center on North Maiden Street.\nFrom the North, follow State Route 27 South into Wartburg. Make a right onto Kingston Street, and follow the brown Obed road signs to the Visitor Center on North Maiden Street.\nFrom the South, follow State Route 27 North into Wartburg. Make a left onto Kingston Street, then follow the brown Obed road signs to the Visitor Center on North Maiden Street.",
      "Keywords": "",
      "RecAreaName": "Obed Wild & Scenic River"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -83.60224853,
          32.83816576
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "ocmu_superintendent@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -83.60224853,
      "RecAreaID": 2878,
      "RecAreaPhone": "(478) 752 8257",
      "RecAreaDescription": "Welcome to Ocmulgee National Monument. This park is a prehistoric American Indian site.  American Indians first came here during the Paleo-Indian period hunting Ice Age mammals. Many different American Indian cultures occupied this land for thousands of years.  Around 900 CE, the Mississippian Period began. They constructed mounds for their elite, which remain today.",
      "RecAreaMapURL": "http://www.nps.gov/ocmu/planyourvisit/maps.htm",
      "RecAreaLatitude": 32.83816576,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Ocmulgee National Monument"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -97.51709193,
          35.47297978
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "okci_superintendent@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -97.51709193,
      "RecAreaID": 2879,
      "RecAreaPhone": "(405) 609 8855",
      "RecAreaDescription": "The outdoor symbolic memorial is a place of quiet reflection, honoring victims, survivors, rescuers and all who were changed forever on April 19, 1995. It encompasses the now sacred soil where the Alfred P. Murrah Federal Building once stood, capturing and preserving forever the place and events that changed the world.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 35.47297978,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "FROM I-44 WEST (H.E. BAILEY TURNPIKE, LAWTON, FT. SILL)\n---------------------------\nFollow I-44 East to I-40 East\nTake I-40 East to the Western Ave. exit\nExit Western Ave.\nGo North on Western Ave. to 6th St., the Memorial & Museum is located at 6th St. and Harvey Ave.\nFROM TULSA (TURNER TURNPIKE)\n------------------------------\nExit the Turnpike in the far left lane, where the Turnpike (I-44) merges with I-35\nTake I-35 South to I-44 West\nTake I-44 West to I-235 South\nTake I-235 South to the 6th St. exit. You will see a brown sign that reads \"Oklahoma City National Memorial Next Exit\"\nExit and turn right onto 6th St., the Memorial & Museum is located at 6th St. and Harvey Ave.\nFROM THE SOUTH (DALLAS, NORMAN)\n-----------------------------------------------------\nTake I-235 North to the 3rd exit, Harrison Avenue. You will see a brown sign that reads \"Oklahoma City National Memorial Next Exit\"\nExit and turn right onto 6th St., the Memorial & Museum is located at 6th St. and Harvey Ave.",
      "Keywords": "",
      "RecAreaName": "Oklahoma City National Memorial"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -123.6663848,
          47.80392754
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "olym_visitor_center@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -123.6663848,
      "RecAreaID": 2881,
      "RecAreaPhone": "",
      "RecAreaDescription": "With its incredible range of precipitation and elevation, diversity is the hallmark of Olympic National Park. Encompassing nearly a million acres, the park protects a vast wilderness, thousands of years of human history, and several distinctly different ecosystems, including glacier-capped mountains, old-growth temperate rain forests, and over 70 miles of wild coastline. Come explore!",
      "RecAreaMapURL": "http://www.nps.gov/olym/planyourvisit/maps.htm",
      "RecAreaLatitude": 47.80392754,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Traveling by Car\n\nFrom the greater Seattle area and I-5 corridor, you can reach the park by several different routes:\n\n> Cross Puget Sound on one of the Washington State Ferries. Access U.S. 101 from Port Townsend (State Route 20), Kingston (State Route 104), or Bainbridge Island (State Routes 305 & 104). Be aware that State Route 104 crosses the Hood Canal Bridge which closes periodically for boat traffic.\n\n> From Tacoma (I-5), take State Route 16 to Bremerton; take State Route 3 north from Bremerton to State Route 104; be aware that State Route 104 crosses the Hood Canal Bridge which closes periodically for boat traffic. \n\n> Access U.S. 101 at Olympia (via I-5) \n\n> You may also access the park by following U.S. 101 north from Aberdeen, via the Washington/Oregon coast or U.S. 12 west from I-5.\n\nPublic Transit\n\n> Clallam Transit System provides service within Port Angeles and commuter services to locations around the northern Olympic Peninsula.",
      "Keywords": "",
      "RecAreaName": "Olympic National Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -123.4018586,
          42.10319143
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -123.4018586,
      "RecAreaID": 2883,
      "RecAreaPhone": "(541) 592 2100",
      "RecAreaDescription": "Nestled deep inside the Siskiyou Mountains, the caves formed as rainwater from the ancient forest above dissolved the marble below, creating the \"Marble Halls of Oregon.\" Reservations are strongly recommended since our first come, first serve tours sell out very quickly. Tour reservations can be purchased at www.recreation.gov or by call 1-877-444-6777.  Go to Plan Your Visit for more information.",
      "RecAreaMapURL": "http://www.nps.gov/orca/planyourvisit/maps.htm",
      "RecAreaLatitude": 42.10319143,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p> <strong>From I-5</strong></p>\n<ol>\n<li>Take exit 58 to merge onto NE 6th St/OR-99/Redwood Hwy</li>\n<li>Continue to follow Redwood Hwy (3 mi)</li>\n<li>Turn right at US-199 to Cave Junction (28  mi)</li>\n<li>Turn left on OR-46 (a gas station is on the corner)</li>\n<li>Follow OR-46 for 20 miles to the Monument <br />\n </li>\n</ol>\n<p><strong>From Crescent City, California</strong></p>\n<ol>\n<li>Take a left at US-101 (4 mi)</li>\n<li>Take exit 794 to merge onto US-199 toward Grants Pass/I-5 (49 mi)</li>\n<li>Turn right at OR-46</li>\n<li>Follow OR-46 for 20 miles to the Monument <br />\n </li>\n</ol>\n<p>The last 10 miles are narrow, steep and winding. Please drive no faster than 10 miles per hour while on the Monument. Travel trailers and large RVs are not recommended beyond Grayback campground (mile post 12) due to the winding road to the Monument.</p>",
      "Keywords": "",
      "RecAreaName": "Oregon Caves National Monument & Preserve"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -112.8573314,
          32.03585543
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "ORPI_Information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -112.8573314,
      "RecAreaID": 2885,
      "RecAreaPhone": "(520) 387 6849",
      "RecAreaDescription": "Look closely. Look again. The sights and sounds of Organ Pipe Cactus National Monument, an International Biosphere Reserve, reveal a thriving community of plants and animals. Human stories echo throughout this desert preserve, chronicling thousands of years of desert living. A scenic drive, wilderness hike or a night of camping will expose you to a living desert that thrives.",
      "RecAreaMapURL": "http://www.nps.gov/orpi/planyourvisit/maps.htm",
      "RecAreaLatitude": 32.03585543,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>The monument is located along the US/Mexican Border, south of Ajo, west of Tucson, and east of Yuma.</p>\n<p>Plane: Nearest airports are in Phoenix and Tuscon, then by private vehicle.</p>\n<p>Car: From the NORTH: follow AZ Hwy 85 through Ajo and Why. The Monument is 22 miles (35.4 km) south of Why. From the EAST: follow AZ Hwy 86 to Why, then turn south on AZ Hwy 85. From the WEST: follow I-8 to Gila Bend or I-10 to Buckeye, then turn south on AZ Hwy 85. From MEXICO: drive on Mexico Route 2 to Sonoyta, then north to Lukeville.</p>\n<p>Public Transportation: None available.</p>\n<p>Getting Around: No rentals or public transportation available in area. Access is by foot, cycle or private vehicle. During the winter season motorized tours of the Ajo Mountain scenic drive may be offered, check at the Kris Eggle Visitor Center for information.<br />\nThe park entrance fee is $8.00 for a week-long vehicle pass.  See our website www.nps.gov/orpi for more information.",
      "Keywords": "",
      "RecAreaName": "Organ Pipe Cactus National Monument"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -94.03468357,
          36.45438033
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "PERI_Interpretation@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -94.03468357,
      "RecAreaID": 2886,
      "RecAreaPhone": "",
      "RecAreaDescription": "On March 7-8, 1862, 26,000 soldiers fought here to decide the fate of Missouri and the West.  The 4,300 acre battlefield honors those who fought for their beliefs. Pea Ridge was one of the most pivotal Civil War battles and is the most intact Civil War battlefield in the United States.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 36.45438033,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "From the Northeast (Republic, MO): Take US 60 to Monett, MO, then south on MO 37 to Gateway, AR. Go west on US 62 to the park.\n\nFrom the North (Joplin, MO): Take US 71 south until the Pea Ridge Exit and then go left on AR 72. At the town of Pea Ridge follow 72 to US 62. Turn left on US 62 to the Park.\n\nFrom the South (Ft. Smith, AR): Take I-540 north. Go through Fayetteville, AR. Continue north on I-540 to the US 62 exit and follow signs to the park.\n\nFrom the West (Tulsa, OK): Take the Cherokee Turnpike to US 412 to Siloam Springs and Springdale, AR. Take I-540 north to US 62 East and follow signs to the park.",
      "Keywords": "",
      "RecAreaName": "Pea Ridge National Military Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -77.47594865,
          37.19109957
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "Ann_Blumenschine@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -77.47594865,
      "RecAreaID": 2887,
      "RecAreaPhone": "",
      "RecAreaDescription": "Nine and a half months, 70,000 casualties, the suffering of civilians, thousands of U. S. Colored Troops fighting for the freedom of their race, and the decline of Gen. Robert E. Lee's Army of No. Virginia all describe the Siege of Petersburg. It was here Gen. Ulysses S. Grant cut off all of Petersburg's supply lines ensuring the fall of Richmond on April 3, 1865. Six days later, Lee surrendered.",
      "RecAreaMapURL": "http://www.nps.gov/pete/planyourvisit/maps.htm",
      "RecAreaLatitude": 37.19109957,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/pete/planyourvisit/directions.htm\nEastern Front Unit\nFrom the North:\nTake Rt. 95 South to exit 52 (Wythe St./Rt. 36)\nTravel approximately 2.5 miles to the park entrance which will be on the right.\n\nFrom the South:\nTake Rt. 95 North to exit 50D (Wythe St./Rt. 36)\nTravel approximatley 2.5 miles to the park entrance which will be on the right.",
      "Keywords": "",
      "RecAreaName": "Petersburg National Battlefield"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -106.7491456,
          35.13915998
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "susanna_villanueva@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -106.7491456,
      "RecAreaID": 2888,
      "RecAreaPhone": "(505) 899 0205",
      "RecAreaDescription": "Petroglyph National Monument protects one of the largest petroglyph sites in North America, featuring designs and symbols carved onto volcanic rocks by Native Americans and Spanish settlers 400 to 700 years ago. These images are a valuable record of cultural expression and hold profound spiritual significance for contemporary Native Americans and for the descendants of the early Spanish settlers.",
      "RecAreaMapURL": "http://www.nps.gov/petr/planyourvisit/maps.htm",
      "RecAreaLatitude": 35.13915998,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Petroglyph National Monument is located on the westside of Albuquerque, New Mexico. From Interstate 40 take the Unser Blvd. exit (#154) and proceed north 3 miles to Western Trail. Turn left or west onto Western Trail and follow road to the visitor center. From Interstate 25 take the Paseo del Norte exit (#232) and proceed west to Coors Road exit south. Proceed south on Coors Road to Western Trail. Turn right or west onto Western Trail and follow road to the visitor center. Public transportation to the monument is not offered by the City of Albuquerque.<br />\n<br />\n </p>",
      "Keywords": "",
      "RecAreaName": "Petroglyph National Monument"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -82.8115794,
          41.65449782
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "PEVI_Interpretation@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -82.8115794,
      "RecAreaID": 2889,
      "RecAreaPhone": "(419) 285 2184",
      "RecAreaDescription": "Perry's Victory and International Peace Memorial was established to honor those who fought in the Battle of Lake Erie, during the War of 1812, and to celebrate the long-lasting peace among Great Britain, Canada and the U.S. The Memorial, a Doric column, rising 352 feet over Lake Erie is situated 5 miles from the longest undefended border in the world.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 41.65449782,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/pevi/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Perry's Victory & International Peace Memorial"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -111.9192737,
          33.18713877
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "cagr_superintendent@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -111.9192737,
      "RecAreaID": 2890,
      "RecAreaPhone": "",
      "RecAreaDescription": "The \"Monument\" is located on the Gila River Indian Reservation and is under tribal ownership. The Gila River Indian Community has decided not to open the extremely sensitive area to the public. There is no park brochure, passport stamp, picture stamp or other free literature available.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 33.18713877,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "The \"Monument\" is located on the Gila River Indian Reservation and is under tribal ownership. The Gila River Indian Community has decided not to open the extremely sensitive area to the public. There is no park brochure, passport stamp, picture stamp or other free literature available. The lands are owned by the Gila River Indian Community as are the lands surrounding the area. Attempting to go to the site is trespassing.",
      "Keywords": "",
      "RecAreaName": "Hohokam Pima National Monument"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -74.62499857,
          39.93835287
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -74.62499857,
      "RecAreaID": 2892,
      "RecAreaPhone": "(609) 894 7300",
      "RecAreaDescription": "This is truly a special place. It's classified as a United States Biosphere Reserve and in 1978 was established by Congress as the country's first National Reserve. It includes portions of seven southern New Jersey counties, and encompasses over one-million acres of farms, forests and wetlands. It contains 56 communities, from hamlets to suburbs, with over 700,000 permanent residents.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 39.93835287,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "New Jersey Pinelands National Reserve"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -121.1813607,
          36.49029208
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "pinn_visitor_information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -121.1813607,
      "RecAreaID": 2893,
      "RecAreaPhone": "(831) 389 4486",
      "RecAreaDescription": "Some 23 million years ago multiple volcanoes erupted, flowed, and slid to form what would become Pinnacles National Park. What remains is a unique landscape. Travelers journey through chaparral, oak woodlands, and canyon bottoms. Hikers enter rare talus caves and emerge to towering rock spires teeming with life: prairie and peregrine falcons, golden eagles, and the inspiring California condor.",
      "RecAreaMapURL": "",
      "RecAreaLatitude": 36.49029208,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "No Through Road\n\nWhen driving to Pinnacles National Park, please keep in mind that there is no road that connects the east and west entrances of the park.  \n\nGetting to the EAST SIDE:\nTake Hwy 101 to Hwy 25 south into Hollister, CA. On Hwy 25, go through the town of Hollister and continue about 30 miles to Hwy 146. Turn right on Hwy 146, into Pinnacles National Park. Turn left into the Pinnacles Campground to check in at Pinnacles Visitor Center.  From the campground, the Bear Gulch Area, and most trail heads are 3.5 miles further into the park along Hwy 146.\n\n \nGetting to the WEST SIDE\nTake Hwy 101 to the town of Soledad, CA. Turn left onto Front Street and then take a right onto Hwy 146 east. Take care as you're driving through town; the highway takes a few turns. Follow Hwy 146 for 14 miles into Pinnacles National Park.",
      "Keywords": "",
      "RecAreaName": "Pinnacles National Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -96.32475523,
          44.01351958
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "PIPE_Interpretation@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -96.32475523,
      "RecAreaID": 2894,
      "RecAreaPhone": "(507) 825 5464",
      "RecAreaDescription": "For countless generations, American Indians have quarried the red pipestone found at this site. These grounds are sacred to many people because the pipestone quarried here is carved into pipes used for prayer. Many believe that the pipe's smoke carries one's prayer to the Great Spirit. The traditions of quarrying and pipemaking continue here today.",
      "RecAreaMapURL": "http://www.nps.gov/pipe/planyourvisit/maps.htm",
      "RecAreaLatitude": 44.01351958,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Pipestone National Monument is easily accessible from the following highways. \n> I-90 Luverne, MN Exit north on US Highway 75 to Pipestone, MN - 25 miles.\n> I-90 north on MN Highway 23 to Pipestone, MN - 27 miles.\n> Marshall, MN, southwest on MN Highway 23 to Pipestone, MN - 45 miles.\n> Slayton, MN, west on MN Highway 30 to Pipestone, MN - 29 miles.\n> Lake Benton, MN, south on US Highway 75 to Pipestone, MN - 19 miles.\n> I-29 north of Sioux Falls, SD to Exit 109 (Madison/Colman exit) go east on SD Hwy 34 which becomes MN Hwy 30 to Pipestone, MN - 55 mile.\n> I-29 Brookings, SD exit, go east on Hwy 14 to Lake Benton, MN, south on US Highway 75 to Pipestone, MN.",
      "Keywords": "",
      "RecAreaName": "Pipestone National Monument"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -86.31628733,
          46.56435642
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "piro_information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -86.31628733,
      "RecAreaID": 2895,
      "RecAreaPhone": "(906) 387 3700",
      "RecAreaDescription": "Sandstone cliffs, beaches, sand dunes, waterfalls, lakes, forest, and shoreline beckon you to visit Pictured Rocks National Lakeshore. Hiking, camping, sightseeing, and four season outdoor opportunities abound. The lakeshore hugs the Lake Superior shoreline for more than 40 miles. Lake Superior is the largest, deepest, coldest, and most pristine of all the Great Lakes.",
      "RecAreaMapURL": "http://www.nps.gov/piro/planyourvisit/maps.htm",
      "RecAreaLatitude": 46.56435642,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/piro/planyourvisit/directions.htm\n\nWild Beauty on the Lake Superior Shore\nSandstone cliffs, beaches, sand dunes, waterfalls, lakes, forest, and shoreline beckon you to visit Pictured Rocks National Lakeshore. Hiking, camping, sightseeing, and four season outdoor opportunities abound. The Lakeshore hugs the Lake Superior shoreline for more than 40 miles. Lake Superior is the largest, deepest, coldest, and most pristine of all the Great Lakes.\n\nPictured Rocks National Lakeshore is located On the south shore of Lake Superior in Michigan's Upper Peninsula, between the communities of Munising (west) and Grand Marais (east).  There are no entrance fees. \n\nMichigan state highways M-28 and M-94 lead to Munising. State highway M-77 leads to Grand Marais. Alger County Road H-58 and other spur roads (some unpaved) provide access throughout the lakeshore. Many roads are closed by snow during the winter.",
      "Keywords": "",
      "RecAreaName": "Pictured Rocks National Lakeshore"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -77.38910997,
          38.58589108
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -77.38910997,
      "RecAreaID": 2896,
      "RecAreaPhone": "",
      "RecAreaDescription": "Prince William Forest Park is an oasis, a respite of quiet and calm. In 1936, Chopawamsic Recreation Area opened its gates to house children's 'relief' camps during the Great Depression. Renamed Prince William Forest Park in 1948, these fragrant woods and trickling streams have welcomed generations of campers, hikers, bikers and nature lovers. Discover Northern Virginia's best kept secret!",
      "RecAreaMapURL": "http://www.nps.gov/prwi/planyourvisit/maps.htm",
      "RecAreaLatitude": 38.58589108,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/prwi/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Prince William Forest Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -155.8211629,
          20.02772186
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "george_enuton@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -155.8211629,
      "RecAreaID": 2897,
      "RecAreaPhone": "(808) 882-7218 ext. 1011",
      "RecAreaDescription": "How many places in America can you walk in the footsteps of a king? Where else has a stranded sailor risen up to become a great chief over an entire island? Where else can you experience the culminating event of a people, foretold from centuries past? Where else can you stand on a beach and watch as sharks pass over a submerged temple? Experience all this and much more – only at Pu'ukohola Heiau!",
      "RecAreaMapURL": "http://www.nps.gov/puhe/planyourvisit/maps.htm",
      "RecAreaLatitude": 20.02772186,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Pu`ukoholā Heiau National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -155.9008789,
          19.41268627
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "eric_andersen@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -155.9008789,
      "RecAreaID": 2898,
      "RecAreaPhone": "808-328-2288 or 808-328-2326",
      "RecAreaDescription": "Imagine you had just broken the sacred laws, the kapu, and the only punishment was death. Your only chance of survival is to elude your pursuers and reach the Pu'uhonua, a place of refuge. The Pu'uhonua protected the kapu breaker, defeated warriors, as well as civilians during the time of battle. No physical harm could come to those who reached the boundaries of the Pu'uhonua.",
      "RecAreaMapURL": "",
      "RecAreaLatitude": 19.41268627,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Pu`uhonua O Hōnaunau National Historical Park"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 2899,
      "RecAreaPhone": "",
      "RecAreaDescription": "Discover the beauty of The Last Green Valley National Heritage Corridor!  Spanning 35 towns in northeastern Connecticut and south-central Massachusetts, The Last Green Valley is surprisingly rural and uniquely historic. With 1,100 square miles that are still 77% forests and farms, the pastoral landscape is interspersed with powerful rivers, mill villages, and vibrant town centers.",
      "RecAreaMapURL": "http://www.nps.gov/qush/planyourvisit/maps.htm",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "The Last Green Valley National Heritage Corridor"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -110.9655099,
          37.07788771
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "glca_carl_hayden@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -110.9655099,
      "RecAreaID": 2900,
      "RecAreaPhone": "(928) 608 6200",
      "RecAreaDescription": "Rainbow Bridge is one of the world's largest known natural bridges. The span has undoubtedly inspired people throughout time--from the neighboring American Indian tribes who consider Rainbow Bridge sacred, to the 85,000 people from around the world who visit it each year.\n\nPlease visit Rainbow Bridge in a spirit that honors and respects the cultures to whom it is sacred.",
      "RecAreaMapURL": "http://www.nps.gov/rabr/planyourvisit/maps.htm",
      "RecAreaLatitude": 37.07788771,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>By Boat:<br />\nTrips to Rainbow Bridge may be made across Lake Powell in Glen Canyon National Recreation Area using private, rental, or tour boats. From Wahweap, Antelope Point, and Dangling Rope, travel north. From Bullfrog and Halls Crossing, travel south. Proceed to the mouth of Forbidding Canyon (buoy 49), where a floating sign on the right marks the canyon entrance. Follow the canyon about 2 miles (4 km) to another sign that points the way left through a narrow passage. Proceed with caution! Beyond the wakeless buoys, go slowly so that no wakes, or waves, are made. A courtesy dock is available for short-term docking while people make the 2 mile (3.2km) walk to the bridge.</p>\n<p>By Hike:<br />\nYou may backpack to Rainbow Bridge across Navajo Nation lands. A permit from the Navajo Nation is required. You may write to: Navajo Nation, Parks and Recreation Department, Box 9000, Window Rock, Arizona 86515.<br />\n </p>",
      "Keywords": "",
      "RecAreaName": "Rainbow Bridge National Monument"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -124.0318129,
          41.37237268
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "REDW_Information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -124.0318129,
      "RecAreaID": 2901,
      "RecAreaPhone": "(707) 464 6101",
      "RecAreaDescription": "Most people know Redwood as home to the tallest trees on Earth. The parks also protect vast prairies, oak woodlands, wild riverways, and nearly 40 miles of rugged coastline.  For thousands of years people have lived in this verdant landscape.  Together, the National Park Service and California State Parks manage these lands for the inspiration, enjoyment, and education of all.",
      "RecAreaMapURL": "http://www.nps.gov/redw/planyourvisit/maps.htm",
      "RecAreaLatitude": 41.37237268,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Redwood National and State Parks"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -77.29107785,
          37.48774472
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "bob_krick@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -77.29107785,
      "RecAreaID": 2902,
      "RecAreaPhone": "",
      "RecAreaDescription": "Richmond's story is not just the tale of one large Civil War battle, nor even one important campaign. Instead, the park's resources include a naval battle, a key industrial complex, the Confederacy's largest hospital, dozens of miles of elaborate original fortifications, and the evocative spots where determined soldiers stood paces apart and fought with rifles, reaping a staggering human cost.",
      "RecAreaMapURL": "http://www.nps.gov/rich/planyourvisit/maps.htm",
      "RecAreaLatitude": 37.48774472,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "We recommend that you start your visit to our park at the Civil War Visitor Center at Tredegar Iron Works located at 470 Tredegar Street:\nTraveling north on I-95: take exit 74C. Take 17th Street to Broad Street. Turn right on Broad Street and stay on it to 14th Street. Turn left on 14th Street and stay on it to Canal Street. Turn right and stay on Canal Street to 5th Street. Turn left on 5th Street and stay on it to Tredegar Street. Turn right on Tredegar Street and then turn right again into the parking lot.\nTraveling South on I-95: use exit 75 (3rd Street) for Civil War Visitor Center. The off ramp will merge onto 3rd Street. Stay on 3rd Street to Cary Street. Turn left onto Cary Street. Stay on Cary Street to 5th Street. Turn right on Tredegar Street.\nTraveling east on I-64: follow to intersection with I-95 south through the city of Richmond. Follow the above directions for I-95 south.\nTraveling west on I-64, use the 5th Street exit. Take 5th Street to its end. Turn right on Tredegar Street.",
      "Keywords": "",
      "RecAreaName": "Richmond National Battlefield Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -102.5979169,
          29.52743158
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -102.5979169,
      "RecAreaID": 2903,
      "RecAreaPhone": "",
      "RecAreaDescription": "It is an irresistible playground where unruly rapids check your skills as a canyon wren's definitive call cascades down ancient limestone cliffs. Below the chasm, the canyon's raw beauty dances across mirrored water. While the primal nature of the river stirs hunger for spirited adventure, the river is also an undulant ribbon of wetland corridor and, against all odds, the lifeblood of the desert.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 29.52743158,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Rio Grande Wild & Scenic River"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -66.96209908,
          44.87357167
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "info@fdr.net",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -66.96209908,
      "RecAreaID": 2904,
      "RecAreaPhone": "(506) 752 2922",
      "RecAreaDescription": "For many years, Franklin D. Roosevelt summered on Campobello Island. As an adult, he shared with his family the same active pursuits he enjoyed on the island as child. Although he visited less frequently after contracting polio, Campobello remained important to FDR. Today Roosevelt Campobello International Park serves as a memorial to FDR and a symbol of cooperation between the U.S. and Canada.",
      "RecAreaMapURL": "http://www.nps.gov/roca/planyourvisit/maps.htm",
      "RecAreaLatitude": 44.87357167,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "The park is located on Campobello Island in New Brunswick, Canada. The customs station is located at the southern end of the island. Car is the best way to travel to the park; there is no public transportation available.\n\nBy Car\nFrom Boston take I-95 north to Bangor, Maine. Take Route 1A east to Ellsworth, then follow Route 1 east to Whiting Village. Take Route 189 to Lubec and cross the FDR Memorial Bridge to Campobello Island. The visitor center is located approximately two miles from the bridge.\n\nBy Plane\nThe nearest full service airports are located in Bangor, Maine; St. John, New Brunswick; and Fredericton, New Brunswick. Car rentals are available at these airports.\n\nBy Ferry\nDuring the summer, a car ferry travels from Deer Island, NB, to Campobello Island.",
      "Keywords": "",
      "RecAreaName": "Roosevelt Campobello International Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -77.05002838,
          38.95125063
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "ROCR_Superintendent@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -77.05002838,
      "RecAreaID": 2905,
      "RecAreaPhone": "(202) 895 6070",
      "RecAreaDescription": "Rock Creek Park is truly a gem in our nation's capital. This 1,754-acre city park was officially authorized in 1890, making it the 3rd national park to be designated by the federal government. It offers visitors the opportunity to escape the bustle of the city and find a peaceful refuge, recreation, fresh air, majestic trees, wild animals, and thousands of years of human history.",
      "RecAreaMapURL": "http://www.nps.gov/rocr/planyourvisit/maps.htm",
      "RecAreaLatitude": 38.95125063,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/rocr/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Rock Creek Park"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2013-04-10",
      "RecAreaEmail": "noca_interpretation@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 2906,
      "RecAreaPhone": "",
      "RecAreaDescription": "Jagged peaks, deep valleys, cascading waterfalls, and over 300 glaciers adorn the North Cascades National Park Complex. Three park units in this mountainous region are managed as one and include North Cascades National Park, Ross Lake, and Lake Chelan National Recreation Areas. These complementary protected lands are united by a contiguous overlay of&nbsp;Stephen Mather Wilderness.",
      "RecAreaMapURL": "",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/noca/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Ross Lake National Recreation Area"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -105.6972879,
          40.3556924
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "romo_information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -105.6972879,
      "RecAreaID": 2907,
      "RecAreaPhone": "(970) 586 1206",
      "RecAreaDescription": "Rocky Mountain National Park's 415 square miles encompass and protect spectacular mountain environments. Enjoy Trail Ridge Road – which crests at over 12,000 feet including many overlooks to experience the subalpine and alpine worlds – along with over 300 miles of hiking trails, wildflowers, wildlife, starry nights, and fun times. In a world of superlatives, Rocky is on top!",
      "RecAreaMapURL": "http://www.nps.gov/romo/planyourvisit/maps.htm",
      "RecAreaLatitude": 40.3556924,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "For directions to the park visit http://www.nps.gov/romo/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Rocky Mountain National Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -122.360156,
          37.90999027
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "RORI_gen_info@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -122.360156,
      "RecAreaID": 2908,
      "RecAreaPhone": "(510) 232 5050",
      "RecAreaDescription": "Explore and honor the efforts and sacrifices of American civilians on the World War II home front.  Find out how they lived, worked and got along. Many faces, many stories, many truths weave a complex tapestry of myths and realities from this time of opportunity and loss.",
      "RecAreaMapURL": "http://www.nps.gov/rori/planyourvisit/maps.htm",
      "RecAreaLatitude": 37.90999027,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Rosie the Riveter WWII Home Front National Historical Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -71.41056665,
          41.8298955
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "John_McNiff@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -71.41056665,
      "RecAreaID": 2909,
      "RecAreaPhone": "",
      "RecAreaDescription": "Roger Williams National Memorial commemorates the life of the founder of Rhode Island and a champion of the ideal of religious freedom. Williams, banished from Massachusetts for his beliefs, founded Providence in 1636. This colony served as a refuge where all could come to worship as their conscience dictated without interference from the state.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 41.8298955,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Roger Williams National Memorial is located at 282 North Main Street in Providence's College Hill Historic District.</p>\n<p>From Interstate 95 North, take Exit 23 - State Offices. Take a left at the light to the bottom of Orms Street. At light, right onto Charles Street; continue straight through one light, then quick left into memorial parking lot.</p>\n<p>From Interstate 95 South, take Exit 23 - Charles Street. Take first left onto Ashburton Street and continue straight through three lights. After the third light, take a quick left into the memorial parking lot.<br />\n </p>",
      "Keywords": "",
      "RecAreaName": "Roger Williams National Memorial"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -85.81560314,
          34.97402063
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "shelia_Reed@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -85.81560314,
      "RecAreaID": 2910,
      "RecAreaPhone": "(256) 495 2672",
      "RecAreaDescription": "Russell Cave is an archaeological site with one of the most complete records of prehistoric cultures in the Southeast. Thousands of years ago a portion of Russell Cave's entrance collapsed, creating a shelter that, for more than 10,000 years, was home to prehistoric peoples. Today it provides clues to the daily lifeways of early North American inhabitants dating from 10,000 B.C. to 1650 A.D.",
      "RecAreaMapURL": "http://www.nps.gov/ruca/planyourvisit/maps.htm",
      "RecAreaLatitude": 34.97402063,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Russell Cave National Monument is located at 3729 County Road 98 in Bridgeport, Alabama. It is situated in the northeast corner of Alabama, just south of the Tennessee state line.</p>\n<p>From Chattanooga, Tennessee:<br />\nGo West on Interstate 24<br />\nTake U.S. Highway 72 West to County Road 75.<br />\nTurn Right onto County Road 75.<br />\nContinue on County Road 75 for one mile.<br />\nTurn Right onto County Road 98 for four miles.<br />\nTurn Left into the entrance of the park.</p>\n<p>From Huntsville or Scottsboro, Alabama:<br />\nTake U.S. Highway 72 East to County Road 75.<br />\nTurn Left onto County Road 75.<br />\nContinue on County Road 75 for one mile.<br />\nTurn Right onto County Road 98 for four miles.<br />\nTurn Left into the entrance of the park</p>\n<p> </p>",
      "Keywords": "",
      "RecAreaName": "Russell Cave National Monument"
    },
     {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -98.4289522,
          29.31262089
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "saan_interpretation@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -98.4289522,
      "RecAreaID": 2911,
      "RecAreaPhone": "",
      "RecAreaDescription": "After 10,000 years, the people of South Texas found their cultures, their very lives under attack. In the early 1700s Apache raided from the north, deadly diseases traveled from Mexico, and drought lingered. Survival lay in the missions. By entering a mission, they foreswore their traditional life to become Spanish, accepting a new religion and pledging fealty to a distant and unseen king.",
      "RecAreaMapURL": "http://www.nps.gov/saan/planyourvisit/maps.htm",
      "RecAreaLatitude": 29.31262089,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/saan/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "San Antonio Missions National Historical Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -92.36126685,
          45.70019235
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "sacn_interpretation@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -92.36126685,
      "RecAreaID": 2912,
      "RecAreaPhone": "(715) 483 2274",
      "RecAreaDescription": "Grab your paddle and your longing for adventure and head to the St. Croix and Namekagon rivers! Together they form the St. Croix National Scenic Riverway, offering over 200 miles of clean water that glides and rushes through a forested landscape. Paddle, boat, fish, and camp among this wild and scenic beauty. Hiking and historic towns also beckon, if you can bear to leave the cool water.",
      "RecAreaMapURL": "http://www.nps.gov/sacn/planyourvisit/maps.htm",
      "RecAreaLatitude": 45.70019235,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Plane<br />\nMinneapolis/St. Paul or Duluth, Minnesota are the nearest commercial airports. Car rentals are available at the airports.</p>\n<p>Car<br />\nMinnesota Hwy 95 and Wisconsin Hwy 35 parallel the lower stretches of the Riverway and Wisconsin Hwy 63 the upper stretches. Major Roads crossing the river between Minnesota and Wisconsin are I-94, Hwy 8, Hwy 70, and Hwy 77/48.</p>\n<p>Public Transportation<br />\nTaxi or bus can be taken to Stillwater, MN from Minneapolis/St. Paul MN. There is no public transportation along the Riverway.<br />\n<br />\nPark Headquarters is located in St. Croix Falls, Wisconsin at the corner of Hamilton and Massachusetts off of WI Hwy 87 which intersects with Hwy 8.<br />\n </p>",
      "Keywords": "",
      "RecAreaName": "Saint Croix National Scenic Riverway"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -67.13363651,
          45.12858838
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "acadia_information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -67.13363651,
      "RecAreaID": 2913,
      "RecAreaPhone": "",
      "RecAreaDescription": "The winter of 1604-1605 on Saint Croix Island was a cruel one for Pierre Dugua's French expedition. Iced in by freezing temperatures and cut off from fresh water and game, 35 of 79 men died. As spring arrived and native people traded game for bread, the health of those remaining improved. Although the expedition moved on by summer, the beginning of French presence in North America had begun.",
      "RecAreaMapURL": "http://www.nps.gov/sacr/planyourvisit/maps.htm",
      "RecAreaLatitude": 45.12858838,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Saint Croix Island International Historic Site is best reached by private vehicle. The site is located eight miles south of Calais, Maine, on U.S. 1, and can be reached either by Route 9 from Bangor or U.S. 1, the coastal route from Portland and points south. The parking lot is located on the left after entering the mainland site.\n\nSeveral different airlines service airports at Bangor, Maine (103 miles), or Saint John, New Brunswick, Canada (80 miles). Car rentals are available at both airports.\n\nThe only visitor access to the island is by privately owned boats. Visits to the island are not encouraged due to its fragile nature.",
      "Keywords": "",
      "RecAreaName": "Saint Croix Island International Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "lodi_administration@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 2914,
      "RecAreaPhone": "",
      "RecAreaDescription": "You can almost hear the whoops and cries of \"All's set!\" as trail hands hitched their oxen to freight wagons carrying cargo between western Missouri and Santa Fe, New Mexico. Follow the Santa Fe National Historic Trail through five states and you'll find adventure and evidence of past travelers who made this remarkable trip before you!",
      "RecAreaMapURL": "http://www.nps.gov/safe/planyourvisit/maps.htm",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Getting To the Santa Fe National Historic Trail</p>\n<p>Plane<br />\nYou can reach the trail by flying into a number of airports, including Kansas City, Jefferson City, and St. Louis, Missouri; Wichita, Topeka, Dodge City, Great Bend, and Garden City, Kansas; Albuquerque and Santa Fe, New Mexico; and Denver, Colorado Springs, and Pueblo, Colorado.</p>\n<p>Car<br />\nYou can reach most trail sites by auto, bicycle, or on foot. Some sites are along unpaved roads.</p>\n<p>Public Transportation<br />\nCommercial bus service is available to many cities and towns along the trail.</p>\n<p> </p>Find places to go in six states. Go to: www.nps.gov/safe/planyourvisit/placestogo.htm",
      "Keywords": "",
      "RecAreaName": "Santa Fe National Historic Trail"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -122.4244415,
          37.81005871
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "lynn_cullivan@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -122.4244415,
      "RecAreaID": 2915,
      "RecAreaPhone": "",
      "RecAreaDescription": "Stand on the stern of Balclutha, face west to feel the fresh wind blowing in from the Pacific Ocean. Located in the Fisherman's Wharf neighborhood, San Francisco Maritime National Historical Park offers the sights, sounds, smells and stories of Pacific Coast maritime history.",
      "RecAreaMapURL": "http://www.nps.gov/safr/planyourvisit/maps.htm",
      "RecAreaLatitude": 37.81005871,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "At Hyde and Jefferson Streets.",
      "Keywords": "",
      "RecAreaName": "San Francisco Maritime National Historical Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -72.37333969,
          43.4997238
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "gregory_c_schwarz@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -72.37333969,
      "RecAreaID": 2916,
      "RecAreaPhone": "",
      "RecAreaDescription": "Discover the home, studios and gardens of Augustus Saint-Gaudens, one of America's greatest sculptors. See over 100 of his artworks in the galleries and on the grounds, from heroic public monuments to expressive portrait reliefs, and the gold coins which changed the look of American coinage. Enjoy summer concerts, explore nature trails, or indulge your hidden talents during a sculpture class.",
      "RecAreaMapURL": "http://www.nps.gov/saga/planyourvisit/maps.htm",
      "RecAreaLatitude": 43.4997238,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/saga/planyourvisit/directions.htm\n\nFrom western Massachusetts, take Route I 91 N to Exit 8 (Ascutney). Bear right, proceed through the traffic light , cross the river to NH. At next light, turn left onto NH Rt. 12A and go north about 8 miles (10 minutes). Saint-Gaudens Rd. is on the right 1.5 miles past the Cornish-Windsor covered bridge. Proceed up Saint-Gaudens Road .5 miles. The parking lot is on your right.\n\nFrom western Vermont, take Route I 89 S. Cross the Connecticut River and take the first exit, #20 (West Lebanon), Turn right onto NH Route 12A S. for about 12 miles, Saint-Gaudens Rd. is on the right.\n\nFrom eastern N.H. and Massachusetts, take Route I 89 N - use exit #20 (West Lebanon). At exit, turn left onto Route 12A, for about 12 miles, Saint-Gaudens Rd. will be on the left. Proceed up Saint-Gaudens Road .5 miles. The parking lot will be on your right",
      "Keywords": "",
      "RecAreaName": "Saint-Gaudens National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -110.7574974,
          32.20909636
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "sagu_information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -110.7574974,
      "RecAreaID": 2917,
      "RecAreaPhone": "(520) 733 5153",
      "RecAreaDescription": "Tucson, Arizona is home to the nation's largest cacti. The giant saguaro is the universal symbol of the American west. These majestic plants, found only in a small portion of the United States, are protected by Saguaro National Park, to the east and west of the modern city of Tucson. Here you have a chance to see these enormous cacti, silhouetted by the beauty of a magnificent desert sunset.",
      "RecAreaMapURL": "http://www.nps.gov/sagu/planyourvisit/maps.htm",
      "RecAreaLatitude": 32.20909636,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Rincon Mountain District (EAST): 3693 S. Old Spanish Trail, Tucson, Arizona 85730\nFrom Interstate 10 (Primary Route from I-10)\nExit I-10 at exit # 275 (Houghton Road) and drive 9.5 miles (15 kilometers) north to Old Spanish Trail and turn right. Drive 3 miles (5 kilometers) southeast on Old Spanish Trail and the park entrance, which will be on the left side of the road.\n\nTucson Mountain District (WEST): 2700 N. Kinney Road, Tucson, Arizona 85743\nFrom Interstate 10 (Primary Route from I-10)\nIf you are traveling eastbound, there is one direction sign at Exit # 242, which is called the Avra Valley Road. Drive 5 miles (8 kilometers) west on Avra Valley Road to Sandario Road (turn left on Sandario Road). Drive 9 miles (14.5 kilometers) south on Sandario Road to Kinney Road (turn left on Kinney Road). The visitor center is 2 miles (3 kilometers) down Kinney Road on the left side of the road. \n\nFor more alternative routes please go to: http://www.nps.gov/sagu/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Saguaro National Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -73.49686438,
          40.88579128
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "sahi_information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -73.49686438,
      "RecAreaID": 2918,
      "RecAreaPhone": "",
      "RecAreaDescription": "Sagamore Hill was the home of Theodore Roosevelt, 26th President of the United States, from 1885 until his death in 1919. During Roosevelt's time in office, his \"Summer White House\" was the focus of international attention. Explore the natural surroundings and become inspired by the legacy of one of America's most popular presidents.",
      "RecAreaMapURL": "http://www.nps.gov/sahi/planyourvisit/maps.htm",
      "RecAreaLatitude": 40.88579128,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Take either the Northern State Parkway to Exit 35N or the Long Island Expressway (I-495) to Exit 41N. At those exits, take Route 106 North for 6 miles into downtown Oyster Bay. Turn right onto East Main Street (at Nobman's Hardware Store) and travel 2 miles. Turn left onto Cove Neck Road and drive 1.5 miles to Sagamore Hill.\n\nThe Southern State Parkway connects to NSP/LIE via the Wantagh/Meadowbrook Parkways, or the Seaford/Oyster Bay Expressway. Take Southern State Exit 28A-North to Route 135 North (Seaford/Oyster Bay Expressway) for 10 miles to Exit 14E (Woodbury) and Route 25 (Jericho Turnpike). Turn right/east, travel to the third traffic light. Turn left on South Woods Road, traveling 1.6 miles to its end and turn right on to Cold Spring Road. Travel 1 mile to Route 25A intersection. Turn left on Route 25A and travel 0.7 miles downhill to the Cove Road stoplight. Turn right on Cove Road for 1.7 miles to Cove Neck Road. Continue to the park approximately 1.5 miles further.",
      "Keywords": "",
      "RecAreaName": "Sagamore Hill National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -71.0076953,
          42.46830664
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "SAIR_Iron_Works_House@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -71.0076953,
      "RecAreaID": 2919,
      "RecAreaPhone": "",
      "RecAreaDescription": "In the 1600's, on the banks of the Saugus River, something extraordinary happened.  Explore the place where European iron makers brought their special skills to a young Massachusetts colony. This nine-acre National Park includes working waterwheels, hot forges, mills, an historic 17th century home, and a lush river basin.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 42.46830664,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "GPS Address\n244 Central Street, Saugus, MA\n(42.467998,-71.008698)\n\nBy Car\nFrom Interstate 95 northbound or southbound take the Walnut Street exit, number 43. Drive east towards Lynn and follow the brown National Park Service signs for 3.5 miles to the Iron Works.\n\nFrom Route 1 northbound take Main Street Saugus exit and follow the National Park Service signs east through Saugus Center to the Iron Works.\n\nFrom Route 1 southbound take the Walnut Street exit (East) and follow the National Park Service signs 1.5 miles to the Iron Works.\n\nPublic Transit\nPublic bus service (#430) runs daily except Sundays from the Malden subway station (Orange Line).\n\nFrom Airport\nBoston's Logan Airport is about 9 miles south of Saugus. Take route 1A North to Route 60 West to Route 1 North. Take the Main Street, Saugus, exit, and follow NPS signs through Saugus Center to the site at 244 Central Street.",
      "Keywords": "",
      "RecAreaName": "Saugus Iron Works National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -123.0610277,
          48.51241933
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "Doug_Halsey@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -123.0610277,
      "RecAreaID": 2920,
      "RecAreaPhone": "",
      "RecAreaDescription": "San Juan Island is well known for splendid vistas, saltwater shore, quiet woodlands, orca whales and one of the last remaining native prairies in the Puget Sound/Northern Straits region. But it was also here in 1859 that the United States and Great Britain nearly went to war over possession of the island, the crisis ignited by the death of a pig.",
      "RecAreaMapURL": "http://www.nps.gov/sajh/planyourvisit/maps.htm",
      "RecAreaLatitude": 48.51241933,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "San Juan Island National Historical Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -66.11848623,
          18.46873857
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "SAJU_Superintendent@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -66.11848623,
      "RecAreaID": 2921,
      "RecAreaPhone": "",
      "RecAreaDescription": "San Juan National Historic Site preserves stories of great ambition and aspirations. Countries fought for control of this tiny yet strategic island for centuries. Generations of soldiers have lived and worked within the forts. Visitors today are as inspired by these stories as they are by the beauty of the architecture and the ingenuity of design and engineering of this World Heritage Site.",
      "RecAreaMapURL": "http://www.nps.gov/saju/planyourvisit/maps.htm",
      "RecAreaLatitude": 18.46873857,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Car<br />\nFrom the international airport take route 26 west. At the bridge connecting with Old San Juan, follow Luis Muñoz Rivera Avenue to Fort San Cristóbal, just past the Puerto Rico Capitol building. This trip is 10 miles and 20 minutes long. <br />\nPublic Transportation<br />\nIf arriving on a cruise ship, most piers are within walking distance (10-15 minutes). Just walk up the hill, past the Plaza Colon. The Panamerican pier is 3 miles away, and taxis are available.</p>",
      "Keywords": "",
      "RecAreaName": "San Juan National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -70.88640867,
          42.52024529
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "SAMA_Orientation_Center@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -70.88640867,
      "RecAreaID": 2922,
      "RecAreaPhone": "",
      "RecAreaDescription": "When the United States was young, ships from Salem, Massachusetts helped to build the new nation's economy by carrying cargo back and forth from the West to Asia. The historic buildings, wharves, and reconstructed tall ship at this nine-acre National Park tell the stories of the sailors, Revolutionary War privateers, and merchants who brought the riches of the world to America.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 42.52024529,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "GPS Address\n193 Derby Street, Salem MA (42.52129, -70.88711)\n\nTo Salem\nFrom Route 128, take exit 25A, Route 114 East to Salem. Follow Route 114 into Salem where it will become North Street, then Summer Street (pass the Witch House on the right). Turn left onto Norman Street and then stay straight through the traffic light onto Derby Street (note: Route 114 will turn right at this corner toward Marblehead). Follow Derby Street throught the traffic light straight past the Beverly Cooperative Bank to the next intersection.",
      "Keywords": "",
      "RecAreaName": "Salem Maritime National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -118.7708619,
          34.09777606
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "samo_interpretation@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -118.7708619,
      "RecAreaID": 2923,
      "RecAreaPhone": "(805) 370 2301",
      "RecAreaDescription": "Hidden in plain sight from Los Angeles, the Santa Monica Mountains offer easy access to surprisingly wild places. Experience the famous beaches of Malibu or explore more than 500 miles of trails. The park abounds with historical and cultural sites, from old movie ranches to Native American centers. What will you and your family discover?",
      "RecAreaMapURL": "http://www.nps.gov/samo/planyourvisit/maps.htm",
      "RecAreaLatitude": 34.09777606,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Anthony C. Beilenson Interagency Visitor Center located King Gillette Ranch, Calabasas, CA. \n\nHours: Open from 9am - 5pm, 7-days a week (closed some federal holidays). Phone: 805-370-2301.\n\n26876 Mulholland Highway, Calabasas, CA, 91302\n\nDirections: Ventura Freeway (U.S. 101) to Las Virgenes Road (Co. Hwy N1) exit. Go 3 miles south on Las Virgenes Road to Mulholland Highway intersection (traffic light). Turn left on Mulholland Highway. Park entrance is 0.1 mile on right.\n\nGPS Coordinates: N 34.1046 W -118.7090\n\nParking: Short-term parking will be available adjacent to the visitor center. Additional paid parking is also located nearby.",
      "Keywords": "",
      "RecAreaName": "Santa Monica Mountains National Recreation Area"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -102.5169542,
          38.56414189
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "sand_information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -102.5169542,
      "RecAreaID": 2924,
      "RecAreaPhone": "",
      "RecAreaDescription": "The Sand Creek Massacre: profound, symbolic, spiritual, controversial, a site unlike any other in America.  \n\nAs 675 cavalrymen came around a prairie bend, the camps of Chiefs Black Kettle, White Antelope, and Left Hand lay in the valley before them.  Chaotic, horrific, tumultuous, and bloody, the events of November 29, 1864 changed the course of history.",
      "RecAreaMapURL": "http://www.nps.gov/sand/planyourvisit/maps.htm",
      "RecAreaLatitude": 38.56414189,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>The Sand Creek Massacre is located in Kiowa County Colorado. To visit the site, follow Colorado State Highway 96 east off Highway 287 near Eads, or west off Highway 385 at Sheridan Lake. Near Chivington, turn north onto County Road 54, or at Brandon, turn north onto County Road 59. Follow these roads to their intersections with County Road W. The park entrance is along W a mile east (right) of 54 or several miles west (left) of 59.</p>\n<p>Warning: A caution to large vehicles and motorcyclists: There is approximately 8 miles of dirt/sand roads leading otthe site.<br />\n </p>",
      "Keywords": "",
      "RecAreaName": "Sand Creek Massacre National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -106.2050309,
          34.35423203
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "SAPU_Superintendent@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -106.2050309,
      "RecAreaID": 2926,
      "RecAreaPhone": "",
      "RecAreaDescription": "Tucked away in the middle of New Mexico you'll find Salinas Pueblo Missions National Monument. The three sites offer a glimpse into a unique time in history. A time entrenched with cultural borrowing, conflict, and struggles. The now abandoned sites stand as reminders of the Spanish and Pueblo People's early encounters.",
      "RecAreaMapURL": "http://www.nps.gov/sapu/planyourvisit/maps.htm",
      "RecAreaLatitude": 34.35423203,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Salinas Pueblo Missions National Monument is a collection of three discontinuous units with a central visitor center/headquarters located in Mountainair, New Mexico.  The Mountainair headquarters can be reached by taking I-25 south from Albuquerque to Belen, then NM 47 diagonally to US 60, then east 21 miles to Mountainair. To travel the historic highway route from the north, take I-40 east from Albuquerque to NM 337, drive south 54 miles to Mountainair.  From Mountainair, The Abo Mission is located approximately 9 miles west on Highway 60, the Quarai Mission is located approximately 9 miles north on Highway 55, and the Gran Quivira Mission is located approximately 26 miles south on Highway 55.  For more directional information please call the park headquarters at (505) 847-2585, or visit: http://www.nps.gov/sapu/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Salinas Pueblo Missions National Monument"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -73.63386108,
          42.99522612
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "SARA_info@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -73.63386108,
      "RecAreaID": 2927,
      "RecAreaPhone": "(518) 664 9821",
      "RecAreaDescription": "Here, in 1777 during the American War for Independence, American troops battled and beat a British invasion force, marking the first time in world history that a British Army ever surrendered. This crucial victory secured essential foreign recognition and support, fomented world-wide wars, affirmed United States independence, and changed the face of the world.",
      "RecAreaMapURL": "http://www.nps.gov/sara/planyourvisit/maps.htm",
      "RecAreaLatitude": 42.99522612,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Driving Directions:\nSaratoga National Historical Park is a day-use park made up of four distinct sites, none physically touching.  For complete driving directions, please use the following link to the park's webpage:\nhttp://www.nps.gov/sara/planyourvisit/directions.htm\nThere is no public transportation available.",
      "Keywords": "",
      "RecAreaName": "Saratoga National Historical Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -64.75519348,
          17.77908602
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "CHRI_Web_Requests@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -64.75519348,
      "RecAreaID": 2928,
      "RecAreaPhone": "(806) 814 9894",
      "RecAreaDescription": "Salt River Bay National Historical Park and Ecological Preserve uniquely documents the human and natural Caribbean world from the earliest indigenous settlements in the central Caribbean to their clash with seven different colonial European powers to the present day.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 17.77908602,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "www.nps.gov/sari",
      "Keywords": "",
      "RecAreaName": "Salt River Bay National Historical Park and Ecological Preserve"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -103.7071351,
          41.83464193
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "SCBL_ranger_activities@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -103.7071351,
      "RecAreaID": 2929,
      "RecAreaPhone": "(308) 436 9700",
      "RecAreaDescription": "Towering 800 feet above the North Platte River, Scotts Bluff has served as a landmark for peoples from Native Americans to emigrants on the Oregon, California and Mormon Trails to modern travelers. Rich with geological and paleontological history as well as human history, there is much to discover while exploring the 3,000 acres of Scotts Bluff National Monument.",
      "RecAreaMapURL": "http://www.nps.gov/scbl/planyourvisit/maps.htm",
      "RecAreaLatitude": 41.83464193,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Plane<br />\nCommercial flights arrive at Western Nebraska Regional Airport in Scottsbluff.</p>\n<p>Car<br />\nVisitors traveling east-west on Interstate 80 can exit at Kimball, Nebraska and drive 45 miles north on Highway 71. Follow National Park Service signs three miles west of Gering, Nebraska on Old Oregon Trail (State Highway 92 West).<br />\nVisitors following Old Oregon Trail along the North Platte River using State Highway 26 or 92, should follow the National Park Service signs<br />\n </p>",
      "Keywords": "",
      "RecAreaName": "Scotts Bluff National Monument"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -118.587429,
          36.71277299
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "SEKI_Interpretation@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -118.587429,
      "RecAreaID": 2931,
      "RecAreaPhone": "",
      "RecAreaDescription": "This dramatic landscape testifies to nature's size, beauty, and diversity--huge mountains, rugged foothills, deep canyons, vast caverns, and the world's largest trees. These two parks lie side by side in the southern Sierra Nevada east of the San Joaquin Valley. Weather varies a lot by season and elevation, which ranges from 1,370' to 14,494'. Sequoias grow at 5,000 - 7,000', above usual snowline.",
      "RecAreaMapURL": "http://www.nps.gov/seki/planyourvisit/maps.htm",
      "RecAreaLatitude": 36.71277299,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Sequoia and Kings Canyon National Parks are open all year. Enter Sequoia National Park via Hwy. 198 near Three Rivers, CA. Enter Kings Canyon National Park via Hwy. 180 east from Fresno in Grant Grove. The main road between the parks is called the Generals Highway.\n\nLength Advisory for Vehicles Entering/Exiting Sequoia National Park via Generals Highway and Hwy. 198: Follow the recommendations below for your safety and the safety of others.\n\n-Vehicles longer than 22 ft. are not advised between Potwisha Campground and the Giant Forest Museum in Sequoia National Park.\n-Vehicles longer than 24 ft. are not advised between the Foothills Visitor Center and Potwisha Campground in Sequoia National Park.\n\nThe roads leading to the Giant Forest Sequoia Grove were built in the early 1920s and cannot accommodate longer vehicles.\n\nFor more information, visit www.nps.gov/seki or call (24-hours) 559-565-3341.",
      "Keywords": "",
      "RecAreaName": "Sequoia & Kings Canyon National Parks"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -86.72823702,
          32.27082092
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "semo information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -86.72823702,
      "RecAreaID": 2932,
      "RecAreaPhone": "(334) 877 1984",
      "RecAreaDescription": "On August 6, 1965, President Lyndon Johnson signed, the Voting Rights Act of 1965, which extended equal voting rights for African-Americans. As both White and Black non-violent supporters led by Dr. Martin Luther King Jr. fought for the right to vote in Central Alabama, today, you can trace their march toward freedom on the 54-mile trail and connect with their stories at the Interpretive Centers.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 32.27082092,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p><strong>Getting There</strong></p>\n<p><strong>Plane</strong></p>\n<p>Visitors may fly into the Montgomery Regional Airport. The airport is on the trail route. Exiting the airport, go east on Selma Highway/Hwy 80 to Selma, AL or west to Montgomery, AL.</p>\n<p><strong>Car</strong></p>\n<p><strong>From Birmingham, AL</strong> follow I-65 south and take Exit 212 to Clanton. From Clanton take Hwy 145 to Hwy 22 and follow Hwy 22 for 45 minutes to Selma.</p>\n<p><strong>From Atlanta, GA</strong> take I-85 south to Montgomery, AL. Merge onto I-65 south and get off on Exit 167 to Hwy 80 west. Continue for 43 miles to Selma.</p>\n<p><br />\nThe start of the trail is located at Brown Chapel, A.M.E. Church in Selma located on Martin Luther King, Jr. Street. Follow Trail markers to scenic Highway 80 through Lowndes County, AL. Continue on Hwy 80 to Montgomery terminating at the Alabama State Capitol in Montgomery located on Dexter Avenue.<br />\n </p>",
      "Keywords": "",
      "RecAreaName": "Selma To Montgomery National Historic Trail"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -78.46907715,
          38.49236644
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "SHEN_Superintendent@NPS.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -78.46907715,
      "RecAreaID": 2933,
      "RecAreaPhone": "(540) 999-3500 ",
      "RecAreaDescription": "Just 75 miles from the bustle of Washington, D.C., Shenandoah National Park is your escape to recreation and re-creation. Cascading waterfalls, spectacular vistas, quiet wooded hollows—take a hike, meander along Skyline Drive, or picnic with the family. 200,000 acres of protected lands are haven to deer, songbirds, the night sky...and you. Plan a Shenandoah escape today!",
      "RecAreaMapURL": "http://www.nps.gov/shen/planyourvisit/maps.htm",
      "RecAreaLatitude": 38.49236644,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "GPS devices and online mapping services are not reliable in directing you to the park.Shenandoah is 105 miles long with four entrances: Front Royal, Virginia off Route 340; Route 211 east of Luray and west of Sperryville, Virginia; Route 33 east of Elkton and west of Stanardsville, Virginia; and Routes 64 and 250 east of Waynesboro and west of Charlottesville, Virginia.",
      "Keywords": "",
      "RecAreaName": "Shenandoah National Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -88.3421072,
          35.13850907
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -88.3421072,
      "RecAreaID": 2934,
      "RecAreaPhone": "(731) 689 5696",
      "RecAreaDescription": "Visit the sites of the most epic struggle in the Western Theater of the Civil War. Nearly 110,000 American troops clashed in a bloody contest that resulted in 23,746 casualties; more casualties than in all of America's previous wars combined. Explore both the Shiloh and Corinth battlefields to discover the impact of this struggle on the soldiers and on the nation.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 35.13850907,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Shiloh National Military Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -135.3156876,
          57.04718173
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "NPS_SITK_Interpretation@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -135.3156876,
      "RecAreaID": 2936,
      "RecAreaPhone": "(907) 747 0107",
      "RecAreaDescription": "On an island amid towering spruce and hemlock, Sitka National Historical Park preserves the site of a battle between invading Russian traders and indigenous Kiks.ádi Tlingit. Park visitors are awed by Tlingit and Haida totem poles standing along the park's scenic coastal trail, and the restored Russian Bishop's House speaks of Russia's little known colonial legacy in North America.",
      "RecAreaMapURL": "http://www.nps.gov/sitk/planyourvisit/maps.htm",
      "RecAreaLatitude": 57.04718173,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Sitka National Historical Park is located in Sitka, Alaska. Sitka is situated on Baranof Island on the outer coast of Alaska's Inside Passage. No roads connect the city to the mainland; Sitka can be reached only by air or sea. Visitors can travel to Sitka by scheduled and charter air services, ferry, and cruise ships.\n\nSitka NHP's visitor center and Totem Loop Trail is located at the east end of Lincoln Street, approximately one-quarter mile from downtown Sitka. The visitor center and Russian Bishop's House are located about a ten-minute walk apart in this essentially urban park. This park map provides a detailed view of both facilities and the park trails: http://www.nps.gov/sitk/planyourvisit/upload/Talk_a_Walk_in_Your_Park.pdf\n\nDetailed directions and traveling options can be found on the following page: http://www.nps.gov/sitk/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Sitka National Historical Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -86.02706591,
          44.92844962
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "slbe_interpretation@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -86.02706591,
      "RecAreaID": 2937,
      "RecAreaPhone": "",
      "RecAreaDescription": "Miles of sand beach, bluffs that tower 450' above Lake Michigan, lush forests, clear inland lakes, unique flora and fauna make up the natural world of Sleeping Bear Dunes. High dunes afford spectacular views across the lake. An island lighthouse, US Life-Saving Service stations, coastal villages, and picturesque farmsteads reflect the park's rich maritime, agricultural, and recreational history.",
      "RecAreaMapURL": "http://www.nps.gov/slbe/planyourvisit/maps.htm",
      "RecAreaLatitude": 44.92844962,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "By Car: From the south (Detroit or Chicago areas) - Take US-31, US-131, US-27 to M-115 & M-37, I-75 and M-72 North to Traverse City, then west on M-72 to the Village of Empire. You may also get to Empire from the south via US-31 to Ludington and then north to Manistee. You can follow either US-31 or M-22 from north of Manistee. If you follow M-22, stay on it through Frankfort and on to Empire. In Empire, turn right on M-72 and drive about 100 yards and you will see the Visitor Center on your left. If you follow US-31 north of Manistee, continue north on US-31 to Beulah. Proceed 3.3 miles and turn left on County Road 706. Follow CR 706 4.4 miles to M-22. Turn right on M-22 and drive north to Empire. From the north (Michigan's Upper Peninsula), take I-75 to Grayling and follow M-72 to Traverse City or take US-31 south to Traverse City, then go west on M-72 to the Village of Empire.\n\nBy Plane: via Cherry Capital Airport (TVC)in Traverse City\n\nBy Bus: via BATA bus from Traverse City to Empire.",
      "Keywords": "",
      "RecAreaName": "Sleeping Bear Dunes National Lakeshore"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -72.57967415,
          42.1086368
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -72.57967415,
      "RecAreaID": 2938,
      "RecAreaPhone": "",
      "RecAreaDescription": "For nearly two centuries, the US Armed Forces and American industry looked to Springfield Armory for innovative engineering and superior firearms. Springfield Armory National Historic Site commemorates the critical role of the nation's first armory by preserving and interpreting the world's largest historic US military small arms collection, along with historic archives, buildings, and landscapes.",
      "RecAreaMapURL": "http://www.nps.gov/spar/planyourvisit/maps.htm",
      "RecAreaLatitude": 42.1086368,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Springfield Armory National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -75.67037255,
          41.40757521
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "Bill_Nalevanko@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -75.67037255,
      "RecAreaID": 2940,
      "RecAreaPhone": "",
      "RecAreaDescription": "You'd feel heat from the firebox, smell hot steam and oil; you'd hear the whistle, feel the ground vibrate, and watch as one-ton drive rods turned steel wheels. Remember the sound of \"chuff-chuff\" from the smokestack? Today, you can learn the history of steam railroad transportation, and the people who built, repaired and rode, as we work to preserve a special era in America's industrial history!",
      "RecAreaMapURL": "http://www.nps.gov/stea/planyourvisit/maps.htm",
      "RecAreaLatitude": 41.40757521,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "From Northwestern Pennsylvania:  Proceed east on US Route 6 and then south on I-81 to exit 185.\nFrom Philadelphia:  Proceed north on I-476 (PA Turnpike, Northeast Extension) to exit 115. Take I-81 north to exit at 185.\nFrom Baltimore and other points south:  Proceed north to Harrisburg and onto I-81. Take I-81 north to exit 185.\nFrom Ohio and west:  Proceed east on I-80 to I-81 north to exit 185.\nFrom New York City, New Jersey and east:  Proceed west on I-80 or I-84. At intersection with I-380, proceed north. At intersection with I-81, proceed south to exit 185.\nFrom New England:  Proceed west on I-84.  I-380 north (briefly) to I-81 south (left lanes) to exit 185.\nFrom Montreal, Upstate New York:  Proceed south on I-81 to exit 185.\nExit 185 is the Central Scranton Expressway to downtown Scranton. Stay in far left lane to Lackawanna Ave (left turn at traffic light). Lackawanna Ave to left turn at Cliff St (just beyond Martz/Greyhound Bus terminal).",
      "Keywords": "",
      "RecAreaName": "Steamtown National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -74.04232397,
          40.69572149
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "stli_info@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -74.04232397,
      "RecAreaID": 2941,
      "RecAreaPhone": "",
      "RecAreaDescription": "\"The Statue of Liberty Enlightening the World\" was a gift of friendship from the people of France to the United States and is recognized as a universal symbol of freedom and democracy. The Statue of Liberty was dedicated on October 28, 1886.  It was designated as a National Monument in 1924.  Employees of the National Park Service have been caring for the colossal copper statue since 1933.",
      "RecAreaMapURL": "http://www.nps.gov/stli/planyourvisit/maps.htm",
      "RecAreaLatitude": 40.69572149,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "One National Park on Two Islands:\nVisitors arrive and depart Ellis and Liberty Islands, located in New York Harbor, via ferries operated by Statue Cruises (statuecruises.com). These ferries leave from two locations: Battery Park, at the southernmost tip of Manhattan in New York City, New York, and Liberty State Park in Jersey City, New Jersey. Private vessels may not dock at either Ellis or Liberty Islands.\nGetting to the Ferry:\nBattery Park, lower Manhattan, New York City, New York: Visitors boarding ferries in lower Manhattan should use public transportation whenever possible. For those who are driving or carpooling, parking can be both expensive and difficult for those who are not familiar with traffic in New York City.\nLiberty State Park, Jersey City, New Jersey: Driving and parking at Liberty State Park is easier, but even here, visitors have options for public transportation.",
      "Keywords": "",
      "RecAreaName": "Statue Of Liberty National Monument"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -86.43078399,
          35.87608652
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "stri_information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -86.43078399,
      "RecAreaID": 2942,
      "RecAreaPhone": "",
      "RecAreaDescription": "The Battle of Stones River began on the last day of 1862 and was one of the bloodiest conflicts of the Civil War. The battle produced important military and political gains for the Union, and it changed forever the people who lived and fought here.",
      "RecAreaMapURL": "http://www.nps.gov/stri/planyourvisit/maps.htm",
      "RecAreaLatitude": 35.87608652,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Stones River National Battlefield"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -111.510376,
          35.37114323
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "FLAG_Information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -111.510376,
      "RecAreaID": 2943,
      "RecAreaPhone": "(928) 526-1157",
      "RecAreaDescription": "The colors at the volcano's rim are the dusky red, yellow, and orange of sunset, but the crater is only part of the story. Around 1060 CE the ground here began to shake, and a fiery crack spewed the earth's insides high into the air. When the eruption finished, it had changed both the landscape and the people who lived here. Today, it teaches how nature and humans are linked to each other.",
      "RecAreaMapURL": "http://www.nps.gov/sucr/planyourvisit/maps.htm",
      "RecAreaLatitude": 35.37114323,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>By Car<br />\nFrom Flagstaff, take U.S 89 north for 12 miles (19km), turn right on the Sunset Crater - Wupatki Loop road and continue 2 miles (3km) to the visitor center.</p>\n<p>By Plane<br />\nThe nearest airport is located in Flagstaff, AZ.</p>\n<p>By Public Transportation<br />\nNone. Check with the Flagstaff Convention and Visitors Bureau for commercial tour services.</p>",
      "Keywords": "",
      "RecAreaName": "Sunset Crater Volcano National Monument"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -96.5670822,
          38.44023613
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "tapr_interpretation@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -96.5670822,
      "RecAreaID": 2944,
      "RecAreaPhone": "",
      "RecAreaDescription": "Where's the tall grass?\n\nTallgrass prairie once covered 170 million acres of North America. Within a generation the vast majority was developed and plowed under. Today less than 4% remains, mostly here in the Kansas Flint Hills. The preserve protects a nationally significant remnant of the once vast tallgrass prairie and its cultural resources. Here the tallgrass prairie takes its last stand.",
      "RecAreaMapURL": "http://www.nps.gov/tapr/planyourvisit/maps.htm",
      "RecAreaLatitude": 38.44023613,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/tapr/planyourvisit/directions.htm\n\nBy Car\n\nThe preserve is located in northern Chase County, KS 2 miles north of intersection U.S. Hwy 50 and Flint Hills National Scenic Byway 177 (K-177) west of Strong City. Watch for brown attraction signs.\n \nBy Plane\n \nKansas City and Wichita International Airports\n \nFrom the Kansas City / Overland Park area, travel southwest on I-35 to Emporia, KS. At Emporia travel 16 miles west on U.S. Hwy 50 and north for 2 miles on K-177.\n \nFrom Wichita travel northeast on I-335 (Kansas Turnpike) to Cassody (exit 92). Travel north on K-177 for 25 miles to Strong City. Travel slow and watch for the K-177 sign in downtown Strong City. Turn left and continue to follow K-177 west and then north as it crosses over U.S. Hwy 50. Travel north 2 miles on K-177 and watch for the small brown attraction sign and buildings on the west side of the highway.",
      "Keywords": "",
      "RecAreaName": "Tallgrass Prairie National Preserve"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -77.06241918,
          38.89584162
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "gwmp_superintendent@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -77.06241918,
      "RecAreaID": 2945,
      "RecAreaPhone": "",
      "RecAreaDescription": "In the 1930s, landscape architects transformed Mason's Island from neglected, overgrown farmland into Theodore Roosevelt Island, a memorial to America's 26th president. They conceived a \"real forest\" designed to mimic the natural forest that once covered the island. Today miles of trails through wooded uplands and swampy bottomlands honor the legacy of a great outdoorsman and conservationist.",
      "RecAreaMapURL": "http://www.nps.gov/this/planyourvisit/maps.htm",
      "RecAreaLatitude": 38.89584162,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Theodore Roosevelt Island is accessible only from the northbound lanes of the George Washington Memorial Parkway. The entrance to the parking lot is located just north of the Roosevelt Bridge.</p>\n<p>Southbound traffic: take Theodore Roosevelt Bridge to Constitution Ave. Take a right on 23rd St. and cross Memorial Bridge. Once on the bridge, bear right to return to the G.W. Parkway.</p>\n<p>The closest Metro Station is Rosslyn, but the park is some distance away from the metro.<br />\n </p>",
      "Keywords": "",
      "RecAreaName": "Theodore Roosevelt Island"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -103.4300083,
          47.17777274
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "thro_interpretation@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -103.4300083,
      "RecAreaID": 2949,
      "RecAreaPhone": "(701) 623 4730",
      "RecAreaDescription": "When Theodore Roosevelt came to Dakota Territory to hunt bison in 1883, he was a skinny, young, spectacled dude from New York. He could not have imagined how his adventure in this remote and unfamiliar place would forever alter the course of the nation. The rugged landscape and strenuous life that TR experienced here would help shape a conservation policy that we still benefit from today.",
      "RecAreaMapURL": "http://www.nps.gov/thro/planyourvisit/maps.htm",
      "RecAreaLatitude": 47.17777274,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "South Unit\nThe South Unit entrance is in Medora, ND. Medora is accessible via Interstate 94 Exits 24 and 27 in North Dakota. Medora is 133 miles west of Bismarck, ND and 27 miles east of the Montana state line.\n\nThe Painted Canyon Visitor Center is located 7 miles east of Medora on I-94 at Exit 32.\n\nNorth Unit\nThe North Unit entrance is along U.S. Highway 85, approximately 14 miles south of Watford City, ND and 50 miles north of Belfield, ND. The distance by road from Medora to the North Unit is approximately 70 miles. I-94 travelers can access U.S. Highway 85 at Exit 42 in Belfield, ND.\n\nElkhorn Ranch Unit\nThe Elkhorn Ranch Unit is located 35 miles north of Medora. Access to the site is via gravel roads. Approaching the site from the east requires fording the Little Missouri River. Ask a ranger at one of the park visitor centers for information on traveling to the Elkhorn Ranch Site before you attempt the journey. For a map visit http://www.nps.gov/thro/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Theodore Roosevelt National Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -111.7093944,
          40.44039719
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "tica_ranger_activities@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -111.7093944,
      "RecAreaID": 2951,
      "RecAreaPhone": "",
      "RecAreaDescription": "Hike your way past stunning vistas to explore a hidden underground world. Taste the thrill of caving as you twist and bend to enter beautifully decorated rooms. Learn the science behind formations and hear stories of cave exploration and preservation.  Experience and discover as you go – geologic mysteries await.\n\nThe visitor center, caves, and cave trail are closed for the season.",
      "RecAreaMapURL": "http://www.nps.gov/tica/planyourvisit/maps.htm",
      "RecAreaLatitude": 40.44039719,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Timpanogos Cave National Monument"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -81.49950104,
          30.47251894
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "timu_interpretation@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -81.49950104,
      "RecAreaID": 2952,
      "RecAreaPhone": "(904) 641 7155",
      "RecAreaDescription": "Visit one of the last unspoiled coastal wetlands on the Atlantic Coast. Discover 6,000 years of human history and experience the beauty of salt marshes, coastal dunes, and hardwood hammocks.\n\nThe Timucuan Preserve includes Fort Caroline and Kingsley Plantation.",
      "RecAreaMapURL": "http://www.nps.gov/timu/planyourvisit/maps.htm",
      "RecAreaLatitude": 30.47251894,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/timu/planyourvisit/directions_fortcaroline.htm",
      "Keywords": "",
      "RecAreaName": "Timucuan Ecological & Historic Preserve"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -111.1135627,
          33.64842945
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "TONT Interpretation@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -111.1135627,
      "RecAreaID": 2953,
      "RecAreaPhone": "",
      "RecAreaDescription": "The Salado Phenomena, 700 years ago, blended ideas of neighboring Native American cultures to emerge a unique and vibrant society. Tonto National Monument showcases two Salado-style cliff dwellings. Colorful pottery, woven cotton cloth, and other artifacts tell a story of people living and using resources from the northern Sonoran Desert from 1250 to 1450 CE.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 33.64842945,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Tonto National Monument"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "LODI_Administration@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 2955,
      "RecAreaPhone": "",
      "RecAreaDescription": "Remember and commemorate the survival of the Cherokee people, forcefully removed from their homelands in Georgia, Alabama, and Tennessee to live in Indian Territory, now Oklahoma. They traveled by foot, horse, wagon, or steamboat in 1838-1839.",
      "RecAreaMapURL": "http://www.nps.gov/trte/planyourvisit/maps.htm",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>The Trail of Tears National Historic Trail passes through the present-day states of Alabama, Arkansas, Georgia, Illinois, Kentucky, Missouri, North Carolina, Oklahoma, and Tennessee.</p>\n<p>Plane<br />\nYou can reach the national historic trail by flying into a number of airports, including Huntsville, Alabama; Fayetteville/Springdale and Little Rock, Arkansas; Atlanta, Georgia; Springfield/Branson and St. Louis, Missouri; Asheville, North Carolina; Tulsa, Oklahoma; and Knoxville, Nashville, and Memphis, Tennesee. Trail-related sites can be reached from these cities.</p>\n<p>Car<br />\nYou can reach most trail sites by auto. Some sites are along unpaved roads or along river corridors.</p>\n<p>Bus<br />\nCommercial bus service is available to many cities and towns along the trail. Check local guide books and Internet sources.<br />\n </p>Find places to go in nine states. Go to: www.nps.gov/trte/planyourvisit/placestogo.htm",
      "Keywords": "",
      "RecAreaName": "Trail Of Tears National Historic Trail"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -85.67983321,
          32.45538671
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "Carla_graves@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -85.67983321,
      "RecAreaID": 2956,
      "RecAreaPhone": "",
      "RecAreaDescription": "Before the first African American military pilots became known as the \"Red Tails\" they wore striped tails as they began their flight training in the Army's PT-17 Stearman bi-plane.  Their flying adventure started at Moton Field, in Tuskegee, Alabama, where the Army Air Corps began a military \"experiment\" to see if Negroes could be trained to fly combat aircraft.  Come--share their adventure!!",
      "RecAreaMapURL": "http://www.nps.gov/tuai/planyourvisit/maps.htm",
      "RecAreaLatitude": 32.45538671,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Tuskegee Airmen National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -85.70488498,
          32.42962115
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "TUIN_Interpretation@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -85.70488498,
      "RecAreaID": 2957,
      "RecAreaPhone": "",
      "RecAreaDescription": "In 1881, Booker T. Washington arrived in Alabama and started building Tuskegee Institute both in reputation and literally brick by brick.  He recruited the best and the brightest to come and teach here including George Washington Carver who arrived in 1896.  Carver's innovations in agriculture, especially with peanuts, expanded Tuskegee's standing throughout the country.  The story continues....",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 32.42962115,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Tuskegee Institute National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -111.0385236,
          31.56120725
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "NPS_TUMA_Information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -111.0385236,
      "RecAreaID": 2958,
      "RecAreaPhone": "520 398 2341",
      "RecAreaDescription": "Tumacácori sits at a cultural crossroads in the Santa Cruz River valley. Here O'odham, Yaqui, and Apache people met and mingled with European Jesuit and Franciscan missionaries, settlers, and soldiers, sometimes in conflict and sometimes in cooperation. Follow the timeworn paths and discover stories that connect us to enduring relationships, vibrant cultures, and traditions of long ago.",
      "RecAreaMapURL": "http://www.nps.gov/tuma/planyourvisit/maps.htm",
      "RecAreaLatitude": 31.56120725,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Tumacácori National Historical Park is located off of Exit 29 of Interstate 19, fifty miles south of Tucson, Arizona, and eighteen miles north of Nogales, Arizona.\n\nThe Visitor Center and Museum are located at 1891 East Frontage Road, Tumacacori, Arizona, 85640.",
      "Keywords": "",
      "RecAreaName": "Tumacácori National Historical Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -88.73708623,
          34.25557705
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "natr_interpretation@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -88.73708623,
      "RecAreaID": 2959,
      "RecAreaPhone": "(800) 305 7417",
      "RecAreaDescription": "In July, 1864, Union forces, including men from the United States Colored Troops, marched into Tupelo, Mississippi.  Disorganized Confederate soldiers fought fiercely but could not overpower the federal troops.  Neither side could claim a clear victory, but Union troops had succeeded in their main goal:  keeping the Confederates away from Union railroads in Tennessee.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 34.25557705,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Tupelo National Battlefield (NB) is a one-acre monument located on Main Street, Tupelo, Mississippi. Main Street in Tupelo is also known as Highway 6 and Highway 278. Tupelo NB sits on the south side of Main Street on the west side of Tupelo. Exit off the Natchez Trace Parkway onto Highway 6 (near Milepost 260), head east, into Tupelo. Travel one mile east and find Tupelo NB on the right side of Main Street. There is limited parking available adjacent to the monument.</p>",
      "Keywords": "",
      "RecAreaName": "Tupelo National Battlefield"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -112.0279069,
          34.77296377
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "ed_cummins@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -112.0279069,
      "RecAreaID": 2960,
      "RecAreaPhone": "",
      "RecAreaDescription": "Crowning a desert hilltop is an ancient pueblo. A child scans the desert landscape for the arrival of traders. What riches will they bring? What stories will they tell? From the rooftop of the Tuzigoot pueblo it is easy to imagine such a moment. The pueblo shows us this ancient village built by the Sinagua people. They were farmers and artists with trade connections that spanned hundreds of miles.",
      "RecAreaMapURL": "http://www.nps.gov/tuzi/planyourvisit/maps.htm",
      "RecAreaLatitude": 34.77296377,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Tuzigoot National Monument is 52 miles south of Flagstaff, Arizona via U.S. Alternate Highway 89A, or 90 miles north of Phoenix. Travel Interstate Highway 17, take Exit 287 and travel west on Highway 260 to Cottonwood. You will continue through Cottonwood on Hwy 89A and go toward Clarkdale. At the first traffic light after turning on to 89A, signs will direct you to turn left to stay on 89A. Go straight through this intersection. This will put you on HISTORIC 89A (designated on the map above as HWY 260) and take you through “Old Town Cottonwood”. As you can tell from the map, Main Street (Historic 89A) does a lot of twisting around. Once you leave Cottonwood you are almost there. There will be a sign telling you where to turn to get to Tuzigoot. You take Tuzigoot Road and follow it to the end…that is where Tuzigoot National Monument is. Enjoy the trip.</p>",
      "Keywords": "",
      "RecAreaName": "Tuzigoot National Monument"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -90.35169255,
          38.55182374
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "ULSG_interpretation@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -90.35169255,
      "RecAreaID": 2961,
      "RecAreaPhone": "",
      "RecAreaDescription": "Ulysses S. Grant is known as the victorious Civil War general who saved the Union and the 18th President of the United States. He first met Julia Dent, his future wife, at her family home, named White Haven. From 1854 to 1859 the Dents, Grants and an enslaved African-American workforce lived on the property.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 38.55182374,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "From I-270, exit at Gravois Road - Hwy 30 (Exit 3) and turn east toward St. Louis; follow Gravois Road 3.3 miles and turn left on Grant Road; site entrance is less than a mile ahead on right.\n\nFrom I-44 Eastbound, exit at Big Bend Road (Exit 278), turn right off exit, turn right on Grant Road, turn right on Pardee Road and follow (turns into Grant Road again); site entrance is on left.\n\nFrom I-44 Westbound, exit at Berry Road (Exit 279), turn left off exit, turn left on Big Bend Road, turn right on Grant Road, turn right on Pardee Road and follow (turns into Grant Road again); site entrance is on left.\n\nFrom I-55 Southbound, take I-44 West or I-270 West and follow above directions.\n\nFrom I-55 Northbound, take I-270 West (Kansas City) and follow above directions.\n\nFrom I-70 East or Westbound, take I-270 South and follow above directions.",
      "Keywords": "",
      "RecAreaName": "Ulysses S Grant National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -75.03861562,
          41.66172578
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "UPDE_interpretation@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -75.03861562,
      "RecAreaID": 2962,
      "RecAreaPhone": "(570) 729 7134",
      "RecAreaDescription": "Canoe through rapids and quiet pools as the Delaware River winds its way through a valley of swiftly changing scenery or fish amid rolling hills and riverfront villages in one of the finest fishing rivers in the northeastern United States. The clean water of the Delaware, the last major undammed river in the eastern United States, supports a healthy ecosystem and offers tranquility and excitement.",
      "RecAreaMapURL": "http://www.nps.gov/upde/planyourvisit/maps.htm",
      "RecAreaLatitude": 41.66172578,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Upper Delaware Scenic & Recreational River"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -75.44581889,
          40.10054985
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "vafo_superintendent@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -75.44581889,
      "RecAreaID": 2964,
      "RecAreaPhone": "",
      "RecAreaDescription": "Valley Forge was the site of the 1777-78 winter encampment of the Continental Army. The park commemorates the sacrifices and perseverance of the Revolutionary War generation and honors the ability of citizens to pull together and overcome adversity during extraordinary times!",
      "RecAreaMapURL": "http://www.nps.gov/vafo/planyourvisit/maps.htm",
      "RecAreaLatitude": 40.10054985,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Park Address\n1400 North Outer Line Drive\nKing of Prussia, PA 19406\nGPS Coordinates\nN 40° 6.109 W 75° 25.342\nClosest Intersection to the Visitor Center\nPennsylvania Route 23 and North Gulph Road\nAdditional step-by-step directions can be found at:\nhttp://www.nps.gov/vafo/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Valley Forge National Historical Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -90.85030186,
          32.3621286
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "Vick_Interpretation@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -90.85030186,
      "RecAreaID": 2966,
      "RecAreaPhone": "(601) 636 0583",
      "RecAreaDescription": "Two statements, two Presidents, both aware of the importance of the city on the Mississippi River. President Davis knew it was vital to hold the city for the Confederacy to survive. President Lincoln wanted the key to gain control of the river and divide the South. Vicksburg National Military Park commemorates this campaign and its significance as a critical turning point of the Civil War.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 32.3621286,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Plane —\nClosest commercial airport: Jackson, MS, 50 miles to the east.\nCar —\nDirections to Vicksburg:\nFrom the east — Take Interstate 20 west to Vicksburg, Mississippi. Use exit ramp 4B. Follow Clay Street (US-80) west 0.25 miles to park entrance.\nFrom the north — Take Interstate 55 south to Jackson, Mississippi. (To save time, use Interstate 220 bypass on west side of Jackson.) Take Interstate 20 west to Vicksburg (approximately 40 miles). Use exit ramp 4B. Follow Clay Street (US-80) west 0.25 miles to park entrance.\nFrom the south — Take Interstate 55 or US Highway 49 to Jackson, Mississippi. Take Interstate 20 west to Vicksburg, Mississippi, (approximately 40 miles). Use exit ramp 4B. Follow Clay Street (US-80) west 0.25 miles to park entrance.\nFrom the west — Take Interstate 20 east to Vicksburg, Mississippi. Use exit ramp 4B. Follow Clay Street (US-80) west 0.25 miles to park entrance.\nPublic Transportation —\nTaxi, City Bus, Charter Buses (see your travel agent).",
      "Keywords": "",
      "RecAreaName": "Vicksburg National Military Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -64.74194451,
          18.34279656
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "VIIS_Superintendent@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -64.74194451,
      "RecAreaID": 2967,
      "RecAreaPhone": "",
      "RecAreaDescription": "Virgin Islands National Park's hills, valleys and beaches are breathtaking. However, within its 7,000 plus acres on the island of St. John is the complex history of civilizations - both free and enslaved - dating back more than a thousand years, all who utilized the land and the sea for survival. Use the links below to learn about the history, culture and resources of Virgin Islands National Park.",
      "RecAreaMapURL": "http://www.nps.gov/viis/planyourvisit/maps.htm",
      "RecAreaLatitude": 18.34279656,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Ferry service for passengers and vehicles is the only means of getting to and from St. John.\nOnce on St. John there are no designated entrances to Virgin Islands National Park, although two main routes will provide access to many areas. Route 20 (North Shore Road) runs from the ferry dock past the Visitors Center to the most contiguous part of the Park, including most beaches and the campgrounds as well. Large and small tracts of private lands are found within the authorized boundary of the Park.",
      "Keywords": "",
      "RecAreaName": "Virgin Islands National Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -92.8382913,
          48.48370609
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "voya_superintendent@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -92.8382913,
      "RecAreaID": 2970,
      "RecAreaPhone": "(218) 283 6600",
      "RecAreaDescription": "Voyageurs National Park lies within the heart of the North American Continent.  Here you can see and touch rocks half as old as the world, experience the life of a voyageur, immerse yourself in the sights and sounds of a boreal forest, view the dark skies, or ply the interconnected water routes.\n\nLeave your car behind and set out on the water highways of the North Woods.",
      "RecAreaMapURL": "http://www.nps.gov/voya/planyourvisit/maps.htm",
      "RecAreaLatitude": 48.48370609,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p><strong>Plane</strong><br />\nA small airport is located in International Falls, Minnesota. Taxi service and rental cars are available here.<br />\n<br />\nMost flights entering the area will pass through the larger Minneapolis-St. Paul airport located around 5 hours south of Voyageurs National Park.<br />\n<br />\n<strong>Car</strong><br />\nVoyageurs National Park is approximately 5 hours north of Minneapolis-St. Paul on I-35 and Hwy 53, 3 hours north of Duluth on Hwy 53, and 4 hours south from Winnipeg, Manitoba.<br />\n<strong><br />\nPublic Transportation<br />\n</strong>There is no public transportation to Voyageurs National Park. No bus lines or passenger trains serve this area.<br />\n<strong><br />\nBoat</strong><br />\nMany visitors enter the park by water. There are public launch ramps available at the three park visitor centers on Rainy Lake, Kabetogama Lake, and at the Ash River Visitor Center. Numerous resorts also offer boat access into the park. <br />\n </p>",
      "Keywords": "",
      "RecAreaName": "Voyageurs National Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -99.70445143,
          35.62083963
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "waba_superintendent@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -99.70445143,
      "RecAreaID": 2971,
      "RecAreaPhone": "",
      "RecAreaDescription": "The site protects and interprets the setting along the Washita River where Lt. Col. George A. Custer led the 7th U.S. Cavalry on a surprise dawn attack against the Southern Cheyenne village of Peace Chief Black Kettle on November 27, 1868. The attack was an important event in the tragic clash of cultures of the Indian Wars era.",
      "RecAreaMapURL": "http://www.nps.gov/waba/planyourvisit/maps.htm",
      "RecAreaLatitude": 35.62083963,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Washita Battlefield National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -111.5024239,
          35.16822994
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "FLAG_Information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -111.5024239,
      "RecAreaID": 2972,
      "RecAreaPhone": "(928) 526 3367",
      "RecAreaDescription": "Come gaze across curved canyon walls! Among the remarkable geological formations of the canyon itself, the former homes of ancient inhabitants are easily evident. Along the trails you can imagine life within Walnut Canyon, while visiting actual pueblos and walking in the steps of those who came before.",
      "RecAreaMapURL": "http://www.nps.gov/waca/planyourvisit/maps.htm",
      "RecAreaLatitude": 35.16822994,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>By Plane<br />\nThe nearest commercial airport is located in Flagstaff, Arizona.</p>\n<p>By Car<br />\nLeave I-40 at Exit 204, 7.5 miles (12 km) east of Flagstaff; drive south 3 miles (5 km) to the canyon rim. Warning: Tight turn-around in parking area for towed vehicles; 40 feet (12 meters) maximum length is recommended.</p>\n<p>Public Transportation<br />\nNone. Check with the Flagstaff Convention and Visitors Bureau for commercial tour services.<br />\n </p>",
      "Keywords": "",
      "RecAreaName": "Walnut Canyon National Monument"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          144.6922461,
          13.43795691
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "WAPA_interpretation@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": 144.6922461,
      "RecAreaID": 2973,
      "RecAreaPhone": "(671) 477 7278",
      "RecAreaDescription": "War in the Pacific National Historical Park was established to commemorate the bravery, courage, and sacrifice of those participating in the campaigns of the Pacific Theater of World War II.  At War in the Pacific National Historical Park, the former battlefields, gun emplacements, trenches, and historic structures all serve as silent reminders of the bloody World War II battles.",
      "RecAreaMapURL": "http://www.nps.gov/wapa/planyourvisit/maps.htm",
      "RecAreaLatitude": 13.43795691,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "From the mainland United States, Guam is accessible via flights from Honolulu, Hawaii, or Tokyo, Japan. Flights arrive to Guam via A.B. Wonpat International Airport.\n\nThe park is spread out over seven units. Directions to the two most popular locations are listed below. For all other locations, see www.nps.gov/wapa/planyourvisit/directions.htm\n\n\nT. Stell Newman Visitor Center\n\nFrom the airport or Tumon, where most hotels are located, make your way to Route 1, Marine Corps Drive. Head south until the road ends and you arrive at the Naval Station Guam front gate. To the right, adjacent to the large 2-man Type-C Japanese midget submarine, is the T. Stell Newman Visitor Center. (11.5 mi, 18.6 km)\n\nAsan Beach Unit\n\nFrom the airport, take Route 10A to Marine Corps Drive (Route 1). Turn left and go approximately 6.2 miles (9.9 kilometers) to Asan. The large park unit is on the oceanside.\n\n\nCamping is not available at War in the Pacific National Historical Park. There are no entrance fees.",
      "Keywords": "",
      "RecAreaName": "War In The Pacific National Historical Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -73.45452542,
          41.25886268
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "wefa_interpretation@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -73.45452542,
      "RecAreaID": 2975,
      "RecAreaPhone": "",
      "RecAreaDescription": "Designed and preserved by artists, Weir Farm National Historic Site welcomes everyone to  experience the power of creativity, art, and nature. Escape to the only national park dedicated to American painting and rediscover the beauty of light and color in everyday life.",
      "RecAreaMapURL": "http://www.nps.gov/wefa/planyourvisit/maps.htm",
      "RecAreaLatitude": 41.25886268,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "PLEASE NOTE: There are a limited number of parking spaces available in the parking lot. The parking lot cannot accommodate RVs, buses, or other large vehicles. Parking lot is across from visitor center.\n\nFROM THE NORTH\n-Take I-84 to Exit 3 for Route 7 S.\n-Follow Route 7 South about 10 miles.\n-Turn right onto Route 102 West at a traffic light.\n-Take 2nd left onto Old Branchville Road.\n-Turn left at first stop sign onto Nod Hill Road.\n-Follow Nod Hill Road one mile to the top of the hill.\n-Arrive at 735 Nod Hill Road.\n\nFROM THE EAST / SOUTHEAST\n-Take the Merritt Parkway (to Exit 41) or I-95 (to Exit 17) to Route 33 North.\n-Bear right to follow Route 7 North about seven miles.\n-Turn left onto Route 102 West at a traffic light.\n-Take 2nd left onto Old Branchville Road.\n-Turn left at first stop sign onto Nod Hill Road.\n-Follow Nod Hill Road one mile to the top of the hill.\n-Arrive at 735 Nod Hill Road\n\nMore directions and information: http://www.nps.gov/wefa/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Weir Farm National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -122.6022657,
          40.61359941
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "whis_interpretation@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -122.6022657,
      "RecAreaID": 2977,
      "RecAreaPhone": "(530) 246 1225",
      "RecAreaDescription": "Whiskeytown Lake's beautiful crystal-clear waters, surrounded by mountain peaks, are perhaps the most prominent feature of the park.  However, water-based recreation is only a small part of what the park has to offer. The 39,000 acres surrounding the lake hold four waterfalls, pristine mountain creeks, 70 miles of trails, and opportunities to explore the history of the California Gold Rush.",
      "RecAreaMapURL": "http://www.nps.gov/whis/planyourvisit/maps.htm",
      "RecAreaLatitude": 40.61359941,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Car\nFrom Interstate 5, take the CA Highway 44 West exit toward Downtown Redding and Eureka. From Downtown Redding, follow Highway 299 west toward Eureka for approximately 8 miles to reach the Whiskeytown Visitor Center.\nPlane\nCommercial air service is available to Redding California,located approximately 16 miles from Whiskeytown. Rental vehicles are available.",
      "Keywords": "",
      "RecAreaName": "Whiskeytown National Recreation Area"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -118.4629388,
          46.04119286
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "WHMI_Interpretation@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -118.4629388,
      "RecAreaID": 2978,
      "RecAreaPhone": "",
      "RecAreaDescription": "The 1847 attack on the Whitmans horrified Americans and impacted the lives of the peoples of the Columbia Plateau for decades afterwards. Was killing the Whitmans justified legal retribution, an act of revenge, or some combination of both? The circumstances that surround this tragic event resonate with modern issues of cultural interaction and differing perspectives.",
      "RecAreaMapURL": "http://www.nps.gov/whmi/planyourvisit/maps.htm",
      "RecAreaLatitude": 46.04119286,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Whitman Mission National Historic Site is located in Walla Walla, Washington, which is in the southeast corner of Washington State. The closest airports are located in Walla Walla (airport is 11 miles east of park), Pasco (45 miles west), and Pendleton, Oregon (45 miles south).<br />\n </p>\n<p>Driving directions from Walla Walla:</p>\n<ul>\n    <li>Turn west onto Highway 12</li>\n    <li>7 miles west of Walla Walla, turn left (south) onto Sweagle Road (look for brown park signs)</li>\n    <li>Go over railroad tracks and then a bridge (less than 1/2 mile)</li>\n    <li>Turn left onto park entrance road, which is immediately after bridge</li>\n    <li>Road ends in circular parking area in front of the Visitor Center</li>\n</ul>",
      "Keywords": "",
      "RecAreaName": "Whitman Mission National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -106.3333461,
          32.77907858
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "whsa_interpretation@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -106.3333461,
      "RecAreaID": 2979,
      "RecAreaPhone": "",
      "RecAreaDescription": "Rising from the heart of the Tularosa Basin is one of the world's great natural wonders - the glistening white sands of New Mexico. Great wave-like dunes of gypsum sand have engulfed 275 square miles of desert, creating the world's largest gypsum dunefield. White Sands National Monument preserves a major portion of this unique dunefield, along with the plants and animals that live here.",
      "RecAreaMapURL": "http://www.nps.gov/whsa/planyourvisit/maps.htm",
      "RecAreaLatitude": 32.77907858,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "FEES: $5 per adult (16 and older). Children are free.\nDIRECTIONS:\nFrom Alamogordo, NM:\nDrive time: About 15 minutes\nGo west on Highway US-70. We are located about 15 miles (24 km) west of Alamogordo on the north side of the road.\nFrom Las Cruces, NM:\nDrive time: About 1 hour\nGo east on Highway US-70 towards Alamogordo. We are located about 52 miles (84 km) east of Las Cruces on the north side of the road, one mile past the Border Patrol station.\nFrom El Paso, TX:\nThere are two ways to arrive at White Sands from El Paso.\nVia Las Cruces:\nDrive time: 1.5 hours.\n1) Take I-10 West towards Las Cruces. After 39 miles, exit on to I-25 North. Follow I-25 North for 7 miles and exit onto US-70 East towards Alamogordo. Drive for about 52 miles to the visitor center.\nVia Alamogordo:\nDrive time: 1.5 hours\n2) Take US-54 East towards Alamogordo and drive about 82 miles. Turn left onto US-70 West towards Las Cruces. The visitor center will be about 15 miles down on the right-hand side.",
      "Keywords": "",
      "RecAreaName": "White Sands National Monument"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -103.4394709,
          43.58012365
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "ted_firkins@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -103.4394709,
      "RecAreaID": 2980,
      "RecAreaPhone": "(605) 745 4600",
      "RecAreaDescription": "Bison, elk, and other wildlife roam the rolling prairie grasslands and forested hillsides of one of America's oldest national parks. Below the remnant island of intact prairie sits Wind Cave, one of the longest and most complex caves in the world. Named for barometric winds at its entrance, this maze of passages is home to boxwork, a unique formation rarely found elsewhere.",
      "RecAreaMapURL": "http://www.nps.gov/wica/planyourvisit/maps.htm",
      "RecAreaLatitude": 43.58012365,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Wind Cave National Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -93.40986704,
          37.1000127
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "jeffrey_patrick@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -93.40986704,
      "RecAreaID": 2981,
      "RecAreaPhone": "(417) 732 2662",
      "RecAreaDescription": "Wilson's Creek was the first major Civil War battle fought west of the Mississippi River, and the site of the death of Nathaniel Lyon, the first Union general killed in action. The costly Southern victory on August 10, 1861, focused national attention on the war in Missouri.   Wilson's Creek NB commemorates and interprets the battle within the context of the war in the Trans-Mississippi West.",
      "RecAreaMapURL": "http://www.nps.gov/wicr/planyourvisit/maps.htm",
      "RecAreaLatitude": 37.1000127,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "From I-44: exit at Exit 70. Continue south to U.S. Highway 60. Proceed through the intersection. MM changes to Missouri Highway M. Continue 1/2 mile to Missouri Highway ZZ. Turn right on ZZ. Continue south to Farm Road 182 (Elm Street). Turn left; the entrance to the battlefield is on the right.\nFrom U.S. Highway 65 (north of Springfield): exit on James River Expressway (U.S. Highway 60). Continue west on the Expressway PAST the Missouri FF/Battlefield exit. Take the U.S. Highway 60 (Republic) exit. Turn left (south) on U.S. Highway 60. Continue 2 miles to Missouri Highway M and turn left. Continue east on Highway M for 1/2 mile. Turn right onto Missouri Highway ZZ and go to Farm Road 182 (Elm Street). Turn left; the entrance to the battlefield is on the right.\nFrom U.S. Highway 65 (south of Springfield): turn left on Missouri Highway 14 at Ozark. Continue west on Highway 14 through Nixa to Missouri Highway ZZ. Follow ZZ north to Farm Road 182. Turn right; the entrance to the battlefield is on the right.",
      "Keywords": "",
      "RecAreaName": "Wilson's Creek National Battlefield"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -76.81655558,
          42.90817073
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "wori_information_desk@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -76.81655558,
      "RecAreaID": 2983,
      "RecAreaPhone": "(315) 568 0024",
      "RecAreaDescription": "Women's Rights National Historical Park tells the story of the first Women's Rights Convention held in Seneca Falls, NY on July 19-20,1848.  It is a story of struggles for civil rights, human rights, and equality, global struggles that continue today.  The efforts of women's rights leaders, abolitionists, and other 19th century reformers remind us that all people must be accepted as equals.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 42.90817073,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "From the New York State Thruway (I-90)\n•\ttake exit 41 (Rt. 414).\n•\tTurn right onto Rt. 414 South after exiting the tollbooth.\n•\tFollow Rt. 414 South for approximately four miles.\n•\tAt the intersections of Rt. 414 and Rts. 5 & 20 (the same road at this point), turn left onto Rts. 5 & 20 East and 414 South.\n•\tFollow for approximately 1.5 miles into Seneca Falls.\n•\tThe Visitor Center is on the left at 136 Fall St.\n\nFrom the West\n•\tTravel East on Rte 5 & 20 East and 414 South (Fall St) into Seneca Falls. Go to 136 Fall St.\n\nFrom the South\n•\tTravel North on Rt. 414 into Seneca Falls.\n•\tGo through the Bayard Street stop light and get into the left turn lane as you cross the bridge, follow the signs for 5 & 20 West and 414 North (Fall St.).\n•\tAt the first stoplight on the other side of the bridge, turn left onto Fall Street. Go to 136 Fall St.\n\nFrom the East\n•\tTravel West on Rts. 5 & 20 into Seneca Falls.\n•\tFollow 5 & 20 West and 414 North, turn right onto Fall St.\n•\tGo to 136 Fall St",
      "Keywords": "",
      "RecAreaName": "Women's Rights National Historical Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -75.66997163,
          36.01637713
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "caha_general_information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -75.66997163,
      "RecAreaID": 2985,
      "RecAreaPhone": "",
      "RecAreaDescription": "Wind, sand, and a dream of flight brought Wilbur and Orville Wright to Kitty Hawk, North Carolina where, after four years of scientific experimentation, they achieved the first successful airplane flights on December 17, 1903.\n\nWith courage and perseverance, these self-taught engineers relied on teamwork and application of the scientific process. What they achieved changed our world forever.",
      "RecAreaMapURL": "http://www.nps.gov/wrbr/planyourvisit/maps.htm",
      "RecAreaLatitude": 36.01637713,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "From Nags Head, head north on US 158 for about 5 miles and turn left onto Wright Memorial Dr.\n\nFrom Kitty Hawk, head south on US 158 for about 3.5 miles and turn right onto Wright Memorial Dr.",
      "Keywords": "",
      "RecAreaName": "Wright Brothers National Memorial"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -142.6028439,
          61.4182147
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "wrst_tweet@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -142.6028439,
      "RecAreaID": 2986,
      "RecAreaPhone": "",
      "RecAreaDescription": "Wrangell St. Elias is a vast national park that rises from the ocean all the way up to 18,008 ft. Mount St. Elias. At 13.2 million acres, it's the same size as Yellowstone Nat. Park, Yosemite Nat. Park, and Switzerland combined! Within this wild landscape, people continue to live off the land as they have done for centuries. This is a rugged, beautiful area filled with opportunities for adventure.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 61.4182147,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "From Anchorage: follow Alaska Highway 1 (Glenn Highway) towards Palmer, AK, continue past Palmer to Glennallen, AK about 190 miles. At the intersection of the Glenn Highway and Alaska Highway 4 (Richardson Highway) turn right (south) and continue for 10 miles. The park headquarters and visitor center are on the left.\n\nKennecott/McCarthy - To reach this area from the headquarters area, turn left or south on the Richardson Highway (AK Hwy 4) and travel about 25 miles to the junction of the Edgerton Highway (AK Hwy 10) and turn left. Travel 33 miles to Chitina. Go through the community of Chitina and cross the Copper River. The road turns to gravel and travel 59 miles to the footbridge across the Kennicott River. \n\nSlana/Nabesna - To reach this area from the headquarters area, turn right or north on the Richardson Highway (AK Hwy 4) and travel about 35 miles to the junction of the Glenn Highway (AK Hwy 1) also known as the Tok Cutoff and turn right. Travel 75 miles to the turnoff for Slana and turn right.",
      "Keywords": "",
      "RecAreaName": "Wrangell - St Elias National Park & Preserve"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -111.3957216,
          35.55741077
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "FLAG_Information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -111.3957216,
      "RecAreaID": 2987,
      "RecAreaPhone": "",
      "RecAreaDescription": "Nestled between the Painted Desert and ponderosa highlands of northern Arizona, Wupatki is a landscape of legacies. Ancient pueblos dot red-rock outcroppings across miles of prairie. Where food and water seem impossible to find, people built pueblos, raised families, farmed, traded, and thrived. Today, if you linger and listen, earth and artifacts whisper their stories to us still.",
      "RecAreaMapURL": "http://www.nps.gov/wupa/planyourvisit/maps.htm",
      "RecAreaLatitude": 35.55741077,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>By Plane<br />\nThe nearest commercial airport is located in Flagstaff, Arizona.</p>\n<p>By Car<br />\nFrom Flagstaff, take US 89 north for 12 miles (19km), turn right at sign for Sunset Crater Volcano - Wupatki National Monuments. The Visitor Center is 21 miles (34km) from this junction.</p>\n<p>Public Transportation<br />\nNone. Check with the Flagstaff Convention and Visitors Bureau for commercial tour services.</p>\n<p><br />\n </p>",
      "Keywords": "",
      "RecAreaName": "Wupatki National Monument"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -110.5471695,
          44.59824417
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "yell_visitor_services@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -110.5471695,
      "RecAreaID": 2988,
      "RecAreaPhone": "(307) 344 2117",
      "RecAreaDescription": "Visit Yellowstone and experience the world's first national park. Marvel at a volcano's hidden power rising up in colorful hot springs, mudpots, and geysers. Explore mountains, forests, and lakes to watch wildlife and witness the drama of the natural world unfold. Discover the history that led to the conservation of our national treasures \"for the benefit and enjoyment of the people.\"",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 44.59824417,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "For a location map and detailed directions to Yellowstone's five entrances into the park, please stop by our official website @ http://www.nps.gov/yell/planyourvisit/directions.htm.\nThe road from the park's North Entrance at Gardiner, MT, through Mammoth Hot Springs and on to Cooke City, MT, outside the park's Northeast Entrance is the only road open all year to automobile traffic.\nA map of park destinations is available at http://www.nps.gov/yell/planyourvisit/mapslist.htm.",
      "Keywords": "",
      "RecAreaName": "Yellowstone National Park"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2013-04-10",
      "RecAreaEmail": "Roger_Green@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 2989,
      "RecAreaPhone": "757-898-2410",
      "RecAreaDescription": "Discover what it took for the United States to be independent as you explore the site of the last major battle of the Revolutionary War.  Here at Yorktown, in the fall of 1781, General George Washington, with allied American and French forces, besieged General Charles Lord Cornwallis's British army.  On October 19, Cornwallis surrendered, effectively ending the war and ensuring independence.",
      "RecAreaMapURL": "http://www.nps.gov/yonb/pphtml/maps.html",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/york/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Yorktown National Battlefield"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -119.5571873,
          37.84883288
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -119.5571873,
      "RecAreaID": 2991,
      "RecAreaPhone": "(209) 372 0200",
      "RecAreaDescription": "Not just a great valley, but a shrine to human foresight, the strength of granite, the power of glaciers, the persistence of life, and the tranquility of the High Sierra.\n\nFirst protected in 1864, Yosemite National Park is best known for its waterfalls, but within its nearly 1,200 square miles, you can find deep valleys, grand meadows, ancient giant sequoias, a vast wilderness area, and much more.",
      "RecAreaMapURL": "http://www.nps.gov/yose/planyourvisit/maps.htm",
      "RecAreaLatitude": 37.84883288,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<a href=\"http://www.nps.gov/yose/planyourvisit/directions.htm\">How to get to Yosemite</a>.",
      "Keywords": "",
      "RecAreaName": "Yosemite National Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -142.7960021,
          65.0935608
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "pat_sanders@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -142.7960021,
      "RecAreaID": 2992,
      "RecAreaPhone": "",
      "RecAreaDescription": "Located in Interior Alaska, Yukon-Charley Rivers offers exploration in a largely untouched landscape. Whether you float the mighty Yukon River or paddle the Charley River's whitewater, your memories will last a lifetime. Geology, cultural history, gold rush remnants, wildlife, and vast scenery will be a part of your experience. But, the strongest element will be solitude. Your adventure awaits.",
      "RecAreaMapURL": "http://www.nps.gov/yuch/planyourvisit/maps.htm",
      "RecAreaLatitude": 65.0935608,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/yuch/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Yukon - Charley Rivers National Preserve"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -108.6861274,
          37.24778944
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "meve_general_information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -108.6861274,
      "RecAreaID": 2993,
      "RecAreaPhone": "(970) 529 4465",
      "RecAreaDescription": "Through a continuing tradition of public and private cooperation, Yucca House National Monument preserves one of the largest archeological sites in SW Colorado. The unexcavated nature of the site preserves its integrity and beauty for future generations of scientists and visitors. Experience a sense of discovery by visiting a site that has remained largely untouched for the past 800 years!",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 37.24778944,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/yuho/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Yucca House National Monument"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -113.0265138,
          37.29839254
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "ZION_park_information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -113.0265138,
      "RecAreaID": 2994,
      "RecAreaPhone": "435-772-3426",
      "RecAreaDescription": "Follow the paths where ancient native people and pioneers walked. Gaze up at massive sandstone cliffs of cream, pink, and red that soar into a brilliant blue sky. Experience wilderness in a narrow slot canyon. Zion's unique array of plants and animals will enchant you as you absorb the rich history of the past and enjoy the excitement of present day adventures. \nUpdates: Follow us on Twitter",
      "RecAreaMapURL": "http://www.nps.gov/zion/planyourvisit/maps.htm",
      "RecAreaLatitude": 37.29839254,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "By Car\nZion National Park is located on State Route 9 in Springdale, Utah.\n\nFrom Las Vegas, Nevada (163 miles), Mesquite, Nevada (80 miles), and Saint George, Utah (40 miles):\n\nInterstate 15 North\nExit 16 - Right on State Route 9 East (33 miles)\nRight to stay on State Route 9 East in La Verkin, Utah (20 miles)\nStay on State Route 9 East into Zion National Park, the Zion Canyon Visitor Center is ahead on the right.",
      "Keywords": "",
      "RecAreaName": "Zion National Park"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2013-04-10",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 3106,
      "RecAreaPhone": "",
      "RecAreaDescription": "You can discover some of the most fascinating&nbsp;people in American history at the Manhattan Sites.&nbsp; Visit the homes of Alexander Hamilton and Theodore Roosevelt, the tomb of Ulysses Grant, a Revolutionary War church, a fort from the War of 1812, and the place where George Washington became President.",
      "RecAreaMapURL": "",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/masi/planyourvisit/trafficandtraveltips.htm",
      "Keywords": "",
      "RecAreaName": "Manhattan Sites"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -77.265089,
          38.93854526
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "will_rifenbark@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -77.265089,
      "RecAreaID": 3134,
      "RecAreaPhone": "703-255-1800",
      "RecAreaDescription": "No matter what your age or taste in shows, you'll find something you like onstage at Wolf Trap. From May through September, multiple amphitheaters in the park present performances such as musicals, dance, opera, jazz, and popular and country music.\n\nA good time to explore the beauty  and history of the park without the crowds is October - April.",
      "RecAreaMapURL": "http://www.nps.gov/wotr/planyourvisit/maps.htm",
      "RecAreaLatitude": 38.93854526,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "From the Capital Beltway I-495: Take exit 45 to Rt 267 West (Dulles Toll Rd), follow signs to local exits, pay a $2.50 toll, and exit at the Wolf Trap ramp. \n\nFrom I-66 Westbound: Take exit 67 to Rt 267 (Dulles Toll Rd), follow signs for local exits, pay a $2.50 toll, and exit at the Wolf Trap ramp. \n\nFrom I-66 Eastbound: Take I-495 North to exit 45 onto Rt 267 (Dulles Toll Rd). Follow signs for local exits, pay a $2.50 toll, and exit at the Wolf Trap ramp. \n\nFrom Rt 7 Westbound (toward Leesburg): Turn left on Towlston Rd and the park will be on the left in 1 mile.\n\nFrom Rt 267 Eastbound: Take exit 16 onto Rt 7 West. Turn left on Towlston Rd and continue 1 mile and the park will be on the left.\n\nFrom Rt 123 in Vienna: Take Rt 123 North towards Tysons Corner. Turn left onto Old Courthouse Rd then turn left to stay on Old Courthouse Rd. Follow Old Courthouse Rd and turn right onto Trap Road. Turn left at the stop sign to stay on Trap Rd. Drive past the Dulles Toll Rd and the park will be on the right.",
      "Keywords": "",
      "RecAreaName": "Wolf Trap National Park for the Performing Arts"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "LODI_Administration@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 3135,
      "RecAreaPhone": "",
      "RecAreaDescription": "Take a journey on El Camino Real de Tierra Adentro National Historic Trail to savor 300 years of heritage and culture in the Southwest. This Spanish colonial \"royal road\" in New Mexico and Texas originally extended to Mexico City, Mexico.",
      "RecAreaMapURL": "http://www.nps.gov/elca/planyourvisit/maps.htm",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Getting to El Camino Real de Tierra Adentro National Historic Trail</p>\n<p>Plane:You can reach the national historic trail by flying into a number of airports, including Santa Fe and Albuquerque, New Mexico, and El Paso, Texas.</p>\n<p>Car: You can reach most trail sites by auto along the I-25 corridor. Some sites are along unpaved roads.<br />\n<br />\n<br />\n<br />\n </p>\n<p> </p>Discover places to go in New Mexico and Texas. Go to: www.nps.gov/elca/planyourvisit/places-to-go.htm",
      "Keywords": "",
      "RecAreaName": "El Camino Real de Tierra Adentro National Historic Trail"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -76.483355,
          38.971601
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "cindy_chance@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -76.483355,
      "RecAreaID": 3137,
      "RecAreaPhone": "(888) 229 9297",
      "RecAreaDescription": "NPS helps you learn about and enjoy the Chesapeake Bay, the largest estuary in North America. \n\nHere, you can visit major league cities, colonial towns, American Indian landscapes, farms and fishing villages. You can learn to kayak, pick crabs, go fishing, tour a lighthouse, slurp oysters, and slow down to enjoy the natural beauty of the Chesapeake.",
      "RecAreaMapURL": "",
      "RecAreaLatitude": 38.971601,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "•\tAnnapolis, Maryland is conveniently located between Baltimore and Washington, D.C., just off the east coast's major north-south highway, I-95.\n•\tAirlines including American, Continental, Delta, Northwest, Southwest, Air Tran, US Airways and more make flying into Anne Arundel County's BWI Thurgood Marshall Airport a snap. For airport information call: 800-435-9294.\n•\tAMTRAK trains stop at the BWI station for convenient connections to Annapolis via a reserved 24-hour advance shuttle service. If you prefer, a shuttle service representative will meet you at the train. Options include: The Airport Shuttle 1-800-776-0323 or Lighthouse Limousine 1-866-605-4661. For train schedule information, call 800-USA- RAIL or visit AMTRAK and take advantage of a 30% companion rail fare discount.\n•\tLight rail provides a quick link from Baltimore's famed Inner Harbor and Camden Yards to BWI Thurgood Marshall Airport.\n•\tGreyhound provides daily bus service to Annapolis. For fares and schedules, contact: 1-800-231-2222.",
      "Keywords": "",
      "RecAreaName": "Chesapeake Bay"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -78.30618934,
          39.0093576
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "eric_campbell@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -78.30618934,
      "RecAreaID": 3138,
      "RecAreaPhone": "",
      "RecAreaDescription": "The Shenandoah Valley invites you to learn about its rich heritage, from Native Americans who first shaped the land, to pioneers of this frontier; this fertile area became one of the most important wheat producing regions of the entire South. The Valley also witnessed some of the most dramatic events of the Civil War,including the Battle of Cedar Creek, a decisive October 19, 1864 Union victory.",
      "RecAreaMapURL": "http://www.nps.gov/cebe/planyourvisit/maps.htm",
      "RecAreaLatitude": 39.0093576,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p><strong>Airplane: </strong>Metro-DC international airports are 1-2 hours from the park including Dulles, Regan-National, and Baltimore.</p>\n<p><strong>Car: </strong>The site is located at the intersection of Interstates 81 and 66 in the northern Shenandoah Valley. The historic Valley Pike (U.S. Route 11) runs through the park. Strasburg and Middletown are adjacent to the park.<br />\n<em><strong>From the north,</strong></em> take I-81 exit 302 and then head south on U.S. 11. <br />\n<em><strong>From the south</strong></em>, take I-81 exit 298 and then go north on U.S. 11.</p>\n<p><strong>Facilities:</strong> The Park Headquarters office is located at 7718 1/2 Main St. in Middletown. The Cedar Creek Visitor Center and Belle Grove Plantation house are located on U.S. 11 just a few miles south of Middletown (or north of Strasburg).<br />\n </p>",
      "Keywords": "",
      "RecAreaName": "Cedar Creek & Belle Grove National Historical Park"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "alka@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 4066,
      "RecAreaPhone": "",
      "RecAreaDescription": "Established in 2000 for the preservation, protection and interpretation of traditional Native Hawaiian culture and natural resources, Ala Kahakai National Historic Trail is a 175 mile corridor and trail network of cultural and historical significance. It traverses through hundreds of ancient Hawaiian settlement sites and over 200 ahupua'a (traditional land divisions). Connect now!",
      "RecAreaMapURL": "http://www.nps.gov/alka/planyourvisit/maps.htm",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Ala Kahakai National Historic Trail"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "webmaster@essexheritage.org",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 4071,
      "RecAreaPhone": "(978) 740 0444",
      "RecAreaDescription": "The Essex National Heritage Area begins just 10 miles north of Boston and covers 500 square miles of eastern Massachusetts to the New Hampshire border. The Area includes hundreds of historical sites, miles of intact landscapes, glistening coastal regions and lifetimes of rich experiences that chronicle the history of our region and of our nation.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Essex National Heritage Area"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -77.02812387,
          38.76901785
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "NACE_Fort_Washington_Park@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -77.02812387,
      "RecAreaID": 4072,
      "RecAreaPhone": "(301) 763 4600",
      "RecAreaDescription": "Fort Foote was constructed in 1863  atop Rozier's Bluff to strengthen the ring of fortifications that encircled Washington, D.C. Two of the Guns that protected Washington are still there along with the remains of the fort's earthworks.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 38.76901785,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Fort Foote is located on the Potomac River in Prince Georges County. From the Beltway (I-95), take exit 3, Indian Head Highway south (MD210) and drive for approximately 3.5 miles to Old Fort Road. Turn right for 1 mile to Fort Foote Road S, turn left. Follow the winding road through the residential area to entrance sight on the left for the fort. <br />\n </p>",
      "Keywords": "",
      "RecAreaName": "Fort Foote Park"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "mindi_Rambo@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 5190,
      "RecAreaPhone": "",
      "RecAreaDescription": "The Statue of Liberty, miles of beaches, Revolutionary times, birdwatching, Ellis Island, historic forts, a crowded tenement, a wildlife refuge, the birthplace of the Bill of Rights, kayaking, fights for LGBT civil rights, a rediscovered African cemetery, a general's tomb. That's what 12 million visitors explore 23 destinations each year within the National Parks of New York Harbor. Join us.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>The vast majority of the National Parks of New York Harbor are accessible by public transportation. For directions to one or more of the National Parks of New York Harbor, please visit the individual web pages for:</p>\n<p>African Burial Ground National Monument</p>\n<p>Castle Clinton National Monument</p>\n<p>Federal Hall National Memorial</p>\n<p>Gateway National Recreation Area</p>\n<p>General Grant National Memorial</p>\n<p>Governors Island National Monument</p>\n<p>Hamilton Grange National Memorial</p>\n<p>St. Paul's Church National Historic Site</p>\n<p>Statue of Liberty National Monument and Ellis Island</p>\n<p>Theodore Roosevelt Birthplace National Historic Site<br />\n </p>",
      "Keywords": "",
      "RecAreaName": "National Parks of New York Harbor"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -64.70683395,
          18.28996918
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "VICR_Superintendent@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -64.70683395,
      "RecAreaID": 5445,
      "RecAreaPhone": "",
      "RecAreaDescription": "Virgin Islands Coral Reef National Monument includes federal submerged lands within the 3-mile belt off the island of St. John. These waters support a diverse and complex system of coral reefs and other ecosystems such as shoreline mangrove forests and seagrass beds.\n\nVisit the links below to find out more.",
      "RecAreaMapURL": "http://www.nps.gov/vicr/planyourvisit/maps.htm",
      "RecAreaLatitude": 18.28996918,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Virgin Islands Coral Reef National Monument is administered by the management of Virgin Islands National Park. There are no separate facilities for this site.<br />\n<br />\nThe Visitor Center is located just two blocks away from the ferry dock on route 20 (North Shore Road). One may obtain information on the Monument here.</p>",
      "Keywords": "",
      "RecAreaName": "Virgin Islands Coral Reef National Monument"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -88.7100104094,
          34.330290333
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "natr_interpretation@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -88.7100104094,
      "RecAreaID": 5448,
      "RecAreaPhone": "(662) 680 4014",
      "RecAreaDescription": "The 450-mile foot trail that became known as the Natchez Trace was the lifeline through the Old Southwest.  You can experience portions of that journey the way earlier travelers did - on foot.  Today there are five separate trails totaling over 60 miles and they are administered by the Natchez Trace Parkway.",
      "RecAreaMapURL": "http://www.nps.gov/natt/planyourvisit/maps.htm",
      "RecAreaLatitude": 34.330290333,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Natchez Trace National Scenic Trail"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "Sherrouse@augustacanal.com",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 12720,
      "RecAreaPhone": "",
      "RecAreaDescription": "The Augusta Canal helped usher the Industrial Revolution into the American South. Built in 1845 as a source of power, water, and transportation, the canal today is the only fully intact American industrial canal in continuous operation. By 1847 the first mills opened, followed by the massive Civil War era Confederate Powder Works and many more industries in the later decades of the 19th century.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Canal Interpretive Center<br />\n1450 Greene Street, Augusta, from Interstate 20, Exit 200 Riverwatch Parkway:<br />\nLeft on Riverwatch approx. 5 miles to 13th Street. Right on 13th Street (0.1 mi.) to Greene Street. Right on Greene (0.3 mi.) to Enterprise Mill. Canal Interpretive Center Entrance on West (far) side of Mill.</p>\n<p>Headgates At Savannah Rapids Park<br />\nTerminus of Evan-to-Lock Road<br />\nEvans, Georgia<br />\nFrom I-20 Exit 200-Riverwatch Parkway. Right on Riverwatch approx. 1 mile to light at Stevens Creek Road. Right on Stevens Creek. 2 miles to 4-way stop on Evans-to-Lock Road. Turn Right. Road ends at park entrance (0.8 mi.). Paved parking is available.<br />\n </p>",
      "Keywords": "",
      "RecAreaName": "Augusta Canal National Heritage Area"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "lodi_administration@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 12721,
      "RecAreaPhone": "505-988-6098",
      "RecAreaDescription": "Come on a journey that will carry you through 300 years of Louisiana and Texas frontier settlement and development on a Spanish colonial \"royal road\" that originally extended to Mexico City, Mexico.",
      "RecAreaMapURL": "http://www.nps.gov/elte/planyourvisit/maps.htm",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Getting to El Camino Real de los Tejas National Historic Trail\n\nEl Camino Real de los Tejas was established to connect a series of Spanish missions and posts between Monclova, Mexico, and Los Adaes, the first capital of the province of Texas (in what is now northwestern Louisiana). The royal road was an approximately 1,000-mile long corridor of changing routes from Saltillo through Monclova and Guerrero, Coahuila, Mexico; San Antonio and Nacogdoches, Texas, and then east to the vicinity of Los Adaes in what is now Louisiana. It constituted the only primary overland route from the Río Grande to the Red River Valley in Louisiana during the Spanish Colonial Period. You can reach the national historic trail by flying into a number of airports, including Laredo and San Antonio, Texas, and Alexandria, Louisiana. You can reach some trail sites by auto on all-weather roads. Visit the trail system via the Passport Program. Go to: www.nps.gov/elte/planyourvisit/passport-program.htm",
      "Keywords": "",
      "RecAreaName": "El Camino Real de los Tejas National Historic Trail"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -80.8496627808,
          37.1117477417
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "Peter_givens@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -80.8496627808,
      "RecAreaID": 12722,
      "RecAreaPhone": "",
      "RecAreaDescription": "The Blue Ridge National Heritage Area is a place unlike any other on Earth, where ancient landscapes enchant the eye and age-old traditions warm the heart.  The distinctive landscape of the North Carolina mountains and foothills combined with the region's living traditions of craft, music, agriculture and Cherokee heritage create a wealth of natural and cultural treasures unmatched in our country.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 37.1117477417,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p class=\"subhead\" style=\"margin: auto 0in\"><b style=\"mso-bidi-font-weight: normal\"><span style=\"font-family: Candara\"><font size=\"3\">The Parkway connects Shenandoah National Park near Waynesboro, VA (Milepost 0) with Great Smoky Mountains National Park near Cherokee, NC (Milepost 469).  There are entrances and exits at all major federal and state highways and part of a Parkway experience is getting into the towns and communities of the region.  <st1:city w:st=\"on\">Asheville</st1:city> and Boone, NC and <st1:place w:st=\"on\"><st1:city w:st=\"on\">Roanoke</st1:city>, <st1:state w:st=\"on\">VA</st1:state></st1:place> are the largest cities along the way.  In <st1:state w:st=\"on\"><st1:place w:st=\"on\">Virginia</st1:place></st1:state>, Interstates 64, 81, and 77 all have directions for accessing the Parkway.  The same is true for Interstates 40 and 26 in <st1:state w:st=\"on\"><st1:place w:st=\"on\">North Carolina</st1:place></st1:state>.<o:p></o:p></font></span></b></p>",
      "Keywords": "",
      "RecAreaName": "Blue Ridge National Heritage Area"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -74.64969521,
          39.30421499
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "Paul_Kenney@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -74.64969521,
      "RecAreaID": 12723,
      "RecAreaPhone": "",
      "RecAreaDescription": "The River gradually widens as it picks up the waters of 17 tributaries on its way to Great Egg Harbor and the Atlantic Ocean. Established by Congress in 1992, nearly all of this 129-mile river system rests within the Pinelands National Reserve. This National Park Service unit is unusual in that local jurisdictions continue to administer the lands.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 39.30421499,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Great Egg Harbor River"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "mary.mangione@hudsongreenway.state.ny.us",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 12724,
      "RecAreaPhone": "(518) 473 3835",
      "RecAreaDescription": "Hudson River Valley National Heritage Area stretches from New York City to Albany. The area resources exhibit the roles of freedom and dignity in the valley's history, and the historical and contemporary role of commerce. Revolutionary War stories, famous residences, scenic parks and gardens, and landscape interpretations all contribute to the Hudson Valley's beauty and wealth of resources.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Hudson River Valley National Heritage Area"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -75.6760322303,
          41.4095413685
        ]
      },
      "LastUpdatedDate": "2014-09-23",
      "RecAreaEmail": "heritage@LHVA.org",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -75.6760322303,
      "RecAreaID": 12725,
      "RecAreaPhone": "",
      "RecAreaDescription": "",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 41.4095413685,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Lackawanna Heritage Valley"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -123.9638583,
          46.21178735
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "Jill_Harding@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -123.9638583,
      "RecAreaID": 12726,
      "RecAreaPhone": "(503) 861 2471",
      "RecAreaDescription": "Explore the timeless rainforests and majestic coastal vistas. Discover the rich heritage of the native people. Unfold the dramatic stories of America's most famous explorers. The park encompasses sites along the Columbia River and the Pacific Coast. Follow in the footsteps of the explorers and have an adventure in history.",
      "RecAreaMapURL": "http://www.nps.gov/lewi/planyourvisit/maps.htm",
      "RecAreaLatitude": 46.21178735,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "From Portland South:\nTake Highway 26 West to Seaside. Go North on Highway 101 through Seaside. Turn right at the stop light on SE Ensign Lane. Continue to drive about one mile, turn right onto Fort Clatsop road, the entrance will be on your left.\n\nFrom Portland North:\nTake I-5 or Highway 205 North to Longview. Take the first exit to Longview (Highway 432 or the truck route) follow truck route signs to Highway 433 turn left and take the BIG bridge over the Columbia River. Turn right onto Highway 30 West to Astoria. From I-5 to Astoria is approximately 50 miles. Go through Astoria and go south on Highway 101. Take the first left, Marlin Ave., after you have crossed the Youngs Bay Bridge (you will come to a new stop light, 3rd one after the bridge, just south of Fred Meyer). Take Marlin Ave. to Alternate (Business) 101, turn left, follow the signs to the park. Turn right onto Fort Clatsop Road. The entrance will be on your left.",
      "Keywords": "",
      "RecAreaName": "Lewis and Clark National Historical Park"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "william_sharp@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 12727,
      "RecAreaPhone": "(215) 597 1655",
      "RecAreaDescription": "The largest free-flowing river in the eastern United States, the Delaware River runs past forests, farmlands, and villages, and it also links some of the most densely populated regions in America.\n\nIn 2000, the National Wild and Scenic River System incorporated key segments of the lower Delaware River to form this unit of the National Park System.",
      "RecAreaMapURL": "http://www.nps.gov/lode/planyourvisit/maps.htm",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Lower Delaware National Wild and Scenic River"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -77.0363745689,
          38.9215651567
        ]
      },
      "LastUpdatedDate": "2016-09-13",
      "RecAreaEmail": "ROCR_Superintendent@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -77.0363745689,
      "RecAreaID": 12728,
      "RecAreaPhone": "(202) 895-6070",
      "RecAreaDescription": "An administrative unit of Rock Creek Park, Meridian Hill Park is an urban park like no other. The formal, 12-acre site includes unique statues, the largest cascading fountain in North America, concrete aggregate architecture, a U.S. presidential memorial, and more. Designed based off of an Italian aristocrat's private residence, Meridian Hill Park is open to everyone. Come all, come one!",
      "RecAreaMapURL": "",
      "RecAreaLatitude": 38.9215651567,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p> </p>\n<p>From downtown DC (National Mall):</p>\n<p>Go north on 14th, St., turn left onto M St. go two blocks and turn right onto 16th St. At W St. turn right, go one block and turn left onto 15th St. There is a small of street parking lot on the left of 15th.</p>\n<p> </p>\n<p>From Maryland:</p>\n<p>Take 16th St. south to Euclid St. and turn left. Turn right onto 15th St. There is a small off street parking lot on the right of 15th St.<br />\n </p>",
      "Keywords": "",
      "RecAreaName": "Meridian Hill  Park"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "info@experienceeverythingautomotive.org",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 12729,
      "RecAreaPhone": "(313) 259 3425",
      "RecAreaDescription": "If you are interested in automotive history, then MotorCities National Heritage Area is the place to be. Tour the factory where Henry Ford created and built the Model T. Learn the stories behind the creation of General Motors and DamilerChrysler. Come with us and learn about the long and sometimes tenuous relationship between Labor and Industry while experiencing southeast Michigan.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Motor Cities National Heritage Area"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "info@aviationheritagearea.org",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 12730,
      "RecAreaPhone": "",
      "RecAreaDescription": "Aviation is chock-full of tradition & history and nowhere will you find a richer collection of aviation than here, the birthplace of aviation.  From the straightforward bicycle shops that fostered the Wright brothers' flying ambitions to the complex spacecraft that carried man to the moon, the National Aviation Heritage Area has everything you need to learn about this country's aviation legacy.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "National Aviation Heritage Area"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "mblack@oilregion.org",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 12731,
      "RecAreaPhone": "",
      "RecAreaDescription": "Oil Region National Heritage Area in northwestern Pennsylvania tells of the world's first successful commercial oil well and a legacy of petroleum that continues to shape industry, society, and politics. The Oil Region includes oil artifacts, scenic communities, farmlands and woodlands, and industrial landscapes, and offers visitors heritage attractions and four seasons of outdoor recreation.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Oil Region National Heritage Area"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "LODI_Administration@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 12732,
      "RecAreaPhone": "",
      "RecAreaDescription": "Follow the routes of mule pack trains across the Southwest on the Old Spanish National Historic Trail between Santa Fe, New Mexico, and Los Angeles, California. New Mexican traders moved locally produced merchandise across what are now six states to exchange for mules and horses.",
      "RecAreaMapURL": "http://www.nps.gov/olsp/planyourvisit/maps.htm",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Getting to the Old Spanish National Historic Trail</p>\n<p>The historic trail crossed six states - New Mexico, Colorado, Utah, Nevada, Arizona, and California.</p>\n<p>Plane:You can reach the national historic trail by flying into a number of airports, including Santa Fe, New Mexico; Alamosa and Durango, Colorado; Las Vegas, Nevada; St. George, Utah; Flagstaff, Arizona; and Los Angeles, California. Trail-related sites are easily reached from these cities.</p>\n<p>Car:You can reach some trail sites by auto on all-weather roads. Other sites are along unpaved roads or along river corridors. An official trail guide and map is not yet available - please check with local sources.</p>\n<p> </p> Discover 35 places to visit through the Passport Program. Go to: www.nps.gov/olsp/planyourvisit/passport-program.htm",
      "Keywords": "",
      "RecAreaName": "Old Spanish National Historic Trail"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2014-09-23",
      "RecAreaEmail": "info@westsylvania.org",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 12733,
      "RecAreaPhone": "(814) 696 9380",
      "RecAreaDescription": "The Path of Progress is a 500 mile driving route which winds through the hills and valleys of nine scenic southwestern Pennsylvania counties linking key historical sites and diverse points of interest. A distinct portrait of the combined industrial, cultural, and economic heritage of the area is revealed by traveling all or portions of the route.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/anac/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Path of Progress National Heritage Tour Route"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "info@riversofsteel.com",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 12734,
      "RecAreaPhone": "",
      "RecAreaDescription": "The Rivers of Steel National Heritage Area reveals how one region, in a sustained and thunderous blast of innovation, ambition and fire, forever changed America and its place in the world. It is the story of the industrialists and the workers who pushed an infant industry to it ultimate limits and in doing so pushed the world into the Age of Steel.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Rivers Of Steel National Heritage Area"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "info@schuylkillriver.org",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 12735,
      "RecAreaPhone": "(484) 945-0200",
      "RecAreaDescription": "The Schuylkill River Heritage Area is the birthplace of the movements that shaped the nation, fueled its growth, and reclaimed its future. It was along the banks of this river and its tributaries that the American, Industrial, and Environmental Revolutions were born. Explore the stories, visit the places, and experience the region's vitality by visiting the Schuylkill River Heritage Area.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Schuylkill River Valley National Heritage Area"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "edgefielddc@scprt.com",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 12736,
      "RecAreaPhone": "",
      "RecAreaDescription": "",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "South Carolina National Heritage Corridor"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "civilwar@mtsu.edu",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 12737,
      "RecAreaPhone": "(615) 898 2947",
      "RecAreaDescription": "Experience the powerful stories of vicious warfare, homefront and occupation, the freedom of emancipation, and the enduring legacies of Reconstruction at sites across the entire state of Tennessee.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>The Heritage Center of Murfreesboro and Rutherford County<br />\nFrom Interstate Highway I-24, take exit 78 at Murfreesboro and go north on U.S. Highway 231/Highway 96 (Old Fort Parkway). Continue on Old Fort Parkway to its intersection with U.S. Highway 41 (Broad Street). Continue north through the intersection and then take the first immediate right (College Street). Continue east on College Street to the location of The Heritage Center at 225 West College Street.<br />\n </p>",
      "Keywords": "",
      "RecAreaName": "Tennessee Civil War National Heritage Area"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "info@wheelingheritage.org",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 12738,
      "RecAreaPhone": "",
      "RecAreaDescription": "The Wheeling National Heritage Area celebrates the city's dramatic setting along the Ohio River, providing experiences in Victorian architecture, waterfront park development, historic city markets, renovated industrial buildings featuring retail shops, restaurants and interpretive exhibits, and West Virginia Independence Hall, the birthplace of the state of West Virginia during the Civil War.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Wheeling National Heritage Area"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2016-03-04",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 12739,
      "RecAreaPhone": "(928) 373 5198",
      "RecAreaDescription": "The Colorado River crossing at Yuma, Arizona, has a rich history, accented in recent years by irrigation works that have transformed the region into an agricultural oasis. But in the process, riparian areas suffered and the riverfront became blighted. Today, Yuma Crossing National Heritage Area is working to restore the region's wetlands and reconnect the city to its historic down",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Yuma is located just off Interstate 8, halfway between San Diego and Phoenix. Yuma is served by US Airways (Phoenix) and United Airlines (Los Angeles).</p>",
      "Keywords": "",
      "RecAreaName": "Yuma Crossing National Heritage Area"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2013-04-10",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 12842,
      "RecAreaPhone": "",
      "RecAreaDescription": "<br>The Ansel Adams Wilderness now contains a total of 231,533 acres and is managed by the Forest Service and the National Park Service. All of the Wilderness is in the state of California. In 1964 the Ansel Adams Wilderness became part of the now over 109 million acre National Wilderness Preservation System. In wilderness, you can enjoy challenging recreational activities and extraordinary opportunities for solitude. In an age of <em>&quot;...increasing population, accompanied by expanding settlement and growing mechanization,...&quot;</em> you play an important role in helping to <em>&quot;...secure for the American people of present and future generations the benefits of an enduring resource of wilderness&quot;</em> as called for by Congress in the <a href=\"http://www.wilderness.net/index.cfm?fuse=NWPS&amp;sec=legisact\">Wilderness Act of 1964</a>. Please follow the regulations in place for this area, and use Leave No Trace techniques when visiting to ensure protection of its unique natural and experiential qualities.<p>How to follow the seven standard Leave No Trace principles differs in different parts of the country (desert vs. Rocky Mountains). Click on any of the principles listed below to learn more about how they apply.<p><b>Leave No Trace principles:</b><ol><li><a href=\"http://www.lnt.org/programs/principles_1.php\">Plan Ahead and Prepare</a></li><li><a href=\"http://www.lnt.org/programs/principles_2.php\">Travel and Camp on Durable Surfaces</a></li><li><a href=\"http://www.lnt.org/programs/principles_3.php\">Dispose of Waste Properly</a></li><li><a href=\"http://www.lnt.org/programs/principles_4.php\">Leave What You Find</a></li><li><a href=\"http://www.lnt.org/programs/principles_5.php\">Minimize Campfire Impacts</a></li><li><a href=\"http://www.lnt.org/programs/principles_6.php\">Respect Wildlife</a></li><li><a href=\"http://www.lnt.org/programs/principles_7.php\">Be Considerate of Other Visitors</a></li></ol><p><b>Regulations:</b><br>Motorized equipment and equipment used for mechanical transport are generally prohibited on all federal lands designated as wilderness. This includes the use of motor vehicles (including OHVs), motorboats, motorized equipment, bicycles, hang gliders, wagons, carts, portage wheels, and the landing of aircraft including helicopters, unless provided for in specific legislation. In a few areas some exceptions allowing the use of motorized equipment or mechanical transport are described in the special regulations in effect for a specific area. <a href=\"http://www.wilderness.net/index.cfm?fuse=NWPS&amp;sec=wildView&amp;tab=Area%20Management&amp;WID=12#regs\">Click here for additional regulations</a> or contact the agency.<p><b>Contact Information:</b><blockquote><p>INYO NATIONAL FOREST<br>351 PACU LANE<br>SUITE 200<br>BISHOP, CA 93514<br>Phone: 760-873-2400<p>SIERRA NATIONAL FOREST<br>1600 TOLLHOUSE ROAD<br>CLOVIS, CA 93611<br>Phone: 559-297-0706<p>DEVIL'S POSTPILE NATIONAL MONUMENT<br>P.O. Box 3999<br>Mammoth Lakes, CA 93546<br>Phone: 760-934-2289</blockquote>",
      "RecAreaMapURL": "http://www.wilderness.net/index.cfm?fuse=NWPS&latitude=37.5937345298&longitude=-119.181553039&zoom=10",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Ansel Adams Wilderness"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2013-04-10",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 12843,
      "RecAreaPhone": "",
      "RecAreaDescription": "<br>The Badlands Wilderness now contains a total of 64,144 acres and is managed by the National Park Service. All of the Wilderness is in the state of South Dakota. In 1976 the Badlands Wilderness became part of the now over 109 million acre National Wilderness Preservation System. In wilderness, you can enjoy challenging recreational activities and extraordinary opportunities for solitude. In an age of <em>&quot;...increasing population, accompanied by expanding settlement and growing mechanization,...&quot;</em> you play an important role in helping to <em>&quot;...secure for the American people of present and future generations the benefits of an enduring resource of wilderness&quot;</em> as called for by Congress in the <a href=\"http://www.wilderness.net/index.cfm?fuse=NWPS&amp;sec=legisact\">Wilderness Act of 1964</a>. Please follow the regulations in place for this area, and use Leave No Trace techniques when visiting to ensure protection of its unique natural and experiential qualities.<p>How to follow the seven standard Leave No Trace principles differs in different parts of the country (desert vs. Rocky Mountains). Click on any of the principles listed below to learn more about how they apply.<p><b>Leave No Trace principles:</b><ol><li><a href=\"http://www.lnt.org/programs/principles_1.php\">Plan Ahead and Prepare</a></li><li><a href=\"http://www.lnt.org/programs/principles_2.php\">Travel and Camp on Durable Surfaces</a></li><li><a href=\"http://www.lnt.org/programs/principles_3.php\">Dispose of Waste Properly</a></li><li><a href=\"http://www.lnt.org/programs/principles_4.php\">Leave What You Find</a></li><li><a href=\"http://www.lnt.org/programs/principles_5.php\">Minimize Campfire Impacts</a></li><li><a href=\"http://www.lnt.org/programs/principles_6.php\">Respect Wildlife</a></li><li><a href=\"http://www.lnt.org/programs/principles_7.php\">Be Considerate of Other Visitors</a></li></ol><p><b>Regulations:</b><br>Motorized equipment and equipment used for mechanical transport are generally prohibited on all federal lands designated as wilderness. This includes the use of motor vehicles (including OHVs), motorboats, motorized equipment, bicycles, hang gliders, wagons, carts, portage wheels, and the landing of aircraft including helicopters, unless provided for in specific legislation. In a few areas some exceptions allowing the use of motorized equipment or mechanical transport are described in the special regulations in effect for a specific area. Contact the agency for more information about regulations.<p><b>Contact Information:</b><blockquote><p>BADLANDS NATIONAL PARK<br>25216 Ben Reifel Rd.<br>P.O. Box 6<br>Interior, SD 57750<br>Phone: 605-433-5361<br>Fax: 605-433-5248<br>Email: <a href=mailto:\"BADL_Information@nps.gov\">BADL_Information@nps.gov</a></blockquote>",
      "RecAreaMapURL": "http://www.wilderness.net/index.cfm?fuse=NWPS&latitude=43.829806159&longitude=-102.313643479&zoom=11",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Badlands National Park is located in southwestern South Dakota and can be easily accessed by car. Plane or bus service is available to Rapid City, South Dakota, located approximately 80 miles west of the park.<br><br>By Car<br>Interstate 90 (I-90) is located directly north of the park and provides access to the Badlands Loop Road. For those traveling west on I-90, take Exit 131 (Interior) and follow the signs directing vehicles south approximately three miles to the Northeast Entrance gate. For those traveling east on I-90, take Exit 110 at Wall, South Dakota. Follow signs directing vehicles south approximately seven miles to the Pinnacles Entrance of the park. <br><br>State Highway 44 provides an alternate, scenic access to the park and intersects Highway 377 in the town of Interior. Follow 377 two miles north to the Interior Entrance gate.<br><br>By Plane<br>Daily flights are available to the Rapid City Regional Airport and car rental services are available onsite. The airport is located approximately one hour west of the park, off of Highway 44.<br><br>By Bus<br>Greyhound Lines, Inc. has limited bus service to Rapid City. Car rental companies are available in Rapid City with delivery and pickup services.<br><br>Some bus tours are available through tour companies in Rapid City and the surrounding area.<br><br>By Public Transportation<br>No public transportation is available to the park.<br><br>Getting Around<br>A typical visit lasts three to five hours and includes the park movie, stops at four overlooks, and two walks. The Badlands Loop Road, accessed from Interstate 90, is a two-lane, paved surface. The Sage Creek Rim Road is gravel and may be impassable after heavy rains or snows. Five trails, varying from 1/4-mile to eight miles in length, explore park features. The remainder of the park is open to exploration using a topographic map and a compass.<br> <br><br> <br>",
      "Keywords": "",
      "RecAreaName": "Badlands Wilderness"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2013-04-10",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 12844,
      "RecAreaPhone": "",
      "RecAreaDescription": "<br>The Bandelier Wilderness now contains a total of 23,267 acres and is managed by the National Park Service. All of the Wilderness is in the state of New Mexico. In 1976 the Bandelier Wilderness became part of the now over 109 million acre National Wilderness Preservation System. In wilderness, you can enjoy challenging recreational activities and extraordinary opportunities for solitude. In an age of <em>&quot;...increasing population, accompanied by expanding settlement and growing mechanization,...&quot;</em> you play an important role in helping to <em>&quot;...secure for the American people of present and future generations the benefits of an enduring resource of wilderness&quot;</em> as called for by Congress in the <a href=\"http://www.wilderness.net/index.cfm?fuse=NWPS&amp;sec=legisact\">Wilderness Act of 1964</a>. Please follow the regulations in place for this area, and use Leave No Trace techniques when visiting to ensure protection of its unique natural and experiential qualities.<p>How to follow the seven standard Leave No Trace principles differs in different parts of the country (desert vs. Rocky Mountains). Click on any of the principles listed below to learn more about how they apply.<p><b>Leave No Trace principles:</b><ol><li><a href=\"http://www.lnt.org/programs/principles_1.php\">Plan Ahead and Prepare</a></li><li><a href=\"http://www.lnt.org/programs/principles_2.php\">Travel and Camp on Durable Surfaces</a></li><li><a href=\"http://www.lnt.org/programs/principles_3.php\">Dispose of Waste Properly</a></li><li><a href=\"http://www.lnt.org/programs/principles_4.php\">Leave What You Find</a></li><li><a href=\"http://www.lnt.org/programs/principles_5.php\">Minimize Campfire Impacts</a></li><li><a href=\"http://www.lnt.org/programs/principles_6.php\">Respect Wildlife</a></li><li><a href=\"http://www.lnt.org/programs/principles_7.php\">Be Considerate of Other Visitors</a></li></ol><p><b>Regulations:</b><br>Motorized equipment and equipment used for mechanical transport are generally prohibited on all federal lands designated as wilderness. This includes the use of motor vehicles (including OHVs), motorboats, motorized equipment, bicycles, hang gliders, wagons, carts, portage wheels, and the landing of aircraft including helicopters, unless provided for in specific legislation. In a few areas some exceptions allowing the use of motorized equipment or mechanical transport are described in the special regulations in effect for a specific area. Contact the agency for more information about regulations.<p><b>Contact Information:</b><blockquote><p>BANDELIER NATIONAL MONUMENT<br>15 Entrance Road<br>Los Alamos, NM 87544<br>Phone: 505-672-3861 x517<br>Fax: 505-672-9607<br>Please dial 505-672-0343 for a pre-recorded message. For group reservations call 505-672-3861 x534</blockquote>",
      "RecAreaMapURL": "http://www.wilderness.net/index.cfm?fuse=NWPS&latitude=35.7609228446&longitude=-106.323469003&zoom=12",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>The Bandelier Wilderness is located within Bandelier National Monument.",
      "Keywords": "",
      "RecAreaName": "Bandelier Wilderness"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2013-04-10",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 12845,
      "RecAreaPhone": "",
      "RecAreaDescription": "<br>The Beaver Basin Wilderness now contains a total of 11,740 acres and is managed by the National Park Service. All of the Wilderness is in the state of Michigan. In 2009 the Beaver Basin Wilderness became part of the now over 109 million acre National Wilderness Preservation System. In wilderness, you can enjoy challenging recreational activities and extraordinary opportunities for solitude. In an age of <em>&quot;...increasing population, accompanied by expanding settlement and growing mechanization,...&quot;</em> you play an important role in helping to <em>&quot;...secure for the American people of present and future generations the benefits of an enduring resource of wilderness&quot;</em> as called for by Congress in the <a href=\"http://www.wilderness.net/index.cfm?fuse=NWPS&amp;sec=legisact\">Wilderness Act of 1964</a>. Please follow the regulations in place for this area, and use Leave No Trace techniques when visiting to ensure protection of its unique natural and experiential qualities.<p>How to follow the seven standard Leave No Trace principles differs in different parts of the country (desert vs. Rocky Mountains). Click on any of the principles listed below to learn more about how they apply.<p><b>Leave No Trace principles:</b><ol><li><a href=\"http://www.lnt.org/programs/principles_1.php\">Plan Ahead and Prepare</a></li><li><a href=\"http://www.lnt.org/programs/principles_2.php\">Travel and Camp on Durable Surfaces</a></li><li><a href=\"http://www.lnt.org/programs/principles_3.php\">Dispose of Waste Properly</a></li><li><a href=\"http://www.lnt.org/programs/principles_4.php\">Leave What You Find</a></li><li><a href=\"http://www.lnt.org/programs/principles_5.php\">Minimize Campfire Impacts</a></li><li><a href=\"http://www.lnt.org/programs/principles_6.php\">Respect Wildlife</a></li><li><a href=\"http://www.lnt.org/programs/principles_7.php\">Be Considerate of Other Visitors</a></li></ol><p><b>Regulations:</b><br>Motorized equipment and equipment used for mechanical transport are generally prohibited on all federal lands designated as wilderness. This includes the use of motor vehicles (including OHVs), motorboats, motorized equipment, bicycles, hang gliders, wagons, carts, portage wheels, and the landing of aircraft including helicopters, unless provided for in specific legislation. In a few areas some exceptions allowing the use of motorized equipment or mechanical transport are described in the special regulations in effect for a specific area. Contact the agency for more information about regulations.",
      "RecAreaMapURL": "http://www.wilderness.net/index.cfm?fuse=NWPS&latitude=46.5690316521&longitude=-86.3219078686&zoom=12",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Beaver Basin Wilderness"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2013-04-10",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 12846,
      "RecAreaPhone": "",
      "RecAreaDescription": "<br>The Black Canyon of the Gunnison Wilderness now contains a total of 15,599 acres and is managed by the National Park Service. All of the Wilderness is in the state of Colorado. In 1976 the Black Canyon of the Gunnison Wilderness became part of the now over 109 million acre National Wilderness Preservation System. In wilderness, you can enjoy challenging recreational activities and extraordinary opportunities for solitude. In an age of <em>&quot;...increasing population, accompanied by expanding settlement and growing mechanization,...&quot;</em> you play an important role in helping to <em>&quot;...secure for the American people of present and future generations the benefits of an enduring resource of wilderness&quot;</em> as called for by Congress in the <a href=\"http://www.wilderness.net/index.cfm?fuse=NWPS&amp;sec=legisact\">Wilderness Act of 1964</a>. Please follow the regulations in place for this area, and use Leave No Trace techniques when visiting to ensure protection of its unique natural and experiential qualities.<p>How to follow the seven standard Leave No Trace principles differs in different parts of the country (desert vs. Rocky Mountains). Click on any of the principles listed below to learn more about how they apply.<p><b>Leave No Trace principles:</b><ol><li><a href=\"http://www.lnt.org/programs/principles_1.php\">Plan Ahead and Prepare</a></li><li><a href=\"http://www.lnt.org/programs/principles_2.php\">Travel and Camp on Durable Surfaces</a></li><li><a href=\"http://www.lnt.org/programs/principles_3.php\">Dispose of Waste Properly</a></li><li><a href=\"http://www.lnt.org/programs/principles_4.php\">Leave What You Find</a></li><li><a href=\"http://www.lnt.org/programs/principles_5.php\">Minimize Campfire Impacts</a></li><li><a href=\"http://www.lnt.org/programs/principles_6.php\">Respect Wildlife</a></li><li><a href=\"http://www.lnt.org/programs/principles_7.php\">Be Considerate of Other Visitors</a></li></ol><p><b>Regulations:</b><br>Motorized equipment and equipment used for mechanical transport are generally prohibited on all federal lands designated as wilderness. This includes the use of motor vehicles (including OHVs), motorboats, motorized equipment, bicycles, hang gliders, wagons, carts, portage wheels, and the landing of aircraft including helicopters, unless provided for in specific legislation. In a few areas some exceptions allowing the use of motorized equipment or mechanical transport are described in the special regulations in effect for a specific area. Contact the agency for more information about regulations.<p><b>Contact Information:</b><blockquote><p>BLACK CANYON OF THE GUNNISON NATIONAL PARK<br>102 Elk Creek<br>Gunnison, CO 81230<br>Phone: 970-641-2337 x205<br>Fax: 970-641-3127</blockquote>",
      "RecAreaMapURL": "http://www.wilderness.net/index.cfm?fuse=NWPS&latitude=38.584159754&longitude=-107.755751948&zoom=12",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Black Canyon of the Gunnison National Park is located approximately 210 miles southwest of Denver, Colorado.<br><br>Access to the South Rim is approximately 15 miles east of Montrose, Colorado, via U.S. Highway 50 and CO Highway 347.<br><br>Access to the North Rim is 11 miles south of Crawford, Colorado, via CO Highway 92 and North Rim Road (unpaved).<br><br>There is no bridge between the north and south rims of the canyon. Allow two to three hours to drive from one side to the other.<br><br>PUBLIC TRANSPORTATION <br>By bus: To Montrose or Grand Junction, CO.<br>By train: To Grand Junction.<br>There is no public transportation within the park.<br><br>PLANE<br>Commercial airline service is available to Montrose, Gunnison, and Grand Junction.<br>",
      "Keywords": "",
      "RecAreaName": "Black Canyon of the Gunnison Wilderness"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2013-04-10",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 12848,
      "RecAreaPhone": "",
      "RecAreaDescription": "<br>The Bridge Canyon Wilderness now contains a total of 7,761 acres and is managed by the National Park Service. All of the Wilderness is in the state of Nevada. In 2002 the Bridge Canyon Wilderness became part of the now over 109 million acre National Wilderness Preservation System. In wilderness, you can enjoy challenging recreational activities and extraordinary opportunities for solitude. In an age of <em>&quot;...increasing population, accompanied by expanding settlement and growing mechanization,...&quot;</em> you play an important role in helping to <em>&quot;...secure for the American people of present and future generations the benefits of an enduring resource of wilderness&quot;</em> as called for by Congress in the <a href=\"http://www.wilderness.net/index.cfm?fuse=NWPS&amp;sec=legisact\">Wilderness Act of 1964</a>. Please follow the regulations in place for this area, and use Leave No Trace techniques when visiting to ensure protection of its unique natural and experiential qualities.<p>How to follow the seven standard Leave No Trace principles differs in different parts of the country (desert vs. Rocky Mountains). Click on any of the principles listed below to learn more about how they apply.<p><b>Leave No Trace principles:</b><ol><li><a href=\"http://www.lnt.org/programs/principles_1.php\">Plan Ahead and Prepare</a></li><li><a href=\"http://www.lnt.org/programs/principles_2.php\">Travel and Camp on Durable Surfaces</a></li><li><a href=\"http://www.lnt.org/programs/principles_3.php\">Dispose of Waste Properly</a></li><li><a href=\"http://www.lnt.org/programs/principles_4.php\">Leave What You Find</a></li><li><a href=\"http://www.lnt.org/programs/principles_5.php\">Minimize Campfire Impacts</a></li><li><a href=\"http://www.lnt.org/programs/principles_6.php\">Respect Wildlife</a></li><li><a href=\"http://www.lnt.org/programs/principles_7.php\">Be Considerate of Other Visitors</a></li></ol><p><b>Regulations:</b><br>Motorized equipment and equipment used for mechanical transport are generally prohibited on all federal lands designated as wilderness. This includes the use of motor vehicles (including OHVs), motorboats, motorized equipment, bicycles, hang gliders, wagons, carts, portage wheels, and the landing of aircraft including helicopters, unless provided for in specific legislation. In a few areas some exceptions allowing the use of motorized equipment or mechanical transport are described in the special regulations in effect for a specific area. Contact the agency for more information about regulations.<p><b>Contact Information:</b><blockquote><p>LAKE MEAD NATIONAL RECREATION AREA<br>601 Nevada Way<br>Boulder City, NV 89005<br>Phone: 702-293-8990<br>Fax: 702-293-8936</blockquote>",
      "RecAreaMapURL": "http://www.wilderness.net/index.cfm?fuse=NWPS&latitude=35.2260136374&longitude=-114.701843776&zoom=12",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Bridge Canyon Wilderness"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2013-04-10",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 12849,
      "RecAreaPhone": "",
      "RecAreaDescription": "<br>The Buffalo National River Wilderness now contains a total of 34,933 acres and is managed by the National Park Service. All of the Wilderness is in the state of Arkansas. In 1978 the Buffalo National River Wilderness became part of the now over 109 million acre National Wilderness Preservation System. In wilderness, you can enjoy challenging recreational activities and extraordinary opportunities for solitude. In an age of <em>&quot;...increasing population, accompanied by expanding settlement and growing mechanization,...&quot;</em> you play an important role in helping to <em>&quot;...secure for the American people of present and future generations the benefits of an enduring resource of wilderness&quot;</em> as called for by Congress in the <a href=\"http://www.wilderness.net/index.cfm?fuse=NWPS&amp;sec=legisact\">Wilderness Act of 1964</a>. Please follow the regulations in place for this area, and use Leave No Trace techniques when visiting to ensure protection of its unique natural and experiential qualities.<p>How to follow the seven standard Leave No Trace principles differs in different parts of the country (desert vs. Rocky Mountains). Click on any of the principles listed below to learn more about how they apply.<p><b>Leave No Trace principles:</b><ol><li><a href=\"http://www.lnt.org/programs/principles_1.php\">Plan Ahead and Prepare</a></li><li><a href=\"http://www.lnt.org/programs/principles_2.php\">Travel and Camp on Durable Surfaces</a></li><li><a href=\"http://www.lnt.org/programs/principles_3.php\">Dispose of Waste Properly</a></li><li><a href=\"http://www.lnt.org/programs/principles_4.php\">Leave What You Find</a></li><li><a href=\"http://www.lnt.org/programs/principles_5.php\">Minimize Campfire Impacts</a></li><li><a href=\"http://www.lnt.org/programs/principles_6.php\">Respect Wildlife</a></li><li><a href=\"http://www.lnt.org/programs/principles_7.php\">Be Considerate of Other Visitors</a></li></ol><p><b>Regulations:</b><br>Motorized equipment and equipment used for mechanical transport are generally prohibited on all federal lands designated as wilderness. This includes the use of motor vehicles (including OHVs), motorboats, motorized equipment, bicycles, hang gliders, wagons, carts, portage wheels, and the landing of aircraft including helicopters, unless provided for in specific legislation. In a few areas some exceptions allowing the use of motorized equipment or mechanical transport are described in the special regulations in effect for a specific area. Contact the agency for more information about regulations.<p><b>Contact Information:</b><blockquote><p>BUFFALO NATIONAL RIVER<br>Headquarters<br>402 N. Walnut<br>Suite 136<br>Harrison, AR 72601<br>Phone: 870-365-2700<br>Fax: 870-741-7286<br>Office hours: 8am - 4:30pm, Monday-Friday</blockquote>",
      "RecAreaMapURL": "http://www.wilderness.net/index.cfm?fuse=NWPS&latitude=36.097452909&longitude=-92.7517261128&zoom=12",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>The Upper Buffalo Unit can be reached south of Boxley Valley off State Route 21.  There are no formal trails, but the Buffalo River Trail trailhead in the south end of Boxley Valley provides a good spot to start bushwhacking.<br>The Ponca Unit can be reached from State Route 43 north of Ponca at the Centerpoint and Compton trailheads.  It may also be reached from State Route 74 at Steel Creek and Kyles Landing campgrounds.  It is also reachable at the Ponca River Access at the junction of Routes 74 and 43 just outside of Ponca.<br>The Lower Buffalo Unit can be reached via Marion County road 6064 off State Route 101 south of Flippin.  It may also be reached from Arkansas Route 14 by following Searcy County's Cozahome Road till it turns into Marion County road 650.  Marion County Road 650 ends near the Ludlow Gap area, and Marion County Road 652 ends at Log Wagon Gap trailhead.",
      "Keywords": "",
      "RecAreaName": "Buffalo National River Wilderness"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2013-04-10",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 12850,
      "RecAreaPhone": "",
      "RecAreaDescription": "<br>The Carlsbad Caverns Wilderness now contains a total of 33,125 acres and is managed by the National Park Service. All of the Wilderness is in the state of New Mexico. In 1978 the Carlsbad Caverns Wilderness became part of the now over 109 million acre National Wilderness Preservation System. In wilderness, you can enjoy challenging recreational activities and extraordinary opportunities for solitude. In an age of <em>&quot;...increasing population, accompanied by expanding settlement and growing mechanization,...&quot;</em> you play an important role in helping to <em>&quot;...secure for the American people of present and future generations the benefits of an enduring resource of wilderness&quot;</em> as called for by Congress in the <a href=\"http://www.wilderness.net/index.cfm?fuse=NWPS&amp;sec=legisact\">Wilderness Act of 1964</a>. Please follow the regulations in place for this area, and use Leave No Trace techniques when visiting to ensure protection of its unique natural and experiential qualities.<p>How to follow the seven standard Leave No Trace principles differs in different parts of the country (desert vs. Rocky Mountains). Click on any of the principles listed below to learn more about how they apply.<p><b>Leave No Trace principles:</b><ol><li><a href=\"http://www.lnt.org/programs/principles_1.php\">Plan Ahead and Prepare</a></li><li><a href=\"http://www.lnt.org/programs/principles_2.php\">Travel and Camp on Durable Surfaces</a></li><li><a href=\"http://www.lnt.org/programs/principles_3.php\">Dispose of Waste Properly</a></li><li><a href=\"http://www.lnt.org/programs/principles_4.php\">Leave What You Find</a></li><li><a href=\"http://www.lnt.org/programs/principles_5.php\">Minimize Campfire Impacts</a></li><li><a href=\"http://www.lnt.org/programs/principles_6.php\">Respect Wildlife</a></li><li><a href=\"http://www.lnt.org/programs/principles_7.php\">Be Considerate of Other Visitors</a></li></ol><p><b>Regulations:</b><br>Motorized equipment and equipment used for mechanical transport are generally prohibited on all federal lands designated as wilderness. This includes the use of motor vehicles (including OHVs), motorboats, motorized equipment, bicycles, hang gliders, wagons, carts, portage wheels, and the landing of aircraft including helicopters, unless provided for in specific legislation. In a few areas some exceptions allowing the use of motorized equipment or mechanical transport are described in the special regulations in effect for a specific area. Contact the agency for more information about regulations.<p><b>Contact Information:</b><blockquote><p>CARLSBAD CAVERNS NATIONAL PARK<br>3225 National Parks Highway<br>Carlsbad, NM 88220<br>Phone: 575-785-2232<br>Fax: 575-785-2302<br>Email: <a href=mailto:\"CAVE_Park_Information@nps.gov\">CAVE_Park_Information@nps.gov</a></blockquote>",
      "RecAreaMapURL": "http://www.wilderness.net/index.cfm?fuse=NWPS&latitude=32.1300978419&longitude=-104.575788307&zoom=12",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Carlsbad Caverns National Park is in southeastern New Mexico, about 150 miles east of El Paso, Texas. Wilderness makes up much of the park (71 percent), excluding the eastern end, the mouth of Slaughter Canyon, and the area northwest of the Guadalupe Ridge Trail. The visitor center is reached via the 7-mile entrance road west of Whites City off U.S. Hwy. 62/180. Near the park visitor center, the Desert Scenic Loop Drive (9 miles of graded gravel) provides access to wilderness trails in Rattlesnake Canyon and Juniper Ridge, as well as to the Guadalupe Ridge Trail. The Slaughter Canyon and Yucca Mesa trails are accessed via roads south of the park. The remote and faint Ussery Trail in the southwest corner of the park is best accessed from the west through the Lincoln National Forest.",
      "Keywords": "",
      "RecAreaName": "Carlsbad Caverns Wilderness"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2013-04-10",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 12851,
      "RecAreaPhone": "",
      "RecAreaDescription": "<br>The Chiricahua National Monument Wilderness now contains a total of 10,290 acres and is managed by the National Park Service. All of the Wilderness is in the state of Arizona. In 1976 the Chiricahua National Monument Wilderness became part of the now over 109 million acre National Wilderness Preservation System. In wilderness, you can enjoy challenging recreational activities and extraordinary opportunities for solitude. In an age of <em>&quot;...increasing population, accompanied by expanding settlement and growing mechanization,...&quot;</em> you play an important role in helping to <em>&quot;...secure for the American people of present and future generations the benefits of an enduring resource of wilderness&quot;</em> as called for by Congress in the <a href=\"http://www.wilderness.net/index.cfm?fuse=NWPS&amp;sec=legisact\">Wilderness Act of 1964</a>. Please follow the regulations in place for this area, and use Leave No Trace techniques when visiting to ensure protection of its unique natural and experiential qualities.<p>How to follow the seven standard Leave No Trace principles differs in different parts of the country (desert vs. Rocky Mountains). Click on any of the principles listed below to learn more about how they apply.<p><b>Leave No Trace principles:</b><ol><li><a href=\"http://www.lnt.org/programs/principles_1.php\">Plan Ahead and Prepare</a></li><li><a href=\"http://www.lnt.org/programs/principles_2.php\">Travel and Camp on Durable Surfaces</a></li><li><a href=\"http://www.lnt.org/programs/principles_3.php\">Dispose of Waste Properly</a></li><li><a href=\"http://www.lnt.org/programs/principles_4.php\">Leave What You Find</a></li><li><a href=\"http://www.lnt.org/programs/principles_5.php\">Minimize Campfire Impacts</a></li><li><a href=\"http://www.lnt.org/programs/principles_6.php\">Respect Wildlife</a></li><li><a href=\"http://www.lnt.org/programs/principles_7.php\">Be Considerate of Other Visitors</a></li></ol><p><b>Regulations:</b><br>Motorized equipment and equipment used for mechanical transport are generally prohibited on all federal lands designated as wilderness. This includes the use of motor vehicles (including OHVs), motorboats, motorized equipment, bicycles, hang gliders, wagons, carts, portage wheels, and the landing of aircraft including helicopters, unless provided for in specific legislation. In a few areas some exceptions allowing the use of motorized equipment or mechanical transport are described in the special regulations in effect for a specific area. Contact the agency for more information about regulations.<p><b>Contact Information:</b><blockquote><p>CHIRICAHUA NATIONAL MONUMENT<br>12856 E. Rhyolite Creek Rd.<br>Willcox, AZ 85643-9737<br>Phone: 520-824-3560<br>Fax: 520-824-3421<br>Visitor Center hours 8:00 am-4:30 pm daily.</blockquote>",
      "RecAreaMapURL": "http://www.wilderness.net/index.cfm?fuse=NWPS&latitude=32.0126549273&longitude=-109.34288515&zoom=12",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Chiricahua National Monument is located 4 miles east of the junction of Arizona Highways 186 and 181. It is 37 miles southeast of Willcox, 120 miles southeast of Tucson, and 70 miles north of Douglas.",
      "Keywords": "",
      "RecAreaName": "Chiricahua National Monument Wilderness"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2013-04-10",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 12852,
      "RecAreaPhone": "",
      "RecAreaDescription": "<br>The Congaree National Park Wilderness now contains a total of 15,010 acres and is managed by the National Park Service. All of the Wilderness is in the state of South Carolina. In 1988 the Congaree National Park Wilderness became part of the now over 109 million acre National Wilderness Preservation System. In wilderness, you can enjoy challenging recreational activities and extraordinary opportunities for solitude. In an age of <em>&quot;...increasing population, accompanied by expanding settlement and growing mechanization,...&quot;</em> you play an important role in helping to <em>&quot;...secure for the American people of present and future generations the benefits of an enduring resource of wilderness&quot;</em> as called for by Congress in the <a href=\"http://www.wilderness.net/index.cfm?fuse=NWPS&amp;sec=legisact\">Wilderness Act of 1964</a>. Please follow the regulations in place for this area, and use Leave No Trace techniques when visiting to ensure protection of its unique natural and experiential qualities.<p>How to follow the seven standard Leave No Trace principles differs in different parts of the country (desert vs. Rocky Mountains). Click on any of the principles listed below to learn more about how they apply.<p><b>Leave No Trace principles:</b><ol><li><a href=\"http://www.lnt.org/programs/principles_1.php\">Plan Ahead and Prepare</a></li><li><a href=\"http://www.lnt.org/programs/principles_2.php\">Travel and Camp on Durable Surfaces</a></li><li><a href=\"http://www.lnt.org/programs/principles_3.php\">Dispose of Waste Properly</a></li><li><a href=\"http://www.lnt.org/programs/principles_4.php\">Leave What You Find</a></li><li><a href=\"http://www.lnt.org/programs/principles_5.php\">Minimize Campfire Impacts</a></li><li><a href=\"http://www.lnt.org/programs/principles_6.php\">Respect Wildlife</a></li><li><a href=\"http://www.lnt.org/programs/principles_7.php\">Be Considerate of Other Visitors</a></li></ol><p><b>Regulations:</b><br>Motorized equipment and equipment used for mechanical transport are generally prohibited on all federal lands designated as wilderness. This includes the use of motor vehicles (including OHVs), motorboats, motorized equipment, bicycles, hang gliders, wagons, carts, portage wheels, and the landing of aircraft including helicopters, unless provided for in specific legislation. In a few areas some exceptions allowing the use of motorized equipment or mechanical transport are described in the special regulations in effect for a specific area. Contact the agency for more information about regulations.<p><b>Contact Information:</b><blockquote><p>CONGAREE NATIONAL PARK<br>100 National Park Road<br>Hopkins, SC 29061-8320<br>Phone: 803-776-4396<br>Fax: 803-783-4241<br>Office Hours: 8:30am- 5:00pm </blockquote>",
      "RecAreaMapURL": "http://www.wilderness.net/index.cfm?fuse=NWPS&latitude=33.7997921949&longitude=-80.7884574576&zoom=12",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Congaree National Park is located about 20 miles from downtown Columbia, South Carolina in the Hopkins / Gadsden community. Directions to the park along with area maps can be viewed and downloaded from the park website under \"PLAN YOUR VISIT\"   http://www.nps.gov/cong <br><br>",
      "Keywords": "",
      "RecAreaName": "Congaree National Park Wilderness"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2013-04-10",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 12854,
      "RecAreaPhone": "",
      "RecAreaDescription": "<br>The Cumberland Island Wilderness now contains a total of 9,886 acres and is managed by the National Park Service. All of the Wilderness is in the state of Georgia. In 1982 the Cumberland Island Wilderness became part of the now over 109 million acre National Wilderness Preservation System. In wilderness, you can enjoy challenging recreational activities and extraordinary opportunities for solitude. In an age of <em>&quot;...increasing population, accompanied by expanding settlement and growing mechanization,...&quot;</em> you play an important role in helping to <em>&quot;...secure for the American people of present and future generations the benefits of an enduring resource of wilderness&quot;</em> as called for by Congress in the <a href=\"http://www.wilderness.net/index.cfm?fuse=NWPS&amp;sec=legisact\">Wilderness Act of 1964</a>. Please follow the regulations in place for this area, and use Leave No Trace techniques when visiting to ensure protection of its unique natural and experiential qualities.<p>How to follow the seven standard Leave No Trace principles differs in different parts of the country (desert vs. Rocky Mountains). Click on any of the principles listed below to learn more about how they apply.<p><b>Leave No Trace principles:</b><ol><li><a href=\"http://www.lnt.org/programs/principles_1.php\">Plan Ahead and Prepare</a></li><li><a href=\"http://www.lnt.org/programs/principles_2.php\">Travel and Camp on Durable Surfaces</a></li><li><a href=\"http://www.lnt.org/programs/principles_3.php\">Dispose of Waste Properly</a></li><li><a href=\"http://www.lnt.org/programs/principles_4.php\">Leave What You Find</a></li><li><a href=\"http://www.lnt.org/programs/principles_5.php\">Minimize Campfire Impacts</a></li><li><a href=\"http://www.lnt.org/programs/principles_6.php\">Respect Wildlife</a></li><li><a href=\"http://www.lnt.org/programs/principles_7.php\">Be Considerate of Other Visitors</a></li></ol><p><b>Regulations:</b><br>Motorized equipment and equipment used for mechanical transport are generally prohibited on all federal lands designated as wilderness. This includes the use of motor vehicles (including OHVs), motorboats, motorized equipment, bicycles, hang gliders, wagons, carts, portage wheels, and the landing of aircraft including helicopters, unless provided for in specific legislation. In a few areas some exceptions allowing the use of motorized equipment or mechanical transport are described in the special regulations in effect for a specific area. Contact the agency for more information about regulations.<p><b>Contact Information:</b><blockquote><p>CUMBERLAND ISLAND NATIONAL SEASHORE<br>P.O. Box 806<br>Saint Marys, GA 31558<br>Phone: 912-882-4336 x254<br>Fax: 912-882-5688<br>Reservations made by phone or fax only. Call 877-860-6787 or fax 912-673-7747 (10am-4pm M-F).</blockquote>",
      "RecAreaMapURL": "http://www.wilderness.net/index.cfm?fuse=NWPS&latitude=30.8677891841&longitude=-81.4406231029&zoom=12",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Cumberland Island Wilderness"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2013-04-10",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 12855,
      "RecAreaPhone": "",
      "RecAreaDescription": "<br>The Death Valley Wilderness now contains a total of 3,099,770 acres and is managed by the National Park Service. California contains approximately 3,055,413 acres. Nevada contains approximately 44,357 acres. In 1994 the Death Valley Wilderness became part of the now over 109 million acre National Wilderness Preservation System. In wilderness, you can enjoy challenging recreational activities and extraordinary opportunities for solitude. In an age of <em>&quot;...increasing population, accompanied by expanding settlement and growing mechanization,...&quot;</em> you play an important role in helping to <em>&quot;...secure for the American people of present and future generations the benefits of an enduring resource of wilderness&quot;</em> as called for by Congress in the <a href=\"http://www.wilderness.net/index.cfm?fuse=NWPS&amp;sec=legisact\">Wilderness Act of 1964</a>. Please follow the regulations in place for this area, and use Leave No Trace techniques when visiting to ensure protection of its unique natural and experiential qualities.<p>How to follow the seven standard Leave No Trace principles differs in different parts of the country (desert vs. Rocky Mountains). Click on any of the principles listed below to learn more about how they apply.<p><b>Leave No Trace principles:</b><ol><li><a href=\"http://www.lnt.org/programs/principles_1.php\">Plan Ahead and Prepare</a></li><li><a href=\"http://www.lnt.org/programs/principles_2.php\">Travel and Camp on Durable Surfaces</a></li><li><a href=\"http://www.lnt.org/programs/principles_3.php\">Dispose of Waste Properly</a></li><li><a href=\"http://www.lnt.org/programs/principles_4.php\">Leave What You Find</a></li><li><a href=\"http://www.lnt.org/programs/principles_5.php\">Minimize Campfire Impacts</a></li><li><a href=\"http://www.lnt.org/programs/principles_6.php\">Respect Wildlife</a></li><li><a href=\"http://www.lnt.org/programs/principles_7.php\">Be Considerate of Other Visitors</a></li></ol><p><b>Regulations:</b><br>Motorized equipment and equipment used for mechanical transport are generally prohibited on all federal lands designated as wilderness. This includes the use of motor vehicles (including OHVs), motorboats, motorized equipment, bicycles, hang gliders, wagons, carts, portage wheels, and the landing of aircraft including helicopters, unless provided for in specific legislation. In a few areas some exceptions allowing the use of motorized equipment or mechanical transport are described in the special regulations in effect for a specific area. Contact the agency for more information about regulations.",
      "RecAreaMapURL": "http://www.wilderness.net/index.cfm?fuse=NWPS&latitude=36.4801931274&longitude=-117.138292835&zoom=8",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Death Valley Wilderness"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2013-04-10",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 12856,
      "RecAreaPhone": "",
      "RecAreaDescription": "<br>The Denali Wilderness now contains a total of 2,124,783 acres and is managed by the National Park Service. All of the Wilderness is in the state of Alaska. In 1980 the Denali Wilderness became part of the now over 109 million acre National Wilderness Preservation System. In wilderness, you can enjoy challenging recreational activities and extraordinary opportunities for solitude. In an age of <em>&quot;...increasing population, accompanied by expanding settlement and growing mechanization,...&quot;</em> you play an important role in helping to <em>&quot;...secure for the American people of present and future generations the benefits of an enduring resource of wilderness&quot;</em> as called for by Congress in the <a href=\"http://www.wilderness.net/index.cfm?fuse=NWPS&amp;sec=legisact\">Wilderness Act of 1964</a>. Please follow the regulations in place for this area, and use Leave No Trace techniques when visiting to ensure protection of its unique natural and experiential qualities.<p>How to follow the seven standard Leave No Trace principles differs in different parts of the country (desert vs. Rocky Mountains). Click on any of the principles listed below to learn more about how they apply.<p><b>Leave No Trace principles:</b><ol><li><a href=\"http://www.lnt.org/programs/principles_1.php\">Plan Ahead and Prepare</a></li><li><a href=\"http://www.lnt.org/programs/principles_2.php\">Travel and Camp on Durable Surfaces</a></li><li><a href=\"http://www.lnt.org/programs/principles_3.php\">Dispose of Waste Properly</a></li><li><a href=\"http://www.lnt.org/programs/principles_4.php\">Leave What You Find</a></li><li><a href=\"http://www.lnt.org/programs/principles_5.php\">Minimize Campfire Impacts</a></li><li><a href=\"http://www.lnt.org/programs/principles_6.php\">Respect Wildlife</a></li><li><a href=\"http://www.lnt.org/programs/principles_7.php\">Be Considerate of Other Visitors</a></li></ol><p><b>Regulations:</b><br>Motorized equipment and equipment used for mechanical transport are generally prohibited on all federal lands designated as wilderness. This includes the use of motor vehicles (including OHVs), motorboats, motorized equipment, bicycles, hang gliders, wagons, carts, portage wheels, and the landing of aircraft including helicopters, unless provided for in specific legislation. In a few areas some exceptions allowing the use of motorized equipment or mechanical transport are described in the special regulations in effect for a specific area. Contact the agency for more information about regulations.<p><b>Contact Information:</b><blockquote><p>DENALI NATIONAL PARK<br>P.O. Box 9<br>Denali Park, AK 99755-0009<br>Phone: 907-683-2294<br>Fax: 907-683-9617<br>Teletype for the Deaf/Hearing Impared (TTY) 907-683-9649.</blockquote>",
      "RecAreaMapURL": "http://www.wilderness.net/index.cfm?fuse=NWPS&latitude=63.3591724074&longitude=-150.487705565&zoom=8",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Denali Wilderness"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -114.802276,
          35.76616
        ]
      },
      "LastUpdatedDate": "2013-04-10",
      "RecAreaEmail": "lvfoweb@blm.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -114.802276,
      "RecAreaID": 12857,
      "RecAreaPhone": "702-515-5000",
      "RecAreaDescription": "<br>The Eldorado Wilderness now contains a total of 31,950 acres and is managed by the Bureau of Land Management and the National Park Service. All of the Wilderness is in the state of Nevada. In 2002 the Eldorado Wilderness became part of the now over 109 million acre National Wilderness Preservation System. In wilderness, you can enjoy challenging recreational activities and extraordinary opportunities for solitude. In an age of <em>&quot;...increasing population, accompanied by expanding settlement and growing mechanization,...&quot;</em> you play an important role in helping to <em>&quot;...secure for the American people of present and future generations the benefits of an enduring resource of wilderness&quot;</em> as called for by Congress in the <a href=\"http://www.wilderness.net/index.cfm?fuse=NWPS&amp;sec=legisact\">Wilderness Act of 1964</a>. Please follow the regulations in place for this area, and use Leave No Trace techniques when visiting to ensure protection of its unique natural and experiential qualities.<p>How to follow the seven standard Leave No Trace principles differs in different parts of the country (desert vs. Rocky Mountains). Click on any of the principles listed below to learn more about how they apply.<p><b>Leave No Trace principles:</b><ol><li><a href=\"http://www.lnt.org/programs/principles_1.php\">Plan Ahead and Prepare</a></li><li><a href=\"http://www.lnt.org/programs/principles_2.php\">Travel and Camp on Durable Surfaces</a></li><li><a href=\"http://www.lnt.org/programs/principles_3.php\">Dispose of Waste Properly</a></li><li><a href=\"http://www.lnt.org/programs/principles_4.php\">Leave What You Find</a></li><li><a href=\"http://www.lnt.org/programs/principles_5.php\">Minimize Campfire Impacts</a></li><li><a href=\"http://www.lnt.org/programs/principles_6.php\">Respect Wildlife</a></li><li><a href=\"http://www.lnt.org/programs/principles_7.php\">Be Considerate of Other Visitors</a></li></ol><p><b>Regulations:</b><br>Motorized equipment and equipment used for mechanical transport are generally prohibited on all federal lands designated as wilderness. This includes the use of motor vehicles (including OHVs), motorboats, motorized equipment, bicycles, hang gliders, wagons, carts, portage wheels, and the landing of aircraft including helicopters, unless provided for in specific legislation. In a few areas some exceptions allowing the use of motorized equipment or mechanical transport are described in the special regulations in effect for a specific area. Contact the agency for more information about regulations.<p><b>Contact Information:</b><blockquote><p>LAS VEGAS FIELD OFFICE, DIVISION OF NLCS<br>BLM, Las Vegas Field Office<br>4701 N. Torrey Pines Dr.<br>Las Vegas, NV 89130<br>Phone: 702-515-5000<p>LAKE MEAD NATIONAL RECREATION AREA<br>601 Nevada Way<br>Boulder City, NV 89005<br>Phone: 702-293-8990<br>Fax: 702-293-8936</blockquote>",
      "RecAreaMapURL": "http://www.wilderness.net/index.cfm?fuse=NWPS&latitude=35.818376&longitude=-114.746246&zoom=12",
      "RecAreaLatitude": 35.76616,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "\r\n\r\n\r\n\r\n\r\n\r\n\r\n",
      "Keywords": "",
      "RecAreaName": "Eldorado Wilderness"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2013-04-10",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 12858,
      "RecAreaPhone": "",
      "RecAreaDescription": "<br>The Gates of the Arctic Wilderness now contains a total of 7,167,192 acres and is managed by the National Park Service. All of the Wilderness is in the state of Alaska. In 1980 the Gates of the Arctic Wilderness became part of the now over 109 million acre National Wilderness Preservation System. In wilderness, you can enjoy challenging recreational activities and extraordinary opportunities for solitude. In an age of <em>&quot;...increasing population, accompanied by expanding settlement and growing mechanization,...&quot;</em> you play an important role in helping to <em>&quot;...secure for the American people of present and future generations the benefits of an enduring resource of wilderness&quot;</em> as called for by Congress in the <a href=\"http://www.wilderness.net/index.cfm?fuse=NWPS&amp;sec=legisact\">Wilderness Act of 1964</a>. Please follow the regulations in place for this area, and use Leave No Trace techniques when visiting to ensure protection of its unique natural and experiential qualities.<p>How to follow the seven standard Leave No Trace principles differs in different parts of the country (desert vs. Rocky Mountains). Click on any of the principles listed below to learn more about how they apply.<p><b>Leave No Trace principles:</b><ol><li><a href=\"http://www.lnt.org/programs/principles_1.php\">Plan Ahead and Prepare</a></li><li><a href=\"http://www.lnt.org/programs/principles_2.php\">Travel and Camp on Durable Surfaces</a></li><li><a href=\"http://www.lnt.org/programs/principles_3.php\">Dispose of Waste Properly</a></li><li><a href=\"http://www.lnt.org/programs/principles_4.php\">Leave What You Find</a></li><li><a href=\"http://www.lnt.org/programs/principles_5.php\">Minimize Campfire Impacts</a></li><li><a href=\"http://www.lnt.org/programs/principles_6.php\">Respect Wildlife</a></li><li><a href=\"http://www.lnt.org/programs/principles_7.php\">Be Considerate of Other Visitors</a></li></ol><p><b>Regulations:</b><br>Motorized equipment and equipment used for mechanical transport are generally prohibited on all federal lands designated as wilderness. This includes the use of motor vehicles (including OHVs), motorboats, motorized equipment, bicycles, hang gliders, wagons, carts, portage wheels, and the landing of aircraft including helicopters, unless provided for in specific legislation. In a few areas some exceptions allowing the use of motorized equipment or mechanical transport are described in the special regulations in effect for a specific area. Contact the agency for more information about regulations.<p><b>Contact Information:</b><blockquote><p>NATIONAL PARK SERVICE (FAIRBANKS HEADQUARTERS)<br>4175 Geist Rd<br>Fairbanks, AK 99701<br>Phone: 907-457-5752<br>Fax: 907-692-5400<br>AKP: 907-661-3520, CXF: 907-678-5209, MAR: 907-678-2004.<p>BETTLES RANGER STATION<br>P.O. Box 26030<br>Bettles, AK 99726<br>Phone: 907-692-5494<br>Fax: 907-692-5400<p>COLDFOOT RANGER STATION<br>P.O. Box 9072<br>Coldfoot, AK 99701<br>Phone: 907-678-2004<br>Fax: 907-678-2004<p>ANAKTUVUK PASS RANGER STATION<br>National Park Service<br>Anaktuvuk Pass, AK 99721<br>Phone: 907-661-3520<br>Fax: 907-661-3521</blockquote>",
      "RecAreaMapURL": "http://www.wilderness.net/index.cfm?fuse=NWPS&latitude=67.7837831935&longitude=-153.36238873&zoom=7",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>The park lies entirely north of the Arctic Circle beginning at approximately 67 degrees north latitude.  It straddles the central Brooks Range on both the north and south sides. The park is bordered on the east by the Trans-Alaska Pipeline, Dalton Highway and the Arctic National Wildlife Refuge.  On the west the park is bordered by the Noatak National Preserve and Kobuk Valley National Park.  To the south the park is bordered by Kanuti National Wildlife Refuge.  To the north the park is bordered by the National Petroleum Reserve-Alaska.  The only road accessible visitor center is located in Coldfoot, AK.  From this location information can be found on where to access the park from the road.  Visitor Centers are also located in Bettles and Anaktuvuk Pass, communities that are accessed by aircraft only.  There are no trailheads into the Gates Wilderness.  When you leave the road or aircraft behind you make your own decisions regarding navigation and pathfinding.",
      "Keywords": "",
      "RecAreaName": "Gates of the Arctic Wilderness"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2013-04-10",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 12859,
      "RecAreaPhone": "",
      "RecAreaDescription": "<br>The Gaylord Nelson Wilderness now contains a total of 33,500 acres and is managed by the National Park Service. All of the Wilderness is in the state of Wisconsin. In 2004 the Gaylord Nelson Wilderness became part of the now over 109 million acre National Wilderness Preservation System. In wilderness, you can enjoy challenging recreational activities and extraordinary opportunities for solitude. In an age of <em>&quot;...increasing population, accompanied by expanding settlement and growing mechanization,...&quot;</em> you play an important role in helping to <em>&quot;...secure for the American people of present and future generations the benefits of an enduring resource of wilderness&quot;</em> as called for by Congress in the <a href=\"http://www.wilderness.net/index.cfm?fuse=NWPS&amp;sec=legisact\">Wilderness Act of 1964</a>. Please follow the regulations in place for this area, and use Leave No Trace techniques when visiting to ensure protection of its unique natural and experiential qualities.<p>How to follow the seven standard Leave No Trace principles differs in different parts of the country (desert vs. Rocky Mountains). Click on any of the principles listed below to learn more about how they apply.<p><b>Leave No Trace principles:</b><ol><li><a href=\"http://www.lnt.org/programs/principles_1.php\">Plan Ahead and Prepare</a></li><li><a href=\"http://www.lnt.org/programs/principles_2.php\">Travel and Camp on Durable Surfaces</a></li><li><a href=\"http://www.lnt.org/programs/principles_3.php\">Dispose of Waste Properly</a></li><li><a href=\"http://www.lnt.org/programs/principles_4.php\">Leave What You Find</a></li><li><a href=\"http://www.lnt.org/programs/principles_5.php\">Minimize Campfire Impacts</a></li><li><a href=\"http://www.lnt.org/programs/principles_6.php\">Respect Wildlife</a></li><li><a href=\"http://www.lnt.org/programs/principles_7.php\">Be Considerate of Other Visitors</a></li></ol><p><b>Regulations:</b><br>Motorized equipment and equipment used for mechanical transport are generally prohibited on all federal lands designated as wilderness. This includes the use of motor vehicles (including OHVs), motorboats, motorized equipment, bicycles, hang gliders, wagons, carts, portage wheels, and the landing of aircraft including helicopters, unless provided for in specific legislation. In a few areas some exceptions allowing the use of motorized equipment or mechanical transport are described in the special regulations in effect for a specific area. Contact the agency for more information about regulations.<p><b>Contact Information:</b><blockquote><p>APOSTLE ISLANDS NATIONAL LAKESHORE<br>415 Washington Avenue<br>Bayfield, WI 54814<br>Phone: 715-779-3397<p>CHIEF OF PLANNING & RESOURCE MANAGEMENT: Jim Nepstad<br>Apostle Islands National Lakeshore<br>415 Washington Avenue<br>Bayfield, WI 54814<br>Phone: 715-779-3398 x102<br>Fax: 715-779-3049<br>Email: <a href=mailto:\"jim_nepstad@nps.gov\">jim_nepstad@nps.gov</a><br>Office hours:\n7:30am-4:00pm Monday-Friday</blockquote>",
      "RecAreaMapURL": "http://www.wilderness.net/index.cfm?fuse=NWPS&latitude=46.9764578984&longitude=-90.5926524182&zoom=12",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>The Gaylord Nelson Wilderness is located within northern Wisconsin's Apostle Islands National Lakeshore, in Bayfield and Ashland counties. The main gateway community near the wilderness is Bayfield, Wisconsin, but it is also accessible from nearby Red Cliff, Cornucopia, Washburn, and Ashland.",
      "Keywords": "",
      "RecAreaName": "Gaylord Nelson Wilderness"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2013-04-10",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 12860,
      "RecAreaPhone": "",
      "RecAreaDescription": "<br>The Glacier Bay Wilderness now contains a total of 2,664,876 acres and is managed by the National Park Service. All of the Wilderness is in the state of Alaska. In 1980 the Glacier Bay Wilderness became part of the now over 109 million acre National Wilderness Preservation System. In wilderness, you can enjoy challenging recreational activities and extraordinary opportunities for solitude. In an age of <em>&quot;...increasing population, accompanied by expanding settlement and growing mechanization,...&quot;</em> you play an important role in helping to <em>&quot;...secure for the American people of present and future generations the benefits of an enduring resource of wilderness&quot;</em> as called for by Congress in the <a href=\"http://www.wilderness.net/index.cfm?fuse=NWPS&amp;sec=legisact\">Wilderness Act of 1964</a>. Please follow the regulations in place for this area, and use Leave No Trace techniques when visiting to ensure protection of its unique natural and experiential qualities.<p>How to follow the seven standard Leave No Trace principles differs in different parts of the country (desert vs. Rocky Mountains). Click on any of the principles listed below to learn more about how they apply.<p><b>Leave No Trace principles:</b><ol><li><a href=\"http://www.lnt.org/programs/principles_1.php\">Plan Ahead and Prepare</a></li><li><a href=\"http://www.lnt.org/programs/principles_2.php\">Travel and Camp on Durable Surfaces</a></li><li><a href=\"http://www.lnt.org/programs/principles_3.php\">Dispose of Waste Properly</a></li><li><a href=\"http://www.lnt.org/programs/principles_4.php\">Leave What You Find</a></li><li><a href=\"http://www.lnt.org/programs/principles_5.php\">Minimize Campfire Impacts</a></li><li><a href=\"http://www.lnt.org/programs/principles_6.php\">Respect Wildlife</a></li><li><a href=\"http://www.lnt.org/programs/principles_7.php\">Be Considerate of Other Visitors</a></li></ol><p><b>Regulations:</b><br>Motorized equipment and equipment used for mechanical transport are generally prohibited on all federal lands designated as wilderness. This includes the use of motor vehicles (including OHVs), motorboats, motorized equipment, bicycles, hang gliders, wagons, carts, portage wheels, and the landing of aircraft including helicopters, unless provided for in specific legislation. In a few areas some exceptions allowing the use of motorized equipment or mechanical transport are described in the special regulations in effect for a specific area. Contact the agency for more information about regulations.<p><b>Contact Information:</b><blockquote><p>GLACIER BAY NATIONAL PARK AND PRESERVE<br>P.O. Box 140<br>Gustavus, AK 99826-0140<br>Phone: 907-697-2230<br>Fax: 907-697-2654<br>Yakutat Ranger District: 907-784-3295, After-hours emergency: 907-697-2651, Alsek River Hotline: 907-784-3370, Recreational Boater Information: 907-697-2627.</blockquote>",
      "RecAreaMapURL": "http://www.wilderness.net/index.cfm?fuse=NWPS&latitude=58.8335935698&longitude=-136.844692448&zoom=8",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Glacier Bay National Park and Preserve is located in the \"panhandle\" of southeast Alaska. The center of the park is approximately 90 miles northwest of Juneau, the state capitol, and 600 miles southwest of Anchorage, the state's largest city. Park headquarters and visitor facilities are located at Bartlett Cove approximately 9 miles from the small village of Gustavus. There is no road access to the park from other areas of the US or Canada, so visitors either fly into Gustavus or reach Glacier Bay by cruise ship, commercial tour, charter or private vessel. All visitor information and facilities are located in Bartlett Cove. The park also maintains a ranger station in Yakutat, Alaska along with Wrangell-St. Elias National Park and Preserve. Whitewater rafting information (reservations, trip planning, permits, etc) for the Alsek River is available at the Yakutat office.",
      "Keywords": "",
      "RecAreaName": "Glacier Bay Wilderness"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2013-04-10",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 12861,
      "RecAreaPhone": "",
      "RecAreaDescription": "<br>The Great Sand Dunes Wilderness now contains a total of 33,549 acres and is managed by the National Park Service. All of the Wilderness is in the state of Colorado. In 1976 the Great Sand Dunes Wilderness became part of the now over 109 million acre National Wilderness Preservation System. In wilderness, you can enjoy challenging recreational activities and extraordinary opportunities for solitude. In an age of <em>&quot;...increasing population, accompanied by expanding settlement and growing mechanization,...&quot;</em> you play an important role in helping to <em>&quot;...secure for the American people of present and future generations the benefits of an enduring resource of wilderness&quot;</em> as called for by Congress in the <a href=\"http://www.wilderness.net/index.cfm?fuse=NWPS&amp;sec=legisact\">Wilderness Act of 1964</a>. Please follow the regulations in place for this area, and use Leave No Trace techniques when visiting to ensure protection of its unique natural and experiential qualities.<p>How to follow the seven standard Leave No Trace principles differs in different parts of the country (desert vs. Rocky Mountains). Click on any of the principles listed below to learn more about how they apply.<p><b>Leave No Trace principles:</b><ol><li><a href=\"http://www.lnt.org/programs/principles_1.php\">Plan Ahead and Prepare</a></li><li><a href=\"http://www.lnt.org/programs/principles_2.php\">Travel and Camp on Durable Surfaces</a></li><li><a href=\"http://www.lnt.org/programs/principles_3.php\">Dispose of Waste Properly</a></li><li><a href=\"http://www.lnt.org/programs/principles_4.php\">Leave What You Find</a></li><li><a href=\"http://www.lnt.org/programs/principles_5.php\">Minimize Campfire Impacts</a></li><li><a href=\"http://www.lnt.org/programs/principles_6.php\">Respect Wildlife</a></li><li><a href=\"http://www.lnt.org/programs/principles_7.php\">Be Considerate of Other Visitors</a></li></ol><p><b>Regulations:</b><br>Motorized equipment and equipment used for mechanical transport are generally prohibited on all federal lands designated as wilderness. This includes the use of motor vehicles (including OHVs), motorboats, motorized equipment, bicycles, hang gliders, wagons, carts, portage wheels, and the landing of aircraft including helicopters, unless provided for in specific legislation. In a few areas some exceptions allowing the use of motorized equipment or mechanical transport are described in the special regulations in effect for a specific area. Contact the agency for more information about regulations.<p><b>Contact Information:</b><blockquote><p>GREAT SAND DUNES NATIONAL PARK AND PRESERVE<br>Visitor Center<br>11999 Highway 150<br>Mosca, CO 81146<br>Phone: 719-378-6399<br>Fax: 719-378-6310<br>Email: <a href=mailto:\"grsa_interpretation@nps.gov\">grsa_interpretation@nps.gov</a></blockquote>",
      "RecAreaMapURL": "http://www.wilderness.net/index.cfm?fuse=NWPS&latitude=37.767559074&longitude=-105.5674885&zoom=12",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>The wilderness area is entirely within Great Sand Dunes National Park located in the San Luis Valley of south-central Colorado.  The nearest city is Alamosa (pop. 7,500) located about 35 miles to the southwest.  From Alamosa take U.S. Highway 160 east about 16 miles and turn left onto Colorado Highway 150.  From there it's 19 miles north to the Great Sand Dunes Visitor Center.",
      "Keywords": "",
      "RecAreaName": "Great Sand Dunes Wilderness"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2013-04-10",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 12862,
      "RecAreaPhone": "",
      "RecAreaDescription": "<br>The Guadalupe Mountains Wilderness now contains a total of 46,850 acres and is managed by the National Park Service. All of the Wilderness is in the state of Texas. In 1978 the Guadalupe Mountains Wilderness became part of the now over 109 million acre National Wilderness Preservation System. In wilderness, you can enjoy challenging recreational activities and extraordinary opportunities for solitude. In an age of <em>&quot;...increasing population, accompanied by expanding settlement and growing mechanization,...&quot;</em> you play an important role in helping to <em>&quot;...secure for the American people of present and future generations the benefits of an enduring resource of wilderness&quot;</em> as called for by Congress in the <a href=\"http://www.wilderness.net/index.cfm?fuse=NWPS&amp;sec=legisact\">Wilderness Act of 1964</a>. Please follow the regulations in place for this area, and use Leave No Trace techniques when visiting to ensure protection of its unique natural and experiential qualities.<p>How to follow the seven standard Leave No Trace principles differs in different parts of the country (desert vs. Rocky Mountains). Click on any of the principles listed below to learn more about how they apply.<p><b>Leave No Trace principles:</b><ol><li><a href=\"http://www.lnt.org/programs/principles_1.php\">Plan Ahead and Prepare</a></li><li><a href=\"http://www.lnt.org/programs/principles_2.php\">Travel and Camp on Durable Surfaces</a></li><li><a href=\"http://www.lnt.org/programs/principles_3.php\">Dispose of Waste Properly</a></li><li><a href=\"http://www.lnt.org/programs/principles_4.php\">Leave What You Find</a></li><li><a href=\"http://www.lnt.org/programs/principles_5.php\">Minimize Campfire Impacts</a></li><li><a href=\"http://www.lnt.org/programs/principles_6.php\">Respect Wildlife</a></li><li><a href=\"http://www.lnt.org/programs/principles_7.php\">Be Considerate of Other Visitors</a></li></ol><p><b>Regulations:</b><br>Motorized equipment and equipment used for mechanical transport are generally prohibited on all federal lands designated as wilderness. This includes the use of motor vehicles (including OHVs), motorboats, motorized equipment, bicycles, hang gliders, wagons, carts, portage wheels, and the landing of aircraft including helicopters, unless provided for in specific legislation. In a few areas some exceptions allowing the use of motorized equipment or mechanical transport are described in the special regulations in effect for a specific area. Contact the agency for more information about regulations.<p><b>Contact Information:</b><blockquote><p>GUADALUPE MOUNTAINS NATIONAL PARK<br>HC 60 Box 400<br>Salt Flat, TX 79847-9400<br>Phone: 915-828-3251<br>Fax: 915-828-3269</blockquote>",
      "RecAreaMapURL": "http://www.wilderness.net/index.cfm?fuse=NWPS&latitude=31.9518016857&longitude=-104.848049008&zoom=11",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Guadalupe Mountains Wilderness"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2013-04-10",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 12863,
      "RecAreaPhone": "",
      "RecAreaDescription": "<br>The Gulf Islands Wilderness now contains a total of 4,080 acres and is managed by the National Park Service. All of the Wilderness is in the state of Mississippi. In 1978 the Gulf Islands Wilderness became part of the now over 109 million acre National Wilderness Preservation System. In wilderness, you can enjoy challenging recreational activities and extraordinary opportunities for solitude. In an age of <em>&quot;...increasing population, accompanied by expanding settlement and growing mechanization,...&quot;</em> you play an important role in helping to <em>&quot;...secure for the American people of present and future generations the benefits of an enduring resource of wilderness&quot;</em> as called for by Congress in the <a href=\"http://www.wilderness.net/index.cfm?fuse=NWPS&amp;sec=legisact\">Wilderness Act of 1964</a>. Please follow the regulations in place for this area, and use Leave No Trace techniques when visiting to ensure protection of its unique natural and experiential qualities.<p>How to follow the seven standard Leave No Trace principles differs in different parts of the country (desert vs. Rocky Mountains). Click on any of the principles listed below to learn more about how they apply.<p><b>Leave No Trace principles:</b><ol><li><a href=\"http://www.lnt.org/programs/principles_1.php\">Plan Ahead and Prepare</a></li><li><a href=\"http://www.lnt.org/programs/principles_2.php\">Travel and Camp on Durable Surfaces</a></li><li><a href=\"http://www.lnt.org/programs/principles_3.php\">Dispose of Waste Properly</a></li><li><a href=\"http://www.lnt.org/programs/principles_4.php\">Leave What You Find</a></li><li><a href=\"http://www.lnt.org/programs/principles_5.php\">Minimize Campfire Impacts</a></li><li><a href=\"http://www.lnt.org/programs/principles_6.php\">Respect Wildlife</a></li><li><a href=\"http://www.lnt.org/programs/principles_7.php\">Be Considerate of Other Visitors</a></li></ol><p><b>Regulations:</b><br>Motorized equipment and equipment used for mechanical transport are generally prohibited on all federal lands designated as wilderness. This includes the use of motor vehicles (including OHVs), motorboats, motorized equipment, bicycles, hang gliders, wagons, carts, portage wheels, and the landing of aircraft including helicopters, unless provided for in specific legislation. In a few areas some exceptions allowing the use of motorized equipment or mechanical transport are described in the special regulations in effect for a specific area. Contact the agency for more information about regulations.<p><b>Contact Information:</b><blockquote><p>MISSISSIPPI HEADQUARTERS<br>3500 Park Road<br>Ocean Springs, MS 39564-9709<br>Phone: 228-875-9057<br>Fax: 850-934-0116</blockquote>",
      "RecAreaMapURL": "http://www.wilderness.net/index.cfm?fuse=NWPS&latitude=30.2249133203&longitude=-88.5880323891&zoom=13",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Gulf Islands Wilderness"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2013-04-10",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 12864,
      "RecAreaPhone": "",
      "RecAreaDescription": "<br>The Haleakala Wilderness now contains a total of 24,719 acres and is managed by the National Park Service. All of the Wilderness is in the state of Hawaii. In 1976 the Haleakala Wilderness became part of the now over 109 million acre National Wilderness Preservation System. In wilderness, you can enjoy challenging recreational activities and extraordinary opportunities for solitude. In an age of <em>&quot;...increasing population, accompanied by expanding settlement and growing mechanization,...&quot;</em> you play an important role in helping to <em>&quot;...secure for the American people of present and future generations the benefits of an enduring resource of wilderness&quot;</em> as called for by Congress in the <a href=\"http://www.wilderness.net/index.cfm?fuse=NWPS&amp;sec=legisact\">Wilderness Act of 1964</a>. Please follow the regulations in place for this area, and use Leave No Trace techniques when visiting to ensure protection of its unique natural and experiential qualities.<p>How to follow the seven standard Leave No Trace principles differs in different parts of the country (desert vs. Rocky Mountains). Click on any of the principles listed below to learn more about how they apply.<p><b>Leave No Trace principles:</b><ol><li><a href=\"http://www.lnt.org/programs/principles_1.php\">Plan Ahead and Prepare</a></li><li><a href=\"http://www.lnt.org/programs/principles_2.php\">Travel and Camp on Durable Surfaces</a></li><li><a href=\"http://www.lnt.org/programs/principles_3.php\">Dispose of Waste Properly</a></li><li><a href=\"http://www.lnt.org/programs/principles_4.php\">Leave What You Find</a></li><li><a href=\"http://www.lnt.org/programs/principles_5.php\">Minimize Campfire Impacts</a></li><li><a href=\"http://www.lnt.org/programs/principles_6.php\">Respect Wildlife</a></li><li><a href=\"http://www.lnt.org/programs/principles_7.php\">Be Considerate of Other Visitors</a></li></ol><p><b>Regulations:</b><br>Motorized equipment and equipment used for mechanical transport are generally prohibited on all federal lands designated as wilderness. This includes the use of motor vehicles (including OHVs), motorboats, motorized equipment, bicycles, hang gliders, wagons, carts, portage wheels, and the landing of aircraft including helicopters, unless provided for in specific legislation. In a few areas some exceptions allowing the use of motorized equipment or mechanical transport are described in the special regulations in effect for a specific area. Contact the agency for more information about regulations.<p><b>Contact Information:</b><blockquote><p>HALEAKALA NATIONAL PARK<br>P.O. Box 369<br>Makawao, Maui, HI 96768<br>Phone: 808-572-4400<br>Fax: 808-572-4487</blockquote>",
      "RecAreaMapURL": "http://www.wilderness.net/index.cfm?fuse=NWPS&latitude=20.7155213825&longitude=-156.168773323&zoom=12",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Haleakala Wilderness"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2013-04-10",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 12865,
      "RecAreaPhone": "",
      "RecAreaDescription": "<br>The Hawaii Volcanoes Wilderness now contains a total of 130,790 acres and is managed by the National Park Service. All of the Wilderness is in the state of Hawaii. In 1978 the Hawaii Volcanoes Wilderness became part of the now over 109 million acre National Wilderness Preservation System. In wilderness, you can enjoy challenging recreational activities and extraordinary opportunities for solitude. In an age of <em>&quot;...increasing population, accompanied by expanding settlement and growing mechanization,...&quot;</em> you play an important role in helping to <em>&quot;...secure for the American people of present and future generations the benefits of an enduring resource of wilderness&quot;</em> as called for by Congress in the <a href=\"http://www.wilderness.net/index.cfm?fuse=NWPS&amp;sec=legisact\">Wilderness Act of 1964</a>. Please follow the regulations in place for this area, and use Leave No Trace techniques when visiting to ensure protection of its unique natural and experiential qualities.<p>How to follow the seven standard Leave No Trace principles differs in different parts of the country (desert vs. Rocky Mountains). Click on any of the principles listed below to learn more about how they apply.<p><b>Leave No Trace principles:</b><ol><li><a href=\"http://www.lnt.org/programs/principles_1.php\">Plan Ahead and Prepare</a></li><li><a href=\"http://www.lnt.org/programs/principles_2.php\">Travel and Camp on Durable Surfaces</a></li><li><a href=\"http://www.lnt.org/programs/principles_3.php\">Dispose of Waste Properly</a></li><li><a href=\"http://www.lnt.org/programs/principles_4.php\">Leave What You Find</a></li><li><a href=\"http://www.lnt.org/programs/principles_5.php\">Minimize Campfire Impacts</a></li><li><a href=\"http://www.lnt.org/programs/principles_6.php\">Respect Wildlife</a></li><li><a href=\"http://www.lnt.org/programs/principles_7.php\">Be Considerate of Other Visitors</a></li></ol><p><b>Regulations:</b><br>Motorized equipment and equipment used for mechanical transport are generally prohibited on all federal lands designated as wilderness. This includes the use of motor vehicles (including OHVs), motorboats, motorized equipment, bicycles, hang gliders, wagons, carts, portage wheels, and the landing of aircraft including helicopters, unless provided for in specific legislation. In a few areas some exceptions allowing the use of motorized equipment or mechanical transport are described in the special regulations in effect for a specific area. Contact the agency for more information about regulations.<p><b>Contact Information:</b><blockquote><p>HAWAI'I VOLCANOES NATIONAL PARK<br>P.O. Box 52<br>Hawai'i National Park, HI 96718-0052<br>Phone: 808-985-6000<br>Fax: 808-985-6004</blockquote>",
      "RecAreaMapURL": "http://www.wilderness.net/index.cfm?fuse=NWPS&latitude=19.3624652811&longitude=-155.370322528&zoom=11",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Hawaii Volcanoes Wilderness"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2013-04-10",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 12866,
      "RecAreaPhone": "",
      "RecAreaDescription": "<br>The Indian Peaks Wilderness now contains a total of 77,711 acres and is managed by the Forest Service and the National Park Service. All of the Wilderness is in the state of Colorado. In 1978 the Indian Peaks Wilderness became part of the now over 109 million acre National Wilderness Preservation System. In wilderness, you can enjoy challenging recreational activities and extraordinary opportunities for solitude. In an age of <em>&quot;...increasing population, accompanied by expanding settlement and growing mechanization,...&quot;</em> you play an important role in helping to <em>&quot;...secure for the American people of present and future generations the benefits of an enduring resource of wilderness&quot;</em> as called for by Congress in the <a href=\"http://www.wilderness.net/index.cfm?fuse=NWPS&amp;sec=legisact\">Wilderness Act of 1964</a>. Please follow the regulations in place for this area, and use Leave No Trace techniques when visiting to ensure protection of its unique natural and experiential qualities.<p>How to follow the seven standard Leave No Trace principles differs in different parts of the country (desert vs. Rocky Mountains). Click on any of the principles listed below to learn more about how they apply.<p><b>Leave No Trace principles:</b><ol><li><a href=\"http://www.lnt.org/programs/principles_1.php\">Plan Ahead and Prepare</a></li><li><a href=\"http://www.lnt.org/programs/principles_2.php\">Travel and Camp on Durable Surfaces</a></li><li><a href=\"http://www.lnt.org/programs/principles_3.php\">Dispose of Waste Properly</a></li><li><a href=\"http://www.lnt.org/programs/principles_4.php\">Leave What You Find</a></li><li><a href=\"http://www.lnt.org/programs/principles_5.php\">Minimize Campfire Impacts</a></li><li><a href=\"http://www.lnt.org/programs/principles_6.php\">Respect Wildlife</a></li><li><a href=\"http://www.lnt.org/programs/principles_7.php\">Be Considerate of Other Visitors</a></li></ol><p><b>Regulations:</b><br>Motorized equipment and equipment used for mechanical transport are generally prohibited on all federal lands designated as wilderness. This includes the use of motor vehicles (including OHVs), motorboats, motorized equipment, bicycles, hang gliders, wagons, carts, portage wheels, and the landing of aircraft including helicopters, unless provided for in specific legislation. In a few areas some exceptions allowing the use of motorized equipment or mechanical transport are described in the special regulations in effect for a specific area. <a href=\"http://www.wilderness.net/index.cfm?fuse=NWPS&amp;sec=wildView&amp;tab=Area%20Management&amp;WID=261#regs\">Click here for additional regulations</a> or contact the agency.<p><b>Contact Information:</b><blockquote><p>ROCKY MOUNTAIN NATIONAL PARK<br>1000 Highway 36<br>Estes Park, CO 80517-8397<br>Phone: 970-586-1206<br>Fax: 970-586-1256<br>Visitor Information Recorded Message: 970-586-1333, Visitor Information for the Hearing Impaired (TDD): 970-586-1319, Backcountry: 970-586-1242.<p>BOULDER RANGER DISTRICT<br>2140 YARMOUTH AVE<br>BOULDER, CO 80301<br>Phone: 303-541-2500<p>SULPHUR RANGER DISTRICT<br>9 TEN MILE DRIVE<br>PO BOX 10<br>GRANBY, CO 80446<br>Phone: 970-887-4100</blockquote>",
      "RecAreaMapURL": "http://www.wilderness.net/index.cfm?fuse=NWPS&latitude=40.051256&longitude=-105.684486&zoom=11",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Indian Peaks Wilderness"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -114.805737,
          35.618652
        ]
      },
      "LastUpdatedDate": "2013-04-10",
      "RecAreaEmail": "lvfoweb@blm.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -114.805737,
      "RecAreaID": 12867,
      "RecAreaPhone": "702-515-5000",
      "RecAreaDescription": "<br>The Ireteba Peaks Wilderness now contains a total of 32,745 acres and is managed by the Bureau of Land Management and the National Park Service. All of the Wilderness is in the state of Nevada. In 2002 the Ireteba Peaks Wilderness became part of the now over 109 million acre National Wilderness Preservation System. In wilderness, you can enjoy challenging recreational activities and extraordinary opportunities for solitude. In an age of <em>&quot;...increasing population, accompanied by expanding settlement and growing mechanization,...&quot;</em> you play an important role in helping to <em>&quot;...secure for the American people of present and future generations the benefits of an enduring resource of wilderness&quot;</em> as called for by Congress in the <a href=\"http://www.wilderness.net/index.cfm?fuse=NWPS&amp;sec=legisact\">Wilderness Act of 1964</a>. Please follow the regulations in place for this area, and use Leave No Trace techniques when visiting to ensure protection of its unique natural and experiential qualities.<p>How to follow the seven standard Leave No Trace principles differs in different parts of the country (desert vs. Rocky Mountains). Click on any of the principles listed below to learn more about how they apply.<p><b>Leave No Trace principles:</b><ol><li><a href=\"http://www.lnt.org/programs/principles_1.php\">Plan Ahead and Prepare</a></li><li><a href=\"http://www.lnt.org/programs/principles_2.php\">Travel and Camp on Durable Surfaces</a></li><li><a href=\"http://www.lnt.org/programs/principles_3.php\">Dispose of Waste Properly</a></li><li><a href=\"http://www.lnt.org/programs/principles_4.php\">Leave What You Find</a></li><li><a href=\"http://www.lnt.org/programs/principles_5.php\">Minimize Campfire Impacts</a></li><li><a href=\"http://www.lnt.org/programs/principles_6.php\">Respect Wildlife</a></li><li><a href=\"http://www.lnt.org/programs/principles_7.php\">Be Considerate of Other Visitors</a></li></ol><p><b>Regulations:</b><br>Motorized equipment and equipment used for mechanical transport are generally prohibited on all federal lands designated as wilderness. This includes the use of motor vehicles (including OHVs), motorboats, motorized equipment, bicycles, hang gliders, wagons, carts, portage wheels, and the landing of aircraft including helicopters, unless provided for in specific legislation. In a few areas some exceptions allowing the use of motorized equipment or mechanical transport are described in the special regulations in effect for a specific area. Contact the agency for more information about regulations",
      "RecAreaMapURL": "http://www.wilderness.net/index.cfm?fuse=NWPS&latitude=35.605293&longitude=-114.719726&zoom=12",
      "RecAreaLatitude": 35.618652,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "\r\n\r\n\r\n\r\n\r\n\r\n\r\n",
      "Keywords": "",
      "RecAreaName": "Ireteba Peaks Wilderness"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2013-04-10",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 12868,
      "RecAreaPhone": "",
      "RecAreaDescription": "<br>The Isle Royale Wilderness now contains a total of 132,018 acres and is managed by the National Park Service. All of the Wilderness is in the state of Michigan. In 1976 the Isle Royale Wilderness became part of the now over 109 million acre National Wilderness Preservation System. In wilderness, you can enjoy challenging recreational activities and extraordinary opportunities for solitude. In an age of <em>&quot;...increasing population, accompanied by expanding settlement and growing mechanization,...&quot;</em> you play an important role in helping to <em>&quot;...secure for the American people of present and future generations the benefits of an enduring resource of wilderness&quot;</em> as called for by Congress in the <a href=\"http://www.wilderness.net/index.cfm?fuse=NWPS&amp;sec=legisact\">Wilderness Act of 1964</a>. Please follow the regulations in place for this area, and use Leave No Trace techniques when visiting to ensure protection of its unique natural and experiential qualities.<p>How to follow the seven standard Leave No Trace principles differs in different parts of the country (desert vs. Rocky Mountains). Click on any of the principles listed below to learn more about how they apply.<p><b>Leave No Trace principles:</b><ol><li><a href=\"http://www.lnt.org/programs/principles_1.php\">Plan Ahead and Prepare</a></li><li><a href=\"http://www.lnt.org/programs/principles_2.php\">Travel and Camp on Durable Surfaces</a></li><li><a href=\"http://www.lnt.org/programs/principles_3.php\">Dispose of Waste Properly</a></li><li><a href=\"http://www.lnt.org/programs/principles_4.php\">Leave What You Find</a></li><li><a href=\"http://www.lnt.org/programs/principles_5.php\">Minimize Campfire Impacts</a></li><li><a href=\"http://www.lnt.org/programs/principles_6.php\">Respect Wildlife</a></li><li><a href=\"http://www.lnt.org/programs/principles_7.php\">Be Considerate of Other Visitors</a></li></ol><p><b>Regulations:</b><br>Motorized equipment and equipment used for mechanical transport are generally prohibited on all federal lands designated as wilderness. This includes the use of motor vehicles (including OHVs), motorboats, motorized equipment, bicycles, hang gliders, wagons, carts, portage wheels, and the landing of aircraft including helicopters, unless provided for in specific legislation. In a few areas some exceptions allowing the use of motorized equipment or mechanical transport are described in the special regulations in effect for a specific area. Contact the agency for more information about regulations.<p><b>Contact Information:</b><blockquote><p>ISLE ROYALE NATIONAL PARK<br>800 East Lakeshore Dr.<br>Houghton, MI 49931-1895<br>Phone: 906-482-0984<br>Fax: 906-487-7170</blockquote>",
      "RecAreaMapURL": "http://www.wilderness.net/index.cfm?fuse=NWPS&latitude=47.986629921&longitude=-88.8883983319&zoom=11",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Isle Royale Wilderness"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2013-04-10",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 12869,
      "RecAreaPhone": "",
      "RecAreaDescription": "<br>The Jimbilnan Wilderness now contains a total of 18,879 acres and is managed by the National Park Service. All of the Wilderness is in the state of Nevada. In 2002 the Jimbilnan Wilderness became part of the now over 109 million acre National Wilderness Preservation System. In wilderness, you can enjoy challenging recreational activities and extraordinary opportunities for solitude. In an age of <em>&quot;...increasing population, accompanied by expanding settlement and growing mechanization,...&quot;</em> you play an important role in helping to <em>&quot;...secure for the American people of present and future generations the benefits of an enduring resource of wilderness&quot;</em> as called for by Congress in the <a href=\"http://www.wilderness.net/index.cfm?fuse=NWPS&amp;sec=legisact\">Wilderness Act of 1964</a>. Please follow the regulations in place for this area, and use Leave No Trace techniques when visiting to ensure protection of its unique natural and experiential qualities.<p>How to follow the seven standard Leave No Trace principles differs in different parts of the country (desert vs. Rocky Mountains). Click on any of the principles listed below to learn more about how they apply.<p><b>Leave No Trace principles:</b><ol><li><a href=\"http://www.lnt.org/programs/principles_1.php\">Plan Ahead and Prepare</a></li><li><a href=\"http://www.lnt.org/programs/principles_2.php\">Travel and Camp on Durable Surfaces</a></li><li><a href=\"http://www.lnt.org/programs/principles_3.php\">Dispose of Waste Properly</a></li><li><a href=\"http://www.lnt.org/programs/principles_4.php\">Leave What You Find</a></li><li><a href=\"http://www.lnt.org/programs/principles_5.php\">Minimize Campfire Impacts</a></li><li><a href=\"http://www.lnt.org/programs/principles_6.php\">Respect Wildlife</a></li><li><a href=\"http://www.lnt.org/programs/principles_7.php\">Be Considerate of Other Visitors</a></li></ol><p><b>Regulations:</b><br>Motorized equipment and equipment used for mechanical transport are generally prohibited on all federal lands designated as wilderness. This includes the use of motor vehicles (including OHVs), motorboats, motorized equipment, bicycles, hang gliders, wagons, carts, portage wheels, and the landing of aircraft including helicopters, unless provided for in specific legislation. In a few areas some exceptions allowing the use of motorized equipment or mechanical transport are described in the special regulations in effect for a specific area. Contact the agency for more information about regulations.<p><b>Contact Information:</b><blockquote><p>LAKE MEAD NATIONAL RECREATION AREA<br>601 Nevada Way<br>Boulder City, NV 89005<br>Phone: 702-293-8990<br>Fax: 702-293-8936</blockquote>",
      "RecAreaMapURL": "http://www.wilderness.net/index.cfm?fuse=NWPS&latitude=36.2449892566&longitude=-114.454221105&zoom=12",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Jimbilnan Wilderness"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2013-04-10",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 12870,
      "RecAreaPhone": "",
      "RecAreaDescription": "<br>The John Krebs Wilderness now contains a total of 39,740 acres and is managed by the National Park Service. All of the Wilderness is in the state of California. In 2009 the John Krebs Wilderness became part of the now over 109 million acre National Wilderness Preservation System. In wilderness, you can enjoy challenging recreational activities and extraordinary opportunities for solitude. In an age of <em>&quot;...increasing population, accompanied by expanding settlement and growing mechanization,...&quot;</em> you play an important role in helping to <em>&quot;...secure for the American people of present and future generations the benefits of an enduring resource of wilderness&quot;</em> as called for by Congress in the <a href=\"http://www.wilderness.net/index.cfm?fuse=NWPS&amp;sec=legisact\">Wilderness Act of 1964</a>. Please follow the regulations in place for this area, and use Leave No Trace techniques when visiting to ensure protection of its unique natural and experiential qualities.<p>How to follow the seven standard Leave No Trace principles differs in different parts of the country (desert vs. Rocky Mountains). Click on any of the principles listed below to learn more about how they apply.<p><b>Leave No Trace principles:</b><ol><li><a href=\"http://www.lnt.org/programs/principles_1.php\">Plan Ahead and Prepare</a></li><li><a href=\"http://www.lnt.org/programs/principles_2.php\">Travel and Camp on Durable Surfaces</a></li><li><a href=\"http://www.lnt.org/programs/principles_3.php\">Dispose of Waste Properly</a></li><li><a href=\"http://www.lnt.org/programs/principles_4.php\">Leave What You Find</a></li><li><a href=\"http://www.lnt.org/programs/principles_5.php\">Minimize Campfire Impacts</a></li><li><a href=\"http://www.lnt.org/programs/principles_6.php\">Respect Wildlife</a></li><li><a href=\"http://www.lnt.org/programs/principles_7.php\">Be Considerate of Other Visitors</a></li></ol><p><b>Regulations:</b><br>Motorized equipment and equipment used for mechanical transport are generally prohibited on all federal lands designated as wilderness. This includes the use of motor vehicles (including OHVs), motorboats, motorized equipment, bicycles, hang gliders, wagons, carts, portage wheels, and the landing of aircraft including helicopters, unless provided for in specific legislation. In a few areas some exceptions allowing the use of motorized equipment or mechanical transport are described in the special regulations in effect for a specific area. Contact the agency for more information about regulations.",
      "RecAreaMapURL": "http://www.wilderness.net/index.cfm?fuse=NWPS&latitude=36.4130259957&longitude=-118.669752814&zoom=11",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "John Krebs Wilderness"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2013-04-10",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 12871,
      "RecAreaPhone": "",
      "RecAreaDescription": "<br>The Joshua Tree Wilderness now contains a total of 594,502 acres and is managed by the National Park Service. All of the Wilderness is in the state of California. In 1976 the Joshua Tree Wilderness became part of the now over 109 million acre National Wilderness Preservation System. In wilderness, you can enjoy challenging recreational activities and extraordinary opportunities for solitude. In an age of <em>&quot;...increasing population, accompanied by expanding settlement and growing mechanization,...&quot;</em> you play an important role in helping to <em>&quot;...secure for the American people of present and future generations the benefits of an enduring resource of wilderness&quot;</em> as called for by Congress in the <a href=\"http://www.wilderness.net/index.cfm?fuse=NWPS&amp;sec=legisact\">Wilderness Act of 1964</a>. Please follow the regulations in place for this area, and use Leave No Trace techniques when visiting to ensure protection of its unique natural and experiential qualities.<p>How to follow the seven standard Leave No Trace principles differs in different parts of the country (desert vs. Rocky Mountains). Click on any of the principles listed below to learn more about how they apply.<p><b>Leave No Trace principles:</b><ol><li><a href=\"http://www.lnt.org/programs/principles_1.php\">Plan Ahead and Prepare</a></li><li><a href=\"http://www.lnt.org/programs/principles_2.php\">Travel and Camp on Durable Surfaces</a></li><li><a href=\"http://www.lnt.org/programs/principles_3.php\">Dispose of Waste Properly</a></li><li><a href=\"http://www.lnt.org/programs/principles_4.php\">Leave What You Find</a></li><li><a href=\"http://www.lnt.org/programs/principles_5.php\">Minimize Campfire Impacts</a></li><li><a href=\"http://www.lnt.org/programs/principles_6.php\">Respect Wildlife</a></li><li><a href=\"http://www.lnt.org/programs/principles_7.php\">Be Considerate of Other Visitors</a></li></ol><p><b>Regulations:</b><br>Motorized equipment and equipment used for mechanical transport are generally prohibited on all federal lands designated as wilderness. This includes the use of motor vehicles (including OHVs), motorboats, motorized equipment, bicycles, hang gliders, wagons, carts, portage wheels, and the landing of aircraft including helicopters, unless provided for in specific legislation. In a few areas some exceptions allowing the use of motorized equipment or mechanical transport are described in the special regulations in effect for a specific area. Contact the agency for more information about regulations.<p><b>Contact Information:</b><blockquote><p>JOSHUA TREE NATIONAL PARK<br>74485 National Park Dr.<br>Twentynine Palms, CA 92277-3597<br>Phone: 760-367-5500<br>Fax: 760-367-6392<br>Email: <a href=mailto:\"JOTR_info@nps.gov\">JOTR_info@nps.gov</a></blockquote>",
      "RecAreaMapURL": "http://www.wilderness.net/index.cfm?fuse=NWPS&latitude=33.9170718061&longitude=-115.820136641&zoom=9",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Joshua Tree National Park is made up of 75 percent wilderness and lies 140 miles east of Los Angeles, 175 miles northeast of San Diego, and 215 miles southwest of Las Vegas. You can approach it from Interstate 10 and Hwy 62 (Twentynine Palms Highway). The closest airport is in Palm Springs. Public transportation to the park is not available. <br> <br>There are three park entrance stations: 1) The west entrance is located five miles south of the junction of Highway 62 and Park Boulevard at Joshua Tree Village. 2) The north entrance is in Twentynine Palms, three miles south of the junction of Highway 62 and Utah Trail. 3) The south entrance at Cottonwood Spring, which lies 25 miles east of Indio, can be approached from the east or west, also via Interstate 10.",
      "Keywords": "",
      "RecAreaName": "Joshua Tree Wilderness"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2013-04-10",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 12872,
      "RecAreaPhone": "",
      "RecAreaDescription": "<br>The Katmai Wilderness now contains a total of 3,384,358 acres and is managed by the National Park Service. All of the Wilderness is in the state of Alaska. In 1980 the Katmai Wilderness became part of the now over 109 million acre National Wilderness Preservation System. In wilderness, you can enjoy challenging recreational activities and extraordinary opportunities for solitude. In an age of <em>&quot;...increasing population, accompanied by expanding settlement and growing mechanization,...&quot;</em> you play an important role in helping to <em>&quot;...secure for the American people of present and future generations the benefits of an enduring resource of wilderness&quot;</em> as called for by Congress in the <a href=\"http://www.wilderness.net/index.cfm?fuse=NWPS&amp;sec=legisact\">Wilderness Act of 1964</a>. Please follow the regulations in place for this area, and use Leave No Trace techniques when visiting to ensure protection of its unique natural and experiential qualities.<p>How to follow the seven standard Leave No Trace principles differs in different parts of the country (desert vs. Rocky Mountains). Click on any of the principles listed below to learn more about how they apply.<p><b>Leave No Trace principles:</b><ol><li><a href=\"http://www.lnt.org/programs/principles_1.php\">Plan Ahead and Prepare</a></li><li><a href=\"http://www.lnt.org/programs/principles_2.php\">Travel and Camp on Durable Surfaces</a></li><li><a href=\"http://www.lnt.org/programs/principles_3.php\">Dispose of Waste Properly</a></li><li><a href=\"http://www.lnt.org/programs/principles_4.php\">Leave What You Find</a></li><li><a href=\"http://www.lnt.org/programs/principles_5.php\">Minimize Campfire Impacts</a></li><li><a href=\"http://www.lnt.org/programs/principles_6.php\">Respect Wildlife</a></li><li><a href=\"http://www.lnt.org/programs/principles_7.php\">Be Considerate of Other Visitors</a></li></ol><p><b>Regulations:</b><br>Motorized equipment and equipment used for mechanical transport are generally prohibited on all federal lands designated as wilderness. This includes the use of motor vehicles (including OHVs), motorboats, motorized equipment, bicycles, hang gliders, wagons, carts, portage wheels, and the landing of aircraft including helicopters, unless provided for in specific legislation. In a few areas some exceptions allowing the use of motorized equipment or mechanical transport are described in the special regulations in effect for a specific area. Contact the agency for more information about regulations.<p><b>Contact Information:</b><blockquote><p>KATMAI NATIONAL PARK AND PRESERVE HEADQUARTERS<br>P.O. Box 7<br>#1 King Salmon Mall<br>King Salmon, AK 99613<br>Phone: 907-246-3305<br>Fax: 907-246-2116</blockquote>",
      "RecAreaMapURL": "http://www.wilderness.net/index.cfm?fuse=NWPS&latitude=58.5399302278&longitude=-154.956158939&zoom=8",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>The Katmai Wilderness is within Katmai National Park & Preserve, located on the Alaska Peninsula approximately 290 air miles southwest of Anchorage. The majority of visitors that experience the Katmai Wilderness arrive at Brooks Camp via floatplane. From Brooks Camp, visitors can be transported by bus to the Valley of Ten Thousand Smokes, one of the more popular Katmai Wilderness destinations.<br><br>The Katmai Wilderness may be directly accessed via air taxi flights chartered from Anchorage, King Salmon, Iliamna, Kodiak, Soldotna, Port Alsworth, or other nearby Alaska towns and villages. Regularly scheduled commercial flights are available from Anchorage to King Salmon, which serves as the Katmai National Park and Preserve administrative headquarters. Boats can access the Katmai coast from villages and towns along the Pacific Ocean coastline and wilderness locations along the Naknek River drainage can be reached by boat from the villages of Naknek and King Salmon.",
      "Keywords": "",
      "RecAreaName": "Katmai Wilderness"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2013-04-10",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 12873,
      "RecAreaPhone": "",
      "RecAreaDescription": "<br>The Kobuk Valley Wilderness now contains a total of 174,545 acres and is managed by the National Park Service. All of the Wilderness is in the state of Alaska. In 1980 the Kobuk Valley Wilderness became part of the now over 109 million acre National Wilderness Preservation System. In wilderness, you can enjoy challenging recreational activities and extraordinary opportunities for solitude. In an age of <em>&quot;...increasing population, accompanied by expanding settlement and growing mechanization,...&quot;</em> you play an important role in helping to <em>&quot;...secure for the American people of present and future generations the benefits of an enduring resource of wilderness&quot;</em> as called for by Congress in the <a href=\"http://www.wilderness.net/index.cfm?fuse=NWPS&amp;sec=legisact\">Wilderness Act of 1964</a>. Please follow the regulations in place for this area, and use Leave No Trace techniques when visiting to ensure protection of its unique natural and experiential qualities.<p>How to follow the seven standard Leave No Trace principles differs in different parts of the country (desert vs. Rocky Mountains). Click on any of the principles listed below to learn more about how they apply.<p><b>Leave No Trace principles:</b><ol><li><a href=\"http://www.lnt.org/programs/principles_1.php\">Plan Ahead and Prepare</a></li><li><a href=\"http://www.lnt.org/programs/principles_2.php\">Travel and Camp on Durable Surfaces</a></li><li><a href=\"http://www.lnt.org/programs/principles_3.php\">Dispose of Waste Properly</a></li><li><a href=\"http://www.lnt.org/programs/principles_4.php\">Leave What You Find</a></li><li><a href=\"http://www.lnt.org/programs/principles_5.php\">Minimize Campfire Impacts</a></li><li><a href=\"http://www.lnt.org/programs/principles_6.php\">Respect Wildlife</a></li><li><a href=\"http://www.lnt.org/programs/principles_7.php\">Be Considerate of Other Visitors</a></li></ol><p><b>Regulations:</b><br>Motorized equipment and equipment used for mechanical transport are generally prohibited on all federal lands designated as wilderness. This includes the use of motor vehicles (including OHVs), motorboats, motorized equipment, bicycles, hang gliders, wagons, carts, portage wheels, and the landing of aircraft including helicopters, unless provided for in specific legislation. In a few areas some exceptions allowing the use of motorized equipment or mechanical transport are described in the special regulations in effect for a specific area. Contact the agency for more information about regulations.<p><b>Contact Information:</b><blockquote><p>NATIONAL PARK SERVICE<br>P.O. Box 1029<br>Kotzebue, AK 99752<br>Phone: 907-442-3890<br>Fax: 907-442-8316<br>Summer Visitor Information: 907-442-3760.</blockquote>",
      "RecAreaMapURL": "http://www.wilderness.net/index.cfm?fuse=NWPS&latitude=67.0255178793&longitude=-158.962728441&zoom=10",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Kobuk Valley Wilderness"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2013-04-10",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 12874,
      "RecAreaPhone": "",
      "RecAreaDescription": "<br>The Lake Clark Wilderness now contains a total of 2,619,550 acres and is managed by the National Park Service. All of the Wilderness is in the state of Alaska. In 1980 the Lake Clark Wilderness became part of the now over 109 million acre National Wilderness Preservation System. In wilderness, you can enjoy challenging recreational activities and extraordinary opportunities for solitude. In an age of <em>&quot;...increasing population, accompanied by expanding settlement and growing mechanization,...&quot;</em> you play an important role in helping to <em>&quot;...secure for the American people of present and future generations the benefits of an enduring resource of wilderness&quot;</em> as called for by Congress in the <a href=\"http://www.wilderness.net/index.cfm?fuse=NWPS&amp;sec=legisact\">Wilderness Act of 1964</a>. Please follow the regulations in place for this area, and use Leave No Trace techniques when visiting to ensure protection of its unique natural and experiential qualities.<p>How to follow the seven standard Leave No Trace principles differs in different parts of the country (desert vs. Rocky Mountains). Click on any of the principles listed below to learn more about how they apply.<p><b>Leave No Trace principles:</b><ol><li><a href=\"http://www.lnt.org/programs/principles_1.php\">Plan Ahead and Prepare</a></li><li><a href=\"http://www.lnt.org/programs/principles_2.php\">Travel and Camp on Durable Surfaces</a></li><li><a href=\"http://www.lnt.org/programs/principles_3.php\">Dispose of Waste Properly</a></li><li><a href=\"http://www.lnt.org/programs/principles_4.php\">Leave What You Find</a></li><li><a href=\"http://www.lnt.org/programs/principles_5.php\">Minimize Campfire Impacts</a></li><li><a href=\"http://www.lnt.org/programs/principles_6.php\">Respect Wildlife</a></li><li><a href=\"http://www.lnt.org/programs/principles_7.php\">Be Considerate of Other Visitors</a></li></ol><p><b>Regulations:</b><br>Motorized equipment and equipment used for mechanical transport are generally prohibited on all federal lands designated as wilderness. This includes the use of motor vehicles (including OHVs), motorboats, motorized equipment, bicycles, hang gliders, wagons, carts, portage wheels, and the landing of aircraft including helicopters, unless provided for in specific legislation. In a few areas some exceptions allowing the use of motorized equipment or mechanical transport are described in the special regulations in effect for a specific area. Contact the agency for more information about regulations.<p><b>Contact Information:</b><blockquote><p>FIELD OFFICE<br>2181 Kachemak Drive<br>Homer, AK 99603<br>Phone: 907-235-7903<br>Fax: 907-235-7970<p>FIELD HEADQUARTERS<br>1 Park Place<br>Port Alsworth, AK 99653<br>Phone: 907-781-2218<br>Fax: 907-781-2119<p>ADMINISTRATIVE HEADQUARTERS<br>240 West 5th Avenue, Suite 236<br>Anchorage, AK 99501<br>Phone: (907) 644-3626<br>Fax: (907) 644-3810</blockquote>",
      "RecAreaMapURL": "http://www.wilderness.net/index.cfm?fuse=NWPS&latitude=60.636944756&longitude=-153.341912883&zoom=8",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Lake Clark National Park & Preserve is located southwest of Anchorage, Alaska extending from the west coast of Cook Inlet to the tundra of southwest Alaska.<br>Lake Clark is not on the road system. <br>Access to the Lake Clark region is by small aircraft and many air taxi services provide transportation to the park. Float planes may land on the many lakes throughout the area. Wheeled planes land on open beaches, gravel bars, or private airstrips in or near the park. A one to two-hour flight from Anchorage, Kenai or Homer will provide access to most points within the park and preserve. <br>",
      "Keywords": "",
      "RecAreaName": "Lake Clark Wilderness"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2013-04-10",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 12875,
      "RecAreaPhone": "",
      "RecAreaDescription": "<br>The Lassen Volcanic Wilderness now contains a total of 79,062 acres and is managed by the National Park Service. All of the Wilderness is in the state of California. In 1972 the Lassen Volcanic Wilderness became part of the now over 109 million acre National Wilderness Preservation System. In wilderness, you can enjoy challenging recreational activities and extraordinary opportunities for solitude. In an age of <em>&quot;...increasing population, accompanied by expanding settlement and growing mechanization,...&quot;</em> you play an important role in helping to <em>&quot;...secure for the American people of present and future generations the benefits of an enduring resource of wilderness&quot;</em> as called for by Congress in the <a href=\"http://www.wilderness.net/index.cfm?fuse=NWPS&amp;sec=legisact\">Wilderness Act of 1964</a>. Please follow the regulations in place for this area, and use Leave No Trace techniques when visiting to ensure protection of its unique natural and experiential qualities.<p>How to follow the seven standard Leave No Trace principles differs in different parts of the country (desert vs. Rocky Mountains). Click on any of the principles listed below to learn more about how they apply.<p><b>Leave No Trace principles:</b><ol><li><a href=\"http://www.lnt.org/programs/principles_1.php\">Plan Ahead and Prepare</a></li><li><a href=\"http://www.lnt.org/programs/principles_2.php\">Travel and Camp on Durable Surfaces</a></li><li><a href=\"http://www.lnt.org/programs/principles_3.php\">Dispose of Waste Properly</a></li><li><a href=\"http://www.lnt.org/programs/principles_4.php\">Leave What You Find</a></li><li><a href=\"http://www.lnt.org/programs/principles_5.php\">Minimize Campfire Impacts</a></li><li><a href=\"http://www.lnt.org/programs/principles_6.php\">Respect Wildlife</a></li><li><a href=\"http://www.lnt.org/programs/principles_7.php\">Be Considerate of Other Visitors</a></li></ol><p><b>Regulations:</b><br>Motorized equipment and equipment used for mechanical transport are generally prohibited on all federal lands designated as wilderness. This includes the use of motor vehicles (including OHVs), motorboats, motorized equipment, bicycles, hang gliders, wagons, carts, portage wheels, and the landing of aircraft including helicopters, unless provided for in specific legislation. In a few areas some exceptions allowing the use of motorized equipment or mechanical transport are described in the special regulations in effect for a specific area. Contact the agency for more information about regulations.<p><b>Contact Information:</b><blockquote><p>LASSEN VOLCANIC NATIONAL PARK<br>P.O. Box 100<br>Mineral, CA 96063<br>Phone: 530-595-4444<br>Fax: 530-595-3262<br>For hearing impaired visitors (TTY): 530-595-3480.</blockquote>",
      "RecAreaMapURL": "http://www.wilderness.net/index.cfm?fuse=NWPS&latitude=40.4913479566&longitude=-121.394977825&zoom=11",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Lassen Volcanic Wilderness"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2013-04-10",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 12876,
      "RecAreaPhone": "",
      "RecAreaDescription": "<br>The Lava Beds Wilderness now contains a total of 28,460 acres and is managed by the National Park Service. All of the Wilderness is in the state of California. In 1972 the Lava Beds Wilderness became part of the now over 109 million acre National Wilderness Preservation System. In wilderness, you can enjoy challenging recreational activities and extraordinary opportunities for solitude. In an age of <em>&quot;...increasing population, accompanied by expanding settlement and growing mechanization,...&quot;</em> you play an important role in helping to <em>&quot;...secure for the American people of present and future generations the benefits of an enduring resource of wilderness&quot;</em> as called for by Congress in the <a href=\"http://www.wilderness.net/index.cfm?fuse=NWPS&amp;sec=legisact\">Wilderness Act of 1964</a>. Please follow the regulations in place for this area, and use Leave No Trace techniques when visiting to ensure protection of its unique natural and experiential qualities.<p>How to follow the seven standard Leave No Trace principles differs in different parts of the country (desert vs. Rocky Mountains). Click on any of the principles listed below to learn more about how they apply.<p><b>Leave No Trace principles:</b><ol><li><a href=\"http://www.lnt.org/programs/principles_1.php\">Plan Ahead and Prepare</a></li><li><a href=\"http://www.lnt.org/programs/principles_2.php\">Travel and Camp on Durable Surfaces</a></li><li><a href=\"http://www.lnt.org/programs/principles_3.php\">Dispose of Waste Properly</a></li><li><a href=\"http://www.lnt.org/programs/principles_4.php\">Leave What You Find</a></li><li><a href=\"http://www.lnt.org/programs/principles_5.php\">Minimize Campfire Impacts</a></li><li><a href=\"http://www.lnt.org/programs/principles_6.php\">Respect Wildlife</a></li><li><a href=\"http://www.lnt.org/programs/principles_7.php\">Be Considerate of Other Visitors</a></li></ol><p><b>Regulations:</b><br>Motorized equipment and equipment used for mechanical transport are generally prohibited on all federal lands designated as wilderness. This includes the use of motor vehicles (including OHVs), motorboats, motorized equipment, bicycles, hang gliders, wagons, carts, portage wheels, and the landing of aircraft including helicopters, unless provided for in specific legislation. In a few areas some exceptions allowing the use of motorized equipment or mechanical transport are described in the special regulations in effect for a specific area. Contact the agency for more information about regulations.<p><b>Contact Information:</b><blockquote><p>LAVA BEDS NATIONAL MONUMENT<br>1 Indian Well Headquarters<br>Tulelake, CA 96134<br>Phone: 530-667-8100<br>Fax: 530-677-2737</blockquote>",
      "RecAreaMapURL": "http://www.wilderness.net/index.cfm?fuse=NWPS&latitude=41.7535153246&longitude=-121.518720411&zoom=12",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Lava Beds Wilderness"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2013-04-10",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 12877,
      "RecAreaPhone": "",
      "RecAreaDescription": "<br>The Marjory Stoneman Douglas Wilderness now contains a total of 1,296,500 acres and is managed by the National Park Service. All of the Wilderness is in the state of Florida. In 1978 the Marjory Stoneman Douglas Wilderness became part of the now over 109 million acre National Wilderness Preservation System. In wilderness, you can enjoy challenging recreational activities and extraordinary opportunities for solitude. In an age of <em>&quot;...increasing population, accompanied by expanding settlement and growing mechanization,...&quot;</em> you play an important role in helping to <em>&quot;...secure for the American people of present and future generations the benefits of an enduring resource of wilderness&quot;</em> as called for by Congress in the <a href=\"http://www.wilderness.net/index.cfm?fuse=NWPS&amp;sec=legisact\">Wilderness Act of 1964</a>. Please follow the regulations in place for this area, and use Leave No Trace techniques when visiting to ensure protection of its unique natural and experiential qualities.<p>How to follow the seven standard Leave No Trace principles differs in different parts of the country (desert vs. Rocky Mountains). Click on any of the principles listed below to learn more about how they apply.<p><b>Leave No Trace principles:</b><ol><li><a href=\"http://www.lnt.org/programs/principles_1.php\">Plan Ahead and Prepare</a></li><li><a href=\"http://www.lnt.org/programs/principles_2.php\">Travel and Camp on Durable Surfaces</a></li><li><a href=\"http://www.lnt.org/programs/principles_3.php\">Dispose of Waste Properly</a></li><li><a href=\"http://www.lnt.org/programs/principles_4.php\">Leave What You Find</a></li><li><a href=\"http://www.lnt.org/programs/principles_5.php\">Minimize Campfire Impacts</a></li><li><a href=\"http://www.lnt.org/programs/principles_6.php\">Respect Wildlife</a></li><li><a href=\"http://www.lnt.org/programs/principles_7.php\">Be Considerate of Other Visitors</a></li></ol><p><b>Regulations:</b><br>Motorized equipment and equipment used for mechanical transport are generally prohibited on all federal lands designated as wilderness. This includes the use of motor vehicles (including OHVs), motorboats, motorized equipment, bicycles, hang gliders, wagons, carts, portage wheels, and the landing of aircraft including helicopters, unless provided for in specific legislation. In a few areas some exceptions allowing the use of motorized equipment or mechanical transport are described in the special regulations in effect for a specific area. Contact the agency for more information about regulations.<p><b>Contact Information:</b><blockquote><p>EVERGLADES NATIONAL PARK<br>40001 State Road 9336<br>Homestead, FL 33034-6733<br>Phone: 305-242-7700<br>Fax: 305-242-7711</blockquote>",
      "RecAreaMapURL": "http://www.wilderness.net/index.cfm?fuse=NWPS&latitude=25.3623509137&longitude=-80.8727202924&zoom=9",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Marjory Stoneman Douglas Wilderness"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2013-04-10",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 12878,
      "RecAreaPhone": "",
      "RecAreaDescription": "<br>The Mesa Verde Wilderness now contains a total of 8,500 acres and is managed by the National Park Service. All of the Wilderness is in the state of Colorado. In 1976 the Mesa Verde Wilderness became part of the now over 109 million acre National Wilderness Preservation System. In wilderness, you can enjoy challenging recreational activities and extraordinary opportunities for solitude. In an age of <em>&quot;...increasing population, accompanied by expanding settlement and growing mechanization,...&quot;</em> you play an important role in helping to <em>&quot;...secure for the American people of present and future generations the benefits of an enduring resource of wilderness&quot;</em> as called for by Congress in the <a href=\"http://www.wilderness.net/index.cfm?fuse=NWPS&amp;sec=legisact\">Wilderness Act of 1964</a>. Please follow the regulations in place for this area, and use Leave No Trace techniques when visiting to ensure protection of its unique natural and experiential qualities.<p>How to follow the seven standard Leave No Trace principles differs in different parts of the country (desert vs. Rocky Mountains). Click on any of the principles listed below to learn more about how they apply.<p><b>Leave No Trace principles:</b><ol><li><a href=\"http://www.lnt.org/programs/principles_1.php\">Plan Ahead and Prepare</a></li><li><a href=\"http://www.lnt.org/programs/principles_2.php\">Travel and Camp on Durable Surfaces</a></li><li><a href=\"http://www.lnt.org/programs/principles_3.php\">Dispose of Waste Properly</a></li><li><a href=\"http://www.lnt.org/programs/principles_4.php\">Leave What You Find</a></li><li><a href=\"http://www.lnt.org/programs/principles_5.php\">Minimize Campfire Impacts</a></li><li><a href=\"http://www.lnt.org/programs/principles_6.php\">Respect Wildlife</a></li><li><a href=\"http://www.lnt.org/programs/principles_7.php\">Be Considerate of Other Visitors</a></li></ol><p><b>Regulations:</b><br>Motorized equipment and equipment used for mechanical transport are generally prohibited on all federal lands designated as wilderness. This includes the use of motor vehicles (including OHVs), motorboats, motorized equipment, bicycles, hang gliders, wagons, carts, portage wheels, and the landing of aircraft including helicopters, unless provided for in specific legislation. In a few areas some exceptions allowing the use of motorized equipment or mechanical transport are described in the special regulations in effect for a specific area. Contact the agency for more information about regulations.<p><b>Contact Information:</b><blockquote><p>MESA VERDE NATIONAL PARK<br>P.O. Box 8<br>Mesa Verde, CO 81330-0008<br>Phone: 970-529-4465<br>Fax: 970-529-4637<p>NATURAL RESOURCE MANAGER: George San Miguel<br>PO Box 8<br>Mesa Verde, CO 81330<br>Phone: 970-529-5069<br>Fax: 970-529-5071<br>Email: <a href=mailto:\"george_san_miguel@nps.gov\">george_san_miguel@nps.gov</a><br>Office hours: 8am-4pm Monday-Friday</blockquote>",
      "RecAreaMapURL": "http://www.wilderness.net/index.cfm?fuse=NWPS&latitude=37.2686707425&longitude=-108.425017197&zoom=12",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>The park is located in the southwestern corner of Colorado in Montezuma County. Two small wilderness units are located on the north escarpment and one larger unit on the east escarpment. Remember that these wilderness areas are closed to general public visitation.",
      "Keywords": "",
      "RecAreaName": "Mesa Verde Wilderness"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2013-04-10",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 12879,
      "RecAreaPhone": "",
      "RecAreaDescription": "<br>The Mojave Wilderness now contains a total of 695,200 acres and is managed by the National Park Service. All of the Wilderness is in the state of California. In 1994 the Mojave Wilderness became part of the now over 109 million acre National Wilderness Preservation System. In wilderness, you can enjoy challenging recreational activities and extraordinary opportunities for solitude. In an age of <em>&quot;...increasing population, accompanied by expanding settlement and growing mechanization,...&quot;</em> you play an important role in helping to <em>&quot;...secure for the American people of present and future generations the benefits of an enduring resource of wilderness&quot;</em> as called for by Congress in the <a href=\"http://www.wilderness.net/index.cfm?fuse=NWPS&amp;sec=legisact\">Wilderness Act of 1964</a>. Please follow the regulations in place for this area, and use Leave No Trace techniques when visiting to ensure protection of its unique natural and experiential qualities.<p>How to follow the seven standard Leave No Trace principles differs in different parts of the country (desert vs. Rocky Mountains). Click on any of the principles listed below to learn more about how they apply.<p><b>Leave No Trace principles:</b><ol><li><a href=\"http://www.lnt.org/programs/principles_1.php\">Plan Ahead and Prepare</a></li><li><a href=\"http://www.lnt.org/programs/principles_2.php\">Travel and Camp on Durable Surfaces</a></li><li><a href=\"http://www.lnt.org/programs/principles_3.php\">Dispose of Waste Properly</a></li><li><a href=\"http://www.lnt.org/programs/principles_4.php\">Leave What You Find</a></li><li><a href=\"http://www.lnt.org/programs/principles_5.php\">Minimize Campfire Impacts</a></li><li><a href=\"http://www.lnt.org/programs/principles_6.php\">Respect Wildlife</a></li><li><a href=\"http://www.lnt.org/programs/principles_7.php\">Be Considerate of Other Visitors</a></li></ol><p><b>Regulations:</b><br>Motorized equipment and equipment used for mechanical transport are generally prohibited on all federal lands designated as wilderness. This includes the use of motor vehicles (including OHVs), motorboats, motorized equipment, bicycles, hang gliders, wagons, carts, portage wheels, and the landing of aircraft including helicopters, unless provided for in specific legislation. In a few areas some exceptions allowing the use of motorized equipment or mechanical transport are described in the special regulations in effect for a specific area. Contact the agency for more information about regulations.<p><b>Contact Information:</b><blockquote><p>SUPERINTENDENT<br>Mojave National Preserve<br>2701 Barstow Rd.<br>Barstow, CA 92311<br>Phone: 760-252-6100<br>Fax: 760-252-6174</blockquote>",
      "RecAreaMapURL": "http://www.wilderness.net/index.cfm?fuse=NWPS&latitude=35.113229842&longitude=-115.595709996&zoom=9",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Mojave Wilderness"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2013-04-10",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 12880,
      "RecAreaPhone": "",
      "RecAreaDescription": "<br>The Mount Rainier Wilderness now contains a total of 228,480 acres and is managed by the National Park Service. All of the Wilderness is in the state of Washington. In 1988 the Mount Rainier Wilderness became part of the now over 109 million acre National Wilderness Preservation System. In wilderness, you can enjoy challenging recreational activities and extraordinary opportunities for solitude. In an age of <em>&quot;...increasing population, accompanied by expanding settlement and growing mechanization,...&quot;</em> you play an important role in helping to <em>&quot;...secure for the American people of present and future generations the benefits of an enduring resource of wilderness&quot;</em> as called for by Congress in the <a href=\"http://www.wilderness.net/index.cfm?fuse=NWPS&amp;sec=legisact\">Wilderness Act of 1964</a>. Please follow the regulations in place for this area, and use Leave No Trace techniques when visiting to ensure protection of its unique natural and experiential qualities.<p>How to follow the seven standard Leave No Trace principles differs in different parts of the country (desert vs. Rocky Mountains). Click on any of the principles listed below to learn more about how they apply.<p><b>Leave No Trace principles:</b><ol><li><a href=\"http://www.lnt.org/programs/principles_1.php\">Plan Ahead and Prepare</a></li><li><a href=\"http://www.lnt.org/programs/principles_2.php\">Travel and Camp on Durable Surfaces</a></li><li><a href=\"http://www.lnt.org/programs/principles_3.php\">Dispose of Waste Properly</a></li><li><a href=\"http://www.lnt.org/programs/principles_4.php\">Leave What You Find</a></li><li><a href=\"http://www.lnt.org/programs/principles_5.php\">Minimize Campfire Impacts</a></li><li><a href=\"http://www.lnt.org/programs/principles_6.php\">Respect Wildlife</a></li><li><a href=\"http://www.lnt.org/programs/principles_7.php\">Be Considerate of Other Visitors</a></li></ol><p><b>Regulations:</b><br>Motorized equipment and equipment used for mechanical transport are generally prohibited on all federal lands designated as wilderness. This includes the use of motor vehicles (including OHVs), motorboats, motorized equipment, bicycles, hang gliders, wagons, carts, portage wheels, and the landing of aircraft including helicopters, unless provided for in specific legislation. In a few areas some exceptions allowing the use of motorized equipment or mechanical transport are described in the special regulations in effect for a specific area. Contact the agency for more information about regulations.<p><b>Contact Information:</b><blockquote><p>MOUNT RAINIER NATIONAL PARK<br>55210 238th Ave East<br>Ashford, WA 98304-9751<br>Phone: 360-569-2211 x3314<br>Fax: 360-569-2170</blockquote>",
      "RecAreaMapURL": "http://www.wilderness.net/index.cfm?fuse=NWPS&latitude=46.8622366127&longitude=-121.704305333&zoom=10",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Mount Rainier National Park is located in Washington State, on the west-side of the Cascade Range, approximately 50 miles southeast of the Seattle-Tacoma metropolitan area.  Year-round access to the park is via state route 706 to the Nisqually Entrance in the southwest corner of the park. Limited winter access is available via highway 123 in the southeast corner of the park. The Carbon River/Mowich Lake area, in the northwest corner of the park, is accessed via state route 165 through Wilkeson. In summer only, the north and east sides of the park can be accessed using highway 410.",
      "Keywords": "",
      "RecAreaName": "Mount Rainier Wilderness"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -114.719027,
          36.292487
        ]
      },
      "LastUpdatedDate": "2013-04-10",
      "RecAreaEmail": "lvfoweb@blm.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -114.719027,
      "RecAreaID": 12881,
      "RecAreaPhone": "702-515-5000",
      "RecAreaDescription": "<br>The Muddy Mountains Wilderness now contains a total of 48,019 acres and is managed by the Bureau of Land Management and the National Park Service. All of the Wilderness is in the state of Nevada. In 2002 the Muddy Mountains Wilderness became part of the now over 109 million acre National Wilderness Preservation System. In wilderness, you can enjoy challenging recreational activities and extraordinary opportunities for solitude. In an age of <em>&quot;...increasing population, accompanied by expanding settlement and growing mechanization,...&quot;</em> you play an important role in helping to <em>&quot;...secure for the American people of present and future generations the benefits of an enduring resource of wilderness&quot;</em> as called for by Congress in the <a href=\"http://www.wilderness.net/index.cfm?fuse=NWPS&amp;sec=legisact\">Wilderness Act of 1964</a>. Please follow the regulations in place for this area, and use Leave No Trace techniques when visiting to ensure protection of its unique natural and experiential qualities.<p>How to follow the seven standard Leave No Trace principles differs in different parts of the country (desert vs. Rocky Mountains). Click on any of the principles listed below to learn more about how they apply.<p><b>Leave No Trace principles:</b><ol><li><a href=\"http://www.lnt.org/programs/principles_1.php\">Plan Ahead and Prepare</a></li><li><a href=\"http://www.lnt.org/programs/principles_2.php\">Travel and Camp on Durable Surfaces</a></li><li><a href=\"http://www.lnt.org/programs/principles_3.php\">Dispose of Waste Properly</a></li><li><a href=\"http://www.lnt.org/programs/principles_4.php\">Leave What You Find</a></li><li><a href=\"http://www.lnt.org/programs/principles_5.php\">Minimize Campfire Impacts</a></li><li><a href=\"http://www.lnt.org/programs/principles_6.php\">Respect Wildlife</a></li><li><a href=\"http://www.lnt.org/programs/principles_7.php\">Be Considerate of Other Visitors</a></li></ol><p><b>Regulations:</b><br>Motorized equipment and equipment used for mechanical transport are generally prohibited on all federal lands designated as wilderness. This includes the use of motor vehicles (including OHVs), motorboats, motorized equipment, bicycles, hang gliders, wagons, carts, portage wheels, and the landing of aircraft including helicopters, unless provided for in specific legislation. In a few areas some exceptions allowing the use of motorized equipment or mechanical transport are described in the special regulations in effect for a specific area. Contact the agency for more information about regulations.<p><b>Contact Information:</b><blockquote><p>LAS VEGAS FIELD OFFICE, DIVISION OF NLCS<br>BLM, Las Vegas Field Office<br>4701 N. Torrey Pines Dr.<br>Las Vegas, NV 89130<br>Phone: 702-515-5000<p>LAKE MEAD NATIONAL RECREATION AREA<br>601 Nevada Way<br>Boulder City, NV 89005<br>Phone: 702-293-8990<br>Fax: 702-293-8936</blockquote>",
      "RecAreaMapURL": "http://www.wilderness.net/index.cfm?fuse=NWPS&latitude=36.297039&longitude=-114.714309&zoom=11",
      "RecAreaLatitude": 36.292487,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<br>Hidden Valley may be accessed by driving the Bitter Springs Backcountry Byway approximately 3 miles east on the Valley of Fire Highway from Interstate 15.  Drive approximately 4 miles south of the Valley of Fire Highway on a rough dirt road to a sign for Color Rock Quarry.  Turning right and within a few hundred feet left, a rough dirt road leads approximately 3 miles to the trailhead for Hidden Valley.  This road is rough and requires high clearance.  There will be a final sign for Color Rock Quarry approximately 1/4 mile before the parking area.  A trail leads from behind a small wilderness sign through sandstone outcrops to the top of a pass looking into Hidden Valley.  The trail continues approximately 3 miles to terminate at a view point of a large sandstone arch.  The trail is made up of several segments which are the remains of old ranching trail and mineral exploration tracks.  The trail is newly designated and maintenance is planned in the next year; at present portions of the trail are difficult to relocate.<br><br>The Bowl of Fire and Anniversary narrows may be accessed through Lake Mead National Recreation area and the paved Northshore Road.  At approximately mile marker 16, the north Callville Wash Road (road 94) may be taken, though 4WD is often necessary in the loose sand of the wash.  For Anniversary Narrows, turn left up road 94A to it's end overlooking the Lovell Wash and park.  Driving down into the wash to cross to the other side is not recommended without aggressive 4WD - it is not permitted to drive up Lovell Wash to Anniversary Narrows.  Hike up the wash approximately 3/4 mile to the narrows.  To access the Bowl of Fire drive up road 94 to one of 3 main side washes that intersect Callville Wash.  Park and hike up the side wash.  If you don't have 4WD and wish to park along the Northshore Road, you may park at the intersection with the Callville Wash Road, or continue a couple miles to the northeast, park at one of two roadside pullouts, and walk across flat desert to the side washes described above.  Parking at one of the roadside pullouts on the North Shore Road adds approximately 1 mile additional hiking as compared to parking along the Callville Wash Road.<br>",
      "Keywords": "",
      "RecAreaName": "Muddy Mountains Wilderness"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2013-04-10",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 12882,
      "RecAreaPhone": "",
      "RecAreaDescription": "<br>The Nellis Wash Wilderness now contains a total of 16,423 acres and is managed by the National Park Service. All of the Wilderness is in the state of Nevada. In 2002 the Nellis Wash Wilderness became part of the now over 109 million acre National Wilderness Preservation System. In wilderness, you can enjoy challenging recreational activities and extraordinary opportunities for solitude. In an age of <em>&quot;...increasing population, accompanied by expanding settlement and growing mechanization,...&quot;</em> you play an important role in helping to <em>&quot;...secure for the American people of present and future generations the benefits of an enduring resource of wilderness&quot;</em> as called for by Congress in the <a href=\"http://www.wilderness.net/index.cfm?fuse=NWPS&amp;sec=legisact\">Wilderness Act of 1964</a>. Please follow the regulations in place for this area, and use Leave No Trace techniques when visiting to ensure protection of its unique natural and experiential qualities.<p>How to follow the seven standard Leave No Trace principles differs in different parts of the country (desert vs. Rocky Mountains). Click on any of the principles listed below to learn more about how they apply.<p><b>Leave No Trace principles:</b><ol><li><a href=\"http://www.lnt.org/programs/principles_1.php\">Plan Ahead and Prepare</a></li><li><a href=\"http://www.lnt.org/programs/principles_2.php\">Travel and Camp on Durable Surfaces</a></li><li><a href=\"http://www.lnt.org/programs/principles_3.php\">Dispose of Waste Properly</a></li><li><a href=\"http://www.lnt.org/programs/principles_4.php\">Leave What You Find</a></li><li><a href=\"http://www.lnt.org/programs/principles_5.php\">Minimize Campfire Impacts</a></li><li><a href=\"http://www.lnt.org/programs/principles_6.php\">Respect Wildlife</a></li><li><a href=\"http://www.lnt.org/programs/principles_7.php\">Be Considerate of Other Visitors</a></li></ol><p><b>Regulations:</b><br>Motorized equipment and equipment used for mechanical transport are generally prohibited on all federal lands designated as wilderness. This includes the use of motor vehicles (including OHVs), motorboats, motorized equipment, bicycles, hang gliders, wagons, carts, portage wheels, and the landing of aircraft including helicopters, unless provided for in specific legislation. In a few areas some exceptions allowing the use of motorized equipment or mechanical transport are described in the special regulations in effect for a specific area. Contact the agency for more information about regulations.<p><b>Contact Information:</b><blockquote><p>LAKE MEAD NATIONAL RECREATION AREA<br>601 Nevada Way<br>Boulder City, NV 89005<br>Phone: 702-293-8990<br>Fax: 702-293-8936</blockquote>",
      "RecAreaMapURL": "http://www.wilderness.net/index.cfm?fuse=NWPS&latitude=35.3836471953&longitude=-114.73194579&zoom=12",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Nellis Wash Wilderness"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2013-04-10",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 12883,
      "RecAreaPhone": "",
      "RecAreaDescription": "<br>The Noatak Wilderness now contains a total of 5,765,427 acres and is managed by the National Park Service. All of the Wilderness is in the state of Alaska. In 1980 the Noatak Wilderness became part of the now over 109 million acre National Wilderness Preservation System. In wilderness, you can enjoy challenging recreational activities and extraordinary opportunities for solitude. In an age of <em>&quot;...increasing population, accompanied by expanding settlement and growing mechanization,...&quot;</em> you play an important role in helping to <em>&quot;...secure for the American people of present and future generations the benefits of an enduring resource of wilderness&quot;</em> as called for by Congress in the <a href=\"http://www.wilderness.net/index.cfm?fuse=NWPS&amp;sec=legisact\">Wilderness Act of 1964</a>. Please follow the regulations in place for this area, and use Leave No Trace techniques when visiting to ensure protection of its unique natural and experiential qualities.<p>How to follow the seven standard Leave No Trace principles differs in different parts of the country (desert vs. Rocky Mountains). Click on any of the principles listed below to learn more about how they apply.<p><b>Leave No Trace principles:</b><ol><li><a href=\"http://www.lnt.org/programs/principles_1.php\">Plan Ahead and Prepare</a></li><li><a href=\"http://www.lnt.org/programs/principles_2.php\">Travel and Camp on Durable Surfaces</a></li><li><a href=\"http://www.lnt.org/programs/principles_3.php\">Dispose of Waste Properly</a></li><li><a href=\"http://www.lnt.org/programs/principles_4.php\">Leave What You Find</a></li><li><a href=\"http://www.lnt.org/programs/principles_5.php\">Minimize Campfire Impacts</a></li><li><a href=\"http://www.lnt.org/programs/principles_6.php\">Respect Wildlife</a></li><li><a href=\"http://www.lnt.org/programs/principles_7.php\">Be Considerate of Other Visitors</a></li></ol><p><b>Regulations:</b><br>Motorized equipment and equipment used for mechanical transport are generally prohibited on all federal lands designated as wilderness. This includes the use of motor vehicles (including OHVs), motorboats, motorized equipment, bicycles, hang gliders, wagons, carts, portage wheels, and the landing of aircraft including helicopters, unless provided for in specific legislation. In a few areas some exceptions allowing the use of motorized equipment or mechanical transport are described in the special regulations in effect for a specific area. Contact the agency for more information about regulations.<p><b>Contact Information:</b><blockquote><p>NATIONAL PARK SERVICE<br>P.O. Box 1029<br>Kotzebue, AK 99752<br>Phone: 907-442-3890<br>Fax: 907-442-8316<br>Summer Visitor Information: 907-442-3760.</blockquote>",
      "RecAreaMapURL": "http://www.wilderness.net/index.cfm?fuse=NWPS&latitude=68.0649608199&longitude=-159.551604324&zoom=7",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Noatak Wilderness"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2013-04-10",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 12884,
      "RecAreaPhone": "",
      "RecAreaDescription": "<br>The Olympic Wilderness now contains a total of 876,669 acres and is managed by the National Park Service. All of the Wilderness is in the state of Washington. In 1988 the Olympic Wilderness became part of the now over 109 million acre National Wilderness Preservation System. In wilderness, you can enjoy challenging recreational activities and extraordinary opportunities for solitude. In an age of <em>&quot;...increasing population, accompanied by expanding settlement and growing mechanization,...&quot;</em> you play an important role in helping to <em>&quot;...secure for the American people of present and future generations the benefits of an enduring resource of wilderness&quot;</em> as called for by Congress in the <a href=\"http://www.wilderness.net/index.cfm?fuse=NWPS&amp;sec=legisact\">Wilderness Act of 1964</a>. Please follow the regulations in place for this area, and use Leave No Trace techniques when visiting to ensure protection of its unique natural and experiential qualities.<p>How to follow the seven standard Leave No Trace principles differs in different parts of the country (desert vs. Rocky Mountains). Click on any of the principles listed below to learn more about how they apply.<p><b>Leave No Trace principles:</b><ol><li><a href=\"http://www.lnt.org/programs/principles_1.php\">Plan Ahead and Prepare</a></li><li><a href=\"http://www.lnt.org/programs/principles_2.php\">Travel and Camp on Durable Surfaces</a></li><li><a href=\"http://www.lnt.org/programs/principles_3.php\">Dispose of Waste Properly</a></li><li><a href=\"http://www.lnt.org/programs/principles_4.php\">Leave What You Find</a></li><li><a href=\"http://www.lnt.org/programs/principles_5.php\">Minimize Campfire Impacts</a></li><li><a href=\"http://www.lnt.org/programs/principles_6.php\">Respect Wildlife</a></li><li><a href=\"http://www.lnt.org/programs/principles_7.php\">Be Considerate of Other Visitors</a></li></ol><p><b>Regulations:</b><br>Motorized equipment and equipment used for mechanical transport are generally prohibited on all federal lands designated as wilderness. This includes the use of motor vehicles (including OHVs), motorboats, motorized equipment, bicycles, hang gliders, wagons, carts, portage wheels, and the landing of aircraft including helicopters, unless provided for in specific legislation. In a few areas some exceptions allowing the use of motorized equipment or mechanical transport are described in the special regulations in effect for a specific area. Contact the agency for more information about regulations.<p><b>Contact Information:</b><blockquote><p>WILDERNESS INFORMATION CENTER<br>600 East Park Ave.<br>Port Angeles, WA 98362<br>Phone: (360) 565-3100<br>Fax: (360) 565-3108<br>Email: <a href=mailto:\"olym_wic@nps.gov\">olym_wic@nps.gov</a></blockquote>",
      "RecAreaMapURL": "http://www.wilderness.net/index.cfm?fuse=NWPS&latitude=47.8044649672&longitude=-123.643358648&zoom=9",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Olympic National Park and the Olympic Wilderness are located on the Olympic Peninsula in northwestern Washington State.",
      "Keywords": "",
      "RecAreaName": "Olympic Wilderness"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2013-04-10",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 12885,
      "RecAreaPhone": "",
      "RecAreaDescription": "<br>The Organ Pipe Cactus Wilderness now contains a total of 312,600 acres and is managed by the National Park Service. All of the Wilderness is in the state of Arizona. In 1978 the Organ Pipe Cactus Wilderness became part of the now over 109 million acre National Wilderness Preservation System. In wilderness, you can enjoy challenging recreational activities and extraordinary opportunities for solitude. In an age of <em>&quot;...increasing population, accompanied by expanding settlement and growing mechanization,...&quot;</em> you play an important role in helping to <em>&quot;...secure for the American people of present and future generations the benefits of an enduring resource of wilderness&quot;</em> as called for by Congress in the <a href=\"http://www.wilderness.net/index.cfm?fuse=NWPS&amp;sec=legisact\">Wilderness Act of 1964</a>. Please follow the regulations in place for this area, and use Leave No Trace techniques when visiting to ensure protection of its unique natural and experiential qualities.<p>How to follow the seven standard Leave No Trace principles differs in different parts of the country (desert vs. Rocky Mountains). Click on any of the principles listed below to learn more about how they apply.<p><b>Leave No Trace principles:</b><ol><li><a href=\"http://www.lnt.org/programs/principles_1.php\">Plan Ahead and Prepare</a></li><li><a href=\"http://www.lnt.org/programs/principles_2.php\">Travel and Camp on Durable Surfaces</a></li><li><a href=\"http://www.lnt.org/programs/principles_3.php\">Dispose of Waste Properly</a></li><li><a href=\"http://www.lnt.org/programs/principles_4.php\">Leave What You Find</a></li><li><a href=\"http://www.lnt.org/programs/principles_5.php\">Minimize Campfire Impacts</a></li><li><a href=\"http://www.lnt.org/programs/principles_6.php\">Respect Wildlife</a></li><li><a href=\"http://www.lnt.org/programs/principles_7.php\">Be Considerate of Other Visitors</a></li></ol><p><b>Regulations:</b><br>Motorized equipment and equipment used for mechanical transport are generally prohibited on all federal lands designated as wilderness. This includes the use of motor vehicles (including OHVs), motorboats, motorized equipment, bicycles, hang gliders, wagons, carts, portage wheels, and the landing of aircraft including helicopters, unless provided for in specific legislation. In a few areas some exceptions allowing the use of motorized equipment or mechanical transport are described in the special regulations in effect for a specific area. Contact the agency for more information about regulations.<p><b>Contact Information:</b><blockquote><p>ORGAN PIPE CACTUS NATIONAL MONUMENT<br>10 Organ Pipe Dr.<br>Ajo, AZ 85321-9626<br>Phone: 520-387-6849<br>Fax: 520-387-7144</blockquote>",
      "RecAreaMapURL": "http://www.wilderness.net/index.cfm?fuse=NWPS&latitude=32.0378236486&longitude=-112.858274985&zoom=9",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Organ Pipe Cactus Wilderness"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2013-04-10",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 12886,
      "RecAreaPhone": "",
      "RecAreaDescription": "<br>The Otis Pike Fire Island High Dune Wilderness now contains a total of 1,380 acres and is managed by the National Park Service. All of the Wilderness is in the state of New York. In 1980 the Otis Pike Fire Island High Dune Wilderness became part of the now over 109 million acre National Wilderness Preservation System. In wilderness, you can enjoy challenging recreational activities and extraordinary opportunities for solitude. In an age of <em>&quot;...increasing population, accompanied by expanding settlement and growing mechanization,...&quot;</em> you play an important role in helping to <em>&quot;...secure for the American people of present and future generations the benefits of an enduring resource of wilderness&quot;</em> as called for by Congress in the <a href=\"http://www.wilderness.net/index.cfm?fuse=NWPS&amp;sec=legisact\">Wilderness Act of 1964</a>. Please follow the regulations in place for this area, and use Leave No Trace techniques when visiting to ensure protection of its unique natural and experiential qualities.<p>How to follow the seven standard Leave No Trace principles differs in different parts of the country (desert vs. Rocky Mountains). Click on any of the principles listed below to learn more about how they apply.<p><b>Leave No Trace principles:</b><ol><li><a href=\"http://www.lnt.org/programs/principles_1.php\">Plan Ahead and Prepare</a></li><li><a href=\"http://www.lnt.org/programs/principles_2.php\">Travel and Camp on Durable Surfaces</a></li><li><a href=\"http://www.lnt.org/programs/principles_3.php\">Dispose of Waste Properly</a></li><li><a href=\"http://www.lnt.org/programs/principles_4.php\">Leave What You Find</a></li><li><a href=\"http://www.lnt.org/programs/principles_5.php\">Minimize Campfire Impacts</a></li><li><a href=\"http://www.lnt.org/programs/principles_6.php\">Respect Wildlife</a></li><li><a href=\"http://www.lnt.org/programs/principles_7.php\">Be Considerate of Other Visitors</a></li></ol><p><b>Regulations:</b><br>Motorized equipment and equipment used for mechanical transport are generally prohibited on all federal lands designated as wilderness. This includes the use of motor vehicles (including OHVs), motorboats, motorized equipment, bicycles, hang gliders, wagons, carts, portage wheels, and the landing of aircraft including helicopters, unless provided for in specific legislation. In a few areas some exceptions allowing the use of motorized equipment or mechanical transport are described in the special regulations in effect for a specific area. Contact the agency for more information about regulations.<p><b>Contact Information:</b><blockquote><p>FIRE ISLAND NATIONAL SEASHORE<br>120 Laurel St.<br>Patchaguo, NY 11772<br>Phone: 631-281-3010<br>Fax: 631-289-4898<br>Watch Hill Visitor Center 631-597-6455 (July though Labor Day)<br>Fire Island National Seashore Park Headquarters 631-687-4750\n\nFire Island NS Interpretation Division \n631-687-4765<p>PARK HEADQUARTERS<br>120 Laurel Street<br>Patchogue, NY 11772<br>Phone: 631-687-4750<br>Fax: 631-289-4898<br>Office Hours:8am-4:30pm Monday-Friday</blockquote>",
      "RecAreaMapURL": "http://www.wilderness.net/index.cfm?fuse=NWPS&latitude=40.7141259956&longitude=-72.9262674182&zoom=13",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>The Otis Pike Fire Island High Dune Wilderness Area and visitor center is located within Fire Island National Seashore just 60 miles east of New York City.  Located on the eastern end of Fire Island, the wilderness is only accessible by foot.  Parking is available in the adjacent Suffolk County Park, Smith Point, at the southern end of William Floyd Parkway.  The western end of the wilderness is accessible from Watch Hill.  The Watch Hill ferry operates from Patchogue, May through October.  The wilderness area begins at the eastern end of the Watch Hill campground.  The wilderness area can also be accessed by private boat by anchoring off in the Great South Bay and wadding onto shore or docking at Old Inlet or Bellport Beach.",
      "Keywords": "",
      "RecAreaName": "Otis Pike Fire Island High Dune Wilderness"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2013-04-10",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 12887,
      "RecAreaPhone": "",
      "RecAreaDescription": "<br>The Petrified Forest National Wilderness Area now contains a total of 50,260 acres and is managed by the National Park Service. All of the Wilderness is in the state of Arizona. In 1970 the Petrified Forest National Wilderness Area became part of the now over 109 million acre National Wilderness Preservation System. In wilderness, you can enjoy challenging recreational activities and extraordinary opportunities for solitude. In an age of <em>&quot;...increasing population, accompanied by expanding settlement and growing mechanization,...&quot;</em> you play an important role in helping to <em>&quot;...secure for the American people of present and future generations the benefits of an enduring resource of wilderness&quot;</em> as called for by Congress in the <a href=\"http://www.wilderness.net/index.cfm?fuse=NWPS&amp;sec=legisact\">Wilderness Act of 1964</a>. Please follow the regulations in place for this area, and use Leave No Trace techniques when visiting to ensure protection of its unique natural and experiential qualities.<p>How to follow the seven standard Leave No Trace principles differs in different parts of the country (desert vs. Rocky Mountains). Click on any of the principles listed below to learn more about how they apply.<p><b>Leave No Trace principles:</b><ol><li><a href=\"http://www.lnt.org/programs/principles_1.php\">Plan Ahead and Prepare</a></li><li><a href=\"http://www.lnt.org/programs/principles_2.php\">Travel and Camp on Durable Surfaces</a></li><li><a href=\"http://www.lnt.org/programs/principles_3.php\">Dispose of Waste Properly</a></li><li><a href=\"http://www.lnt.org/programs/principles_4.php\">Leave What You Find</a></li><li><a href=\"http://www.lnt.org/programs/principles_5.php\">Minimize Campfire Impacts</a></li><li><a href=\"http://www.lnt.org/programs/principles_6.php\">Respect Wildlife</a></li><li><a href=\"http://www.lnt.org/programs/principles_7.php\">Be Considerate of Other Visitors</a></li></ol><p><b>Regulations:</b><br>Motorized equipment and equipment used for mechanical transport are generally prohibited on all federal lands designated as wilderness. This includes the use of motor vehicles (including OHVs), motorboats, motorized equipment, bicycles, hang gliders, wagons, carts, portage wheels, and the landing of aircraft including helicopters, unless provided for in specific legislation. In a few areas some exceptions allowing the use of motorized equipment or mechanical transport are described in the special regulations in effect for a specific area. Contact the agency for more information about regulations.<p><b>Contact Information:</b><blockquote><p>PETRIFIED FOREST NATIONAL PARK<br>P.O. Box 2217<br>Petrified Forest, AZ 86028<br>Phone: 927-524-6228<br>Fax: 928-524-3567</blockquote>",
      "RecAreaMapURL": "http://www.wilderness.net/index.cfm?fuse=NWPS&latitude=35.0740455794&longitude=-109.811156878&zoom=11",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Petrified Forest National Wilderness Area"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2013-04-10",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 12888,
      "RecAreaPhone": "",
      "RecAreaDescription": "<br>The Phillip Burton Wilderness now contains a total of 26,025 acres and is managed by the National Park Service. All of the Wilderness is in the state of California. In 1976 the Phillip Burton Wilderness became part of the now over 109 million acre National Wilderness Preservation System. In wilderness, you can enjoy challenging recreational activities and extraordinary opportunities for solitude. In an age of <em>&quot;...increasing population, accompanied by expanding settlement and growing mechanization,...&quot;</em> you play an important role in helping to <em>&quot;...secure for the American people of present and future generations the benefits of an enduring resource of wilderness&quot;</em> as called for by Congress in the <a href=\"http://www.wilderness.net/index.cfm?fuse=NWPS&amp;sec=legisact\">Wilderness Act of 1964</a>. Please follow the regulations in place for this area, and use Leave No Trace techniques when visiting to ensure protection of its unique natural and experiential qualities.<p>How to follow the seven standard Leave No Trace principles differs in different parts of the country (desert vs. Rocky Mountains). Click on any of the principles listed below to learn more about how they apply.<p><b>Leave No Trace principles:</b><ol><li><a href=\"http://www.lnt.org/programs/principles_1.php\">Plan Ahead and Prepare</a></li><li><a href=\"http://www.lnt.org/programs/principles_2.php\">Travel and Camp on Durable Surfaces</a></li><li><a href=\"http://www.lnt.org/programs/principles_3.php\">Dispose of Waste Properly</a></li><li><a href=\"http://www.lnt.org/programs/principles_4.php\">Leave What You Find</a></li><li><a href=\"http://www.lnt.org/programs/principles_5.php\">Minimize Campfire Impacts</a></li><li><a href=\"http://www.lnt.org/programs/principles_6.php\">Respect Wildlife</a></li><li><a href=\"http://www.lnt.org/programs/principles_7.php\">Be Considerate of Other Visitors</a></li></ol><p><b>Regulations:</b><br>Motorized equipment and equipment used for mechanical transport are generally prohibited on all federal lands designated as wilderness. This includes the use of motor vehicles (including OHVs), motorboats, motorized equipment, bicycles, hang gliders, wagons, carts, portage wheels, and the landing of aircraft including helicopters, unless provided for in specific legislation. In a few areas some exceptions allowing the use of motorized equipment or mechanical transport are described in the special regulations in effect for a specific area. Contact the agency for more information about regulations.<p><b>Contact Information:</b><blockquote><p>POINT REYES NATIONAL SEASHORE<br>1 Bear Valley Rd.<br>Point Reyes Station, CA 94956<br>Phone: 415-464-5100<br>Fax: 415-663-8132<p>CAMPING RESERVATIONS<br>Point Reyes National Seashore\n1 Bear Valley Road<br>1 Bear Valley Road<br>Point Reyes Station , CA 94956<br>Phone: (415) 663-8054<br>Fax: (415) 451-8142<br>9:00 AM - 2:00 PM Monday-Friday</blockquote>",
      "RecAreaMapURL": "http://www.wilderness.net/index.cfm?fuse=NWPS&latitude=38.0349708164&longitude=-122.841038858&zoom=12",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>The Phillip Burton Wilderness is located within the Point Reyes National Seashore. It is located about 40 miles north of San Francisco and is within about a 1-hour drive from the city.  The most direct route to the Seashore and the wilderness from the north or south is to take California Highway 101 to the Sir Francis Drake Highway. Exit in Larkspur, CA.  A 20-mile trip along Sir Francis Drake Highway leads to California Highway One in the town of Olema, CA.  Follow Highway One north for a quarter-mile, turn left onto Bear Valley Road and travel one-half mile to the Seashore entrance.",
      "Keywords": "",
      "RecAreaName": "Phillip Burton Wilderness"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2013-04-10",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 12889,
      "RecAreaPhone": "",
      "RecAreaDescription": "<br>The Pinnacles Wilderness now contains a total of 15,985 acres and is managed by the National Park Service. All of the Wilderness is in the state of California. In 1976 the Pinnacles Wilderness became part of the now over 109 million acre National Wilderness Preservation System. In wilderness, you can enjoy challenging recreational activities and extraordinary opportunities for solitude. In an age of <em>&quot;...increasing population, accompanied by expanding settlement and growing mechanization,...&quot;</em> you play an important role in helping to <em>&quot;...secure for the American people of present and future generations the benefits of an enduring resource of wilderness&quot;</em> as called for by Congress in the <a href=\"http://www.wilderness.net/index.cfm?fuse=NWPS&amp;sec=legisact\">Wilderness Act of 1964</a>. Please follow the regulations in place for this area, and use Leave No Trace techniques when visiting to ensure protection of its unique natural and experiential qualities.<p>How to follow the seven standard Leave No Trace principles differs in different parts of the country (desert vs. Rocky Mountains). Click on any of the principles listed below to learn more about how they apply.<p><b>Leave No Trace principles:</b><ol><li><a href=\"http://www.lnt.org/programs/principles_1.php\">Plan Ahead and Prepare</a></li><li><a href=\"http://www.lnt.org/programs/principles_2.php\">Travel and Camp on Durable Surfaces</a></li><li><a href=\"http://www.lnt.org/programs/principles_3.php\">Dispose of Waste Properly</a></li><li><a href=\"http://www.lnt.org/programs/principles_4.php\">Leave What You Find</a></li><li><a href=\"http://www.lnt.org/programs/principles_5.php\">Minimize Campfire Impacts</a></li><li><a href=\"http://www.lnt.org/programs/principles_6.php\">Respect Wildlife</a></li><li><a href=\"http://www.lnt.org/programs/principles_7.php\">Be Considerate of Other Visitors</a></li></ol><p><b>Regulations:</b><br>Motorized equipment and equipment used for mechanical transport are generally prohibited on all federal lands designated as wilderness. This includes the use of motor vehicles (including OHVs), motorboats, motorized equipment, bicycles, hang gliders, wagons, carts, portage wheels, and the landing of aircraft including helicopters, unless provided for in specific legislation. In a few areas some exceptions allowing the use of motorized equipment or mechanical transport are described in the special regulations in effect for a specific area. Contact the agency for more information about regulations.<p><b>Contact Information:</b><blockquote><p>PINNACLES NATIONAL MONUMENT<br>5000 Hwy. 146<br>Paicines, CA 95043<br>Phone: 831-389-4485<br>Fax: 831-389-4489</blockquote>",
      "RecAreaMapURL": "http://www.wilderness.net/index.cfm?fuse=NWPS&latitude=36.4936373467&longitude=-121.190556782&zoom=12",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Pinnacles Wilderness"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2013-04-10",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 12890,
      "RecAreaPhone": "",
      "RecAreaDescription": "<br>The Pinto Valley Wilderness now contains a total of 39,173 acres and is managed by the National Park Service. All of the Wilderness is in the state of Nevada. In 2002 the Pinto Valley Wilderness became part of the now over 109 million acre National Wilderness Preservation System. In wilderness, you can enjoy challenging recreational activities and extraordinary opportunities for solitude. In an age of <em>&quot;...increasing population, accompanied by expanding settlement and growing mechanization,...&quot;</em> you play an important role in helping to <em>&quot;...secure for the American people of present and future generations the benefits of an enduring resource of wilderness&quot;</em> as called for by Congress in the <a href=\"http://www.wilderness.net/index.cfm?fuse=NWPS&amp;sec=legisact\">Wilderness Act of 1964</a>. Please follow the regulations in place for this area, and use Leave No Trace techniques when visiting to ensure protection of its unique natural and experiential qualities.<p>How to follow the seven standard Leave No Trace principles differs in different parts of the country (desert vs. Rocky Mountains). Click on any of the principles listed below to learn more about how they apply.<p><b>Leave No Trace principles:</b><ol><li><a href=\"http://www.lnt.org/programs/principles_1.php\">Plan Ahead and Prepare</a></li><li><a href=\"http://www.lnt.org/programs/principles_2.php\">Travel and Camp on Durable Surfaces</a></li><li><a href=\"http://www.lnt.org/programs/principles_3.php\">Dispose of Waste Properly</a></li><li><a href=\"http://www.lnt.org/programs/principles_4.php\">Leave What You Find</a></li><li><a href=\"http://www.lnt.org/programs/principles_5.php\">Minimize Campfire Impacts</a></li><li><a href=\"http://www.lnt.org/programs/principles_6.php\">Respect Wildlife</a></li><li><a href=\"http://www.lnt.org/programs/principles_7.php\">Be Considerate of Other Visitors</a></li></ol><p><b>Regulations:</b><br>Motorized equipment and equipment used for mechanical transport are generally prohibited on all federal lands designated as wilderness. This includes the use of motor vehicles (including OHVs), motorboats, motorized equipment, bicycles, hang gliders, wagons, carts, portage wheels, and the landing of aircraft including helicopters, unless provided for in specific legislation. In a few areas some exceptions allowing the use of motorized equipment or mechanical transport are described in the special regulations in effect for a specific area. Contact the agency for more information about regulations.<p><b>Contact Information:</b><blockquote><p>LAKE MEAD NATIONAL RECREATION AREA<br>601 Nevada Way<br>Boulder City, NV 89005<br>Phone: 702-293-8990<br>Fax: 702-293-8936</blockquote>",
      "RecAreaMapURL": "http://www.wilderness.net/index.cfm?fuse=NWPS&latitude=36.1916632901&longitude=-114.584564649&zoom=11",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Pinto Valley Wilderness"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2013-04-10",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 12891,
      "RecAreaPhone": "",
      "RecAreaDescription": "<br>The Rocky Mountain National Park Wilderness now contains a total of 249,339 acres and is managed by the National Park Service. All of the Wilderness is in the state of Colorado. In 2009 the Rocky Mountain National Park Wilderness became part of the now over 109 million acre National Wilderness Preservation System. In wilderness, you can enjoy challenging recreational activities and extraordinary opportunities for solitude. In an age of <em>&quot;...increasing population, accompanied by expanding settlement and growing mechanization,...&quot;</em> you play an important role in helping to <em>&quot;...secure for the American people of present and future generations the benefits of an enduring resource of wilderness&quot;</em> as called for by Congress in the <a href=\"http://www.wilderness.net/index.cfm?fuse=NWPS&amp;sec=legisact\">Wilderness Act of 1964</a>. Please follow the regulations in place for this area, and use Leave No Trace techniques when visiting to ensure protection of its unique natural and experiential qualities.<p>How to follow the seven standard Leave No Trace principles differs in different parts of the country (desert vs. Rocky Mountains). Click on any of the principles listed below to learn more about how they apply.<p><b>Leave No Trace principles:</b><ol><li><a href=\"http://www.lnt.org/programs/principles_1.php\">Plan Ahead and Prepare</a></li><li><a href=\"http://www.lnt.org/programs/principles_2.php\">Travel and Camp on Durable Surfaces</a></li><li><a href=\"http://www.lnt.org/programs/principles_3.php\">Dispose of Waste Properly</a></li><li><a href=\"http://www.lnt.org/programs/principles_4.php\">Leave What You Find</a></li><li><a href=\"http://www.lnt.org/programs/principles_5.php\">Minimize Campfire Impacts</a></li><li><a href=\"http://www.lnt.org/programs/principles_6.php\">Respect Wildlife</a></li><li><a href=\"http://www.lnt.org/programs/principles_7.php\">Be Considerate of Other Visitors</a></li></ol><p><b>Regulations:</b><br>Motorized equipment and equipment used for mechanical transport are generally prohibited on all federal lands designated as wilderness. This includes the use of motor vehicles (including OHVs), motorboats, motorized equipment, bicycles, hang gliders, wagons, carts, portage wheels, and the landing of aircraft including helicopters, unless provided for in specific legislation. In a few areas some exceptions allowing the use of motorized equipment or mechanical transport are described in the special regulations in effect for a specific area. Contact the agency for more information about regulations.",
      "RecAreaMapURL": "http://www.wilderness.net/index.cfm?fuse=NWPS&latitude=40.3575268746&longitude=-105.700395749&zoom=12",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Seventy miles northwest of Denver, spanning Grand and Larimer counties, the park is cherished by the residents of Grand, Larimer, Boulder and Denver counties, and appreciated by visitors from around the world. The towns of Grand Lake and Estes Park serve as &#x201C;gateways&#x201D; to the park, and the tourism that the park&#x2019;s wildlife and wilderness attract is a major source of economic stability for local businesses. Adjacent to Indian Peaks Wilderness and Comanche Peaks Wilderness to the south and to Never Summer Wilderness to the west, the park is also surrounded by Routt, Roosevelt and Arapaho national forests.",
      "Keywords": "",
      "RecAreaName": "Rocky Mountain National Park Wilderness"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2013-04-10",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 12892,
      "RecAreaPhone": "",
      "RecAreaDescription": "<br>The Saguaro Wilderness now contains a total of 70,905 acres and is managed by the National Park Service. All of the Wilderness is in the state of Arizona. In 1976 the Saguaro Wilderness became part of the now over 109 million acre National Wilderness Preservation System. In wilderness, you can enjoy challenging recreational activities and extraordinary opportunities for solitude. In an age of <em>&quot;...increasing population, accompanied by expanding settlement and growing mechanization,...&quot;</em> you play an important role in helping to <em>&quot;...secure for the American people of present and future generations the benefits of an enduring resource of wilderness&quot;</em> as called for by Congress in the <a href=\"http://www.wilderness.net/index.cfm?fuse=NWPS&amp;sec=legisact\">Wilderness Act of 1964</a>. Please follow the regulations in place for this area, and use Leave No Trace techniques when visiting to ensure protection of its unique natural and experiential qualities.<p>How to follow the seven standard Leave No Trace principles differs in different parts of the country (desert vs. Rocky Mountains). Click on any of the principles listed below to learn more about how they apply.<p><b>Leave No Trace principles:</b><ol><li><a href=\"http://www.lnt.org/programs/principles_1.php\">Plan Ahead and Prepare</a></li><li><a href=\"http://www.lnt.org/programs/principles_2.php\">Travel and Camp on Durable Surfaces</a></li><li><a href=\"http://www.lnt.org/programs/principles_3.php\">Dispose of Waste Properly</a></li><li><a href=\"http://www.lnt.org/programs/principles_4.php\">Leave What You Find</a></li><li><a href=\"http://www.lnt.org/programs/principles_5.php\">Minimize Campfire Impacts</a></li><li><a href=\"http://www.lnt.org/programs/principles_6.php\">Respect Wildlife</a></li><li><a href=\"http://www.lnt.org/programs/principles_7.php\">Be Considerate of Other Visitors</a></li></ol><p><b>Regulations:</b><br>Motorized equipment and equipment used for mechanical transport are generally prohibited on all federal lands designated as wilderness. This includes the use of motor vehicles (including OHVs), motorboats, motorized equipment, bicycles, hang gliders, wagons, carts, portage wheels, and the landing of aircraft including helicopters, unless provided for in specific legislation. In a few areas some exceptions allowing the use of motorized equipment or mechanical transport are described in the special regulations in effect for a specific area. Contact the agency for more information about regulations.<p><b>Contact Information:</b><blockquote><p>SAGUARO NATIONAL PARK-RINCON MOUNTAIN DISTRICT<br>3693 South Old Spanish Trail<br>Tucson, AZ 85730-5601<br>Phone: 520-733-5153<br>Fax: 520-733-5183<p>SAGUARO NATIONAL PARK-TUCSON MOUNTAIN DISTRICT<br>2700 North Kinney Rd.<br>Tucson, AZ 85743<br>Phone: 520-733-5158<br>Fax: 520-733-5183</blockquote>",
      "RecAreaMapURL": "http://www.wilderness.net/index.cfm?fuse=NWPS&latitude=32.1956255958&longitude=-110.695808029&zoom=11",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Saguaro Wilderness"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2013-04-10",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 12893,
      "RecAreaPhone": "",
      "RecAreaDescription": "<br>The Sangre de Cristo Wilderness now contains a total of 228,044 acres and is managed by the Forest Service and the National Park Service. All of the Wilderness is in the state of Colorado. In 1993 the Sangre de Cristo Wilderness became part of the now over 109 million acre National Wilderness Preservation System. In wilderness, you can enjoy challenging recreational activities and extraordinary opportunities for solitude. In an age of <em>&quot;...increasing population, accompanied by expanding settlement and growing mechanization,...&quot;</em> you play an important role in helping to <em>&quot;...secure for the American people of present and future generations the benefits of an enduring resource of wilderness&quot;</em> as called for by Congress in the <a href=\"http://www.wilderness.net/index.cfm?fuse=NWPS&amp;sec=legisact\">Wilderness Act of 1964</a>. Please follow the regulations in place for this area, and use Leave No Trace techniques when visiting to ensure protection of its unique natural and experiential qualities.<p>How to follow the seven standard Leave No Trace principles differs in different parts of the country (desert vs. Rocky Mountains). Click on any of the principles listed below to learn more about how they apply.<p><b>Leave No Trace principles:</b><ol><li><a href=\"http://www.lnt.org/programs/principles_1.php\">Plan Ahead and Prepare</a></li><li><a href=\"http://www.lnt.org/programs/principles_2.php\">Travel and Camp on Durable Surfaces</a></li><li><a href=\"http://www.lnt.org/programs/principles_3.php\">Dispose of Waste Properly</a></li><li><a href=\"http://www.lnt.org/programs/principles_4.php\">Leave What You Find</a></li><li><a href=\"http://www.lnt.org/programs/principles_5.php\">Minimize Campfire Impacts</a></li><li><a href=\"http://www.lnt.org/programs/principles_6.php\">Respect Wildlife</a></li><li><a href=\"http://www.lnt.org/programs/principles_7.php\">Be Considerate of Other Visitors</a></li></ol><p><b>Regulations:</b><br>Motorized equipment and equipment used for mechanical transport are generally prohibited on all federal lands designated as wilderness. This includes the use of motor vehicles (including OHVs), motorboats, motorized equipment, bicycles, hang gliders, wagons, carts, portage wheels, and the landing of aircraft including helicopters, unless provided for in specific legislation. In a few areas some exceptions allowing the use of motorized equipment or mechanical transport are described in the special regulations in effect for a specific area. <a href=\"http://www.wilderness.net/index.cfm?fuse=NWPS&amp;sec=wildView&amp;tab=Area%20Management&amp;WID=529#regs\">Click here for additional regulations</a> or contact the agency.<p><b>Contact Information:</b><blockquote><p>GREAT SAND DUNES NATIONAL PARK AND PRESERVE<br>11999 Highway 150<br>Mosca, CO 81146<br>Phone: 719-378-6399<br>Fax: 719-378-6310<br>Email: <a href=mailto:\"grsa_interpretation@nps.gov\">grsa_interpretation@nps.gov</a><br>Visitor Center hours are 9:00 a.m -4:30 p.m in the off season and 9:00 a.m. - 6:00 p.m. from mid-May to mid-September. <p>SAN CARLOS RANGER DISTRICT<br>3028 EAST MAIN STREET<br>CANON CITY, CO 81212<br>Phone: 719-269-8500</blockquote>",
      "RecAreaMapURL": "http://www.wilderness.net/index.cfm?fuse=NWPS&latitude=38.133558&longitude=-105.668312&zoom=10",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>A portion of the wilderness area is located within Great Sand Dunes National Preserve which is located adjacent to Great Sand Dunes National Park.  The Medano Pass 4-wheel drive primitive road passes through a corridor within the wilderness area and can be accessed from the west side through Great Sand Dunes National Park or from the east side off Colorado Highway 69 about 25 miles south of the town of Westcliffe.  Two other roads, one leading to the top of Mosca Pass and the other leading to the east side of Music Pass provide access to hiking trails leading into the wilderness area and preserve.",
      "Keywords": "",
      "RecAreaName": "Sangre de Cristo Wilderness"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2013-04-10",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 12894,
      "RecAreaPhone": "",
      "RecAreaDescription": "<br>The Sequoia-Kings Canyon Wilderness now contains a total of 768,222 acres and is managed by the National Park Service. All of the Wilderness is in the state of California. In 1984 the Sequoia-Kings Canyon Wilderness became part of the now over 109 million acre National Wilderness Preservation System. In wilderness, you can enjoy challenging recreational activities and extraordinary opportunities for solitude. In an age of <em>&quot;...increasing population, accompanied by expanding settlement and growing mechanization,...&quot;</em> you play an important role in helping to <em>&quot;...secure for the American people of present and future generations the benefits of an enduring resource of wilderness&quot;</em> as called for by Congress in the <a href=\"http://www.wilderness.net/index.cfm?fuse=NWPS&amp;sec=legisact\">Wilderness Act of 1964</a>. Please follow the regulations in place for this area, and use Leave No Trace techniques when visiting to ensure protection of its unique natural and experiential qualities.<p>How to follow the seven standard Leave No Trace principles differs in different parts of the country (desert vs. Rocky Mountains). Click on any of the principles listed below to learn more about how they apply.<p><b>Leave No Trace principles:</b><ol><li><a href=\"http://www.lnt.org/programs/principles_1.php\">Plan Ahead and Prepare</a></li><li><a href=\"http://www.lnt.org/programs/principles_2.php\">Travel and Camp on Durable Surfaces</a></li><li><a href=\"http://www.lnt.org/programs/principles_3.php\">Dispose of Waste Properly</a></li><li><a href=\"http://www.lnt.org/programs/principles_4.php\">Leave What You Find</a></li><li><a href=\"http://www.lnt.org/programs/principles_5.php\">Minimize Campfire Impacts</a></li><li><a href=\"http://www.lnt.org/programs/principles_6.php\">Respect Wildlife</a></li><li><a href=\"http://www.lnt.org/programs/principles_7.php\">Be Considerate of Other Visitors</a></li></ol><p><b>Regulations:</b><br>Motorized equipment and equipment used for mechanical transport are generally prohibited on all federal lands designated as wilderness. This includes the use of motor vehicles (including OHVs), motorboats, motorized equipment, bicycles, hang gliders, wagons, carts, portage wheels, and the landing of aircraft including helicopters, unless provided for in specific legislation. In a few areas some exceptions allowing the use of motorized equipment or mechanical transport are described in the special regulations in effect for a specific area. Contact the agency for more information about regulations.<p><b>Contact Information:</b><blockquote><p>SEQUOIA & KINGS CANYON WILDERNESS OFFICE<br>47050 Generals Hwy #60<br>Three Rivers, CA 93271<br>Phone: 559-565-3766<br>Fax: 559-565-4239<p>SEQUOIA AND KINGS CANYON NATIONAL PARKS<br>47050 Generals Highway<br>Three Rivers, CA 93271-9651<br>Phone: 559-565-3341<br>Fax: 559-565-3730</blockquote>",
      "RecAreaMapURL": "http://www.wilderness.net/index.cfm?fuse=NWPS&latitude=36.765167&longitude=-118.544258&zoom=9",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Sequoia-Kings Canyon Wilderness"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2013-04-10",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 12895,
      "RecAreaPhone": "",
      "RecAreaDescription": "<br>The Shenandoah Wilderness now contains a total of 79,579 acres and is managed by the National Park Service. All of the Wilderness is in the state of Virginia. In 1976 the Shenandoah Wilderness became part of the now over 109 million acre National Wilderness Preservation System. In wilderness, you can enjoy challenging recreational activities and extraordinary opportunities for solitude. In an age of <em>&quot;...increasing population, accompanied by expanding settlement and growing mechanization,...&quot;</em> you play an important role in helping to <em>&quot;...secure for the American people of present and future generations the benefits of an enduring resource of wilderness&quot;</em> as called for by Congress in the <a href=\"http://www.wilderness.net/index.cfm?fuse=NWPS&amp;sec=legisact\">Wilderness Act of 1964</a>. Please follow the regulations in place for this area, and use Leave No Trace techniques when visiting to ensure protection of its unique natural and experiential qualities.<p>How to follow the seven standard Leave No Trace principles differs in different parts of the country (desert vs. Rocky Mountains). Click on any of the principles listed below to learn more about how they apply.<p><b>Leave No Trace principles:</b><ol><li><a href=\"http://www.lnt.org/programs/principles_1.php\">Plan Ahead and Prepare</a></li><li><a href=\"http://www.lnt.org/programs/principles_2.php\">Travel and Camp on Durable Surfaces</a></li><li><a href=\"http://www.lnt.org/programs/principles_3.php\">Dispose of Waste Properly</a></li><li><a href=\"http://www.lnt.org/programs/principles_4.php\">Leave What You Find</a></li><li><a href=\"http://www.lnt.org/programs/principles_5.php\">Minimize Campfire Impacts</a></li><li><a href=\"http://www.lnt.org/programs/principles_6.php\">Respect Wildlife</a></li><li><a href=\"http://www.lnt.org/programs/principles_7.php\">Be Considerate of Other Visitors</a></li></ol><p><b>Regulations:</b><br>Motorized equipment and equipment used for mechanical transport are generally prohibited on all federal lands designated as wilderness. This includes the use of motor vehicles (including OHVs), motorboats, motorized equipment, bicycles, hang gliders, wagons, carts, portage wheels, and the landing of aircraft including helicopters, unless provided for in specific legislation. In a few areas some exceptions allowing the use of motorized equipment or mechanical transport are described in the special regulations in effect for a specific area. Contact the agency for more information about regulations.<p><b>Contact Information:</b><blockquote><p>SHENANDOAH NATIONAL PARK<br>3655 U.S. Highway 211 East<br>Luray, VA 22835-9036<br>Phone: 540-999-3500<br>Fax: 540-999-3601</blockquote>",
      "RecAreaMapURL": "http://www.wilderness.net/index.cfm?fuse=NWPS&latitude=38.4976715622&longitude=-78.4787448079&zoom=11",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Shenandoah Wilderness"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -114.731579,
          35.269214
        ]
      },
      "LastUpdatedDate": "2013-04-10",
      "RecAreaEmail": "lvfoweb@blm.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -114.731579,
      "RecAreaID": 12896,
      "RecAreaPhone": "702-515-5000",
      "RecAreaDescription": "<br>The Spirit Mountain Wilderness now contains a total of 33,518 acres and is managed by the Bureau of Land Management and the National Park Service. All of the Wilderness is in the state of Nevada. In 2002 the Spirit Mountain Wilderness became part of the now over 109 million acre National Wilderness Preservation System. In wilderness, you can enjoy challenging recreational activities and extraordinary opportunities for solitude. In an age of <em>&quot;...increasing population, accompanied by expanding settlement and growing mechanization,...&quot;</em> you play an important role in helping to <em>&quot;...secure for the American people of present and future generations the benefits of an enduring resource of wilderness&quot;</em> as called for by Congress in the <a href=\"http://www.wilderness.net/index.cfm?fuse=NWPS&amp;sec=legisact\">Wilderness Act of 1964</a>. Please follow the regulations in place for this area, and use Leave No Trace techniques when visiting to ensure protection of its unique natural and experiential qualities.<p>How to follow the seven standard Leave No Trace principles differs in different parts of the country (desert vs. Rocky Mountains). Click on any of the principles listed below to learn more about how they apply.<p><b>Leave No Trace principles:</b><ol><li><a href=\"http://www.lnt.org/programs/principles_1.php\">Plan Ahead and Prepare</a></li><li><a href=\"http://www.lnt.org/programs/principles_2.php\">Travel and Camp on Durable Surfaces</a></li><li><a href=\"http://www.lnt.org/programs/principles_3.php\">Dispose of Waste Properly</a></li><li><a href=\"http://www.lnt.org/programs/principles_4.php\">Leave What You Find</a></li><li><a href=\"http://www.lnt.org/programs/principles_5.php\">Minimize Campfire Impacts</a></li><li><a href=\"http://www.lnt.org/programs/principles_6.php\">Respect Wildlife</a></li><li><a href=\"http://www.lnt.org/programs/principles_7.php\">Be Considerate of Other Visitors</a></li></ol><p><b>Regulations:</b><br>Motorized equipment and equipment used for mechanical transport are generally prohibited on all federal lands designated as wilderness. This includes the use of motor vehicles (including OHVs), motorboats, motorized equipment, bicycles, hang gliders, wagons, carts, portage wheels, and the landing of aircraft including helicopters, unless provided for in specific legislation. In a few areas some exceptions allowing the use of motorized equipment or mechanical transport are described in the special regulations in effect for a specific area. Contact the agency for more information about regulations.<p><b>Contact Information:</b><blockquote><p>LAS VEGAS FIELD OFFICE, DIVISION OF NLCS<br>BLM, Las Vegas Field Office<br>4701 N. Torrey Pines Dr.<br>Las Vegas, NV 89130<br>Phone: 702-515-5000<p>LAKE MEAD NATIONAL RECREATION AREA<br>601 Nevada Way<br>Boulder City, NV 89005<br>Phone: 702-293-8990<br>Fax: 702-293-8936</blockquote>",
      "RecAreaMapURL": "http://www.wilderness.net/index.cfm?fuse=NWPS&latitude=35.270067&longitude=-114.65892&zoom=12",
      "RecAreaLatitude": 35.269214,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "\r\n\r\n\r\n\r\n\r\n\r\n\r\n",
      "Keywords": "",
      "RecAreaName": "Spirit Mountain Wilderness"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2013-04-10",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 12897,
      "RecAreaPhone": "",
      "RecAreaDescription": "<br>The Stephen Mather Wilderness now contains a total of 634,614 acres and is managed by the National Park Service. All of the Wilderness is in the state of Washington. In 1988 the Stephen Mather Wilderness became part of the now over 109 million acre National Wilderness Preservation System. In wilderness, you can enjoy challenging recreational activities and extraordinary opportunities for solitude. In an age of <em>&quot;...increasing population, accompanied by expanding settlement and growing mechanization,...&quot;</em> you play an important role in helping to <em>&quot;...secure for the American people of present and future generations the benefits of an enduring resource of wilderness&quot;</em> as called for by Congress in the <a href=\"http://www.wilderness.net/index.cfm?fuse=NWPS&amp;sec=legisact\">Wilderness Act of 1964</a>. Please follow the regulations in place for this area, and use Leave No Trace techniques when visiting to ensure protection of its unique natural and experiential qualities.<p>How to follow the seven standard Leave No Trace principles differs in different parts of the country (desert vs. Rocky Mountains). Click on any of the principles listed below to learn more about how they apply.<p><b>Leave No Trace principles:</b><ol><li><a href=\"http://www.lnt.org/programs/principles_1.php\">Plan Ahead and Prepare</a></li><li><a href=\"http://www.lnt.org/programs/principles_2.php\">Travel and Camp on Durable Surfaces</a></li><li><a href=\"http://www.lnt.org/programs/principles_3.php\">Dispose of Waste Properly</a></li><li><a href=\"http://www.lnt.org/programs/principles_4.php\">Leave What You Find</a></li><li><a href=\"http://www.lnt.org/programs/principles_5.php\">Minimize Campfire Impacts</a></li><li><a href=\"http://www.lnt.org/programs/principles_6.php\">Respect Wildlife</a></li><li><a href=\"http://www.lnt.org/programs/principles_7.php\">Be Considerate of Other Visitors</a></li></ol><p><b>Regulations:</b><br>Motorized equipment and equipment used for mechanical transport are generally prohibited on all federal lands designated as wilderness. This includes the use of motor vehicles (including OHVs), motorboats, motorized equipment, bicycles, hang gliders, wagons, carts, portage wheels, and the landing of aircraft including helicopters, unless provided for in specific legislation. In a few areas some exceptions allowing the use of motorized equipment or mechanical transport are described in the special regulations in effect for a specific area. Contact the agency for more information about regulations.<p><b>Contact Information:</b><blockquote><p>NORTH CASCADES NATIONAL PARK<br>810 State Route 20<br>Sedro-Woolley, WA 98284-1239<br>Phone: 360-854-7200<br>Fax: 360-856-1934</blockquote>",
      "RecAreaMapURL": "http://www.wilderness.net/index.cfm?fuse=NWPS&latitude=48.690711625&longitude=-121.140665966&zoom=9",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>The Stephen Mather Wilderness in North Cascades National Park Service Complex is located in northwestern Washington State, sharing a northern border with Canada.",
      "Keywords": "",
      "RecAreaName": "Stephen Mather Wilderness"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2013-04-10",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 12898,
      "RecAreaPhone": "",
      "RecAreaDescription": "<br>Theodore Roosevelt Wilderness now contains a total of 29,920 acres and is managed by the National Park Service. All of the Wilderness is in the state of North Dakota. In 1978 Theodore Roosevelt Wilderness became part of the now over 109 million acre National Wilderness Preservation System. In wilderness, you can enjoy challenging recreational activities and extraordinary opportunities for solitude. In an age of <em>&quot;...increasing population, accompanied by expanding settlement and growing mechanization,...&quot;</em> you play an important role in helping to <em>&quot;...secure for the American people of present and future generations the benefits of an enduring resource of wilderness&quot;</em> as called for by Congress in the <a href=\"http://www.wilderness.net/index.cfm?fuse=NWPS&amp;sec=legisact\">Wilderness Act of 1964</a>. Please follow the regulations in place for this area, and use Leave No Trace techniques when visiting to ensure protection of its unique natural and experiential qualities.<p>How to follow the seven standard Leave No Trace principles differs in different parts of the country (desert vs. Rocky Mountains). Click on any of the principles listed below to learn more about how they apply.<p><b>Leave No Trace principles:</b><ol><li><a href=\"http://www.lnt.org/programs/principles_1.php\">Plan Ahead and Prepare</a></li><li><a href=\"http://www.lnt.org/programs/principles_2.php\">Travel and Camp on Durable Surfaces</a></li><li><a href=\"http://www.lnt.org/programs/principles_3.php\">Dispose of Waste Properly</a></li><li><a href=\"http://www.lnt.org/programs/principles_4.php\">Leave What You Find</a></li><li><a href=\"http://www.lnt.org/programs/principles_5.php\">Minimize Campfire Impacts</a></li><li><a href=\"http://www.lnt.org/programs/principles_6.php\">Respect Wildlife</a></li><li><a href=\"http://www.lnt.org/programs/principles_7.php\">Be Considerate of Other Visitors</a></li></ol><p><b>Regulations:</b><br>Motorized equipment and equipment used for mechanical transport are generally prohibited on all federal lands designated as wilderness. This includes the use of motor vehicles (including OHVs), motorboats, motorized equipment, bicycles, hang gliders, wagons, carts, portage wheels, and the landing of aircraft including helicopters, unless provided for in specific legislation. In a few areas some exceptions allowing the use of motorized equipment or mechanical transport are described in the special regulations in effect for a specific area. Contact the agency for more information about regulations.<p><b>Contact Information:</b><blockquote><p>THEODORE ROOSEVELT NATIONAL PARK<br>Box 7<br>Medora, ND 58645-0007<br>Phone: 701-623-4466<br>Fax: 701-623-4840<br>South Unit Information: 701-623-4466, North Unit Information: 701-842-2333.</blockquote>",
      "RecAreaMapURL": "http://www.wilderness.net/index.cfm?fuse=NWPS&latitude=47.3860870284&longitude=-103.439583565&zoom=12",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Theodore Roosevelt Wilderness"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2013-04-10",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 12899,
      "RecAreaPhone": "",
      "RecAreaDescription": "<br>The Wrangell-Saint Elias Wilderness now contains a total of 9,078,675 acres and is managed by the National Park Service. All of the Wilderness is in the state of Alaska. In 1980 the Wrangell-Saint Elias Wilderness became part of the now over 109 million acre National Wilderness Preservation System. In wilderness, you can enjoy challenging recreational activities and extraordinary opportunities for solitude. In an age of <em>&quot;...increasing population, accompanied by expanding settlement and growing mechanization,...&quot;</em> you play an important role in helping to <em>&quot;...secure for the American people of present and future generations the benefits of an enduring resource of wilderness&quot;</em> as called for by Congress in the <a href=\"http://www.wilderness.net/index.cfm?fuse=NWPS&amp;sec=legisact\">Wilderness Act of 1964</a>. Please follow the regulations in place for this area, and use Leave No Trace techniques when visiting to ensure protection of its unique natural and experiential qualities.<p>How to follow the seven standard Leave No Trace principles differs in different parts of the country (desert vs. Rocky Mountains). Click on any of the principles listed below to learn more about how they apply.<p><b>Leave No Trace principles:</b><ol><li><a href=\"http://www.lnt.org/programs/principles_1.php\">Plan Ahead and Prepare</a></li><li><a href=\"http://www.lnt.org/programs/principles_2.php\">Travel and Camp on Durable Surfaces</a></li><li><a href=\"http://www.lnt.org/programs/principles_3.php\">Dispose of Waste Properly</a></li><li><a href=\"http://www.lnt.org/programs/principles_4.php\">Leave What You Find</a></li><li><a href=\"http://www.lnt.org/programs/principles_5.php\">Minimize Campfire Impacts</a></li><li><a href=\"http://www.lnt.org/programs/principles_6.php\">Respect Wildlife</a></li><li><a href=\"http://www.lnt.org/programs/principles_7.php\">Be Considerate of Other Visitors</a></li></ol><p><b>Regulations:</b><br>Motorized equipment and equipment used for mechanical transport are generally prohibited on all federal lands designated as wilderness. This includes the use of motor vehicles (including OHVs), motorboats, motorized equipment, bicycles, hang gliders, wagons, carts, portage wheels, and the landing of aircraft including helicopters, unless provided for in specific legislation. In a few areas some exceptions allowing the use of motorized equipment or mechanical transport are described in the special regulations in effect for a specific area. Contact the agency for more information about regulations.<p><b>Contact Information:</b><blockquote><p>WRANGELL-ST. ELIAS NATIONAL PARK AND PRESERVE<br>106.8 Richardson Hwy.<br>P.O. Box 439<br>Cooper Center, AK 99573-0439<br>Phone: 907-822-5234<br>Fax: 907-822-7216<br>Nabesna District Ranger Station: 907-822-5238, Chitina District Ranger Station: 907-823-2205, Yakutat Ranger Station: 907-784-3295.</blockquote>",
      "RecAreaMapURL": "http://www.wilderness.net/index.cfm?fuse=NWPS&latitude=61.1579809895&longitude=-142.42463936&zoom=7",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Wrangell-Saint Elias Wilderness"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2013-04-10",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 12900,
      "RecAreaPhone": "",
      "RecAreaDescription": "<br>The Yosemite Wilderness now contains a total of 704,624 acres and is managed by the National Park Service. All of the Wilderness is in the state of California. In 1984 the Yosemite Wilderness became part of the now over 109 million acre National Wilderness Preservation System. In wilderness, you can enjoy challenging recreational activities and extraordinary opportunities for solitude. In an age of <em>&quot;...increasing population, accompanied by expanding settlement and growing mechanization,...&quot;</em> you play an important role in helping to <em>&quot;...secure for the American people of present and future generations the benefits of an enduring resource of wilderness&quot;</em> as called for by Congress in the <a href=\"http://www.wilderness.net/index.cfm?fuse=NWPS&amp;sec=legisact\">Wilderness Act of 1964</a>. Please follow the regulations in place for this area, and use Leave No Trace techniques when visiting to ensure protection of its unique natural and experiential qualities.<p>How to follow the seven standard Leave No Trace principles differs in different parts of the country (desert vs. Rocky Mountains). Click on any of the principles listed below to learn more about how they apply.<p><b>Leave No Trace principles:</b><ol><li><a href=\"http://www.lnt.org/programs/principles_1.php\">Plan Ahead and Prepare</a></li><li><a href=\"http://www.lnt.org/programs/principles_2.php\">Travel and Camp on Durable Surfaces</a></li><li><a href=\"http://www.lnt.org/programs/principles_3.php\">Dispose of Waste Properly</a></li><li><a href=\"http://www.lnt.org/programs/principles_4.php\">Leave What You Find</a></li><li><a href=\"http://www.lnt.org/programs/principles_5.php\">Minimize Campfire Impacts</a></li><li><a href=\"http://www.lnt.org/programs/principles_6.php\">Respect Wildlife</a></li><li><a href=\"http://www.lnt.org/programs/principles_7.php\">Be Considerate of Other Visitors</a></li></ol><p><b>Regulations:</b><br>Motorized equipment and equipment used for mechanical transport are generally prohibited on all federal lands designated as wilderness. This includes the use of motor vehicles (including OHVs), motorboats, motorized equipment, bicycles, hang gliders, wagons, carts, portage wheels, and the landing of aircraft including helicopters, unless provided for in specific legislation. In a few areas some exceptions allowing the use of motorized equipment or mechanical transport are described in the special regulations in effect for a specific area. Contact the agency for more information about regulations.<p><b>Contact Information:</b><blockquote><p>SUPERINTENDENT<br>Yosemite National Park<br>P.O. Box 577<br>Yosemite National Park, CA 95389<br>Phone: 209-372-0200<br>Fax: 209-372-0220<br>Visitor information for deaf/hard of hearing only: 209-372-4726.</blockquote>",
      "RecAreaMapURL": "http://www.wilderness.net/index.cfm?fuse=NWPS&latitude=37.8565180874&longitude=-119.547875973&zoom=9",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Driving Directions<br><br>From the North and West<br><br>San Francisco/Bay area<br>Distance: 195 mi / 314 km<br>Time:4-5 hours<br>Take I-580 east to I-205 east to Highway 120 east (Manteca) or Highway 140 east (Merced) into Yosemite National Park.<br><br>Sacramento<br>Distance: 176 mi / 283 km<br>Time: 4 hours<br>Take Highway 99 south to Highway 120 east (Manteca) or Highway 140 east (Merced) into Yosemite National Park.<br><br>Reno & Lake Tahoe<br>Approximately June through October, conditions permitting<br>Distance: 218 mi / 351 km (Reno)<br>Time: 5 hours<br>Take US 395 south to Lee Vining; take Highway 120 west into Yosemite National Park (open late May/June through October, depending on conditions).<br><br>All year<br>Distance: 315 mi / 507 km (Reno)<br>Time: 8 hours<br>Take I-80 or I-50 west to Sacramento; take Highway 99 south to Highway 120 east (Manteca) or Highway 140 east (Merced) into Yosemite National Park.<br> <br>From the South<br><br>Los Angeles area<br>Distance: 313 mi / 504 km<br>Time: 6 hours<br>Take I-5 north (or I-405 north to I-5) to Highway 99 north to Highway 41 north (Fresno) into Yosemite National Park.<br><br>San Diego area<br>Distance: 441 mi / 710 km<br>Time: 8 hours<br>Take I-5 north to Highway 99 to Highway 41 north (Fresno) into Yosemite National Park.<br><br>Las Vegas<br>June through October, conditions permitting<br>Distance: 350 mi / 560 km<br>Time: 6-7 hours<br>Take I-15 west to Barstow; Highway 58 west to the junction with US 395; go north on US 395 to near Lee Vining; take Highway 120 west into Yosemite National Park (open late May/early June through October, depending on conditions).<br><br>November through May<br>Distance: 495 mi / 797 km<br>Time: 8-10 hours<br>Take I-15 west to Barstow; Highway 58 west to Bakersfield; take Highway 99 north to Fresno. In Fresno, take Highway 41 north into Yosemite National Park.<br>",
      "Keywords": "",
      "RecAreaName": "Yosemite Wilderness"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2013-04-10",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 12901,
      "RecAreaPhone": "",
      "RecAreaDescription": "<br>The Zion Wilderness now contains a total of 124,406 acres and is managed by the National Park Service. All of the Wilderness is in the state of Utah. In 2009 the Zion Wilderness became part of the now over 109 million acre National Wilderness Preservation System. In wilderness, you can enjoy challenging recreational activities and extraordinary opportunities for solitude. In an age of <em>&quot;...increasing population, accompanied by expanding settlement and growing mechanization,...&quot;</em> you play an important role in helping to <em>&quot;...secure for the American people of present and future generations the benefits of an enduring resource of wilderness&quot;</em> as called for by Congress in the <a href=\"http://www.wilderness.net/index.cfm?fuse=NWPS&amp;sec=legisact\">Wilderness Act of 1964</a>. Please follow the regulations in place for this area, and use Leave No Trace techniques when visiting to ensure protection of its unique natural and experiential qualities.<p>How to follow the seven standard Leave No Trace principles differs in different parts of the country (desert vs. Rocky Mountains). Click on any of the principles listed below to learn more about how they apply.<p><b>Leave No Trace principles:</b><ol><li><a href=\"http://www.lnt.org/programs/principles_1.php\">Plan Ahead and Prepare</a></li><li><a href=\"http://www.lnt.org/programs/principles_2.php\">Travel and Camp on Durable Surfaces</a></li><li><a href=\"http://www.lnt.org/programs/principles_3.php\">Dispose of Waste Properly</a></li><li><a href=\"http://www.lnt.org/programs/principles_4.php\">Leave What You Find</a></li><li><a href=\"http://www.lnt.org/programs/principles_5.php\">Minimize Campfire Impacts</a></li><li><a href=\"http://www.lnt.org/programs/principles_6.php\">Respect Wildlife</a></li><li><a href=\"http://www.lnt.org/programs/principles_7.php\">Be Considerate of Other Visitors</a></li></ol><p><b>Regulations:</b><br>Motorized equipment and equipment used for mechanical transport are generally prohibited on all federal lands designated as wilderness. This includes the use of motor vehicles (including OHVs), motorboats, motorized equipment, bicycles, hang gliders, wagons, carts, portage wheels, and the landing of aircraft including helicopters, unless provided for in specific legislation. In a few areas some exceptions allowing the use of motorized equipment or mechanical transport are described in the special regulations in effect for a specific area. Contact the agency for more information about regulations.",
      "RecAreaMapURL": "http://www.wilderness.net/index.cfm?fuse=NWPS&latitude=37.3039539369&longitude=-113.033713145&zoom=10",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Zion Wilderness"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "anch_web_mail@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 13521,
      "RecAreaPhone": "(907) 644-3661",
      "RecAreaDescription": "Alaska's parks, forests and refuges are rich and varied. The Anchorage Interagency Visitor Center helps visitors and residents to have meaningful, safe, enjoyable experiences on public lands, and encourages them to sustain the natural and cultural resources of Alaska. This center and three others statewide provide trip-planning, interpretation, and education for all ages.",
      "RecAreaMapURL": "http://www.nps.gov/anch/planyourvisit/maps.htm",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "The visitor center is located at 605 W. 4th Avenue, in downtown Anchorage. It is housed within the historic \"Old Federal Building\" on the corner of 4th Avenue and F Street. The entrance is on the east side of the building, closest to F Street. Because the site resides in a federal building, there is a screening station at the entrance which requires a picture id for adults.",
      "Keywords": "",
      "RecAreaName": "Alaska Public Lands"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "Shauntee.daniels@baltimorecity.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 13522,
      "RecAreaPhone": "410-878-6411",
      "RecAreaDescription": "For nearly three centuries, Baltimore has stood as a center of commerce and culture for the Chesapeake Bay. The city has seen the incredible transformation of American identity, shaped by war, prosperity, and struggles for freedom and civil rights. Visit the Baltimore National Heritage Area to experience the places and people that shaped the nation and forged the American identity.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Baltimore National Heritage Area"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2016-03-04",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 13523,
      "RecAreaPhone": "not available",
      "RecAreaDescription": "The contributions of the Cache la Poudre River to the development of water law in the Western United States, the evolution of water delivery systems, and the shaping of the region's cultural heritage are all commemorated along the flood plain of this working river through programs and activities that combine the area's rich history, beautiful scenery and many opportunities for recreation.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>The Cache la Poudre River Corridor National Heritage Area begins at the boundary of Roosevelt National Forest on the west and runs downstream along the river until it joins the South Platte River east of Greeley, Colorado.</p>\n<p>The Cache la Poudre River Corridor runs through several towns including LaPorte, Fort Collins, Timnath, Windsor, and Greeley, Colorado.</p>\n<p>By car to:</p>\n<p>LaPorte, Colorado; From Denver take US 25 North approximately 58 miles to Fort Collins, then take US 287 North approximately five miles.</p>\n<p>Fort Collins, Colorado; From Denver take US 25 North approximately 58 miles.</p>\n<p>Timnath, Colorado; From Fort Collins take US 25 South approximately four miles.</p>\n<p>Windsor, Colorado; From Fort Collins take US 25 South approximately seven miles, then take CO 392 East approximately four and a half miles.</p>\n<p>Greeley, Colorado; From Denver take US 25 North approximately 44 miles, then take US 34 East approximately 20 miles.<br />\n </p>",
      "Keywords": "",
      "RecAreaName": "Cache La Poudre River National Heritage Area"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -76.483355,
          38.971601
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "cindy_chance@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -76.483355,
      "RecAreaID": 13524,
      "RecAreaPhone": "not available",
      "RecAreaDescription": "Four hundred years ago Englishman John Smith and a small crew of adventurers set out in an open boat to explore the Chesapeake Bay. Between 1607 and 1609 Smith and his crew mapped nearly 3,000 miles of the Bay and rivers and documented American Indian communities. Smith's map and journals are a remarkable record of the 17th-century Chesapeake. Come join the adventure on the Chesapeake Bay!",
      "RecAreaMapURL": "http://www.nps.gov/cajo/planyourvisit/maps.htm",
      "RecAreaLatitude": 38.971601,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "•\tAnnapolis, Maryland is conveniently located between Baltimore and Washington, D.C., just off the east coast's major north-south highway, I-95.\n•\tAirlines including American, Continental, Delta, Northwest, Southwest, Air Tran, US Airways and more make flying into Anne Arundel County's BWI Thurgood Marshall Airport a snap. For airport information call: 800-435-9294.\n•\tAMTRAK trains stop at the BWI station for convenient connections to Annapolis via a reserved 24-hour advance shuttle service. If you prefer, a shuttle service representative will meet you at the train. Options include: The Airport Shuttle 1-800-776-0323 or Lighthouse Limousine 1-866-605-4661. For train schedule information, call 800-USA- RAIL or visit AMTRAK and take advantage of a 30% companion rail fare discount.\n•\tLight rail provides a quick link from Baltimore's famed Inner Harbor and Camden Yards to BWI Thurgood Marshall Airport.\n•\tGreyhound provides daily bus service to Annapolis. For fares and schedules, contact: 1-800-231-2222.",
      "Keywords": "",
      "RecAreaName": "Captain John Smith Chesapeake National Historic Trail"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -110.7054666,
          43.81853565
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "grte_info@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -110.7054666,
      "RecAreaID": 13525,
      "RecAreaPhone": "(307) 739-3300",
      "RecAreaDescription": "Rising above a scene rich with extraordinary wildlife, pristine lakes, and alpine terrain, the Teton Range stands monument to the people who fought to protect it. These are mountains of the imagination. Mountains that led to the creation of Grand Teton National Park where you can explore over two hundred miles of trails, float the Snake River or enjoy the serenity of this remarkable place.",
      "RecAreaMapURL": "http://www.nps.gov/grte/planyourvisit/maps.htm",
      "RecAreaLatitude": 43.81853565,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Grand Teton National Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -79.8232242465,
          32.8470785916
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "michael_allen@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -79.8232242465,
      "RecAreaID": 13526,
      "RecAreaPhone": "(843) 881.5516 ext. 12",
      "RecAreaDescription": "Designated by Congress in 2006, the Gullah Geechee Cultural Heritage Corridor extends from Wilmington, North Carolina in the north to Jacksonville, Florida in the south. It is home to one of America's most unique cultures, a tradition first shaped by captive Africans brought to the southern United States from West Africa and continued in later generations by their descendents.",
      "RecAreaMapURL": "http://www.nps.gov/guge/planyourvisit/maps.htm",
      "RecAreaLatitude": 32.8470785916,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/chpi/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Gullah/Geechee Cultural Heritage Corridor"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -71.12323846,
          42.34693694
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "sara_patton@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -71.12323846,
      "RecAreaID": 13527,
      "RecAreaPhone": "(617) 566-7937",
      "RecAreaDescription": "As a boy, JFK's parents never expected he would grow up to be President. Yet in his birthplace home he learned values that inspired a life in public service. His mother, Rose Kennedy, recreated her family's first home to share her memories of those early years with visitors. In 2017, the centennial of JFK's birth, we commemorate not only his early life, but the ideas and principles he left behind.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 42.34693694,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Public Transportation The MBTA offers trolley service to Brookline on the Green Line. Take the \"C\" Cleveland Circle trolley to Coolidge Corner; walk four blocks north along Harvard Street, turn right onto Beals Street, and continue to #83. The MBTA also offers bus service to Brookline. MBTA route 66 travels from Harvard Square to Coolidge Corner, stopping just one block from John Fitzgerald Kennedy NHS at the corner of Williams and Harvard Streets. I-90/ Massachusetts Turnpike: Take exit 18 Allston/Brighton (eastbound), OR exit 20 Brighton/Cambridge (westbound), use the Allston/Brighton exit ramp, merge onto Cambridge Street, and proceed approximately one mile. At the fourth traffic light, turn left onto Harvard Street and proceed for about one mile. Turn left onto Beals Street.I-95: Exit 20 and follow Route 9E/Boylston Street for approximately five miles. Turn right onto Harvard Street. Follow Harvard Street for one mile, turn right onto Beals Street.",
      "Keywords": "",
      "RecAreaName": "John Fitzgerald Kennedy National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -72.5242767334,
          42.2915819137
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "charles_tracy@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -72.5242767334,
      "RecAreaID": 13528,
      "RecAreaPhone": "not available",
      "RecAreaDescription": "From the Sound to the Summits: the New England Trail covers 215 miles from Long Island Sound across long ridges to scenic mountain summits in Connecticut and Massachusetts. The trail offers panoramic vistas and close-ups of New England's natural and cultural landscape: traprock ridges, historic village centers, farmlands, unfragmented forests, quiet streams, steep river valleys and waterfalls.",
      "RecAreaMapURL": "http://www.nps.gov/neen/planyourvisit/maps.htm",
      "RecAreaLatitude": 42.2915819137,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "New England National Scenic Trail"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -79.0703277588,
          43.0847892761
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "info@discoverniagara.org",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -79.0703277588,
      "RecAreaID": 13529,
      "RecAreaPhone": "315-338-7730",
      "RecAreaDescription": "Designated by Congress in 2008, the Niagara Falls National Heritage Area stretches from the western boundary of Wheatfield, New York to the mouth of the Niagara River on Lake Ontario, including the communities of Niagara Falls, Youngstown, and Lewiston. The region is home to natural wonders, rich cultural traditions, and nationally significant historical sites.",
      "RecAreaMapURL": "http://www.nps.gov/nifa/planyourvisit/maps.htm",
      "RecAreaLatitude": 43.0847892761,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/nifa/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Niagara Falls\n National Heritage Area"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2016-03-04",
      "RecAreaEmail": "riograndenha@windstream.net",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 13530,
      "RecAreaPhone": "(505) 753-0937",
      "RecAreaDescription": "Stretching from Albuquerque to the Colorado border, the heritage area includes Santa Fe, Rio Arriba, and Taos counties. It encompasses a mosaic of cultures, including the Jicarilla Apache, eight Pueblo tribes, and the descendants of Spanish colonists who settled in the area beginning in 1598—a generation before the Mayflower landed at Plymouth Rock.",
      "RecAreaMapURL": "http://www.nps.gov/norg/planyourvisit/maps.htm",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Northern Rio Grande National Heritage Area"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -74.18021494,
          40.91584645
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "pagr_gmp@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -74.18021494,
      "RecAreaID": 13531,
      "RecAreaPhone": "not available",
      "RecAreaDescription": "Cotton & silk for clothing; locomotives for travel; paper for books & writing letters; airplanes, & more. What do they have in common? They all came from the same place - Paterson, NJ.\n\nIn 1791, Paterson, America's first planned industrial city, was established, centered around the Great Falls of the Passaic River. From humble mills would rise industries that changed the face of the United States.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 40.91584645,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Paterson Great Falls National Historical Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -83.6975021362,
          41.5441665649
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "cuva_info@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -83.6975021362,
      "RecAreaID": 13532,
      "RecAreaPhone": "(419) 407-9700",
      "RecAreaDescription": "The Battle of Fallen Timbers was the culminating event that demonstrated the tenacity of the American people in their quest for western expansion and the struggle for dominance in the Old Northwest Territory. The events resulted in the dispossession of American Indian tribes and a loss of colonial territory for the British military and settlers.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 41.5441665649,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Fallen Timbers is near the Maumee River about three miles southwest of the City of Maumee in Lucas County. Take the first exit off of U.S. Route 24 southwest of I-475 and turn east. Then follow the road north paralleling U.S. Route 24 to the site.",
      "Keywords": "",
      "RecAreaName": "Fallen Timbers Battlefield and Fort Miamis National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -93.59641868,
          33.66758356
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "tarona_armstrong@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -93.59641868,
      "RecAreaID": 13534,
      "RecAreaPhone": "not available",
      "RecAreaDescription": "On August 19, 1946, Virginia Blythe gave birth to her son, William Jefferson Blythe, III. Named for his father who died before he was born, he grew up to become William Jefferson Clinton - the 42nd president of the United States. In this house, he learned many of the early lessons that defined his life and his presidency.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 33.66758356,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/wicl/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "President William Jefferson Clinton Birthplace Home National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -83.37620464,
          41.91291085
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "Daniel_Downing@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -83.37620464,
      "RecAreaID": 13535,
      "RecAreaPhone": "Park Headquarters (734) 243-7136",
      "RecAreaDescription": "River Raisin National Battlefield Park preserves, commemorates, and interprets the January 1813 battles of the War of 1812 and their aftermath in Monroe and Wayne counties in SE Michigan. The Battle resulted in the greatest victory for Tecumseh's American Indian confederation and the greatest defeat for the U.S. The resulting rally cry \"Remember the Raisin\" spurred support for the rest of the war.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 41.91291085,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "River Raisin National Battlefield is located in Southeastern Lower Michigan along the western shoreline of Lake Erie, in the city of Monroe. Park headquarters is 35 miles south of Detroit, and only 270 miles east of Chicago.\n\nBy Car:\nTake Interstate 75 to exit 15 and go south on Dixie Highway to Elm Ave. make a left on Elm and the Visitor Center will be on the left hand side.\n\nBy Plane:\nThe Detroit Metropolitan Airport (DTW / KDTW) has international and domestic flights from Detroit, Michigan and is about 20 miles from the center of Monroe, MI.\n\nRiver Raisin National Battlefield Park\n1403 East Elm Ave.\nMonroe, MI 48162\n(734) 243-7136",
      "Keywords": "",
      "RecAreaName": "River Raisin National Battlefield Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -76.6034317017,
          39.2872505188
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "charles_grady@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -76.6034317017,
      "RecAreaID": 13536,
      "RecAreaPhone": "410 260-2470",
      "RecAreaDescription": "For three years the young United States was embroiled in the War of 1812 and the Chesapeake Bay region felt the brunt of it, choked by shipping blockades and ravaged by enemy raids. Through sites and landscapes in Virginia, the District of Columbia, and throughout Maryland, the Trail tells the stories of the events, people, and places that led to the birth of our National Anthem.",
      "RecAreaMapURL": "http://www.nps.gov/stsp/planyourvisit/maps.htm",
      "RecAreaLatitude": 39.2872505188,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "The Star-Spangled Banner National Historic Trail is headquartered at Fort McHenry National Monument and Historic Shrine. Fort McHenry is three miles southeast of the Baltimore Inner Harbor and just off I-95. Follow the brown Fort McHenry directional signs along all major routes to the park. From I-95 northbound, take Exit 55 Key Highway and follow Fort McHenry signs. From I-95 southbound, as you approach the Fort McHenry Tunnel, move to the toll booths on the far right as you will be exiting immediately after emerging from the tunnel. Take Exit 55 Key Highway and follow the Fort McHenry signs USING LAWRENCE STREET AND NOT WOODALL, as your GPS or Mapquest might indicate.\n\nFrom the Inner Harbor, take Light Street south to Key Highway. Turn left and follow the Fort McHenry signs to Lawrence Street. Turn right on Lawrence Street and then left on Fort Avenue to the park.",
      "Keywords": "",
      "RecAreaName": "Star-Spangled Banner National Historic Trail"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "info@thomascole.org",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 13537,
      "RecAreaPhone": "518.943.7465",
      "RecAreaDescription": "In 1825, America was still a new nation, just forming its own unique identity and traditions. Thomas Cole invented a new style of art, one that Americans could call their own. His landscape paintings launched the art movement known as the Hudson River School.\n\nHis groundbreaking achievements took place here in Catskill, New York -- in the \"peaceful shades\" of his beloved home, Cedar Grove.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Thomas Cole National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 13538,
      "RecAreaPhone": "not available",
      "RecAreaDescription": "In 1781, General Rochambeau's French Army joined forces with General Washington's Continental Army to fight the British Army in Yorktown, Virginia. With the French Navy in support, the allied armies moved hundreds of miles to become the largest troop movement of the American Revolution. The effort and cooperation between the two sides led to a victory at Yorktown and secured American independence.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Washington-Rochambeau National Historic Trail"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -76.30103195,
          37.01733343
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "fomr_superintendent@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -76.30103195,
      "RecAreaID": 13539,
      "RecAreaPhone": "(757) 722-3678",
      "RecAreaDescription": "Fort Monroe National Monument spans the American story through the 21st century: American Indian presence, Captain John Smith's journeys, a safe haven for freedom seekers during the Civil War, home of the US Army Artillery School, and a bastion of defense for the Chesapeake Bay. Visit this young national park with a centuries-old tradition and see on-going preservation work in action.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 37.01733343,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "The park is located approximately 65 miles from Richmond, Virginia, at the tip of the Virginia Peninsula. Programming, facilities, and visitor services are currently operated with cooperation through our park partners and largely available at the Casemate Museum. Visit http://nps.gov/fomr/planyourvisit/directions.htm for more details.",
      "Keywords": "",
      "RecAreaName": "Fort Monroe National Monument"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -121.3744818,
          41.88727902
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "angela_sutton@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -121.3744818,
      "RecAreaID": 13540,
      "RecAreaPhone": "(530) 260-0537",
      "RecAreaDescription": "The Tule Lake Unit, WWII Valor in the Pacific National Monument includes both the the Tule Lake Segregation Center, the largest and most controversial of the sites where Japanese Americans were incarcerated during World War II, and Camp Tulelake, which was first a Civilian Conservation Corps camp, then an additional facility to detain Japanese Americans, and finally a prisoner of war camp.",
      "RecAreaMapURL": "http://www.nps.gov/tule/planyourvisit/maps.htm",
      "RecAreaLatitude": 41.88727902,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Temporary Visitor Center is staffed Memorial Day Weekend - September.\nThe temporary Visitor Center is located at the Tulelake Fairgrounds Museum, 800 Main Street, Tulelake, CA, (530) 260-0537.\n\nTo get to the visitor center by car: \n\nFrom the I-5 corridor\n\nTake U.S. 97 north at Weed (50 miles.) Turn right on California Hwy. 161. There will be signs for Tulelake and Lava Beds National Monument. Travel east on CA 161, then turn right onto Hwy. 139. Turn right on East \"W\" Street. Turn Left on Main Street. The temporary park is housed in the museum at the TuleLake-Butte Valley Fair Grounds, 800 Main Street, Tulelake, CA.\n\nFrom Klamath Falls, Or.\n\nTake Oregon Hwy. 39 south continue South on 139 to the junction for Tulelake, CA. Turn right onto Main Street. The temporary Park Headquarters is located at the Tulelake-Butte Valley Fairgrounds. 800 Main Street, Tulelake.",
      "Keywords": "",
      "RecAreaName": "Tule Lake Unit"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -77.0442195534,
          38.8862276865
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "national_mall@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -77.0442195534,
      "RecAreaID": 13542,
      "RecAreaPhone": "202.426.6841",
      "RecAreaDescription": "Located in downtown Washington, D.C., the memorial honors Martin Luther King, Jr.'s legacy and the struggle for freedom, equality, and justice.",
      "RecAreaMapURL": "http://www.nps.gov/mlkm/planyourvisit/maps.htm",
      "RecAreaLatitude": 38.8862276865,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "The Martin Luther King, Jr. Memorial is located in downtown Washington, D.C. It is roughly halfway between the Lincoln Memorial and the Washington Monument along Independence Ave.\nVIA METRO: From the Smithsonian metro station, walk west following Independence Ave. Cross 17th Street at the World War II Memorial, and bear left to continue following the sidewalk along Independence Ave. At the next traffic light, cross the crosswalk to the entrance of the memorial.\nVIA CAR: Street parking is scarce near the memorial. A few spaces including handicap parking are available along West Basin Drive, a one-way street accessed via Ohio Drive SW. Additional parking is available along Ohio Drive SW. Three parking lots are approximately 1 mile to the south along Ohio Drive SW, and at the Paddle Boat parking area along Maine Ave to the east. Stopping, standing, or parking on Independence Avenue is prohibited.",
      "Keywords": "",
      "RecAreaName": "Martin Luther King, Jr. Memorial"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -77.025977,
          38.916554
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "national_mall@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -77.025977,
      "RecAreaID": 13905,
      "RecAreaPhone": "",
      "RecAreaDescription": "Over 200,000 African-American soldiers and sailors served in the U.S. Army and Navy during the Civil War. Their service helped to end the war and free over four million slaves. The African American Civil War Memorial honors their service and sacrifice.",
      "RecAreaMapURL": "http://www.nps.gov/afam/planyourvisit/maps.htm",
      "RecAreaLatitude": 38.916554,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "The African American Civil War Memorial is in downtown Washington, D.C.\nVIA METRO: The African American Civil War Memorial is accessible via the green and yellow lines at the \"U Street/African-Amer Civil War Memorial/Cardozo\" stop (http://www.wmata.com/rail/station_detail.cfm?station_id=73).\nVIA CAR: Limited street parking is available on U Street, Vermont Ave., and adjacent areas.",
      "Keywords": "",
      "RecAreaName": "African American Civil War Memorial"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -74.00447358,
          40.71452681
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "african_burial_ground@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -74.00447358,
      "RecAreaID": 13906,
      "RecAreaPhone": "",
      "RecAreaDescription": "From about the 1690s until 1794, both free and enslaved Africans were buried in a 6.6-acre burial ground in Lower Manhattan, outside the boundaries of the settlement of New Amsterdam, later known as New York. Lost to history due to landfill and development, the grounds were rediscovered in 1991 as a consequence of the planned construction of a Federal office building.",
      "RecAreaMapURL": "http://www.nps.gov/afbg/planyourvisit/maps.htm",
      "RecAreaLatitude": 40.71452681,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "The African Burial Ground National Monument is located in Lower Manhattan, close to Foley Square and just north of City Hall.\nThe 4, 5, 6, R trains (Brooklyn Bridge/City Hall) are one block away, the J, M and Z trains are one block away (Chambers Street), the A train is three blocks away (Chambers Street) and the 1 train is 4 blocks away (Chambers Street) and the 2 and 3 trains are 2 blocks away (Park Place). The A, C and E are 3 blocks away (Chambers/World Trade Center).\nThe M15, M22 and B51 City Hall bus routes all terminate within walking distance, and the M1 and M6 South Ferry route passes nearby. Ask the driver for the stop closest to Broadway and Duane Street.",
      "Keywords": "",
      "RecAreaName": "African Burial Ground National Monument"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "GWMP Superintendent@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 13907,
      "RecAreaPhone": "",
      "RecAreaDescription": "The Robert E. Lee Memorial honors Lee's military and public leadership in pre- and post-Civil War America. Congress designated the memorial to recognize that \"the desire and hope of Robert E. Lee for peace and unity within our Nation has come to pass.\" From the portico you can contemplate our nation's fate as you gaze across the river that once divided us.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Arlington House, The Robert  E. Lee Memorial"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -77.02431104,
          38.91089286
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -77.02431104,
      "RecAreaID": 13909,
      "RecAreaPhone": "",
      "RecAreaDescription": "Before Dr. Carter G. Woodson, there was very little accurate written history about the lives and experiences of Americans of African descent. Today a National Historic Site, Dr. Woodson's home served as the headquarters for the Association for the Study of African American Life and History. Dr. Woodson established Negro History Week here in 1926, which we celebrate today as Black History Month.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 38.91089286,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/cawo/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Carter G. Woodson Home National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -118.5615781,
          35.22729389
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "craig_dalby@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -118.5615781,
      "RecAreaID": 13910,
      "RecAreaPhone": "",
      "RecAreaDescription": "Yes, we can!\n\nWidely recognized as the most important Latino leader in the United States during the twentieth century, César E. Chávez led farm workers and supporters in the establishment of the country's first permanent agricultural union. His leadership brought sustained international attention to the plight of U.S. farm workers, and secured for them higher wages and safer working conditions",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 35.22729389,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "César E. Chávez National Monument"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -83.89328575,
          39.70817829
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "chyo_info@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -83.89328575,
      "RecAreaID": 13911,
      "RecAreaPhone": "",
      "RecAreaDescription": "Throughout his life, Charles Young overcame countless obstacles in his ascent to prominence.  In spite of overt racism and stifling inequality, Young rose through the military ranks to become one of the most respected leaders of his time.  A well-rounded man with a steadfast devotion to duty, Young led by example and inspired a generation of new leaders.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 39.70817829,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "From all points west: Take US-35 east towards Xenia, OH, Continue into Xenia by following U.S. Route 35B, Turn left onto U.S. 42, Youngsholm will be on your left, approximately 2.5 miles from U.S. Route 35B, 120 US Route 42 E.\nFrom all points north: Take I-71 south from Columbus towards Cincinnati, Exit I-71 at U.S. Route 35 and go west, Follow U.S. Route 35 and exit at N. Bickett Road, Turn right onto N. Bickett Road, N. Bickett Road will dead-end at U.S. Route 42, turn left onto U.S. Route 42, Youngsholm will be on your right, approximately 0.7 miles from N. Bickett Road, at 1120 US Route 42 E.\nFrom all points south and southwest: Take I-71 north from Cincinnati towards Columbus, Exit I-71 at U.S. Route 35 and go west, Follow U.S. Route 35 and exit at N. Bickett Road, Turn right onto N. Bickett Road\nN. Bickett Road will dead-end at U.S. Route 42, turn left onto U.S. Route 42. Youngsholm will be on your right, approximately 0.7 miles from N. Bickett Road, at 1120 US Route 42 E.",
      "Keywords": "",
      "RecAreaName": "Charles Young Buffalo Soldiers National Monument"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -76.2533569336,
          37.3221206665
        ]
      },
      "LastUpdatedDate": "2016-10-05",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -76.2533569336,
      "RecAreaID": 13913,
      "RecAreaPhone": "",
      "RecAreaDescription": "The Chesapeake Bay Gateways and Watertrails Network connects you with the natural and cultural heritage of the Chesapeake Bay watershed through more than 170 exceptional parks, wildlife refuges, museums, sailing ships, historic communities, trails and more. Gateways Network partner sites and water trails are the special places where you can experience the authentic Chesapeake.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 37.3221206665,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "•\tAnnapolis, Maryland is conveniently located between Baltimore and Washington, D.C., just off the east coast's major north-south highway, I-95.\n•\tAirlines including American, Continental, Delta, Northwest, Southwest, Air Tran, US Airways and more make flying into Anne Arundel County's BWI Thurgood Marshall Airport a snap. For airport information call: 800-435-9294.\n•\tAMTRAK trains stop at the BWI station for convenient connections to Annapolis via a reserved 24-hour advance shuttle service. If you prefer, a shuttle service representative will meet you at the train. Options include: The Airport Shuttle 1-800-776-0323 or Lighthouse Limousine 1-866-605-4661. For train schedule information, call 800-USA- RAIL or visit AMTRAK and take advantage of a 30% companion rail fare discount.\n•\tLight rail provides a quick link from Baltimore's famed Inner Harbor and Camden Yards to BWI Thurgood Marshall Airport.\n•\tGreyhound provides daily bus service to Annapolis. For fares and schedules, contact: 1-800-231-2222.",
      "Keywords": "",
      "RecAreaName": "Chesapeake Bay Gateways and Watertrails Network"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -77.04998374,
          38.93596206
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -77.04998374,
      "RecAreaID": 13914,
      "RecAreaPhone": "",
      "RecAreaDescription": "On forested hills surrounding the nation's capital are the remnants of a complex system of Civil War fortifications. Built by Union forces, these strategic buttresses transformed the young capital into one of the world's most fortified cities. This month CWDW will talk about Battleground National Cemetery.",
      "RecAreaMapURL": "http://www.nps.gov/cwdw/planyourvisit/maps.htm",
      "RecAreaLatitude": 38.93596206,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/cwdw/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Civil War Defenses of Washington"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -77.14009689,
          38.96762882
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "gwmp_clara_barton_nhs@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -77.14009689,
      "RecAreaID": 13915,
      "RecAreaPhone": "",
      "RecAreaDescription": "Clara Barton dedicated her life and energies to help others in times of need - both home and abroad, in peacetime as well as during military emergencies. Glen Echo was her home the last 15 years of her life and the structure illustrates her dedication and concern for those less fortunate than herself.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 38.96762882,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "The site is closed for renovations during 2016.  Virtual Tour available at www.nps.gov/clba.\nLocated off MacArthur Blvd., adjacent to Glen Echo Park in Glen Echo, Maryland, several miles North West of Washington, D.C. Accessible from the Capital Beltway (I-495). Local park directional sign postings located on the Clara Barton Parkway and MacArthur Blvd. Commercial vehicle and bus restrictions on approaching roadways. Contact the site for bus directions.\nPublic transportation to site available through Montgomery County Transit Authority Ride-on-Bus # 29 from Bethesda and Friendship Heights Metro stations (red line) or by taxi.",
      "Keywords": "",
      "RecAreaName": "Clara Barton National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -77.15468523,
          38.95134267
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -77.15468523,
      "RecAreaID": 13916,
      "RecAreaPhone": "",
      "RecAreaDescription": "Step back in time and experience life on a small farm in northern Virginia.  Living history programs and demonstrations offer a glimpse of what life was like for a poor farm family, just before the Revolutionary War.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 38.95134267,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "From Virginia\nFollow the Washington Beltway Interstate 495, take Virginia Route 193 (Georgetown Pike) east towards Langley; drive 2.3 miles and turn left onto Colonial Farm Road, just prior to junction with Route 123; follow signs to visitor parking lot.\nFrom Washington, D.C.\nTake the George Washington Memorial Parkway north to the exit for Route 123 toward McLean; drive almost 1 mile and turn right onto Route 193; make the first right onto Colonial Farm Road and follow signs to visitor parking lot.\nClaude Moore Farm is not accessible by Metro.",
      "Keywords": "",
      "RecAreaName": "Claude Moore Colonial Farm"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -77.04409306,
          38.8909354
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "national_mall@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -77.04409306,
      "RecAreaID": 13917,
      "RecAreaPhone": "",
      "RecAreaDescription": "Officially established in 1965, National Mall and Memorial Parks actually protects some of the older parkland in the National Park System. Areas within this premier park provide visitors with ample opportunities to commemorate presidential legacies; honor the courage and sacrifice of war veterans; and celebrate the United States commitment to freedom and equality.",
      "RecAreaMapURL": "http://www.nps.gov/coga/planyourvisit/maps.htm",
      "RecAreaLatitude": 38.8909354,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/coga/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Constitution Gardens"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -110.2561574,
          31.34900397
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -110.2561574,
      "RecAreaID": 13918,
      "RecAreaPhone": "",
      "RecAreaDescription": "It was a journey of conquest filled with exploration, wonder - and cruelty. Inspired by tales of vast cities of gold, 339 European soldiers and over 1000 Aztec allies embarked on an epic journey through arid deserts and rugged mountains. They encountered rich traditions and brought new technologies. The resulting collision and combination of cultures reverberates today.",
      "RecAreaMapURL": "http://www.nps.gov/coro/planyourvisit/maps.htm",
      "RecAreaLatitude": 31.34900397,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>By plane<br />\nFly to Sierra Vista, Tucson, Phoenix</p>\n<p>By car<br />\nFrom Phoenix or Tucson take I-10 east and exit south on Hwy. 90 to Sierra Vista. After reaching Sierra Vista, go south on Hwy. 92 about 20 miles to S. Coronado Memorial Drive. (From Bisbee, take Hwy 92 west). Follow S. Coronado Memorial Drive 5 miles to the Visitor Center.</p>\n<p>No public transportation service is available to the Memorial.<br />\n </p>\n<p><strong>Traffic and Travel Tips-</strong></p>\n<p>Information concerning road conditions to Montezuma Pass is available at the visitor center. East Montezuma Canyon Road is paved for one mile west of the visitor center, then it is a narrow, unpaved mountain road (24 ft. vehicle length limit) to the scenic overlook at Montezuma Pass. The dirt road continues west into the Coronado National Forest. Periodic road closures to Montezuma Pass may occur during inclement weather conditions.</p>",
      "Keywords": "",
      "RecAreaName": "Coronado National Memorial"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -81.49133831,
          41.47369879
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -81.49133831,
      "RecAreaID": 13919,
      "RecAreaPhone": "",
      "RecAreaDescription": "This site honors the memory of David Berger, an American citizen who was one of 11 Israeli athletes killed at the 1972 Olympic Games in Munich, Germany. David had no expectations of winning a medal but joined the Israeli weightlifting team to realize his dream - a dream which ended tragically. The Memorial is dedicated to his memory and the memory of the ten other athletes.",
      "RecAreaMapURL": "http://www.nps.gov/dabe/planyourvisit/maps.htm",
      "RecAreaLatitude": 41.47369879,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>The David Berger Memorial is located on the grounds of the Mandel Jewish Community Center in Beachwood Ohio.</p>\n<p>By Plane:<br />\nCleveland Hopkins International Airport offer many daily flights to the Cleveland area.</p>\n<p>By Car:<br />\nThe David Berger Memorial is most easily accessed from I-271. Take I-271 to the Chagrin Blvd. exit. Go west on Chagrin Blvd. for 0.5 miles. Turn right (north) on Richmond Rd. Follow Richmond Road 0.6 miles to Woodland Rd. Turn right (east) on Woodland Road and travel 0.1 miles to the community center entrance.<br />\nBy Bus:<br />\nBus stations are located in downtown Cleveland.<br />\n </p>",
      "Keywords": "",
      "RecAreaName": "David Berger National Memorial"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2014-06-11",
      "RecAreaEmail": "Ann_Dadura@NPS.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 13920,
      "RecAreaPhone": "",
      "RecAreaDescription": "Twice this house sheltered George Washington. In October 1793, he found refuge during the deadly Yellow Fever epidemic in Philadelphia. The following summer, it was a welcome retreat from the heat of the capital city.",
      "RecAreaMapURL": "http://www.nps.gov/demo/planyourvisit/maps.htm",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/anac/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Deshler-Morris House"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -75.1500062,
          39.96195482
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "indevisitorinfo@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -75.1500062,
      "RecAreaID": 13921,
      "RecAreaPhone": "",
      "RecAreaDescription": "Described as horrifying, mystifying, and full of genius, Poe's writing has engaged readers all over the globe. The six years Poe lived in Philadelphia were his happiest and most productive. Yet Poe also struggled with bad luck, personal demons and his wife's tuberculosis. In Poe's humble home, reflect on the human spirit surmounting crushing obstacles, and celebrate Poe's astonishing creativity.",
      "RecAreaMapURL": "http://www.nps.gov/edal/planyourvisit/maps.htm",
      "RecAreaLatitude": 39.96195482,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Eastbound, via I-76 - Exit onto I-676 East (toward \"Central Philadelphia) and follow it to the 8th Street exit. At the bottom of the exit ramp proceed straight at the traffic light. Make a left at the second traffic light (this becomes 7th street) and proceed two blocks to Spring Garden Street.\n\nFrom New Jersey: After crossing the Ben Franklin Bridge - stay in the right hand lane and exit at the traffic light (this becomes 7th Street). Follow 7th Street to Spring Garden Street. \n\nNorthbound, via I-95 - Exit at \"Independence Hall/Historic Area\". At bottom of ramp turn left at traffic light onto Delaware Avenue (some sections are named \"Columbus Ave.\") to Spring Garden Street (about 1.5 miles). Turn left on Spring Garden Street and proceed to 7th Street.\n\nSouthbound, via I-95 - Use \"Independence Hall/Historic Area\" exit. At the bottom of the exit ramp turn right onto Callowhill Street. Follow Callowhill to 7th Street. Turn right on 7th and proceed to Spring Garden Street.",
      "Keywords": "",
      "RecAreaName": "Edgar Allan Poe National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -77.26508101,
          39.79577592
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "john_joyce@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -77.26508101,
      "RecAreaID": 13922,
      "RecAreaPhone": "",
      "RecAreaDescription": "Eisenhower National Historic Site is the home and farm of General and President Dwight D. Eisenhower. Located adjacent to the Gettysburg Battlefield, the farm served the President as a weekend retreat and a meeting place for world leaders. With its peaceful setting and view of South Mountain, it was a much needed respite from Washington and a backdrop for efforts to reduce Cold War tensions.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 39.79577592,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Visitors arriving from the north and south can use US 15. From the east and west, visitors can use US 30. Shuttle buses to the site depart from the Gettysburg National Military Park Visitor Center and Museum, approximately one and one half mile south of Gettysburg on SR 97 (1195 Baltimore Pike).<br />\n<br />\nDue to a lack of on-site parking and space limitations in the Eisenhower home, visits can only be made by a shuttle bus leaving from the Gettysburg National Military Park Visitor Center. The Center opens at 8:00 a.m. Tickets may be purchased on a first come, first served basis for the next available tour.<br />\n </p>",
      "Keywords": "",
      "RecAreaName": "Eisenhower National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -73.89894026,
          41.76208482
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "dan_whalen@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -73.89894026,
      "RecAreaID": 13923,
      "RecAreaPhone": "",
      "RecAreaDescription": "\"The greatest thing I have learned is how good it is to come home again.\" Eleanor Roosevelt \n\nThis simple statement expresses her love for the modest house she called Val-Kill. The only National Historic Site dedicated to a first lady, Val-Kill welcomes visitors in the style of Mrs. Roosevelt. Come and be part of the entire Roosevelt Experience at Val-Kill.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 41.76208482,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Val-Kill is on Route 9G in Hyde Park, NY about 90 miles north of New York City and 70 miles south of Albany\n\nFor Detailed Directions:\nhttp://www.nps.gov/elro/planyourvisit/upload/DrivingDirections-for-Val-Kill-Website.pdf\n\nFree Shuttle Offered May - October:\nhttp://www.nps.gov/hofr/planyourvisit/experience-the-roosevelt-ride.htm",
      "Keywords": "",
      "RecAreaName": "Eleanor Roosevelt National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -74.0401,
          40.69946
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "stli_info@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -74.0401,
      "RecAreaID": 13924,
      "RecAreaPhone": "",
      "RecAreaDescription": "How far would you travel to find a better life? What if the journey took weeks under difficult conditions?  If you answered \"Whatever it takes,\" you echo the feelings of the 12 million immigrants who passed through these now quiet halls from 1892 to 1954. Ellis Island afforded them the opportunity to attain the American dream for themselves and their descendants. Come hear their stories.",
      "RecAreaMapURL": "http://www.nps.gov/elis/planyourvisit/maps.htm",
      "RecAreaLatitude": 40.69946,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "One National Park on Two Islands:\nVisitors arrive and depart Ellis and Liberty Islands, located in New York Harbor, via ferries operated by Statue Cruises (statuecruises.com). These ferries leave from two locations: Battery Park, at the southernmost tip of Manhattan in New York City, New York, and Liberty State Park in Jersey City, New Jersey. Private vessels may not dock at either Ellis or Liberty Islands.\nGetting to the Ferry:\nBattery Park, lower Manhattan, New York City, New York: Visitors boarding ferries in lower Manhattan should use public transportation whenever possible. For those who are driving or carpooling, parking can be both expensive and difficult for those who are not familiar with traffic in New York City.\nLiberty State Park, Jersey City, New Jersey: Driving and parking at Liberty State Park is easier, but even here, visitors have options for public transportation.",
      "Keywords": "",
      "RecAreaName": "Ellis Island Part of Statue of Liberty National Monument"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -74.01025636,
          40.70731192
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "migdalia_figueroa-pinedo@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -74.01025636,
      "RecAreaID": 13925,
      "RecAreaPhone": "",
      "RecAreaDescription": "Here on Wall Street, George Washington took the oath of office as our first President, and this site was home to the first Congress, Supreme Court, and Executive Branch offices. The current structure, a Customs House, later served as part of the US Sub-Treasury. Now, the building serves as a museum and memorial to our first President and the beginnings of the United States of America.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 40.70731192,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>The main entrance of Federal Hall is located at the corner of Wall and Nassau Streets.</p>\n<p>The rear entrance, which is wheelchair accessible, is located at the intersection of Pine and Nassau Streets.</p>\n<p>It is highly recommended that all visitors use mass transit to arrive at Federal Hall.</p>\n<p>See <a href=\"http://www.nps.gov/feha/planyourvisit/publictransportation.htm\">Public Transportation</a> for detailed subway directions.</p>",
      "Keywords": "",
      "RecAreaName": "Federal Hall National Memorial"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -81.37579869,
          40.79689857
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "mrhodes@firstladies.org",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -81.37579869,
      "RecAreaID": 13926,
      "RecAreaPhone": "",
      "RecAreaDescription": "Two properties, the home of First Lady Ida Saxton McKinley and the seven story 1895 City Bank Building, are preserved at this site, which honors the lives and accomplishment of our nation's First Ladies. The site is managed by the National Park Service and operated by the National First Ladies Library.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 40.79689857,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>The First Ladies National Historic Site is located in downtown Canton, Ohio. Free parking is available behind the Saxton House or at our gated lot on the corner of Market Avenue South and 3rd Street SW (entrance from Market Avenue South).</p>\n<p><strong>From the South:</strong><br />\nFollow I-77 North to the Downtown/Tuscarawas Exit. Turn right onto Tuscarawas and travel to Market Street South. Turn right onto Market Street South. Travel through two lights and immediately after the 2nd light is our gated parking on the right hand side.</p>\n<p><strong>From the North:<br />\n</strong>Follow I-77 South to the Downtown/Tuscarawas Exit. Turn left onto Tuscarawas and follow to Market Avenue. Turn right onto Market Avenue. Travel through two lights and immediately after the 2nd light in our gated parking on the right hand side.<br />\n </p>",
      "Keywords": "",
      "RecAreaName": "First Ladies National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -75.56353942,
          39.83076929
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "FRST_superintendent@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -75.56353942,
      "RecAreaID": 13927,
      "RecAreaPhone": "",
      "RecAreaDescription": "Famous as the First State to ratify the Constitution, Delaware was born out of a conflict among three world powers for dominance of the Delaware Valley.  From this beginning, the region developed a distinct character that tolerated diversity in religion and national origin and valued independence.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 39.83076929,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "First State National Historical Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -78.89456905,
          40.06061476
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "chris_comer@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -78.89456905,
      "RecAreaID": 13928,
      "RecAreaPhone": "",
      "RecAreaDescription": "",
      "RecAreaMapURL": "http://www.nps.gov/flni/planyourvisit/maps.htm",
      "RecAreaLatitude": 40.06061476,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/flni/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Flight 93 National Memorial"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -77.02577944,
          38.89668819
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "national_mall@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -77.02577944,
      "RecAreaID": 13929,
      "RecAreaPhone": "",
      "RecAreaDescription": "Explore Ford's Theatre NHS, discover Abraham Lincoln's life in Washington, D.C., the struggle for a united country, and the motivation behind Lincoln's assassination. The National Park Service and the Ford's Theatre Society present a variety of programs year round.",
      "RecAreaMapURL": "http://www.nps.gov/foth/planyourvisit/maps.htm",
      "RecAreaLatitude": 38.89668819,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/foth/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Ford's Theatre"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -104.0375238,
          48.00075828
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "fous_socialmedia@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -104.0375238,
      "RecAreaID": 13930,
      "RecAreaPhone": "",
      "RecAreaDescription": "Between 1828 and 1867, Fort Union was the most important fur trade post on the Upper Missouri River. Here, the Assiniboine and six other Northern Plains Indian Tribes exchanged buffalo robes and smaller furs for goods from around the world, including cloth, guns, blankets, and beads. A bastion of peaceful coexistence, the post annually traded over 25,000 buffalo robes and $100,000 in merchandise.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 48.00075828,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Just off North Dakota State Highway 1804, 25 miles southwest of Williston ND and 24 miles northeast of Sidney MT.\nFrom Williston ND, Take US 2 West to 1804, turn left, follow 1804 past Fort Buford and 1.5 miles past Hwy 58 to the entrance.\nFrom Culbertson MT, Follow US 2 East to Bainville. A right turn at Bainville leads to a scenic 15 mile gravel road that is NOT recommended for motorcycles, bicycles or RVs. Alternatively, continue into North Dakota, turning right on County Rd 5 just past milepost 2. Turn right onto 1804 after crossing the railroad tracks on the overpass. Proceed 2 miles to the entrance.\nFrom Sidney MT, Proceed East on 200, through Fairview and into North Dakota. Turn left on hwy 58, the first highway turning left after entering the state. Proceed 10 miles to hwy 1804, then left 1.5 miles to the site.",
      "Keywords": "",
      "RecAreaName": "Fort Union Trading Post National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -77.04311542,
          38.88341274
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "national_mall@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -77.04311542,
      "RecAreaID": 13931,
      "RecAreaPhone": "",
      "RecAreaDescription": "\"The only thing we have to fear is fear itself....\" iconic words from an iconic president. Learn more about the man, his memorial and his lasting legacy to the Nation.",
      "RecAreaMapURL": "http://www.nps.gov/frde/planyourvisit/maps.htm",
      "RecAreaLatitude": 38.88341274,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/frde/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Franklin Delano Roosevelt Memorial"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -73.96331542,
          40.81332817
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "donald_stanko@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -73.96331542,
      "RecAreaID": 13932,
      "RecAreaPhone": "",
      "RecAreaDescription": "The final resting place of President Ulysses S. Grant and his wife, Julia, is the largest mausoleum in North America. It testifies to a people's gratitude for the man who ended the bloodiest conflict in American history as Commanding General of the Union Army and then, as President of the United States, strove to heal a nation after a civil war and make rights for all citizens a reality.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 40.81332817,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "General Grant National Memorial is located at the intersection of 122nd street and Riverside Drive, in the Morningside Heights area of Manhattan. Free parking is available along both north and south Riverside Drive, but can be limited. \nThe memorial is also easily accessible by public transportation, via subway, bus or taxi.\nBy subway: Service is available 7 days a week. Take the #1 train to West 116th St. Station at Broadway. Walk six blocks north, and two blocks west.\nBy Bus: The M-5 route follows Riverside Drive, and can stop next to the memorial.",
      "Keywords": "",
      "RecAreaName": "General Grant National Memorial"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -77.0391785582,
          38.879576807
        ]
      },
      "LastUpdatedDate": "2016-03-11",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -77.0391785582,
      "RecAreaID": 13933,
      "RecAreaPhone": "",
      "RecAreaDescription": "Dedicated on April 9, 2002, honors the little known but widely felt contributions of an important founding father.",
      "RecAreaMapURL": "http://www.nps.gov/gemm/planyourvisit/maps.htm",
      "RecAreaLatitude": 38.879576807,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "VIA METRO: The nearest stop is Smithsonian, approximately 1.2 miles from the memorial. \n\nVIA CAR: The nearest parking is to the north along Ohio Drive SW and in lots A, B, and C to the south.\n\nhttp://www.nps.gov/gemm/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "George Mason Memorial"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -76.92079458,
          38.19362603
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "GEWA_Superintendent@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -76.92079458,
      "RecAreaID": 13934,
      "RecAreaPhone": "",
      "RecAreaDescription": "In the heart of the Northern Neck of Virginia stands a tribute to America's founding father, George Washington. Although only here a short time, the ideas that Washington learned here, helped shape the man he would become and forever alter the destiny of the United States of America.",
      "RecAreaMapURL": "http://www.nps.gov/gewa/planyourvisit/maps.htm",
      "RecAreaLatitude": 38.19362603,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "George Washington Birthplace National Monument"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -75.14398924,
          39.93435005
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "indevisitorinfo@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -75.14398924,
      "RecAreaID": 13935,
      "RecAreaPhone": "",
      "RecAreaDescription": "Before Pennsylvania there was New Sweden. Discover this last historic link to a forgotten past. Visit the church's pastoral surroundings and its burial ground of patriots and ordinary citizens alike.",
      "RecAreaMapURL": "http://www.nps.gov/glde/planyourvisit/maps.htm",
      "RecAreaLatitude": 39.93435005,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Car\nFrom northbound I-95 exit at the Columbus Boulevard/Washington Avenue exit (#16). Turn left onto Christopher Columbus Boulevard. At the second traffic light, Christian Street, turn left. Church parking lot is on the left.\n\nFrom southbound I-95 exit at the Penn's Landing exit (#16), left lane off ramp). Turn right onto Christopher Columbus Boulevard. At the first light (Christian Street) turn right. Church parking lot is on the left.\n\nPublic Transportation\nSEPTA Bus Routes #25, #47 and #57 stop within 10 blocks or closer of Gloria Dei.",
      "Keywords": "",
      "RecAreaName": "Gloria Dei Church National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -112.5242653,
          41.61947508
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "gosp_interpretation@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -112.5242653,
      "RecAreaID": 13936,
      "RecAreaPhone": "",
      "RecAreaDescription": "May 10, 1869 the Union and Central Pacific Railroads joined their rails at Promontory Summit, Utah Territory and forged the destiny of a nation. Golden Spike National Historic Site shares the stories of the people and settings that define the completion of the first Transcontinental Railroad.",
      "RecAreaMapURL": "http://www.nps.gov/gosp/planyourvisit/maps.htm",
      "RecAreaLatitude": 41.61947508,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Directions - Golden Spike National Historic Site is 32 miles west of Brigham City, Utah, via Utah Hwy. 83</p>\n<p>Northbound on I-15: exit #365, turn right (west) on Hwy. 13 to Hwy. 83. Follow signs to Golden Spike. (32 miles)</p>\n<p>Southbound on I-15: exit I-84 west to exit #40 (Hwy. 102). Turn left and follow signs to Hwy. 83. Turn right on 83 and follow signs to Golden Spike. (Approximately 29 miles)</p>\n<p>Eastbound on I-84: exit #26, south on Hwy. 83 past Thiokol Rocket Park, turn right at sign to Golden Spike. (Approximately 27 miles)</p>\n<p>Westbound from Logan: Hwy. 30 west to I-15, then follow directions for Southbound on I-15. (Approximately 50 miles)</p>\n<p> </p>",
      "Keywords": "",
      "RecAreaName": "Golden Spike National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -74.01670765,
          40.69164233
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "GOIS_Information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -74.01670765,
      "RecAreaID": 13937,
      "RecAreaPhone": "",
      "RecAreaDescription": "From 1794 to 1966, the U.S. Army on Governors Island was part of the social, political, and economic tapestry of New York City. Today, the island is a vibrant summer seasonal venue of art, culture, and performance against the backdrop of two centuries of military heritage and the skyline of one of the great cities of the world. The island is open seasonally, opening May 1, 2017.",
      "RecAreaMapURL": "http://www.nps.gov/gois/planyourvisit/maps.htm",
      "RecAreaLatitude": 40.69164233,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Governors Island National Monument is located on Governors Island in New York Harbor, about 1/2 mile south of the end of Lower Manhattan. It is only accessible by ferry, departing from the Battery Maritime Building at the corner of South and Whitehall Streets and next door to the Staten Island ferry terminal in Lower Manhattan.",
      "Keywords": "",
      "RecAreaName": "Governors Island National Monument"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -73.94878487,
          40.81871605
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -73.94878487,
      "RecAreaID": 13939,
      "RecAreaPhone": "",
      "RecAreaDescription": "Alexander Hamilton created the tools for the success of the United States. From his humble beginnings as an orphan on the Caribbean island of Nevis, he became George Washington's right-hand man. Come visit Hamilton Grange and find out more about this controversial founder and the country home that he built on his Harlem estate.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 40.81871605,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Hamilton Grange is located in St. Nicholas Park facing 141st Street in Harlem. It can be reached via public trasportation.</p>\n<p>Take the A or C subway to 145th Street. Exit the station and head south along St. Nicholas Avenue. Turn right (west) at 141st Street and walk 1/2 block to the Grange.</p>",
      "Keywords": "",
      "RecAreaName": "Hamilton Grange National Memorial"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -76.58781182,
          39.4175296
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "hamp_superintendent@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -76.58781182,
      "RecAreaID": 13940,
      "RecAreaPhone": "",
      "RecAreaDescription": "The Hampton estate was created and evolved through the actions of diverse groups in a nation struggling to define its own concept of freedom.",
      "RecAreaMapURL": "http://www.nps.gov/hamp/planyourvisit/maps.htm",
      "RecAreaLatitude": 39.4175296,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Hampton is located off exit 27B of the Baltimore Beltway, I-695. After exiting I-695, turn right on to Hampton Lane. The park will be on your right, about 3/4 of a mile from the exit.",
      "Keywords": "",
      "RecAreaName": "Hampton National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -77.00377069,
          38.74646351
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "Nace_Fort_Washington_Park@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -77.00377069,
      "RecAreaID": 13941,
      "RecAreaPhone": "",
      "RecAreaDescription": "The 18th century Harmony Hall mansion is located on a 62.5-acre open pasture land estate along the Potomac River.  This estate was purchased by the National Park Service in 1966, to preserve southern Maryland cultural heritage. Surrounded by a rich landscape, it offers visitors many chances to connect with Colonial History. The park also home to the remains of the Want Water House and canal.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 38.74646351,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/haha/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Harmony Hall"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 13942,
      "RecAreaPhone": "",
      "RecAreaDescription": "Harriet Tubman was a deeply spiritual woman who lived her ideals and dedicated her life to freedom. She is the Underground Railroad's best known conductor and before the Civil War repeatedly risked her life to guide nearly 70 enslaved people north to new lives of freedom. This new national historical park preserves the same landscapes that Tubman used to carry herself and others away from slavery.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Harriet Tubman Underground Railroad National Historical Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -94.5162488,
          38.92711967
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "HSTR_Superintendent@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -94.5162488,
      "RecAreaID": 13943,
      "RecAreaPhone": "",
      "RecAreaDescription": "President Harry S Truman took America from its traditional isolationism into the age of international involvement. Despite his power, he never forgot where he came from. Today, visitors can experience the surroundings Truman knew as a young man of modest ambition through his political career and final years as a former president.",
      "RecAreaMapURL": "http://www.nps.gov/hstr/planyourvisit/maps.htm",
      "RecAreaLatitude": 38.92711967,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Harry S Truman National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -73.92516857,
          41.76639758
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "dan_whalen@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -73.92516857,
      "RecAreaID": 13945,
      "RecAreaPhone": "",
      "RecAreaDescription": "\"All that is within me cries out to go back to my home on the Hudson River\" FDR\n\nThis quote captures FDR's connection to Springwood, the estate that he loved & the place he considered home. The first US Presidential Library was started by FDR here. Visit the Home of FDR and Presidential Library & Museum to learn about the only President elected to four terms.",
      "RecAreaMapURL": "http://www.nps.gov/hofr/planyourvisit/maps.htm",
      "RecAreaLatitude": 41.76639758,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "The Home of Franklin Roosevelt is located on Route 9 in Hyde Park,NY. about 90 miles north of New York City and 70 miles south of Albany.\n\nDetailed Directions:\nhttp://www.nps.gov/hofr/planyourvisit/upload/DrivingDirections-for-Roosevelt-Website.pdf\n\nFree Shuttle Service Offered May - October:\nhttp://www.nps.gov/hofr/planyourvisit/experience-the-roosevelt-ride.htm",
      "Keywords": "",
      "RecAreaName": "Home Of Franklin D Roosevelt National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -75.76766355,
          40.20610637
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "hofu_superintendent@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -75.76766355,
      "RecAreaID": 13946,
      "RecAreaPhone": "",
      "RecAreaDescription": "Hopewell Furnace showcases an early American industrial landscape from natural resource extraction to enlightened conservation. Operating from 1771-1883, Hopewell and other \"iron plantations\" laid the foundation for the transformation of the United States into an industrial giant. The park's 848 acres and historic structures illustrate the business, technology and lifestyle of our growing nation.",
      "RecAreaMapURL": "http://www.nps.gov/hofu/planyourvisit/maps.htm",
      "RecAreaLatitude": 40.20610637,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "FROM THE NORTH:  Rt. 422 to Rt. 345 South into the town of Birdsboro.  Follow Rt. 345 South through Birdsboro and continue 5 miles beyond until you reach the park entrance (Mark Bird Lane).\nFROM THE SOUTH;  I-95 North to I-76 West.  I-76 West to PA Turnpike (also a part of 1-76). PA Turnpike West to Exit 312 (Downingtown/Rt. 100).  Rt. 100 North 9 miles to Route 23.  Route 23 West 7 miles to Route 345.  Rt. 345 North 4 miles to park entrance (Mark Bird Lane).\nFROM THE EAST:  PA Turnpike (I-76) West to Exit 312 (Downingtown/Rt. 100).  Rt. 100 North 9 miles to Route 23.  Route 23 West 7 miles to Route 345.  Rt. 345 North  4 miles to park entrance (Mark Bird Lane).\nFROM THE WEST:  PA Turnpike (I-76) East to Exit 298 (Morgantown/Rt. 10).  Route 10 South 1 mile to Rt. 23.  Rt. 23 East 5.3 miles to Route 345.  Route 345 North 4 miles to park entrance (Mark Bird Lane).",
      "Keywords": "",
      "RecAreaName": "Hopewell Furnace National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -109.5599515,
          35.70727324
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "Hutr_Ranger_Activities@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -109.5599515,
      "RecAreaID": 13947,
      "RecAreaPhone": "",
      "RecAreaDescription": "The squeaky wooden floor greets your entry into the oldest operating trading post on the Navajo Nation.  When your eyes adjust to the dim light in the \"bullpen\" you find you've just entered a mercantile.  Hubbell's has been serving Ganado selling groceries, grain, hardware, horse tack, coffee and Native American Art since 1878.  \n\nDiscover Hubbell Trading Post NHS, where history is made every day.",
      "RecAreaMapURL": "http://www.nps.gov/hutr/planyourvisit/maps.htm",
      "RecAreaLatitude": 35.70727324,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>By Car<br />\nHubbell Trading Post National Historic Site is located one mile west of Hwy. 191 in Ganado, on U.S. Highway 264. Visitors traveling on I-40 can take U.S. Highway 191 North to Ganado. If you are traveling from Gallup, New Mexico, you may take U.S. Highway 491 North to U.S. Highway 264 west toward Ganado, via Window Rock,Arizona.</p>\n<p>By Train, Bus and Airplane<br />\nGallup, New Mexico, 60 miles east of the park, is served by Amtrak, buses and a small airport. Albuquerque, New Mexico, 200 miles east, has a major airport. Flagstaff, Arizona, 180 miles west, is served by Amtrak, buses, and a municipal airport.</p>\n<p> </p>\n<p>Public Transportation<br />\nNavajo Transit System operates public buses to Ganado, for a schedule and more information call 928-729-4002.<br />\n </p>",
      "Keywords": "",
      "RecAreaName": "Hubbell Trading Post National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -156.7529136,
          71.29889155
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "janis_kozlowski@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -156.7529136,
      "RecAreaID": 13948,
      "RecAreaPhone": "",
      "RecAreaDescription": "On the rooftop of the world, the Iñupiat Heritage Center in Barrow, Alaska, tells the story of the Iñupiat people. They have thrived for thousands of years in one of the harshest climates on Earth, hunting the bowhead, or \"Agviq.\" In the 19th century, these lonely seas swarmed with commercial whalemen from New England, who also sought the bowhead for its valuable baleen and blubber.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 71.29889155,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>The Inupiat Heritage Center is located in Barrow, Alaska, the largest city in the North Slope Borough and the northernmost city in the United States. Barrow can be reached via commercial and charter flights from Anchorage and Fairbanks.<br />\n </p>",
      "Keywords": "",
      "RecAreaName": "Iñupiat Heritage Center"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -81.35086557,
          41.66486549
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "jaga_interpretation@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -81.35086557,
      "RecAreaID": 13949,
      "RecAreaPhone": "",
      "RecAreaDescription": "A front porch can serve many purposes. For some, a place to enjoy the breeze on a warm summer night. For others, a perch from which to keep eyes on what's happening in their neighborhood. In 1880, James Garfield used his front porch as a platform to greet thousands of well-wishers during his presidential campaign. Today, the porch serves as a gateway to the story of the Garfield family.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 41.66486549,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p> </p>\n<p>James A. Garfield National Historic site is most easily accessed from Interstate 90. From I-90, exit at Route 615 (Center Street). Follow 615 north for two miles until you reach Route 20 (Mentor Avenue). Turn left (west) onto Route 20. James A. Garfield National Historic Site is two miles up on the right.</p>\n<p> </p>\n<p>From State Route 2, exit at Route 615 (Center Street). Follow 615 south for two miles until you reach Route 20 (Mentor Avenue). Turn right (west) onto Route 20. James A. Garfield National Historic Site is two miles up on the right. </p>",
      "Keywords": "",
      "RecAreaName": "James A Garfield National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -90.1402241,
          29.81739855
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "JELA_interpretation@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -90.1402241,
      "RecAreaID": 13950,
      "RecAreaPhone": "",
      "RecAreaDescription": "In Jean Lafitte's day, silver and gold filled a pirate's treasure chest, but today's treasures are people, places, and memories. Discover New Orleans' rich cultural mix. Learn Cajun traditions from people who live them. Watch an alligator bask on a bayou's bank. Walk in the footsteps of the men who fought at 1815's Battle of New Orleans. Follow the link to discover the treasure of Jean Lafitte.",
      "RecAreaMapURL": "http://www.nps.gov/jela/planyourvisit/maps.htm",
      "RecAreaLatitude": 29.81739855,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>The six sites of Jean Lafitte National Historical Park and Preserve are scattered through south Louisiana, from the bayous to the prairies. They offer a 23,000-acre nature preserve, cultural heritage centers, the site of the Battle of New Orleans, and a national cemetery. See the park website for the big picture and for information about each site. Note that latitude/longitude shown is for park headquarters. For further assistance, call sites for specific directions.</p>\n<p>Acadian Cultural Center (Lafayette) 337-232-0789<br />\nBarataria Preserve (Marrero) 504-689-2630 ext. 10 <br />\nChalmette Battlefield and National Cemetery (Chalmette) 504-589-281-0510<br />\nFrench Quarter Visitor Center (New Orleans) 504-589-2636 ext. 1<br />\nPrairie Acadian Cultural Center (Eunice) 337-457-8499<br />\nWetlands Acadian Cultural Center (Thibodaux) 985-448-1375<br />\nPark headquarters (upstairs from the French Quarter Visitor Center in New Orleans) 504-589-3882 ext. 100 <br />\n </p>",
      "Keywords": "",
      "RecAreaName": "Jean Lafitte National Historical Park and Preserve"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -90.18039557,
          38.62328806
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "jeff_superintendent@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -90.18039557,
      "RecAreaID": 13951,
      "RecAreaPhone": "",
      "RecAreaDescription": "The Gateway Arch reflects St. Louis' role in the Westward Expansion of the United States during the nineteenth century. The park is a memorial to Thomas Jefferson's role in opening the West, to the pioneers who helped shape its history, and to Dred Scott who sued for his freedom in the Old Courthouse.\n\nPLEASE  NOTE:\nThe Tram Ride to the Top of the Arch is TEMPORARILY CLOSED for system improvements",
      "RecAreaMapURL": "http://www.nps.gov/jeff/planyourvisit/maps.htm",
      "RecAreaLatitude": 38.62328806,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Jefferson National Expansion Memorial is located in the heart of downtown St. Louis on the Mississippi River. Interstate Routes 44, 55, 64 and 70 converge near the park.\n\nGPS coordinates for the Old Courthouse are N38°37.5201, W090°11.33214.\n\nFor complete driving directions and parking information see the park website at http://www.nps.gov/jeff/planyourvisit/directions.htm\n\nThe Jefferson Memorial is easily accessible from St. Louis' MetroLink Lightrail. Board at any station and exit at Laclede's Landing and follow the signs to the Memorial (a five minute walk). The trip from Lambert National Airport to Jefferson National Expansion Memorial is 28 minutes, with departures to and from Lambert every 15-20 minutes.",
      "Keywords": "",
      "RecAreaName": "Jefferson National Expansion Memorial"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -84.41606653,
          32.03059943
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "kevin_alexander@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -84.41606653,
      "RecAreaID": 13952,
      "RecAreaPhone": "",
      "RecAreaDescription": "Few U.S. Presidents have had such close ties with where they were born and raised. The rural southern culture of Plains, Georgia, that revolves around farming, church and school, had a large influence in molding the character and in shaping the political policies of the 39th President of the United States.",
      "RecAreaMapURL": "http://www.nps.gov/jica/planyourvisit/maps.htm",
      "RecAreaLatitude": 32.03059943,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Jimmy Carter National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -77.05014,
          38.886908
        ]
      },
      "LastUpdatedDate": "2016-03-11",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -77.05014,
      "RecAreaID": 13953,
      "RecAreaPhone": "",
      "RecAreaDescription": "During his lifetime, John Ericsson revolutionized several facets of technology. The Swedish-born engineer-inventor is best known for his work during the Civil War when he transformed naval warfare through his design of the iron-plated USS Monitor. The movements of Ericsson's pencil across his drafting board were as crucial to victory as the movements of Lincoln's armies across battlefields.",
      "RecAreaMapURL": "http://www.nps.gov/joer/planyourvisit/maps.htm",
      "RecAreaLatitude": 38.886908,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "The John Ericsson Memorial is at the intersection of Independence Ave SW and Ohio Drive SW in Washington, D.C. The Lincoln Memorial is nearby to the north.\n\nVIA METRO: From the Foggy Bottom metro station, walk south on 23rd street past the Lincoln Memorial. Alternatively, from Smithsonian metro stop, walk west to follow Independence Ave, passing the Washington Monument and the D.C. War Memorial.\n\nVIA CAR: Street parking is available on Ohio Drive SW.\n\nhttp://www.nps.gov/joer/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "John Ericsson National Memorial"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -122.1326097,
          37.9828422
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "thaddeus_shay@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -122.1326097,
      "RecAreaID": 13954,
      "RecAreaPhone": "",
      "RecAreaDescription": "John Muir played many roles in his life, all of which helped him succeed in his role as an advocate for Nature. As America's most famous naturalist and conservationist, Muir fought to protect the wild places he loved, places we can still visit today. Muir's writings convinced the U.S. government to protect Yosemite, Sequoia, Grand Canyon and Mt. Rainier as national parks.",
      "RecAreaMapURL": "http://www.nps.gov/jomu/planyourvisit/maps.htm",
      "RecAreaLatitude": 37.9828422,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Directions<br />\nGetting There</p>\n<p>Planes<br />\nBoth Oakland and San Francisco International Airports provide access to the area.<br />\n </p>\n<p>Trains<br />\nBART trains run to the Pleasant Hill station. We are closest to that station. Take the 16 bus to the site.<br />\nThere is also an Amtrak station in downtown Martinez (2 miles from here). Take the 16 bus to the site.</p>\n<p>Automobiles<br />\nEastbound I-80 to eastbound Highway 4. Exit at Alhambra Avenue, turning left at bottom of the ramp. Cross beneath highway; Site is immediately on your left.<br />\nI-680 northbound or southbound to Highway 4 westbound. Exit at Alhambra Ave. Turn right at bottom of ramp; Site is located immediately on your left.</p>\n<p> </p>",
      "Keywords": "",
      "RecAreaName": "John Muir National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2013-09-09",
      "RecAreaEmail": "ruth_aloua@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 13955,
      "RecAreaPhone": "",
      "RecAreaDescription": "To survive in a hot and arid environment the native Hawaiians (kanaka maoli) used ancient fishing skills, including the building of fishponds, and the knowledge of the location of precious fresh water (wai) that flows into the many brackish pools throughout the park.  The spirit of the people (poe) and the knowledge of the elders (kupuna) created a tradition of respect and reverance for this area",
      "RecAreaMapURL": "http://www.nps.gov/kaho/planyourvisit/maps.htm",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Kaloko-Honok?hau National Historical Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -77.04773857,
          38.88784226
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "national_mall@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -77.04773857,
      "RecAreaID": 13956,
      "RecAreaPhone": "",
      "RecAreaDescription": "Our nation honors her sons and daughters who answered the call to defend a country they never knew and a people they never met.",
      "RecAreaMapURL": "http://www.nps.gov/kowa/planyourvisit/maps.htm",
      "RecAreaLatitude": 38.88784226,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "The Korean War Veterans Memorial is located southeast of the nearby Lincoln Memorial, near the intersection of Daniel French Drive and Independence Ave SW.\nVIA METRO: From Foggy Bottom, walk south on 23rd street toward the Lincoln Memorial. Continue across the plaza in front of the Lincoln Memorial; the Korean War Veterans Memorial is on the left.\nVIA CAR: Parking near the memorial is extremely limited. Several handicap spaces are available on Daniel Chester French Drive. Street parking is available on Ohio Drive SW.\nhttp://www.nps.gov/kowa/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Korean War Veterans Memorial"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -77.05017778,
          38.88927229
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "national_mall@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -77.05017778,
      "RecAreaID": 13957,
      "RecAreaPhone": "",
      "RecAreaDescription": "\"In this temple, as in the hearts of the people for whom he saved the Union, the memory of Abraham Lincoln is enshrined forever.\" Beneath these words, the 16th President of the United States sits immortalized in marble as an enduring symbol of unity, strength, and wisdom.",
      "RecAreaMapURL": "http://www.nps.gov/linc/planyourvisit/maps.htm",
      "RecAreaLatitude": 38.88927229,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/linc/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Lincoln Memorial"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -86.99656861,
          38.11817004
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "libo_superintendent@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -86.99656861,
      "RecAreaID": 13958,
      "RecAreaPhone": "",
      "RecAreaDescription": "Abraham Lincoln grew from youth to manhood on this southern Indiana soil.  Many character and moral traits of one of the world's most respected leaders was formed and nurtured here.  Explore Lincoln's boyhood and learn about the boy who would one day become the leader of our nation.",
      "RecAreaMapURL": "http://www.nps.gov/libo/planyourvisit/maps.htm",
      "RecAreaLatitude": 38.11817004,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "By Car\n\nFrom the east or west - From Interstate 64, exit onto US 231, (exit 57A). Travel south on US 231 to Indiana\nHighway 162. Take the Santa Claus/Gentryville exit. Turn west (right) on Indiana Highway 162; go 2-1/2 miles\nto the park entrance on the right.\n\nFrom the north or south - From US 231 take the Santa Claus/Gentryville exit. Turn west on Indiana Highway\n162; go 2-1/2 miles to the park entrance on the right.\n\nBy Plane\n\nThe Evansville Regional Airport (EVV) is in Evansville, IN (43 miles from Lincoln Boyhood) has connections to\nChicago, Dallas, Atlanta and Detroit. The airport is serviced by American Eagle and Delta.",
      "Keywords": "",
      "RecAreaName": "Lincoln Boyhood National Memorial"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -89.64513397,
          39.79715642
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "liho_information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -89.64513397,
      "RecAreaID": 13959,
      "RecAreaPhone": "",
      "RecAreaDescription": "Abraham Lincoln believed in the ideal that everyone in America should have the opportunity to improve his/her economic and social condition.  Lincoln's life was the embodiment of that idea.  We know him as the sixteenth president but he was also a spouse, parent, and neighbor who experienced the same hopes, dreams, and challenges of life that are still experienced by many people.",
      "RecAreaMapURL": "http://www.nps.gov/liho/planyourvisit/maps.htm",
      "RecAreaLatitude": 39.79715642,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Lincoln Home National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -92.29987899,
          34.7369465
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "chsc_info@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -92.29987899,
      "RecAreaID": 13960,
      "RecAreaPhone": "",
      "RecAreaDescription": "Little Rock Central High School is recognized for the role it played in the desegregation of public schools in the United States.  The nine African-American students' persistence in attending the formerly all-white Central High School was the most prominent national example of the implementation of the May 17, 1954 Supreme Court decision Brown v. Board of Education.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 34.7369465,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Take the Martin Luther King, Jr. Boulevard exit off Interstate 630, go south on Martin Luther King Blvd., heading away from the Arkansas State Capitol.  Turn right (west) on Daisy L. Gatson Bates Drive.  The National Park Visitor Center is on the right approximately 6 blocks west, at the corner of W. Daisy L. Gatson Bates Drive and Park Street.  The Visitor Center is a located directly across from the historic Magnolia Gas Station and diagonally across from the Little Rock Central High School campus.  All visitors should park in the free National Park Visitor Center parking lot, including buses and recreational vehicles.",
      "Keywords": "",
      "RecAreaName": "Little Rock Central High School National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -71.12636956,
          42.37698854
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "garrett_cloer@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -71.12636956,
      "RecAreaID": 13961,
      "RecAreaPhone": "",
      "RecAreaDescription": "Longfellow House - Washington's Headquarters National Historic Site preserves the home of Henry W. Longfellow, one of the world's foremost 19th century poets. The house also served as headquarters for General George Washington during the Siege of Boston, July 1775 - April 1776. In addition to its rich history, the site offers unique opportunities to explore 19th century literature and arts.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 42.37698854,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "See http://www.nps.gov/long/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Longfellow House Washington's Headquarters National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -71.31588673,
          42.6455371
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "lowe_superintendent@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -71.31588673,
      "RecAreaID": 13962,
      "RecAreaPhone": "",
      "RecAreaDescription": "Discover the continuing revolution. Lowell's water-powered textile mills catapulted the nation – including immigrant families and early female factory workers – into an uncertain new industrial era. Nearly 200 years later, the changes that began here still reverberate in our shifting global economy. Explore Lowell, a living monument to the dynamic human story of the Industrial Revolution.",
      "RecAreaMapURL": "http://www.nps.gov/lowe/planyourvisit/maps.htm",
      "RecAreaLatitude": 42.6455371,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Driving Directions: \nFrom either Interstate Route 495 (Exit 35C) or Route 3 (Exit 30A if traveling southbound, Exit 30B if traveling northbound). Take the Lowell Connector to Thorndike Street (Exit 5B). Please note that the Connector is closely monitored for speed. On Thorndike Street, which becomes Dutton Street, continue straight through four traffic lights. At the fifth traffic light, turn right from Dutton Street into the Visitor Parking Lot. Free parking is available here during Park operating hours in the gated section of the lot with ticket validation at the Visitor Center. From the lot, follow the signs and walk to the Visitor Center through the mill archways and courtyard to the left section of the mill building on the far side of the courtyard.\n\nGPS Address- 304 Dutton Street, Lowell, Massachusetts.\nPublic Transportation- Commuter rail service is available from Boston's North Station to Lowell's Gallagher Terminal (a 10-minute walk from the Visitor Center).",
      "Keywords": "",
      "RecAreaName": "Lowell National Historical Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -73.99001777,
          40.71861134
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "LESTM@tenement.org",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -73.99001777,
      "RecAreaID": 13963,
      "RecAreaPhone": "",
      "RecAreaDescription": "The heart of the museum is a historic tenement, home to an estimated 7,000 people from over 20 nations between 1863 and 1935. The tenement's cramped living spaces, the lives of past residents and the history of the Lower East Side, contribute to its representation of the immigrant experience. Throughout the year, programs such as walking tours and readings are offered.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 40.71861134,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Lower East Side Tenement Museum National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -84.37256768,
          33.75618241
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "judy_forte@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -84.37256768,
      "RecAreaID": 13964,
      "RecAreaPhone": "",
      "RecAreaDescription": "A young boy grows up in a time of segregation...A dreamer is moved by destiny into leadership of the modern civil rights movement...This was Martin Luther King, Jr.  Come hear his story, visit the home of his birth, and where he played as a child.  Walk in his footsteps, and hear his voice in the church where he moved hearts and minds.  Marvel at how he was an instrument for social change.",
      "RecAreaMapURL": "http://www.nps.gov/malu/planyourvisit/maps.htm",
      "RecAreaLatitude": 33.75618241,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Directions by Car:\nFrom Interstate 75/85 North or South take exit #248C Freedom Parkway. Southbound travelers must merge over 4 lanes, in order to make the turn onto Boulevard. At the traffic light, turn right onto Boulevard NE, and make another immediate right turn, at the next traffic light, onto John Wesley Dobbs Avenue. The visitor parking lot will be on the left. Bus parking is located on either side of John Wesley Dobbs Avenue.\n\nFrom Interstate 20 East or West, exit at Interstate 75/85 North take exit #248C Freedom Parkway. At the traffic light, turn right onto Boulevard NE, and make another immediate right turn, at the next traffic light, onto John Wesley Dobbs Avenue. The visitor parking lot will be on the left. Bus parking is located on either side of John Wesley Dobbs Avenue.",
      "Keywords": "",
      "RecAreaName": "Martin Luther King Jr National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -77.03096742,
          38.90819107
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -77.03096742,
      "RecAreaID": 13965,
      "RecAreaPhone": "",
      "RecAreaDescription": "Mary McLeod Bethune achieved her greatest recognition at the Washington, DC townhouse that is now this National Historic Site. The Council House was the first headquarters of the National Council of Negro Women (NCNW) and was Bethune's last home in Washington, DC. From here, Bethune and the NCNW spearheaded strategies and developed programs that advanced the interests of African American women.",
      "RecAreaMapURL": "http://www.nps.gov/mamc/planyourvisit/maps.htm",
      "RecAreaLatitude": 38.90819107,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/mamc/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Mary McLeod Bethune Council House National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -114.4449868,
          42.80586068
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "miin_information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -114.4449868,
      "RecAreaID": 13967,
      "RecAreaPhone": "",
      "RecAreaDescription": "The Pearl Harbor attack intensified existing hostility towards Japanese Americans. As wartime hysteria mounted, President Roosevelt signed Executive Order 9066 forcing over 120,000 West Coast persons of Japanese ancestry (Nikkei) to leave their homes, jobs, and lives behind and move to one of ten Relocation Centers. This single largest forced relocation in U.S. history is Minidoka's story.",
      "RecAreaMapURL": "http://www.nps.gov/miin/planyourvisit/maps.htm",
      "RecAreaLatitude": 42.80586068,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Minidoka National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2015-10-22",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 13968,
      "RecAreaPhone": "",
      "RecAreaDescription": "Through stone architecture and bronze sculptures, the World War II Memorial recognizes the ways Americans served, honors those who fell, and recognizes the victory they achieved to restore freedom and end tyranny around the globe.",
      "RecAreaMapURL": "http://www.nps.gov/wwii/planyourvisit/maps.htm",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/wwii/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "National World War II Memorial"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -77.027556,
          38.894235
        ]
      },
      "LastUpdatedDate": "2017-02-01",
      "RecAreaEmail": "national_mall@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -77.027556,
      "RecAreaID": 13970,
      "RecAreaPhone": "",
      "RecAreaDescription": "Built in 1899, the Old Post Office's clock tower offers panoramic views of Washington, D.C.  The tower houses the Congress Bells, a Bicentennial gift from England commemorating friendship between the nations. The Tower remains closed as we work out the details and timeline for reopening with the General Service Administration, owners of the building.",
      "RecAreaMapURL": "http://www.nps.gov/opot/planyourvisit/maps.htm",
      "RecAreaLatitude": 38.894235,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "VIA METRO: Use Federal Triangle metro and proceed north to Pennsylvania Avenue, then turn left on Pennsylvania Ave.\nVIA CAR: Street parking is very limited. Parking garages may be found in the nearby area.\nhttp://www.nps.gov/opot/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Old Post Office Tower"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -77.01131457,
          38.80578214
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "pisc_superintendent@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -77.01131457,
      "RecAreaID": 13971,
      "RecAreaPhone": "",
      "RecAreaDescription": "The diverse history of Maryland and our national heritage can be experienced at Oxon Cove Park. Through hands-on programs and other activities, you can experience farm life and how its changed over time.  Explore how the park evolved from a plantation home during the War of 1812, to a hospital farm, to the park you can visit today.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 38.80578214,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/oxhi/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Oxon Cove  Park & Oxon Hill Farm"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -77.051877737,
          38.9401100037
        ]
      },
      "LastUpdatedDate": "2016-09-13",
      "RecAreaEmail": "ROCR_superintendent@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -77.051877737,
      "RecAreaID": 13972,
      "RecAreaPhone": "",
      "RecAreaDescription": "Peirce Mill was built in the 1820's, and operated commercially until 1897. The United States Government acquired the mill as part of Rock Creek in 1892. Peirce Mill has recently been refurbished and operates on special occasions. Peirce Mill is on the National Register of Historic Places.",
      "RecAreaMapURL": "http://www.nps.gov/pimi/planyourvisit/maps.htm",
      "RecAreaLatitude": 38.9401100037,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/pimi/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Peirce Mill"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -122.0301603,
          38.05685472
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "joanne_jarvis@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -122.0301603,
      "RecAreaID": 13974,
      "RecAreaPhone": "",
      "RecAreaDescription": "On the evening of July 17, 1944, residents in the San Francisco east bay area were jolted awake by a massive explosion that cracked windows and lit up the night sky. At Port Chicago Naval Magazine, 320 men were instantly killed when two ships being loaded with ammunition for the Pacific theater troops blew up. It was WWII's worst home front disaster.",
      "RecAreaMapURL": "http://www.nps.gov/poch/planyourvisit/maps.htm",
      "RecAreaLatitude": 38.05685472,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Reservations are required to visit the Memorial. All visitors are shuttled to the Memorial on National Park Service vehicles from the Concord Naval Weapons Station Identity (ID) Office.<br />\n </p>\n<p>Car: From San Francisco, take Interstate 80 (Bay Bridge) to Hwy 4 East...from Berkeley & Oakland, take Interstate 80 West to Hwy 4 East...from San Jose or Walnut Creek, take Interstate 680 north to Hwy 242. Exit at Port Chicago Hwy North. After passing under Hwy 4, go through 3 lights, pass the tan buildings on your right, make a right turn into visitor parking lot at Military Ocean Terminal Concord.<br />\n </p>\n<p>Airports: Accessible from Oakland International Airport, approx. 45 minutes; San Francisco International Airport, approx. 60 minutes; San Jose International Airport, approx. 90 minutes (estimated times are without traffic).<br />\n<br />\n </p>",
      "Keywords": "",
      "RecAreaName": "Port Chicago Naval Magazine National Memorial"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -77.03654147,
          38.89541886
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -77.03654147,
      "RecAreaID": 13975,
      "RecAreaPhone": "",
      "RecAreaDescription": "Every president except George Washington has called the White House and its surrounding grounds his place of work, rest, and solitude. Recognizable around the world, the White House stands as a symbol of democracy. The White House and its park grounds serve not only as the seat of the executive branch of government of the United States of America, but also as an iconic place for civil discourse.",
      "RecAreaMapURL": "http://www.nps.gov/whho/planyourvisit/maps.htm",
      "RecAreaLatitude": 38.89541886,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "The White House Visitor Center is located inside the north end of the Department of Commerce Building between 14th and 15th streets on Pennsylvania Avenue, Northwest.\n\nVIA METRO: We strongly encourage the use of public transportation; Metro Center and Federal Triangle are the nearest metro stations. Bus service includes the 11Y, several of the 30-series, and other Metrobus routes. Nearby parking is very limited. Bicycle parking is available along the southeastern side of the Ellipse Visitor Pavilion, opposite the White House Visitor Center. A Capital Bikeshare station is located at the intersection of 14th Street and D Street, Northwest. \n\nNote that our mailing address is: President's Park, 1100 Ohio Drive, SW, Washington, D.C.",
      "Keywords": "",
      "RecAreaName": "President's Park (White House)"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2013-09-09",
      "RecAreaEmail": "eric_andersen@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 13976,
      "RecAreaPhone": "",
      "RecAreaDescription": "Imagine you had just broken the sacred laws, the Kapu, and the only punishment was death.  Your only chance of survival is to elude your pursuers and reach the Pu&apos;uhonua, a place of refuge.  The Pu&apos;uhonua protected the kapu breaker, civilians during the time of war and the defeated warriors.  No harm could come to those who reached the boundaries of the place of refuge.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/puho/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Pu`uhonua O H?naunau National Historical Park"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2013-09-09",
      "RecAreaEmail": "gregory_cunningham@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 13977,
      "RecAreaPhone": "",
      "RecAreaDescription": "How many places in America can you walk in the footsteps of a king? Where else has a stranded sailor risen up to become a great chief over an entire island? Where else can you experience the culminating event of a people, foretold from centuries past? And where else can you stand on a beach and watch as sharks pass over a submerged temple? Experience all this &amp; much more only at Pu`ukohola Heiau!",
      "RecAreaMapURL": "http://www.nps.gov/puhe/planyourvisit/maps.htm",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/puhe/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Pu`ukohol? Heiau National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -73.82577276,
          40.89283511
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "dho59stpaul@yahoo.com",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -73.82577276,
      "RecAreaID": 13978,
      "RecAreaPhone": "",
      "RecAreaDescription": "Since 1665, Saint Paul's Church played a vital role in the colonial life of Eastchester, 20 miles north of New York City. Townspeople voted at the nearby Village Green; local militia drilled outside its doors. But the American Revolution changed everything. American, British and Hessian troops tore down the old wooden meetinghouse for firewood and used the unfinished stone chapel as a hospital.",
      "RecAreaMapURL": "http://www.nps.gov/sapa/planyourvisit/maps.htm",
      "RecAreaLatitude": 40.89283511,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Saint Paul's Church National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -75.14732045,
          39.94345312
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "indevisitorinfo@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -75.14732045,
      "RecAreaID": 13979,
      "RecAreaPhone": "",
      "RecAreaDescription": "Visit the house where wounded Polish freedom fighter Thaddeus Kosciuszko lived and hear how this brilliant military engineer designed successful fortifications during the American Revolution. See the room where he received notable visitors such as Chief Little Turtle and Thomas Jefferson.",
      "RecAreaMapURL": "http://www.nps.gov/thko/planyourvisit/maps.htm",
      "RecAreaLatitude": 39.94345312,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "By Car\nThere is limited parking at the site.  We recommend you park at the Independence Visitor Center and walk. \n\nEastbound, via I-76 (the Schuylkill Expressway) - Exit onto I-676 East (toward \"Central Philadelphia) and follow it to the 6th Street exit. At the bottom of the exit ramp follow signs for Independence Park Visitor Center.\n\nWestbound by car: After crossing the Ben Franklin Bridge - stay in the right hand lane and follow signs for Independence Visitor Center.\n\nNorthbound by car: via I-95 - Exit at \"Independence Hall/Historic Area\". At bottom of ramp follow signs for Independence Visitor Center.\n\nSouthbound by car, via I-95 - Use \"Independence Hall/Historic Area\" exit. At the bottom of the exit ramp follow signs for Independence Visitor Center.\n\nPublic Transportation\nTake the Market- Frankford subway east to 5th and Market Streets. Walk two blocks east to 3rd Street. Travel south and proceed 5 blocks to the Kosciuszko House.",
      "Keywords": "",
      "RecAreaName": "Thaddeus Kosciuszko National Memorial"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -77.0603835583,
          38.9053597235
        ]
      },
      "LastUpdatedDate": "2016-09-13",
      "RecAreaEmail": "ROCR_Superintendent@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -77.0603835583,
      "RecAreaID": 13980,
      "RecAreaPhone": "",
      "RecAreaDescription": "As the nation's capital, Washington, DC is known primarily as a city of grand memorials to national leaders and significant events. But aren't the lives of DC's \"regular\" citizens and \"regular\" buildings significant too? The oldest building in DC, Old Stone House commemorates the daily lives of Georgetown's early residents. The house serves as a great example of Revolutionary War-era architecture.",
      "RecAreaMapURL": "http://www.nps.gov/olst/planyourvisit/maps.htm",
      "RecAreaLatitude": 38.9053597235,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/olst/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "The Old Stone House"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -73.98903703,
          40.7386469
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -73.98903703,
      "RecAreaID": 13981,
      "RecAreaPhone": "",
      "RecAreaDescription": "This is the boyhood home of the first U.S. president to be born in New York City. Raised in a townhouse at 28 E. 20th St., Theodore Roosevelt would grow up to be our 26th President and become immortalized on Mount Rushmore. However, he started life as a sickly yet bright boy who exercised to improve his health and began a lifelong passion for the \"strenuous life.\"",
      "RecAreaMapURL": "http://www.nps.gov/thrb/planyourvisit/maps.htm",
      "RecAreaLatitude": 40.7386469,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>By Public Transportation: Lexington Avenue #6 subway trains stop at the East 23rd Street station on Park Avenue South. Express #4 and #5 subways stop at Union Square. N and R subway trains stop at the East 23rd Street station on Broadway; frequent service is provided 24 hours a day, seven days a week. <br />\nFrequent bus service is provided by routes M-6 and M-7 on Broadway, by route M-1 on Park Avenue South and by route M-23 operating cross town on 23rd Street; service is provided 24 hours a day, seven days a week.</p>",
      "Keywords": "",
      "RecAreaName": "Theodore Roosevelt Birthplace National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -78.87248411,
          42.90146781
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "thri_administration@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -78.87248411,
      "RecAreaID": 13982,
      "RecAreaPhone": "",
      "RecAreaDescription": "As president, Theodore Roosevelt created protections for ordinary citizens, began regulation of big business, and made the US a major force in international affairs. Yet one of the most important presidencies in America's history nearly didn't happen. See the place where a brief, emotional, and improvised ceremony in Buffalo, NY brought TR into office, and forever altered the nation.",
      "RecAreaMapURL": "http://www.nps.gov/thri/planyourvisit/maps.htm",
      "RecAreaLatitude": 42.90146781,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Theodore Roosevelt Inaugural National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -77.03632572,
          38.88101431
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "national_mall@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -77.03632572,
      "RecAreaID": 13983,
      "RecAreaPhone": "",
      "RecAreaDescription": "Author of the Declaration of Independence, Statesman and Visionary for the founding of a Nation.",
      "RecAreaMapURL": "http://www.nps.gov/thje/planyourvisit/maps.htm",
      "RecAreaLatitude": 38.88101431,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "VIA METRO: From the Smithsonian Metro station, walk west along Independence Avenue. Turn left on 15th St / Raoul Wallenberg Place. Cross Maine Avenue at the crosswalk, and follow the sidewalk to the left to walk along the Tidal Basin to the Thomas Jefferson Memorial.\nVIA CAR: Handicap parking is available on East Basin Drive near the memorial. Street parking is available on Ohio Drive SW to the north, and in three lots on Ohio Drive SW to the south.\nhttp://www.nps.gov/thje/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Thomas Jefferson Memorial"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -77.037813,
          38.52934443
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -77.037813,
      "RecAreaID": 13984,
      "RecAreaPhone": "",
      "RecAreaDescription": "Prior to the Revolutionary War, Thomas Stone led a very comfortable life as a planter and lawyer. After realizing war with Great Britain was inevitable, he risked everything he held dear-- life, fortune, and sacred honor-- to safeguard American rights. To that end, Thomas Stone became one of 56 men to sign one of the most important documents in World History; the Declaration of Independence.",
      "RecAreaMapURL": "http://www.nps.gov/thst/planyourvisit/maps.htm",
      "RecAreaLatitude": 38.52934443,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>Car<br />\nLocated in Charles County, Maryland, Thomas Stone National Historic Site is 30 miles south of Washington D.C.<br />\nThe site is located 5 miles west of HWY 301 (La Plata, MD) on Rose Hill Road between Maryland Routes 6 and 225 near Port Tobacco, Maryland.</p>\n<p><br />\nPublic Transportation<br />\nNo public transportation is available.<br />\n </p>",
      "Keywords": "",
      "RecAreaName": "Thomas Stone National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -71.31211638,
          41.48928393
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "info@tourosynagogue.org",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -71.31211638,
      "RecAreaID": 13985,
      "RecAreaPhone": "",
      "RecAreaDescription": "Touro Synagogue, a building of exquisite beauty and design, steeped in history and ideals, and one of the most historically significant Jewish buildings in America, was designated a National Historic Site in 1946.  Dedicated in 1763, it still serves an active congregation and each year greets over 30,000 visitors who come to see the magnificent interior and hear its remarkable story.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 41.48928393,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Touro Synagogue National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -73.94205557,
          41.79697937
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "dan_whalen@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -73.94205557,
      "RecAreaID": 13987,
      "RecAreaPhone": "",
      "RecAreaDescription": "Vanderbilt Mansion NHS, in terms of architecture, interiors, mechanical systems, road systems and landscape, is a remarkably complete example of a gilded-age country place, illustrating the political, economic, social, cultural, and demographic changes that occurred as America industrialized in the years after the Civil War.",
      "RecAreaMapURL": "http://www.nps.gov",
      "RecAreaLatitude": 41.79697937,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Vanderbilt Mansion is in the Hudson River Valley in Dutchess County, New York. We are on Route 9 in Hyde Park, about 90 miles north of New York City and 70 miles south of Albany.\n\nFor Detailed Directions:\nhttp://www.nps.gov/vama/planyourvisit/upload/DrivingDirections-for-Vanderbilt-Website.pdf\n\nFree Shuttle Service Offered May - October:\nhttp://www.nps.gov/hofr/planyourvisit/experience-the-roosevelt-ride.htm",
      "Keywords": "",
      "RecAreaName": "Vanderbilt Mansion National Historic Site"
    },
     {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -77.04765735,
          38.89096297
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "national_mall@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -77.04765735,
      "RecAreaID": 13988,
      "RecAreaPhone": "",
      "RecAreaDescription": "Honoring the men and women who served in the controversial Vietnam War, the Vietnam Veterans Memorial chronologically lists the names of more than 58,000 Americans who gave their lives in service to their country.",
      "RecAreaMapURL": "http://www.nps.gov/vive/planyourvisit/maps.htm",
      "RecAreaLatitude": 38.89096297,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/vive/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Vietnam Veterans Memorial"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -77.03546586,
          38.88865182
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "national_mall@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -77.03546586,
      "RecAreaID": 13989,
      "RecAreaPhone": "",
      "RecAreaDescription": "Built to honor George Washington, the United States' first president, the 555-foot marble obelisk towers over Washington, D.C. The Washington Monument is currently closed to visitors to allow for modernization of the elevator.",
      "RecAreaMapURL": "http://www.nps.gov/wamo/planyourvisit/maps.htm",
      "RecAreaLatitude": 38.88865182,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "http://www.nps.gov/wamo/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "Washington Monument"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -84.50758951,
          39.11970352
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "kerry_wood@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -84.50758951,
      "RecAreaID": 13990,
      "RecAreaPhone": "",
      "RecAreaDescription": "High atop one of Cincinnati's most prominent hilltops stands the two-story Greek Revival house where William Howard Taft was born and grew up. Hard work, a good education, and an interest in civic duty are attributes that made the Taft family outstanding leaders over the years. The environment that shaped Taft's character and philosophy  is highlighted  on a visit to the site.",
      "RecAreaMapURL": "http://www.nps.gov/wiho/planyourvisit/maps.htm",
      "RecAreaLatitude": 39.11970352,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>The Taft house is in the Mount Auburn section of Cincinnati.<br />\n </p>\n<p>From I-75 North or South: Follow signs to I-71 North <br />\nin Downtown Cincinnati.<br />\n </p>\n<p>I-71 North: Exit # 2, Reading Rd. – Florence, Stay in Right lane of exit, turn left at light Go up hill on Dorchester, Right turn on Auburn, ½ block to the William Howard Taft boyhood home.</p>\n<p>I-71 South: Exit # 3, Taft Rd. – Go ¾ mile on Taft, turn left on Auburn- Go ½ mile to Taft boyhood home address 2038 Auburn Ave.</p>\n<p>I-471 North: Take Liberty Street exit and go ¼ mile. Right on Sycamore, at top of hill, turn left on Auburn, Go ½ block on Auburn and arrive at 2038 Auburn Ave the William Howard Taft boyhood home.</p>\n<p> </p>",
      "Keywords": "",
      "RecAreaName": "William Howard Taft National Historic Site"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -77.0403759,
          38.88923917
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "national_mall@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -77.0403759,
      "RecAreaID": 13991,
      "RecAreaPhone": "",
      "RecAreaDescription": "Through stone architecture and bronze sculptures, the World War II Memorial recognizes the ways Americans served, honors those who fell, and recognizes the victory they achieved to restore freedom and end tyranny around the globe.",
      "RecAreaMapURL": "http://www.nps.gov/wwii/planyourvisit/maps.htm",
      "RecAreaLatitude": 38.88923917,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "The World War II Memorial is located in downtown Washington, D.C. near the intersection of 17th Street SW and Independence Ave. SW.\nVIA METRO: Exit the Smithsonian Metro station's Mall exit and proceed west following the path toward the Washington Monument. You will cross 14th and 15th streets, pass the Washington Monument, and then cross 17th Street to enter the memorial.\nVIA CAR: Parking is available at the paddle boat parking area off of southbound Maine Avenue. Handicap parking is available at the memorial on Home Front Drive, accessed via southbound 17th Street.\nhttp://www.nps.gov/wwii/planyourvisit/directions.htm",
      "Keywords": "",
      "RecAreaName": "World War II Memorial"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -76.29900672,
          37.38623205
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "Roger_Green@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -76.29900672,
      "RecAreaID": 13992,
      "RecAreaPhone": "",
      "RecAreaDescription": "Discover what it took for the United States to be independent as you explore the site of the last major battle of the Revolutionary War.  Here at Yorktown, in the fall of 1781, General George Washington, with allied American and French forces, besieged General Charles Lord Cornwallis's British army.  On October 19, Cornwallis surrendered, effectively ending the war and ensuring independence.",
      "RecAreaMapURL": "http://www.nps.gov/york/planyourvisit/maps.htm",
      "RecAreaLatitude": 37.38623205,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Yorktown Battlefield Part of Colonial National Historical Park"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 14435,
      "RecAreaPhone": "",
      "RecAreaDescription": "For millions of years, granite monadnocks have stood watch over the rivers and forests of Georgia. These breathtaking landscapes are the cornerstones of the Arabia Mountain National Heritage Area, which serves to protect & promote these outcrops and the surrounding region as a recreational wonder and national treasure.",
      "RecAreaMapURL": "",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Arabia Mountain National Heritage Area"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 14436,
      "RecAreaPhone": "",
      "RecAreaDescription": "Our country's landscape is rich and mysterious.  It is filled with twisting bayous, rivers and America's largest river swamp.  We have fields of sugar cane and cotton, ancient live oaks and towering cypress.  Alligators, raccoons, and even bears roam our lands while 270 species of birds take to our skies.  From our waters come catfish, shrimp, oysters and the crawfish that make us so well known.",
      "RecAreaMapURL": "",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Atchafalaya National Heritage Area"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 14437,
      "RecAreaPhone": "",
      "RecAreaDescription": "The 5300 square mile National Coal Heritage Area lies in southern West Virginia, a region shaped by the history of coal deposits found in its ancient mountains. Today, the area's communities retain much of their original character as \"company towns,\" reflecting local traditions, immigrant laborers and the dominance of the coal industry.",
      "RecAreaMapURL": "",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Coal National Heritage Area"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 14438,
      "RecAreaPhone": "",
      "RecAreaDescription": "The Blues, Welty, Wright, Williams, Civil War and Civil Rights, The Great Flood, Bogues and Bayous, Plantations, The Great Migration, Rock 'n' Roll, Soul Food, King Cotton, The River, Precision Agriculture, Catfish, Gospel, Immigrants' Stories, Highway 61, Segregation, Integration, Share Cropping, Freedom Songs, Freedom Summer, Folk Tales, Swamp Forests, Hunting Clubs, and surprisingly, hot tamale",
      "RecAreaMapURL": "",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Mississippi Delta National Heritage Area"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 14439,
      "RecAreaPhone": "",
      "RecAreaDescription": "See the birthplace where Elvis made his entrance to the world stage ... Walk among the nation's most extensive remaining Civil War earthworks from one of the largest sieges in the Western Hemisphere, at the Crossroads of the Confederacy ... There's so much to see and do in the Mississippi Hills. Faulkner once said he could spend a lifetime writing about it—you could spend a lifetime exploring it.",
      "RecAreaMapURL": "",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Mississippi Hills National Heritage Area"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 14440,
      "RecAreaPhone": "",
      "RecAreaDescription": "The Tennessee River brought the early Native Americans and then the European settlers. For years, it frustrated those who tried to cross it or tame it. Men fought from its banks and others found power from its waters. It created a culture. It shaped a region. The region's sites, buildings, and relics whisper tales of some of the nation's biggest moments and how the river played a role in each.",
      "RecAreaMapURL": "",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Muscle Shoals National Heritage Area"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -158.0574991,
          21.38817536
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "pwr_honouliuli@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -158.0574991,
      "RecAreaID": 14508,
      "RecAreaPhone": "",
      "RecAreaDescription": "Although not yet open to the public, Honouliuli National Monument will tell the history of internment, martial law, and the experience of prisoners of war in Hawai'i during World War II. Honouliuli will be a place to reflect on wartime experiences and recommit ourselves to the pursuit of freedom and justice.",
      "RecAreaMapURL": "",
      "RecAreaLatitude": 21.38817536,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Honouliuli National Monument"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -87.60873824,
          41.69429163
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "PULL_visitorinfo@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -87.60873824,
      "RecAreaID": 14509,
      "RecAreaPhone": "",
      "RecAreaDescription": "In a growing Chicago neighborhood, diverse people and stories intertwine. All were seeking opportunity. Some succeeded. Others were limited—by race, gender, or economic status. Their stories came together in Pullman, a planned community famed for its urban design and architecture.",
      "RecAreaMapURL": "",
      "RecAreaLatitude": 41.69429163,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Pullman National Monument"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -115.3202223,
          36.3893217
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "TUSK_information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -115.3202223,
      "RecAreaID": 14510,
      "RecAreaPhone": "",
      "RecAreaDescription": "Mammoths, lions and camels once roamed along wetlands just north of what is now known as Las Vegas, Nevada. Their history is preserved at Tule Springs Fossil Beds National Monument and is ready to be discovered.",
      "RecAreaMapURL": "",
      "RecAreaLatitude": 36.3893217,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Tule Springs Fossil Beds National Monument"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 14511,
      "RecAreaPhone": "",
      "RecAreaDescription": "The Mississippi Gulf Coast is a culturally, historically, and environmentally distinctive region where many chapters in the national story have been written. The bounties of the Mississippi Gulf Coast's natural resources have brought people to this area from all over the world. The modern culture of the Coast consists of a multi-ethnic gumbo of people and traditions.",
      "RecAreaMapURL": "",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Mississippi Gulf National Heritage Area"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 14512,
      "RecAreaPhone": "",
      "RecAreaDescription": "The Blackstone River powered America's entry into the Age of Industry. The success of Samuel Slater's cotton spinning mill in Pawtucket, RI touched off a chain reaction that changed how people worked and where they lived, and continues to reverberate across the nation to this day. Come visit and see how this revolution transformed the landscape of the Blackstone Valley and then the United States.",
      "RecAreaMapURL": "",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Blackstone River Valley National Historical Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -97.17606143,
          31.60465887
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -97.17606143,
      "RecAreaID": 14514,
      "RecAreaPhone": "",
      "RecAreaDescription": "On July 10, 2015, President Barack Obama issued a Presidential Proclamation making the Waco Mammoth Site a new unit of the National Park System. This paleontological site represents the nation's only recorded discovery of a nursery herd of Columbian mammoths. Visitors can view \"in situ\" fossils including female mammoths, a bull mammoth, and a camel that lived approximately 67,000 years ago.",
      "RecAreaMapURL": "",
      "RecAreaLatitude": 31.60465887,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Waco Mammoth National Monument"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -106.5195724,
          35.91682872
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "vall_info@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -106.5195724,
      "RecAreaID": 14515,
      "RecAreaPhone": "",
      "RecAreaDescription": "About 1.25 million years ago, a spectacular volcanic eruption created the 13-mile wide circular depression now known as the Valles Caldera.  The preserve is known for its huge mountain meadows, abundant wildlife, and meandering streams. The area also preserves the homeland of ancestral native peoples and embraces a rich ranching history.",
      "RecAreaMapURL": "",
      "RecAreaLatitude": 35.91682872,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "The main gate into the Valles Caldera National Preserve is located near mile marker 39 along New Mexico Highway 4 between Jemez Springs, NM, and Los Alamos, NM.",
      "Keywords": "",
      "RecAreaName": "Valles Caldera National Preserve"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "wing_info@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 14516,
      "RecAreaPhone": "",
      "RecAreaDescription": "More than a museum, the Wing is an experience. A chance to truly understand what it was - and is - to be Asian American in the Pacific Northwest. Take a guided tour of a historic hotel and learn the inside story about what makes the local Chinatown-International District unique. Visitors explore thought-provoking exhibitions of real stories, including actor and martial arts master Bruce Lee.",
      "RecAreaMapURL": "",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Wing Luke Museum Affiliated Area"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -73.203666687,
          42.4677505493
        ]
      },
      "LastUpdatedDate": "2016-09-07",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -73.203666687,
      "RecAreaID": 14517,
      "RecAreaPhone": "",
      "RecAreaDescription": "When Samuel Colt started his Hartford factory on the banks of the Connecticut River in 1847, it followed years mismanagement and failure.  Soon, demand for Colt's revolver would change his fortunes and the Colt empire was born.  Following Colt's untimely death in 1862, his wife, Elizabeth Colt, would lead the company to its legendary status, and influencing Hartford for over 40 years.",
      "RecAreaMapURL": "",
      "RecAreaLatitude": 42.4677505493,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Coltsville National Historical Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -100.8429548,
          39.76948167
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "Manhattan_project@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -100.8429548,
      "RecAreaID": 14518,
      "RecAreaPhone": "",
      "RecAreaDescription": "This site tells the story about the people, events, science, and engineering that led to the creation of the atomic bomb, which helped end World War II.",
      "RecAreaMapURL": "",
      "RecAreaLatitude": 39.76948167,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Manhattan Project National Historical Park"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -114.3469067,
          35.96622528
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "lake_interpretation@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -114.3469067,
      "RecAreaID": 14519,
      "RecAreaPhone": "",
      "RecAreaDescription": "Boat, hike, cycle, camp and fish at America's most diverse national recreation area. With striking landscapes and brilliant blue waters, this year-round playground spreads across 1.5 million acres of mountains, canyons, valleys and two vast lakes. See the Hoover Dam from the waters of Lake Mead or Lake Mohave, or find solitude in one of the park's nine wilderness areas.",
      "RecAreaMapURL": "",
      "RecAreaLatitude": 35.96622528,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "<p>There are nine main access points to Lake Mead National Recreation Area, which includes two lakes and more than 1.5 million acres of land.</p>\n<p>The Lake Mead Visitor Center, also called the Alan Bible Visitor Center, is located off of U.S. 93, four miles northeast of Boulder City. See the Park maps below to find the best route for you. <br />\n </p>",
      "Keywords": "",
      "RecAreaName": "Lake Mead National Recreation Area"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -115.0935606,
          35.29156348
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -115.0935606,
      "RecAreaID": 14520,
      "RecAreaPhone": "",
      "RecAreaDescription": "Castle Mountains represents some of the most unique elements of the Mojave Desert. Nestled between the Nevada state line and Mojave National Preserve, the nearly 21,000 acres of Castle Mountains boasts Joshua tree forests, unbroken natural landscapes, rare desert grasslands, and rich human history. This intriguing area provides serenity and solitude from nearby metropolitan areas.",
      "RecAreaMapURL": "",
      "RecAreaLatitude": 35.29156348,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Castle Mountains National Monument"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 14521,
      "RecAreaPhone": "",
      "RecAreaDescription": "\"At the end of the last Ice Age, some 12,000 to 17,000 years ago, a series of cataclysmic floods occurred in what is now the northwest region of the United States, leaving a lasting mark of dramatic and distinguishing features on the landscape of parts of the States of Montana, Idaho, Washington and Oregon.\" \n\nPublic Law 111-11, March 30, 2009",
      "RecAreaMapURL": "",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Ice Age Floods National Geologic Trail"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -77.00381882,
          38.89231541
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "national_mall@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -77.00381882,
      "RecAreaID": 14522,
      "RecAreaPhone": "",
      "RecAreaDescription": "Home to the National Woman's Party for nearly 90 years, this was the epicenter of the struggle for women's rights. From this house in the shadow of the U.S. Capitol and Supreme Court, Alice Paul and the NWP developed innovative strategies and tactics to advocate for the Equal Rights Amendment and equality for women. President Barack Obama designated the national monument on April 12, 2016.",
      "RecAreaMapURL": "",
      "RecAreaLatitude": 38.89231541,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Belmont-Paul Women's Equality National Monument"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "stonewall@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 14524,
      "RecAreaPhone": "",
      "RecAreaDescription": "Before the 1960s almost everything about living openly as a lesbian, gay, bisexual, or transgender (LGBT) person was illegal. New York City laws against homosexual activities were particularly harsh. The Stonewall Uprising on June 28, 1969 is a milestone in the quest for LGBT civil rights and provided momentum for a movement.",
      "RecAreaMapURL": "",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Stonewall National Monument"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -131.3662323,
          36.74793528
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "USAR_Administration@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -131.3662323,
      "RecAreaID": 14525,
      "RecAreaPhone": "",
      "RecAreaDescription": "At World War II Valor in the Pacific National Monument, home of the USS Arizona Memorial, learn about one of the most pivotal moments in US history: the attack on Pearl Harbor, and the subsequent entry of the United States into World War II. The monument preserves and interprets the stories of the Pacific War, from the internment of Japanese Americans to the battles in the Aleutians.",
      "RecAreaMapURL": "",
      "RecAreaLatitude": 36.74793528,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "World War II Valor in the Pacific National Monument"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 14526,
      "RecAreaPhone": "",
      "RecAreaDescription": "Spread across a wild landscape offering spectacular views of Mount Katahdin, Katahdin Woods and Waters invites discovery of its rivers, streams, woods, flora, fauna, geology, and the night skies that have attracted humans for millennia.",
      "RecAreaMapURL": "",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "Katahdin Woods and Waters National Monument is located in north central Maine approximately a 2-hour drive west of Acadia National Park in Bar Harbor and 1-hour drive north of Bangor, Maine, both of which are served by regional airports.\nRoute 11 is known as the Katahdin Woods and Waters Scenic Byway designated by the state of Maine and is the main route to drive into the monument. To the south, access from Route 11 to Swift Brook Road to enter the southern portion of the park and drive the scenic loop road. To the north, follow Route 159 to Grand Lake Road to access the northern section of the park.",
      "Keywords": "",
      "RecAreaName": "Katahdin Woods and Waters National Monument"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 14527,
      "RecAreaPhone": "",
      "RecAreaDescription": "From the heights of the Palisades at Fort Lee to the shores of the Delaware River at Red Bank Battlefield, the Crossroads of the American Revolution offers an unprecedented opportunity to understand and celebrate New Jersey's rich history. Historic sites, preservation groups, schools, libraries, and museum work together to tell these unique stories.",
      "RecAreaMapURL": "",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Crossroads of the American Revolution National Heritage Area"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "BICR_Information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 14907,
      "RecAreaPhone": "",
      "RecAreaDescription": "In 1963, images of snarling police dogs unleashed against non-violent protesters and of children being sprayed with high-pressure hoses appeared in print and television news across the world. These dramatic scenes from Birmingham, Alabama, of violent police aggression against civil rights protesters were vivid examples of segregation and racial injustice in America.",
      "RecAreaMapURL": "",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Birmingham Civil Rights National Monument"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "FRRI_Information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 14908,
      "RecAreaPhone": "",
      "RecAreaDescription": "In 1961, a small interracial band of \"Freedom Riders\" challenged discriminatory laws requiring separation of the races in interstate travel. They were attacked by white segregationists, who firebombed the bus. Images of the attack appeared in hundreds of newspapers, shocking the American public and spurring the Federal Government to issue regulations banning segregation in interstate travel.",
      "RecAreaMapURL": "",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Freedom Riders National Monument"
    },
    {
      "OrgRecAreaID": "",
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "REER_Information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": "",
      "RecAreaID": 14909,
      "RecAreaPhone": "",
      "RecAreaDescription": "The Reconstruction era,1861-1898 the historic period in which the United States grappled with the question of how to integrate millions of newly freed African Americans into social, political,economic,  and labor systems, was a time of significant transformation. The people, places, and events in Beaufort County, South Carolina, reflect on the most important issues of this tumultuous time period.",
      "RecAreaMapURL": "",
      "RecAreaLatitude": "",
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Reconstruction Era National Monument"
    },
    {
      "OrgRecAreaID": "",
      "GEOJSON": {
        "TYPE": "Point",
        "COORDINATES": [
          -76.5646715462,
          42.9128920287
        ]
      },
      "LastUpdatedDate": "2017-04-11",
      "RecAreaEmail": "HART_Information@nps.gov",
      "RecAreaReservationURL": "",
      "RecAreaLongitude": -76.5646715462,
      "RecAreaID": 15097,
      "RecAreaPhone": "",
      "RecAreaDescription": "Harriet Tubman was guided by a deep faith and devotion to family, freedom, and community. After emancipating herself and members of her family, she moved them from Ontario, Canada to Auburn, New York in 1859. Central New York was a center for progressive thought, abolition, and women's suffrage where Tubman continued to fight for human rights and dignity until she died in 1913.",
      "RecAreaMapURL": "",
      "RecAreaLatitude": 42.9128920287,
      "StayLimit": "",
      "RecAreaFeeDescription": "",
      "RecAreaDirections": "",
      "Keywords": "",
      "RecAreaName": "Harriet Tubman National Historical Park"
    }
  ] 
// let recs = [];
// for (var i = 0; i < recAreas.length; i++) {
//   if (recAreas[i]['RecAreaName'].indexOf('National Park') !== -1) {
//   recs.push({RecAreaName: recAreas[i]['RecAreaName'],
//              RecAreaID: recAreas[i]['RecAreaID']
//   });
// }
// }
let desiredRecs = [ { RecAreaName: 'Acadia National Park', RecAreaID: 2554 },
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
  { RecAreaName: 'Denali National Park & Preserve',
    RecAreaID: 2658 },
  { RecAreaName: 'Death Valley National Park', RecAreaID: 2662 },
  { RecAreaName: 'Dry Tortugas National Park', RecAreaID: 2665 },
  { RecAreaName: 'Everglades National Park', RecAreaID: 2677 },
  { RecAreaName: 'Gates Of The Arctic National Park & Preserve',
    RecAreaID: 2716 },
  { RecAreaName: 'Glacier National Park', RecAreaID: 2725 },
  { RecAreaName: 'Glacier Bay National Park & Preserve',
    RecAreaID: 2726 },
  { RecAreaName: 'Great Basin National Park', RecAreaID: 2732 },
  { RecAreaName: 'Grand Canyon National Park', RecAreaID: 2733 },
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
  { RecAreaName: 'Kobuk Valley National Park', RecAreaID: 2795 },
  { RecAreaName: 'Lake Clark National Park & Preserve',
    RecAreaID: 2799 },
  { RecAreaName: 'Lassen Volcanic National Park',
    RecAreaID: 2803 },
  { RecAreaName: 'Mammoth Cave National Park', RecAreaID: 2818 },
  { RecAreaName: 'Mesa Verde National Park', RecAreaID: 2824 },
  { RecAreaName: 'Mount Rainier National Park', RecAreaID: 2835 },
  { RecAreaName: 'North Cascades National Park', RecAreaID: 2845 },
  { RecAreaName: 'American Samoa National Park',
    RecAreaID: 2847 },
  { RecAreaName: 'Petrified Forest National Park',
    RecAreaID: 2856 },
  { RecAreaName: 'Western Arctic National Parklands',
    RecAreaID: 2876 },
  { RecAreaName: 'Olympic National Park', RecAreaID: 2881 },
  { RecAreaName: 'Pinnacles National Park', RecAreaID: 2893 },
  { RecAreaName: 'Rocky Mountain National Park', RecAreaID: 2907 },
  { RecAreaName: 'Saguaro National Park', RecAreaID: 2917 },
  { RecAreaName: 'Sequoia & Kings Canyon National Parks',
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
  { RecAreaName: 'Zion National Park', RecAreaID: 2994 },
  { RecAreaName: 'Congaree National Park Wilderness',
    RecAreaID: 12852 },
  { RecAreaName: 'Rocky Mountain National Park Wilderness',
    RecAreaID: 12891 },
  { RecAreaName: 'Grand Teton National Park', RecAreaID: 13525 } ]
// console.log(desiredRecs.sort((a, b) => {
//   if (a['RecAreaName'] < b['RecAreaName']) {
//     return -1
//   } else {
//     return 1
//   }
// }));

  for (var i = 0; i < sortedDesiredRecs.length; i++) {
    
  }
  console.log(sortedDesiredRecs.length);
  console.log(desiredRecs.length);
