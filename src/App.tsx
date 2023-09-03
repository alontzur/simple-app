import { Suspense } from 'react';
import './App.css';
import './AppVariables.scss';
import TableContainer from './table/tableContainer';
import { LinesSkelatonLoader } from './common/commonComponents/skelatonLoaders';

function App() {

  return (
    <Suspense fallback={<LinesSkelatonLoader count={60}/>}>
      <TableContainer />
    </Suspense>
  )
}

export default App
