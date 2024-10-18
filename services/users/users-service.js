const pool = require("../../config/dbConfig");

module.exports = {
    getAllUsers: (role) => {
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM users;`;
            pool.query(sql, [role], (error, result) => {
                if (error) {
                    return reject(error);
                }
                return resolve(result);
            })
        })
    },

    getUsersByUserId: (id) => {
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM users WHERE id = ?`;
            pool.query(sql, [id], (error, result) => {
                if (error) {
                    return reject(error);
                }
                return resolve(result);
            })
        })
    },

    createNewUser: (data, userId) => {
        const date = new Date();
        const { first_name, last_name, email, gender, imageurl, role, address, country, state, city, } = data;
        return new Promise((resolve, reject) => {
            const sql = `INSERT INTO users (id, userid, first_name, last_name, email, gender, imageurl, role, address, country, state, city, created_at, updated_at)
            VALUES (uuid(),?,?,?,?,?,?,?,?,?,?,?,?,?)`;
            pool.query(sql, [userId, first_name, last_name, email, gender, imageurl, role, address, country, state, city, date, date], (error, result) => {
                if (error) {
                    return reject(error);
                }
                return resolve(result);
            })
        })
    },

    updateUserByUserId: (data, id) => {
        const date = new Date();

        const { first_name, last_name, email, imageurl, role, gender, address, country, state, city } = data;
        return new Promise((resolve, reject) => {
            const sql = `UPDATE users SET first_name=?, last_name=?, email=?, imageurl=?, role=?, gender=?, address=?, country=?, state=?, city=?, updated_at=? WHERE id=?`;
            pool.query(sql, [first_name, last_name, email, imageurl, role, gender, address, country, state, city, date, id], (error, result) => {
                if (error) {
                    return reject(error);
                }
                return resolve(result);
            })
        })
    },

    deleteUserByUserId: (id) => {
        return new Promise((resolve, reject) => {
            const sql = `DELETE FROM users WHERE id = ?`;
            pool.query(sql, [id], (error, result, fields) => {
                if (error) {
                    return reject(error);
                }
                return resolve(result);
            })
        })
    },

    // get user by email
    getUserByEmail: (data) => {
        const sql = `select * from users where email=?`;
        return new Promise((resolve, reject) => {
            pool.query(sql, [data], (error, result, fields) => {
                if (error) {
                    return reject(error);
                }
                return resolve(result[0]);
            });
        });
    }
}