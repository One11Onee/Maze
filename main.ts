scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    info.changeScoreBy(1)
    if (info.score() == 0) {
        tiles.setTilemap(tilemap`level_2`)
    } else if (info.score() == 1) {
        tiles.setTilemap(tilemap`level_3`)
    } else if (info.score() == 2) {
        tiles.setTilemap(tilemap`level_4`)
    } else if (info.score() == 3) {
        tiles.setTilemap(tilemap`level_5`)
    } else if (info.score() == 4) {
        tiles.setCurrentTilemap(tilemap`level_7`)
    } else if (info.score() == 5) {
        tiles.setCurrentTilemap(tilemap`level_6`)
    } else if (info.score() == 6) {
        tiles.setCurrentTilemap(tilemap`level_8`)
    } else if (info.score() == 7) {
        tiles.setCurrentTilemap(tilemap`level_9`)
    } else if (info.score() == 8) {
        tiles.setCurrentTilemap(tilemap`level_10`)
    } else if (info.score() == 9) {
        tiles.setCurrentTilemap(tilemap`level6`)
    } else if (info.score() == 10) {
        tiles.setCurrentTilemap(tilemap`level8`)
    } else {
        game.gameOver(true)
    }
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairLadder)
    scene.cameraFollowSprite(mySprite)
    info.startCountdown(777)
})
let mySprite: Sprite = null
info.setScore(0)
mySprite = sprites.create(img`
    . . . . 2 2 2 2 2 2 2 2 2 . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 1 1 1 1 1 1 2 2 2 2 2 2 2 2 . 
    . 1 1 1 1 1 1 2 2 2 2 2 2 2 2 . 
    . 1 1 1 1 1 1 2 2 2 2 2 2 2 2 . 
    . 1 1 1 1 1 1 2 2 2 2 2 2 2 2 . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
    . . 2 2 2 2 2 . 2 2 2 2 2 . . . 
    . . 2 2 2 2 2 . 2 2 2 2 2 . . . 
    . . 2 2 2 2 2 . 2 2 2 2 2 . . . 
    . . 2 2 2 2 2 . 2 2 2 2 2 . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
tiles.setTilemap(tilemap`level_2`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairLadder)
scene.cameraFollowSprite(mySprite)
info.startCountdown(777)
