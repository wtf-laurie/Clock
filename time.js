function formatTime() {
	var today = new Date();
	var h = today.getHours() > 12 ? today.getHours() - 12 : today.getHours(); // 12-hour format
		h = (h == '00') ? 12 : h; // so it will show 12am for midnight instead of 00am
	var m = today.getMinutes();
	var s = today.getSeconds();

	h = checkTime(h);
	m = checkTime(m);
	s = checkTime(s); // will include when i understand how to make am/pm separate

	var am_pm = today.getHours() >= 12 ? "PM" : "AM";

	document.getElementById('time').innerHTML = h + ":" + m + ":" + s

	document.getElementById('am_pm').innerHTML = am_pm

	var t = setTimeout('formatTime()', 500);
}

function checkTime(i) {
	if (i < 10) {i = "0" + i};
	return i;
}

function formatDate() {
	var today = new Date();
	var month = today.getMonth();
	var month_names = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var date = today.getDate();
	var year = today.getFullYear();

	date = checkTime(date);

	var full_date = month_names[month] + " " + date + ", " + year

	document.getElementById('date').innerHTML = full_date
}

function formatDay() {
	var today = new Date();
	var day = today.getDay();
	var day_names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	var DayOfTheWeek = day_names[day]

	document.getElementById('day').innerHTML = DayOfTheWeek
}

function setImage() {
	var today = new Date();
	var hh = today.getHours();

	if (hh > 6 && hh < 18) {
		document.getElementById('icon').src = "icons/sun.png";
	}
	else {
		document.getElementById('icon').src = "icons/moon.png";
	}
}
