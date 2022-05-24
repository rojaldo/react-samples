import { render, screen } from '@testing-library/react';
import {BeersFunctionalComponent} from './beersFunctionalComponent';
xtest('Renders title', () => {
  render(<BeersFunctionalComponent />);
  expect(screen.getByText('My Beers')).toBeInTheDocument();
}
);
