import { Box, Container, LinearProgress } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

import { DataTable } from './components/DataTable/DataTable';
import { getPosts } from './services/getPosts';

function App() {
  const { isLoading, data = [] } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts
  });

  const headerLabels = ['ID', 'User ID', 'Title', 'Body'];

  return (
    <Container maxWidth="xl" disableGutters>
      <Box p={{ xs: 2, md: 4, lg: 7, xl: 10 }}>
        {isLoading ? (
          <LinearProgress />
        ) : (
          <DataTable>
            <DataTable.Header cells={headerLabels} />
            <DataTable.Body>
              {data.map(el => (
                <DataTable.Row key={el.id}>
                  <DataTable.Cell>{el.id}</DataTable.Cell>
                  <DataTable.Cell>{el.userId}</DataTable.Cell>
                  <DataTable.Cell>{el.title}</DataTable.Cell>
                  <DataTable.Cell>{el.body}</DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable.Body>
          </DataTable>
        )}
      </Box>
    </Container>
  );
}

export default App;
