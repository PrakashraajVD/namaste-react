import { render, screen } from '@testing-library/react';
import RestaurantCard from '../RestaurantCard';
import MOCK_DATA from '../mocks/RestaurantCardMock.json';
import '@testing-library/jest-dom';

it('Should render RestaurantCard component with props Data', () => {
  render(<RestaurantCard resData={MOCK_DATA} />);
  const name = screen.getByText('Pizza Paradise');
  expect(name).toBeInTheDocument();
});

it('Should render RetaurantCard component with Promoted Label', () => {
  // Homework - test HOC: withPromotedLabel();
});
