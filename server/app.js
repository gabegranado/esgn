import express from 'express';
import cors from 'cors';

const PORT = 4000;
const app = express();

app.use(cors());

app.get('/', (req, res) => {
    console.log("get test res")
    res.json([
        {
            "test": "test"
        }
    ])
})

app.listen(PORT, function() {
    console.log('running the server on port ' + PORT);
});