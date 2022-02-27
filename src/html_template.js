//Importing different functions from other files.
const writeFile = require('./generateSite');
const generateCards = require('./cards_template');

//Function used to populate the README, while exporting it at the same time.
module.exports = templateData => {
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
  <body class="bg-secondary text-center">
      <header class="bg-warning py-3">
        <h1>Team Profile</h1>
      </header>
    <section class="card-deck mt-5 row">
      ${generateCards(templateData)}
    </section>
</body>
</html>
  `;
  writeFile(content) ? console.log("File created!") : console.log("Something went wrong!")
};