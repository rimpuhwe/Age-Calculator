const daysInput = document.getElementById('days');
const monthInput = document.getElementById('months');
const yearInput = document.getElementById('years');
const calculateBtn = document.getElementById('calc-btn');
const resultSheet = document.getElementById('age-board');

function display() {
    let days = daysInput.value;
    let months = monthInput.value;
    let years = yearInput.value;

    let birthDate = new Date(years, months -1, days);
    let currentDate = new Date();
     
    let numberOfDays = currentDate.getDate() - birthDate.getDate();
    let numberOfMonth = currentDate.getMonth() - birthDate.getMonth();
    let numberOfYear = currentDate.getFullYear() - birthDate.getFullYear();

    if(numberOfMonth < 0){
        numberOfYear -= 1;
        numberOfMonth += 12;
    }
    if(numberOfDays < 0){
        numberOfMonth -= 1;
        numberOfDays += new Date(currentDate.getFullYear(),currentDate.getMonth(), 0).getDate() 
    }

    resultSheet.innerHTML = `
    <p><span class="purple">${numberOfYear}</span> years</p>
    <p><span class="purple">${numberOfMonth}</span> months</p>
    <p><span class="purple">${numberOfDays}</span> days</p>
    `;
    resultSheet.style.display = 'block';
    
}

calculateBtn.addEventListener('click', display);
