const pool = require("../../config/dbConfig");

const countries = async (req, res, next) => {
    try {
        const dbRequest = () => {
            return new Promise((resolve, reject) => {
                const sql = `SELECT * FROM sk_countries;`;
                pool.query(sql, (error, result, fields) => {
                    if (error) {
                        return reject(error);
                    }
                    return resolve(result);
                })
            })
        }

        const result = await dbRequest();
        res.json({
            success: true,
            message: 'Countries fetch success',
            data: result
        })
    } catch (error) {
        next(new Error(error))
    }
}

const states = async (req, res, next) => {
    try {
        const { id } = req.params;
        const dbRequest = () => {
            return new Promise((resolve, reject) => {
                const sql = `SELECT * FROM sk_states WHERE statecountryid = ${id};`;
                pool.query(sql, (error, result, fields) => {
                    if (error) {
                        return reject(error);
                    }
                    return resolve(result);
                })
            })
        }

        const result = await dbRequest();
        res.json({
            success: true,
            message: 'States fetch success',
            data: result
        })
    } catch (error) {
        next(new Error(error))
    }
}

const cities = async (req, res, next) => {
    try {
        const { id } = req.params;
        const dbRequest = () => {
            return new Promise((resolve, reject) => {
                const sql = `SELECT * FROM sk_cities WHERE citystateid = ${id};`;
                pool.query(sql, (error, result, fields) => {
                    if (error) {
                        return reject(error);
                    }
                    return resolve(result);
                })
            })
        }

        const result = await dbRequest();
        res.json({
            success: true,
            message: 'Cities fetch success',
            data: result
        })
    } catch (error) {
        next(new Error(error))
    }
}

module.exports = { countries, states, cities };