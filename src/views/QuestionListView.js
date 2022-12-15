import QuestionCollection from "../collections/QuestionCollection.js"
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
        var html = this.template({
            keyword: sessionStorage.getItem('search-keyword')
        })
        this.$el.html(html)
        this.collection.each(this.renderOne, this)

        return this
    },

    events: {
        'keyup #input-search': 'searchQuestion'
    },

    searchQuestion(e) {
        e.preventDefault()
        const inputValue = $('#input-search').val()
        sessionStorage.setItem('search-keyword', inputValue)
        this.collection.fetch({data: {text: inputValue}})
            .then(()=> {
                this.render()
                const end = inputValue.length;
                $('#input-search')[0].setSelectionRange(end, end);
                $('#input-search').focus()
            })
    }
})

export default QuestionListView