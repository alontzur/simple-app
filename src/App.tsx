import { Suspense } from 'react';
import './App.css';
import './AppVariables.scss';
import TableContainer from './table/tableContainer';
import { LinesSkelatonLoader } from './common/commonComponents/skelatonLoaders';
import { MousePosWrapper } from './common/commonComponents/mousePos/mousePositionWrapper';

function App() {

  return (
    <MousePosWrapper>
      <Suspense fallback={<LinesSkelatonLoader count={60} />}>
        <TableContainer />
      </Suspense>
    </MousePosWrapper>
  )
}

export default App
