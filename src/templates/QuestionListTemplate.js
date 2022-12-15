const QuestionListTemplate = 
    `
    <h1>All questions</h1>

    <div id="search">
        <input type="text" placeholder="Search..." id="input-search" value="<%-keyword ?? '' %>" />
    </div>

    <table>
            <tr>
                <th>#</th>
                <th>Question</th>
                <th>Answer</th>
                <th width="210">Actions</th>
            </tr>

    </table>
    `

export default QuestionListTemplate