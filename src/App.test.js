import { render, screen } from '@testing-library/react';
import Header from './components/Header';

test('testando meu Header', () => {
  render(<Header />);
  const linkElement = screen.getByText(/Escolha seu Pokemon/i);
  expect(linkElement).toBeInTheDocument();
});
