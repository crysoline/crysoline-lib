export interface MMSearchMeta {
    type: string | null;
    score: string | null;
    members: string | null;
    volumes: string | null;
}
export interface MMLink {
    label: string | null;
    url: string | null;
}
export interface MMLRelation {
    id: number | null;
    image: string | null;
    title: string | null;
    relationType: string | null;
}
export interface MMLCharacter {
    id: number | null;
    image: string | null;
    name: string | null;
    role: string | null;
}
export interface MMLVoiceActor {
    id: number | null;
    image: string | null;
    name: string | null;
    language: string | null;
}
export interface MMLInfoMeta {
    moreInfo: string | null;
    score: string | null;
    rank: string | null;
    popularity: string | null;
    members: string | null;
    type: string | null;
    volumes: string | null;
    chapters: string | null;
    status: string | null;
    published: string | null;
    serialization: string | null;
    genres: string[] | null;
    themes: string[] | null;
    authors: string[] | null;
    favorites: string | null;
    externalLinks: MMLink[] | null;
    relations: MMLRelation[] | null;
    characters: MMLCharacter[] | null;
}
