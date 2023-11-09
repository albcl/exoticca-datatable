import { styled } from '@mui/material';

export const FormCell = styled('form')(({ theme }) => ({
  position: 'relative',

  '& input + fieldset': {
    borderColor: 'transparent',
    transition: `border .${theme.transitions.duration.shorter}s ${theme.transitions.easing.easeIn}`
  },

  '&:hover': {
    color: theme.palette.info.light,
    '& input + fieldset': {
      borderColor: 'red'
    }
  }
}));
