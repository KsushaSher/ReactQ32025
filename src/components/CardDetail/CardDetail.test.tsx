import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import CardDetail from './CardDetail';

describe('CardDetail Rendering', () => {
  it('Displays "no results" message when data array is empty', () => {
    render(
      <MemoryRouter initialEntries={['character/:id']}>
        <CardDetail />
      </MemoryRouter>
    );

    expect(screen.queryByTestId('card-detail')).not.toBeInTheDocument();
    expect(screen.getByText(/no result/i)).toBeInTheDocument();
  });
});

// describe('Data Display Tests', () => {
//   it('Correctly displays item status and gender', () => {
//     render(
//       <MemoryRouter initialEntries={['character/:id']}>
//         <CardDetail />
//       </MemoryRouter>
//     );
//     const cardElement = screen.getByTestId('card-detail');

//     const withinCard = within(cardElement);

//     expect(withinCard.getByText(mockItem.status)).toBeInTheDocument();
//     expect(withinCard.getByText(mockItem.gender)).toBeInTheDocument();

//     const imgElement = withinCard.getByRole('img');

//     expect(imgElement).toHaveAttribute('src', mockItem.image);
//   });
// });
