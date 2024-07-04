export const SYMBOL_IDS = [
    "H2","H3","H4","L1","L2","L3","L4"
];
export const STAGECONFIG = {
    gameWidth:800,
    gameHeight:600
}
export const REELSCONFIG = {
    SYMBOL_SIZE:160,
    REELS_COUNT: 3,
    SYMBOL_PER_REEL:1,
    REEL_WIDTH:160,
    REEL_OFFSET:50,
    SPIN_SPEED:40,
    STOP_TIME:500
};
export const PAYLINECONFIG = {
    x: -224,
    y: 50
}
export const PAYLINES = [
    [1,1,1],
    [2,2,2],
    [3,3,3],
    [1,2,3],
    [3,2,1]
];

export const DUMMY_WIN =  [
    [['H2','L1','L1'],['H2','H2','L1'],['L1','L3','H2']]
]