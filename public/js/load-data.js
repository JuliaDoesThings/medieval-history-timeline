// import mime from '../../node_modules/mime';
import { useState } from "../../node_modules/react";


function loadData() 
{
    const [dates, setDates] = useState(
    [
        {
            year_start: 100,
            year_end: "",
            title: "Tacitus Germania",
            text: "",
            additional_notes: "Approx date",
            location: ""
        },
        {
            year_start: 192,
            year_end: "",
            title: "Commodus Killed",
            text: "Killed by his guards",
            additional_notes: "He was son of Marcus Aurelius",
            location: ""
        },
        {
            year_start: 200,
            year_end: "",
            title: "The Happiest of all Centuries",
            text: "According to Sir Edward Gibbon",
            additional_notes: "Approx date",
            location: ""
        },
        {
            year_start: 218,
            year_end: 268,
            title: "51 seperate emperors",
            text: "So many Coups",
            additional_notes: "",
            location: ""
        },
        {
            year_start: 257,
            year_end: "",
            title: "First accounts of Germani",
            text: "",
            additional_notes: "",
            location: ""
        },
        {
            year_start: 260,
            year_end: "",
            title: "Emperor Valerian Captured by Iran",
            text: "Allegedly used as a footstool. Never returned to Rome",
            additional_notes: "",
            location: ""
        },
        {
            year_start: 272,
            year_end: "",
            title: "Shapur I",
            text: "King of Iran and Non-Iran",
            additional_notes: "Exploiting Roman weakness for profit",
            location: ""
        },
        {
            year_start: 283,
            year_end: "",
            title: "Year with 7 emperors",
            text: "",
            additional_notes: "",
            location: ""
        },
        {
            year_start: 311,
            year_end: "",
            title: "Diocletian Dies",
            text: "Known for stabilizing the military",
            additional_notes: "",
            location: ""
        },
        {
            year_start: 337,
            year_end: "",
            title: "Constantine Dies",
            text: "He moved the imperial capital to Byzantium, calls it Constantinople",
            additional_notes: "",
            location: ""
        },
        {
            year_start: 363,
            year_end: "",
            title: "Emperor Julian (comes to power?)",
            text: "Fails at invading Persia, dies, leaves behind political instability",
            additional_notes: "",
            location: ""
        },
        {
            year_start: 376,
            year_end: "",
            title: "Huns appear from the Black Sea",
            text: "",
            additional_notes: "",
            location: ""
        },
        {
            year_start: 378,
            year_end: "",
            title: "Battle of Adrianople",
            text: "Visigoth rebellion, major blow to imperial prestige and manpower",
            additional_notes: "",
            location: ""
        },
        {
            year_start: 394,
            year_end: "",
            title: "Alaric Defeats Gaul",
            text: "",
            additional_notes: "",
            location: ""
        },
        {
            year_start: 410,
            year_end: "",
            title: "Rome Removes Troops from Britain",
            text: "It's just not worth it",
            additional_notes: "",
            location: ""
        },
        {
            year_start: 423,
            year_end: "",
            title: "Valentinian III (takes throne?)",
            text: "Emperor at age 6, his regent is Boniface the military commander",
            additional_notes: "",
            location: ""
        },
        {
            year_start: 429,
            year_end: "",
            title: "Boniface Revolts",
            text: "Help from Vandal army",
            additional_notes: "",
            location: ""
        },
        {
            year_start: 451,
            year_end: "",
            title: "Battle of Châlons",
            text: "Attila the Hun loses to Rome",
            additional_notes: "The fall of the Huns empowers nearby enemies of Rome",
            location: ""
        },
        {
            year_start: 455,
            year_end: "",
            title: "Vandals Sack Rome",
            text: "Lasts 2 weeks",
            additional_notes: "",
            location: ""
        },
        {
            year_start: 475,
            year_end: "",
            title: "Julius Nepos at Dalmatia",
            text: [],
            additional_notes: "",
            location: ""
        },
        {
            year_start: 476,
            year_end: "",
            title: "Roman Empire Falls",
            text: "Rolulus Agustus deposed by Odoacer the barbarian",
            additional_notes: "",
            location: ""
        },
        {
            year_start: 480,
            year_end: "",
            title: "Odoacer Defeats Julius Nepos",
            text: "",
            additional_notes: "",
            location: ""
        },
        {
            year_start: 489,
            year_end: "",
            title: "Sidonius Apollinaris",
            text: "Bishop of Clermont in Gaul",
            additional_notes: "",
            location: ""
        },
        {
            year_start: 500,
            year_end: "",
            title: "Mosaic of German Kingdoms",
            text: "The scarf of the Roman Empire is shattered",
            additional_notes: "Approx date",
            location: ""
        },
        {
            year_start: 500,
            year_end: 1100,
            title: "Early Middle Ages",
            text: "New technologies (like the printing press) but peasant life doesn't drastically change",
            additional_notes: "",
            location: ""
        },
        {
            year_start: 516,
            year_end: "",
            title: "Rule of St Benedictine",
            text: "The rules for how to be a Good Monk are written. Originally for the monks at Monte Cassino",
            additional_notes: "",
            location: ""
        },
        {
            year_start: 527,
            year_end: 565,
            title: "Empire of Justinian",
            text: "Known for commisioning great buildings including the Hagia Sophia and the Basilica of San Vitale, as well as unifying civil law",
            additional_notes: "",
            location: ""
        },
        {
            year_start: 529,
            year_end: "",
            title: "Corpus Iuris Civilis",
            text: "Corpus of civil law is brought together under Justinian's rule",
            additional_notes: "",
            location: ""
        },
        {
            year_start: 534,
            year_end: "",
            title: "Theodora Tries to Take the West",
            text: "Theodora, the wife of Emperor Justinian, desires to retake the western part of the old Roman Empire. Empire defeats the Vandals in North Africa and Ostrogoths in Italy. Holds are brief.",
            additional_notes: "",
            location: ""
        },
        {
            year_start: 540,
            year_end: "",
            title: "Persians Sack Antich, Syria",
            text: "Break a treaty to do it.",
            additional_notes: "",
            location: ""
        },
        {
            year_start: 570,
            year_end: "",
            title: "Muhammad is Born",
            text: "Founder of Islam is born in Mecca.",
            additional_notes: "Approx date",
            location: ""
        },
        {
            year_start: 584,
            year_end: "",
            title: "Rigunth",
            text: "Daughter of Frankish King Chilperic sent with a grand dowery; tragedies upon tragedies; go home penniless to no father and a murderous mother",
            additional_notes: "",
            location: ""
        },
        {
            year_start: 610,
            year_end: "",
            title: "Muhammad Hears God",
            text: "He recieves the word of God and travels to Medina",
            additional_notes: "",
            location: ""
        },
        {
            year_start: 632,
            year_end: "",
            title: "Muhammad Dies",
            text: "What follows is a succession crisis which divides Islam into Sunni and Shi'ite muslims",
            additional_notes: "",
            location: ""
        },
        {
            year_start: 661,
            year_end: 750,
            title: "Umayyad Dynasty",
            text: "The capital is Damascus",
            additional_notes: "",
            location: ""
        },
        {
            year_start: 681,
            year_end: "",
            title: "Bulgars take Bulgarian Peninsula",
            text: "It wasn't called that at the time.",
            additional_notes: "",
            location: ""
        },
        {
            year_start: 700,
            year_end: "",
            title: "Lombards try to take Italy",
            text: "It's messy.",
            additional_notes: "Approx date",
            location: ""
        },
        {
            year_start: 751,
            year_end: "",
            title: "Pippin III Overthrows the King",
            text: "Known as \"the short\" and eventual father of Charlemagne, isn't content being the power behind the curtain, he wants the crown.",
            additional_notes: "",
            location: ""
        },
        {
            year_start: 771,
            year_end: "",
            title: "Charlemagne is King",
            text: "Known for his battle prowess",
            additional_notes: "",
            location: ""
        },
        {
            year_start: 774,
            year_end: "",
            title: "Charlemagne defeats the Lombard Kingdom",
            text: "",
            additional_notes: "",
            location: ""
        },
        {
            year_start: 796,
            year_end: "",
            title: "Offa",
            text: "Mercian King",
            additional_notes: "Controls several kingdoms at once",
            location: ""
        },
        {
            year_start: 800,
            year_end: "",
            title: "Pope Crowns Charlemagne Imperator",
            text: "Done in Rome on Christmas Day!",
            additional_notes: "",
            location: ""
        },
        {
            year_start: 801,
            year_end: "",
            title: "Charlemagne captures Barcelona",
            text: "",
            additional_notes: "",
            location: ""
        },
        {
            year_start: 822,
            year_end: 840,
            title: "Louis the Pious's Reign",
            text: "Known for performing public penance for the blinding and death of his rebellious nephew",
            additional_notes: "",
            location: ""
        },
        {
            year_start: 843,
            year_end: "",
            title: "Treaty of Verdun",
            text: "Settlement of Louis The Pious's heirs, empire split in thirds",
            additional_notes: "",
            location: ""
        },
        {
            year_start: 919,
            year_end: "",
            title: "Carolingian Empire Ends",
            text: "No more male heirs are left, power goes East to Henry of Saxony",
            additional_notes: "",
            location: ""
        },
        {
            year_start: 1000,
            year_end: "",
            title: "Althing Almost Converts",
            text: "Almost converted Iceland to christianity",
            additional_notes: "Approx date",
            location: ""
        },
        {
            year_start: 1100,
            year_end: 1347,
            title: "Central/High Middle Ages",
            text: "Reurbanization and population growth; ended by the black death",
            additional_notes: "",
            location: ""
        },
        {
            year_start: 1347,
            year_end: 1500,
            title: "Late Middle Ages",
            text: "People get weird in the wake of the Black Death (highly religious or hedonistic)",
            additional_notes: "",
            location: ""
        }
    ]);

    return(dates);
}

/*//import "../data/timeline.json";
//import {fs} from './fs/promises';

export const loadData = () => {
    const fs = require('fs');

    let fileContent = fs.readFileSync("../timeline.json", "utf8");
    //const unformatedData = require("../data/timeline.json");

    
    console.log(fileContent);
    //console.log("../data/timeline.json");
}
*/