function loadUser() {
    fetch('https://randomuser.me/api/1.3/')
        .then(response => response.json())
        .then(data => userSection(data))
};

loadUser();



function userSection(data) {

    const randomUser = document.getElementById('random-user');


    for (const user of Object.keys(data)) {


        const div = document.createElement('div');
        div.innerHTML = `
        <h3>'${data.results.gender}'</h3>
        `

        randomUser.appendChild(div);
        console.log(data);


    }

}