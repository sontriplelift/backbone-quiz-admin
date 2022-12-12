const QuestionModel = Backbone.Model.extend({
    defaults: {
        text: null,
        options: null,
        correct: null
    },

    urlRoot: 'https://638730dee399d2e473f768f2.mockapi.io/api/questions',

    validate(attrs) {
        if (!attrs.text) {
            return 'Question must not be empty!'
        }

    },
})

export default QuestionModel