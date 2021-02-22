import React from 'react';

import { render } from '@testing-library/react';

import List from './List';

describe('List', () => {
  function renderList(registers) {
    return render((
      <List registers={registers} />
    ));
  }

  context('when register list is filled', () => {
    const registers = [
      { id: 1, information: '마녀식당 | 한식 | 서울시 강남구' },
      { id: 2, information: '소녀식당 | 소식 | 소울시 강남구' },
    ];

    it('shows register list', () => {
      const { queryByText } = renderList(registers);

      expect(queryByText('마녀식당 | 한식 | 서울시 강남구')).not.toBeNull();
      expect(queryByText('소녀식당 | 소식 | 소울시 강남구')).not.toBeNull();
    });
  });

  context('when register list is empty', () => {
    const registers = [];

    it('shows nothing', () => {
      const { queryByText } = renderList(registers);
      expect(queryByText('마녀식당 | 한식 | 서울시 강남구')).toBeNull();
    });
  });
});