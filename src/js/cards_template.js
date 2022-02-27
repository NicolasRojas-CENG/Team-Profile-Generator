var num = 0;
generateCards = templateData => {
    //console.log(templateData);
 const answer = loop(templateData);
        return`
        ${answer}
        `}
    // })


function loop  (array) {
    var returnAnswer = "";
    array.forEach(element => {
        num++;
        var special = "";
        switch (element.getRole()) {
            case "Intern":
                special = `School: ${element.getSchool()}`;
                break;
            case "Engineer":
                special = `GetHub: <a class="text-reset" href="https://github.com/${element.getGethub()}">${element.getGethub()}</a>`;
                 break;
            case "Manager":
                special = `Office Number: ${element.getOfficeNumber()}`;
                break;
        }
        returnAnswer = returnAnswer + `
        <article class="col-12 col-md-6 col-lg-4">
        <div class="card bg-dark text-white border-warning">
                <div class="card-body">
                    <h2 class="card-title text-center">Member ${num} </h2>
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item bg-dark">Name: ${element.getName()}</li>
                <li class="list-group-item bg-dark">Role: ${element.getRole()}</li>
                <li class="list-group-item bg-dark">Email: <a class="text-reset" href="mailto:${element.getEmail()}"> ${element.getEmail()}</a></li>
                <li class="list-group-item bg-dark">${special}</li>
                </ul>
            </div>
        </article>`
    });
    return returnAnswer;
}

module.exports = generateCards;