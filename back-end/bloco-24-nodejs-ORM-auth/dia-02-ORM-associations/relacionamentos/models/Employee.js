module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
  },
  {
    timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
    tableName: 'Employees',
    underscored: true,
  });

  Employee.associate = (models) => {
    Employee.hasOne(models.Address,
      { foreignKey: 'employeeId', as: 'addresses' });
  };


  // podemos dizer também que um empregado tem muitos endereços, nesse caso o padrão é o hasMany, quando se trata de relacionamentos 1:N, dessa forma podemos escrever o associate da seguinte forma:
/* 
  Employee.associate = (models) => {
    Employee.hasMany(models.Address,
      { foreignKey: 'employee_id', as: 'addresses' });
  }; */
  return Employee;
};