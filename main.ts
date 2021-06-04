input.onButtonPressed(Button.A, function () {
    if (sprite.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
        soundExpression.happy.play()
    } else {
        game.removeLife(1)
    }
    basic.showNumber(game.score())
})
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 2)
game.setLife(5)
game.setScore(0)
basic.forever(function () {
    sprite.move(1)
    basic.pause(100)
    sprite.ifOnEdgeBounce()
})
