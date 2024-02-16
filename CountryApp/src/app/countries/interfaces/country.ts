export interface Country {
    name: name;
    callingCodes: string[];
    cca3:string;
    capital: string;
    region: string;
    subregion: string;
    population: number;
    timezones:string;
    maps:Maps;
    translations: Translations;
    flags: flags;
}

export interface name {
    common:string,
}
export interface Maps{
    googleMaps:string
}

export interface Translations {
    ara: {
        common:string
    };
    por: {
        common:string
    };
    rus: {
        common:string
    };
    spa: {
        common:string
    };
    deu:{
        common:string
    };
    fra:{
        common:string
    };
    ita:{
        common:string
    };
    jpn:{
        common:string
    };
    pol:{
        common:string
    };
    tur:{
        common:string
    };

}


export interface flags{
    svg:string;
    png:string;
}
