export const addRestaurant = ({ name, category, address }) => ({
  type: 'addRestaurant',
  payload: {
    name,
    category,
    address,
  },
});

export const deleteRestaurant = ({ id }) => ({
  type: 'deleteRestaurant',
  payload: {
    id,
  },
});

export const updateName = ({ name }) => ({
  type: 'updateName',
  payload: {
    name,
  },
});
