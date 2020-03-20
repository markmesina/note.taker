const path = require('path');


module.exports = {
    getHome: (req,res) => {
        console.log(__dirname);

        res.sendFile(path.join(__dirname, "..", "public", 'index.html'))
    },
    getNotes: (req,res) => {

        res.sendFile(path.join(__dirname,'../public','notes.html'))

    },
}