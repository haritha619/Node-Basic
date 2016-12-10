var chai = require("chai");
	expect = chai.expect;
	should = chai.should();

// language chains sampe test cases

var name = "Alex",
	address = null,
	id;

describe("Lang chain test suite", function(){
	it.skip("not assertions", function(){
		var foo="cat";
		expect(foo).to.not.equal("tiger");
		foo.should.not.equal('dog');
	})

	it.skip("not assertions-2", function(){
		var foo="cat";
		//expect(foo).to.not.equal("tiger");
		//foo.should.not.equal('dog');

	/*	expect(name).to.exist;
		expect(address).to.not.exist;
		expect(id).to.not.exist;	*/

		function sample(){
			//throw new Error("failed vth error");
		}

	//	expect(sample).to.throw(Error);
	//	sample.shoud.not throw(Error);

		var obj = { color : "green" };
		expect(obj).to.have.property("color").and.not.equal('pink');
		obj.should.have.property('color').and.not.equal('pink');
	})

	it.skip("deep assertions", function(){
		var obj = { city : "HYD"};
		expect(obj).to.eql({city:'HYD'});

		var obj1 = { 
						foo: { 
								bar: { 
									baz: 'quux' 
								} 
						} 
					}

		expect(obj1).to.have.deep.property('foo.bar.baz').and.not.equal('abc');
		obj1.should.have.deep.property("foo.bar.baz","quux");

		var deepCss = { '.link' : { '[target]' : 42 }};
		expect(deepCss).to.have.deep.property("\\.link.\\[target\\]",42);
	})

	it.skip("any assertion", function(){
			var sample = {
				name : "Alex",
				addr : "HYD"
			}

			expect(sample).to.have.any.keys('name','abc');
			expect(sample).to.have.all.keys('name','addr');
	})

	
	it("A & An assertions", function(){
		expect("Trianz").to.be.a('string');
		("Trianz").should.be.a('string');

		expect({name : 'haritha'}).to.be.an('object');

		/**************************  checking NULL values   *******/

		var temp = null;

		expect(null).to.be.a('null');
		should.equal(temp,null);
		//temp.should.be.null;			// gives error
		// should(temp).be.null;
		//should.be.null(temp);
		//temp.should.be.an('object');     
		(temp === null).should.be.true;
		should.not.exist(temp);			//  will test if temp is null or undefined

	})

	it.skip("include assertions", function(){

		expect([1,2,3]).to.include(2,5,4);
		expect({ name : "haritha", addr : "hyd"}).to.include.keys("name");
		
	})


	it.skip("property assertions", function(){

		expect({ name : "haritha", addr : "hyd"}).to.have.property("name","haritha");
		expect({ name : "haritha", addr : "hyd"}).to.have.property("name").to.be.equal("haritha").with.length(7);

		// to verify regular expression ------
		expect('Trianz Holdings').to.match(/^Tri/);
		expect('Trianz Holdings123').to.match(/^[0-9,a-z, A-Z]/);
		


	})

})
