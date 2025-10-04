const express = require('express');
const app = express();
app.use(express.json());
app.get('/', (req, res) => res.send('BNPL Demo API Running'));
app.listen(5000, () => console.log('Server running on port 5000'));