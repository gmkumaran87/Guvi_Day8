const URL = "https://restcountries.eu/rest/v2/all";
let country = [];

const fetchCountries = async() => {
    try {
        const result = await fetch(URL);

        if (!result.ok) {
            throw new Error("Something went wrong!");
        }
        const data = await result.json();
        console.log(data);

        // Country with Population lesser than 2 lakhs

        const countryPopulation2L = data.filter((el) => {
            if (el.population < 200000) {
                return el.name;
            }
        });

        console.log(`Country`, countryPopulation2L);

        data.forEach((el) => {
            console.log(
                `Country Name - ${el.name}, Capital - ${el.capital}, Flag - ${el.flag}`
            );
            console.log("Currency -", el.currencies);
        });

        console.log("Total Population");

        const totalPopulation = data
            .map((el) => el.population)
            .reduce((a, b) => a + b);

        console.log("Total Population", totalPopulation);

        return data;
    } catch (error) {
        console.log(`Something went wrong... ${error}`);
    }
};

fetchCountries();

console.log(country);