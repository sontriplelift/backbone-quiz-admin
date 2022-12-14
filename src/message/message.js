function getMessage(index = null) {
    return {
        M01: 'Question must not be empty!',
        M02: 'There must be at least 2 options!',
        M03: `Answer ${index+1} must not be empty!`,
        M04: 'The question must have one correct answer!'
    }
};

export default getMessage