var expect = chai.expect;

describe("isAnagram", function () {
  it("should return true when given the strings 'listen` and `silent`", function () {
    var strA = "listen";
    var strB = "silent";

    var result = isAnagram(strA, strB);

    expect(result).to.eql(true);
  });

  it("should return true when given the strings 'octagonal` and `tganoalc`", function () {
    var strA = "octagonal";
    var strB = "tganoalco";

    var result = isAnagram(strA, strB);

    expect(result).to.eql(true);
  });

  it("should return false when false the strings 'obsidian` and `danisboba`", function () {
    var strA = "obsidian";
    var strB = "danisboba";

    var result = isAnagram(strA, strB);

    expect(result).to.eql(false);
  });

  it("should return false when false the strings 'targaryen` and `gratawyen`", function () {
    var strA = "targaryen";
    var strB = "gratawyen";

    var result = isAnagram(strA, strB);

    expect(result).to.eql(false);
  });
});
