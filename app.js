window.addEventListener('load', () => {
  let long;
  let lat;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords
    })
  } else {
    h1.textContent = "not workinggggggg";
  }
});
