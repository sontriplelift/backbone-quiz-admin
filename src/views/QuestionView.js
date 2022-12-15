import QuestionTemplate from "../templates/QuestionTemplate.js";

const QuestionView = Backbone.View.extend({
    tagName: "tr",
    template: _.template(QuestionTemplate),
    
    events: {
        'click .btn-orange': 'deleteQuestion'
    },

    render() {
        var html = this.template(this.model.toJSON())
        this.$el.html(html)
        return this
    },

    deleteQuestion(e) {
        e.preventDefault()
        this.model.destroy()
            .then(() => {
                this.$el.remove()
            })
    }
})

export default QuestionView