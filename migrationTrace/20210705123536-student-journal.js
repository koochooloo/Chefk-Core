"use strict";

module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable("student_journals", {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      studentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "student_id",
        references: {
          model: "students",
          key: "id",
        },
      },
      note: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      archivedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        field: "archived_at",
      },
      createdBy: {
        type: DataTypes.INTEGER,
        field: "created_by",
        references: {
          model: "users",
          key: "id",
        },
      },
      updatedBy: {
        type: DataTypes.INTEGER,
        field: "updated_by",
        references: {
          model: "users",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: "created_at",
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: "updated_at",
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("student_journals");
  },
};
