const initalState = {
  title: 'Main',
  showMenu: true,
  potalPosition: [],
  breadcrumb: '',
  theme: true,
};

export default (state = initalState, action) => {
  switch (action.type) {
    case 'layout/setTitle':
      return { ...state, title: action.payload };
    case 'layout/showMenu':
      return { ...state, showMenu: !state.showMenu };
    case 'layout/menuExpend':
      return { ...state, [action.payload.menu]: action.payload.state };
    case 'layout/portal':
      return { ...state, potalPosition: action.payload };
    case 'layout/breadcrumb':
      return { ...state, breadcrumb: action.payload };
    case 'layout/theme':
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};
