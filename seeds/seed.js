const sequelize = require('../config/conection');
const { User, Blog, Comment } = require('../models');

const blogData = require('./blogdata.json');
const commentData = require('./commentData.json');
const userData = require('./userData.json');

