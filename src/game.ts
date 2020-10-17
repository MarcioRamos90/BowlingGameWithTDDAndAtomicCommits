export class Game {
  private rolls: number[] = Array(21).fill(0);
  private currentRoll: number = 0;

  score(): number {
    let score = 0;
    let i = 0;
    for (let frame = 0; frame < 10; frame++) {
      if (this.rolls[1] + this.rolls[1 + i] === 10) {
        // spare
        score += 10 + this.rolls[i + 2]; // first play of next frame
        i += 2;
      } else {
          score += this.rolls[i] + this.rolls[i + 1];
          i += 2;
      }
    }
    return score;
  }

  roll(pins: number): void {
    this.rolls[this.currentRoll++] = pins;
  }
}
