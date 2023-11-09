import mockData from '@mocks/data.json';
import {
  cleanup,
  fireEvent,
  screen,
  waitFor,
  within
} from '@testing-library/react';
import App from 'src/App';
import { renderWithQuery } from 'src/testUtils';
import { afterEach, describe, expect, it } from 'vitest';

import { dataTestID } from 'src/components/organisms/Table';
import {
  SortBy,
  TABLE_HEADER_LABELS
} from 'src/components/organisms/Table/constants';

describe('App', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render fine', async () => {
    renderWithQuery(<App />);

    await waitFor(() => {
      const title = screen.getByDisplayValue(mockData[0].title);
      expect(title).toBeDefined();
      expect(screen.getByTestId(dataTestID)).toBeDefined();
    });
  });

  it('should filter the data by title', async () => {
    renderWithQuery(<App />);

    await waitFor(() => {
      const title = screen.getByDisplayValue(mockData[0].title);
      expect(title).toBeDefined();
    });

    const filter = screen.getByLabelText(/Filter by/i);
    expect(filter).toBeDefined();

    fireEvent.change(filter, { target: { value: mockData[0].title } });

    const table = screen.getByTestId(dataTestID);

    await waitFor(() => {
      expect(within(table).queryByDisplayValue(mockData[1].title)).toBeNull();
      expect(within(table).getByDisplayValue(mockData[0].title)).toBeDefined();
    });
  });

  it('should sort the data', async () => {
    renderWithQuery(<App />);

    await waitFor(() => {
      const title = screen.getByDisplayValue(mockData[0].title);
      expect(title).toBeDefined();
    });

    const tbody = screen.getAllByRole('rowgroup')[1];
    const prevRows = within(tbody).getAllByRole('row');

    const select = screen.getByRole('combobox');
    expect(select).toBeDefined();

    fireEvent.mouseDown(select);

    const option = screen.getByRole('option', {
      name: TABLE_HEADER_LABELS[SortBy.TITLE]
    });
    fireEvent.click(option);

    const currentRows = within(tbody).getAllByRole('row');

    expect(currentRows).not.toEqual(prevRows);
  });

  it('should reset sort', async () => {
    renderWithQuery(<App />);

    // Sort
    const select = screen.getByRole('combobox');
    fireEvent.mouseDown(select);
    const option = screen.getByRole('option', {
      name: TABLE_HEADER_LABELS[SortBy.TITLE]
    });
    fireEvent.click(option);

    expect(select.textContent).toBe(TABLE_HEADER_LABELS[SortBy.TITLE]);

    // Reset them
    const resetButton = screen.getByText(/reset/i);
    fireEvent.click(resetButton);

    expect(select.textContent).toBe('​');
  });
});
