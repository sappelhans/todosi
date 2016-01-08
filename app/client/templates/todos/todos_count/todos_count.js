/*****************************************************************************/
/* TodosCount: Event Handlers */
/*****************************************************************************/
Template.TodosCount.events({
});

/*****************************************************************************/
/* TodosCount: Helpers */
/*****************************************************************************/
Template.TodosCount.helpers({
	completedCount: function() {
		return Todos.find({userId: Meteor.userId(), isDone: true}).count();
	},
	totalCount: function() {
		return Todos.find({userId: Meteor.userId()}).count();
	}
});

/*****************************************************************************/
/* TodosCount: Lifecycle Hooks */
/*****************************************************************************/
Template.TodosCount.onCreated(function () {
});

Template.TodosCount.onRendered(function () {
});

Template.TodosCount.onDestroyed(function () {
});
