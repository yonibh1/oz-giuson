const db=require("mysql");

const pool=db.createPool({
    host: "localhost",
    user: "root",
    database: "giusonmanagement"
});

function executeQueryAsync(sqlCmd,value) {
    return new Promise((resolve, reject) => {
        pool.query(sqlCmd,value, (err, rows)=> {
            if (err) {
            
                reject(err);
            }
            else {
                
                resolve(rows);
            }
        });
    });
}

module.exports = {
    executeQueryAsync
};