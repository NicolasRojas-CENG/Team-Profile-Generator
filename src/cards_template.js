// var num = 0;
generateCards = templateData => {
    console.log(templateData);
    for (let index = 0; index < templateData.length; index++) {


    // templateData.forEach(element => {
        // num++;
        // var special = "";
        // switch (element.role) {
        //     case "Intern":
        //         special = `School: ${element.school}`
        //         break;
        //     case "Engineer":
        //         special = `GitHub: ${element.github}`
        //          break;
        //     default:
        //         special = `Office Number: ${element.office}`
        //         break;
        // }
        return`
        <p>
        ${templateData[index].employee}
        </p>
        `}
    // })
}

module.exports = generateCards;

// <div class="card bg-dark text-white border-warning" style="width: 18rem;">
        //     <div class="card-body">
        //         <h2 class="card-title text-center">Member ${num} </h2>
        //     </div>
        //     <ul class="list-group list-group-flush">
        //     <li class="list-group-item bg-dark">Name: ${element.employee}</li>
        //     <li class="list-group-item bg-dark">Role: ${element.role}</li>
        //     <li class="list-group-item bg-dark">Email: ${element.email} </li>
        //     <li class="list-group-item bg-dark">${special}</li>
        //     </ul>
        // </div>