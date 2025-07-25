import { render, screen } from '@testing-library/react';
import Section from './Section';

describe('Rendering Tests', () => {
  it('Shows loading state while fetching data', () => {
    const { rerender } = render(
      <Section loading={true}>
        <div>Children</div>
      </Section>
    );

    expect(screen.getByTestId('spinner')).toBeInTheDocument();
    expect(screen.queryByText('Children')).not.toBeInTheDocument();

    rerender(
      <Section loading={false}>
        <div>Children</div>
      </Section>
    );
    expect(screen.queryByTestId('spinner')).not.toBeInTheDocument();
    expect(screen.getByText('Children')).toBeInTheDocument();
  });
});

describe('Error Handling Tests', () => {
  it('Displays error message when API call fails', () => {
    render(
      <Section loading={false} error={'error'}>
        <div>Children</div>
      </Section>
    );

    expect(screen.getByTestId('error')).toBeInTheDocument();
    expect(screen.queryByText('Children')).not.toBeInTheDocument();
  });
});
