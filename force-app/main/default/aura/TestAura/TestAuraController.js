({
	doInit : function(component, event, helper) {
		//component.set("v.Var1","Value from Components's controller")
        var data = {'name' : 'Test name', 'email':'test@gmail.com'};
        component.set("v.jsobj",data);
        component.set("v.Data",
                      {
                          'myString' : 'String value',
                          'myInteger' : 2023
                      } 
                     )
	}
})