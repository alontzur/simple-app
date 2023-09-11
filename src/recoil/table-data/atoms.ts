import { atom } from "recoil";
import { tableDataKeys } from "./keys";
import { TableData } from "../../types/table-data-types";

export const tableDataState = atom<TableData | null>({
    key: tableDataKeys.tableDataAtom,
    default: null,
});