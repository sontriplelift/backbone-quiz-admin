import QuestionFormTemplate from "../templates/QuestionFormTemplate.js";
import AnswerView from "./AnswerView.js";
import ValidationMessageTemplate from "../templates/ValidationMessageTemplate.js";

const QuestionFormView = Backbone.View.extend({
    template: _.template(QuestionFormTemplate),

    renderOne(option, index) {
        var isChecked = ''
        if (index === this.model.toJSON().correct) {
            isChecked = 'checked'
        }
        var answerView = new AnswerView()
        this.$('.list-answers').append(answerView.render(option, isChecked).$el)
    },

    render() {
        if (this.model.id) {
            var html = this.template(this.model.toJSON())
            this.$el.html(html)
            this.model.attributes.options.forEach(this.renderOne, this)
        } else {
            var html = this.template({
                id: null,
                text: ''
            })
            this.$el.html(html)
        }

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
        } else {
            this.$('.message').html(_.template(ValidationMessageTemplate, {
                errMessage: this.model.validationError
            }))
        }
    }
})

export default QuestionFormView