const dbPool = require('../config/database');
// Lệnh query: kết quả trả về là 2 mảng: rows (dữ liệu truy vấn được) và fields (metadata)
/* Đối với câu SELECT:
+ rows: mảng chứa các object đại diện cho dòng dữ liệu
*/

/* Đối với câu INSERT:
+ rows: là object ResultSetHeader chứa các thông tin quan trọng như insertId và affectedRows
*/

/* Đối với câu UPDATE/DELETE:
+ rows: là object ResultSetHeader chứa các thông tin quan trọng như affectedRows và changedRows
*/

class ProductModel {
    static async getProducts() {
        const query = "SELECT * FROM mat_hang";
        const [rows] = await dbPool.query(query); 
        return rows;
    }
    static async getProduct(id){
        const query = "SELECT * FROM mat_hang WHERE ma_hang = ?";
        const [rows] = await dbPool.execute(query, [id]);
        return rows;
    } 
}

module.exports = ProductModel;