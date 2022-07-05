export const initialState = {
  product: {
    id: '5',
    title: 'Mouse Havit Mechanical Keyboard Wired 89 Keys Gaming Keyboard',
    image:
      'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/mouse2.jpg',
    description: `Features & details
    - MAGSPEED WHEEL: Ultra-fast, precise, quiet MagSpeed electromagnetic scrolling
    - DARKFIELD 4000 DPI SENSOR: Darkfield 4000 DPI sensor for precise tracking on any surface, even glass (up to 4mm in thickness)
    - COMFORTABLE DESIGN: Tactile reference for hand positioning makes it easy to stay oriented and in your flow
    - FLOW CROSS-COMPUTER CONTROL: Supports flow cross-computer control across multiple screens. Pair up to 3 devices via Bluetooth Low Energy or Unifying USB receiver`,
    images: [
      'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/mouse2.jpg',
      'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/mouse2.jpg',
      'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/mouse3.jpg',
    ],
    options: ['Black', 'Space Grey', 'Red'],
    avgRating: 4.8,
    ratings: 2989,
    price: 99.98,
    oldPrice: 120.06,
    quantity: 1,
  },
  discount: null,
  user: null,
};
//discount is a nudge
export const actionTypes = {
  SET_PRODUCT: 'SET_PRODUCT',
  SET_DISCOUNT: 'SET_DISCOUNT',

  SET_USER: 'SET_USER',
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_PRODUCT:
      return {
        ...state,
        product: action.product,
      };
    case actionTypes.SET_DISCOUNT:
      return {
        ...state,
        discount: action.discount,
      };
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
