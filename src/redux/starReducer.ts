const stars = [] as string[];

const star = (state = stars, action: any) => {
  switch (action.type) {
    case 'ADD_STAR': {
      return [...state, 'star'];
    }

    default: {
      return [...state];
    }
  }
};

export default star;
