const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const userData = [
  {
    username: 'Xandromus',
    password: 'password123'
  },
  {
    username: 'Lernantino',
    password: 'password123'
  }
];

const postData = [
  {
    title: 'Why MVC is so important',
    content: 'MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic.',
    user_id: 1, // Xandromus
    createdAt: new Date()
  },
  {
    title: 'Authentication vs. Authorization',
    content: 'There is a difference between authentication and authorization. Authentication means confirming your own identity, whereas authorization means being allowed access to the system.',
    user_id: 1, // Xandromus
    createdAt: new Date()
  },
  {
    title: 'Object-Relational Mapping',
    content: 'I have really loved learning about ORMs. It\'s really simplified the way I create queries in SQL!',
    user_id: 2, // Lernantino
    createdAt: new Date()
  }
];

const commentData = [
  // Add any comment seeds here
];

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Post.bulkCreate(postData);
  await Comment.bulkCreate(commentData);
console.log("Database Seeded")
  process.exit(0);
};

seedDatabase();
