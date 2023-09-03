import * as Comlink from 'comlink';
import axios from "axios";
import { flatten, longCalculation } from "../../common/commonFunctions";

export const getData = async () => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    longCalculation();
    const newTableData = (await axios("https://api.tvmaze.com/search/shows?q=snow") as any).data;
    const flattenTableData = newTableData.map((row: any) => flatten(row));
    const formatedTableData = flattenTableData.map((row: any, i: number) => { return { ...row, ...{ id: i } } });
    return formatedTableData;
}

Comlink.expose(getData);