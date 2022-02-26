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
        switch (element.role) {
            case "Intern":
                special = `School: ${element.school}`
                break;
            case "Engineer":
                special = `GitHub: ${element.github}`
                 break;
            default:
                special = `Office Number: ${element.office}`
                break;
        }
        returnAnswer = returnAnswer + `
        <article class="col-12 col-md-6 col-lg-4">
        <div class="card bg-dark text-white border-warning">
                <div class="card-body">
                    <h2 class="card-title text-center">Member ${num} </h2>
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item bg-dark">Name: ${element.employee}</li>
                <li class="list-group-item bg-dark">Role: ${element.role}</li>
                <li class="list-group-item bg-dark">Email: <a href="mailto:${element.email}"> ${element.email}</a></li>
                <li class="list-group-item bg-dark">${special}</li>
                </ul>
            </div>
        </article>`
    });
    return returnAnswer;
}

module.exports = generateCards;