const yearElement = document.getElementById('current-year');
const timeElement = document.getElementById('current-time');

function updateClock() {
    const now = new Date();

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const date = String(now.getDate()).padStart(2, '0');

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    if (yearElement) {
        yearElement.textContent = `${year}年${month}月${date}日`;
        yearElement.setAttribute('datetime', `${year}-${month}-${date}`);
    }

    if (timeElement) {
        timeElement.textContent = `${hours}:${minutes}:${seconds}`;
        timeElement.setAttribute('datetime', `${year}-${month}-${date}T${hours}:${minutes}:${seconds}`);
    }
}

setInterval(updateClock, 1000);

updateClock();