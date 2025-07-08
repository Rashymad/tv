const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static('.'));
app.use('/css', express.static('css'));
app.use('/pages', express.static('pages'));
app.use('/public', express.static('public'));

// Route for root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Route for pages
app.get('/pages/:page', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', req.params.page));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});