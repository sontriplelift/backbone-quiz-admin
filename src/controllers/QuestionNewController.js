import QuestionModel from "../models/QuestionModel.js"
import QuestionFormView from "../views/QuestionFormView.js"

function QuestionNewController(router) {
    sessionStorage.setItem('answerNo', '-1')
    var newQuestionModel = new QuestionModel
    var questionFormView = new QuestionFormView({
        model: newQuestionModel
    })
    questionFormView.on('formSubmitted', function() {
        newQuestionModel.save()
            .then(() => {
                router.navigate('questions', true)
            })
    })
    $('.container').html(questionFormView.render().$el)
}

export default QuestionNewController