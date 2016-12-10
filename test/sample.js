var chai = require("chai");
	expect = chai.expect;
	should = chai.should();

var isEven = require("./isEven");

describe.skip("Sample Test Cases", function(){
	
	it("Should verify if given number is even", function(){
		isEven(4).should.be.true;
	})

	it("Should verify if given number is odd", function(){
		isEven(3).should.be.false;
	})

})

function add(num1, num2){
	return num1 + num2;
}

describe.skip("check the functionality of before each", function(){

	it("should return 10 for 5 + 5", function(){
		add(5,5).should.equal(10)
	})


	var num = 5;

	beforeEach(function(){
		num = 5;
	})

	it("should return sum of 5 and "+num, function(){
		num = add(num,5);
		num.should.be.equal(10);
	})

	it("should return sum of 5 and "+num, function(){
		num = add(num,7);
		num.should.be.equal(12);
	})

})