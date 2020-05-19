// This file is only for viewing;

const setUnionOfAnyAmountOfSets = require("./setUnionOfAnyAmountOfSets");
const { expect } = require("chai");
const sinon = require("sinon");

describe("the setUnionOfAnyAmountOfSets(...args) function", function() {

  it("should return a set", function() {
    let setA = new Set([1]);
    let setB = new Set([2]);
    let setC = new Set([3]);

    let submittedSolution = setUnionOfAnyAmountOfSets(setA, setB, setC);
    expect(submittedSolution, "the output is not a set").to.be.a("set");
  })

  it("should be able to take in an indefinite amount of arguments", function() {
    let submittedSolution = setUnionOfAnyAmountOfSets;
    let mySpy = sinon.spy(submittedSolution);

    let setA = new Set([1,2,3]);
    let setB = new Set([2,3,4]);
    let setC = new Set([3,4,5]);
    let setD = new Set([4,5,6]);
    
    mySpy(setA);
    let spyCallA = mySpy.getCall(0);
    expect(spyCallA.args).to.have.lengthOf(1);

    mySpy(setA, setB);
    let spyCallB = mySpy.getCall(1);
    expect(spyCallB.args).to.have.lengthOf(2);

    mySpy(setA, setB, setC);
    let spyCallC = mySpy.getCall(2);
    expect(spyCallC.args).to.have.lengthOf(3);

    mySpy(setA, setB, setC, setD);
    let spyCallD = mySpy.getCall(3);
    expect(spyCallD.args).to.have.lengthOf(4);
  })

  it("should return the set union of the entire collection of sets", function() {
    let setA = new Set([1,2,3]);
    let setB = new Set([4,5,6]);
    let setC = new Set([7,8,9]);
    let setD = new Set([10,11,12]);

    let submittedSolution = setUnionOfAnyAmountOfSets(setA, setB, setC, setD);
    expect(submittedSolution, "the output does not reflect an accurate set union").to.eql(new Set([1,2,3,4,5,6,7,8,9,10,11,12]));
  })

  it("should pass auxillary test cases", function() {
    let submittedSolution = setUnionOfAnyAmountOfSets;
    
    let setA = new Set([10,20]);
    let setB = new Set([30,40]);
    let setC = new Set([10,20,30,40,50,60,70]);
    expect(submittedSolution(setA, setB)).to.eql(new Set([10,20,30,40]));
    expect(submittedSolution(setA, setB, setC)).to.eql(new Set([10,20,30,40,50,60,70]));
    expect(submittedSolution(setA, setC)).to.eql(new Set([10,20,30,40,50,60,70]));
    expect(submittedSolution(setB, setC)).to.eql(new Set([10,20,30,40,50,60,70]));
  })

})