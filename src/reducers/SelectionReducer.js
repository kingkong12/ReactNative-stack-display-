export default (state = [], actions) => {
    switch (actions.type) {
        case 'select_library':
            return actions.payload;
        default: 
            return state; 
    }      
};
