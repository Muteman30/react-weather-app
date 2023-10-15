import {theme} from './theme/theme';
import { ThemeProvider } from '@mui/material';
import PageContainer from './components/layout/PageContainer/PageContainer';
import SearchPage from './view/SearchPage';
import Header from './components/Header/Header'


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header/>
        <PageContainer>
          <SearchPage/>
        </PageContainer>
      </ThemeProvider>
    </div>
  );
}

export default App;
