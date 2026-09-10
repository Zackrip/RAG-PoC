import { DataTypes } from "sequelize";
import { sequelize } from "../configs/postgres.database";

const Chat = sequelize.define(
  "Chat",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    userId: {
      type: DataTypes.UUID,
      allowNull: false,
    },

    question: {
        type: DataTypes.TEXT,
        allowNull: false,
    },

    answer: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
  },{
    tableName: "chats",
    timestamps: true,
  }    
);

export default Chat;
