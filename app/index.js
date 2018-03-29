const express    = require('express');
const Blockchain = require('../blockchain');

const HTTP_PORT = process.env.HTTP_PORT||3001;			// while running we can use HTTP_PORT:3000 npm run dev
const app = express();
const bc  = new Blockchain();

app.get('/block', (req, res) => {
	res.json(bc.chain);
});

app.listen(HTTP_PORT, () => console.log(`listening to port ${HTTP_PORT}`));