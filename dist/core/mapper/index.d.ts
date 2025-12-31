declare const Mapper: (apiKey: string) => {
    map: (params: {
        id: number;
        provider: string;
    }) => Promise<unknown>;
};
export { Mapper };
