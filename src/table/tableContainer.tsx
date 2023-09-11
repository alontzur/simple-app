import { Table } from 'alon-table';
// import 'alon-table/style.css';
import { useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { CustomInput } from '../common/commonComponents/customInput/customInput';
import { TextFieldRenderer } from '../fieldRenderers/textFieldRenderer';
import { getTableData } from '../recoil/table-data/selectors';
import { usefocusOnInputRef } from './customHooks';

function TableContainer() {

    const data = useRecoilValue(getTableData);
    const columns = useMemo(() => data?.[0] &&
        Object.entries(data[0]).map(entry => ({
            header: entry[0],
            cell: (info: any) => <TextFieldRenderer text={info.getValue()}></TextFieldRenderer>,
            accessorKey: entry[0],
        })), [data])


    const inputRef = usefocusOnInputRef();

    return (
        <>
            <CustomInput placeholder='press ctrl + k' ref={inputRef} />
            {
                columns && <Table columns={columns as unknown as any} data={data} />
            }
        </>
    )
}

export default TableContainer
