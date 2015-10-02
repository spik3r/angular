describe("Default test", function() {
	    var shouldBeOne = 0;
	     
	    beforeEach(function(){
	    	shouldBeOne = 1;
	    });
		 
	    afterEach(function() {
	    	shouldBeOne = 0;
	    });
		     
	    it("should be defined", function() {
		    expect(shouldBeOne).toBeDefined();
	    });
			 
	    it("should equal one", function(){
		    expect(shouldBeOne).toEqual(1);
	    });

	    //will insert additional tests here later
});
