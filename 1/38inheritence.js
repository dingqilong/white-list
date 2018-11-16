
	//Defination of top superclass
	function topSuperClass() {

	}
	//static members
	topSuperClass.staticProperty = function() {
		//static private members
		var TSCstaticPrivateVariable = "I am static private variable of top super class";
		var TSCstaticPrivateMethod = function() {
			return "I am a static private method of top super class";
		};
		return {
			//static public members
			TSCstaticPublicVariable : "I am static public variable of top super class",
			TSCstaticPublicMethod : function() {
				return "I am a static public method of top super class";
			}
		};
	}();

	//non static members
	topSuperClass.prototype.TSCnonStaticProperty = function() {
		//non static private members
		var TSCnonStaticPrivateVariable = "I am non static private variable of top super class";
		var TSCnonStaticPrivateMethod = function() {
			return "I am a non static private method of top super class";
		};
		return {
			//non static public members
			TSCnonStaticPublicVariable : "I am non static public variable of top super class",
			TSCnonStaticPublicMethod : function() {
				alert(TSCnonStaticPrivateMethod());// accessing the private member inside class
				return "I am a non static public method of top super class";
			}
		};
	}();

	//Defination of superclass
	function superClass() {
	}
	//inheritance declaration
	superClass.prototype = new topSuperClass();

	//static members
	superClass.staticProperty = function() {
		//static private members
		var SCstaticPrivateVariable = "I am static private variable of super class";
		var SCstaticPrivateMethod = function() {
			return "I am a static private method of super class";
		};
		return {
			//static public members
			SCstaticPublicVariable : "I am static public variable of super class",
			SCstaticPublicMethod : function() {
				return "I am a static public method of super class";
			}
		};
	}();

	//non static members
	superClass.prototype.SCnonStaticProperty = function() {
		//non static private members
		var SCnonStaticPrivateVariable = "I am non static private variable of super class";
		var SCnonStaticPrivateMethod = function() {
			return "I am a non static private method of super class";
		};
		return {
			//non static public members
			SCnonStaticPublicVariable : "I am non static public variable of super class",
			SCnonStaticPublicMethod : function() {
				return "I am a non static public method of super class";
			}
		};
	}();

	//Defination of subclass
	function subClass() {
	}
	//inheritance Declaration
	//subClass.prototype = new topSuperClass();
	subClass.prototype = new superClass();

	//static members
	subClass.staticProperty = function() {
		//static private members
		var SBCstaticPrivateVariable = "I am static private variable of sub class";
		var SBCstaticPrivateMethod = function() {
			return "I am a static private method of sub class";
		};
		return {
			//static public members
			SBCstaticPublicVariable : "I am static public variable of sub class",
			SBCstaticPublicMethod : function() {
				return "I am a static public method of sub class";
			}
		};
	}();

	//non static members
	subClass.prototype.SBCnonStaticProperty = function() {
		//non static private members
		var SBCnonStaticPrivateVariable = "I am non static private variable of sub class";
		var SBCnonStaticprivateMethod = function() {
			return "I am a non static private method of sub class";
		};
		return {
			//non static public members
			SBCnonStaticPublicVariable : "I am non static public variable of sub class",
			SBCnonStaticPublicMethod : function() {
				return "I am a non static public method of sub class";
			}
		};
	}();

	//Inheritence Defination
	//superClass.prototype = new topSuperClass();
	//subClass.prototype = new superClass();

	var test = function() {

		//Demonstration of base class member access
		var topSuperClassObj = new topSuperClass();// Creation of object of the base class

		//Calling the private static members with class refferene
		//alert(topSuperClass.staticProperty.TSCstaticPrivateVariable);//Not visible outside class
		//alert(topSuperClass.staticProperty.TSCstaticPrivateMethod());//Not visible outside class

		//Accessing the public static members
		//alert(topSuperClass.staticProperty.TSCstaticPublicVariable);//Visible as public member variable 
		//alert(topSuperClass.staticProperty.TSCstaticPublicMethod());//Visible as public method

		//Calling the private non static mebbers with object refferene
		//alert(topSuperClassObj.TSCnonStaticProperty.TSCnonStaticPrivateVariable);//Not visible outside class
		//alert(topSuperClassObj.TSCnonStaticProperty.TSCnonStaticPrivateMethod());//Not visible outside class

		//Calling the public non static mebbers with object refferene
		//alert(topSuperClassObj.TSCnonStaticProperty.TSCnonStaticPublicVariable);//visible outside class
		alert(topSuperClassObj.TSCnonStaticProperty.TSCnonStaticPublicMethod());//visible outside class

		//How to access super class methods using subclass reference
		//var subClassObj = new subClass();
		//alert(subClassObj.SBCnonStaticProperty.SBCnonStaticPublicMethod());
		//alert(subClass.staticProperty.SBCstaticPublicMethod());

		//alert(subClassObj.SCnonStaticProperty.SCnonStaticPublicMethod());
		//alert(superClass.staticProperty.SCstaticPublicMethod());

		//alert(subClassObj.TSCnonStaticProperty.TSCnonStaticPublicMethod());
		//alert(topSuperClass.staticProperty.TSCstaticPublicMethod());

	}
