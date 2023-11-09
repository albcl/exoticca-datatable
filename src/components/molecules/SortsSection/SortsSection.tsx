import { useCallback } from 'react';

import {
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  InputLabel,
  MenuItem,
  Select,
  type SelectChangeEvent,
  Switch,
  Typography
} from '@mui/material';

import {
  SortBy,
  TABLE_HEADER_LABELS
} from 'src/components/organisms/Table/constants';

import type { SortsSectionProps } from './types';

const sortByItems = [
  { id: SortBy.USER_ID, label: TABLE_HEADER_LABELS[SortBy.USER_ID] },
  { id: SortBy.TITLE, label: TABLE_HEADER_LABELS[SortBy.TITLE] },
  { id: SortBy.BODY, label: TABLE_HEADER_LABELS[SortBy.BODY] }
];
export function SortsSection({
  minWidth,
  sortBy,
  sortAsc,
  onSortChange
}: SortsSectionProps) {
  const handleSorting = useCallback(
    (e: SelectChangeEvent<SortBy | string>) => {
      const { value } = e.target;
      const sortBy = typeof value === 'string' ? SortBy.NONE : value;

      onSortChange({ sortBy, sortAsc });
    },
    [onSortChange]
  );

  const toggleOrder = useCallback(() => {
    onSortChange({ sortAsc: !sortAsc, sortBy });
  }, [onSortChange]);

  return (
    <>
      <FormControl>
        <InputLabel htmlFor="select-sort">Sorty by</InputLabel>
        <Select
          variant="outlined"
          sx={{ minWidth }}
          id="select-sort"
          label="Sorty by"
          onChange={handleSorting}
          defaultValue={''}
          value={!sortBy ? '' : sortBy}
        >
          {sortByItems.map(item => (
            <MenuItem key={item.id} value={item.id}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl>
        <FormLabel disabled={!sortBy}>
          <Typography variant="caption">Sorting order</Typography>
        </FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                disabled={!sortBy}
                defaultChecked
                onChange={toggleOrder}
              />
            }
            label="Ascending"
          />
        </FormGroup>
      </FormControl>
    </>
  );
}
