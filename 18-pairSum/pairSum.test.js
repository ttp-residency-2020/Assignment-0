// This file is only for viewing;

const pairSum = require("./pairSum");
const { expect } = require("chai");

describe("the pairSum(nums, target) function", function() {

  it("should throw an error if the length of `nums` array is 1 or lower", function() {
    let submittedSolution = pairSum;
    expect(function() { submittedSolution([], 9000) }).to.throw();
    expect(function() { submittedSolution([9], 9000) }).to.throw();
  })

  it("should not throw an error if the length of `nums` array is 2 or greater", function() {
    let submittedSolution = pairSum;
    expect(function() { submittedSolution([1,2], 9000) }).to.not.throw();
    expect(function() { submittedSolution([1,2,3], 9000) }).to.not.throw();
  })

  it("should return a boolean value", function() {
    let submittedSolution = pairSum([1,2,3], 4);
    expect(submittedSolution, "the output is not a boolean value").to.be.a("boolean");
  })

  it("should not mutate the input array `nums`", function() {
    let sampleNums = [10,20,30,40,50,60,70,80,90,100,95];
    pairSum(sampleNums, 150);
    expect(sampleNums).to.eql([10,20,30,40,50,60,70,80,90,100,95]);
  })

  it("should return `false` if no two distinct numbers sum up to `target` value", function() {
    let submittedSolution = pairSum([100,150,200,250], 1000);
    expect(submittedSolution).to.be.false;
  })

  it("should return `true` if two distinct numbers sum up to `target` value", function() {
    let submittedSolution = pairSum([100,150,200,250], 400);
    expect(submittedSolution).to.be.true;
  })

  it("should pass auxillary test cases", function() {
    let submittedSolution = pairSum;
    expect(submittedSolution([20,20], 20)).to.be.false;
    expect(submittedSolution([100,200], 150)).to.be.false;
    expect(submittedSolution([5,3,1], 9)).to.be.false;
    expect(submittedSolution([5,3,1], 6)).to.be.true;
    expect(submittedSolution([2,2,2,2,2,2], 4)).to.be.true;
    expect(submittedSolution([33,66,99], 99)).to.be.true;
  })

})