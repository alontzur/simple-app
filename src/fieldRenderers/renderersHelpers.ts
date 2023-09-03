import configs from "../core/configs"

export const getShortTextToDisplay = (isExpanded: boolean, text: string, sliceSize: number = configs.defaultTextSlice) => {
    text = text + '';

    if (isExpanded) {
        return text;
    }
    return text.slice(0, sliceSize);
}

export const isExpandable = (text: string, sliceSize: number = configs.defaultTextSlice) => {
    return sliceSize < (text + '').length;
}