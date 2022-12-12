import QuestionTemplate from "../templates/QuestionTemplate.js";

const QuestionView = Backbone.View.extend({
    tagName: "tr",
    template: _.template(QuestionTemplate),

    render() {
        var html = this.template(this.model.toJSON())
        this.$el.html(html)
        return this
    }
})

export default QuestionView