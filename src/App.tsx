import { useMemo, useRef, useState } from 'react';

import { Box, Container, LinearProgress } from '@mui/material';

import { Table } from '@components/organisms/Table';
import { SortBy } from '@components/organisms/Table/constants';
import { ActionsSection } from 'src/components/organisms/ActionsSection';

import { usePostsData } from './hooks/usePostsData';
import type { SortChangeHandlerType, SortType } from './types';

const initialStates = {
  filterTitle: '',
  sortColumn: {
    sortBy: SortBy.NONE,
    sortAsc: true
  }
};

function App() {
  const [filterTitle, setFilterTitle] = useState(initialStates.filterTitle);
  const [sortColumn, setSortColumn] = useState<SortType>(
    initialStates.sortColumn
  );

  const { posts, isLoading } = usePostsData();

  const filteredTitle = useMemo(() => {
    if (posts.length) {
      return posts.filter(post =>
        post.title.toLowerCase().includes(filterTitle.toLowerCase())
      );
    } else {
      return posts;
    }
  }, [posts, filterTitle]);

  const sortedData = useMemo(() => {
    const { sortBy } = sortColumn;

    if (sortBy) {
      return filteredTitle.toSorted((a, b) => {
        const { sortBy, sortAsc } = sortColumn;

        const [valA, valB] = sortAsc ? [a, b] : [b, a];

        switch (sortBy) {
          case SortBy.TITLE:
            return valA.title.localeCompare(valB.title);

          case SortBy.BODY:
            return valA.body.localeCompare(valB.body);

          case SortBy.USER_ID:
            return valA.userId > valB.userId ? 1 : -1;

          default:
            return 1;
        }
      });
    } else {
      return filteredTitle;
    }
  }, [filteredTitle, sortColumn]);

  const handleSortBy: SortChangeHandlerType = (value: SortType) => {
    setSortColumn(prevState => ({ ...prevState, ...value }));
  };

  const handleResetActions = () => {
    setFilterTitle(initialStates.filterTitle);
    setSortColumn(initialStates.sortColumn);
  };

  return (
    <Container maxWidth="xl" disableGutters>
      <Box p={{ xs: 2, md: 4, lg: 7, xl: 10 }}>
        <ActionsSection
          resetActions={handleResetActions}
          sortColumn={sortColumn}
          filterBy={filterTitle}
          onSortChange={handleSortBy}
          onFilterChange={setFilterTitle}
        />
        {isLoading ? <LinearProgress /> : <Table data={sortedData} />}
      </Box>
    </Container>
  );
}

export default App;
