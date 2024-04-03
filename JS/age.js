const birthDate = new Date('2007-09-02');

function updateAge() {
    const currentDate = new Date();
    const ageInMilliseconds = currentDate - birthDate;
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

    document.getElementById('ageDisplay').textContent = ` ${ageInYears.toFixed(10)}`;
}

updateAge();
setInterval(updateAge, 1);