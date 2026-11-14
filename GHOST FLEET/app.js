const artifactsData = [
  {
    id: "Apollo-11",
    name: "Apollo 11 Descent Stage ('Eagle')",
    body: "moon",
    coords: [20, 30],
    yearLanded: "1969",
    status: "Dormant / Historic Site",
    headline: "The First Human Footprint Platform",
    story: "I landed with just 25 seconds of fuel to spare. For 21 hours, Neil and Buzz walked on the Sea of Tranquility, but when their ascent engine fired to take them back home, I stayed behind.I provided the landing platform and support needed for their historic exploration.",
    science: "Proved humans could land on extraterrestrial ground. Left behind seismic sensors.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Apollo_11_lunar_module.jpg/640px-Apollo_11_lunar_module.jpg"
  },
  {
    id: "Surveyor-3",
    name: "Surveyor 3",
    body: "moon",
    coords: [-10, 20],
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
    coords: [25, 40],
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
    coords: [-5, 35],
    yearLanded: "1969",
    status: "Powered Down in 1977",
    headline: "Earth's First Nuclear-Powered Moon Lab",
    story: "Powered by a SNAP-27 radioisotope thermoelectric generator, I kept transmitting moon-quake data and solar wind readings back to NASA long after the astronauts flew home, until engineers turned me off.My instruments investigated moonquakes,heat flow,magnetic fields and particles from Sun.",
    science: "Provided long-term scientific measurements that helped scientists understand the Moon's internal structure, seismic activity,thin lunar atmosphere and environment.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/ALSEP_AS12-47-6922.jpg/640px-ALSEP_AS12-47-6922.jpg"
  },

  {
    id: "Apollo-17",
    name: "Apollo 17 Descent Stage ('Challenger')",
    body: "moon",
    coords: [20, 45],
    yearLanded: "1972",
    status: "Dormant / Last Human Landing Site",
    headline: "Humanity's Final Lunar Footprints",
    story: "I carried Gene Cernan and Harrison Schmitt to the Taurus-Littrow valley—the last time humans walked on the Moon. Parked right beside me is their final lunar rover, waiting quietly in the dust for humanity's return.",
    science: "Collected the oldest lunar rock samples and discovered orange volcanic glass beads.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Apollo_17_Lunar_Module_Challenger.jpg/640px-Apollo_17_Lunar_Module_Challenger.jpg"
  },
  {
    id: "Saturn-SIVB",
    name: "Apollo 13 S-IVB Rocket Stage",
    body: "moon",
    coords: [-3, -28],
    yearLanded: "1970",
    status: "Crashed Impact Crater",
    headline: "The Deliberate Rocket Hammer",
    story: "While the Apollo 13 astronauts fought to survive their crippled spacecraft, my empty third-stage booster was aimed straight at the Moon. I slammed into the surface at 5,700 mph, ringing the Moon like a bell for over three hours.",
    science: "Created an artificial moonquake picked up by Apollo 12 seismometers to map the Moon's internal crust.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Apollo_13_S-IVB_stage_in_Earth_orbit.jpg/640px-Apollo_13_S-IVB_stage_in_Earth_orbit.jpg"
  },
  {
    id: "Ranger-7",
    name: "Ranger 7 Lunar Impactor",
    body: "moon",
    coords: [-11, -21],
    yearLanded: "1964",
    status: "Impacted / Mare Cognitum",
    headline: "NASA's First Close-Up Lunar Scout",
    story: "Before astronauts could land, NASA needed to know if the Moon's dust was safe or if landers would sink. I flew straight toward the surface, snapping 4,308 high-resolution photos in my final 17 minutes before crashing on impact.",
    science: "Proved the lunar maria were smooth and solid enough to support future Apollo landings.",
    imageUrl: "https://images-assets.nasa.gov/image/PIA00309/PIA00309~orig.jpg"
  },
  {
    id: "Sojourner",
    name: "Sojourner Rover & Pathfinder",
    body: "mars",
    coords: [19, -33],
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
    coords: [68, -125],
    yearLanded: "2008",
    status: "Frozen in Arctic Winter",
    headline: "The Ice-Digging Arctic Sentinel",
    story: "I touched down closer to the Martian north pole than any spacecraft before me. Using my robotic arm, I scraped away red soil and uncovered bright white water ice just inches beneath the surface before the dark polar winter froze my solar panels.",
    science: "Directly tasted Martian water ice and detected calcium carbonate and perchlorates in the soil.",
    imageUrl: "https://images-assets.nasa.gov/image/PIA10751/PIA10751~orig.jpg"
  },
  {
    id: "Insight-Lander",
    name: "InSight Mars Lander",
    body: "mars",
    coords: [4, 135],
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
    coords: [-15, -10],
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
    coords: [-20, -30],
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
    coords: [40, -40],
    yearLanded: "1976",
    status: "Silent since Nov 1982",
    headline: "Earth's First Permanent Martian Sentinel",
    story: "I was the first machine to touch down on Mars and stay alive for years. For six years, I sat in Chryse Planitia, scooping up Martian soil and snapping clear color photographs.",
    science: "Conducted the first biology experiments on another planet.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Viking_Lander_1_Martian_Surface.jpg/640px-Viking_Lander_1_Martian_Surface.jpg"
  },
  {
    id: "Ingenuity",
    name: "Ingenuity Mars Helicopter",
    body: "mars",
    coords: [-5, -15],
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
    coords: [10, -20],
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
    coords: [-5, 10],
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
    coords: [10, 50],
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
      html: `<div style="background:#ff4081; width:16px; height:16px; border-radius:50%; border:2px solid #fff; box-shadow:0 0 12px #ff4081; cursor:pointer;"></div>`,
      iconSize: [16, 16]
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