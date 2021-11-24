const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}

loadCountries();


const displayCountries = counties => {
    const countriesDiv = document.getElementById('countries');

    counties.forEach(country => {


        //console.log(country);


        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const div = document.createElement('div');
        //Css
        div.classList.add('country')

        //h3.innerText = country.name.common;
        //div.appendChild(h3);
        //p.innerText = country.capital;
        //div.appendChild(p)

        div.innerHTML = `
        <h3>${country.name.common}</h3>
        <p>${country.capital}</p>
        <button onclick="loadCountryByName('${country.name.common}')">Detelis</button>
        `


        countriesDiv.appendChild(div);
    });


}


const loadCountryByName = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data[0]));
}