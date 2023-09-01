const Sequelize = require("sequelize")
const sequelize = new Sequelize("aulaquatro", "root", "", {
    host: "localhost",
    dialect: "mysql"
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
