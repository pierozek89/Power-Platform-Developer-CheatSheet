//This script is used to restrict the movement of Business Process Flow
var restrictBPFmovement = {};
restrictBPFmovement.formEvents = {
    form_load: function (e) {
        var fc = e.getFormContext();
        fc.data.process.addOnPreStageChange(restrictBPFmovement.formEvents.handlePreStage);
    },
    handlePreStage: function (e) {
        debugger;
        // Get the event arguments
        var bpfArgs = e.getEventArgs();
        //Block going to previous stage, pop up for alert 
        if (bpfArgs.getDirection() === "Previous") { 
            bpfArgs.preventDefault();
            var alertStrings = { confirmButtonLabel: "OK", text: "Powrót do poprzedniego kroku nie jest możliwy", title: "Zablokowano" };
            var alertOptions = { height: 120, width: 260 };
            Xrm.Navigation.openAlertDialog(alertStrings, alertOptions);
            return;
        }
    }
};

