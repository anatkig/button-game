const initialState = {
  level: 'easy'
};

const levelReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'easy': {
      return { ...state, level: 'easy' };
    }
    case 'medium': {
      return { ...state, level: 'medium' };
    }
    case 'hard': {
      return { ...state, level: 'hard' };
    }
  }
};

export default levelReducer;
