/**
 * THE OBSERVATORY — Ghost Fleet Archaeology
 * Space/Cosmic Star Chart Controller
 */

const artifactsData = [
  {
    id: "Apollo-11",
    name: "Apollo 11 Descent Stage ('Eagle')",
    body: "moon",
    coords: [15, 22],
    yearLanded: "1969",
    status: "Historic Lunar Base",
    headline: "The First Human Footprint Platform",
    story: "I landed with just 25 seconds of fuel to spare. For 21 hours, Neil and Buzz walked on the Sea of Tranquility, but when their ascent engine fired to take them back home, I stayed behind. I provided the landing platform and support needed for their historic exploration.",
    science: "Proved humans could land on extraterrestrial ground. Left behind seismic sensors and laser retroreflectors.",
    imageUrl: "apollo11.webp"
  },
  {
    id: "Surveyor-3",
    name: "Surveyor 3",
    body: "moon",
    coords: [-45, -130],
    yearLanded: "1967",
    status: "Visited by Apollo 12",
    headline: "The Robot Met by Astronauts",
    story: "I landed inside a crater to test if the Moon's surface could hold weight. Two years later, Apollo 12 astronauts landed right next to me and took pieces of my camera back!",
    science: "Proved lunar soil could support heavy landers.",
    imageUrl: "https://images-assets.nasa.gov/image/as12-48-7121/as12-48-7121~orig.jpg"
  },
  {
    id: "Moon Buggy",
    name: "Apollo 15 Lunar Roving Vehicle",
    body: "moon",
    coords: [58, -40],
    yearLanded: "1971",
    status: "Dormant / Hadley Rille",
    headline: "The First Car Driven on Another World",
    story: "I was built to transport astronauts across the Moon's rocky landscape. I gave astronauts David Scott and James Irwin wheels on the Moon. We zipped across Hadley Rille at record speeds, and when their mission ended, they parked me facing back toward Earth so my TV camera could watch them leave.",
    science: "Revolutionized lunar exploration range, allowing astronauts to traverse miles of terrain and collect diverse rock and soil samples.",
    imageUrl: "https://images-assets.nasa.gov/image/as15-88-11901/as15-88-11901~orig.jpg"
  },
  {
    id: "ALSEP",
    name: "Apollo 12 ALSEP Station",
    body: "moon",
    coords: [-28, 120],
    yearLanded: "1969",
    status: "Powered Down 1977",
    headline: "Earth's First Nuclear-Powered Moon Lab",
    story: "Powered by a SNAP-27 radioisotope thermoelectric generator, I kept transmitting moonquake data and solar wind readings back to NASA long after the astronauts flew home, until engineers turned me off. My instruments investigated moonquakes, heat flow, magnetic fields and particles from the Sun.",
    science: "Provided long-term scientific measurements that helped scientists understand the Moon's internal structure and seismic activity.",
    imageUrl: "apollo12.jpg"
  },
  {
    id: "Apollo-17",
    name: "Apollo 17 Descent Stage ('Challenger')",
    body: "moon",
    coords: [42, 165],
    yearLanded: "1972",
    status: "Last Human Landing Site",
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
    status: "Deliberate Kinetic Impact",
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
    imageUrl: "lcrossimpactor.webp"
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
    status: "Resting in Descartes",
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
    status: "Resting in Fra Mauro",
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
    status: "Silent Sentinel",
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
    status: "Silent / Elysium Planitia",
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
    status: "Silent / Gusev Crater",
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
    status: "Silent / Endeavour Rim",
    headline: "The 90-Day Rover That Ran a Marathon",
    story: "They gave me 90 days to explore. I gave them 15 years and 28 miles of tracks in the red dust. My final signal whispered home: 'My battery is low and it's getting dark.' Technically, I was designed to discover whether Mars once had conditions suitable for microbial life.",
    science: "Discovered mineral evidence that liquid water once flowed across the Martian surface. Traversed over 45 kilometers.",
    imageUrl: "https://images-assets.nasa.gov/image/PIA05061/PIA05061~orig.jpg"
  },
  {
    id: "Viking-1",
    name: "Viking 1 Lander",
    body: "mars",
    coords: [52, -135],
    yearLanded: "1976",
    status: "Silent / Chryse Planitia",
    headline: "Earth's First Permanent Martian Sentinel",
    story: "I was the first machine to touch down on Mars and stay alive for years. For six years, I sat in Chryse Planitia, scooping up Martian soil and snapping clear color photographs.",
    science: "Conducted the first biology and life-detection experiments on another planet.",
    imageUrl: "viking.jpg"
  },
  {
    id: "Ingenuity",
    name: "Ingenuity Mars Helicopter",
    body: "mars",
    coords: [35, 85],
    yearLanded: "2021",
    status: "Grounded / Valinor Hills",
    headline: "The First Powered Flight on Another World",
    story: "They said aerodynamic flight was impossible in Mars' thin 1% atmosphere. I proved them wrong with 72 successful flights before a rotor blade struck a dune at Valinor Hills.",
    science: "Pioneered extraterrestrial aerial scouting and autonomous navigation techniques.",
    imageUrl: "https://images-assets.nasa.gov/image/PIA24541/PIA24541~orig.jpg"
  },
  {
    id: "Perseverance-parachute",
    name: "Perseverance Supersonic Parachute",
    body: "mars",
    coords: [48, 115],
    yearLanded: "2021",
    status: "Littered in Jezero Crater",
    headline: "The 70-Foot Supersonic Braking Shield",
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
    status: "Active Atomic Lab",
    headline: "The Mountain-Climbing Atomic Lab",
    story: "I didn't rely on fragile solar panels like my predecessors. Armed with a nuclear RTG generator, I've been climbing up Mount Sharp, drilling into rocks, and sniffing the Martian air for years.",
    science: "Confirmed ancient Mars possessed chemical environments favorable for microbial life.",
    imageUrl: "https://images-assets.nasa.gov/image/PIA16204/PIA16204~orig.jpg"
  },
  {
    id: "Voyager-1",
    name: "Voyager 1 Deep Space Probe",
    body: "mars", // Cataloged in interplanetary reconnaissance
    coords: [-65, -175],
    yearLanded: "1977",
    status: "Active / Interstellar Space",
    headline: "The Furthest Human Object in History",
    story: "I was launched nearly 50 years ago. I flew past Jupiter and Saturn, and then I kept going. I am now over 15 billion miles away from Earth carrying the Golden Record.",
    science: "First spacecraft in human history to cross the heliopause and enter interstellar space.",
    imageUrl: "voyager.jpg"
  }
];

// Map Coordinate Bounds (Widescreen 16:9 projection)
const bounds = [[-90, -220], [90, 220]];

// Initialize Observatory Star Chart Map
const map = L.map('map', {
  crs: L.CRS.Simple,
  minZoom: 1,
  maxZoom: 4,
  maxBounds: bounds,
  maxBoundsViscosity: 1.0,
  zoomControl: true,
  attributionControl: false
});

// Planetary Texture Image Layers
const layers = {
  moon: L.imageOverlay('moon.jpg', bounds),
  mars: L.imageOverlay('mars.jpg', bounds)
};

let currentPlanet = 'moon';
let activeArtifactId = null;
let markerInstances = {};
let markersGroup = L.layerGroup().addTo(map);

// Add initial planetary layer
layers.moon.addTo(map);
map.fitBounds(bounds);

/**
 * Renders Animated Cosmic Pins on the Star Chart Map
 */
function renderMarkers(planet, filterText = '') {
  markersGroup.clearLayers();
  markerInstances = {};

  const query = filterText.trim().toLowerCase();
  const filtered = artifactsData.filter(item => {
    if (item.body !== planet) return false;
    if (!query) return true;
    return (
      item.name.toLowerCase().includes(query) ||
      item.headline.toLowerCase().includes(query) ||
      item.status.toLowerCase().includes(query) ||
      item.yearLanded.includes(query)
    );
  });

  filtered.forEach(item => {
    const isSelected = item.id === activeArtifactId;
    const pinHtml = `
      <div class="observatory-pin-container ${isSelected ? 'active-pin' : ''}" id="pin-${item.id}">
        <div class="pin-sonar"></div>
        <div class="pin-ring"></div>
        <div class="pin-core">
          <span class="pin-symbol">✦</span>
        </div>
        <div class="pin-tooltip mono">
          <span class="pin-tooltip-name">${item.name}</span>
          <span class="pin-tooltip-year">${item.yearLanded} // ${item.status}</span>
        </div>
      </div>
    `;

    const customIcon = L.divIcon({
      className: 'observatory-custom-divicon',
      html: pinHtml,
      iconSize: [32, 32],
      iconAnchor: [16, 16]
    });

    const marker = L.marker(item.coords, { icon: customIcon });
    marker.on('click', (e) => {
      L.DomEvent.stopPropagation(e);
      openDrawer(item);
    });

    markerInstances[item.id] = marker;
    markersGroup.addLayer(marker);
  });

  // Update counters
  updateTelemetryRibbon(filtered.length);
  renderNavigatorDock(filtered);
}

/**
 * Render Sentinel Selector Dock (Bottom Star Chart Carousel)
 */
function renderNavigatorDock(items) {
  const dock = document.getElementById('dock-chips');
  const counter = document.getElementById('dock-counter');
  if (!dock) return;

  if (counter) {
    counter.textContent = `[${items.length}]`;
  }

  if (items.length === 0) {
    dock.innerHTML = `<div class="mono" style="font-size:0.75rem; color:rgba(201,210,232,0.5); padding:6px;">NO SENTINELS MATCH SEARCH QUERY</div>`;
    return;
  }

  dock.innerHTML = items.map(item => `
    <button class="sentinel-chip ${item.id === activeArtifactId ? 'active' : ''}" 
            onclick="selectArtifactById('${item.id}')"
            title="Focus ${item.name}">
      <span class="chip-dot"></span>
      <span class="chip-name">${item.name}</span>
      <span class="chip-year mono">${item.yearLanded}</span>
    </button>
  `).join('');
}

/**
 * Switch celestial body between The Moon and Mars
 */
function switchPlanet(planet) {
  if (currentPlanet === planet) return;
  currentPlanet = planet;

  map.removeLayer(layers.moon);
  map.removeLayer(layers.mars);

  layers[planet].addTo(map);
  map.fitBounds(bounds);

  // Update button active state
  document.getElementById('btn-moon').classList.toggle('active', planet === 'moon');
  document.getElementById('btn-mars').classList.toggle('active', planet === 'mars');

  // Update Sector Header
  const sectorEl = document.getElementById('current-sector');
  if (sectorEl) {
    sectorEl.textContent = planet === 'moon' 
      ? 'LUNAR SURFACE [SECTOR-L1]' 
      : 'MARTIAN SURFACE [SECTOR-M2]';
  }

  // Clear search on switch
  const searchInput = document.getElementById('sentinel-search');
  if (searchInput) searchInput.value = '';
  const clearBtn = document.getElementById('clear-search-btn');
  if (clearBtn) clearBtn.classList.add('hidden');

  closeDrawer();
  activeArtifactId = null;
  renderMarkers(planet);
}

/**
 * Open Artifact Dossier Drawer
 */
function openDrawer(item) {
  activeArtifactId = item.id;
  const drawer = document.getElementById('artifact-drawer');
  const content = document.getElementById('drawer-content');
  if (!drawer || !content) return;

  // Highlight marker & chip
  updateActiveMarkerHighlight(item.id);

  // Determine active status badge color
  const isCurrentlyActive = item.status.toLowerCase().includes('active');
  const statusClass = isCurrentlyActive ? 'status-badge status-active' : 'status-badge';

  content.innerHTML = `
    <div class="dossier-hero">
      <div class="badge-cluster">
        <span class="${statusClass}">
          <span class="badge-dot"></span>
          ${item.status}
        </span>
        <span class="mono-badge">YEAR: ${item.yearLanded}</span>
        <span class="mono-badge">[LAT: ${item.coords[0]}°, LON: ${item.coords[1]}°]</span>
      </div>

      <h2 class="artifact-title">${item.name}</h2>
      <p class="artifact-headline mono">${item.headline}</p>
    </div>

    <div class="artifact-visual-container">
      <div class="lens-frame">
        <div class="lens-bracket tl"></div>
        <div class="lens-bracket tr"></div>
        <div class="lens-bracket bl"></div>
        <div class="lens-bracket br"></div>
        <div class="lens-scanline"></div>
        <img class="artifact-img" 
             src="${item.imageUrl}" 
             alt="${item.name}" 
             onerror="handleImageFallback(this)" />
      </div>
      <div class="lens-caption mono">OBSERVATORY SENSOR FEED // RETICLE 01</div>
    </div>

    <div class="dossier-card">
      <div class="card-title">
        <span class="card-icon">📖</span>
        <h4>EXPEDITION LOG</h4>
      </div>
      <div class="story-box body-md">
        "${item.story}"
      </div>
    </div>

    <div class="dossier-card">
      <div class="card-title">
        <span class="card-icon">🔬</span>
        <h4>SCIENTIFIC YIELD</h4>
      </div>
      <div class="science-box body-md">
        ${item.science}
      </div>
    </div>
  `;

  drawer.classList.remove('drawer-hidden');

  // Smoothly center map towards item coordinates
  map.panTo(item.coords, { animate: true, duration: 0.8 });
}

/**
 * Close Drawer
 */
function closeDrawer() {
  const drawer = document.getElementById('artifact-drawer');
  if (drawer) {
    drawer.classList.add('drawer-hidden');
  }
  activeArtifactId = null;
  updateActiveMarkerHighlight(null);
}

/**
 * Select artifact directly by ID (from dock or search)
 */
function selectArtifactById(id) {
  const item = artifactsData.find(a => a.id === id);
  if (!item) return;

  if (item.body !== currentPlanet) {
    switchPlanet(item.body);
  }

  openDrawer(item);
}

/**
 * Navigate through sentinels with Prev / Next buttons
 */
function navigateArtifact(direction) {
  const currentList = artifactsData.filter(a => a.body === currentPlanet);
  if (!currentList.length) return;

  let currentIndex = currentList.findIndex(a => a.id === activeArtifactId);
  if (currentIndex === -1) currentIndex = 0;

  let nextIndex = (currentIndex + direction + currentList.length) % currentList.length;
  openDrawer(currentList[nextIndex]);
}

/**
 * Focus / Center Map on current active artifact
 */
function focusCurrentArtifact() {
  if (!activeArtifactId) return;
  const item = artifactsData.find(a => a.id === activeArtifactId);
  if (item) {
    map.flyTo(item.coords, Math.max(map.getZoom(), 2), {
      animate: true,
      duration: 0.8
    });
  }
}

/**
 * Update UI Highlight on Markers & Chips
 */
function updateActiveMarkerHighlight(id) {
  document.querySelectorAll('.observatory-pin-container').forEach(el => {
    el.classList.remove('active-pin');
  });
  if (id) {
    const pin = document.getElementById(`pin-${id}`);
    if (pin) pin.classList.add('active-pin');
  }

  document.querySelectorAll('.sentinel-chip').forEach(el => {
    el.classList.remove('active');
  });
  const currentItems = artifactsData.filter(a => a.body === currentPlanet);
  renderNavigatorDock(currentItems);
}

/**
 * Image Fallback Handler if remote NASA or local file is missing
 */
function handleImageFallback(imgElement) {
  // Graceful space telemetry blueprint placeholder
  imgElement.onerror = null;
  imgElement.src = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='220' viewBox='0 0 400 220'%3E%3Crect fill='%230a0d18' width='400' height='220'/%3E%3Ccircle cx='200' cy='110' r='50' fill='none' stroke='%23ff6a5a' stroke-width='1.5' stroke-dasharray='4 4'/%3E%3Ccircle cx='200' cy='110' r='20' fill='none' stroke='%23c9d2e8' stroke-width='1'/%3E%3Cpath d='M150 110 h100 M200 60 v100' stroke='%23c9d2e8' stroke-width='0.75' opacity='0.4'/%3E%3Ctext x='50%25' y='180' fill='%23c9d2e8' font-family='monospace' font-size='12' text-anchor='middle'%3ETELEMETRY ARCHIVE IMAGE%3C/text%3E%3C/svg%3E";
}

/**
 * Live Star Chart Coordinates Tracker
 */
map.on('mousemove', function (e) {
  const coordsEl = document.getElementById('mouse-coords');
  if (coordsEl) {
    const lat = e.latlng.lat >= 0 ? `+${e.latlng.lat.toFixed(2)}` : e.latlng.lat.toFixed(2);
    const lon = e.latlng.lng >= 0 ? `+${e.latlng.lng.toFixed(2)}` : e.latlng.lng.toFixed(2);
    coordsEl.textContent = `LAT: ${lat}° // LON: ${lon}°`;
  }
});

/**
 * Filter sentinels via Star Chart Search Bar
 */
function handleSearch(val) {
  const clearBtn = document.getElementById('clear-search-btn');
  if (clearBtn) {
    clearBtn.classList.toggle('hidden', !val);
  }
  renderMarkers(currentPlanet, val);
}

function clearSearch() {
  const input = document.getElementById('sentinel-search');
  if (input) {
    input.value = '';
    handleSearch('');
  }
}

/**
 * Update Telemetry Ribbon Counters
 */
function updateTelemetryRibbon(count) {
  const counterEl = document.getElementById('sentinel-counter');
  if (counterEl) {
    counterEl.textContent = `${count} SENTINELS CATALOGED`;
  }
}

// Close drawer on Escape key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeDrawer();
  }
});

// Initial Render
renderMarkers('moon');

setTimeout(() => {
  map.invalidateSize();
}, 250);
