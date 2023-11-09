import { cleanup, fireEvent, screen, waitFor } from '@testing-library/react';
import App from 'src/App';
import { renderWithQuery } from 'src/testUtils';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { dataTestID } from '@components/organisms/Table';

import { postsURL } from 'src/services/api';

describe('App', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render fine', async () => {
    const response = [
      {
        userId: 1,
        id: 1,
        title: 'Lorem ipsum',
        body: 'recusandae consequuntur expedita'
      }
    ];

    const fetchCall = vi
      .spyOn(window, 'fetch')
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      .mockResolvedValue({
        ok: true,
        json: async () => response
      } as Response);

    renderWithQuery(<App />);

    expect(fetchCall).toHaveBeenCalledWith(postsURL);

    await waitFor(() => {
      const title = screen.getByText(response[0].title);
      expect(title).toBeDefined();
      expect(screen.getByTestId(dataTestID)).toBeDefined();
    });
  });

  // it('should sort the data', async () => {
  //   const response = [
  //     {
  //       userId: 1,
  //       id: 1,
  //       title: 'Title 1',
  //       body: 'Body 1'
  //     },
  //     {
  //       userId: 2,
  //       id: 2,
  //       title: 'Title 2',
  //       body: 'Body 2'
  //     },
  //     {
  //       userId: 3,
  //       id: 3,
  //       title: 'Title 3',
  //       body: 'Body 3'
  //     },
  //     {
  //       userId: 4,
  //       id: 4,
  //       title: 'Title 4',
  //       body: 'Body 4'
  //     },
  //     {
  //       userId: 5,
  //       id: 5,
  //       title: 'Title 5',
  //       body: 'Body 5'
  //     }
  //   ];

  //   vi.spyOn(window, 'fetch')
  //     // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  //     .mockResolvedValue({
  //       ok: true,
  //       json: async () => response
  //     } as Response);

  //   renderWithQuery(<App />);

  //   await waitFor(() => {
  //     const titleLabel = TABLE_HEADER_LABELS[SortBy.TITLE];
  //     const titleHeader = screen.getByText(titleLabel);
  //     expect(titleHeader).toBeDefined();

  //     fireEvent.click(titleHeader);
  //   });

  //   const tbody = screen.getAllByRole('rowgroup')[1];
  //   const rows = within(tbody).getAllByRole('row');
  //   const firstRow = within(rows[0]).getByText(response[0].title);
  //   expect(firstRow).toBeDefined();

  //   // const firstRow = document.querySelector('tbody > tr:nth-child(1)');
  //   // if (firstRow) {
  //   //   expect(within(firstRow).getByText(response[0].title)).toBeDefined();
  //   // }
  // });

  it('should filter the data by title', async () => {
    const response = [
      {
        userId: 1,
        id: 1,
        title: 'Title 1',
        body: 'Body 1'
      },
      {
        userId: 2,
        id: 2,
        title: 'Title 2',
        body: 'Body 2'
      },
      {
        userId: 3,
        id: 3,
        title: 'Title 3',
        body: 'Body 3'
      },
      {
        userId: 4,
        id: 4,
        title: 'Title 4',
        body: 'Body 4'
      },
      {
        userId: 5,
        id: 5,
        title: 'Title 5',
        body: 'Body 5'
      }
    ];

    vi.spyOn(window, 'fetch')
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      .mockResolvedValue({
        ok: true,
        json: async () => response
      } as Response);

    renderWithQuery(<App />);

    await waitFor(() => {
      const title = screen.getByText(response[0].title);
      expect(title).toBeDefined();
    });

    const filter = screen.getByLabelText(/Filter title/i);
    expect(filter).toBeDefined();

    fireEvent.change(filter, { target: { value: response[0].title } });

    expect(screen.queryByText(response[1].title)).toBeNull();
    expect(screen.getByText(response[0].title)).toBeDefined();
  });
});
