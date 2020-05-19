// This file is only for viewing;

const countOfAllNumbersSmallerThanTarget = require("./countOfAllNumbersSmallerThanTarget");
const { expect } = require("chai");

describe("the countOfAllNumbersSmallerThanTarget(nums) function", function() {

  it("should return a finite value", function() {
    let submittedSolution = countOfAllNumbersSmallerThanTarget([6,7,8,9,10], 5);
    expect(submittedSolution, "the output is not a finite number").to.be.finite;
  })

  it("should return a value that indicates the total amount of values less than the target", function() {
    let submittedSolution = countOfAllNumbersSmallerThanTarget([44,22,33], 1000);
    expect(submittedSolution, "the output does not reflect an accurate amount of numbers less than target").to.equal(3);
  })

  it("should pass auxillary test cases", function() {
    let auxillaryNums = [[1,2], [1,2,3], [1,2,3,4], [888, 23,62,100,5,4,3,2,1], [9000]];
    let auxillaryTargets = [5, 5, 2, 500, 22]
    let submittedSolution = countOfAllNumbersSmallerThanTarget;
    expect(submittedSolution(auxillaryNums[0], auxillaryTargets[0])).to.equal(2);
    expect(submittedSolution(auxillaryNums[1], auxillaryTargets[1])).to.equal(3);
    expect(submittedSolution(auxillaryNums[2], auxillaryTargets[2])).to.equal(1);
    expect(submittedSolution(auxillaryNums[3], auxillaryTargets[3])).to.equal(8);
    expect(submittedSolution(auxillaryNums[4], auxillaryTargets[4])).to.equal(0);
  })

  it("should not conduct mutative operations on the input array", function() {
    let sampleNums = [1,2,3,4,5];
    let sampleTarget = 27;
    countOfAllNumbersSmallerThanTarget(sampleNums, sampleTarget);
    expect(sampleNums).to.eql([1,2,3,4,5]);
  })

})