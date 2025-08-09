
//Questo oggetto countryCodes serve a mappare un codice valuta (es. "USD") al codice del paese corrispondente (es. "US")
const countryCodes = {
    AED: "AE", // Emirati Arabi Uniti - Dirham
    AFN: "AF", // Afghanistan - Afghani
    ALL: "AL", // Albania - Lek
    AMD: "AM", // Armenia - Dram
    ANG: "CW", // Antille Olandesi - Fiorino (Curaçao)
    AOA: "AO", // Angola - Kwanza
    ARS: "AR", // Argentina - Peso
    AUD: "AU", // Australia - Dollaro
    AWG: "AW", // Aruba - Fiorino
    AZN: "AZ", // Azerbaijan - Manat
    BAM: "BA", // Bosnia ed Erzegovina - Marco convertibile
    BBD: "BB", // Barbados - Dollaro
    BDT: "BD", // Bangladesh - Taka
    BGN: "BG", // Bulgaria - Lev
    BHD: "BH", // Bahrain - Dinaro
    BIF: "BI", // Burundi - Franco
    BMD: "BM", // Bermuda - Dollaro
    BND: "BN", // Brunei - Dollaro
    BOB: "BO", // Bolivia - Boliviano
    BRL: "BR", // Brasile - Real
    BSD: "BS", // Bahamas - Dollaro
    BTN: "BT", // Bhutan - Ngultrum
    BWP: "BW", // Botswana - Pula
    BYN: "BY", // Bielorussia - Rublo
    BZD: "BZ", // Belize - Dollaro
    CAD: "CA", // Canada - Dollaro
    CDF: "CD", // Congo - Franco
    CHF: "CH", // Svizzera - Franco
    CLP: "CL", // Cile - Peso
    CNY: "CN", // Cina - Renminbi/Yuan
    COP: "CO", // Colombia - Peso
    CRC: "CR", // Costa Rica - Colón
    CUP: "CU", // Cuba - Peso
    CVE: "CV", // Capo Verde - Escudo
    CZK: "CZ", // Repubblica Ceca - Corona
    DJF: "DJ", // Gibuti - Franco
    DKK: "DK", // Danimarca - Corona
    DOP: "DO", // Repubblica Dominicana - Peso
    DZD: "DZ", // Algeria - Dinaro
    EGP: "EG", // Egitto - Sterlina
    ERN: "ER", // Eritrea - Nakfa
    ETB: "ET", // Etiopia - Birr
    EUR: "EU", // Unione Europea - Euro (codice speciale EU)
    FJD: "FJ", // Figi - Dollaro
    FKP: "FK", // Isole Falkland - Sterlina
    GBP: "GB", // Regno Unito - Sterlina
    GEL: "GE", // Georgia - Lari
    GGP: "GG", // Guernsey - Sterlina
    GHS: "GH", // Ghana - Cedi
    GIP: "GI", // Gibilterra - Sterlina
    GMD: "GM", // Gambia - Dalasi
    GNF: "GN", // Guinea - Franco
    GTQ: "GT", // Guatemala - Quetzal
    GYD: "GY", // Guyana - Dollaro
    HKD: "HK", // Hong Kong - Dollaro
    HNL: "HN", // Honduras - Lempira
    HRK: "HR", // Croazia - Kuna
    HTG: "HT", // Haiti - Gourde
    HUF: "HU", // Ungheria - Fiorino
    IDR: "ID", // Indonesia - Rupia
    ILS: "IL", // Israele - Nuovo shekel
    IMP: "IM", // Isola di Man - Sterlina
    INR: "IN", // India - Rupia
    IQD: "IQ", // Iraq - Dinaro
    IRR: "IR", // Iran - Rial
    ISK: "IS", // Islanda - Corona
    JEP: "JE", // Jersey - Sterlina
    JMD: "JM", // Giamaica - Dollaro
    JOD: "JO", // Giordania - Dinaro
    JPY: "JP", // Giappone - Yen
    KES: "KE", // Kenya - Scellino
    KGS: "KG", // Kirghizistan - Som
    KHR: "KH", // Cambogia - Riel
    KID: "KI", // Kiribati - Dollaro
    KMF: "KM", // Comore - Franco
    KPW: "KP", // Corea del Nord - Won
    KRW: "KR", // Corea del Sud - Won
    KWD: "KW", // Kuwait - Dinaro
    KYD: "KY", // Isole Cayman - Dollaro
    KZT: "KZ", // Kazakistan - Tenge
    LAK: "LA", // Laos - Kip
    LBP: "LB", // Libano - Sterlina
    LKR: "LK", // Sri Lanka - Rupia
    LRD: "LR", // Liberia - Dollaro
    LSL: "LS", // Lesotho - Loti
    LYD: "LY", // Libia - Dinaro
    MAD: "MA", // Marocco - Dirham
    MDL: "MD", // Moldavia - Leu
    MGA: "MG", // Madagascar - Ariary
    MKD: "MK", // Macedonia del Nord - Denar
    MMK: "MM", // Myanmar - Kyat
    MNT: "MN", // Mongolia - Tugrik
    MOP: "MO", // Macao - Pataca
    MRU: "MR", // Mauritania - Ouguiya
    MUR: "MU", // Mauritius - Rupia
    MVR: "MV", // Maldive - Rufiyaa
    MWK: "MW", // Malawi - Kwacha
    MXN: "MX", // Messico - Peso
    MYR: "MY", // Malaysia - Ringgit
    MZN: "MZ", // Mozambico - Metical
    NAD: "NA", // Namibia - Dollaro
    NGN: "NG", // Nigeria - Naira
    NIO: "NI", // Nicaragua - Córdoba
    NOK: "NO", // Norvegia - Corona
    NPR: "NP", // Nepal - Rupia
    NZD: "NZ", // Nuova Zelanda - Dollaro
    OMR: "OM", // Oman - Rial
    PAB: "PA", // Panama - Balboa
    PEN: "PE", // Perù - Sol
    PGK: "PG", // Papua Nuova Guinea - Kina
    PHP: "PH", // Filippine - Peso
    PKR: "PK", // Pakistan - Rupia
    PLN: "PL", // Polonia - Złoty
    PYG: "PY", // Paraguay - Guaraní
    QAR: "QA", // Qatar - Riyal
    RON: "RO", // Romania - Leu
    RSD: "RS", // Serbia - Dinaro
    RUB: "RU", // Russia - Rublo
    RWF: "RW", // Ruanda - Franco
    SAR: "SA", // Arabia Saudita - Riyal
    SBD: "SB", // Isole Salomone - Dollaro
    SCR: "SC", // Seychelles - Rupia
    SDG: "SD", // Sudan - Sterlina
    SEK: "SE", // Svezia - Corona
    SGD: "SG", // Singapore - Dollaro
    SHP: "SH", // Sant'Elena - Sterlina
    SLL: "SL", // Sierra Leone - Leone
    SOS: "SO", // Somalia - Scellino
    SRD: "SR", // Suriname - Dollaro
    SSP: "SS", // Sudan del Sud - Sterlina
    STN: "ST", // São Tomé e Príncipe - Dobra
    SVC: "SV", // El Salvador - Colón
    SYP: "SY", // Siria - Sterlina
    SZL: "SZ", // eSwatini - Lilangeni
    THB: "TH", // Thailandia - Baht
    TJS: "TJ", // Tagikistan - Somoni
    TMT: "TM", // Turkmenistan - Manat
    TND: "TN", // Tunisia - Dinaro
    TOP: "TO", // Tonga - Pa'anga
    TRY: "TR", // Turchia - Lira
    TTD: "TT", // Trinidad e Tobago - Dollaro
    TWD: "TW", // Taiwan - Dollaro
    TZS: "TZ", // Tanzania - Scellino
    UAH: "UA", // Ucraina - Grivnia
    UGX: "UG", // Uganda - Scellino
    USD: "US", // Stati Uniti - Dollaro
    UYU: "UY", // Uruguay - Peso
    UZS: "UZ", // Uzbekistan - Sum
    VES: "VE", // Venezuela - Bolívar
    VND: "VN", // Vietnam - Đồng
    VUV: "VU", // Vanuatu - Vatu
    WST: "WS", // Samoa - Tala
    XAF: "CM", // Africa Centrale - Franco (Camerun rappresentativo)
    XCD: "AG", // Caraibi Orientali - Dollaro (Antigua e Barbuda rappresentativo)
    XOF: "SN", // Africa Occidentale - Franco (Senegal rappresentativo)
    XPF: "PF", // Polinesia Francese - Franco (Polinesia Francese)
    YER: "YE", // Yemen - Rial
    ZAR: "ZA", // Sudafrica - Rand
    ZMW: "ZM", // Zambia - Kwacha
    ZWL: "ZW"  // Zimbabwe - Dollaro
};


// 1. SELEZIONE ELEMENTI HTML
// Seleziona tutte le dropdown (select) con classe "drop-list"
const dropList = document.querySelectorAll(".drop-list select");
const getButton = document.querySelector("#converterForm button"); // Usa ID
const fromCurrency = document.querySelector(".from select"); // DA (corretto)
const toCurrency = document.querySelector(".to select");     // A (corretto)

// 2. POPOLAMENTO DROPDOWN
// Per ogni elemento <select> nella lista (presumibilmente 2: "da" e "a")
dropList.forEach(element => {
    // Itera su tutte le valute nell'oggetto countryCodes
    for (const currency_code in countryCodes) {
        if (countryCodes.hasOwnProperty(currency_code)) {
            // Crea nuovo elemento <option>
            const optionElement = document.createElement('option')
            optionElement.value = currency_code  // Imposta valore (es. "USD")
            optionElement.textContent = currency_code  // Testo visibile (es. "USD")
            element.appendChild(optionElement)  // Aggiungi alla dropdown
        }
    }
    
    // 3. GESTIONE CAMBIO VALUTA
    // Quando si cambia selezione, aggiorna la bandiera corrispondente
    element.addEventListener("change", e => {
        loadFlag(e.target)  // e.target = select modificato
    })
})

// 4. AGGIORNAMENTO BANDIERA
function loadFlag(element) {
    for(code in countryCodes) {
        if(code == element.value) {
            // Trova l'immagine nel genitore comune (presumibilmente un div con classe "select-box")
            let imgTag = element.parentElement.querySelector("img")
            // Costruisci URL bandiera usando il codice paese (es. US per USD)
            imgTag.src = `https://flagsapi.com/${countryCodes[code].toUpperCase()}/flat/64.png`
        }
    }
}

// 5. CALCOLO TASSO DI CAMBIO
getButton.addEventListener("click", e => {
    e.preventDefault();
    getExchangeRate();
});

// Caricamento iniziale bandiere
window.addEventListener("DOMContentLoaded", () => {
    loadFlag(fromCurrency);
    loadFlag(toCurrency);
});

function getExchangeRate() {
    const amount = document.querySelector(".amount input")
    let amountVal = amount.value
    
    // Gestione valore mancante o zero:
    if(amountVal == "" || amountVal == "0") {
        amount.value = "1"  // Imposta valore di default
        amountVal = 1       // Usa 1 per i calcoli
    }
    
    // Costruzione URL API con valuta selezionata
    let url = `https://v6.exchangerate-api.com/v6/43f2536267740f708f083649/latest/${fromCurrency.value}`
    
    // Fetch dati API
    fetch(url)
    .then(response => response.json())
    .then(data => {
        // Estrai tasso di conversione specifico per valuta destinazione
        let exchangeRate = data.conversion_rates[toCurrency.value]
        // Calcola importo convertito con 2 decimali
        let totalExchangeRate = (amountVal * exchangeRate).toFixed(2)
        
        // Seleziona elemento di output
        const exchangeRateTxt = document.querySelector(".exchange-rate")
        // Costruisci stringa risultato (es. "1 EUR = 1.07 USD")
        exchangeRateTxt.innerText = `${amountVal} ${fromCurrency.value} = ${totalExchangeRate} ${toCurrency.value}`
    })
}

// 6. SCAMBIO VALUTE
const exchangeIcon = document.querySelector(".icon")
exchangeIcon.addEventListener("click", () => {
    // Scambia le valute usando variabile temporanea
    let tempCode = fromCurrency.value
    fromCurrency.value = toCurrency.value
    toCurrency.value = tempCode
    
    // Aggiorna bandiere
    loadFlag(fromCurrency)
    loadFlag(toCurrency)
    
    // Ricalcola tasso
    getExchangeRate()
})