var AppDispatcher = require('./dispatcher');

var Actions = {

  addNewItem: function (text) {
    AppDispatcher.dispatch({
      actionType: 'ADD_NEW_ITEM',
      text: text
    });
  },

};

module.exports = Actions;