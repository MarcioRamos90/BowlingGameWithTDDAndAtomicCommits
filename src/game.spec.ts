import { Game } from './game'

let g: Game = new Game()

beforeEach(() => {
    g = new Game()
})

describe("Bouling game", () => {
  it("should score 0 for gutter game", () => {
    for (let i = 0; i < 20; i++) {
        g.roll(0);
    }
    expect(g.score).toBe(0)
  });

  it('should score 20 for all ones game', () => {
    for (let i = 0; i < 20; i++) {
        g.roll(1);
    }
      expect(g.score).toBe(20);
  });
});
