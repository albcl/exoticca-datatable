import { LinearProgress, styled } from '@mui/material';

export const LoadingProgress = styled(LinearProgress)(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '6px'
}));
