import { render, screen } from '@testing-library/react';
import App from './App';

xtest('Renders title', () => {
  render(<App />);
  expect(screen.getByText('React Samples')).toBeInTheDocument();
}
);
