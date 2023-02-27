import { render, fireEvent } from '@testing-library/react';
import SearchInput from './SearchInput';

test('updates search value when input changes', () => {
    const setSearchValue = jest.fn();

    const { getByPlaceholderText } = render(
        <SearchInput setSearchValue={setSearchValue} value="" />
    );

    const input = getByPlaceholderText(/Type to search.../i);

    fireEvent.change(input, { target: { value: 'test' } });

    expect(setSearchValue).toHaveBeenCalledWith('test');
});
