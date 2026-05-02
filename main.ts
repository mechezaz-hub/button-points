input.onButtonPressed(Button.B, function () {
    score += 2
})
pins.onPulsed(DigitalPin.P0, PulseValue.High, function () {
    score += 2
    basic.showNumber(score)
    music.play(music.createSoundExpression(WaveShape.Noise, 5000, 1, 255, 0, 9999, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
})
let score = 0
score = 0
basic.showNumber(score)
