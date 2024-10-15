/* 
Para instalar el conector de MYSQL to JS
en el directorio que queramos ingresamos npm install mysql2
*/
// Y además aqui debajo habra que meter este codigo siempre


const mysql = require('mysql2')


// Create a connection object
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'raul',
    password: 'student2024',
    database: 'your_database'
})

// Connect to the detabase
connection.connect((err) => {
    if (err){
        console.error('Error conecting: ' + err.stack)
        return
    }
    console.log('Connected as id: ' + connection.threadId)
})


/*

// Execute a query
connection.query('SELECT DATABASE();', (error, results, fields) => {
    if (error) throw error('This is an error')
    console.log('Connected to database: ', results[0]['DATABASE()'])
})


// CLose the connection
connection.end();

*/