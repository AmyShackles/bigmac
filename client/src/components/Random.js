import React from 'react';

const Random = ({countries, country, input, localPrice, localDollarPrice}) => {
    const [randomCountry, setRandomCountry] = React.useState({});
    const randomCountryDollarPrice = +randomCountry['Dollar price'];
    const conversion = input * localDollarPrice / randomCountryDollarPrice;
    const numBurgers = input / localPrice * localDollarPrice / randomCountryDollarPrice;
    React.useEffect(() => {
        countries = countries.filter(ctry => ctry['Country'] !== country['Country'])
        let maxIndexOfCountry = countries.length - 1;
        let randomNumber = Math.floor(Math.random() * maxIndexOfCountry);
        let randomCountry = countries[randomNumber];
        setRandomCountry(randomCountry);
    }, [country, countries])

        return (
        <div className="third">
        <p data-testid="random-country">Random Country: {randomCountry['Country']}</p>
        <p data-testid="random-country-burgers">You could buy {numBurgers} of Big Macs in {randomCountry['Country']}</p>
        <p data-testid="money-worth">Your {input} is worth about {conversion} in {randomCountry['Country']}</p>
        </div>
    )
}

export { Random }