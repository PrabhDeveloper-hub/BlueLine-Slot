export const SYMBOL_IDS = [
    "H1", "H2", "H3", "H4",
];
export const STAGECONFIG = {
    gameWidth: 800,
    gameHeight: 600
}
export const REELSCONFIG = {
    REELCONTAINER: {
        x: -180,
        y: 20
    },
    SYMBOL_SIZE: 160,
    REELS_COUNT: 3,
    SYMBOL_PER_REEL: 3,
    REEL_WIDTH: 160,
    REEL_OFFSET: 140,
    SPIN_SPEED: 70,
    STOP_TIME: 700,
};

export const WINCONFIG = {
    ANIMATION_TIME: 1200
}
export const PAYLINES = [
    [1, 1, 1],
    [1, 1, 2],
    [1, 2, 1],
    [1, 2, 2],
    [1, 2, 3],
    [2, 1, 1],
    [2, 1, 2],
    [2, 2, 1],
    [2, 2, 2],
    [2, 2, 3],
    [2, 3, 2],
    [2, 3, 3],
    [3, 2, 1],
    [3, 2, 2],
    [3, 2, 3],
    [3, 3, 3],
    [3, 3, 2]
];
export const PARTICLE_PROPS ={
	"alpha": {
		"start": 1,
		"end": 0.22
	},
	"scale": {
		"start": 0.25,
		"end": 0.75,
		"minimumScaleMultiplier": 0.5
	},
	"color": {
		"start": "ffffff",
		"end": "ffffff"
	},
	"speed": {
		"start": 200,
		"end": 50
	},
	"startRotation": {
		"min": 0,
		"max": 360
	},
	"rotationSpeed": {
		"min": 0,
		"max": 10
	},
	"lifetime": {
		"min": 4,
		"max": 10
	},
	"blendMode": "screen",
	"frequency": 0.016,
	"emitterLifetime": 0,
	"maxParticles": 500,
	"pos": {
		"x": 400,
		"y": 0
	},
	"addAtBack": false,
	"spawnType": "point"
}
export const DUMMY_WIN = [
    [['H2', 'H1', 'H2'], ['H2', 'H2', 'H3'], ['H1', 'H3', 'H2']]
]