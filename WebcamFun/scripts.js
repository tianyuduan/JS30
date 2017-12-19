const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');


console.log("hello");

function getVideo(){
  navigator.mediaDevices.getUserMedia({video: true, audio: false}) //returns a promise
  .then(localMediaStream => {
    console.log(localMediaStream);
    video.src = window.URL.createObjectURL(localMediaStream);
    video.play();
  })
  .catch(err=> {
    console.error(err);
  });
}

function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  console.log(width, height);

  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
    // take pixels
    let pixels = ctx.getImageData(0,0, width, height);
    console.log(pixels);
    // apply filter
    // pixels = redEffect(pixels);
    // pixels = rgbSplit(pixels);
    pixels = greenScreen(pixels);
    //reapply to image
    ctx.putImageData(pixels, 0, 0);
    }, 16);
  }

  function redEffect(pixels) {
    for (let i = 0; i < pixels.data.length; i += 4) {
     pixels.data[i + 0] = pixels.data[i + 0] + 100; //red
     pixels.data[i + 1] = pixels.data[i + 0]  - 50; //green
     pixels.data[i + 2] = pixels.data[i + 0] * 0.5; //blue
     }
     return pixels;
  }

  function rgbSplit(pixels) {
    for(let i = 0; i < pixels.data.length; i+=4) {
      pixels.data[i - 150] = pixels.data[i + 0]; // RED
      pixels.data[i + 500] = pixel s.data[i + 1]; // GREEN
      pixels.data[i - 550] = pixels.data[i + 2]; // Blue
    }
    return pixels;
  }

  function greenScreen(pixels) {
    const levels = {};

    document.querySelectorAll('.rgb input').forEach((input) => {
      levels[input.name] = input.value;
    });

    for ( let i = 0; i < pixels.data.length; i = i + 4) {
    let red = pixels.data[i + 0];
    let green = pixels.data[i + 1];
    let blue = pixels.data[i + 2];
    let alpha = pixels.data[i + 3];

      if (red >= levels.rmin
        && green >= levels.gmin
        && blue >= levels.bmin
        && red <= levels.rmax
        && green <= levels.gmax
        && blue <= levels.bmax) {
        // take it out!
        pixels.data[i + 3] = 0;
      }
    }

    return pixels;
  }


function takePhoto(){
  snap.currentTime = 0;
  // snap.play();


  //take data from canvas
  const data = canvas.toDataURL('image/jpeg');
  const link = document.createElement('a');
  link.href = data;
  link.setAttribute('download', 'handsome');
  // link.textContent = "Download Image";
  link.innerHTML = `<img src="${data}" alt="Handsome Man" />`;
  strip.insertBefore(link, strip.firstChild);
  console.log(data);
}
  getVideo();
  // paintToCanvas();
  // takePhoto();


video.addEventListener('canplay', paintToCanvas);
