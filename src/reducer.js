const todo = (state = [], action, input) => {
    switch(action.type){
        case 'adding':
            return state.push(input)
        case 'subtract':
            return state.pop(input)
            default:
                return console.log('test')
    }
}
export default todo;
