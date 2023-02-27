import { render, screen } from '@testing-library/react';
import FilmHeadline from './FilmHeadline';

test('renders film headline with correct text', () => {
    const heading = 'Archive: Search a Movie';
    render(<FilmHeadline heading={heading} />);
    const headlineElement = screen.getByText(/Archive: Search a Movie/i);
    expect(headlineElement).toBeInTheDocument();
});
