export class Game {
  private rolls: number[] = Array(21).fill(0);
  private currentRoll: number = 0;

  score(): number {
    let score = 0;
    let frameIndex = 0;
    for (let frame = 0; frame < 10; frame++) {
      if (this.rolls[1] + this.rolls[1 + frameIndex] === 10) {
        // spare
        score += 10 + this.rolls[frameIndex + 2]; // first play of next frame
        frameIndex += 2;
      } else {
        score += this.rolls[frameIndex] + this.rolls[frameIndex + 1];
        frameIndex += 2;
      }
    }
    return score;
  }

  roll(pins: number): void {
    this.rolls[this.currentRoll++] = pins;
  }
}
