import { render, screen, within } from '@testing-library/react';
import CardList from './CardList';
import { mockItems } from '../../test-utils/mocks/data';
import { MemoryRouter } from 'react-router';

describe('CardList Rendering', () => {
  it('Renders correct number of items when data is provided', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <CardList items={mockItems} />
      </MemoryRouter>
    );
    const cardsElement = screen.getAllByTestId('card');

    expect(cardsElement).toHaveLength(mockItems.length);
  });

  it('Displays "no results" message when data array is empty', () => {
    render(<CardList items={[]} />);

    expect(screen.queryByTestId('card')).not.toBeInTheDocument();
    expect(screen.getByText(/no results/i)).toBeInTheDocument();
  });
});

describe('Data Display Tests', () => {
  it('Correctly displays item names and descriptions', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <CardList items={mockItems} />
      </MemoryRouter>
    );
    const cardsElement = screen.getAllByTestId('card');

    cardsElement.forEach((card, index) => {
      const withinCard = within(card);

      expect(withinCard.getByText(mockItems[index].name)).toBeInTheDocument();
      expect(
        withinCard.getByText(mockItems[index].species)
      ).toBeInTheDocument();

      const imgElement = withinCard.getByRole('img');

      expect(imgElement).toHaveAttribute('src', mockItems[index].image);
    });
  });
});
