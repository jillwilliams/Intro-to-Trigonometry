const myProblem = () => {
    var sin = document.getElementById("input1").innerhtml;
    if (sin == 0.6) {
        return "Good Job!"
    } else
        return "0.6";
};
const calc1 = () => {
    document.getElementById("demo").innerhtml = myProblem();
};