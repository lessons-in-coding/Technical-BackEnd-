const linearSearch = require('../linear-search');

beforeAll(function() {
  jest.spyOn(Array.prototype, 'indexOf');
});

// afterAll(() => {
//   jest.restoreAllMocks();
// })

describe('linearSearch', function() {
  it("should not call the 'indexOf' method", function() {
    var arr = [8, 22, 3, 0, -2];
    var target = 3;

    var result = linearSearch(arr, target);

    expect(Array.prototype.indexOf).not.toHaveBeenCalled();
  });

  it('should return 2 when given the array [8, 22, 3, 0, -2] and a target of 3', function() {
    var arr = [8, 22, 3, 0, -2];
    var target = 3;

    var result = linearSearch(arr, target);

    expect(result).toBe(2);
  });

  it('should return -1 when given the array [13, 5, 6] and a target of 11', function() {
    var arr = [13, 5, 6];
    var target = 11;

    var result = linearSearch(arr, target);

    expect(result).toEqual(-1);
  });

  it('should return -1 when given the array [] and a target of 0', function() {
    var arr = [];
    var target = 0;

    var result = linearSearch(arr, target);

    expect(result).toEqual(-1);
  });
});
