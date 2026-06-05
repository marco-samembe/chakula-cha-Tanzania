
// =======================
// ELEMENTS
// =======================
const tribesContainer = document.getElementById("tribesContainer");
const foodsContainer = document.getElementById("foodsContainer");
const tribeFoodsContainer = document.getElementById("tribeFoodsContainer");
const regionsContainer = document.getElementById("regionsContainer");
const searchInput = document.getElementById("searchInput");
const foodSearchInput = document.getElementById("foodSearchInput");
const regionSearchInput = document.getElementById("regionSearchInput");
const mapContainer = document.getElementById("mapContainer");

// =======================
// OPEN REGION
// =======================
window.openRegion = function(region){
  window.location.href = `index.html?region=${encodeURIComponent(region)}`;
};

// =======================
// MAP
// =======================
if (mapContainer) {
  mapContainer.innerHTML = `
    <h2>Tanzania Map</h2>
    <img 
      src="https://upload.wikimedia.org/wikipedia/commons/3/38/Tanzania_location_map.svg"
      style="width:100%;max-width:500px;cursor:pointer;border-radius:10px;"
      onclick="openRegion('Mwanza')"
    >
    <p>Click map to filter tribes</p>
  `;
}

// =======================
// REGION FILTER
// =======================
const urlRegion = new URLSearchParams(location.search).get("region");

let activeTribes = urlRegion
  ? tribes.filter(t => t.region.toLowerCase() === urlRegion.toLowerCase())
  : tribes;

// =======================
// RENDER TRIBES
// =======================
function renderTribes(list){
  if(!tribesContainer) return;

  tribesContainer.innerHTML = "";

  list.forEach(t => {
    tribesContainer.innerHTML += `
      <div class="card">
        <img src="${t.image}">
        <h3>${t.name}</h3>
        <p>${t.region}</p>
        <a class="btn" href="tribe-foods.html?tribe=${encodeURIComponent(t.name)}">
          View Foods
        </a>
      </div>
    `;
  });
}

if(tribesContainer){
  renderTribes(activeTribes);
}

// =======================
// REGIONS
// =======================
function renderRegions(list){
  if(!regionsContainer) return;

  regionsContainer.innerHTML = list.map(r => `
    <div class="card region-card" onclick="openRegion('${r.name || r}')">
      <img src="${r.image || 'images/default.jpg'}" alt="${r.name || r}" />
      <h3>${r.name || r}</h3>
      <p>Click to view tribes</p>
    </div>
  `).join("");
}

if(regionsContainer){
  renderRegions(allRegions);
}
// REGION SEARCH
if(regionSearchInput){
  regionSearchInput.addEventListener("input", function(){
    const val = this.value.toLowerCase();

    const filtered = allRegions.filter(r =>
      r.name.toLowerCase().includes(val)
    );

    renderRegions(filtered); // 🔥 HII NDIO ILIKUA INAKOSEKANA
  });
}

// =======================
// TRIBE PAGE
// =======================
const tribeName = new URLSearchParams(location.search).get("tribe");

if(tribeFoodsContainer && tribeName){

  const tribe = tribes.find(t =>
    t.name.toLowerCase() === tribeName.toLowerCase()
  );

  if(!tribe){
    tribeFoodsContainer.innerHTML = "<h2>Tribe not found</h2>";
  } else {

    const title = document.getElementById("tribeTitle");
    const region = document.getElementById("tribeRegion");
    const map = document.getElementById("tribeMap");

    if(title) title.innerText = tribe.name;
    if(region) region.innerText = tribe.region;

    // MAP FIX
    if(map){
      map.innerHTML = `
        <iframe 
          width="100%" 
          height="300" 
          style="border:0;border-radius:10px;"
          src="https://maps.google.com/maps?q=${encodeURIComponent(tribe.region)}&output=embed">
        </iframe>
      `;
    }

    tribeFoodsContainer.innerHTML = "";

    tribe.foods.forEach(f => {
      tribeFoodsContainer.innerHTML += `
        <div class="card">
          <img src="${f.img}">
          <h3>${f.name}</h3>
          <p>${f.desc}</p>

          <button class="btn" onclick="openVideo('${f.recipe}')">
            Watch Video
          </button>
        </div>
      `;
    });
  }
}

// =======================
// SEARCH TRIBES
// =======================
if(searchInput){
  searchInput.addEventListener("input", function(){
    const val = this.value.toLowerCase();

    const filtered = activeTribes.filter(t =>
      t.name.toLowerCase().includes(val) ||
      t.region.toLowerCase().includes(val)
    );

    renderTribes(filtered);
  });
}

// =======================
// FOOD SYSTEM
// =======================
function showFoods(){
  if(!foodsContainer) return;

  foodsContainer.innerHTML = "";

  tribes.forEach(t => {
    t.foods.forEach(f => {
      foodsContainer.innerHTML += `
        <div class="card">
          <img src="${f.img}">
          <h3>${f.name}</h3>
          <p>${t.name}</p>
          <p>${f.desc}</p>

          <button class="btn" onclick="openVideo('${f.recipe}')">
            Watch Video
          </button>
        </div>
      `;
    });
  });
}

if(foodsContainer){
  showFoods();
}

// =======================
// FOOD SEARCH
// =======================
if(foodSearchInput){
  foodSearchInput.addEventListener("input", function(){

    const val = this.value.toLowerCase().trim();

    if(val === ""){
      showFoods();
      return;
    }

    foodsContainer.innerHTML = "";

    tribes.forEach(t => {
      t.foods.forEach(f => {
        if(
          f.name.toLowerCase().includes(val) ||
          t.name.toLowerCase().includes(val)
        ){
          foodsContainer.innerHTML += `
            <div class="card">
              <img src="${f.img}">
              <h3>${f.name}</h3>
              <p>${t.name}</p>
              <p>${f.desc}</p>
           
              <button class="btn" onclick="openVideo('${f.recipe}')">
                Watch Video
              </button>
            </div>
          `;
        }
      });
    });

  });
}

// =======================
// VIDEO POPUP SYSTEM
// =======================
window.openVideo = function(url){

  let videoId = "";

  if (url.includes("watch?v=")) {
    videoId = url.split("watch?v=")[1];
  }
  else if (url.includes("youtu.be/")) {
    videoId = url.split("youtu.be/")[1];
  }

  if (videoId) {
    videoId = videoId.split("&")[0].split("?")[0];
  }

  const embedUrl = videoId
    ? `https://www.youtube.com/embed/${videoId}?autoplay=1`
    : url;

  const modal = document.createElement("div");

  modal.style = `
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:rgba(187, 175, 67, 0.95);
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:999999;
  `;

  modal.innerHTML = `
    <div style="width:90%;max-width:900px;background:#000;padding:10px;border-radius:12px;">

      <iframe
        width="100%"
        height="450"
        src="${embedUrl}"
        frameborder="0"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowfullscreen>
      </iframe>

      <button id="closeVideoBtn"
        style="width:10%;padding:12px;margin-top:10px;background:red;color:white;border:none;cursor:pointer;">
        Close Video
      </button>

    </div>
  `;

  document.body.appendChild(modal);

  document.getElementById("closeVideoBtn").onclick = function () {
    modal.remove();
  };

  modal.addEventListener("click", function(e){
    if (e.target === modal) {
      modal.remove();
    }
  });

};