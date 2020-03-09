class Cities {
    constructor(id, city, city_ascii, lat, lng, country, iso2, is03, admin_name, capital, population) {
        this.id = id;
        this.city = city;
        this.city_ascii = city_ascii;
        this.lat = lat;
        this.lng = lng;
        this.country = country;
        this.iso2 = iso2;
        this.is03 = is03;
        this.admin_name = admin_name;
        this.capital = capital;
        this.population = population;
    }
}
module.exports = Cities;
