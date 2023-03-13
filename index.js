import  express  from "express"
import cors from "cors"
// import { Storage } from "@google-cloud/storage"


const app = express()
const PORT = 8080

// const storage = new Storage({
//     projectId: "lol-esport-api",
//     keyFilename: "./config/lol-esport-api-f3a5e9072064.json"
// })

// const bucketName = 'lol-esport-bucket';
// const fileName = 'players/113.png';

// const bucket = storage.bucket(bucketName);
// const file = bucket.file(fileName);

// const config = {
//     action: 'read',
//     expires: '03-14-2024', // Date d'expiration de l'URL
// };

// file.getSignedUrl(config, function (err, url) {
//     if (err) {
//       console.error(err);
//       return;
//     }
  
//     console.log(`Lien signé: ${url}`);
// });

app.use(express.json())
app.use(cors())


app.get("/", (req, res) => {
    res.status(200).send({
        leagues: [
            {
              id: nanoid(10),
              name: "League of Legends European Championship",
              acronym: "LEC",
              region: "EMEA",
              teams:[
                {
                    id: nanoid(10),
                    acronym: "G2",
                    name: "G2 Esports",
                    image:"https://storage.googleapis.com/lol-esport-bucket/team-logo/G2.png",
                    country:"Germany",
                    roster: [
                        {
                            id: nanoid(10),
                            summonerName: "BrokenBlade",
                            firstName: "Sergen",
                            lastName: "Çelik",
                            country:"Turkey",
                            role: "top",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/BrokenBlade.png",
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Yike",
                            firstName: "Martin",
                            lastName: "Sundelin",
                            country:"Sweden/Peru",
                            role: "jungle",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Yike.png",
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Caps",
                            firstName: "Rasmus",
                            lastName: "Borregaard Winther",
                            country:"Denmark",
                            role: "mid",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/BrokenBlade.png",
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Hans Sama",
                            firstName: "Steven",
                            lastName: "Liv",
                            country:"France",
                            role: "adc",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/HansSama.png",
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Mikyx",
                            firstName: "Mihael",
                            lastName: "Mehle",
                            country:"Slovenia",
                            role: "support",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Mikyx.png",
                        }
                    ]
                },
                {
                    id: nanoid(10),
                    acronym: "VIT",
                    name: "Team Vitality",
                    image:"https://storage.googleapis.com/lol-esport-bucket/team-logo/Vitality.png",
                    country:"France",
                    roster: [
                        {
                            id: nanoid(10),
                            summonerName: "Photon",
                            firstName: "Gyutae",
                            lastName: "Kyung",
                            country:"South Korea",
                            role: "top",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Photon.png",
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Bo",
                            firstName: "Yang-bo",
                            lastName: "Zhou",
                            country:"China",
                            role: "jungle",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Bo.png",
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Perkz",
                            firstName: "Luka",
                            lastName: "Perković",
                            country:"Croatia",
                            role: "mid",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Perkz.png",
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Upset",
                            firstName: "ELias",
                            lastName: "Lipp",
                            country:"Germany",
                            role: "adc",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Upset.png",
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Kaiser",
                            firstName: "Norman",
                            lastName: "Kaiser",
                            country:"Germany",
                            role: "support",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Kaiser.png",
                        }
                    ]
                },
                {
                    id: nanoid(10),
                    acronym: "KOI",
                    name: "KOI",
                    image:"https://storage.googleapis.com/lol-esport-bucket/team-logo/KOI.webp",
                    country:"Spain",
                    roster: [
                        {
                            id: nanoid(10),
                            summonerName: "Szygenda",
                            firstName: "Mathias",
                            lastName: "Jensen",
                            country:"Denmark",
                            role: "top",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Szygenda.png",
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Malrang",
                            firstName: "Geun-Seong",
                            lastName: "Kim",
                            country:"South Korea",
                            role: "jungle",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Malrang.png",
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Larssen",
                            firstName: "Emil",
                            lastName: "Larsson",
                            country:"Sweden",
                            role: "mid",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Larssen.png",
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Comp",
                            firstName: "Markos",
                            lastName: "Stamkopoulos",
                            country:"Greece",
                            role: "adc",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Comp.png",
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Trymbi",
                            firstName: "Adrian",
                            lastName: "Trybus",
                            country:"Poland",
                            role: "support",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Trymbi.png",
                        }
                    ]
                },
                {
                    id: nanoid(10),
                    acronym: "MAD",
                    name: "MAD Lions",
                    image:"https://storage.googleapis.com/lol-esport-bucket/team-logo/MAD.png",
                    country:"Spain",
                    roster: [
                        {
                            id: nanoid(10),
                            summonerName: "Chasy",
                            firstName: "Donghyeon",
                            lastName: "Kim",
                            country:"South Korea",
                            role: "top",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Carzzy.png",
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Elyoya",
                            firstName: "Javier",
                            lastName: "Prades",
                            country:"Spain",
                            role: "jungle",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Doss.png",
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Nisqy",
                            firstName: "Yasin",
                            lastName: "Dincer",
                            country:"Belgium/Turkey",
                            role: "mid",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Nisqy.png",
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Carzzy",
                            firstName: "Matyáš",
                            lastName: "Orság",
                            country:"Czechia",
                            role: "adc",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Carzzy.png",
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Hylissang",
                            firstName: "Zdravets",
                            lastName: "Iliev Galabov",
                            country:"Bulgaria",
                            role: "support",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Hylissang.png",
                        }
                    ]
                },
                {
                    id: nanoid(10),
                    acronym: "FNC",
                    name: "Fnatic",
                    image:"https://storage.googleapis.com/lol-esport-bucket/team-logo/Fnatic.png",
                    country:"United Kingdom",
                    roster: [
                        {
                            id: nanoid(10),
                            summonerName: "Oscarinin",
                            firstName: "Oscar",
                            lastName: "Muñoz Jiménez",
                            country:"Spain",
                            role: "top",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Oscarinin.webp",
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Razork",
                            firstName: "Iván",
                            lastName: "Martín",
                            country:"Spain",
                            role: "jungle",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Razork.png",
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Humanoid",
                            firstName: "Marek",
                            lastName: "Brázda",
                            country:"Czechia",
                            role: "mid",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Humanoid.png",
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Rekkles",
                            firstName: "Carl Martin",
                            lastName: "Erik Larsson",
                            country:"Sweden",
                            role: "adc",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Rekkles.png",
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Advienne",
                            firstName: "Hendrik",
                            lastName: "Reijenga",
                            country:"Netherlands",
                            role: "support",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Advienne.png",
                        }
                    ]
                },
                {
                    id: nanoid(10),
                    acronym: "BDS",
                    name: "Team BDS",
                    image:"https://storage.googleapis.com/lol-esport-bucket/team-logo/BDS.png",
                    country:"Switzerland",
                    roster: [
                        {
                            id: nanoid(10),
                            summonerName: "Adam",
                            firstName: "Adam",
                            lastName: "Maanane",
                            country:"France",
                            role: "top",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Adam.png",
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Sheo",
                            firstName: "Théo",
                            lastName: "Borlie",
                            country:"France",
                            role: "jungle",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Sheo.png",
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Nuc",
                            firstName: "Ilias",
                            lastName: "Bizriken",
                            country:"France",
                            role: "mid",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Nuc.png",
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Crownie",
                            firstName: "Juš",
                            lastName: "Marušič",
                            country:"Slovenia",
                            role: "adc",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Comp.png",
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Labrov",
                            firstName: "Labros",
                            lastName: "Papoutsakis",
                            country:"Greece",
                            role: "support",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Labrov.png",
                        }
                    ]
                },
                {
                    id: nanoid(10),
                    acronym: "AST",
                    name: "Astralis",
                    image:"https://storage.googleapis.com/lol-esport-bucket/team-logo/Astralis.png",
                    country:"Denmark",
                    roster: [
                        {
                            id: nanoid(10),
                            summonerName: "Finn",
                            firstName: "Finn",
                            lastName: "Wiestål",
                            country:"Sweden",
                            role: "top",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Finn.png",
                        },
                        {
                            id: nanoid(10),
                            summonerName: "113",
                            firstName: "Doğukan",
                            lastName: "Balci",
                            country:"Turkey",
                            role: "jungle",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/113.png",
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Lider",
                            firstName: "Adam",
                            lastName: "Ilyasov",
                            country:"Norway/Russia",
                            role: "mid",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Lider.png",
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Kobbe",
                            firstName: "Kasper",
                            lastName: "Kobberup",
                            country:"Denmark",
                            role: "adc",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Kobbe.png",
                        },
                        {
                            id: nanoid(10),
                            summonerName: "JeongHoon",
                            firstName: "Jeonghoon",
                            lastName: "Lee",
                            country:"South Korea",
                            role: "support",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/JeongHoon.png",
                        }
                    ]
                },
                {
                    id: nanoid(10),
                    acronym: "TH",
                    name: "Team Heretics",
                    image:"https://storage.googleapis.com/lol-esport-bucket/team-logo/Heretics.png",
                    country:"Spain",
                    roster: [
                        {
                            id: nanoid(10),
                            summonerName: "Evi",
                            firstName: "Shunsuke",
                            lastName: "Murase",
                            country:"Japan",
                            role: "top",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Evi.png",
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Jankos",
                            firstName: "Marcin",
                            lastName: "Jankowski",
                            country:"Poland",
                            role: "jungle",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Jankos.png",
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Ruby",
                            firstName: "Sol-min",
                            lastName: "Lee",
                            country:"South Korea",
                            role: "mid",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Rekkles.png",
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Jackspektra",
                            firstName: "Jakob",
                            lastName: "Gullvag Kepple",
                            country:"Norway",
                            role: "adc",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Jackspektra.png",
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Mersa",
                            firstName: "Mertai",
                            lastName: "Sari",
                            country:"Greece",
                            role: "support",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Mersa.png",
                        }
                    ]
                },
                {
                    id: nanoid(10),
                    acronym: "XL",
                    name: "EXCEL Esports",
                    image:"https://storage.googleapis.com/lol-esport-bucket/team-logo/XL.png",
                    country:"United Kingdom",
                    roster: [
                        {
                            id: nanoid(10),
                            summonerName: "Odoamne",
                            firstName: "Andrei",
                            lastName: "Pascu",
                            country:"Romania",
                            role: "top",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Odoamne.png",
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Xerxe",
                            firstName: "Andrei",
                            lastName: "Dragomir",
                            country:"Romania",
                            role: "jungle",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Xerxe.png",
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Vetheo",
                            firstName: "Vincent",
                            lastName: "Berrié",
                            country:"France",
                            role: "mid",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Vetheo.png",
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Patrik",
                            firstName: "Patrik",
                            lastName: "Jiru",
                            country:"Czechia",
                            role: "adc",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Patrik.png",
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Limit",
                            firstName: "Dino",
                            lastName: "Tot",
                            country:"Crotia",
                            role: "support",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Limit.png",
                        }
                    ]
                },
                {
                    id: nanoid(10),
                    acronym: "SK",
                    name: "SK Gaming",
                    image:"https://storage.googleapis.com/lol-esport-bucket/team-logo/SK.png",
                    country:"Germany",
                    roster: [
                        {
                            id: nanoid(10),
                            summonerName: "Irrelevant",
                            firstName: "Joel Miro",
                            lastName: "Scharoll",
                            country:"Germany",
                            role: "top",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Irrelevant.png",
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Markoon",
                            firstName: "Mark",
                            lastName: "Van Woensel",
                            country:"Netherlands",
                            role: "jungle",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Markoon.png",
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Sertuss",
                            firstName: "Daniyal",
                            lastName: "Gamani",
                            country:"Germany",
                            role: "mid",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Sertuss.png",
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Exakick",
                            firstName: "Thomas",
                            lastName: "Foucou",
                            country:"France",
                            role: "adc",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Evi.png",
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Doss",
                            firstName: "Mads",
                            lastName: "Jensen",
                            country:"Denmark",
                            role: "support",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Doss.png",
                        }
                    ]
                }
              ]
            }
        ]
    })
})


// app.get('/league', (req, res) => {
//     res.status(200).send({})
// })

// app.get('/teams', (req, res) => {
//     res.status(200).send({})
// })

// app.get('/player', (req, res) => {
//     res.status(200).send({})
// })

app.listen(PORT, () => console.log(`it's alive on http://localhost:${PORT}`));

module.exports = app