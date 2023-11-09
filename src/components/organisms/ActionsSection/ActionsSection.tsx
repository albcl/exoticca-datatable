import { useCallback } from 'react';

import FilterListIcon from '@mui/icons-material/FilterList';
import { Box, Button, InputAdornment } from '@mui/material';

import { InputField } from 'src/components/atoms/InputField/InputField';

import { SortsSection } from '../../molecules/SortsSection/SortsSection';
import { type ActionsSectionProps } from './types';

export function ActionsSection({
  onFilterChange,
  onSortChange,
  resetActions,
  sortColumn,
  filterBy
}: ActionsSectionProps) {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      onFilterChange(e.target.value);
    },
    [onFilterChange]
  );

  const { sortBy, sortAsc } = sortColumn;
  const minWidth = 200;

  return (
    <Box
      component={'form'}
      display={'flex'}
      alignItems={'center'}
      justifyContent="space-between"
    >
      <Box display={'flex'} gap={6}>
        <InputField
          label="Filter by"
          onChange={handleChange}
          value={filterBy}
          endAdornment={
            <InputAdornment position="end">
              <FilterListIcon />
            </InputAdornment>
          }
        />

        <SortsSection
          minWidth={minWidth}
          sortBy={sortBy}
          sortAsc={sortAsc}
          onSortChange={onSortChange}
        />
      </Box>

      <Button variant="contained" color="info" onClick={resetActions}>
        Reset!
      </Button>
    </Box>
  );
}
