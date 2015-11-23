import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    let todos = [
      {
        title: "Learn Ember",
        complete: false,
      },
      {
        title: "Get a cool job",
        complete: false,
      }
    ];
    return todos;
  }
});
