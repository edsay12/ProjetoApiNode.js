module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('aluno_foto', {
      id:{
        type:Sequelize.INTEGER,
        allowNull: false,
        autoIncrement:true ,
        primaryKey:true
      },
      aluno_id:{
        type:Sequelize.INTEGER,
        allowNull:true,
        references:{
          model:'alunos',
          key:'id'
        },
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
      },
      originalname:{
        type:Sequelize.STRING,
        allowNull:false
      },
      filename:{
        type:Sequelize.STRING,
        allowNull:false
      },
      created_at:{
        type:Sequelize.DATE,
        allowNull:false
      },

      updated_at:{
        type:Sequelize.DATE,
        allowNull:false
      },

    });

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('aluno_foto');
  }
};
