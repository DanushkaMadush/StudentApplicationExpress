const express =  require ('express');
const app = express();
const mongoose = require ('mongoose');



app.get('/' , (req , res) => {
    res.send('Hi');
});

mongoose.connect("mongodb://localhost:27017/StudentApplication").then(() => {
    console.log("Connected to DB");
    app.listen(3000 , () => {
        console.log('Server is running on port 3000');
    });
})
.catch(() => {
    console.log('DB error');
});