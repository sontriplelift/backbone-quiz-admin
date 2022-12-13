const AnswerTemplate = 
    `
    <div class="answer">
        <input type="text" name="answers" value="" class="text-input" />
        <div>
            <input name="correctAnswer" class="radio-input" type="radio" value=<%- value %> id=<%- id %> /> <label for=<%- id %>>correct</label>
        </div>
        <button type="button" class="btn btn-orange btn-remove"><i class="fas fa-times"></i> Remove</button>
    </div>
    `

export default AnswerTemplate