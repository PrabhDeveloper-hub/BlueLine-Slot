export const SYMBOL_IDS = [
    "H1","H2","H3","H4",
];
export const STAGECONFIG = {
    gameWidth:800,
    gameHeight:600
}
export const REELSCONFIG = {
    SYMBOL_SIZE:160,
    REELS_COUNT: 3,
    SYMBOL_PER_REEL:3,
    REEL_WIDTH:160,
    REEL_OFFSET:57,
    SPIN_SPEED:40,
    STOP_TIME:500,
};
export const PAYLINECONFIG = {
    x: -140,
    y: 0   
}
export const PAYLINES = [
    [1,1,1],
    [2,2,2],
    [3,3,3],
    [1,2,3],
    [3,2,1]
];

export const DUMMY_WIN =  [
    [['H2','H1','H2'],['H2','H2','H3'],['H1','H3','H2']]
]