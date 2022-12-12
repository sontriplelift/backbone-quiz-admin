
const Router = Backbone.Router.extend({
    routes: {
      '': 'home',
      'questions': 'showQuestions',
      'questions/new': 'newQuestion',
      'questions/edit/:id': 'editQuestion'
    }
  });
  
  export default Router