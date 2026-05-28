const tribes = [

{
name:"Chagga",
region:"Kilimanjaro",
image:"https://picsum.photos/600/400?1",
foods:[
{name:"Ndizi Nyama",img:"https://picsum.photos/400/300?11",desc:"Banana & meat",recipe:"https://www.youtube.com/results?search_query=ndizi+nyama"},
{name:"Mbege",img:"https://picsum.photos/400/300?12",desc:"Banana beer",recipe:"https://www.youtube.com/results?search_query=mbege"},
{name:"Kiburu",img:"https://picsum.photos/400/300?13",desc:"Beans & banana",recipe:"https://www.youtube.com/results?search_query=kiburu"},
{name:"Machalari",img:"https://picsum.photos/400/300?14",desc:"Soup",recipe:"https://www.youtube.com/results?search_query=machalari"},
{name:"Kitawa",img:"https://picsum.photos/400/300?15",desc:"Sweet banana",recipe:"https://www.youtube.com/results?search_query=kitawa"}
]
},

{
name:"Maasai",
region:"Arusha",
image:"https://picsum.photos/600/400?2",
foods:[
{name:"Nyama Choma",img:"https://picsum.photos/400/300?21",desc:"Roasted meat",recipe:"https://www.youtube.com/results?search_query=nyama+choma"},
{name:"Milk",img:"https://picsum.photos/400/300?22",desc:"Fresh milk",recipe:"https://www.youtube.com/results?search_query=milk"},
{name:"Ugali",img:"https://picsum.photos/400/300?23",desc:"Maize meal",recipe:"https://www.youtube.com/results?search_query=ugali"},
{name:"Goat Meat",img:"https://picsum.photos/400/300?24",desc:"Goat meat",recipe:"https://www.youtube.com/results?search_query=goat+meat"},
{name:"Tea",img:"https://picsum.photos/400/300?25",desc:"Milk tea",recipe:"https://www.youtube.com/results?search_query=milk+tea"}
]
},

{
name:"Sukuma",
region:"Mwanza",
image:"https://picsum.photos/600/400?3",
foods:[
{name:"Samaki",img:"https://picsum.photos/400/300?31",desc:"Lake fish",recipe:"https://www.youtube.com/results?search_query=samaki"},
{name:"Dagaa",img:"https://picsum.photos/400/300?32",desc:"Small fish",recipe:"https://www.youtube.com/results?search_query=dagaa"},
{name:"Ugali Samaki",img:"https://picsum.photos/400/300?33",desc:"Ugali & fish",recipe:"https://www.youtube.com/results?search_query=ugali+samaki"},
{name:"Mchemsho",img:"https://picsum.photos/400/300?34",desc:"Boiled mix",recipe:"https://www.youtube.com/results?search_query=mchemsho"},
{name:"Wali Maharage",img:"https://picsum.photos/400/300?35",desc:"Rice & beans",recipe:"https://www.youtube.com/results?search_query=wali+maharage"}
]
},

{
name:"Haya",
region:"Kagera",
image:"https://picsum.photos/600/400?4",
foods:[
{name:"Boo",img:"https://picsum.photos/400/300?41",desc:"Banana food",recipe:"https://www.youtube.com/results?search_query=boo+food"},
{name:"Omurere",img:"https://picsum.photos/400/300?42",desc:"Traditional meal",recipe:"https://www.youtube.com/results?search_query=omurere"},
{name:"Enyama",img:"https://picsum.photos/400/300?43",desc:"Meat dish",recipe:"https://www.youtube.com/results?search_query=nyama+recipe"},
{name:"Millet Porridge",img:"https://picsum.photos/400/300?44",desc:"Millet food",recipe:"https://www.youtube.com/results?search_query=millet+porridge"},
{name:"Fish stew",img:"https://picsum.photos/400/300?45",desc:"Fish dish",recipe:"https://www.youtube.com/results?search_query=fish+stew"}
]
}
];

// DOM
const tribesContainer=document.getElementById("tribesContainer");
const foodsContainer=document.getElementById("foodsContainer");
const tribeFoodsContainer=document.getElementById("tribeFoodsContainer");
const regionsContainer=document.getElementById("regionsContainer");

// RENDER TRIBES
function renderTribes(list){
if(!tribesContainer) return;

tribesContainer.innerHTML="";

list.forEach((t,i)=>{
tribesContainer.innerHTML+=`
<div class="card">
<img src="${t.image}">
<h3>${t.name}</h3>
<p><b>Region:</b> ${t.region}</p>
<a class="btn" href="tribe-foods.html?id=${i}">View Foods</a>
</div>`;
});
}

// SINGLE TRIBE PAGE
const id=new URLSearchParams(location.search).get("id");

if(id!==null && tribeFoodsContainer){

const tribe=tribes[id];

document.getElementById("tribeTitle").innerText=tribe.name;
document.getElementById("tribeRegion").innerText="Region: "+tribe.region;

document.getElementById("tribeMap").innerHTML=
`<iframe src="https://maps.google.com/maps?q=${tribe.region}&output=embed"></iframe>`;

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

// REGIONS (CORRECT GROUPING)
if(regionsContainer){
const regions=[
"Kilimanjaro",
"Arusha",
"Mwanza",
"Kagera"
];

regionsContainer.innerHTML = regions.map(r=>`
<div class="card" onclick="openRegion('${r}')">
<h3>${r}</h3>
<p>View tribes in this region</p>
</div>
`).join("");
}

// SEARCH TRIBES
const searchInput=document.getElementById("searchInput");

if(searchInput){
searchInput.addEventListener("input",function(){
const val=this.value.toLowerCase();

const filtered=tribes.filter(t=>
t.name.toLowerCase().includes(val) ||
t.region.toLowerCase().includes(val)
);

renderTribes(filtered);
});
}

// SEARCH FOODS
const foodSearchInput=document.getElementById("foodSearchInput");

if(foodSearchInput){
foodSearchInput.addEventListener("input",function(){
const val=this.value.toLowerCase();

foodsContainer.innerHTML="";

tribes.forEach(t=>{
t.foods.forEach(f=>{
if(f.name.toLowerCase().includes(val) || t.name.toLowerCase().includes(val)){
foodsContainer.innerHTML+=`
<div class="card">
<img src="${f.img}">
<h3>${f.name}</h3>
<p><b>${t.name}</b></p>
<p>${f.desc}</p>
<a class="btn" target="_blank" href="${f.recipe}">Recipe</a>
</div>`;
}
});
});
});
}

// INIT
renderTribes(tribes);
showFoods();