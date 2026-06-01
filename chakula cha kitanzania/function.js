// =======================
// ELEMENTS
// =======================
const tribesContainer=document.getElementById("tribesContainer");
const foodsContainer=document.getElementById("foodsContainer");
const tribeFoodsContainer=document.getElementById("tribeFoodsContainer");
const regionsContainer=document.getElementById("regionsContainer");
const searchInput=document.getElementById("searchInput");
const foodSearchInput=document.getElementById("foodSearchInput");
const regionSearchInput=document.getElementById("regionSearchInput"); // NEW
const mapContainer=document.getElementById("mapContainer");

// =======================
// OPEN REGION
// =======================
window.openRegion=function(region){
window.location.href=`index.html?region=${encodeURIComponent(region)}`;
};

// =======================
// MAP
// =======================
if(mapContainer){
mapContainer.innerHTML=`
<h2>Tanzania Map</h2>
<img src="https://upload.wikimedia.org/wikipedia/commons/3/38/Tanzania_location_map.svg"
style="width:100%;max-width:500px;cursor:pointer;border-radius:10px;"
onclick="openRegion('Mwanza')">
<p>Click map to filter tribes</p>
`;
}

// =======================
// REGION FILTER (URL)
// =======================
const urlRegion=new URLSearchParams(location.search).get("region");

let activeTribes = urlRegion
? tribes.filter(t => t.region.toLowerCase() === urlRegion.toLowerCase())
: tribes;

// =======================
// RENDER TRIBES
// =======================
function renderTribes(list){
if(!tribesContainer) return;

tribesContainer.innerHTML="";

list.forEach((t)=>{

tribesContainer.innerHTML+=`
<div class="card">
<img src="${t.image}">
<h3>${t.name}</h3>
<p>${t.region}</p>
<a class="btn" href="tribe-foods.html?tribe=${encodeURIComponent(t.name)}">
View Foods
</a>
</div>`;
});
}

if(tribesContainer){
renderTribes(activeTribes);
}

// =======================
// REGION LIST + SEARCH (NEW)
// =======================
function renderRegions(list){
if(!regionsContainer) return;

regionsContainer.innerHTML = list.map(r=>`
<div class="card" onclick="openRegion('${r}')">
<h3>${r}</h3>
<p>Click to view tribes</p>
</div>
`).join("");
}

// default regions
const allRegions=[
"Arusha","Dar es salaam","Dodoma","Geita","Iringa",
"Kagera","Katavi","Kigoma","Kilimanjaro","Lindi",
"Manyara","Mara","Mbeya","Morogoro","Mtwara",
"Mwanza","Njombe","Pemba kusini(Zanzibar)","Pemba Kaskazini (Zanzibar)","Pwani",
"Rukwa (Sumbawanga)","Ruvuma (Songea)","Shinyanga","Simiyu(Bariadi)","Singida",
"Songwe","Tabora","Tanga","Unguja kusini(Zanzibar)","Unguja kasikazini(Zanzibar)",
"unguja mjini magaribi"
];

if(regionsContainer){
renderRegions(allRegions);
}

// REGION SEARCH (NEW FEATURE)
if(regionSearchInput){
regionSearchInput.addEventListener("input",function(){

const val=this.value.toLowerCase().trim();

const filtered = allRegions.filter(r =>
r.toLowerCase().includes(val)
);

renderRegions(filtered);

});
}

// =======================
// TRIBE PAGE (SAFE)
// =======================
const tribeName=new URLSearchParams(location.search).get("tribe");

if(tribeFoodsContainer && tribeName){

const tribe = tribes.find(t =>
t.name.toLowerCase() === tribeName.toLowerCase()
);

if(!tribe){
tribeFoodsContainer.innerHTML="<h2>Tribe not found</h2>";
}else{

const title=document.getElementById("tribeTitle");
const region=document.getElementById("tribeRegion");
const map=document.getElementById("tribeMap");

if(title) title.innerText=tribe.name;
if(region) region.innerText=tribe.region;

if(map){
map.innerHTML=
`<iframe src="https://maps.google.com/maps?q=${tribe.region}&output=embed"></iframe>`;
}

tribeFoodsContainer.innerHTML="";

tribe.foods.forEach(f=>{
tribeFoodsContainer.innerHTML+=`
<div class="card">
<img src="${f.img}">
<h3>${f.name}</h3>
<p>${f.desc}</p>
<a class="btn" target="_blank" href="${f.recipe}">Recipe</a>
</div>`;
});
}
}

// =======================
// TRIBE SEARCH
// =======================
if(searchInput){
searchInput.addEventListener("input",function(){

const val=this.value.toLowerCase();

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

foodsContainer.innerHTML="";

tribes.forEach(t=>{
t.foods.forEach(f=>{
foodsContainer.innerHTML+=`
<div class="card">
<img src="${f.img}">
<h3>${f.name}</h3>
<p>${t.name}</p>
<p>${f.desc}</p>
<a class="btn" target="_blank" href="${f.recipe}">Recipe</a>
</div>`;
});
});
}

if(foodsContainer){
showFoods();
}

// FOOD SEARCH
if(foodSearchInput){
foodSearchInput.addEventListener("input",function(){

const val=this.value.toLowerCase().trim();

if(val===""){
showFoods();
return;
}

foodsContainer.innerHTML="";

tribes.forEach(t=>{
t.foods.forEach(f=>{
if(
f.name.toLowerCase().includes(val) ||
t.name.toLowerCase().includes(val)
){
foodsContainer.innerHTML+=`
<div class="card">
<img src="${f.img}">
<h3>${f.name}</h3>
<p>${t.name}</p>
<p>${f.desc}</p>
<a class="btn" target="_blank" href="${f.recipe}">Recipe</a>
</div>`;
}
});
});

});
}



