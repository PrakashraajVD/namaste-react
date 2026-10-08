import { act, fireEvent, render, screen } from '@testing-library/react';
import RestaurantMenu from '../RestaurantMenu';
import MOCK_DATA from '../mocks/RestaurantMenuMock.json';
import { Provider } from 'react-redux';
import appStore from '../../utils/appStore';
import Header from '../Header';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Cart from '../Cart';

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

it('Should load Restaurant Menu component', async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>,
    ),
  );
  expect(screen.getByText('Cart - (0 items)')).toBeInTheDocument();
  const accordionHeader = screen.getByText('Sides (2)');
  fireEvent.click(accordionHeader);
  const foodItems = screen.getAllByTestId('foodItems');
  expect(foodItems.length).toBe(2);
  const addBtns = screen.getAllByRole('button', { name: 'ADD' });
  fireEvent.click(addBtns[0]);
  expect(screen.getByText('Cart - (1 items)')).toBeInTheDocument();
  fireEvent.click(addBtns[1]);
  expect(screen.getByText('Cart - (2 items)')).toBeInTheDocument();
  expect(screen.getAllByTestId('foodItems').length).toBe(4);
  fireEvent.click(screen.getByRole('button', { name: 'Clear Cart' }));
  expect(screen.getByText('Cart - (0 items)')).toBeInTheDocument();
  expect(screen.getAllByTestId('foodItems').length).toBe(2);
  expect(screen.getByText('No Items in the cart')).toBeInTheDocument();
});
