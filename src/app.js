import QuestionListTemplate from "./templates/QuestionListTemplate.js";
import Router from "./router.js";
import QuestionModel from "./models/QuestionModel.js";
import QuestionCollection from "./collections/QuestionCollection.js";
import QuestionListController from "./controllers/QuestionListController.js";
import QuestionNewController from "./controllers/QuestionNewController.js";
import QuestionEditController from "./controllers/QuestionEditController.js";


$(function() {
    var router = new Router()

    router.on('route:home', function () {
        console.log('route:home')
        router.navigate('questions', {
            trigger: true,
            replace: true
        });
    });

    router.on('route:showQuestions', function () {
        console.log('route:showQuestions')
        QuestionListController()
    });

    router.on('route:newQuestion', function () {
        console.log('route:newQuestion')
        QuestionNewController(router)
    });

    router.on('route:editQuestion', function (questionId) {
        console.log('route:editQuestion/' + questionId)
        QuestionEditController(router, questionId)
    });

    Backbone.history.start();
})