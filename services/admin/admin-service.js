const pool = require("../../config/dbConfig");

module.exports = {

    // Create a new admin
    createNewAdmin: (data) => {
        const date = new Date();
        const { first_name, last_name, email, password, imageurl } = data;
        const sql = 'insert into admins (id, first_name, last_name, email, password, imageurl, created_at) values(uuid(),?,?,?,?,?,?)';
        return new Promise((resolve, reject) => {
            pool.query(sql, [first_name, last_name, email, password, imageurl, date], (error, result, fields) => {
                if (error) {
                    return reject(error)
                }
                return resolve(result)
            })
        })
    },

    getAllAdmins: () => {
        const sql = `select * from admins;`;
        return new Promise((resolve, reject) => {
            pool.query(sql, (error, result, fields) => {
                if (error) {
                    return reject(error);
                }
                return resolve(result);
            });
        });
    },

    // get User by email for admin login
    getAdminByAdminId: (id) => {
        const sql = `select * from admins where id=?`;
        return new Promise((resolve, reject) => {
            pool.query(sql, [id], (error, result, fields) => {
                if (error) {
                    return reject(error);
                }
                return resolve(result[0]);
            });
        });
    },

    // get User by email for admin login
    getAdminUserByEmail: (data) => {
        const sql = `select * from admins where email=?`;
        return new Promise((resolve, reject) => {
            pool.query(sql, [data], (error, result, fields) => {
                if (error) {
                    return reject(error);
                }
                return resolve(result[0]);
            });
        });
    },
};
