const MySqli = require('mysqli');

let conn = new MySqli({
    Host: 'localhost',
    post: 3306,
    user: 'root',
    passwd: 'Februar19',
    db: 'cars'
});

let db = conn.emit(false, '');

module.exports = {
    database : db
};