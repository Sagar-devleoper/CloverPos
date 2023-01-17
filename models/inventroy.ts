import { Model, DataTypes, CreationOptional } from 'sequelize';
import { Sequelize } from 'sequelize';
const sequelize = new Sequelize('postgres://postgres:admin@localhost:5432/coverpos');
// import connectToDB from '../config/db'
export class Inventory extends Model {
    public id?: number | undefined;
    public name!: string;
    public price?: number;
    public inventoryId?: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Inventory.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: true

    },
    inventoryId: {
        type: new DataTypes.STRING(255),
        allowNull: false
    },
    name: {
        type: new DataTypes.STRING(255),
        allowNull: false
    },
    price: {
        type: new DataTypes.STRING(255),
        allowNull: false
    },
    // createdAt: DataTypes.DATE,

}, {
    timestamps: false,
    sequelize: sequelize,
    tableName: 'inventories',

},)

sequelize.sync()
    .then(() => {
        console.log('Table created successfully')
    })
    .catch((error: Error) => {
        console.log('Error while creating table:', error);
    });