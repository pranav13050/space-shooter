controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . e e f f e e . . . . . 
        . . . . . e 7 7 7 7 e . . . . . 
        . . . . . e 7 7 7 7 e . . . . . 
        . . . . . e 7 7 7 7 e . . . . . 
        . . . . . e e 7 7 e e . . . . 3 
        . . . . . . e e e e . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 100, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.fire, 500)
    scene.cameraShake(4, 500)
})
let EnemyShip: Sprite = null
let projectile2: Sprite = null
let mySprite: Sprite = null
effects.starField.startScreenEffect()
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . 8 8 8 8 . . 
    . . . . . . . . . 8 8 . . . . . 
    . . . . . . . . . 8 . . . . . . 
    . . . . . . 8 8 8 8 . . . . . . 
    . . . . . . 8 . . . . . . . . . 
    . 8 9 9 9 9 f 9 9 9 9 9 9 9 5 . 
    . 8 9 9 9 9 f 9 9 9 9 9 9 9 5 . 
    . 8 9 9 9 9 f 9 9 9 9 9 9 9 5 . 
    . . . . . . 8 . . . . . . . . . 
    . . . . . . 8 8 8 8 . . . . . . 
    . . . . . . . . . 8 . . . . . . 
    . . . . . . . . . 8 8 . . . . . 
    . . . . . . . . . . 8 8 8 8 8 . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 150, 150)
mySprite.setStayInScreen(true)
info.setLife(5)
game.onUpdateInterval(2000, function () {
    EnemyShip = sprites.create(img`
        . . . . . . . 3 2 2 . . . . . . 
        . . . . . . 3 3 2 2 . . . . . . 
        . . . . . 3 3 2 2 2 4 . . . . . 
        . . . . . 3 2 2 2 2 . . . . . . 
        . . . 3 3 3 2 2 2 2 . . . . . . 
        . . 3 3 2 2 2 2 2 2 . . . . 4 . 
        . 3 3 2 2 2 2 2 2 2 . . . . . . 
        8 8 2 2 2 2 2 2 2 2 . . . . . . 
        8 8 2 2 2 2 2 2 2 2 . . . . . . 
        . 3 3 2 2 2 2 2 2 2 . . . . . . 
        . . 3 3 2 2 2 2 2 2 . . . . . . 
        . . . 3 3 3 2 2 2 2 . . . . . . 
        . . . . . 3 2 2 2 2 . . . . . . 
        . . . . . 3 3 2 2 2 4 . . . . . 
        . . . . . . 3 3 2 2 . . . . . . 
        . . . . . . . 3 2 2 . . . . . . 
        `, SpriteKind.Enemy)
    EnemyShip.x = scene.screenWidth()
    EnemyShip.vx = -20
    EnemyShip.y = randint(10, scene.screenHeight() - 10)
})
