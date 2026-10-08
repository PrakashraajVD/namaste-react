import { render, screen } from '@testing-library/react';
import Contact from '../Contact';
import '@testing-library/jest-dom';

describe('Contact Us Page test cases', () => {
  // beforeAll(() => {
  //   console.log('Before All');
  // });

  // beforeEach(() => {
  //   console.log('Before Each');
  // });

  // afterAll(() => {
  //   console.log('After All');
  // });

  // afterEach(() => {
  //   console.log('After Each');
  // });

  it('Should load Contact us component', () => {
    render(<Contact />);
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
  });

  it('Should load button inside Contact component', () => {
    render(<Contact />);
    const button = screen.getByText('Submit');
    expect(button).toBeInTheDocument();
  });

  it('Should load name input inside Contact component', () => {
    render(<Contact />);
    const inputName = screen.getByPlaceholderText('name');
    expect(inputName).toBeInTheDocument();
  });

  it('Should load 2 input boxes on the Contact component', () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole('textbox');
    expect(inputBoxes.length).toBe(2);
    expect(inputBoxes.length).not.toBe(3);
  });
});
