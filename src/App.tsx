import { useMemo, useState } from 'react';

import { useEditData } from '@hooks/useEditData';
import { usePostsData } from '@hooks/usePostsData';
import { Box, Container } from '@mui/material';

import { LoadingProgress } from '@components/atoms/LoadingProgress/LoadingProgress';
import { ActionsSection } from '@components/organisms/ActionsSection';
import { Table } from '@components/organisms/Table';
import { SortBy } from '@components/organisms/Table/constants';

import { SinglePostType } from './services/types';

import { sortTable } from '@utils/sortTable';

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
  const { mutate, isPending } = useEditData();

  const handleEdit = (id: number, data: Partial<SinglePostType>) => {
    mutate({ postId: id, payload: data });
  };

  const handleSortBy: SortChangeHandlerType = (value: SortType) => {
    setSortColumn(prevState => ({ ...prevState, ...value }));
  };

  const handleResetActions = () => {
    setFilterTitle(initialStates.filterTitle);
    setSortColumn(initialStates.sortColumn);
  };

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
      return sortTable(filteredTitle, sortColumn);
    } else {
      return filteredTitle;
    }
  }, [filteredTitle, sortColumn]);

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

        {(isLoading || isPending) && <LoadingProgress />}
        <Table data={sortedData} onEdit={handleEdit} />
      </Box>
    </Container>
  );
}

export default App;
