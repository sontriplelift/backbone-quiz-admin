import QuestionModel from "../models/QuestionModel.js";

const QuestionCollection = Backbone.Collection.extend({
    model: QuestionModel,
    url: "https://638730dee399d2e473f768f2.mockapi.io/api/questions"
})

export default QuestionCollection