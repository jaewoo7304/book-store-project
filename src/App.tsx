import Home from './pages/Home';
import Layout from './components/layout/Layout';
import { ThemeProvider } from 'styled-components';
import {dark, light} from "./style/theme";
import { GlobalStyle } from './style/global';

function App() {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle/>
      <Layout>
        <Home/>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
