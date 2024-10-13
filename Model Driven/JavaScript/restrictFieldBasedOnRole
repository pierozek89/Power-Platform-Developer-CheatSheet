var restrictFieldBasedOnRole = {

    onLoad: function (executionContext) {

        var formContext = executionContext.getFormContext();
        // Get the user roles
        var userRoles = Xrm.Utility.getGlobalContext().userSettings.roles;
        // Get the field value
        var fieldValue = formContext.getAttribute("apphub_readonlytestforjs").getValue();

        var control = formContext.getControl("apphub_readonlytestforjs");

        var IsFieldEmpty = false;

        var isBasicUser = false;

        // Detect if the user has the role "Basic User"
        userRoles.forEach(function (role) {
            if (role.name === "Basic User") {
                isBasicUser = true;
            }
        });

        // Check if the field is empty
        if (fieldValue === null) {
            IsFieldEmpty = true;
        }

        // If the user has the role "Basic User" and the field is empty, set disabled to false
        if (isBasicUser && IsFieldEmpty) {
            
                control.setDisabled(false);
                
            } else {

                control.setDisabled(true);
}
    }
}
