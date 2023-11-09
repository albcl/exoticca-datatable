import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    background: { default: '#eef3f9' }
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.common.white,
          minWidth: 200,
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.grey[400]
          }
        }),
        notchedOutline: ({ theme }) => ({
          borderColor: theme.palette.grey[300]
        })
      }
    },
    MuiTable: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderCollapse: 'separate',
          borderSpacing: `0 ${theme.spacing(1)}`
        })
      }
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          th: {
            backgroundColor: '#f7f8fb',
            border: 'none'
          }
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.background.paper,
          border: 'none',
          '&:first-of-type': {
            paddingLeft: theme.spacing(5),
            borderRadius: `${theme.spacing(1)} 0 0 ${theme.spacing(1)}`
          },
          '&:last-of-type': {
            paddingRight: theme.spacing(5),
            borderRadius: `0 ${theme.spacing(1)} ${theme.spacing(1)} 0`
          }
        })
      }
    }
  }
});
