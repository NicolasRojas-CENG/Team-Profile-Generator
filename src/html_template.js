//Importing different functions from other files.
// const {generateTable} = require('./table_template');
// const {generateBody} = require('./body_template');
// const {generateBadge} = require('./license_template');
const writeFile = require('./generateSite');
const generateCards = require('./cards_template');

//Function used to populate the README, while exporting it at the same time.
module.exports = templateData => {
  // return `${templateData.forEach(element => {
     console.log(templateData);
  // })}`;
  const content = `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
    <title>Team Profile</title>
</head>
<body class="bg-secondary">
    <header class="bg-warning text-center py-3">
      <h1>Team Profile</h1>
    </header>
    <section class="d-flex card-deck mt-5 px-3">
      ${generateCards(templateData)}
    </section>
</body>
</html>
  `;
  writeFile(content) ? console.log("File created!") : console.log("Something went wrong!")
  //return ;
};