// This file is only for viewing;

const StudentSolution = require("./binarySearch");
const { expect } = require("chai");
const sinon = require("sinon");

describe("the binarySearch(nums, target) function", function() {

  let submittedSolution;

  beforeEach(function() {
    submittedSolution = new StudentSolution();
  })

  it("should be an inherited instance method", function() {
    expect(submittedSolution, "be sure to write this function as a class' instance method").to.respondTo("binarySearch");
  })

  it("should return a boolean value", function() {
    expect(submittedSolution.binarySearch([1,2,3,4,5], 5), "the output is not a boolean value").to.be.a("boolean");
  })

  it("should return `false` if the `target` value does not exist in the `nums` input array", function() {
    expect(submittedSolution.binarySearch([1,2,3,4,5], 234)).to.be.false;
  })

  it("should return `true` if the `target` value exists in the `nums` input array", function() {
    expect(submittedSolution.binarySearch([1,2,3,4,5], 1)).to.be.true;
  })

  it("should pass auxillary test cases", function() {
    expect(submittedSolution.binarySearch([1,2,3,4,5,6,7], 9000)).to.be.false;
    expect(submittedSolution.binarySearch([10,20,30,40,50,60,70], 53)).to.be.false;
    expect(submittedSolution.binarySearch([2,4,6,8,10,12,14,16,18,20], 17)).to.be.false;
    expect(submittedSolution.binarySearch([1,5,6,7,77,100], 77)).to.be.true;
    expect(submittedSolution.binarySearch([13,14,15,16,17,18,19,20], 13)).to.be.true;
    expect(submittedSolution.binarySearch([33,66,99,122,155,188], 99)).to.be.true;
  })

  it("should be a recursive solution and approach logarithmic time complexity", function() {
    let mySpy = sinon.spy(submittedSolution, "binarySearch");
    
    submittedSolution.binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 1);
    expect(mySpy.callCount).to.be.greaterThan(1);
    expect(mySpy.callCount).to.be.closeTo(4,1);
    
    mySpy.resetHistory();

    let exampleArrA = Array.from({ length: 100 });
    exampleArrA = exampleArrA.map((_, idx) => idx + 1);
    
    submittedSolution.binarySearch(exampleArrA, 2);
    expect(mySpy.callCount).to.be.greaterThan(1);
    expect(mySpy.callCount).to.be.closeTo(Math.log2(100), 5);

    mySpy.resetHistory();

    let exampleArrB = Array.from({ length: 1000 });
    exampleArrB = exampleArrB.map((_, idx) => idx + 1);

    submittedSolution.binarySearch(exampleArrB, 2);
    expect(mySpy.callCount).to.be.greaterThan(1);
    expect(mySpy.callCount).to.be.closeTo(Math.log2(1000), 5);

    mySpy.resetHistory();
    mySpy.restore();
  })

  it("should not mutate the input array `nums`", function() {
    let sampleNums = [10,20,30,40,50,60,70,80,90,100];
    submittedSolution.binarySearch(sampleNums, 150);
    expect(sampleNums).to.eql([10,20,30,40,50,60,70,80,90,100]);
  })

})