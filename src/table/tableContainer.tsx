import { Table } from 'alon-table';
import { useRecoilValue } from 'recoil';
import { TextFieldRenderer } from '../fieldRenderers/textFieldRenderer';
import { getTableData } from '../recoil/table-data/selectors';
import { useEffect, useRef } from 'react';
import { CustomInput } from '../common/commonComponents/customInput/customInput';

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


    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        window.addEventListener("keydown", (event: KeyboardEvent) => {
            if (event.ctrlKey && event.key === "k") {
                event.preventDefault();
                inputRef.current?.focus();
            }
        });
    }, [])

    return (
        <>
        <CustomInput placeholder='press ctrl + k' ref={inputRef}/>
            {
                columns ?
                    <Table columns={columns as unknown as any} data={data} />
                    : null
            }
        </>
    )
}

export default TableContainer
