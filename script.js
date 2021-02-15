let amzius = 29;
let vardas = 'Daiva';
let hobis = 'bėgimas';
console.log(`Mano vardas ${vardas}, man ${amzius} metai. Mano hobis yra ${hobis}.`);

let gimimoMetai = 1991;
let metaiAteityje = 2025;
let kiekBusMetu = metaiAteityje - gimimoMetai;
console.log(`${metaiAteityje} metais man bus ${kiekBusMetu} arba ${kiekBusMetu - 1} metai/metų.`);

let skersmuo = 14;
let spindulys = skersmuo / 2;
let plotas = Math.PI * (spindulys * spindulys);
let perimetras = 2 * Math.PI * spindulys;
console.log(`Apskritimo kurio skersmuo yra ${skersmuo}, plotas ${plotas.toFixed(2)}`);

let celsijus = 23;
let farenheitas = 9 / 5 * celsijus + 32;
console.log(`${celsijus} °C yra ${farenheitas} °F.`);

let kintamasis = 'Mes kalbame mažai, jeigu nekalbame apie save.';
console.log(kintamasis);
let ilgis = kintamasis.length;
console.log(ilgis);
let didziosios = kintamasis.toUpperCase();
console.log(didziosios);
let panaikinti = kintamasis.replace(' apie save', '');
console.log(panaikinti);
let naujasKintamasis = kintamasis.split(' ');
console.log(naujasKintamasis);
let skaitineReiksme = kintamasis.indexOf('mažai');
console.log(skaitineReiksme);
let pakeistiZodi = kintamasis.replace('kalbame', 'šnekame');
console.log(pakeistiZodi);

let sakinys = 'laBa8s rYta56s, lIEtuva';
console.log(sakinys);
sakinys = sakinys.replace('8', '');
sakinys = sakinys.replace('56', '');
console.log(sakinys);
sakinys = sakinys.toLowerCase();
console.log(sakinys);
sakinys = sakinys.replace('labas', 'Labas');
sakinys = sakinys.replace('lietuva', 'Lietuva');
console.log(sakinys);


let darzoves = ['agurkas', 'pomidoras', 'cukinija', 'moliūgas', 'paprika', 'bulvės', 'morkos', 'ropė', 'salieras', 'kukurūzas'];
console.log(darzoves);
darzoves.pop();
console.log(darzoves);
darzoves.shift();
console.log(darzoves);
darzoves[4] = 'new';
console.log(darzoves);
let naujasMasyvas = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(naujasMasyvas);
let sujungtas = naujasMasyvas.concat(darzoves);
console.log(sujungtas);
let konvertuotas = sujungtas.join(', ');
console.log(konvertuotas);

let mokiniai = [
    {
        vardas: 'Martynas',
        pavarde: 'Lubys',
        amzius: 17,
        pazymiuVidurkis: 4.5,
        stipendija: false
    },
    {
        vardas: 'Alina',
        pavarde: 'Alijeva',
        amzius: 19,
        pazymiuVidurkis: 9,
        stipendija: true
    },
    {
        vardas: 'Kazimieras',
        pavarde: 'Bakštys',
        amzius: 17,
        pazymiuVidurkis: 9.3,
        stipendija: true
    },
    {
        vardas: 'Algimantas',
        pavarde: 'Peraitis',
        amzius: 16,
        pazymiuVidurkis: 6.5,
        stipendija: true
    },
    {
        vardas: 'Kotryna',
        pavarde: 'Petraitytė',
        amzius: 16,
        pazymiuVidurkis: 4,
        stipendija: false
    }
];
console.log(mokiniai);

console.log(mokiniai[1].amzius);
console.log(mokiniai[3].pazymiuVidurkis);
console.log(mokiniai[0]);



