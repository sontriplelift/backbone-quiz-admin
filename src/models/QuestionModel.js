import getMessage from "../message/message.js";

const QuestionModel = Backbone.Model.extend({
    defaults: {
        text: null,
        options: null,
        correct: null
    },

    urlRoot: 'https://638730dee399d2e473f768f2.mockapi.io/api/questions',

    validate(attrs) {
        // validate question
        if (!attrs.text) {
            // return 'Question must not be empty!'
            return getMessage().M01
        }
        // validate answer
        if (attrs.options.length < 2) {
            return getMessage().M02
        } else {
            for (let i = 0; i < attrs.options.length; i++) {
                if (attrs.options[i] === '') {
                    return getMessage(i).M03
                }
            }
        }
        // validate correct answer(is any radio button checked)
        if (!attrs.correct) {
            return getMessage().M04
        }
    },
})

export default QuestionModel