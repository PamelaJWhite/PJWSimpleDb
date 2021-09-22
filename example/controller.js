let db = require('./db')

/**{
* "word: "elephant"
* } 
*/
let addWord = function(req, res){
    //get the word from the request
    let word = req.body.word;

    //send the word as an insert statement to the database
    let sql = `INSERT INTO words(word) values ('${word}')`

    //this connection object/ variable is available only in the db.js file
    //require it at the beginning
    db.query(sql, function(error, rows){
        //return a response of 500 if the query fails
        if (error){
            console.log("I FAILED to add to database", error)
            res.sendStatus(500);
        } else {
            res.sendStatus(204)
        }
    })
}

//GET
let getWords = function(req, res){
    //issue the query: SELECT word FROM words
    let sql = "SELECT * FROM words"

    // and process the results
    db.query(sql, function(error, rows){
        //if there is an error, respnd back with 500 on the response
        if (error){
            console.log("I FAILED to add to database", error)
            res.sendStatus(500);
        //if there is no error
        } else {
            //0. instantiate an empty array
            console.log("Hey hey! Look! We successfully GET something")
            let array = []
            // 1. loop through the resutls of the query
                //how does it come back? as an array of objects 
            let createWordArray = rows.map(function createWordArray(element){
                // 2. add every word that comes back to an array
                array.push(element.word)
                console.log(array)
            })
           // 3. send the array back on the response 
            res.json(array)
        }
    })
}




    
    
    
    

module.exports = {
addWord,
getWords
}

//-- we want whatever the user inputs to show up where elephant is
//-- INSERT INTO words (word) values ('elephant');