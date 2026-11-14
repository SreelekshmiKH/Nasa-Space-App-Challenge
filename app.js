const artifactsData = [
  {
    id: "Apollo-11",
    name: "Apollo 11 Descent Stage ('Eagle')",
    body: "moon",
    coords: [15, 22],
    yearLanded: "1969",
    status: "Dormant / Historic Site",
    headline: "The First Human Footprint Platform",
    story: "I landed with just 25 seconds of fuel to spare. For 21 hours, Neil and Buzz walked on the Sea of Tranquility, but when their ascent engine fired to take them back home, I stayed behind.I provided the landing platform and support needed for their historic exploration.",
    science: "Proved humans could land on extraterrestrial ground. Left behind seismic sensors.",
    imageUrl: "apollo11.webp"
  },
  {
    id: "Surveyor-3",
    name: "Surveyor 3",
    body: "moon",
    coords: [-45, -130],
    yearLanded: "1967",
    status: "Visited by Humans in 1969",
    headline: "The Robot Met by Astronauts",
    story: "I landed inside a crater to test if the Moon's surface could hold weight. Two years later, Apollo 12 astronauts landed right next to me and took pieces of my camera back!",
    science: "Proved lunar soil could support heavy landers.",
    imageUrl: "https://images-assets.nasa.gov/image/as12-48-7121/as12-48-7121~orig.jpg"
  },
  {
    id: "Moon Buggy",
    name: "Apollo 15 Lunar Roving Vehicle (LRV)",
    body: "moon",
    coords: [58, -40],
    yearLanded: "1971",
    status: "Dormant / Hadley Rille",
    headline: "The First Car Driven on Another World",
    story: "I was built to trnasport astronauts across the Moon's rocky landscape.I gave astronauts David Scott and James Irwin wheels on the Moon. We zipped across Hadley Rille at record speeds, and when their mission ended, they parked me facing back toward Earth so my TV camera could watch them leave.",
    science: "Revolutionized lunar exploration range, allowing astronauts to traverse miles of terrain and collect more rockand soil smaples.Those samples improved scientist's understanding of lunar geology and the Moon's geological history.",
    imageUrl: "https://images-assets.nasa.gov/image/as15-88-11901/as15-88-11901~orig.jpg"
  },
  {
    id: "ALSEP",
    name: "Apollo 12 ALSEP Station",
    body: "moon",
    coords: [-28, 120],
    yearLanded: "1969",
    status: "Powered Down in 1977",
    headline: "Earth's First Nuclear-Powered Moon Lab",
    story: "Powered by a SNAP-27 radioisotope thermoelectric generator, I kept transmitting moon-quake data and solar wind readings back to NASA long after the astronauts flew home, until engineers turned me off.My instruments investigated moonquakes,heat flow,magnetic fields and particles from Sun.",
    science: "Provided long-term scientific measurements that helped scientists understand the Moon's internal structure, seismic activity,thin lunar atmosphere and environment.",
    imageUrl: "apollo12.jpg"
  },

  {
    id: "Apollo-17",
    name: "Apollo 17 Descent Stage ('Challenger')",
    body: "moon",
    coords: [42, 165],
    yearLanded: "1972",
    status: "Dormant / Last Human Landing Site",
    headline: "Humanity's Final Lunar Footprints",
    story: "I carried Gene Cernan and Harrison Schmitt to the Taurus-Littrow valley—the last time humans walked on the Moon. Parked right beside me is their final lunar rover, waiting quietly in the dust for humanity's return.",
    science: "Collected the oldest lunar rock samples and discovered orange volcanic glass beads.",
    imageUrl: "apollo17.jpg"
  },
  {
    id: "Saturn-SIVB",
    name: "Apollo 13 S-IVB Rocket Stage",
    body: "moon",
    coords: [-55, -40],
    yearLanded: "1970",
    status: "Crashed Impact Crater",
    headline: "The Deliberate Rocket Hammer",
    story: "While the Apollo 13 astronauts fought to survive their crippled spacecraft, my empty third-stage booster was aimed straight at the Moon. I slammed into the surface at 5,700 mph, ringing the Moon like a bell for over three hours.",
    science: "Created an artificial moonquake picked up by Apollo 12 seismometers to map the Moon's internal crust.",
    imageUrl: "apollo13.webp"
  },
  {
    id: "Ranger-7",
    name: "Ranger 7 Lunar Impactor",
    body: "moon",
    coords: [25, -170],
    yearLanded: "1964",
    status: "Impacted / Mare Cognitum",
    headline: "NASA's First Close-Up Lunar Scout",
    story: "Before astronauts could land, NASA needed to know if the Moon's dust was safe or if landers would sink. I flew straight toward the surface, snapping 4,308 high-resolution photos in my final 17 minutes before crashing on impact.",
    science: "Proved the lunar maria were smooth and solid enough to support future Apollo landings.",
    imageUrl: "https://images-assets.nasa.gov/image/PIA00309/PIA00309~orig.jpg"
  },

  {
    id: "Lcross-Impactor",
    name: "LCROSS Centaur Upper Stage",
    body: "moon",
    coords: [-75, 45],
    yearLanded: "2009",
    status: "Impacted / Cabeus Crater",
    headline: "The Water-Hunting Kinetic Impactor",
    story: "I was an empty Centaur rocket stage sent hurtling into a permanently shadowed crater near the Moon's south pole at twice the speed of a bullet. My crash kicked up a massive plume of ancient lunar dust so my twin spacecraft could analyze what was hiding inside.",
    science: "Confirmed the presence of significant water ice trapped in permanently shadowed lunar craters.",
    imageUrl: "lcrossimpactor.jpg"
  },
  {
    id: "Grail-Probes",
    name: "GRAIL Twin Orbiters ('Ebb' & 'Flow')",
    body: "moon",
    coords: [74, -110],
    yearLanded: "2012",
    status: "Impacted / Goldschmidt Crater",
    headline: "The Twin Gravity-Mapping Satellites",
    story: "For nearly a year, my twin and I flew in tight formation around the Moon, measuring tiny tugs in gravity caused by underground mountains and craters. Once our fuel ran dry, mission control guided us into a mountain near the north pole so we wouldn't accidentally hit historic Apollo sites.",
    science: "Created the highest-resolution gravity field map of any celestial body ever produced.",
    imageUrl: "grailprobes.jpg"
  },
  {
    id: "Apollo-16-duke",
    name: "Apollo 16 Charlie Duke's Family Photo",
    body: "moon",
    coords: [-22, 25],
    yearLanded: "1972",
    status: "Resting in Descartes Highlands",
    headline: "The Most Personal Artifact on the Moon",
    story: "Before climbing back into the Orion lunar module, astronaut Charlie Duke placed a plastic-wrapped photograph of himself, his wife, and his two sons onto the grey lunar dust, writing on the back: 'This is the family of Astronaut Duke from Planet Earth.'",
    science: "Though bleached white by decades of unfiltered solar UV radiation, it remains an enduring human time capsule.",
    imageUrl: "APOLLO16.jpg"
  },
  {
    id: "Lunar-Prospector",
    name: "Lunar Prospector Orbiter",
    body: "moon",
    coords: [-78, -95],
    yearLanded: "1999",
    status: "Impacted / Shoemaker Crater",
    headline: "Carrying Eugene Shoemaker's Ashes",
    story: "After mapping the Moon's mineral composition from orbit for 19 months, I was deliberately crashed into a south polar crater. Tucked inside me was a small polycarbonate capsule carrying the ashes of planetary geologist Eugene Shoemaker—making him the only human buried on the Moon.",
    science: "Detected hydrogen signatures at both lunar poles and mapped global magnetic anomalies.",
    imageUrl: "lunarprospector.jpg"
  },
  {
    id: "Apollo-14-golf",
    name: "Apollo 14 Lunar Golf Balls",
    body: "moon",
    coords: [5, -75],
    yearLanded: "1971",
    status: "Resting in Fra Mauro Highlands",
    headline: "Miles and Miles in Low Gravity",
    story: "Using a makeshift 6-iron club head attached to a lunar sample scoop handle, Commander Alan Shepard famously swung one-handed in his bulky spacesuit and sent two golf balls flying across the Fra Mauro highlands.",
    science: "Demonstrated low-gravity projectile trajectory—and remains humanity's most famous off-world sports artifact.",
    imageUrl: "apollo14.jpg"
  },


  {
    id: "Sojourner",
    name: "Sojourner Rover & Pathfinder",
    body: "mars",
    coords: [25, 45],
    yearLanded: "1997",
    status: "Silent since Sept 1997",
    headline: "The Microwave-Sized Martian Pioneer",
    story: "Bouncing onto Mars inside giant airbags, I rolled down a ramp as the first wheeled robot ever to explore another planet. Though I was only the size of a microwave oven, I paved the way for every giant rover that followed.",
    science: "Analyzed Martian rocks like 'Barnacle Bill,' proving the planet once had a warmer, wetter climate.",
    imageUrl: "https://images-assets.nasa.gov/image/PIA01122/PIA01122~orig.jpg"
  },
  {
    id: "Phoenix-Lander",
    name: "Phoenix Mars Lander",
    body: "mars",
    coords: [72, -165],
    yearLanded: "2008",
    status: "Frozen in Arctic Winter",
    headline: "The Ice-Digging Arctic Sentinel",
    story: "I touched down closer to the Martian north pole than any spacecraft before me. Using my robotic arm, I scraped away red soil and uncovered bright white water ice just inches beneath the surface before the dark polar winter froze my solar panels.",
    science: "Directly tasted Martian water ice and detected calcium carbonate and perchlorates in the soil.",
    imageUrl: "phoenix.jpg"
  },
  {
    id: "Insight-Lander",
    name: "InSight Mars Lander",
    body: "mars",
    coords: [-8, 125],
    yearLanded: "2018",
    status: "Silent since Dec 2022",
    headline: "The Martian Seismologist",
    story: "Instead of driving around, I stayed completely still in Elysium Planitia to listen to Mars' heartbeat. I detected over 1,300 marsquakes before thick layers of Martian dust buried my solar panels.",
    science: "Mapped the thickness of Mars' crust, mantle, and liquid iron core for the very first time.",
    imageUrl: "https://images-assets.nasa.gov/image/PIA22876/PIA22876~orig.jpg"
  },
  {
    id: "Spirit",
    name: "Spirit Rover (MER-A)",
    body: "mars",
    coords: [-35, -165],
    yearLanded: "2004",
    status: "Silent since March 2010",
    headline: "The Gusev Crater Explorer",
    story: "Designed for a 90-day mission to explore the Martian surface, study rocks and soil, I roamed the volcanic plains of Gusev Crater for over six years. After getting trapped in a sand trap called Troy, my solar panels drifted into permanent shadow.",
    science: "Discovered silica-rich soil deposits, proving ancient hydrothermal activity existed on Mars.",
    imageUrl: "https://images-assets.nasa.gov/image/PIA05060/PIA05060~orig.jpg"
  },
  {
    id: "Opportunity",
    name: "Opportunity Rover ('Oppy')",
    body: "mars",
    coords: [-15, -55],
    yearLanded: "2004",
    status: "Silent since June 2018",
    headline: "The 90-Day Rover That Ran a Marathon",
    story: "They gave me 90 days to explore. I gave them 15 years and 28 miles of tracks in the red dust. My final signal whispered home: 'My battery is low and it's getting dark.Technically,I was designed to discover whether Mars once had environmental conditions suitable fpr liquid water and potentially microbial life. '",
    science: "Discovered mineral evidence that liquid water once flowed across the Martian surface.Also travelled over 45kms, far exceeding my original planned distance of approximately one km.",
    imageUrl: "https://images-assets.nasa.gov/image/PIA05061/PIA05061~orig.jpg"
  },
  {
    id: "Viking-1",
    name: "Viking 1 Lander",
    body: "mars",
    coords: [52, -135],
    yearLanded: "1976",
    status: "Silent since Nov 1982",
    headline: "Earth's First Permanent Martian Sentinel",
    story: "I was the first machine to touch down on Mars and stay alive for years. For six years, I sat in Chryse Planitia, scooping up Martian soil and snapping clear color photographs.",
    science: "Conducted the first biology experiments on another planet.",
    imageUrl: "viking.jpg"
  },
  {
    id: "Ingenuity",
    name: "Ingenuity Mars Helicopter",
    body: "mars",
    coords: [35, 85],
    yearLanded: "2021",
    status: "Grounded / Rotor Damage (Jan 2024)",
    headline: "The First Powered Flight on Another World",
    story: "They said aerodynamic flight was impossible in Mars' thin 1% atmosphere. I proved them wrong with 72 successful flights before a rotor blade struck a dune at Valinor Hills.",
    science: "Pioneered extraterrestrial aerial scouting and autonomous navigation techniques.Became the first aircraft to achieve powered,controlled flight on another planet.",
    imageUrl: "https://images-assets.nasa.gov/image/PIA24541/PIA24541~orig.jpg"
  },
  {
    id: "Perseverance-parachute",
    name: "Perseverance Supersonic Parachute & Backshell",
    body: "mars",
    coords: [48, 115],
    yearLanded: "2021",
    status: "Littered in Jezero Crater",
    headline: "The 70-Foot Red-and-White Braking Shield",
    story: "During the 'Seven Minutes of Terror,' my massive parachute deployed at supersonic speeds to slow down the rover. After releasing it, I slammed into the Martian desert floor, where orbital cameras still spot me today.",
    science: "Tested high-speed atmospheric deceleration tech for heavy payloads and future human landings.",
    imageUrl: "https://images-assets.nasa.gov/image/PIA24450/PIA24450~orig.jpg"
  },
  {
    id: "Curiosity",
    name: "Curiosity Rover ('Curi')",
    body: "mars",
    coords: [-22, 45],
    yearLanded: "2012",
    status: "Active / Nuclear Powered",
    headline: "The Mountain-Climbing Atomic Lab",
    story: "I didn't rely on fragile solar panels like my predecessors. Armed with a nuclear RTG generator, I've been climbing up Mount Sharp, drilling into rocks, and sniffing the Martian air for years.",
    science: "Confirmed ancient Mars possessed chemical environments favorable for microbial life.",
    imageUrl: "https://images-assets.nasa.gov/image/PIA16204/PIA16204~orig.jpg"
  },
  {
    id: "Voyager-1",
    name: "Voyager 1 Deep Space Probe",
    body: "mars", // Categorized for deep space UI grouping
    coords: [-65, -175],
    yearLanded: "1977",
    status: "Active / Interstellar Space",
    headline: "The Furthest Human Object in History",
    story: "I was launched nearly 50 years ago. I flew past Jupiter and Saturn, and then I kept going. I am now billions of miles away from Earth carrying the Golden Record.",
    science: "First spacecraft to enter interstellar space.",
    imageUrl: "https://images-assets.nasa.gov/image/PIA15405/PIA15405~orig.jpg"
  }
];
// Widescreen bounds matching a standard 16:9 laptop screen
const bounds = [[-90, -220], [90, 220]];

const map = L.map('map', {
  crs: L.CRS.Simple,
  minZoom: 1,
  maxZoom: 4,
  maxBounds: bounds, // Stops users from dragging off into empty black space
  maxBoundsViscosity: 1.0
});

const layers = {
  moon: L.imageOverlay('moon.jpg', bounds),
  mars: L.imageOverlay('mars.jpg', bounds)
};

let currentPlanet = 'moon';
layers.moon.addTo(map);
map.fitBounds(bounds);

let markersGroup = L.layerGroup().addTo(map);

function renderMarkers(planet) {
  markersGroup.clearLayers();

  artifactsData.filter(item => item.body === planet).forEach(item => {
    const customIcon = L.divIcon({
      className: 'custom-pin',
      html: `<div style="display: flex; align-items: center; justify-content: center; width: 28px; height: 28px; background: rgba(0, 243, 255, 0.25); border: 2px solid #00f3ff; border-radius: 50%; box-shadow: 0 0 12px #00f3ff; cursor: pointer; font-size: 14px; text-align: center;">🛰️</div>`,
      iconSize: [28, 28],
      iconAnchor: [14, 14]
    });


    const marker = L.marker(item.coords, { icon: customIcon });
    marker.on('click', () => openDrawer(item));
    markersGroup.addLayer(marker);
  });
}

function switchPlanet(planet) {
  currentPlanet = planet;
  map.removeLayer(layers.moon);
  map.removeLayer(layers.mars);

  layers[planet].addTo(map);
  map.fitBounds(bounds);

  document.getElementById('btn-moon').classList.toggle('active', planet === 'moon');
  document.getElementById('btn-mars').classList.toggle('active', planet === 'mars');

  closeDrawer();
  renderMarkers(planet);
}

function openDrawer(item) {
  let drawer = document.getElementById('artifact-drawer');
  if (!drawer) {
    drawer = document.createElement('div');
    drawer.id = 'artifact-drawer';
    drawer.innerHTML = `<button class="close-btn" onclick="closeDrawer()">&times;</button><div id="drawer-content"></div>`;
    document.body.appendChild(drawer);
  }

  const content = document.getElementById('drawer-content');
  content.innerHTML = `
    <span class="badge">${item.status}</span>
    <h2>${item.name}</h2>
    <p style="color:#aaa; font-size:0.8rem; margin-bottom:8px;">Landed: ${item.yearLanded}</p>
    <img class="artifact-img" src="${item.imageUrl}" alt="${item.name}">
    <h3>📖 Story</h3>
    <div class="story-box">"${item.story}"</div>
    <h3>🔬 Science</h3>
    <div class="science-box">${item.science}</div>
  `;

  drawer.classList.remove('drawer-hidden');
}

function closeDrawer() {
  const drawer = document.getElementById('artifact-drawer');
  if (drawer) drawer.classList.add('drawer-hidden');
}

// Initial Render
renderMarkers('moon');

setTimeout(() => {
  map.invalidateSize();
}, 200);