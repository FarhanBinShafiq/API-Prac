const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=3')
        .then(res => res.json())
        .then(data => displayBuddie(data))
}

loadBuddies();

const displayBuddie = data => {
    const buddies = data.results;


    const buddyDiv = document.getElementById('buddies');

    for (const buddy of buddies) {


        const p = document.createElement('p');
        p.innerText = `Name:${buddy.name.first}     Email:${buddy.email}`
        buddyDiv.appendChild(p);
    }

}