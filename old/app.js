const express = require('express');

const app = express()
const PORT = 8000

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/login', (req, res) => {
  res.send('Login route 🎉 ')
})

app.get('/about', (req, res) => {
  res.send('About route 🎉 ')
})

app.get('/contact', (req, res) => {
  res.send('Contact route 🎉 ')
})

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
})