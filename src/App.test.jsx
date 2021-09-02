import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

test('App', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants: [
      {
        id: 1,
        name: '성원각',
        category: '중식',
        address: '서울시 동작구',
      },
    ],
  }));

  const { getByText } = render((
    <App />
  ));

  expect(getByText(/Restaurant/)).not.toBeNull();
  expect(getByText(/성원각/)).not.toBeNull();
  expect(getByText(/중식/)).not.toBeNull();
  expect(getByText(/서울시 동작구/)).not.toBeNull();
});
