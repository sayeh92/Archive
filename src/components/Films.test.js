import { render, screen } from '@testing-library/react';
import Films from './Films';

describe('Films component', () => {
    const movies = [
        { id: 1, title: 'Movie 1', poster_path: '/poster1.jpg', overview: 'Overview 1' },
        { id: 2, title: 'Movie 2', poster_path: '/poster2.jpg', overview: 'Overview 2' }
    ];
    const favoriteComponent = () => <div>Favorite Component</div>;
    const handleFavoriteClick = jest.fn();

    test('renders movies with favorite component and handle favorite click', () => {
        render(<Films movies={movies} favoriteComponent={favoriteComponent} handleFavoriteClick={handleFavoriteClick} />);
        const movieTitles = screen.getAllByText(/Movie \d/);
        expect(movieTitles.length).toBe(2);
        const favoriteButtons = screen.getAllByText(/Favorite Component/);
        expect(favoriteButtons.length).toBe(2);
        favoriteButtons.forEach((button, index) => {
            button.click();
            expect(handleFavoriteClick).toHaveBeenCalledWith(movies[index]);
        });
    });
});
