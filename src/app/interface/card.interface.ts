export interface Card {
    id: number;
    frontTitle: string;
    frontContent: string;
    backTitle: string;
    backContent: string;
    lastTimeChecked: Date;
}

export const cards: Card[] = [
    {
        id: 1,
        frontTitle: "Front Title 1",
        frontContent: "Front Content 1",
        backTitle: "Back Title 1",
        backContent: "Back Content 1",
        lastTimeChecked:new Date(2023, 8, 1, 10, 0, 0)
    },
    {
        id: 2,
        frontTitle: "Front Title 2",
        frontContent: "Front Content 2",
        backTitle: "Back Title 2",
        backContent: "Back Content 2",
        lastTimeChecked:new Date(2024, 8, 1, 10, 0, 0)
    },
    {
        id: 3,
        frontTitle: "Front Title 3",
        frontContent: "Front Content 3",
        backTitle: "Back Title 3",
        backContent: "Back Content 3",
        lastTimeChecked:new Date(2024, 8, 30, 10, 0, 0)
    },
    {
        id: 4,
        frontTitle: "Front Title 4",
        frontContent: "Front Content 4",
        backTitle: "Back Title 4",
        backContent: "Back Content 4",
        lastTimeChecked:new Date(2024, 8, 25, 10, 0, 0)
    },
    // 更多卡片
];