import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

import { MemoryRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import CardList from './components/CardList';
import Card from './components/Card';

describe('App', () => {
  it('should render hello world', () => {
    // ARRANGE
    render(<Home />);
    // ACT
    // EXPECT
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Hello World'
    );
  });
  it('should render page not found if invalid path', () => {
    render(
      <MemoryRouter initialEntries={['/banana']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Page not found'
    );
  });

  it('should render about us page', () => {
    render(<AboutUs />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'About Us Page'
    );
  });

  it('should render card list', () => {
    render(<CardList />);
    const count = screen.getAllByRole('figure').length;
    expect(count).toBe(3);
  });
  it('should render card', () => {
    render(<CardList />);
    const cards = screen.getAllByRole('img');
    expect(cards[0]).toHaveAttribute('alt');
  });
});
