const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./squirtle_walk.png");
ASSET_MANAGER.queueDownload("./squirtle_shell.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;

	gameEngine.addEntity(new Squirtle(gameEngine));

	gameEngine.init(ctx);

	gameEngine.start();
});
