document.addEventListener('DOMContentLoaded', function() {
    const ratings = document.querySelectorAll(".circle");
    const submitButton = document.getElementById("submission");
    const error = document.getElementById("error-rating");
    let selectedRating = null;

    ratings.forEach(span => {
        span.addEventListener('click', () => {
            error.style.display = "none";
            ratings.forEach(span => span.classList.remove("selected"));
            span.classList.add("selected");
            selectedRating = parseInt(span.innerText);
        });
    });

    submitButton.addEventListener('click', () => {
        var finalRating = document.getElementById("choose-rating");

        if (selectedRating !== null) {
            error.style.display = "none";
            document.getElementById("rating").style.display = "none";
            document.getElementById("submission-complete").style.display = "block";
            finalRating.innerHTML = selectedRating;
        } else {
            error.style.display = "block";
            error.innerHTML = "Please, choose a value before submitting"
        }
    });
});