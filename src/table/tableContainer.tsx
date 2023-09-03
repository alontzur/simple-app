import { Table } from 'alon-table';
import { useRecoilValue } from 'recoil';
import { TextFieldRenderer } from '../fieldRenderers/textFieldRenderer';
import { getTableData } from '../recoil/table-data/selectors';

function TableContainer() {

  const loadebleData = useRecoilValue(getTableData);
  const data = loadebleData;
  const columns = data?.[0] ?
    Object.entries(data[0]).map(entry => ({
      header: entry[0],
      cell: (info: any) => <TextFieldRenderer text={info.getValue()}></TextFieldRenderer>,
      accessorKey: entry[0],
    }))
    : null

  return (
    <>
      {
        columns ?
          <Table columns={columns as unknown as any} data={data} />
          : null
      }
    </>
  )
}

export default TableContainer
