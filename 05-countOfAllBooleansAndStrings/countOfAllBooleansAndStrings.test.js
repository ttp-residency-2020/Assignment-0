// This file is only for viewing;

const countOfAllBooleansAndStrings = require("./countOfAllBooleansAndStrings");
const { expect } = require("chai");

describe("the countOfAllBooleansAndStrings(arr) function", function() {

  it("should return a finite value", function() {
    let submittedSolution = countOfAllBooleansAndStrings([true, false, true]);
    expect(submittedSolution, "the output is not a finite number").to.be.finite;
  })

  it("should return a value that indicates the total amount of boolean and string values in the input array", function() {
    let submittedSolution = countOfAllBooleansAndStrings([false, true, true, "hello", "world", 7]);
    expect(submittedSolution, "the output does not reflect an accurate amount of boolean and string values").to.equal(5);
  })

  it("should pass auxillary test cases", function() {
    let auxillaryTestCases = [[true, true], [1,2,false,false], [true, true, false, false], [8, "hello", undefined, null, false, false, false, false, false], ["yes", "no", "true", "false"]];
    let submittedSolution = countOfAllBooleansAndStrings;
    expect(submittedSolution(auxillaryTestCases[0])).to.equal(2);
    expect(submittedSolution(auxillaryTestCases[1])).to.equal(2);
    expect(submittedSolution(auxillaryTestCases[2])).to.equal(4);
    expect(submittedSolution(auxillaryTestCases[3])).to.equal(6);
    expect(submittedSolution(auxillaryTestCases[4])).to.equal(4);
  })

  it("should not conduct mutative operations on the input array", function() {
    let sampleArr = [null, "lorem", "ipsum", "words", "random", true, false];
    countOfAllBooleansAndStrings(sampleArr);
    expect(sampleArr).to.eql([null, "lorem", "ipsum", "words", "random", true, false]);
  })

})