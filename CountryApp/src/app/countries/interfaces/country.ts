export interface Country {
    name: name;
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
    ara: string;
    por: string;
    rus: string;
    spa: string;
    deu: string;
    fra: string;
    ita: string;
    jpn: string;
    pol: string;
    tur: string;
}


export interface flags{
    svg:string;
    png:string;
}
