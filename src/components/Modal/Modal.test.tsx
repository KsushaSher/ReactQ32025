import { describe, it, beforeEach, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Modal from './Modal';
import { mockOnClose } from '../../test-utils/mocks/data';

describe('Modal Component', () => {
  let user: ReturnType<typeof userEvent.setup>;
  let modalRoot: HTMLElement;

  beforeEach(() => {
    user = userEvent.setup();
    const existingModal = document.getElementById('modal');

    if (existingModal) {
      modalRoot = existingModal;
    } else {
      modalRoot = document.createElement('div');
      modalRoot.setAttribute('id', 'modal');
      document.body.appendChild(modalRoot);
    }
  });

  it('renders children when open', () => {
    render(
      <Modal onClose={mockOnClose}>
        <p>Content</p>
      </Modal>
    );

    expect(screen.getByText(/Content/i)).toBeInTheDocument();
  });

  it('closes when clicking outside', async () => {
    render(
      <Modal onClose={mockOnClose}>
        <p>Inside</p>
      </Modal>
    );

    await user.click(screen.getByText(/inside/i).parentElement!.parentElement!);
    expect(mockOnClose).toHaveBeenCalled();
  });

  it('closes when pressing ESC', async () => {
    render(
      <Modal onClose={mockOnClose}>
        <p>Content</p>
      </Modal>
    );

    await user.keyboard('{Escape}');
    expect(mockOnClose).toHaveBeenCalled();
  });

  it('closes when clicking close button', async () => {
    render(
      <Modal onClose={mockOnClose}>
        <p>Content</p>
      </Modal>
    );

    await user.click(screen.getByTestId('close-button'));

    expect(mockOnClose).toHaveBeenCalled();
  });

  it('renders inside portal', () => {
    render(
      <Modal onClose={mockOnClose}>
        <p>Content</p>
      </Modal>
    );

    expect(modalRoot).toContainElement(screen.getByText(/content/i));
  });
});
