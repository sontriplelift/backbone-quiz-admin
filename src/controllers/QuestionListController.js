import QuestionCollection from "../collections/QuestionCollection.js"
import QuestionListView from "../views/QuestionListView.js"


function QuestionListController() {
    var questionCollection = new QuestionCollection()
    questionCollection.fetch()
        .then(() => {
            var questionListView = new QuestionListView({
                collection: questionCollection
            })
            $('.container').html(questionListView.render().$el)
        })
}

export default QuestionListController