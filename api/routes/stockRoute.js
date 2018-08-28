'use strict';
module.exports = function(app) {
  const todoList = require('../controllers/stockController');

	app.route('/vegetables')
	    .get(todoList.listAllVegetables)
	    .post(todoList.createAVegetable);


	app.route('/vegetables/purchase/:id')
	    .get(todoList.readAVegetable)
	    .put(todoList.updateAVegetable)
	    .delete(todoList.deleteAVegetable);

	app.route('/vegetables/sales/:id')
	    .get(todoList.readAVegetable)
	    .put(todoList.updateAVegetable)
	    .delete(todoList.deleteAVegetable);
};