### Adding times with reduce

> the point of this project is to take a simple HTML template, say from a video upload Repository from YouTube. There will be a Videos parent element along with children video files nested into the parent Ul.  </br>
> Say
```
<ul id="videos">
  <li data-time="5:43">
    Video 1
  </li>
  <li data-time="2:33">
    Video 2
  </li>
  <li data-time="3:45">
    Video 3
  </li>
```

> In the code example, we select the the nodeList with document.querySelectorAll.

> now we can access the time element inside node.dataset.time, simply by adding the mins + seconds in each video using reduce. We can set the display on our page to render the total amount of  time of all the videos.
