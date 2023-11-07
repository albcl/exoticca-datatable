import { Table, TableCell, TableHead, styled } from '@mui/material';

export const DataTable = styled(Table)(({ theme }) => ({
  borderCollapse: 'separate',
  borderSpacing: `0 ${theme.spacing(1)}`
}));

export const Header = styled(TableHead)(({ theme }) => ({
  th: {
    backgroundColor: '#f7f8fb',
    color: theme.palette.text.secondary,
    fontWeight: theme.typography.fontWeightRegular,
    border: 'none'
  }
}));

export const Cell = styled(TableCell)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  border: 'none',

  '&:first-child': {
    paddingLeft: theme.spacing(5),
    borderRadius: `${theme.spacing(1)} 0 0 ${theme.spacing(1)}`
  },
  '&:last-child': {
    paddingRight: theme.spacing(5),
    borderRadius: `0 ${theme.spacing(1)} ${theme.spacing(1)} 0`
  }
}));
