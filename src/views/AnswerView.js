import AnswerTemplate from "../templates/AnswerTemplate.js";

const AnswerView = Backbone.View.extend({
    template: _.template(AnswerTemplate),
    render() {
        var elementValue = sessionStorage.getItem('answerNo')
        var html = this.template({
            value: elementValue,
            id: "answer" + elementValue
        })
        this.$el.html(html)
        return this
    },
    events: {
        'click .btn-remove': 'removeAnswer'
    },
    removeAnswer() {
        sessionStorage.setItem('answerNo', Number(sessionStorage.getItem('answerNo')) - 1)
        var valueOfRemovedAnswer = this.$('.radio-input').get(0).value
        console.log(valueOfRemovedAnswer)
        var tempValue = Number(valueOfRemovedAnswer)
        while(tempValue <= Number(sessionStorage.getItem('answerNo'))) {
            $('#answer'+(tempValue+1)).prop('value', tempValue)
            $('#answer'+(tempValue+1)).prop('id', "answer" + tempValue)
            tempValue += 1
        }
        
        this.$el.remove()
    }
})

export default AnswerView