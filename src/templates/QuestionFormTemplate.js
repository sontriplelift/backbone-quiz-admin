const QuestionFormTemplate = 
    `
    <h1><%- id ? 'Edit' : 'New' %> question</h1>
    <form id="frm-create">
        <div class="form-group">
            <label for="text">Question:</label>
            <input type="text" name="text" value="<%- text %>" class="input-question" />
        </div>
        
        <div class="form-group">
            <label>Answers: </label>

            <div class="list-answers">

            </div>

            <div class="text-right">
                <button type="button" class="btn btn-blue btn-add"><i class="fas fa-plus"></i> Add</button>
            </div>
        </div>

        <div class="actions">
            <button type="submit" class="btn btn-blue btn-large btn-save"><i class="fas fa-save"></i> Save</button>
        </div>
    </form>
    `

export default QuestionFormTemplate