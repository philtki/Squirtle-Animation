class Squirtle {
	constructor(game) {
		this.game = game;
		this.walk = new Animator(ASSET_MANAGER.getAsset("./squirtle_walk.png"),
								4, 0, 229, 240, 10, 0.2);
		this.shell = new Animator(ASSET_MANAGER.getAsset("./squirtle_shell.png"),
								0, 30, 144.5, 170, 8, .12);
		this.count = 0	//counter until shell animation is reached
		this.x = -100;
		this.y = 538;
		this.speed = 350;
	};

	update() {
		this.x += this.speed * this.game.clockTick;
		//before shell transformation
		if (this.count <= 147) {
			this.speed = 350
		}
		//when shell goes back and forth
		if (this.x >= 1010) {
			this.speed = -550
		} else if (this.x <= -10) {
			this.speed = 550
		}
	};

	draw(ctx) {
		this.count++;
		//drawing before shell transformation
		if (this.count <= 147) {
			this.walk.drawFrame(this.game.clockTick, ctx, this.x, this.y, 1);
		}
		//drawing after shell transformation
		if (this.count > 147) {
			this.shell.drawFrame(this.game.clockTick, ctx, this.x, 634, 1);
		}
	};
}
