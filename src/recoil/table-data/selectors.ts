import { atom, selector } from "recoil";
import { tableDataKeys } from "./keys";
import axios from "axios";
import { Row, TableData } from "../../types/table-data-types";
import { flatten, longCalculation } from "../../common/commonFunctions";

const tableDataState = atom<TableData | null>({
    key: tableDataKeys.tableDataAtom,
    default: null,
});

export const getTableData = selector<TableData>({
    key: tableDataKeys.fetchDataTable,
    get: async ({ get }) => {
        const tableData = get(tableDataState);
        if (tableData) return tableData;
        await new Promise(resolve => setTimeout(resolve, 1500));
        // longCalculation();
        const newTableData = (await axios("https://api.tvmaze.com/search/shows?q=snow") as any).data;
        const flattenTableData = newTableData.map((row: any) => flatten(row));
        const formatedTableData = flattenTableData.map((row: Row, i: number) => { return { ...row, ...{ id: i } } })
        return formatedTableData;
    }
});