import  express  from "express"
import cors from "cors"
import { nanoid } from "nanoid"
// import { Storage } from "@google-cloud/storage"
import getUnicodeFlagIcon from 'country-flag-icons/unicode'


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
              image:"https://storage.googleapis.com/lol-esport-bucket/league/lec.png",
              teams:[
                {
                    id: nanoid(10),
                    acronym: "G2",
                    name: "G2 Esports",
                    image:"https://storage.googleapis.com/lol-esport-bucket/team-logo/G2.png",
                    country: getUnicodeFlagIcon('DE'),
                    roster: [
                        {
                            id: nanoid(10),
                            summonerName: "BrokenBlade",
                            firstName: "Sergen",
                            lastName: "Çelik",
                            country: getUnicodeFlagIcon('TR'),
                            role:"top",
                            role_image: "https://storage.googleapis.com/lol-esport-bucket/lane/top.svg",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/BrokenBlade.png",
                            team_image:"https://storage.googleapis.com/lol-esport-bucket/team-logo/G2.png",
                            league: "https://storage.googleapis.com/lol-esport-bucket/league/lec.png"
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Yike",
                            firstName: "Martin",
                            lastName: "Sundelin",
                            country:[getUnicodeFlagIcon('SE'), getUnicodeFlagIcon('PE')],
                            role:"jungle",
                            role_image: "https://storage.googleapis.com/lol-esport-bucket/lane/jungle.svg",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Yike.png",
                            team_image:"https://storage.googleapis.com/lol-esport-bucket/team-logo/G2.png",
                            league: "https://storage.googleapis.com/lol-esport-bucket/league/lec.png"
                            
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Caps",
                            firstName: "Rasmus",
                            lastName: "Borregaard Winther",
                            country:getUnicodeFlagIcon('DK'),
                            role:"mid",
                            role_image: "https://storage.googleapis.com/lol-esport-bucket/lane/mid.svg",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/CaPs.png",
                            team_image:"https://storage.googleapis.com/lol-esport-bucket/team-logo/G2.png",
                            league: "https://storage.googleapis.com/lol-esport-bucket/league/lec.png"
                            
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Hans Sama",
                            firstName: "Steven",
                            lastName: "Liv",
                            country:getUnicodeFlagIcon('FR'),
                            role:"adc",
                            role_image: "https://storage.googleapis.com/lol-esport-bucket/lane/adc.svg",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/HansSama.png",
                            team_image:"https://storage.googleapis.com/lol-esport-bucket/team-logo/G2.png",
                            league: "https://storage.googleapis.com/lol-esport-bucket/league/lec.png"
                            
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Mikyx",
                            firstName: "Mihael",
                            lastName: "Mehle",
                            country:getUnicodeFlagIcon('SI'),
                            role:"support",
                            role_image: "https://storage.googleapis.com/lol-esport-bucket/lane/support.svg",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Mikyx.png",
                            team_image:"https://storage.googleapis.com/lol-esport-bucket/team-logo/G2.png",
                            league: "https://storage.googleapis.com/lol-esport-bucket/league/lec.png"
                            
                        }
                    ]
                },
                {
                    id: nanoid(10),
                    acronym: "VIT",
                    name: "Team Vitality",
                    image:"https://storage.googleapis.com/lol-esport-bucket/team-logo/Vitality.png",
                    country: getUnicodeFlagIcon('FR'),
                    roster: [
                        {
                            id: nanoid(10),
                            summonerName: "Photon",
                            firstName: "Gyutae",
                            lastName: "Kyung",
                            country: getUnicodeFlagIcon('KR'),
                            role:"top",
                            role_image: "https://storage.googleapis.com/lol-esport-bucket/lane/top.svg",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Photon.png",
                            team_image:"https://storage.googleapis.com/lol-esport-bucket/team-logo/Vitality.png",
                            league: "https://storage.googleapis.com/lol-esport-bucket/league/lec.png"
                            
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Bo",
                            firstName: "Yang-bo",
                            lastName: "Zhou",
                            country: getUnicodeFlagIcon('CN'),
                            role:"jungle",
                            role_image: "https://storage.googleapis.com/lol-esport-bucket/lane/jungle.svg",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Bo.png",
                            team_image:"https://storage.googleapis.com/lol-esport-bucket/team-logo/Vitality.png",
                            league: "https://storage.googleapis.com/lol-esport-bucket/league/lec.png"
                            
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Perkz",
                            firstName: "Luka",
                            lastName: "Perković",
                            country: getUnicodeFlagIcon('HR'),
                            role:"mid",
                            role_image: "https://storage.googleapis.com/lol-esport-bucket/lane/mid.svg",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Perkz.png",
                            team_image:"https://storage.googleapis.com/lol-esport-bucket/team-logo/Vitality.png",
                            league: "https://storage.googleapis.com/lol-esport-bucket/league/lec.png"
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Upset",
                            firstName: "ELias",
                            lastName: "Lipp",
                            country: getUnicodeFlagIcon('DE'),
                            role:"adc",
                            role_image: "https://storage.googleapis.com/lol-esport-bucket/lane/adc.svg",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Upset.png",
                            team_image:"https://storage.googleapis.com/lol-esport-bucket/team-logo/Vitality.png",
                            league: "https://storage.googleapis.com/lol-esport-bucket/league/lec.png"
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Kaiser",
                            firstName: "Norman",
                            lastName: "Kaiser",
                            country: getUnicodeFlagIcon('DE'),
                            role:"support",
                            role_image: "https://storage.googleapis.com/lol-esport-bucket/lane/support.svg",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Kaiser.png",
                            team_image:"https://storage.googleapis.com/lol-esport-bucket/team-logo/Vitality.png",
                            league: "https://storage.googleapis.com/lol-esport-bucket/league/lec.png"
                        }
                    ]
                },
                {
                    id: nanoid(10),
                    acronym: "KOI",
                    name: "KOI",
                    image:"https://storage.googleapis.com/lol-esport-bucket/team-logo/KOI.webp",
                    country: getUnicodeFlagIcon('SE'),
                    roster: [
                        {
                            id: nanoid(10),
                            summonerName: "Szygenda",
                            firstName: "Mathias",
                            lastName: "Jensen",
                            country: getUnicodeFlagIcon('Dk'),
                            role:"top",
                            role_image: "https://storage.googleapis.com/lol-esport-bucket/lane/top.svg",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Szygenda.png",
                            team_image:"https://storage.googleapis.com/lol-esport-bucket/team-logo/KOI.webp",
                            league: "https://storage.googleapis.com/lol-esport-bucket/league/lec.png"
                            
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Malrang",
                            firstName: "Geun-Seong",
                            lastName: "Kim",
                            country: getUnicodeFlagIcon('KR'),
                            role:"jungle",
                            role_image: "https://storage.googleapis.com/lol-esport-bucket/lane/jungle.svg",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Malrang.png",
                            team_image:"https://storage.googleapis.com/lol-esport-bucket/team-logo/KOI.webp",
                            league: "https://storage.googleapis.com/lol-esport-bucket/league/lec.png"
                            
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Larssen",
                            firstName: "Emil",
                            lastName: "Larsson",
                            country: getUnicodeFlagIcon('SE'),
                            role:"mid",
                            role_image: "https://storage.googleapis.com/lol-esport-bucket/lane/mid.svg",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Larssen.png",
                            team_image:"https://storage.googleapis.com/lol-esport-bucket/team-logo/KOI.webp",
                            league: "https://storage.googleapis.com/lol-esport-bucket/league/lec.png"
                            
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Comp",
                            firstName: "Markos",
                            lastName: "Stamkopoulos",
                            country: getUnicodeFlagIcon('GR'),
                            role:"adc",
                            role_image: "https://storage.googleapis.com/lol-esport-bucket/lane/adc.svg",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Comp.png",
                            team_image:"https://storage.googleapis.com/lol-esport-bucket/team-logo/KOI.webp",
                            league: "https://storage.googleapis.com/lol-esport-bucket/league/lec.png"
                            
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Trymbi",
                            firstName: "Adrian",
                            lastName: "Trybus",
                            country: getUnicodeFlagIcon('PL'),
                            role:"support",
                            role_image: "https://storage.googleapis.com/lol-esport-bucket/lane/support.svg",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Trymbi.png",
                            team_image:"https://storage.googleapis.com/lol-esport-bucket/team-logo/KOI.webp",
                            league: "https://storage.googleapis.com/lol-esport-bucket/league/lec.png"
                            
                        }
                    ]
                },
                {
                    id: nanoid(10),
                    acronym: "MAD",
                    name: "MAD Lions",
                    image:"https://storage.googleapis.com/lol-esport-bucket/team-logo/MAD.png",
                    country: getUnicodeFlagIcon('ES'),
                    roster: [
                        {
                            id: nanoid(10),
                            summonerName: "Chasy",
                            firstName: "Donghyeon",
                            lastName: "Kim",
                            country: getUnicodeFlagIcon('KR'),
                            role:"top",
                            role_image: "https://storage.googleapis.com/lol-esport-bucket/lane/top.svg",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Carzzy.png",
                            team_image:"https://storage.googleapis.com/lol-esport-bucket/team-logo/MAD.png",
                            league: "https://storage.googleapis.com/lol-esport-bucket/league/lec.png"
                            
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Elyoya",
                            firstName: "Javier",
                            lastName: "Prades",
                            country: getUnicodeFlagIcon('ES'),
                            role:"jungle",
                            role_image: "https://storage.googleapis.com/lol-esport-bucket/lane/jungle.svg",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Elyoya.png",
                            team_image:"https://storage.googleapis.com/lol-esport-bucket/team-logo/MAD.png",
                            league: "https://storage.googleapis.com/lol-esport-bucket/league/lec.png"
                            
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Nisqy",
                            firstName: "Yasin",
                            lastName: "Dincer",
                            country: [getUnicodeFlagIcon('BE'), getUnicodeFlagIcon('TR')],
                            role:"mid",
                            role_image: "https://storage.googleapis.com/lol-esport-bucket/lane/mid.svg",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Nisqy.png",
                            team_image:"https://storage.googleapis.com/lol-esport-bucket/team-logo/MAD.png",
                            league: "https://storage.googleapis.com/lol-esport-bucket/league/lec.png"
                            
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Carzzy",
                            firstName: "Matyáš",
                            lastName: "Orság",
                            country: getUnicodeFlagIcon('CZ'),
                            role:"adc",
                            role_image: "https://storage.googleapis.com/lol-esport-bucket/lane/adc.svg",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Carzzy.png",
                            team_image:"https://storage.googleapis.com/lol-esport-bucket/team-logo/MAD.png",
                            league: "https://storage.googleapis.com/lol-esport-bucket/league/lec.png"
                            
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Hylissang",
                            firstName: "Zdravets",
                            lastName: "Iliev Galabov",
                            country: getUnicodeFlagIcon('BG'),
                            role:"support",
                            role_image: "https://storage.googleapis.com/lol-esport-bucket/lane/support.svg",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Hylissang.png",
                            team_image:"https://storage.googleapis.com/lol-esport-bucket/team-logo/MAD.png",
                            league: "https://storage.googleapis.com/lol-esport-bucket/league/lec.png"
                            
                        }
                    ]
                },
                {
                    id: nanoid(10),
                    acronym: "FNC",
                    name: "Fnatic",
                    image:"https://storage.googleapis.com/lol-esport-bucket/team-logo/Fnatic.png",
                    country: getUnicodeFlagIcon('UK'),
                    roster: [
                        {
                            id: nanoid(10),
                            summonerName: "Oscarinin",
                            firstName: "Oscar",
                            lastName: "Muñoz Jiménez",
                            country: getUnicodeFlagIcon('ES'),
                            role:"top",
                            role_image: "https://storage.googleapis.com/lol-esport-bucket/lane/top.svg",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Oscarinin.png",
                            team_image:"https://storage.googleapis.com/lol-esport-bucket/team-logo/Fnatic.png",
                            league: "https://storage.googleapis.com/lol-esport-bucket/league/lec.png"
                            
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Razork",
                            firstName: "Iván",
                            lastName: "Martín",
                            country: getUnicodeFlagIcon('SE'),
                            role:"jungle",
                            role_image: "https://storage.googleapis.com/lol-esport-bucket/lane/jungle.svg",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Razork.png",
                            team_image:"https://storage.googleapis.com/lol-esport-bucket/team-logo/Fnatic.png",
                            league: "https://storage.googleapis.com/lol-esport-bucket/league/lec.png"
                            
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Humanoid",
                            firstName: "Marek",
                            lastName: "Brázda",
                            country: getUnicodeFlagIcon('CZ'),
                            role:"mid",
                            role_image: "https://storage.googleapis.com/lol-esport-bucket/lane/mid.svg",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Humanoid.png",
                            team_image:"https://storage.googleapis.com/lol-esport-bucket/team-logo/Fnatic.png",
                            league: "https://storage.googleapis.com/lol-esport-bucket/league/lec.png"
                            
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Rekkles",
                            firstName: "Carl Martin",
                            lastName: "Erik Larsson",
                            country: getUnicodeFlagIcon('SE'),
                            role:"adc",
                            role_image: "https://storage.googleapis.com/lol-esport-bucket/lane/adc.svg",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Rekkles.png",
                            team_image:"https://storage.googleapis.com/lol-esport-bucket/team-logo/Fnatic.png",
                            league: "https://storage.googleapis.com/lol-esport-bucket/league/lec.png"
                            
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Advienne",
                            firstName: "Hendrik",
                            lastName: "Reijenga",
                            country: getUnicodeFlagIcon('NL'),
                            role:"support",
                            role_image: "https://storage.googleapis.com/lol-esport-bucket/lane/support.svg",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Advienne.png",
                            team_image:"https://storage.googleapis.com/lol-esport-bucket/team-logo/Fnatic.png",
                            league: "https://storage.googleapis.com/lol-esport-bucket/league/lec.png"
                            
                        }
                    ]
                },
                {
                    id: nanoid(10),
                    acronym: "BDS",
                    name: "Team BDS",
                    image:"https://storage.googleapis.com/lol-esport-bucket/team-logo/BDS.png",
                    country: getUnicodeFlagIcon('CH'),
                    roster: [
                        {
                            id: nanoid(10),
                            summonerName: "Adam",
                            firstName: "Adam",
                            lastName: "Maanane",
                            country: getUnicodeFlagIcon('FR'),
                            role:"top",
                            role_image: "https://storage.googleapis.com/lol-esport-bucket/lane/top.svg",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Adam.png",
                            team_image:"https://storage.googleapis.com/lol-esport-bucket/team-logo/BDS.png",
                            league: "https://storage.googleapis.com/lol-esport-bucket/league/lec.png"
                            
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Sheo",
                            firstName: "Théo",
                            lastName: "Borlie",
                            country: getUnicodeFlagIcon('FR'),
                            role:"jungle",
                            role_image: "https://storage.googleapis.com/lol-esport-bucket/lane/jungle.svg",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Sheo.png",
                            team_image:"https://storage.googleapis.com/lol-esport-bucket/team-logo/BDS.png",
                            league: "https://storage.googleapis.com/lol-esport-bucket/league/lec.png"
                            
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Nuc",
                            firstName: "Ilias",
                            lastName: "Bizriken",
                            country: getUnicodeFlagIcon('FR'),
                            role:"mid",
                            role_image: "https://storage.googleapis.com/lol-esport-bucket/lane/mid.svg",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Nuc.png",
                            team_image:"https://storage.googleapis.com/lol-esport-bucket/team-logo/BDS.png",
                            league: "https://storage.googleapis.com/lol-esport-bucket/league/lec.png"
                            
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Crownie",
                            firstName: "Juš",
                            lastName: "Marušič",
                            country: getUnicodeFlagIcon('SI'),
                            role:"adc",
                            role_image: "https://storage.googleapis.com/lol-esport-bucket/lane/adc.svg",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Crownie.png",
                            team_image:"https://storage.googleapis.com/lol-esport-bucket/team-logo/BDS.png",
                            league: "https://storage.googleapis.com/lol-esport-bucket/league/lec.png"
                            
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Labrov",
                            firstName: "Labros",
                            lastName: "Papoutsakis",
                            country: getUnicodeFlagIcon('GR'),
                            role:"support",
                            role_image: "https://storage.googleapis.com/lol-esport-bucket/lane/support.svg",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Labrov.png",
                            team_image:"https://storage.googleapis.com/lol-esport-bucket/team-logo/BDS.png",
                            league: "https://storage.googleapis.com/lol-esport-bucket/league/lec.png"
                            
                        }
                    ]
                },
                {
                    id: nanoid(10),
                    acronym: "AST",
                    name: "Astralis",
                    image:"https://storage.googleapis.com/lol-esport-bucket/team-logo/Astralis.png",
                    country: getUnicodeFlagIcon('DK'),
                    roster: [
                        {
                            id: nanoid(10),
                            summonerName: "Finn",
                            firstName: "Finn",
                            lastName: "Wiestål",
                            country: getUnicodeFlagIcon('SE'),
                            role:"top",
                            role_image: "https://storage.googleapis.com/lol-esport-bucket/lane/top.svg",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Finn.png",
                            team_image:"https://storage.googleapis.com/lol-esport-bucket/team-logo/Astralis.png",
                            league: "https://storage.googleapis.com/lol-esport-bucket/league/lec.png"
                            
                        },
                        {
                            id: nanoid(10),
                            summonerName: "113",
                            firstName: "Doğukan",
                            lastName: "Balci",
                            country: getUnicodeFlagIcon('TR'),
                            role:"jungle",
                            role_image: "https://storage.googleapis.com/lol-esport-bucket/lane/jungle.svg",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/113.png",
                            team_image:"https://storage.googleapis.com/lol-esport-bucket/team-logo/Astralis.png",
                            league: "https://storage.googleapis.com/lol-esport-bucket/league/lec.png"
                            
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Lider",
                            firstName: "Adam",
                            lastName: "Ilyasov",
                            country: [getUnicodeFlagIcon('NO'), getUnicodeFlagIcon('RU')],
                            role:'mid',
                            role_image: "https://storage.googleapis.com/lol-esport-bucket/lane/mid.svg",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Lider.png",
                            team_image:"https://storage.googleapis.com/lol-esport-bucket/team-logo/Astralis.png",
                            league: "https://storage.googleapis.com/lol-esport-bucket/league/lec.png"
                            
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Kobbe",
                            firstName: "Kasper",
                            lastName: "Kobberup",
                            country: getUnicodeFlagIcon('DK'),
                            role:"adc",
                            role_image: "https://storage.googleapis.com/lol-esport-bucket/lane/adc.svg",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Kobbe.png",
                            team_image:"https://storage.googleapis.com/lol-esport-bucket/team-logo/Astralis.png",
                            league: "https://storage.googleapis.com/lol-esport-bucket/league/lec.png"
                            
                        },
                        {
                            id: nanoid(10),
                            summonerName: "JeongHoon",
                            firstName: "Jeonghoon",
                            lastName: "Lee",
                            country: getUnicodeFlagIcon('KR'),
                            role:"support",
                            role_image: "https://storage.googleapis.com/lol-esport-bucket/lane/support.svg",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/JeongHoon.png",
                            team_image:"https://storage.googleapis.com/lol-esport-bucket/team-logo/Astralis.png",
                            league: "https://storage.googleapis.com/lol-esport-bucket/league/lec.png"
                            
                        }
                    ]
                },
                {
                    id: nanoid(10),
                    acronym: "TH",
                    name: "Team Heretics",
                    image:"https://storage.googleapis.com/lol-esport-bucket/team-logo/Heretics.png",
                    country: getUnicodeFlagIcon('ES'),
                    roster: [
                        {
                            id: nanoid(10),
                            summonerName: "Evi",
                            firstName: "Shunsuke",
                            lastName: "Murase",
                            country: getUnicodeFlagIcon('JP'),
                            role:"top",
                            role_image: "https://storage.googleapis.com/lol-esport-bucket/lane/top.svg",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Evi.png",
                            team_image:"https://storage.googleapis.com/lol-esport-bucket/team-logo/Heretics.png",
                            league: "https://storage.googleapis.com/lol-esport-bucket/league/lec.png"
                            
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Jankos",
                            firstName: "Marcin",
                            lastName: "Jankowski",
                            country: getUnicodeFlagIcon('PL'),
                            role:"jungle",
                            role_image: "https://storage.googleapis.com/lol-esport-bucket/lane/jungle.svg",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Jankos.png",
                            team_image:"https://storage.googleapis.com/lol-esport-bucket/team-logo/Heretics.png",
                            league: "https://storage.googleapis.com/lol-esport-bucket/league/lec.png"
                            
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Ruby",
                            firstName: "Sol-min",
                            lastName: "Lee",
                            country: getUnicodeFlagIcon('KR'),
                            role:"mid",
                            role_image: "https://storage.googleapis.com/lol-esport-bucket/lane/mid.svg",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Ruby.png",
                            team_image:"https://storage.googleapis.com/lol-esport-bucket/team-logo/Heretics.png",
                            league: "https://storage.googleapis.com/lol-esport-bucket/league/lec.png"
                            
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Jackspektra",
                            firstName: "Jakob",
                            lastName: "Gullvag Kepple",
                            country: getUnicodeFlagIcon('NO'),
                            role:"adc",
                            role_image: "https://storage.googleapis.com/lol-esport-bucket/lane/adc.svg",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Jackspektra.png",
                            team_image:"https://storage.googleapis.com/lol-esport-bucket/team-logo/Heretics.png",
                            league: "https://storage.googleapis.com/lol-esport-bucket/league/lec.png"
                            
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Mersa",
                            firstName: "Mertai",
                            lastName: "Sari",
                            country: getUnicodeFlagIcon('GR'),
                            role:"support",
                            role_image: "https://storage.googleapis.com/lol-esport-bucket/lane/support.svg",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Mersa.png",
                            team_image:"https://storage.googleapis.com/lol-esport-bucket/team-logo/Heretics.png",
                            league: "https://storage.googleapis.com/lol-esport-bucket/league/lec.png"
                            
                        }
                    ]
                },
                {
                    id: nanoid(10),
                    acronym: "XL",
                    name: "EXCEL Esports",
                    image:"https://storage.googleapis.com/lol-esport-bucket/team-logo/XL.png",
                    country: getUnicodeFlagIcon('UK'),
                    roster: [
                        {
                            id: nanoid(10),
                            summonerName: "Odoamne",
                            firstName: "Andrei",
                            lastName: "Pascu",
                            country: getUnicodeFlagIcon('RO'),
                            role:"top",
                            role_image: "https://storage.googleapis.com/lol-esport-bucket/lane/top.svg",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Odoamne.png",
                            team_image:"https://storage.googleapis.com/lol-esport-bucket/team-logo/XL.png",
                            league: "https://storage.googleapis.com/lol-esport-bucket/league/lec.png"
                            
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Xerxe",
                            firstName: "Andrei",
                            lastName: "Dragomir",
                            country: getUnicodeFlagIcon('RO'),
                            role:"jungle",
                            role_image: "https://storage.googleapis.com/lol-esport-bucket/lane/jungle.svg",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Xerxe.png",
                            team_image:"https://storage.googleapis.com/lol-esport-bucket/team-logo/XL.png",
                            league: "https://storage.googleapis.com/lol-esport-bucket/league/lec.png"
                            
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Vetheo",
                            firstName: "Vincent",
                            lastName: "Berrié",
                            country: getUnicodeFlagIcon('FR'),
                            role:"mid",
                            role_image: "https://storage.googleapis.com/lol-esport-bucket/lane/mid.svg",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Vetheo.png",
                            team_image:"https://storage.googleapis.com/lol-esport-bucket/team-logo/XL.png",
                            league: "https://storage.googleapis.com/lol-esport-bucket/league/lec.png"
                            
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Patrik",
                            firstName: "Patrik",
                            lastName: "Jiru",
                            country: getUnicodeFlagIcon('CZ'),
                            role:"adc",
                            role_image: "https://storage.googleapis.com/lol-esport-bucket/lane/adc.svg",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Patrik.png",
                            team_image:"https://storage.googleapis.com/lol-esport-bucket/team-logo/XL.png",
                            league: "https://storage.googleapis.com/lol-esport-bucket/league/lec.png"
                            
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Limit",
                            firstName: "Dino",
                            lastName: "Tot",
                            country: getUnicodeFlagIcon('HR'),
                            role:"support",
                            role_image: "https://storage.googleapis.com/lol-esport-bucket/lane/support.svg",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Limit.png",
                            team_image:"https://storage.googleapis.com/lol-esport-bucket/team-logo/XL.png",
                            league: "https://storage.googleapis.com/lol-esport-bucket/league/lec.png"
                            
                        }
                    ]
                },
                {
                    id: nanoid(10),
                    acronym: "SK",
                    name: "SK Gaming",
                    image:"https://storage.googleapis.com/lol-esport-bucket/team-logo/SK.png",
                    country: getUnicodeFlagIcon('DE'),
                    roster: [
                        {
                            id: nanoid(10),
                            summonerName: "Irrelevant",
                            firstName: "Joel Miro",
                            lastName: "Scharoll",
                            country: getUnicodeFlagIcon('DE'),
                            role:"top",
                            role_image: "https://storage.googleapis.com/lol-esport-bucket/lane/top.svg",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Irrelevant.png",
                            team_image:"https://storage.googleapis.com/lol-esport-bucket/team-logo/SK.png",
                            league: "https://storage.googleapis.com/lol-esport-bucket/league/lec.png"
                            
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Markoon",
                            firstName: "Mark",
                            lastName: "Van Woensel",
                            country: getUnicodeFlagIcon('NL'),
                            role:"jungle",
                            role_image: "https://storage.googleapis.com/lol-esport-bucket/lane/jungle.svg",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Markoon.png",
                            team_image:"https://storage.googleapis.com/lol-esport-bucket/team-logo/SK.png",
                            league: "https://storage.googleapis.com/lol-esport-bucket/league/lec.png"
                            
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Sertuss",
                            firstName: "Daniyal",
                            lastName: "Gamani",
                            country: getUnicodeFlagIcon('DE'),
                            role:"mid",
                            role_image: "https://storage.googleapis.com/lol-esport-bucket/lane/mid.svg",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Sertuss.png",
                            team_image:"https://storage.googleapis.com/lol-esport-bucket/team-logo/SK.png",
                            league: "https://storage.googleapis.com/lol-esport-bucket/league/lec.png"
                            
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Exakick",
                            firstName: "Thomas",
                            lastName: "Foucou",
                            country: getUnicodeFlagIcon('FR'),
                            role:"adc",
                            role_image: "https://storage.googleapis.com/lol-esport-bucket/lane/adc.svg",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Exakick.png",
                            team_image:"https://storage.googleapis.com/lol-esport-bucket/team-logo/SK.png",
                            league: "https://storage.googleapis.com/lol-esport-bucket/league/lec.png"
                            
                        },
                        {
                            id: nanoid(10),
                            summonerName: "Doss",
                            firstName: "Mads",
                            lastName: "Jensen",
                            country: getUnicodeFlagIcon('DK'),
                            role:"support",
                            role_image: "https://storage.googleapis.com/lol-esport-bucket/lane/support.svg",
                            image: "https://storage.googleapis.com/lol-esport-bucket/players/Doss.png",
                            team_image:"https://storage.googleapis.com/lol-esport-bucket/team-logo/SK.png",
                            league: "https://storage.googleapis.com/lol-esport-bucket/league/lec.png"
                            
                        }
                    ]
                }
              ]
            }
        ]
    })
})

app.get("/unknown", (req, res) => {
    res.status(200).send([
        {
            id:nanoid(10),
            team:'team',
            role:'top',
            role_image: "https://storage.googleapis.com/lol-esport-bucket/lane/top.svg",
            image:'https://storage.googleapis.com/lol-esport-bucket/players/Random.png',
            summonerName: 'unknown',
            country: "country",
            rating: 'rating'
        },
        {
            id:nanoid(10),
            team:'team',
            role:'jungle',
            role_image: "https://storage.googleapis.com/lol-esport-bucket/lane/jungle.svg",
            image:'https://storage.googleapis.com/lol-esport-bucket/players/Random.png',
            summonerName: 'unknown',
            country: "country",
            rating: 'rating'
        },
        {
            id:nanoid(10),
            team:'team',
            role:'mid',
            role_image: "https://storage.googleapis.com/lol-esport-bucket/lane/mid.svg",
            image:'https://storage.googleapis.com/lol-esport-bucket/players/Random.png',
            summonerName: 'unknown',
            country: "country",
            rating: 'rating'
        },
        {
            id:nanoid(10),
            team:'team',
            role:'adc',
            role_image: "https://storage.googleapis.com/lol-esport-bucket/lane/adc.svg",
            image:'https://storage.googleapis.com/lol-esport-bucket/players/Random.png',
            summonerName: 'unknown',
            country: "country",
            rating: 'rating'
        },
        {
            id:nanoid(10),
            team:'team',
            role: 'support',
            role_image: "https://storage.googleapis.com/lol-esport-bucket/lane/support.svg",
            image:'https://storage.googleapis.com/lol-esport-bucket/players/Random.png',
            summonerName: 'unknown',
            country: "country",
            rating: 'rating'
        },

    ])
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

export default app