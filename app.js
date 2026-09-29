document.addEventListener("DOMContentLoaded", () => {
    const appContainer = document.getElementById("app-container");
    let currentExam = null;
    let currentQuestionIndex = 0;
    let userAnswers = {};

    // 1. Render the Home Menu with Sequence Numbers
    function renderHome() {
        let html = `
