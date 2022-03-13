"use strict";
class Norway {
    constructor(name, population, lang, Capital) {
        this.name = name;
        this.population = population;
        this.lang = lang;
        this.Capital = Capital;
    }
}
;
const NorwayData = new Norway('Norway', 9, ['Norwegian'], 'Oslo');
class France {
    constructor(name, population, lang) {
        this.name = name;
        this.population = population;
        this.lang = lang;
    }
}
;
const FranceData = new France('France', 70, ['Français']);
class Aquitaine extends France {
}
;
const AquitaineData = new Aquitaine('Aquitaine', 4, ['L\'aquitain']);
