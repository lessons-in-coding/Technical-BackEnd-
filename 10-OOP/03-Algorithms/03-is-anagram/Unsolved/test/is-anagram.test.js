var expect = chai.expect;

describe('isAnagram', function() {
  it("should return true when given the strings 'abc` and `cba`", function() {
    var strA = 'abc'; // a=1 b=1 c=1
    var strB = 'cba'; // c=1 b=1 a=1

    var result = isAnagram(strA, strB);

    expect(result).to.eql(true);
  });

  it("should return true when given the strings 'octagonal` and `tganoalc`", function() {
    var strA = 'octagonal'; //o=2 c=1 t=1 g=1 a=2 n=1 l=1
    var strB = 'tganoalco'; //t=1 g=1 a=2 n=1 o=2 l=1 c=1 

    var result = isAnagram(strA, strB);

    expect(result).to.eql(true);
  });

  it("should return false when false the strings 'obsidian` and `danisboba`", function() {
    var strA = 'obsidian';
    var strB = 'danisboba';

    var result = isAnagram(strA, strB);

    expect(result).to.eql(false);
  });

  it("should return false when false the strings 'targaryen` and `gratawyen`", function() {
    var strA = 'targaryen';
    var strB = 'gratawyen';

    var result = isAnagram(strA, strB);

    expect(result).to.eql(false);
  });
});
