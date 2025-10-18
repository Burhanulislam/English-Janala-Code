const loadLessons = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all") // Promise of response
        .then(res => res.json()) // Promise of JSON data sob tottho ke dhora holo
        .then(json => displayLesson(json.data)); // now every data in the json variable 
};

const displayLesson = (lessons) => {
    // 1. get the container & empty
    const levelContainer = document.getElementById('level-container');
    levelContainer.innerHTML = "";
    // 2. get into every lessons
    for (let lesson of lessons) {
        console.log(lesson)
        // 3. create Element div for input the data
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `
                    <button class="btn btn-outline btn-primary">
                    <i class="fa-solid fa-book-open"></i> Lesson - ${lesson.level_no}
                    </button>
        `
        // 4. append into container 
        levelContainer.append(btnDiv);
    }

}
loadLessons();