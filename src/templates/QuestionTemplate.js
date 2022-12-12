const QuestionTemplate = 
    `
        <td><%- id %></td>
        <td><%- text %></td>
        <td><%- options[correct] %></td>
        <td>
            <a href="#questions/edit/<%- id %>" class="btn btn-blue"><i class="far fa-edit"></i> Edit</a>
            <a href="#questions/delete/<%- id %>" class="btn btn-orange"><i class="far fa-trash-alt"></i> Delete</a>
        </td>
    `

export default QuestionTemplate