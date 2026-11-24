enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const Text = SpriteKind.create()
    export const Ball = SpriteKind.create()
    export const Booth = SpriteKind.create()
    export const Mouse = SpriteKind.create()
    export const Crosshair = SpriteKind.create()
    export const Moon = SpriteKind.create()
}
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(gay_2)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(cool_gay, 100, 100)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
let myTextSprite: fancyText.TextSprite = null
let cool_gay: Sprite = null
let gay_2: Sprite = null
light.setAll("test".length)
forever(function () {
	
})
forever(function () {
    gay_2 = sprites.create(assets.image`gay 2`, SpriteKind.Player)
})
forever(function () {
    music.play(music.createSong(assets.song`tree man god boy0`), music.PlaybackMode.UntilDone)
})
forever(function () {
    scene.setBackgroundImage(assets.image`bk1`)
})
forever(function () {
    cool_gay = sprites.create(assets.image`tree man cool gay`, SpriteKind.Player)
})
forever(function () {
    myTextSprite = fancyText.create("legos", 0)
})
