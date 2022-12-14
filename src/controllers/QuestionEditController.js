import QuestionModel from "../models/QuestionModel.js"
import QuestionFormView from "../views/QuestionFormView.js"

function QuestionEditController(router, questionId) {
    var questionModel = new QuestionModel({
        id: questionId
    })
    questionModel.fetch()
        .then(() => {
            var questionEditView = new QuestionFormView({
                model: questionModel
            })
            questionEditView.on('formSubmitted', function() {
                questionModel.save()
                    .then(() => {
                        router.navigate('questions', true)
                    })
            })
            $('.container').html(questionEditView.render().$el)
        })
}

export default QuestionEditController