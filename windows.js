const windows = [
  {
    id: 0,
    url: "422091199",
    location: "London, UK",
    author: "Derek Lui",
  },
  {
    id: 1,
    url: "422078593",
    location: "Tangerang Selatan",
    author: "Kevin Arffandy",
  },
  {
    id: 2,
    url: "422078580",
    location: "Tangerang Selatan",
    author: "Kevin Arffandy",
  },
  {
    id: 3,
    url: "422076298",
    location: "Singapore",
    author: "Sylvie Kinn",
  },
  {
    id: 4,
    url: "422078525",
    location: "Montpellier, France",
    author: "Suzanne Worthington",
  },
  {
    id: 5,
    url: "422078573",
    location: "Monterrey, Mexico",
    author: "Nomadic Ambience",
  },
  {
    id: 6,
    url: "422078555",
    location: "Stockholm, Sweden",
    author: "Mathias Erikson",
  },
  {
    id: 7,
    url: "422078545",
    location: "Stockholm, Sweden",
    author: "Mathias Erikson",
  },
  {
    id: 8,
    url: "422078559",
    location: "New York, USA",
    author: "Nomadic Ambience",
  },
  {
    id: 9,
    url: "422078568",
    location: "Montreal, Canada",
    author: "Nomadic Ambience",
  },
  {
    id: 10,
    url: "422091206",
    location: "Cordoba, Argentina",
    author: "Florencia Gutierrez",
  },
  {
    id: 11,
    url: "422127701",
    location: "Chennai, India",
    author: "Sitara Hussain",
  },
  {
    id: 12,
    url: "422078536",
    location: "Bangkok, Thailand",
    author: "Thasorn Boonyanate",
  },
  {
    id: 13,
    url: "422078596",
    location: "London, UK",
    author: "Joseph Davies",
  },
  {
    id: 14,
    url: "423662778",
    location: "Bangalore, India",
    author: "Rexina Devraj",
  },
  {
    id: 15,
    url: "422655962",
    location: "La Baule-Escoublac, France",
    author: "Guillaume Baley",
  },
  {
    id: 16,
    url: "423663526",
    location: "Manchester, UK",
    author: "Dina Hadjipetrou",
  },
  {
    id: 17,
    url: "423662257",
    location: "Bangalore, India",
    author: "Saptarishi Das",
  },
  {
    id: 18,
    url: "422078118",
    location: "Medellin, Colombia",
    author: "Julien Renau",
  },
  {
    id: 19,
    url: "425392363",
    location: "Stockholm, Sweden",
    author: "Tilda Hedengren",
  },
  {
    id: 20,
    url: "425392301",
    location: "Singapore",
    author: "Kinzah Iqbal",
  },
  {
    id: 21,
    url: "425393228",
    location: "Barcelona, Spain",
    author: "Alejandro Masferrer",
  },
  {
    id: 22,
    url: "427950869",
    location: "Singapore",
    author: "Aleksey Marjanovic & Leslie Quincy",
  },
  {
    id: 23,
    url: "427950973",
    location: "Shanghai, China",
    author: "Dayanara Viojan",
  },
  {
    id: 24,
    url: "427951019",
    location: "Hyderabad, India",
    author: "Sravan Jayati",
  },
  {
    id: 25,
    url: "427951165",
    location: "Dubai, UAE",
    author: "Hijaz Moosa",
  },
  {
    id: 26,
    url: "427951383",
    location: "Gurgaon, India",
    author: "Sitara Menon",
  },
  {
    id: 27,
    url: "427951587",
    location: "Singapore",
    author: "Rachel Chew",
  },
  {
    id: 29,
    url: "427952643",
    location: "Toronto, Canada",
    author: "Andrea Sarbu",
  },
  {
    id: 30,
    url: "428706758",
    location: "Astoria, USA",
    author: "Scott Rubin",
  },
  {
    id: 31,
    url: "428706242",
    location: "Rochester NY, USA",
    author: "Justin Komisarof",
  },
  {
    id: 32,
    url: "429123045",
    location: "Bordeaux, France",
    author: "Pierre Arrasus",
  },
  {
    id: 33,
    url: "429122992",
    location: "Denver, USA",
    author: "Gabriel Castelo Branco",
  },
  {
    id: 34,
    url: "429122953",
    location: "Glanamman, Wales",
    author: "Belinda Ash",
  },
  {
    id: 35,
    url: "429204893",
    location: "Rowville, Australia",
    author: "Joey Hwang",
  },
  {
    id: 36,
    url: "431141527",
    location: "Singapore",
    author: "Liyana Mahirah",
  },
  {
    id: 37,
    url: "431141442",
    location: "Sherwood, USA",
    author: "Jennie Harrop",
  },
  {
    id: 38,
    url: "431141373",
    location: "VN Gaia, Portugal",
    author: "Isaac Lopes",
  },
  {
    id: 39,
    url: "431141355",
    location: "Long island, USA",
    author: "Fernando Mattei",
  },
  {
    id: 40,
    url: "431141321",
    location: "Glasgow, Scotland",
    author: "Julia Fisher",
  },
  {
    id: 41,
    url: "431141164",
    location: "London, UK",
    author: "Simon Cotts",
  },
  {
    id: 42,
    url: "431141079",
    location: "Copenhagen, Denmark",
    author: "Mikael Colville-Andersen",
  },
  {
    id: 43,
    url: "431141008",
    location: "Hamburg, Germany",
    author: "Christian Sommer",
  },
  {
    id: 44,
    url: "431140994",
    location: "Manchester, UK",
    author: "James Francis",
  },
  {
    id: 45,
    url: "431140935",
    location: "San Francisco, USA",
    author: "Arthur Kenzo",
  },
  {
    id: 46,
    url: "431140858",
    location: "Dundee, Scotland",
    author: "Russell Pepper",
  },
  {
    id: 47,
    url: "431170301",
    location: "Pampanga, Luzon, Philippines",
    author: "Sandy Tiu",
  },
  {
    id: 48,
    url: "431179730",
    location: "Villongo, Italy",
    author: "Simone Tengattini",
  },
  {
    id: 49,
    url: "432365635",
    location: "Bavaria, Germany",
    author: "Arnulf",
  },
  {
    id: 50,
    url: "432365702",
    location: "Hannover, Germany",
    author: "Claudia Lutz",
  },
  {
    id: 51,
    url: "432365721",
    location: "Helsinki, Finland",
    author: "Meghna Ranjit",
  },
  {
    id: 52,
    url: "433357952",
    location: "Parkstein, Germany",
    author: "Nicolas Götz",
  },
  {
    id: 53,
    url: "433357521",
    location: "Dietmannsried, Germany",
    author: "Elmar Hör",
  },
  {
    id: 54,
    url: "433468446",
    location: "Twickenham, UK",
    author: "Gyula Mester",
  },
  {
    id: 55,
    url: "433481074",
    location: "Twickenham, UK",
    author: "Gyula Mester",
  },
  {
    id: 56,
    url: "433517021",
    location: "Shanghai, China",
    author: "Neil Nand",
  },
  {
    id: 57,
    url: "432365468",
    location: "Bangalore, India",
    author: "Manasa Prithvi",
  },
  {
    id: 58,
    url: "431320236",
    location: "Munich, Germany",
    author: "Glockenbachviertel",
  },
  {
    id: 59,
    url: "434256984",
    location: "Jakarta, Indonesia",
    author: "David Beauchamp",
  },
  {
    id: 60,
    url: "434257172",
    location: "Obersteinabrunn, Austria",
    author: "Matthias Fuchs",
  },
  {
    id: 61,
    url: "434257261",
    location: "Shanghai, China",
    author: "Sebastian Correa",
  },
  {
    id: 62,
    url: "434572416",
    location: "Lüneburg, Germany",
    author: "Beate Schröder-Wettwer",
  },
  {
    id: 63,
    url: "434573709",
    location: "Paris, France",
    author: "Laora Tobelaim",
  },
  {
    id: 64,
    url: "435476187",
    location: "Doha, Qatar",
    author: "Ula Niekrasz",
  },
  {
    id: 65,
    url: "435476544",
    location: "Berlin, Germany",
    author: "P Moerke",
  },
  {
    id: 66,
    url: "435476804",
    location: "Hong Kong",
    author: "Josie Ng",
  },
  {
    id: 67,
    url: "435477051",
    location: "London, England",
    author: "James Sandham",
  },
  {
    id: 68,
    url: "435477468",
    location: "Sankt Augustin, Germany",
    author: "Hartmut",
  },
  {
    id: 69,
    url: "435477171",
    location: "Wangerooge, Germany",
    author: "Axel Heymann",
  },
  {
    id: 70,
    url: "435477244",
    location: "Haar, Germany",
    author: "Pest Brand",
  },
  {
    id: 71,
    url: "435970557",
    location: "London, UK",
    author: "Nicole & Miles",
  },
  {
    id: 72,
    url: "436652278",
    location: "São Paulo, Brazil",
    author: "Alexandre Kuma",
  },
  {
    id: 73,
    url: "436652217",
    location: "Okinawa, Japan",
    author: "Crystal Lee",
  },
  {
    id: 74,
    url: "436652575",
    location: "Brooklyn, NY, USA",
    author: "Mark Riley",
  },
  {
    id: 75,
    url: "436652547",
    location: "Wertheim, Germany",
    author: "Johannes Stahl",
  },
  {
    id: 76,
    url: "436654244",
    location: "Kyiv, Ukraine",
    author: "Hlib Honchar",
  },
  {
    id: 77,
    url: "437547925",
    location: "México City, Mexico",
    author: "Polen Hinojosa",
  },
  {
    id: 78,
    url: "437547919",
    location: "Paris, France",
    author: "Guillaume Baley",
  },
  {
    id: 79,
    url: "437547912",
    location: "Glasgow, Scotland",
    author: "Farzane",
  },
  {
    id: 80,
    url: "437548397",
    location: "Aeschiried, Switzerland",
    author: "Lina Blau",
  },
  {
    id: 81,
    url: "436651561",
    location: "Zushi, Japan",
    author: "Aditi & Marc",
  },
  {
    id: 82,
    url: "436651848",
    location: "Bavaria, Germany",
    author: "Christine Aigner",
  },
  {
    id: 83,
    url: "437549205",
    location: "Zurich, Switzerland",
    author: "Boutique Pamela",
  },
  {
    id: 84,
    url: "437550368",
    location: "Germany, Düsseldorf",
    author: "Klaus Mainz",
  },
  {
    id: 85,
    url: "437550345",
    location: "Berlin-Marzahn, Germany",
    author: "Beate Müller",
  },
  {
    "id": 86,
    "url": "441208735",
    "location": "Santiago, Chile",
    "author": "Liliana"
  },
  {
    "id": 87,
    "url": "442659143",
    "location": "Prague, Czech Republic",
    "author": "Edit"
  },
  {
    "id": 88,
    "url": "441209476",
    "location": "Tokyo, Japan",
    "author": "Lulu"
  },
  {
    "id": 89,
    "url": "441207741",
    "location": "Xanthi, Greece",
    "author": "Tolis"
  },
  {
    "id": 90,
    "url": "444789361",
    "location": "Hong Kong",
    "author": "Michael"
  },
  {
    "id": 91,
    "url": "444789397",
    "location": "Paris, France",
    "author": "Monica"
  },
  {
    "id": 92,
    "url": "441208516",
    "location": "Brooklyn, NY, USA",
    "author": "Taylor"
  },
  {
    "id": 93,
    "url": "441206998",
    "location": "Shimla, India",
    "author": "Prakriti"
  },
  {
    "id": 94,
    "url": "444788872",
    "location": "Lisbon, Portugal",
    "author": "Felipe"
  },
  {
    "id": 95,
    "url": "441206498",
    "location": "Taipa, Macau SAR China",
    "author": "Man Chiu"
  },
  {
    "id": 96,
    "url": "441206290",
    "location": "Clementi, Singapore",
    "author": "Lakshmi"
  },
  {
    "id": 97,
    "url": "444786963",
    "location": "Lucerne, Switzerland",
    "author": "Christina"
  },
  {
    "id": 98,
    "url": "441210771",
    "location": "West Yorkshire, UK",
    "author": "Jeremy"
  },
  {
    "id": 99,
    "url": "441210325",
    "location": "Amsterdam, The Netherlands",
    "author": "Maarten"
  },
  {
    "id": 100,
    "url": "444787105",
    "location": "Luxembourg City, Luxembourg",
    "author": "Igor"
  },
  {
    "id": 101,
    "url": "442658719",
    "location": "Amsterdam, The Netherlands",
    "author": "Olly"
  },
  {
    "id": 102,
    "url": "441206014",
    "location": "Shawnee, KS, USA",
    "author": "Kristen"
  },
  {
    "id": 103,
    "url": "441203308",
    "location": "Alabama, USA",
    "author": "Katie"
  },
  {
    "id": 104,
    "url": "441199804",
    "location": "Reggio Emilia, Italy",
    "author": "Eloisa"
  },
  {
    "id": 105,
    "url": "442658640",
    "location": "Suderburg, Germany",
    "author": "Che"
  },
  {
    "id": 106,
    "url": "441201670",
    "location": "Madrid, Spain",
    "author": "Jonathan"
  },
  {
    "id": 107,
    "url": "442658494",
    "location": "Ubatuba, Brazil",
    "author": "Elcio"
  },
  {
    "id": 108,
    "url": "444788253",
    "location": "Kolkata, WB, India",
    "author": "Rudra"
  },
  {
    "id": 109,
    "url": "442658435",
    "location": "Bratislava, Slovakia",
    "author": "Stanislav"
  },
  {
    "id": 110,
    "url": "442658348",
    "location": "Oakland, CA, USA",
    "author": "Annie & Joe"
  },
  {
    "id": 111,
    "url": "444877006",
    "location": "Dzerzhinsk, Russia",
    "author": "Alexey"
  },
  {
    "id": 112,
    "url": "442658277",
    "location": "Los Angeles, CA, USA",
    "author": "Anni & Jonathan"
  },
  {
    "id": 113,
    "url": "441201205",
    "location": "Amsterdam, Netherlands",
    "author": "Jasper"
  },
  {
    "id": 115,
    "url": "444876864",
    "location": "Kigali, Rwanda",
    "author": "Sheila"
  },
  {
    "id": 116,
    "url": "441199007",
    "location": "Honolulu, Oahu, USA",
    "author": "Dave & Vali"
  },
  {
    "id": 117,
    "url": "442658142",
    "location": "Melbourne, Australia",
    "author": "Anna"
  },
  {
    "id": 118,
    "url": "444877836",
    "location": "Auckland, NZ",
    "author": "Hamish"
  },
  {
    "id": 119,
    "url": "441198821",
    "location": "Koh Tao, Thailand",
    "author": "David"
  },
  {
    "id": 120,
    "url": "442657983",
    "location": "Dublin, Ireland",
    "author": "Ann"
  },
  {
    "id": 121,
    "url": "441198130",
    "location": "Corfu, Greece",
    "author": "Rhaina"
  },
  {
    "id": 122,
    "url": "441197127",
    "location": "South Queensferry, Scotland, UK",
    "author": "CJ Wilder"
  },
  {
    "id": 123,
    "url": "437547928",
    "location": "London",
    "author": "Steve"
  },
  {
    "id": 124,
    "url": "441196710",
    "location": "Honolulu, HI, USA",
    "author": "Christina and Michael"
  },
  {
    "id": 125,
    "url": "442659351",
    "location": "Évora, Portugal",
    "author": "Bebiana"
  },
  {
    "id": 126,
    "url": "442657618",
    "location": "Daegu, South Korea",
    "author": "Georgeanna"
  },
  {
    "id": 127,
    "url": "441195876",
    "location": "Llubljana, Slovenia",
    "author": "Bunker Office"
  },
  {
    "id": 128,
    "url": "442657446",
    "location": "Copenhagen, Denmark",
    "author": "Sebastian"
  },
  {
    "id": 129,
    "url": "441194943",
    "location": "Detroit, USA",
    "author": "Bo"
  },
  {
    "id": 130,
    "url": "442658596",
    "location": "São Paulo, Brazil",
    "author": "Cyro"
  },
  {
    "id": 131,
    "url": "441194347",
    "location": "Florence, Italy",
    "author": "Bianca"
  },
  {
    "id": 132,
    "url": "444780500",
    "location": "Bombay, India",
    "author": "Gargi & Shubham"
  },
  {
    "id": 133,
    "url": "444781214",
    "location": "Vienna",
    "author": "Thomas"
  },
  {
    "id": 134,
    "url": "444781249",
    "location": "Halesowen, UK",
    "author": "GeoffBadger"
  },
  {
    "id": 135,
    "url": "444778207",
    "location": "Lake George, NY",
    "author": "Kaitlin"
  },
  {
    "id": 136,
    "url": "439997518",
    "location": "Bangkok, Thailand",
    "author": "Benjamin"
  },
  {
    "id": 137,
    "url": "442657424",
    "location": "Brooklyn, NY",
    "author": "Anna"
  },
  {
    "id": 138,
    "url": "442657286",
    "location": "San Francisco, USA",
    "author": "Tiffany"
  },
  {
    "id": 139,
    "url": "444779152",
    "location": "Goa, India",
    "author": "Amrit"
  },
  {
    "id": 140,
    "url": "442657167",
    "location": "Milan, Italy",
    "author": "Paolo"
  },
  {
    "id": 141,
    "url": "442657078",
    "location": "Rome, Italy",
    "author": "Chiara & Angelo"
  },
  {
    "id": 142,
    "url": "439996813",
    "location": "Menorca, Spain",
    "author": "Arenal"
  },
  {
    "id": 143,
    "url": "444779203",
    "location": "Telford, UK",
    "author": "Sol & Pasco"
  },
  {
    "id": 144,
    "url": "439996354",
    "location": "Lucerne, Switzerland",
    "author": "Andreas"
  },
  {
    "id": 145,
    "url": "444778721",
    "location": "Bajina Bašta, Serbia",
    "author": "Ana"
  },
  {
    "id": 146,
    "url": "442656988",
    "location": "Chicago, USA",
    "author": "Adam"
  },
  {
    "id": 147,
    "url": "444778516",
    "location": "Dubai, UAE",
    "author": "Brian"
  },
  {
    "id": 148,
    "url": "444780425",
    "location": "Como, Italy ",
    "author": "Francesca"
  },
  {
    "id": 149,
    "url": "444778124",
    "location": "Bundang, Korea",
    "author": "Triple"
  },
  {
    "id": 150,
    "url": "444778232",
    "location": "Taipei, Taiwan",
    "author": "Inker Kuo"
  },
  {
    "id": 151,
    "url": "441211870",
    "location": "Almaty, Kazakhstan",
    "author": "Sana"
  },
  {
    "id": 152,
    "url": "439992076",
    "location": "Thessaloniki, Greece",
    "author": "Admine"
  },
  {
    "id": 153,
    "url": "444778261",
    "location": "São Paulo, Brazil",
    "author": "Félix"
  },
  {
    "id": 154,
    "url": "435477468",
    "location": "Sankt Augustin, Germany",
    "author": "Hartmut"
  },
  {
    "id": 155,
    "url": "444778364",
    "location": "Dunfermline, Scotland",
    "author": "Chris"
  },
  {
    "id": 156,
    "url": "441202897",
    "location": "Mumbai, India",
    "author": "Kamakshi"
  },
  {
    "id": 157,
    "url": "444778868",
    "location": "Pioneertown, CA, USA",
    "author": "Alice"
  },
  {
    "id": 158,
    "url": "444778387",
    "location": "Deux-Montagnes, Canada",
    "author": "Carol"
  },
  {
    "id": 159,
    "url": "436652217",
    "location": "Okinawa, Japan",
    "author": "Crystal"
  },
  {
    "id": 160,
    "url": "444778268",
    "location": "Stendal, Germany",
    "author": "Edd"
  },
  {
    "id": 161,
    "url": "439989291",
    "location": "Amsterdam (the Netherlands)",
    "author": "Gogme United"
  },
  {
    "id": 162,
    "url": "442656933",
    "location": "Giza, Egypt",
    "author": "Abdulrahman"
  },
  {
    "id": 163,
    "url": "444778279",
    "location": "Salvador city, Bahia, Brazil",
    "author": "Danilo"
  },
  {
    "id": 164,
    "url": "444778279",
    "location": "Salvador city, Bahia",
    "author": "Danilo"
  },
  {
    "id": 165,
    "url": "442660752",
    "location": "Al Marjan island, UAE",
    "author": "Aoife"
  },
  {
    "id": 166,
    "url": "442947495",
    "location": "Austria",
    "author": "Kurt"
  },
  {
    "id": 167,
    "url": "444778165",
    "location": "İstanbul, Turkey",
    "author": "Özge"
  },
  {
    "id": 168,
    "url": "444778251",
    "location": "San Diego, CA, USA",
    "author": "Heidi"
  },
  {
    "id": 169,
    "url": "441201982",
    "location": "Burnaby, BC, Canada",
    "author": "Kailene"
  },
  {
    "id": 170,
    "url": "441205783",
    "location": "Hawai‘i Island, Hawai‘i",
    "author": "Kris"
  },
  {
    "id": 171,
    "url": "444778337",
    "location": "Austria",
    "author": "Christian & Johanna"
  },
  {
    "id": 172,
    "url": "444778034",
    "location": "São Paulo, Brazil",
    "author": "Victor"
  },
  {
    "id": 173,
    "url": "444778474",
    "location": "Valencia, Spain",
    "author": "Carlos"
  },
  {
    "id": 174,
    "url": "444787065",
    "location": "Le Lioran, France",
    "author": "Hervé"
  },
  {
    "id": 175,
    "url": "441208610",
    "location": "Accra, Ghana",
    "author": "Yaba"
  },
  {
    "id": 176,
    "url": "444786735",
    "location": "Derbyshire, United Kingdom",
    "author": "Adam"
  },
  {
    "id": 177,
    "url": "444787105",
    "location": "Luxembourg City, Luxembourg",
    "author": "Igor"
  },
  {
    "id": 178,
    "url": "444786607",
    "location": "Portland, OR, USA",
    "author": "Marshall"
  },
  {
    "id": 179,
    "url": "439994385",
    "location": "Tauranga, New Zealand",
    "author": "Alex"
  },
  {
    "id": 180,
    "url": "442659269",
    "location": "Chongqing, China",
    "author": "Xiaoyou Su"
  },
  {
    "id": 181,
    "url": "444787356",
    "location": "Jerusalem, Israel",
    "author": "Dor"
  },
  {
    "id": 182,
    "url": "442660634",
    "location": "Kennington, London",
    "author": "Ted"
  },
  {
    "id": 183,
    "url": "444786772",
    "location": "Brooklyn, NY, USA",
    "author": "Ali L"
  },
  {
    "id": 184,
    "url": "438168566",
    "location": "Minerbio, Italy",
    "author": "Nicola"
  },
  {
    "id": 185,
    "url": "438168362",
    "location": "Turkey",
    "author": "Esma"
  },
  {
    "id": 186,
    "url": "438165878",
    "location": "Brixton, London",
    "author": "Ashleigh"
  },
  {
    "id": 187,
    "url": "438165539",
    "location": "Istanbul, Turkey",
    "author": "Nilay"
  },
  {
    "id": 188,
    "url": "438169349",
    "location": "Palermo, Italy",
    "author": "Ivan and Katarina"
  },
  {
    "id": 189,
    "url": "441527719",
    "location": "Cornwall, UK",
    "author": "Hannah"
  },
  {
    "id": 190,
    "url": "444786940",
    "location": "Singapore",
    "author": "Chin"
  },
  {
    "id": 191,
    "url": "444787146",
    "location": "Kamloops, British Columbia",
    "author": "Jay"
  },
  {
    "id": 192,
    "url": "438170049",
    "location": "Stockholm, Sweden",
    "author": "Rami"
  },
  {
    "id": 193,
    "url": "444787182",
    "location": "Arlington, Virginia, USA",
    "author": "Leila & Freya"
  },
  {
    "id": 194,
    "url": "438171766",
    "location": "Honolulu, Oahu",
    "author": "Denny"
  },
  {
    "id": 195,
    "url": "444786867",
    "location": "Gryfice, Poland",
    "author": "Andrzej"
  },
  {
    "id": 196,
    "url": "438171373",
    "location": "Brooklyn, NY, USA",
    "author": "Shawn"
  },
  {
    "id": 197,
    "url": "444788690",
    "location": "Le Rousset, Burgundy, France",
    "author": "Jean-Yves"
  },
  {
    "id": 198,
    "url": "438172949",
    "location": "Ann Arbor, MI, USA",
    "author": "Valerie"
  },
  {
    "id": 199,
    "url": "444786735",
    "location": "Derbyshire, United Kingdom",
    "author": "Adam"
  },
  {
    "id": 200,
    "url": "439492520",
    "location": "Istanbul, Turkey",
    "author": "Feyza"
  },
  {
    "id": 201,
    "url": "443016038",
    "location": "Berlin, Germany",
    "author": "Morgan"
  },
  {
    "id": 202,
    "url": "442971599",
    "location": "Portland, OR, USA",
    "author": "Lynette"
  },
  {
    "id": 203,
    "url": "442970675",
    "location": "Vilnius, Lithuania",
    "author": "Indre"
  },
  {
    "id": 204,
    "url": "442970606",
    "location": "Hither Green, London",
    "author": "Elly"
  },
  {
    "id": 205,
    "url": "442970445",
    "location": "Perm, Russia",
    "author": "Vitaly"
  },
  {
    "id": 206,
    "url": "442974737",
    "location": "British Columbia, Canada",
    "author": "Kaslo"
  },
  {
    "id": 207,
    "url": "442969189",
    "location": "Bristol, UK",
    "author": "Adam"
  },
  {
    "id": 208,
    "url": "442972874",
    "location": "Envigado, Colombia",
    "author": "Manuel"
  },
  {
    "id": 209,
    "url": "442973354",
    "location": "New Bedford, USA",
    "author": "Kate Ann"
  },
  {
    "id": 210,
    "url": "442974374",
    "location": "Sauerland, Germany",
    "author": "Ella"
  },
];

export default windows;
