import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import TesteProvisorio from './pages/testeProvisorio';


test('Verifica a existência do texto "testar jest :)" no DOM', async () => {
  render(<TesteProvisorio></TesteProvisorio>);

  expect(screen.getByText('testar jest')).toBeInTheDocument();
});
