import QuestionFormTemplate from "../templates/QuestionFormTemplate.js";
import AnswerView from "./AnswerView.js";

const QuestionFormView = Backbone.View.extend({
    template: _.template(QuestionFormTemplate),
    render() {
        var html = this.template
        this.$el.html(html)
        return this
    },
    events: {
        'click .btn-add': 'addAnswer',
        'submit #frm-create': 'submitForm'
    },
    addAnswer() {
        sessionStorage.setItem('answerNo', Number(sessionStorage.getItem('answerNo')) + 1)
        var answerView = new AnswerView()
        this.$('.list-answers').append(answerView.render().$el)
    },
    submitForm(e) {
        e.preventDefault()
        var correctAnswer,
            answers = []   
        console.log($('.text-input').length)
        for (let i = 0; i < $('.text-input').length; i++) {
            answers.push($('.text-input')[i].value)
            if ($('.radio-input')[i].checked === true)
                correctAnswer = i
        }
        const input = {
            text: this.$('.input-question').val(),
            options: answers,
            correct: correctAnswer
        }

        this.model.set(input)
        if (this.model.isValid()) {
            this.trigger('formSubmitted', input)
        }

    }
})

export default QuestionFormView