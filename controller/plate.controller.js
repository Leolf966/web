const db = require("../db");

class PlateController{
        async createTable() {
                await db.query(`
                    CREATE TABLE IF NOT EXISTS plate (
                        id SERIAL PRIMARY KEY,
                        material VARCHAR(255) NOT NULL,
                        color VARCHAR(255) NOT NULL,
                        diameter NUMERIC NOT NULL,
                        capacity NUMERIC NOT NULL
            )
        `);
        console.log('Table created successfully');
    }
    async createPlate(req, res) {
            const plateController = new PlateController(); 
            await plateController.createTable();
            const {material, color, diameter, capacity} = req.body;

        const newPlate = await db.query(
            `INSERT INTO plate (material, color, diameter, capacity) VALUES
            ($1, $2, $3, $4) RETURNING *`, 
            [material, color, diameter, capacity]
        );

        const responce = await db.query(`SELECT * FROM plate`);
        res.json(responce.rows);
    }
    async getAllPlate(req, res) {
        const allPlates = await db.query(`SELECT * FROM plate`);
        res.json(allPlates.rows);
    }

    async getOnePlate(req, res){
        const id = req.params.id;
        const onePlate = await db.query(
            `SELECT * FROM plate WHERE plate.id=$1`,
            [id]
        );
        res.json(onePlate.rows[0]);
    }
    async getSortedPlate(req, res){
        const sortedPlates = await db.query(
            `SELECT * FROM plate ORDER BY diameter `
        );
        res.json(sortedPlates.rows)
    }
    async updatePlate(req, res){
        const {id,material, color, diameter, capacity} = req.body;
        const updatePlate = await db.query(
            `UPDATE plate SET material = $1, color = $2, diameter = $3, capacity = $4 WHERE id= $5 RETURNING *`,
            [material, color, diameter, capacity, id]
        );
        res.json(updatePlate.rows[0]);
    }
    async deletePlate(req, res){
        const id = req.params.id;
        const deletePlate = await db.query(
            `DELETE FROM plate WHERE plate.id = $1`,
            [id]
        );
        res.json(deletePlate.rows[0]);
    }
}

module.exports = new PlateController();  