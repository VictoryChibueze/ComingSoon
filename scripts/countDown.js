"use strict";

const countTo = "1 Dec 2026";

const countDown = setInterval(() => {
  //   initializing the html
  const daysCount = document.getElementById("days");
  const hoursCount = document.getElementById("hours");
  const minutesCount = document.getElementById("minutes");
  const secondsCount = document.getElementById("seconds");

  const currentDate = new Date();
  const endDate = new Date(countTo);
  const totalSeconds = (endDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor((totalSeconds / 3600) % 24);
  const minutes = Math.floor((totalSeconds / 60) % 60);
  const seconds = Math.floor(totalSeconds % 60);
  daysCount.textContent = days;
  hoursCount.textContent = `${hours < 10 ? `0${hours}` : hours}`;
  minutesCount.textContent = `${minutes < 10 ? `0${minutes}` : minutes}`;
  secondsCount.textContent = `${seconds < 10 ? `0${seconds}` : seconds}`;
}, 1000);
