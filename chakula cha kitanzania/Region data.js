const allRegions = [
  { name: "Arusha", image: "https://www.originalmasai.com/wp-content/uploads/2021/04/Arusha-city11.jpg" },
  { name: "Dar es Salaam", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3O2RpLhwo0F1j4Op1zJ6nkFMSBcRGCM1aUA&s" },
  { name: "Dodoma", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ctCSBhyJn49EQUPeeXccfvMNM_K62CLang&s" },
  { name: "Geita", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkh71fUljYnR2RswiJgZLoLJ0JjC-2L7Ax5Q&s" },
  { name: "Iringa", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSAkmawlS4fNBlr_qRsh9hBuLLZny8A4R7Lg&s" },

  { name: "Kagera", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJu9KL4BoA0OJqGj0_f5zUMhVynqlSfvLcSQ&s" },
  { name: "Katavi", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqkQwr0hN9UyKaxfsYMwxFjfuLkd9AxDLzDQ&s" },
  { name: "Kigoma", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA8NOpsHGtGEu8LSVdb5-zXNgnLWKpgWVAuw&s" },
  { name: "Kilimanjaro", image: "https://c.files.bbci.co.uk/39F1/production/_106833841_c802a922-1a6e-4bbe-a420-ce8647a2920b.jpg" },
  { name: "Lindi", image: "https://i.ytimg.com/vi/7lKtS0iIEXk/maxresdefault.jpg" },

  { name: "Manyara", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvyio7nqmY_oVzDZBhRHT1d144JsHi0iJVIg&s" },
  { name: "Mara", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnbNprsz94o5qMJz1oW9TWBurklEg7WxNN-A&s" },
  { name: "Mbeya", image: "https://i.ytimg.com/vi/dtgUHQtxiw4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCGMYG1rkqFJU3MVsMWAdJKJbElzw" },
  { name: "Morogoro", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShU6Y1mD0wjLfdw-fH2HQLE8p6ek5rW8TLNg&s" },
  { name: "Mtwara", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfHhnvT41uZonz-XQgxF3fLiqJvJ9z6_0Hqg&s" },

  { name: "Mwanza", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3EYVEptHAeK1ZEO-9K7KzAUkR-gO3-2RkMg&s" },
  { name: "Njombe", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrsp7G632HJNBEwzH5eyYeTtIff1wm9uE9jw&s" },
  { name: "Pemba Kusini (Zanzibar)", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw_F5CbYAKxYU71QXjhIUvf_O1KUGyqBrscQ&s" },
  { name: "Pemba Kaskazini (Zanzibar)", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHg-cpc6NmATUxdi3_1wZ-BJU9ZmZoCiqV6Q&s" },
  { name: "Pwani", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_dOZmM6N3IgizAnGyiZNo4oVjMtT2eNOzfQ&s" },

  { name: "Rukwa (Sumbawanga)", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbE19bvv0UPm-q3s1ofUmDi66EFJEgAVBqhw&s" },
  { name: "Ruvuma (Songea)", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQuU0jRSlm0_iGruXgkrDl-M0dB5_sm8faqg&s" },
  { name: "Shinyanga", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk9e70IZnxWIyj7Hat08TmgkW-4cNkH7layg&s" },
  { name: "Simiyu (Bariadi)", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuMhOSncPkNliWrORnL9Nt8uPAWh-QFCcMUQ&s" },
  { name: "Singida", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2377u_FfAhcSQQUpuxeF0Zw-WHoYQgOMHmQ&s" },

  { name: "Songwe", image: "https://www.eatv.tv/sites/default/files/news/2016/02/24/Songwe.JPG" },
  { name: "Tabora", image: "https://worldofwebstories.com/wp-content/uploads/2023/06/maxresdefault-2-1024x576.jpg" },
  { name: "Tanga", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR10nuaMJYaJ0F5Ad_VrxxGqxGhFzgz6IOxYg&s" },
  { name: "Unguja Kusini (Zanzibar)", image: "https://upload.wikimedia.org/wikipedia/commons/4/46/Kizimkazi13.jpg" },
  { name: "Unguja Kaskazini (Zanzibar)", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3kZb0cg7r9QTp-MJ2lWPC9kvHGL_OShZ9mA&s" },

  { name: "Unguja Mjini Magharibi", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Chumbe03.jpg/250px-Chumbe03.jpg" }
];



// =======================
// TRIBES DATA
// =======================
const tribes = [
{
region:"Arusha",
name:"Waarusha, Waasa, Wadatoga, Wahadzabe, Wakisankasa, Wamasai, Wameru, watemi",
image:"https://tourwithpipi.com/wp-content/uploads/2025/12/sukuma-tribe-tanzania.jpg",
foods:[
{name:"Nyama choma",img:"https://th.bing.com/th/id/R.966abb7d212f46d10b47176df5ea737c?rik=DYO5sX3L%2b0NPuw&pid=ImgRaw&r=0",desc:"Nyama iliyochomwa",recipe:"https://www.youtube.com/watch?v=hsSDSeyz5z8"},
{name:"Mtori",img:"https://tse4.mm.bing.net/th/id/OIP.gGazleSu2IKqzyJq1V-bEAHaE8?r=0&cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3",desc:"Ndizi na nyama",recipe:"https://www.youtube.com/watch?v=ng6vg7X8nFc"},
{name:"Kidume ",img:"https://tse1.mm.bing.net/th/id/OIP.Z9dGVlZXD6xlykZJzEkCmAHaFj?r=0&cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3",desc:"ugali mgumu wa mahindi",recipe:"https://www.youtube.com/watch?v=QArtHGXwzWY"},
{name:"Ngararimo",img:"https://thf.bing.com/th/id/OIP.wdwkNNBePkQsFekGZbhaMwHaFg?w=200&h=180&c=7&r=0&o=7&cb=thfc1falcon&pid=1.7&rm=3",desc:"uji wa mahindi na maharage",recipe:"https://www.youtube.com/results?search_query=Ngararimo"},
{name:"Macharali",img:"https://tse4.mm.bing.net/th/id/OIP.tigRUpSCUq_ZDIRxecJgqQHaEK?r=0&cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3",desc:"nyama na ndizi",recipe:"https://www.youtube.com/results?search_query=ndizi+nyama"}
]
},


{
region:"Dar es salaam",
name:"waswahili, Wazaramo",
image:"https://images.lonelyplanetitalia.it/static/places/dar-es-salaam-3666.jpg?q=80&p=slider&s=4c0c0a231f0ad1383f7b415b140f36ef",
foods:[
{name:"Ugali na samaki (Wazaramo)",img:"https://tse2.mm.bing.net/th/id/OIP.kykWbNuo0r8MvIGqNWtllQHaFJ?r=0&cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3",desc:"Ugali na samaki (Wazaramo)",recipe:"https://www.youtube.com/results?search_query=Ugali na samaki (Wazaramo)"},
{name:"Pilau (Waswahili)",img:"https://tse3.mm.bing.net/th/id/OIP.rVqjoj8OL3NBDcLr-VXA5wHaEK?r=0&cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3",desc:"Pilau (Waswahili)",recipe:"https://www.youtube.com/results?search_query=Pilau (Waswahili)"},
{name:"Wali wa nazi",img:"https://tse1.mm.bing.net/th/id/OIP.PzgaWLPWacQTnHboahYX2gHaFR?r=0&cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3",desc:"Wali wa nazi",recipe:"https://www.youtube.com/results?search_query=wali wa nazi"},
{name:"mchuzi wa kamba kavu",img:"https://th.bing.com/th/id/R.04bf877d74019a756683a10a6cb17e79?rik=YqZjNIoD3e%2bc8w&pid=ImgRaw&r=0",desc:"mchuzi wa kamba kavu ",recipe:"https://www.youtube.com/results?search_query=mchuzi wa kamba kavu"},
{name:"Urojo",img:"https://i.ytimg.com/vi/srcM8ssHPNE/maxresdefault.jpg",desc:"supu ya Zanzibar inayopatikana sana Dar",recipe:"https://www.youtube.com/results?search_query=urojo"},
]
},


{
region:"Dodoma",
name:"Waakiek, Waalagwa, Waburunge, Wagogo, warangi, Wasandawe",
image:"https://tse1.mm.bing.net/th/id/OIP.UzBKTbwRdnRiaHCzKDnaoAHaE8?r=0&cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3",
foods:[
{name:"Uji wa mtama (Wagogo)",img:"https://tse1.explicit.bing.net/th/id/OIP.U0FyiqZH2RXW5ZNgXZ1ygQHaEK?r=0&cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3",desc:"Uji wa mtama (Wagogo)",recipe:"https://www.youtube.com/results?search_query=Uji wa mtama (Wagogo)"},
{name:"Makande(mahindi na maharage",img:"https://tse1.mm.bing.net/th/id/OIP.aZP5UbAuDXMJU0ItUioajgHaFj?r=0&cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3",desc:"mchanganyiko wa mahindi na maharage",recipe:"https://www.youtube.com/results?search_query=makande"},
{name:"Mkate wa kujibaba",img:"https://th.bing.com/th/id/R.d918289958f3166a2d36a9033c66ae58?rik=34FhCrxejwQuCQ&pid=ImgRaw&r=0",desc:"mkate wa kujibaba",recipe:"https://www.youtube.com/results?search_query=mkate wa kujibaba"},
{name:"Nsembe",img:"https://tse4.mm.bing.net/th/id/OIP.3pSazaxTA1edDhA_7mQjPQHaHa?r=0&cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3",desc:"Nyama ya kuku",recipe:"https://www.youtube.com/results?search_query=mapishi ya nyama ya kuku ya wagogo"},
{name:"maharage ya kwanza",img:"https://thf.bing.com/th/id/OIP.CF3bnuuxQyJDlZ_2WwM4WQHaEK?w=330&h=185&c=7&r=0&o=7&cb=thfc1falcon&pid=1.7&rm=3",desc:"mahindi na maharage kwa viazi vikuu",recipe:"https://www.youtube.com/results?search_query=chakula cha mahindi na maharage kwa viazi vikuu"},
]
},
{
region:"Geita",
name:"Wasukuma, Wasumbwa, Wazinza,",
image:"https://picsum.photos/600/400?1",
foods:[
{name:"Ugali Wa kisukuma",img:"https://picsum.photos/400/300?1",desc:"ugali wa kisukuma",recipe:"https://www.youtube.com/results?search_query=Ugali wa kisukuma"},
{name:"Michembe",img:"https://picsum.photos/400/300?11",desc:"viazi vikikaushwa na kukatwa vipande vidogo vidogo",recipe:"https://www.youtube.com/results?search_query=michembe wasukuma"},
{name:"",img:"https://picsum.photos/400/300?11",desc:"",recipe:"https://www.youtube.com/results?search_query="},
{name:"Kisamvu",img:"https://picsum.photos/400/300?11",desc:"majani ya mhogo",recipe:"https://www.youtube.com/results?search_query=kisamvu namna ya kupika"},
{name:"Nsansa",img:"https://picsum.photos/400/300?11",desc:"Majani ya kunde",recipe:"https://www.youtube.com/results?search_query=namna ya kupika Majani ya kunde(nsansa)"},
]
},
{
region:"Iringa",
name:"Wabena, wahehe",
image:"https://www.pinyourfootsteps.com/wp-content/uploads/2025/05/iringa_tanzania-7-min-1170x659.jpg",
foods:[
{name:"ugali wa muhogo",img:"",desc:"ugali unaopikwa kwa ugnga wa muhogo",recipe:"https://www.youtube.com/results?search_query=Ugali wa muhogo"},
{name:"Matembele",img:"",desc:"majani ya viazi",recipe:"https://www.youtube.com/results?search_query=namna ya kupika tembele"},
{name:"makande",img:"",desc:"makande",recipe:"https://www.youtube.com/results?search_query=namna ya kupika makande ya watu wa iringa"},
{name:"Nyama ya mbuzi choma",img:"",desc:"Nyamachoma ya mbuzi",recipe:"https://www.youtube.com/results?search_query=namna ya kutayarisha mbuzi wa kuchoma iringa"},
{name:"Mbelege",img:"https://picsum.photos/400/300?11",desc:"uji wa wibi",recipe:"https://www.youtube.com/results?search_query=namna ya kupika mbelege"},
]
},
{
region:"Kagera",
name:"Waganda, Wahangaza, Wahaya, Wanyambo, washubi",
image:"https://picsum.photos/600/400?1",
foods:[
{name:"Eshabwe",img:"https://picsum.photos/400/300?1",desc:"tope la siagi",recipe:"https://www.youtube.com/results?search_query=Eshabwe tope la siagi kagera"},
{name:"Kitojo",img:"https://picsum.photos/400/300?11",desc:"majani ya majarubani",recipe:"https://www.youtube.com/results?search_query=Kitojo"},
{name:"kahawa",img:"https://picsum.photos/400/300?11",desc:"kahawa ya viungo",recipe:"https://www.youtube.com/results?search_query=kahawa ya wahaya ya viungo"},
{name:"Orutoki",img:"https://picsum.photos/400/300?11",desc:"ugali wa mihogo na ndizi",recipe:"https://www.youtube.com/results?search_query=Orutoki ugali wa mihogo na ndizi"},
{name:"mchuzi wa ndizi",img:"https://picsum.photos/400/300?11",desc:"mchuzi wa ndizi",recipe:"https://www.youtube.com/results?search_query=mchuzi wa ndizi"},
]
},
{
region:"Katavi",
name:"Wabembe, Wabende, Wakonongo, Wapimbwe, Warungwa",
image:"https://picsum.photos/600/400?1",
foods:[
{name:"samaki wa ziwa tanganyika",img:"https://picsum.photos/400/300?1",desc:"samaki wa ziwa tanganyika",recipe:"https://www.youtube.com/results?search_query=namna ya kupika samaki kutoka ziwa Tanganyika"},
{name:"ugali wa mahindi",img:"https://picsum.photos/400/300?11",desc:"ugali wa mahindi",recipe:"https://www.youtube.com/results?search_query=ugali wa mahindi katavi"},
{name:"mchuzi wa nyamapoli",img:"https://picsum.photos/400/300?11",desc:"mchuzi wa nyama poli",recipe:"https://www.youtube.com/results?search_query=mchuzi wa nyamapoli"},
{name:"Maboga",img:"https://picsum.photos/400/300?11",desc:"Maboga yaliyopikwa nazi",recipe:"https://www.youtube.com/results?search_query=maboga yaliyopikwa nazi"},
{name:"Mhogo wa kuchemshwa",img:"https://picsum.photos/400/300?11",desc:"Muhogo wa kuchemshwa",recipe:"https://www.youtube.com/results?search_query=mhogo wa kuchemshwa"},
]
},

{
region:"Kigoma",
name:"Wagoma, Waha, Waholoholo, Wajiji, Wamanyema, Watongwe, Wavinza Wazyoba",
image:"https://picsum.photos/600/400?1",
foods:[
{name:"Samaki wa ziwa tanganyika",img:"https://picsum.photos/400/300?1",desc:"mkeke, sangara",recipe:"https://www.youtube.com/results?search_query=namna ya kupika samaki(mkeke, sangara)"},
{name:"ugali wa muhogo",img:"https://picsum.photos/400/300?11",desc:"ugali wa unga wa muhogo",recipe:"https://www.youtube.com/results?search_query= uagali wa unga wa muhogo wa kigoma"},
{name:"Mchuzi wa kama kavu",img:"https://picsum.photos/400/300?11",desc:"Mchuzi wa kamba kavu",recipe:"https://www.youtube.com/results?search_query=namna ya kupika Mchuzi wa kamba kavu"},
{name:"mchuzi wa nazi",img:"https://picsum.photos/400/300?11",desc:"Mchuzi wa nazi",recipe:"https://www.youtube.com/results?search_query=mchuzi wa nazi"},
{name:"Mikate ya mtama",img:"https://picsum.photos/400/300?11",desc:"Mkate wa mtama",recipe:"https://www.youtube.com/results?search_query=namna ya kupika mkate wa mtama kigoma"},
]
},

{
region:"kilimanjaro",
name:"wachaga, Wagweno, Wakahe, Wagasa, Wapare",
image:"https://picsum.photos/600/400?1",
foods:[
{name:"machalari",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnwsYDB46jX0Z-5LJO0oLlVdU5iHCSMiea0Q&s",desc:"ndizi nyama",recipe:"https://www.youtube.com/results?search_query=namna ya kupika ndizi nyama kilimanjaro"},
{name:"Mtori",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOjMyxfNFgYYV_f4kxdzseVwouH_8BMWEOfg&s",desc:"nayma na ndizi kukorogwa pamoja(supu ya nyama na ndizi)",recipe:"https://www.youtube.com/watch?v=w4VixBSoDqU"},
{name:"ugali wa mhogo",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3VSstGoGA3b-bM6a0azy6ly_1fZO_-oSpvQ&s",desc:"ugali wa muhogo",recipe:"https://www.youtube.com/results?search_query=ugali wa muhogo"},
{name:"mchuzi wa majani mabichi",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpOqLI6YfWrfqsM5929KCWGVWoAEEJ8bFD4w&s",desc:"mchuzi wa majani mabichi",recipe:"https://www.youtube.com/results?search_query=mchuzi wa majani mabichi kilimanjaro"},
{name:"kiburu",img:"https://i.ytimg.com/vi/k4JfuzNvHnU/sddefault.jpg",desc:"maharage na ndzi kupikwa pamoja na kukorogwa",recipe:"https://www.youtube.com/results?search_query=kiburu wachaga"},
]
},
{
region:"Lindi",
name:"Wamachinga, Wamatumbi, Wamwera, Wandonde, Wangindo, Wayao",
image:"https://picsum.photos/600/400?1",
foods:[
{name:"mikate ya kunde",img:"https://picsum.photos/400/300?1",desc:"mikate ya kunde",recipe:"https://www.youtube.com/results?search_query=mikate ya kunde lindi"},
{name:"uteneto",img:"https://picsum.photos/400/300?11",desc:"kamba kavu",recipe:"https://www.youtube.com/results?search_query=uteneto (kamba kavu)"},
{name:"ugali wa muhogo na nazi",img:"https://picsum.photos/400/300?11",desc:"ugali wa mhogo na nazi",recipe:"https://www.youtube.com/results?search_query=ugali wa muhogo na nazi lindi"},
{name:"samaki wa ziwa nyasa",img:"https://picsum.photos/400/300?11",desc:"samaki wa kukaangwa",recipe:"https://www.youtube.com/results?search_query=samaki wa kukaangwa lindi"},
{name:"kisamvu",img:"https://picsum.photos/400/300?11",desc:"majani ya muhogo",recipe:"https://www.youtube.com/results?search_query=namna ya kupika kisamvu lindi"},
]
},
{
region:"Manyara",
name:"Waakie, Wabarabaig, Waburunge, Wagorowa, Wairaqw, Wamasai, Wambugwe",
image:"https://picsum.photos/600/400?1",
foods:[
{name:"mchuzi wa alot",img:"https://picsum.photos/400/300?1",desc:"maziwa ya kuganda",recipe:"https://www.youtube.com/results?search_query=mchuzi wa alot (maziwa ya kuganda-wamaasai)"},
{name:"nyamachoma",img:"https://picsum.photos/400/300?11",desc:"nyama choma",recipe:"https://www.youtube.com/results?search_query=namna ya kuchoma nyama wamaasai"},
{name:"mtori",img:"https://picsum.photos/400/300?11",desc:"ndizi na nyama vinachanganywa pamoja",recipe:"https://www.youtube.com/results?search_query=namna ya kupika mtori wa wairaq"},
{name:"ugali wa ulezi",img:"https://picsum.photos/400/300?11",desc:"ugali wa unga wa ulezi",recipe:"https://www.youtube.com/results?search_query=ugali wa ulezi wairaq"},
{name:"Roshoro",img:"https://picsum.photos/400/300?11",desc:"uji wa maharage",recipe:"https://www.youtube.com/results?search_query=namna ya kupika roshoro"},
]
},
{
region:"Mara",
name:"Waikizu, Waikoma, Waisenye, Wajaluo, Wajita, Wakambwa, Wakuria, Wakwaya, Wangurimi, Wasizaki, Wasuba, Wawere, Wazanaki ",
image:"https://picsum.photos/600/400?1",
foods:[
{name:"samaki wa ziwa victoria",img:"https://picsum.photos/400/300?1",desc:"samaki wanaopatikana ziwa victoria",recipe:"https://www.youtube.com/results?search_query=namna ya kupika samaki wa mara"},
{name:"ugali wa mahindi",img:"https://picsum.photos/400/300?11",desc:"ugali wa mahindi",recipe:"https://www.youtube.com/results?search_query=ugali wa mahindi Mara"},
{name:"Mikate ya ulezi",img:"https://picsum.photos/400/300?11",desc:"Mikate ya urezi",recipe:"https://www.youtube.com/results?search_query=Mikate ya urezi ya Mara"},
{name:"Mchuzi wa kamba kavu",img:"https://picsum.photos/400/300?11",desc:"supu ya kamba kavu",recipe:"https://www.youtube.com/results?search_query=supu ya kamba kavu Mara"},
{name:"Mchuz wa nyama ya mbuzi",img:"https://picsum.photos/400/300?11",desc:"Mchuzi wa nyama ya Mbuzi (supu)",recipe:"https://www.youtube.com/results?search_query=supu ya nyama ya mbuzi Mara"},
]
},
{
region:"Mbeya",
name:"Wanyakyusa, Wasafwa, Wasangu",
image:"https://picsum.photos/600/400?1",
foods:[
{name:"Makande",img:"https://picsum.photos/400/300?1",desc:"makande ya mahindi na maharage",recipe:"https://www.youtube.com/results?search_query=makande ya mahindi na maharage mbeya"},
{name:"Matembele",img:"https://picsum.photos/400/300?11",desc:"majani ya viazi",recipe:"https://www.youtube.com/results?search_query=namna ya kupika tembele"},
{name:"Ugali wa muhogo",img:"https://picsum.photos/400/300?11",desc:"ugali wa muhogo",recipe:"https://www.youtube.com/results?search_query=Ugali wa muhogo mbeya"},
{name:"Nyama ya kuku wa kienyeji",img:"https://picsum.photos/400/300?11",desc:"nyama ya kuku wa kienyeji",recipe:"https://www.youtube.com/results?search_query=nyaama ya kuku wa kienyeji"},
{name:"uji wa wimbi",img:"https://picsum.photos/400/300?11",desc:"uji wa wimbi",recipe:"https://www.youtube.com/results?search_query=namna ya kupika uji wa wimbi"},
]
},
{
region:"Morogoro",
name:"Wabena, Wakaguru, Wakami, Wakutu, Waluguru, Wambunga, Wandamba wangulu, WAparakuyo, Wapogoro, Wasagara, Wavidunda ",
image:"https://picsum.photos/600/400?1",
foods:[
{name:"Ugali na samaki",img:"https://picsum.photos/400/300?1",desc:"ugali na samaki (wazaramo)",recipe:"https://www.youtube.com/results?search_query=ugali na samaki"},
{name:"kisamvu",img:"https://picsum.photos/400/300?11",desc:"majani ya muhogo(waluguru)",recipe:"https://www.youtube.com/results?search_query=namna ya kupika kismvu waluguru"},
{name:"Mikate ya mahindi",img:"https://picsum.photos/400/300?11",desc:"mikate ya mahindi",recipe:"https://www.youtube.com/results?search_query=mikate ya mahindi"},
{name:"Wali wa nazi",img:"https://picsum.photos/400/300?11",desc:"wali wa nazi",recipe:"https://www.youtube.com/results?search_query=wali wa nazi morogoro"},
{name:"muhogo na nanasi",img:"https://picsum.photos/400/300?11",desc:"vyakula vya asili",recipe:"https://www.youtube.com/results?search_query=chakula (muhogo na nanasi) morogoro"},
]
},
{
region:"Mtwara",
name:"Wamakonde, Wamakua, Wayao",
image:"https://picsum.photos/600/400?1",
foods:[
{name:"Mtogoro",img:"https://picsum.photos/400/300?1",desc:"kitoweo cha nyama",recipe:"https://www.youtube.com/results?search_query=mtogoro namna ya kupika"},
{name:"Likokwe",img:"https://picsum.photos/400/300?11",desc:"tandori la maharage",recipe:"https://www.youtube.com/results?search_query=namna ya kupika likokwe"},
{name:"Ugali wa muhogo",img:"https://picsum.photos/400/300?11",desc:"",recipe:"https://www.youtube.com/results?search_query="},
{name:"",img:"https://picsum.photos/400/300?11",desc:"",recipe:"https://www.youtube.com/results?search_query="},
{name:"",img:"https://picsum.photos/400/300?11",desc:"",recipe:"https://www.youtube.com/results?search_query="},
]
},
{
region:"Mwanza",
name:"Wakara, Wakerewe, Wasukuma, Wazinza",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSFdhLBzZkdsRD9m87viwXMGWybFEbiSodUA&s",
foods:[
{name:"Ugali",img:"https://i.ytimg.com/vi/-6RrlT0pEEQ/sddefault.jpg",desc:"ugali wa unga wa mahindi",recipe:"https://www.youtube.com/watch?v=ekiRk8iYL8Y"},
{name:"michembe",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh60RJQyBP_HK6VbkzOTtNVz8eF2Rr3JThwg&s",desc:"viazi vinakatwa vipande vidogo vidogo na kuanikwa juani",recipe:"https://www.youtube.com/watch?v="},
{name:"samaki",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG1ZRAFSa5L04njR1qJX5CWOSWFJMqpDd2bQ&s",desc:"sangara, dagaa",recipe:"https://www.youtube.com/watch?v="},
{name:"kisamvu",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfVE0GqF_gJBI3lf7B96NFET5LwnS3Ab_3aQ&s",desc:"majani ya mihogo",recipe:"https://www.youtube.com/watch?v="},
{name:"nsansa",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxu1AkdDzaNDQ5cMrtMfP16hzKYGUcflXISw&s",desc:"majani ya kunde",recipe:"https://www.youtube.com/watch?v="},
{name:"mlenda",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLSTGU55Zsn2xJrxx7U7kV4s9rYogHdyYaAw&s",desc:"majani ya maboga, bamia na karanga",recipe:""}
]
},
{
region:"Njombe",
name:"Wabena, Wakinga, Wakisi, Wamagoma, Wamahanji, Wamanda, Wanena, Wapangwa, Wawanji",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm8np_gRbzZOcf2Z8FrwQ1Y6Xw2mZeWcn8LA&s",
foods:[
{name:"Matembele",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwNKEJDZ0kbIRddu2ks8PUT2rmJ7gjfjMc2Q&s",desc:"",recipe:"https://www.youtube.com/watch?v="},
{name:"Makande",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7ORfV_IcunBGLlL-HgvnteEVFJOySDnjw4A&s",desc:"",recipe:"https://www.youtube.com/watch?v="},
{name:"Ugali wa mihogo",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyHe975GHz08TMAQpceiEMX6cQr787z2546A&s",desc:"",recipe:"https://www.youtube.com/watch?v="},
{name:"Nyama ya kuku",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwP7jqtaOSSX5Dr9dximBJJdbGA13AxCkUsA&s",desc:"",recipe:"https://www.youtube.com/watch?v="},
{name:"Uji wa wimbi",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdNYuLUsOs8Xt0HcHhBE32kBJvJxMuUjrGLw&s",desc:"",recipe:"https://www.youtube.com/watch?v="},
]
},

{
region:"Pemba kusini(Zanzibar)",
name:"Wapemba (waswahili), Waarabu",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHg-cpc6NmATUxdi3_1wZ-BJU9ZmZoCiqV6Q&s",
foods:[
{name:"Wali wa nazi",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGo6GAhuyFS_OE40PKt5vZKkJnXJAp0hgsqw&s",desc:"",recipe:"https://www.youtube.com/watch?v="},
{name:"Biriani",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJBUzrlU-rPaCipqKHW6pGVe7y7MftM9wspQ&s",desc:"",recipe:"https://www.youtube.com/watch?v="},
{name:"Samaki wa kupaka",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXEJV3z-aZbUGNUpNDFgbb2A6c2vqcQF-Gxw&s",desc:"",recipe:"https://www.youtube.com/watch?v="},
{name:"Urojo",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVxuEHbu4N-0iOgGKFx6uwkDQBh3f_GkVKww&s",desc:"",recipe:"https://www.youtube.com/watch?v="},
{name:"Vitumbua(vitafunwa vya nazi)",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2EHUxCpv5aEKPYRRt7vcCzmlxRigPkAFJqg&s",desc:"",recipe:"https://www.youtube.com/watch?v="},
]
},



{
region:"Pemba kaskazini(Zanzibar)",
name:"Wapemba(Waswahili), Waarabu",
image:"https://www.zanrevenue.org/images/slides/flyover_ya_mwanakwerekwe.jpg",
foods:[
{name:"Pilau",img:"https://toasterding.com/wp-content/uploads/2024/04/pilau.webp",desc:"",recipe:"https://www.youtube.com/watch?v="},
{name:"Mkate wa kusukuma",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR36AmQ7Mwo_JnP6jHuczmQIGpDDMmR3FL5-w&s",desc:"",recipe:"https://www.youtube.com/watch?v="},
{name:"Mchuzi wa kamba",img:"https://i.ytimg.com/vi/JXzKTgF7Ga0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLATlh7_xKLuZkph5--9mLpRQLZUqQ",desc:"",recipe:"https://www.youtube.com/watch?v="},
{name:"Supu ya mkate(mboga)",img:"https://malkiawajiko.food.blog/wp-content/uploads/2021/10/20211008_091845.jpg?w=750",desc:"",recipe:"https://www.youtube.com/watch?v="},
{name:"Kashata(karanga na nazi)",img:"https://afrika-junior.de/public/images/Rezepte/Kashata-tanzanianswahilicuisine.jpg",desc:"",recipe:"https://www.youtube.com/watch?v="},
]
},



{
region:"Pwani(kibaha)",
name:"Wadoe, Wakwere, Wandengereko, Warufiji",
image:"https://www.eatv.tv/sites/default/files/news/2024/03/10/pwani%20weeeb.jpg",
foods:[
{name:"Ugali na samaki",img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEido-JmTJ0CnHlvqL4Z3UmQTX7raOP0DB9qTTnoQetuBGWJwUAdvBX1nIG8Cll6RzytrmeebEZblXblBws2_ixcZyMYyCWrrK8xFPJmIhuHMqjr_q1N-RGwHQSRUfMhGeJmpHXVnVhubwSW/s640/%25255BUNSET%25255D.jpg",desc:"",recipe:"https://www.youtube.com/watch?v="},
{name:"Wali nazi",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa_7U4JM-Chm63vDHoLd57MuXPE4DT2T2Z9A&s",desc:"",recipe:"https://www.youtube.com/watch?v="},
{name:"Mchuzi wa kamba kavu",img:"https://i.ytimg.com/vi/VwnY-LtpFe0/maxresdefault.jpg",desc:"",recipe:"https://www.youtube.com/watch?v="},
{name:"Maharage ya nazi",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7YDlxuXb9OgIeTQEEQ21o5jdVxWKCCthFbw&s",desc:"",recipe:"https://www.youtube.com/watch?v="},
{name:"Samaki wa kukaanga",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ15VylEI0Oks7Uif7FVmaro5SITZbEr4fKUg&s",desc:"",recipe:"https://www.youtube.com/watch?v="},
]
},


{
region:"Rukwa(sumbawanga)",
name:"Wambungu, Wafipa, Walungu, Wamambwe, Watumbuka, Wawanda",
image:"https://i.ytimg.com/vi/L3TWZNhG3iM/hqdefault.jpg",
foods:[
{name:"Samaki wa Tanganyika(mukeke)",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyJ-qFuKzuL8VHA1gZqa56lIqyn3jnm1A_VA&s",desc:"",recipe:"https://www.youtube.com/watch?v="},
{name:"Ugali wa mhogo",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDsnPeVoFmF0k-PNFd7pRMPlk6pVALuI9Bhg&s",desc:"",recipe:"https://www.youtube.com/watch?v="},
{name:"Mchuzi wa nyama pori",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Go77HgcVBcJYlvokpJz44wKd3pk89UQBJQ&s",desc:"",recipe:"https://www.youtube.com/watch?v="},
{name:"Mchuzi wa boga",img:"https://b2395323.smushcdn.com/2395323/wp-content/uploads/2022/06/RoastedSquash.jpg?lossy=1&strip=1&webp=1",desc:"",recipe:"https://www.youtube.com/watch?v="},
]
},

{
region:"Ruvuma(songea)",
name:"Wamakwe, Wamanda, Wamatengo, Wampoto, Wangoni, Wanindi, Wayao",
image:"https://i.ytimg.com/vi/GI_YGNFX4PA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDwiqcpLX-8utnBW6g2xJVjQmgPAA",
foods:[
{name:"Mikate ya kunde",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkBjvK2xAyPC2jBfb9A-TXoD_XvSpna-RMBg&s",desc:"",recipe:"https://www.youtube.com/watch?v="},
{name:"Likokwe",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXi5lE975ZN5GhC4_jx0vHF_XsYDnXQ_cWkw&s",desc:"",recipe:"https://www.youtube.com/watch?v="},
{name:"Ugali wa mahindi",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBcLN1cyKHi494yN1wqHuUCePk8V41FoxURA&s",desc:"",recipe:"https://www.youtube.com/watch?v="},
{name:"Mchuzi wa kamba kavu",img:"https://i.ytimg.com/vi/ErFJ0cVL8Pg/sddefault.jpg?v=648ed550",desc:"",recipe:"https://www.youtube.com/watch?v="},
{name:"Uteneto",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmgjYTfIeSj_jxpeTQEj6sKoIgjbSewnsSYA&s",desc:"",recipe:"https://www.youtube.com/watch?v="},
]
},


{
region:"Shinyanga",
name:"Wanyamwezi, Wanyiramba, Wasukuma",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUkoUXaJvb9uLYaAM6THtdamkygQ132fRrPQ&s",
foods:[
{name:"Ugali",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsDGJxoobuX1xnw3gcsB60V7bHf4cqgGEjjw&s",desc:"",recipe:"https://www.youtube.com/watch?v="},
{name:"Michembe",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlgCQP6SEAgqNpMccibJ5zLm76ZbhPl7QvvQ&s",desc:"",recipe:"https://www.youtube.com/watch?v="},
{name:"Mchuzi wa nyama",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzgsrEIC_vPWzfciGhGVKAVwJyIR4GZzLajw&s",desc:"",recipe:"https://www.youtube.com/watch?v="},
{name:"Maharage mabichi",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZeLHhl01pwtgJ3j_zI4xIIIS7MqbOp9hUWA&s",desc:"",recipe:"https://www.youtube.com/watch?v="},
{name:"Uji wa ulezi",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHghaFjdE1T5mv3DAmsREJ8eBZPcCOJIJ17A&s",desc:"",recipe:"https://www.youtube.com/watch?v="},
]
},

{
region:"Simiyu(Bariadi)",
name:"Wasukuma",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi_Q8OkJiA2mEkUWjnw6N_tESo_O5AaPDQcw&s",
foods:[
{name:"Ugali",img:"https://thumbs.dreamstime.com/b/plate-features-ugali-mound-cooked-chopped-sukuma-wiki-collard-greens-small-bowl-red-tomato-stew-representing-373077639.jpg",desc:"",recipe:"https://www.youtube.com/watch?v="},
{name:"Samaki",img:"https://i.ytimg.com/vi/lJFAuVN2zao/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCWbiTpNoEuElMV1S777fFMezEv3g",desc:"",recipe:"https://www.youtube.com/watch?v="},
{name:"Kisamvu",img:"https://malkiawajiko.food.blog/wp-content/uploads/2021/10/20211027_112010.jpg",desc:"",recipe:"https://www.youtube.com/watch?v="},
{name:"Michembe",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh60RJQyBP_HK6VbkzOTtNVz8eF2Rr3JThwg&s",desc:"",recipe:"https://www.youtube.com/watch?v="},
{name:"Nyama choma",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFltSk04cT40Vqk4YU4klpMIpz6Jxj43k0eg&s",desc:"",recipe:"https://www.youtube.com/watch?v="},
]
},

{
region:"Singida",
name:"Waisanzu, Wanyiramba, Wanyaturu",
image:"https://www.arushacityguide.com/wp-content/uploads/2020/09/Singida-Region-1.jpg",
foods:[
{name:"Uji wa mtama",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHghaFjdE1T5mv3DAmsREJ8eBZPcCOJIJ17A&s",desc:"",recipe:"https://www.youtube.com/watch?v="},
{name:"Makande",img:"https://i.ytimg.com/vi/p6dxOP6rnpI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLArpb1r2BLegkXcDIMqgBwYDk2BJw",desc:"",recipe:"https://www.youtube.com/watch?v="},
{name:"Ugali wa ulezi",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOXmaQBjshj6rp9X5n7AiItEpgmMJQAiR8ZQ&s",desc:"",recipe:"https://www.youtube.com/watch?v="},
{name:"Mboga ya maharage",img:"https://mkulimambunifu.org/wp-content/uploads/2024/11/30710953_1494627597330189_5510982179422732288_n.jpg",desc:"",recipe:"https://www.youtube.com/watch?v="},
{name:"Nyama ya kuku",img:"https://tse1.mm.bing.net/th/id/OIP.qYHOK6uB8bKyBklGOOQ4pwHaEK?r=0&cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3",desc:"",recipe:"https://www.youtube.com/watch?v="},
]
},

{
region:"Songwe(Vwawa)",
name:"Walambya, Wamalila, Wandali, Wanyamwanga, Wanyuha",
image:"https://tse3.mm.bing.net/th/id/OIP.XyMoYNOS8ceoNmxJifjyDQHaEK?r=0&cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3",
foods:[
{name:"Makande",img:"https://tse1.explicit.bing.net/th/id/OIP.wvQ4XXqFLN527mZZAvF3HgHaHa?r=0&cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3",desc:"",recipe:"https://www.youtube.com/watch?v="},
{name:"Matembele",img:"https://tse2.mm.bing.net/th/id/OIP.iKg8NPmhia_Spk6AuukmBwHaEH?r=0&cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3",desc:"",recipe:"https://www.youtube.com/watch?v="},
{name:"Ugali wa mhogo",img:"https://tse1.explicit.bing.net/th/id/OIP.nFFWE1VF3WuEGlwjeFQDYwHaGL?r=0&cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3",desc:"",recipe:"https://www.youtube.com/watch?v="},
{name:"Nyama ya kuku",img:"https://tse2.mm.bing.net/th/id/OIP.Lf84MQhwzd-ZHDIg3WLRugHaEK?r=0&cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3",desc:"",recipe:"https://www.youtube.com/watch?v="},
{name:"Maharage ya nazi",img:"https://tse4.mm.bing.net/th/id/OIP.CF3bnuuxQyJDlZ_2WwM4WQHaEK?r=0&cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3",desc:"",recipe:"https://www.youtube.com/watch?v="},
]
},

{
region:"Tabora",
name:"Wakimbu, Wanyamwezi, Wanyanyembe",
image:"https://worldofwebstories.com/wp-content/uploads/2023/06/maxresdefault-2-1024x576.jpg",
foods:[
{name:"Ugali wa mahindi",img:"https://th.bing.com/th/id/R.bfe62a76a97d2a9e37120018467ad38a?rik=hCBkcLI%2bxIYSfQ&pid=ImgRaw&r=0",desc:"",recipe:"https://www.youtube.com/watch?v="},
{name:"Nyama ya kubanika",img:"https://tse4.mm.bing.net/th/id/OIP.VxPUeq3h0XbZuTVnUxBUNAHaEK?r=0&cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3",desc:"",recipe:"https://www.youtube.com/watch?v="},
{name:"Maharage",img:"https://th.bing.com/th/id/R.65f40c8015f1a31eed393dcceb121f9b?rik=SMfCCFU4jPdGkQ&pid=ImgRaw&r=0",desc:"",recipe:"https://www.youtube.com/watch?v="},
{name:"Uji wa wimbi",img:"https://tse1.explicit.bing.net/th/id/OIP.M48Qh1u-5BwBO6uiTLld5gHaIf?r=0&cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3",desc:"",recipe:"https://www.youtube.com/watch?v="},
{name:"Kisamvu",img:"https://tse4.mm.bing.net/th/id/OIP.Tyrq8cDNoh3IIv3yKaAPWQHaEK?r=0&cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3",desc:"",recipe:"https://www.youtube.com/watch?v="},
]
},

{
region:"Tanga",
name:"Wabondei, Wadhaiso, Wadigo, Wambugu, Wangulu, Wasegeju, Washambaa, Wazigua",
image:"https://tse2.mm.bing.net/th/id/OIP.B3Mh-I3-ACke-75JDAyLRQHaEK?r=0&cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3",
foods:[
{name:"Ugali na samaki(wasambaa)",img:"https://th.bing.com/th/id/R.5534dead8192bc6256fb03b7717e13fc?rik=4uxupNT6AvVFzg&pid=ImgRaw&r=0",desc:"",recipe:"https://www.youtube.com/watch?v="},
{name:"Wali wa nazi",img:"https://tse4.mm.bing.net/th/id/OIP.SMH3ad8zCsztRwEvUQ4FeQHaFJ?r=0&cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3",desc:"",recipe:"https://www.youtube.com/watch?v="},
{name:"mchuzi wa kamba kavu",img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgpybEbQDuCcMOuw6AnjlXYBwch-UCCAhdpA_i7eat93UXUiei4XG78JpGKoTQgbk6UpntFIiugQuKHk5x1d9wmCkcy-UMWblAVQihgAw44SFsEYX7A0IpXuSclBUXAHrVTCDSIhyphenhyphenW-Q9o/s1600/F_ChickenCurry.jpg",desc:"",recipe:"https://www.youtube.com/watch?v="},
{name:"pilau",img:"https://tse3.mm.bing.net/th/id/OIP.T3x6HPpD9CVsG6QvKW2zgQHaE8?r=0&cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3",desc:"",recipe:"https://www.youtube.com/watch?v="},
{name:"mkate wa kunde",img:"https://i.ytimg.com/vi/EWLU9B4_TUs/maxresdefault.jpg",desc:"",recipe:"https://www.youtube.com/watch?v="},
]
},


{
region:"Unguja kusini(Zanzibar)",
name:"Waunguja,(waswahili), Waarabu",
image:"https://www.habariugandatours.com/wp-content/uploads/2022/08/download-1.jpg",
foods:[
{name:"Wali nazi",img:"https://myplanetfood.com/wp-content/uploads/2025/06/Wali-wa-Nazi.jpg",desc:"",recipe:"https://www.youtube.com/watch?v="},
{name:"Biriani",img:"https://th.bing.com/th/id/R.edefd6edced7e63016941d5ba17df510?rik=mWD2Tw2S7leSvQ&pid=ImgRaw&r=0",desc:"",recipe:"https://www.youtube.com/watch?v="},
{name:"Samaki wa kupaka",img:"https://tse4.mm.bing.net/th/id/OIP.W9cnhqN4YWpb6FNaBRr9bwHaDO?r=0&cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3",desc:"",recipe:"https://www.youtube.com/watch?v="},
{name:"Urojo",img:"https://th.bing.com/th/id/R.39e5a79c69a020693372d10b600273ff?rik=fs0v6molJy209g&pid=ImgRaw&r=0",desc:"",recipe:"https://www.youtube.com/watch?v="},
{name:"Kashata",img:"https://th.bing.com/th/id/R.38321e7544f134148a5e692552bc3399?rik=25rF6akmNvxR2w&pid=ImgRaw&r=0",desc:"",recipe:"https://www.youtube.com/watch?v="},
]
},



{
region:"Unguja kaskazini",
name:"Waunguja(waswahili), Waarabu",
image:"https://content.r9cdn.net/rimg/dimg/b9/f8/fa349b1a-city-73359-172d10891e5.jpg?width=1200&height=630&xhint=2616&yhint=1648&crop=true",
foods:[
{name:"Pilau",img:"https://th.bing.com/th/id/R.6684d66ff1bdd2d5631f2471eb513f3d?rik=bQg3oJgHytOsaw&pid=ImgRaw&r=0",desc:"",recipe:"https://www.youtube.com/watch?v="},
{name:"Mkate wa kusukuma",img:"https://tse2.mm.bing.net/th/id/OIP.NYZctQ7DXzntDA8p8-iPmQHaEb?r=0&cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3",desc:"",recipe:"https://www.youtube.com/watch?v="},
{name:"Mchuzi wa kamba",img:"https://tse4.mm.bing.net/th/id/OIP.yWJmwF7D-7Kz_3_qj5wodQHaEK?r=0&cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3",desc:"",recipe:"https://www.youtube.com/watch?v="},
{name:"Vitumbua",img:"https://tse1.explicit.bing.net/th/id/OIP.i8z3w5QufRTgSCz6WwaxWwHaLH?r=0&cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3",desc:"",recipe:"https://www.youtube.com/watch?v="},
{name:"Mhogo wa nazi",img:"https://tse1.explicit.bing.net/th/id/OIP.rfpsdfVICbWmR1sG9rQt_wHaEK?r=0&cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3",desc:"",recipe:"https://www.youtube.com/watch?v="},
]
},


{
region:"Unguja mjini magharibi(Zanzibar)",
name:"Waunguja(waswahili), Waarabu",
image:"https://tse3.mm.bing.net/th/id/OIP.GtJTDUAko5on7kD6p4wiSQHaD2?r=0&cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3",
foods:[
{name:"Biriani",img:"https://tse4.mm.bing.net/th/id/OIP.umNneTKQcQa0LeTNW5kY_AHaFW?r=0&cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3",desc:"",recipe:"https://www.youtube.com/watch?v="},
{name:"Wali nazi",img:"https://tse4.mm.bing.net/th/id/OIP.6dXDSatmjkqpmQ8QPxEKowHaEK?r=0&cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3",desc:"",recipe:"https://www.youtube.com/watch?v="},
{name:"Urojo",img:"https://th.bing.com/th/id/R.39e5a79c69a020693372d10b600273ff?rik=fs0v6molJy209g&pid=ImgRaw&r=0",desc:"",recipe:"https://www.youtube.com/watch?v="},
{name:"Samaki wa kupaka",img:"https://th.bing.com/th/id/R.2ac563d981f833462774b60604f717dc?rik=YwUuJSsH71OMPA&pid=ImgRaw&r=0",desc:"",recipe:"https://www.youtube.com/watch?v="},
{name:"Maandazi(vitafunwa vitamu)",img:"https://tse2.mm.bing.net/th/id/OIP.qVXuCoOajhwVI7UMhNfECgHaEK?r=0&cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3",desc:"",recipe:"https://www.youtube.com/watch?v="},
]
},



];


