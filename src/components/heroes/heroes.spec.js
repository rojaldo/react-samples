import { render, screen } from '@testing-library/react';
import HeroesComponent from './heroes';
test('Renders title', () => {
  render(<HeroesComponent />);
  expect(screen.getByText('Hero Name')).toBeInTheDocument();
}
);
