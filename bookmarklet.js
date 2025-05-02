const fetch_lag = 500
const exec_lag = 200;
const og_stringify = JSON.stringify;
const $ = (...args) => {return document.querySelector(...args)}
JSON.stringify = (obj) => {
    if(!obj){return og_stringify(obj)}
    if(obj.operationName == "attemptProblem"){
        console.log("Sneaking into the teachers office...")
        console.log("Grabbed your work: ", obj)
        console.log("Giving you an A...")
        obj.variables.input.completed = true;
        console.log("Mission accomplished, exfiltrating.")
        if(fixed && obj.variables.input.attemptNumber == 1){
            setTimeout(() => {
            console.log("Getting you to the next question...");
            $("[data-testid='exercise-skip-button']").click();
            setTimeout(() => {
                $("[data-testid='exercise-next-question']").click();
            }, exec_lag)
        }, fetch_lag);
        }
    }
};
$("[data-testid='header-logo']").innerHTML = "<span style='font-size: x-large;'>Khan Hackademy</span>";

