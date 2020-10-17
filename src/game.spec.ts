import { Game } from "./game";

let g: Game = new Game();

beforeEach(() => {
  g = new Game();
});

describe("Bouling game", () => {
  it("should score 0 for gutter game", () => {
    rollMany(20, 0);
    expect(g.score()).toBe(0);
  });

  it("should score 20 for all ones game", () => {
    rollMany(20, 1);
    expect(g.score()).toBe(20);
  });

  it("should score 16 with a spare followed by a 3 ball", () => {
    rollSpare();
    g.roll(3);
    expect(g.score()).toBe(16);
  });

  function rollSpare() {
    g.roll(5);
    g.roll(5); // spare
  }

  function rollMany(n: number, pins: number): void {
    for (let i = 0; i < n; i++) {
      g.roll(pins);
    }
  }
});
