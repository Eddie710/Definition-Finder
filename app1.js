const https = require("https");

function getDef(term) {
    try{
        //request data
        const request = https.get(
            `https://dictionaryapi.com/api/v3/references/collegiate/json/${term}?key=95beb28b-9111-41ff-8cf1-d1a89b01d953`,
            (response) => {
                let body = "";
                //Read the data
                response.on("data", (data) => {
                    body += data.toString();
                });

                response.on("end", () => {
                    //parse the data
                    const definition = JSON.parse(body);
                    //Print data
                    console.log(definition[0].shortdef)
                })
            }
        );
        request.on("error", (error) => console.error(error.message));
    } catch (error) {
        console.error(error.message)
    }
}
const query = process.argv.slice(2);
query.forEach(getDef);