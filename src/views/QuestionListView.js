import QuestionModel from "../models/QuestionModel.js"
import QuestionListTemplate from "../templates/QuestionListTemplate.js"
import QuestionView from "./QuestionView.js"

const QuestionListView = Backbone.View.extend({
    template: _.template(QuestionListTemplate),

    renderOne(questionModel) {
        var questionView = new QuestionView({ model: questionModel })
        this.$('table').append(questionView.render().$el)
    },

    render() {
        var html = this.template()
        this.$el.html(html)
        this.collection.each(this.renderOne, this)

        return this
    }
})

export default QuestionListView