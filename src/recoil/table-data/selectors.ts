import * as Comlink from 'comlink';
import { atom, selector } from "recoil";
import { TableData } from "../../types/table-data-types";
import { tableDataKeys } from "./keys";
import AppWorker from './worker?worker';

const tableDataState = atom<TableData | null>({
    key: tableDataKeys.tableDataAtom,
    default: null,
});

export const getTableData = selector<TableData>({
    key: tableDataKeys.fetchDataTable,
    get: async ({ get }) => {
        const tableData = get(tableDataState);
        if (tableData) return tableData;

        const func: any = Comlink.wrap(new AppWorker());
        const result = await func();
        return result;        
    }
});