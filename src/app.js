import QuestionListTemplate from "./templates/QuestionListTemplate.js";
import Router from "./router.js";
import QuestionModel from "./models/QuestionModel.js";
import QuestionCollection from "./collections/QuestionCollection.js";
import QuestionListController from "./controllers/QuestionListController.js";


$(function() {
    var questionCollection = new QuestionCollection()
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
        
    });

    router.on('route:editQuestion', function () {
        console.log('route:editQuestion')
        
    });

    Backbone.history.start();
})