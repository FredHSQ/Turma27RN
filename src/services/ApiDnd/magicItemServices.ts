import axios, { AxiosResponse } from "axios";

const apiDnd = axios.create({
    baseURL: 'https://www.dnd5eapi.co/api/2014/'
});

interface getMagicItemListProps {
    count: number,
    results: magicItemListProps[]
}

export interface magicItemListProps {
    index: string,
    name: string,
    url: string
}

export function getMagicItemList(): Promise<AxiosResponse<getMagicItemListProps, any>> {
    const url = 'magic-items/';

    return apiDnd.get(url);
};