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
namespace StatusBarKind {
    export const cool = StatusBarKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(cool_gay, 100, 100)
})
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(gay_2)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    fancyText.setFrame(myTextSprite, assets.image`FIN`)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(cool_gay, 100, 100)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(cool_gay, 100, 100)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(cool_gay, 100, 100)
})
let zobe: Sprite = null
let myTextSprite: fancyText.TextSprite = null
let gay_2: Sprite = null
let cool_gay: Sprite = null
light.setAll("test".length)
game.onUpdate(function () {
    info.setLife(3)
})
game.onUpdate(function () {
	
})
forever(function () {
    light.setAll("RAINBOW".length)
})
forever(function () {
    zobe = sprites.create(assets.image`zobey`, SpriteKind.Enemy)
})
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
    myTextSprite = fancyText.create("RAD DWARF", 0)
})
