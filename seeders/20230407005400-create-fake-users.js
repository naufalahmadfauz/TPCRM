'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('users', [{
      email: 'jah@gmail.com',
      password: 'xdddsds',
      role:'Agen',
      createdAt:'2023-04-07 00:40:58.203000 +00:00',
      updatedAt:'2023-04-07 00:40:58.203000 +00:00'
    },{
      email: 'jeh@gmail.com',
      password: 'xdddsds',
      role:'Agen',
      createdAt:'2023-04-07 00:40:58.203000 +00:00',
      updatedAt:'2023-04-07 00:40:58.203000 +00:00'
    },{
      email: 'joh@gmail.com',
      password: 'xdddsds',
      role:'Agen',
      createdAt:'2023-04-07 00:40:58.203000 +00:00',
      updatedAt:'2023-04-07 00:40:58.203000 +00:00'
    },{
      email: 'blah@gmail.com',
      password: 'xdddsds',
      role:'Agen',
      createdAt:'2023-04-07 00:40:58.203000 +00:00',
      updatedAt:'2023-04-07 00:40:58.203000 +00:00'
    },{
      email: 'bleh@gmail.com',
      password: 'xdddsds',
      role:'Admin',
      createdAt:'2023-04-07 00:40:58.203000 +00:00',
      updatedAt:'2023-04-07 00:40:58.203000 +00:00'
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {});

  }
};
