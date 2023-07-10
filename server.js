const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000
app.use(express.json())

// let data = {
//     entries: []
// };

let coinsData = require(`./ex.json`)
let newsData = require(`./news.json`)

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})

// Enable CORS for all routes
app.use(cors())

app.get('/coins', (req, res) => {
  res.json(coinsData)
})

app.get('/news', (req, res) => {
  res.json(newsData)
})

// app.use(express.urlencoded({ extended: true }))

// app.post('/submit-form', (req, res) => {
//     const { name, email, comment } = req.body;

//     // Add a new entry to the data object
//     data.entries.push({
//         name: name,
//         email: email,
//         comment: comment
//     });

//     console.log(`Received form submission: name=${name}, email=${email}, comment=${comment}`)
//     res.send('Form submitted successfully!')
// });
