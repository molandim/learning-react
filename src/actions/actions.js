import constants from '../constants/constants';

function incrementCount() {
    return {
        type: constants.INCREMENT
    }
}

export { incrementCount };