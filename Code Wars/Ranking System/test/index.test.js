const User = require("../index");

describe("User", () => {
  describe("rank and progress", () => {
    it("should return rank and progress", () => {
      const rank = -8;
      const progress = 10;
      const user = new User(-8, 10);
      expect(user.rank).toEqual(rank);
      expect(user.progress).toEqual(progress);
    });
  });
  describe("incProgress function", () => {
    it("should return large positive if problem rank is higher than user rank", () => {
      const progress = 40;
      const user = new User(-8, 0);
      user.incProgress(-6);
      expect(user.progress).toEqual(progress);
    });
    it("should return 0 or low progress if problem rank is lower than user rank", () => {
      const prog1 = 11;
      const prog2 = 14;
      const user = new User(-5, 10);
      user.incProgress(-8);
      user.incProgress(-6);
      expect(user.progress).toEqual(prog1);
      user.incProgress(-5);
      expect(user.progress).toEqual(prog2);
    });
    it("should rank up when progress is 100", () => {
      const rank = -7;
      const user = new User(-8, 90);
      user.incProgress(-5);
      expect(user.rank).toEqual(rank);
    });
    it("should skip 0 when rank is at -1", () => {
      const rank = 1;
      const user = new User(-1, 90);
      user.incProgress(1);
      expect(user.rank).toEqual(rank);
    });
  });
});
