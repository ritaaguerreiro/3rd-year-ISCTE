import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HistoricoForm from './HistoricoForm';

test('renders historico form with no suggestions', () => {
    render(
        <MemoryRouter initialEntries={['/historico-form']}>
            <HistoricoForm location={{ state: {} }} />
        </MemoryRouter>
    );

    const suggestionElement = screen.getByText(/Sem sugestões/i);
    expect(suggestionElement).toBeInTheDocument();
});
