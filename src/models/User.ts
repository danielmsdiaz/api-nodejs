import {Model, DataTypes} from "sequelize";
import {sequelize} from "../instances/pg";

//criando uma interface para definir como será a entidade usuario, para poder extender de Model (ficar no formato aceito pelo sequelize)
export interface UserInstance extends Model{
    id: number;
    name: string;
    born_date: Date;
    email: string;
}

// definindo o modelo para ser persistido no banco
export const User = sequelize.define<UserInstance>('Users', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING
    },
    born_date: {
        type: DataTypes.DATE
    },
    email: {
        type: DataTypes.STRING
    }

}, {
    tableName: "users",
    timestamps: false
});