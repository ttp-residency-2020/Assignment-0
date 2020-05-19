// This file is only for viewing;

const countOfAllIndexMatchingNumbers = require("./countOfAllIndexMatchingNumbers");
const { expect } = require("chai");

describe("the countOfAllIndexMatchingNumbers(nums) function", function() {

  it("should return a finite value", function() {
    let submittedSolution = countOfAllIndexMatchingNumbers([3,4,5,99]);
    expect(submittedSolution, "the output is not a finite number").to.be.finite;
  })

  it("should return a value that indicates the total amount of numbers that are equivalent to their index value", function() {
    let submittedSolution = countOfAllIndexMatchingNumbers([44,22,33]);
    expect(submittedSolution, "the output does not reflect an accurate amount of index-matching numbers").to.equal(0);
  })

  it("should pass auxillary test cases", function() {
    let auxillaryNums = [[0], [0,1], [0,1,2], [0,1,2,3], [5,5,5,5,5,5]];
    let submittedSolution = countOfAllIndexMatchingNumbers;
    expect(submittedSolution(auxillaryNums[0])).to.equal(1);
    expect(submittedSolution(auxillaryNums[1])).to.equal(2);
    expect(submittedSolution(auxillaryNums[2])).to.equal(3);
    expect(submittedSolution(auxillaryNums[3])).to.equal(4);
    expect(submittedSolution(auxillaryNums[4])).to.equal(1);
  })

  it("should not conduct mutative operations on the input array", function() {
    let sampleNums = [1,2,3,4,5,6,7,8,9,10];
    countOfAllIndexMatchingNumbers(sampleNums);
    expect(sampleNums).to.eql([1,2,3,4,5,6,7,8,9,10]);
  })

})