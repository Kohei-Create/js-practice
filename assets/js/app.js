const timeElement = document.getElementById('current-year');
const now = new Date();

const year = now.getFullYear();
const month = String(now.getMonth() +1).padStart(2, '0');
const date = String(now.getDate()).padStart(2, '0');

//<time>タグの中身を書き換える。
timeElement.textContent = `${year}年${month}月${date}日`;

//<time datetime="YYYY-CC-DD">
timeElement.setAttribute('datetime', `${year}-${month}-${date}`);

