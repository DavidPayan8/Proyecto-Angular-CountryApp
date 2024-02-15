export interface Country {
    name: name;
    alpha2Code: string;
    alpha3Code: string;
    callingCodes: string[];
    cca3:string;
    capital: string;
    altSpellings: string[];
    region: string;
    subregion: string;
    population: number;
    nativeName: string;
    numericCode: string;
    currencies: Currency[];
    languages: Language[];
    translations: Translations;
    flags: flags;
}

export interface name {
    common:string,
}

export interface Currency {
    code: string;
    name: string;
    symbol: string;
}

export interface Language {
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
}


export interface Translations {
    de: string;
    es: string;
    fr: string;
    ja: string;
    it: string;
    br: string;
    pt: string;
    nl: string;
    hr: string;
    fa: string;
}


export interface flags{
    svg:string;
}
