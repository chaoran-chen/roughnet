function drawRect(rc, s) {
   return rc.rectangle(Number(s.x), Number(s.y), Number(s.size), Number(s.size), {
     roughness: s.roughness,
     bowing: s.bowing,
     fill: s.fill,
     fillStyle: s.fillstyle,
     hachureGap: 4,
     fillWeight: 0.5,
     stroke: s.color,
     strokeWidth: s.width
   });
}

function drawCirc(rc, s) {
   return rc.circle(Number(s.x), Number(s.y), Number(s.size), {
     roughness: s.roughness,
     bowing: s.bowing,
     fill: s.fill,
     fillStyle: s.fillstyle,
     hachureGap: 4,
     fillWeight: 0.5,
     stroke: s.color,
     strokeWidth: s.width
   });
}

function drawHeart(rc,ctx,s){
  ctx.scale(s.size/100,s.size/100);
  ctx.translate(s.x*100/s.size,s.y*100/s.size);
  rc.path("M51.2 88.058q-1.5 0-2.5-1l-35.65-34.4q-1.65-1.35-4.25-4.65-2.65-3.3-4.4-6.15-1.7-2.8-3.05-6.9t-1.35-7.9q0-12.55 7.25-19.65t20.05-7.1q7.3-.05 13.7 4.25t10.2 8.1q12.5-12.5 23.9-12.35 12.8 0 20.05 7.1t7.25 19.7-13.1 25.65l-35.6 34.3q-1 1-2.5 1z",{
     roughness: s.roughness,
     bowing: s.bowing,
     fill: s.fill,
     fillStyle: s.fillstyle,
     hachureGap: 4,
     fillWeight: 0.5,
     stroke: s.color,
     strokeWidth: s.width});

  ctx.translate(-s.x*100/s.size,-s.y*100/s.size);
  ctx.scale(100/s.size,100/s.size);
}

function drawFire(rc,ctx,s){
  rc.circle(Number(s.x)+0.5*Number(s.size), Number(s.y)+0.5*Number(s.size), 1.3*Number(s.size), {
     roughness: s.roughness,
     bowing: s.bowing,
     fill: "white",
     fillStyle: "solid",
     stroke: s.color,
     strokeWidth: s.width
  });
  ctx.scale(s.size/100,s.size/100);
  ctx.translate(s.x*100/s.size,s.y*100/s.size);
  rc.path("M 50.199219 2.765625 C 49.933594 3.167969 49.632812 4.234375 49.5 5.167969 C 49.367188 6.066406 48.898438 8.464844 48.433594 10.464844 C 46.566406 18.464844 44.234375 22.199219 37.800781 27.367188 C 35.765625 29.035156 33.433594 31.234375 32.667969 32.265625 C 29.566406 36.398438 28.066406 41.234375 28.433594 45.800781 C 28.601562 47.699219 28.933594 48.734375 30.066406 50.964844 C 30.867188 52.535156 31.699219 53.867188 31.964844 53.933594 C 32.332031 54.066406 32.367188 53.933594 32.167969 53.464844 C 30.066406 48.535156 29.734375 45.433594 30.800781 41.332031 C 32.167969 36.132812 34.601562 32.667969 39.464844 28.867188 C 42.765625 26.265625 45.535156 23.332031 47.566406 20.234375 C 49.398438 17.433594 50.167969 15.332031 50.667969 11.667969 C 51.234375 7.667969 51.464844 6.632812 51.832031 6.566406 C 52.367188 6.464844 54.898438 11.632812 55.632812 14.367188 C 56.832031 18.765625 56.300781 27.398438 54.5 32.398438 C 52.101562 39.035156 51.964844 39.535156 51.964844 41.667969 C 51.964844 45.632812 52.964844 47.535156 58.898438 54.933594 C 61.199219 57.800781 63.300781 60.601562 63.5 61.167969 C 64.300781 63.066406 64.699219 66.867188 64.332031 69.101562 C 63.601562 73.632812 62.765625 75.898438 60.933594 78.265625 C 56.632812 83.832031 47.765625 86 40.398438 83.265625 C 37.800781 82.300781 33.699219 78.265625 32.898438 75.867188 C 31.367188 71.332031 31.964844 65.933594 34.433594 62.265625 C 37.632812 57.464844 42.765625 55.265625 48.066406 56.464844 C 51.898438 57.332031 55.398438 60.035156 56.332031 62.832031 C 57.265625 65.601562 56.132812 72.132812 54.332031 74.667969 C 52.699219 76.964844 48.566406 78.199219 45.367188 77.332031 C 43.398438 76.800781 41.101562 74.667969 40.632812 72.867188 C 39.734375 69.535156 40.898438 66 43.332031 64.765625 C 45.5 63.632812 47.667969 63.734375 49.066406 64.964844 C 50.066406 65.832031 50.167969 66.132812 50.167969 67.765625 C 50.167969 69.265625 50 69.765625 49.332031 70.5 C 48.566406 71.332031 48.332031 71.398438 46.765625 71.234375 C 44.699219 71.035156 44.5 71.367188 46.167969 72.167969 C 47.699219 72.867188 49 72.601562 50.464844 71.199219 C 53.367188 68.464844 52.566406 64.132812 48.800781 62.332031 C 44.964844 60.464844 39.832031 63.234375 38.464844 67.867188 C 37 72.898438 39.332031 77.464844 44.332031 79.367188 C 49.464844 81.332031 55.964844 78.199219 58 72.765625 C 59.265625 69.332031 59.5 66.964844 58.867188 63.933594 C 58.167969 60.632812 57.035156 58.398438 55.234375 56.765625 C 53.5 55.234375 49.601562 53.398438 47.5 53.132812 C 46.601562 53.035156 45.535156 52.898438 45.167969 52.832031 C 43.535156 52.5 42.332031 47.132812 42.964844 43.035156 C 43.398438 40.300781 43.898438 39.234375 46.535156 35.167969 C 50.066406 29.734375 51.566406 25.667969 52.167969 20 C 52.5 17.132812 52.035156 17.667969 50.832031 21.5 C 49.867188 24.734375 48.199219 28.167969 45.867188 31.832031 C 40.765625 39.832031 40.367188 40.867188 40.101562 46.199219 C 39.933594 49.464844 40 50.066406 40.632812 51.464844 C 41.464844 53.367188 41.5 53.667969 40.898438 53.667969 C 39.566406 53.667969 36.234375 55.867188 34.035156 58.167969 C 32.734375 59.535156 31.535156 60.667969 31.367188 60.667969 C 31.199219 60.667969 30.964844 59.734375 30.832031 58.566406 C 30.535156 55.867188 28.898438 50.898438 27.632812 48.933594 C 26.132812 46.601562 24.367188 45.199219 20.933594 43.535156 C 16.265625 41.332031 11.300781 39.566406 10.898438 39.964844 C 10.667969 40.199219 11 41.234375 11.898438 43.234375 C 13.867188 47.433594 14.464844 49.734375 14.433594 52.734375 C 14.367188 56.234375 13.699219 58.632812 11.535156 62.699219 C 9.101562 67.265625 8.535156 69.535156 8.734375 73.832031 C 8.964844 78.898438 10.367188 81.566406 14.433594 84.566406 C 16.167969 85.800781 18.832031 86.964844 19.199219 86.566406 C 19.265625 86.5 18.199219 85.667969 16.832031 84.699219 C 13.035156 82.066406 11.667969 79.832031 10.964844 75.300781 C 10.398438 71.433594 11.101562 68.101562 13.601562 62.765625 C 15.765625 58.167969 16.433594 55.734375 16.398438 52.332031 C 16.367188 49.898438 15.867188 48.167969 14.132812 44.566406 C 13.199219 42.601562 13.066406 42.132812 13.5 42.066406 C 14.066406 41.933594 20.199219 45.101562 22.566406 46.699219 C 24.800781 48.234375 26.132812 50.566406 27.464844 55.167969 C 29 60.535156 29.5 64.800781 29.066406 68.234375 C 28.300781 73.867188 29.765625 78.234375 33.765625 82.132812 C 37.964844 86.265625 42.433594 87.933594 48.199219 87.566406 C 53.832031 87.199219 58.101562 85.265625 61.699219 81.433594 C 66.867188 76 68.035156 68.535156 64.867188 61 C 60.832031 51.398438 61.132812 43.800781 65.898438 36.601562 C 67.632812 33.964844 72.367188 29.066406 75.535156 26.699219 C 77.898438 24.898438 78.566406 24.632812 78.167969 25.566406 C 76.234375 30.300781 74.832031 36.367188 75.101562 38.734375 C 75.398438 41.101562 77.265625 45.433594 80.699219 51.632812 C 86.964844 62.933594 88.199219 69.398438 85.167969 75.5 C 83.734375 78.464844 80.300781 82.765625 77.800781 84.832031 C 75.566406 86.632812 70.035156 89.433594 68.964844 89.265625 C 68.300781 89.167969 68.367188 89.035156 69.699219 87.332031 C 71.566406 84.964844 74.464844 79.734375 75.332031 77.167969 C 75.699219 76.066406 76.132812 74.101562 76.300781 72.832031 C 76.800781 68.601562 76.433594 66.898438 72.132812 54.667969 L 70.566406 50.167969 L 70.632812 45.5 C 70.667969 42.933594 70.832031 39.867188 71.035156 38.699219 C 71.199219 37.535156 71.265625 36.5 71.199219 36.398438 C 70.734375 35.964844 69.667969 41.832031 69.433594 45.898438 C 69.199219 50 69.433594 51.367188 71.800781 59 C 74.167969 66.632812 74.398438 68.066406 74.035156 72 C 73.535156 77.398438 71.234375 82.300781 67.300781 86.5 C 65.265625 88.632812 63.132812 90.035156 59.832031 91.398438 C 56.832031 92.632812 48.566406 93.265625 42.5 92.699219 C 35.898438 92.101562 31.964844 90.367188 27.832031 86.167969 C 25.101562 83.433594 23.898438 81.332031 23 77.800781 C 22.167969 74.601562 22.167969 73.398438 23 67.167969 C 23.898438 60.367188 23.867188 57.765625 22.800781 54.132812 C 21.734375 50.398438 20.867188 49.167969 21.667969 52.5 C 22.398438 55.535156 22.632812 59.464844 22.167969 61.832031 C 20.234375 72.101562 19.964844 73.898438 20.167969 76 C 20.601562 80.464844 22.167969 83.765625 25.601562 87.367188 C 28.964844 90.964844 32.101562 92.933594 37 94.5 C 39.699219 95.398438 40.132812 95.433594 47 95.464844 C 53.832031 95.5 54.332031 95.464844 57.765625 94.566406 C 59.898438 94 62.167969 93.167969 63.332031 92.464844 C 64.398438 91.832031 65.632812 91.332031 66.066406 91.332031 C 67.167969 91.332031 72 89.667969 74.632812 88.398438 C 78.265625 86.601562 82.101562 83.398438 85.199219 79.5 C 89.535156 74.101562 90.199219 68.832031 87.601562 60.566406 C 86.800781 57.964844 85.800781 55.964844 82.765625 50.933594 C 78.300781 43.535156 77.035156 40.800781 76.765625 37.867188 C 76.535156 35.300781 77.265625 31.5 78.867188 26.699219 C 79.535156 24.832031 79.964844 23.167969 79.867188 23.066406 C 79.535156 22.765625 77.433594 23.898438 74 26.167969 C 70.199219 28.667969 64.800781 34.132812 62.898438 37.367188 C 60.464844 41.535156 59.199219 47.398438 59.933594 51.265625 C 60.167969 52.535156 60.132812 53 59.867188 52.898438 C 59.199219 52.699219 57.035156 49.566406 55.765625 47 C 54.632812 44.734375 54.535156 44.265625 54.566406 41.964844 C 54.601562 39.933594 54.832031 38.867188 55.667969 36.800781 C 57.601562 32.066406 58 30.566406 58.699219 26 C 59.734375 19.332031 59.265625 15.398438 56.867188 10.667969 C 55.367188 7.765625 51.765625 2.433594 51.101562 2.167969 C 50.867188 2.101562 50.464844 2.367188 50.199219 2.765625 Z M 50.199219 2.765625",{
     roughness: s.roughness,
     bowing: s.bowing,
     fill: s.fill,
     fillStyle: s.fillstyle,
     hachureGap: 4,
     fillWeight: 0.5,
     stroke: s.color,
     strokeWidth: s.width});

    ctx.translate(-s.x*100/s.size,-s.y*100/s.size);
    ctx.scale(100/s.size,100/s.size);
}

function drawWater(rc,ctx,s){
  rc.circle(Number(s.x)+0.5*Number(s.size), Number(s.y)+0.5*Number(s.size), 1.3*Number(s.size), {
     roughness: s.roughness,
     bowing: s.bowing,
     fill: "white",
     fillStyle: "solid",
     stroke: s.color,
     strokeWidth: s.width
  });
  ctx.scale(s.size/100,s.size/100);
  ctx.translate(s.x*100/s.size,s.y*100/s.size);
  rc.path("M 47.332031 1.898438 C 42.601562 2.367188 35.332031 4.167969 30.535156 6 C 24.167969 8.464844 20.035156 11.234375 15.167969 16.367188 C 8.367188 23.535156 4 31.066406 1.964844 39.167969 C 0.132812 46.535156 0.0664062 57.765625 1.800781 64.632812 C 4.433594 75.035156 9.265625 82.734375 16.667969 88.332031 C 23.101562 93.167969 27.964844 95.199219 38.234375 97.300781 C 44.964844 98.667969 50.167969 99.132812 56 98.898438 C 63.367188 98.601562 67.066406 97.632812 73.832031 94.167969 C 79.667969 91.199219 81.699219 89.734375 86.167969 85.199219 C 91.832031 79.464844 94.167969 75.300781 97 66 C 98.667969 60.398438 99.300781 56.566406 99.566406 50.265625 C 99.800781 44.632812 99.398438 41.066406 97.964844 35.464844 C 96.765625 30.800781 95.699219 27.933594 93.800781 24.367188 C 87.367188 12.265625 77.234375 5.066406 63 2.5 C 60.035156 1.964844 50.265625 1.601562 47.332031 1.898438 Z M 62.433594 5.667969 C 73.398438 7.398438 78.566406 10.933594 81.035156 18.265625 C 82.101562 21.433594 82.101562 25.566406 81.066406 27.699219 C 79.398438 31.101562 76.265625 33.5 73.101562 33.867188 C 71.433594 34.066406 67.332031 33.367188 65.734375 32.601562 C 64.898438 32.199219 64.800781 31.933594 64.601562 29.734375 C 64.464844 28.398438 63.898438 25.964844 63.332031 24.300781 C 62.800781 22.632812 62.332031 21.234375 62.332031 21.167969 C 62.332031 21.101562 62.800781 20.5 63.367188 19.867188 C 64.535156 18.5 67.367188 17.332031 69.433594 17.332031 C 70.964844 17.332031 73.734375 18.5 74.933594 19.667969 C 75.964844 20.632812 76.332031 21.699219 76.332031 23.699219 C 76.332031 25.765625 75.667969 27.101562 74.332031 27.667969 C 73.167969 28.167969 71.101562 27.898438 70.398438 27.199219 C 69.832031 26.632812 69.765625 24.765625 70.300781 24.234375 C 70.5 24.035156 70.667969 23.734375 70.667969 23.601562 C 70.667969 23.066406 69.765625 23.367188 69.035156 24.132812 C 67.167969 26.132812 69.667969 29.332031 73.035156 29.332031 C 75.898438 29.332031 78.332031 26.265625 78.332031 22.667969 C 78.300781 18.832031 73.699219 14.832031 69.265625 14.867188 C 66.933594 14.898438 63.535156 16.433594 62.398438 18 C 61.667969 18.964844 60.667969 19.367188 60.667969 18.667969 C 60.667969 18.5 59.734375 17.367188 58.601562 16.132812 C 56.332031 13.734375 53.5 11.566406 50.734375 10.199219 C 48.167969 8.898438 42.367188 7.601562 39.101562 7.566406 C 36.367188 7.535156 35.734375 7.234375 37.734375 6.898438 C 38.332031 6.800781 39.800781 6.464844 40.964844 6.167969 C 44.433594 5.300781 46.535156 5.101562 52.601562 5.035156 C 56.867188 5 59.398438 5.167969 62.433594 5.667969 Z M 44.800781 11.167969 C 49.035156 12.234375 51.265625 13.265625 54 15.5 C 58.601562 19.199219 60.667969 23.332031 61.367188 30.132812 C 61.699219 33.332031 61.699219 34.132812 61.199219 36 C 60.5 38.632812 59.132812 40.867188 56.898438 42.867188 C 54.765625 44.765625 53.066406 45.667969 51.066406 45.898438 C 48.867188 46.132812 44.867188 45.464844 42.632812 44.464844 C 40.734375 43.601562 40.734375 43.601562 40.535156 41.898438 C 40.398438 40.933594 39.867188 38.898438 39.300781 37.332031 C 37.765625 33.066406 37.765625 33.101562 39.265625 30.832031 C 41.5 27.398438 42.832031 26.667969 46.632812 26.667969 C 51.464844 26.699219 54.667969 29.832031 54.765625 34.667969 C 54.832031 37.898438 53.234375 39.667969 50.332031 39.667969 C 48.601562 39.667969 47.800781 39.234375 47.167969 38 C 46.464844 36.632812 46.535156 36.101562 47.566406 35.132812 C 48.035156 34.699219 48.332031 34.234375 48.199219 34.101562 C 47.832031 33.699219 46.234375 34.765625 45.667969 35.734375 C 45.234375 36.566406 45.234375 36.765625 45.933594 38.167969 C 47.734375 41.832031 52 42.199219 54.898438 38.898438 C 56.933594 36.601562 57.132812 33.332031 55.5 29.867188 C 53.734375 26.101562 50.066406 24.101562 45.632812 24.398438 C 42.332031 24.667969 40.066406 25.832031 37.933594 28.535156 C 36.964844 29.699219 36.167969 30.667969 36.132812 30.667969 C 36.101562 30.667969 35.433594 30.132812 34.632812 29.464844 C 31.300781 26.667969 26.898438 25.199219 22 25.234375 C 18.066406 25.265625 15.667969 26 12.367188 28.101562 C 8.734375 30.464844 8.464844 30.132812 10.898438 26.5 C 14.132812 21.632812 17.933594 17.300781 21.367188 14.535156 C 25.332031 11.367188 26.300781 11 31.101562 10.699219 C 38.964844 10.199219 41.332031 10.265625 44.800781 11.167969 Z M 84.832031 16.734375 C 89.101562 21.433594 92.734375 28 94.367188 33.898438 C 95.367188 37.601562 95.234375 37.800781 92.601562 36.933594 C 87.566406 35.265625 76.566406 36.699219 70.332031 39.832031 C 67.566406 41.234375 63.632812 44.234375 54.5 52 C 50.464844 55.398438 46.132812 59 44.867188 59.964844 C 41.964844 62.167969 37.601562 64.367188 33.035156 65.898438 C 29.867188 66.964844 29.035156 67.132812 25.101562 67.265625 C 20.167969 67.433594 18.265625 67.167969 13.167969 65.632812 C 9.601562 64.535156 5.101562 62.433594 4.300781 61.464844 C 3.933594 61 3.832031 59.398438 3.867188 53.035156 C 3.867188 44.867188 4.199219 42 5.699219 37.167969 C 6.300781 35.167969 6.367188 35.101562 9.398438 33.101562 C 15.035156 29.433594 17.933594 28.332031 22.167969 28.332031 C 26.601562 28.332031 31.765625 30.265625 33.667969 32.667969 C 36.066406 35.699219 37.464844 40.367188 37.464844 45.5 C 37.464844 49.734375 36.832031 51.964844 34.765625 54.964844 C 32.5 58.234375 29.832031 59.367188 24.332031 59.398438 C 21.601562 59.398438 20.433594 59.234375 19 58.699219 C 13.167969 56.5 11.101562 48.566406 15.199219 44.035156 C 17 42.035156 19 41.167969 21.832031 41.167969 C 26.101562 41.167969 28.601562 43.566406 28.933594 48 C 29.066406 50.101562 29.035156 50.300781 28.101562 51.332031 C 27.300781 52.234375 26.832031 52.433594 25.398438 52.601562 C 23.566406 52.765625 23.566406 52.765625 21.699219 50.332031 C 20.667969 48.964844 20.535156 49.832031 21.5 51.632812 C 22.933594 54.265625 24.898438 54.933594 27.566406 53.632812 C 32.464844 51.265625 31.398438 42.5 25.898438 39.734375 C 23.734375 38.667969 21 38.234375 19.265625 38.667969 C 15.167969 39.765625 11.601562 43.601562 10.832031 47.734375 C 10.5 49.464844 11.199219 53.433594 12.199219 55.535156 C 14.132812 59.601562 17.433594 61.566406 22.867188 61.898438 C 28.601562 62.265625 33.035156 60.566406 36.265625 56.800781 C 38.035156 54.734375 40.265625 50.300781 40.535156 48.234375 C 40.667969 47.367188 40.898438 46.667969 41.066406 46.667969 C 41.234375 46.667969 42.234375 47.101562 43.265625 47.632812 C 45.632812 48.832031 49.433594 49.433594 51.765625 49 C 57.265625 47.933594 63.132812 41.933594 64.332031 36.132812 C 64.667969 34.632812 64.832031 34.300781 65.265625 34.464844 C 65.601562 34.566406 66.734375 34.964844 67.800781 35.332031 C 73.832031 37.5 80.265625 34.601562 83.167969 28.433594 C 83.898438 26.933594 84 26.234375 84 23.265625 C 84 20.464844 83.832031 19.398438 83.167969 17.5 C 82.699219 16.199219 82.332031 15.066406 82.332031 14.898438 C 82.332031 14.265625 83.101562 14.832031 84.832031 16.734375 Z M 93.898438 39.367188 C 95.035156 39.601562 95.699219 39.898438 95.800781 40.265625 C 96.199219 41.632812 96.699219 46.300781 96.601562 47.632812 L 96.5 49.132812 L 90.332031 49.167969 C 84.5 49.199219 84.035156 49.234375 81.5 50.132812 C 75.632812 52.132812 70.601562 55.367188 61.5 62.832031 C 49.964844 72.332031 45.332031 75.601562 41.132812 77.199219 C 36.464844 78.964844 32.265625 79.734375 26.265625 79.867188 C 20.367188 80.035156 18.398438 79.832031 13.933594 78.632812 C 10.601562 77.734375 9.867188 77.035156 8 73.199219 C 6.667969 70.367188 5.101562 65.800781 5.367188 65.535156 C 5.464844 65.433594 6.867188 66.035156 8.464844 66.867188 C 11.699219 68.566406 14.300781 69.367188 18.800781 70.167969 C 25.832031 71.367188 32.367188 70.167969 40.265625 66.199219 C 44.734375 63.964844 47.265625 62.101562 56.5 54.167969 C 64.734375 47.132812 69.464844 43.5 71.734375 42.433594 C 78.132812 39.398438 87.398438 38.132812 93.898438 39.367188 Z M 96.332031 52.734375 C 96.332031 54.601562 95.535156 59.566406 94.765625 62.5 L 94.167969 64.832031 L 90 64.832031 C 85.566406 64.832031 84.398438 65.101562 80.234375 67.199219 C 78.035156 68.300781 71.867188 72.035156 70.332031 73.167969 C 69.699219 73.632812 66.632812 76.535156 63.5 79.601562 C 56.867188 86.132812 54.667969 87.898438 50.933594 89.667969 C 47.464844 91.300781 41.035156 93 37.332031 93.199219 C 34.898438 93.367188 34.066406 93.265625 31.5 92.5 C 25.964844 90.867188 20.566406 87.964844 16.765625 84.5 C 14.867188 82.800781 13.332031 80.898438 14.066406 81.167969 C 19.199219 82.867188 20.035156 83 25.101562 83.035156 C 30.867188 83.066406 34.734375 82.5 39.667969 80.933594 C 46.234375 78.832031 48.367188 77.367188 67.332031 62 C 76.535156 54.535156 84.101562 51.464844 93.601562 51.367188 L 96.332031 51.332031 Z M 93.332031 67.101562 C 93.332031 68.734375 90.265625 75.300781 87.898438 78.832031 C 86.066406 81.5 81.734375 85.765625 78.566406 87.933594 C 75.167969 90.265625 67.800781 93.800781 64.535156 94.632812 C 60.132812 95.800781 55.332031 96.132812 49.566406 95.699219 C 45.199219 95.398438 42.035156 94.867188 42.398438 94.464844 C 42.464844 94.433594 44 94.132812 45.832031 93.832031 C 53.5 92.632812 55.566406 91.398438 64.566406 82.601562 C 69.832031 77.464844 71.964844 75.632812 75.199219 73.464844 C 80.132812 70.199219 84.035156 68.234375 87.332031 67.367188 C 90.332031 66.566406 93.332031 66.464844 93.332031 67.101562 Z M 93.332031 67.101562",{
     roughness: s.roughness,
     bowing: s.bowing,
     fill: s.fill,
     fillStyle: s.fillstyle,
     hachureGap: 4,
     fillWeight: 0.5,
     stroke: s.color,
     strokeWidth: s.width});

    ctx.translate(-s.x*100/s.size,-s.y*100/s.size);
    ctx.scale(100/s.size,100/s.size);

}

function drawEarth(rc,ctx,s){
  rc.circle(Number(s.x)+0.5*Number(s.size), Number(s.y)+0.5*Number(s.size), 1.3*Number(s.size), {
     roughness: s.roughness,
     bowing: s.bowing,
     fill: "white",
     fillStyle: "solid",
     stroke: s.color,
     strokeWidth: s.width
  });
  ctx.scale(s.size/100,s.size/100);
  ctx.translate(s.x*100/s.size,s.y*100/s.size);
  rc.path("M 34.5 2.300781 C 31.199219 2.535156 30.566406 2.800781 28.464844 4.734375 C 26.535156 6.535156 26.132812 7.433594 17.632812 31.332031 C 11.300781 49.066406 5.601562 65.964844 3.464844 73.332031 C 2.632812 76.199219 2.535156 77.132812 2.398438 83 C 2.199219 92.464844 2.867188 95.566406 5.398438 96.867188 C 6.398438 97.398438 8.066406 97.433594 23.398438 97.398438 C 32.699219 97.367188 41.632812 97.199219 43.234375 97 C 44.832031 96.832031 46.332031 96.667969 46.566406 96.667969 C 46.765625 96.667969 47.433594 96.265625 48 95.765625 L 49.066406 94.898438 L 48.867188 84.535156 C 48.601562 72.535156 48.535156 71.800781 47.566406 71.234375 C 47 70.933594 43.265625 70.832031 32.066406 70.898438 C 18.5 70.933594 17.234375 71 16.632812 71.535156 C 15.867188 72.234375 15.832031 72.765625 16.566406 73.367188 C 17 73.734375 19.800781 73.832031 31.632812 73.832031 L 46.167969 73.832031 L 46.167969 77.398438 C 46.167969 79.867188 46.035156 81.101562 45.734375 81.398438 C 45.398438 81.734375 42.332031 81.832031 31.300781 81.832031 C 16.398438 81.832031 16.699219 81.800781 16.667969 83.398438 C 16.667969 84.667969 17.699219 84.765625 32.167969 84.898438 L 46.167969 85.035156 L 46.101562 89.265625 L 46.035156 93.5 L 44.167969 93.699219 C 41.066406 94.066406 13.035156 94.433594 9.566406 94.167969 L 6.332031 93.933594 L 5.933594 92.535156 C 5.667969 91.667969 5.535156 88.699219 5.535156 84.332031 C 5.535156 77.867188 5.566406 77.300781 6.464844 74.167969 C 9.898438 61.765625 28.167969 9.898438 30 7.332031 C 31.433594 5.300781 31.867188 5.265625 50.734375 5.199219 C 60.132812 5.199219 68.234375 5.265625 68.699219 5.398438 C 70.132812 5.832031 71.632812 9.601562 81.832031 39 C 92.632812 70.132812 93.398438 72.667969 94 79.332031 C 94.332031 83.332031 94.265625 92.167969 93.867188 92.566406 C 93.433594 93 86.464844 93.300781 72.367188 93.535156 C 58.867188 93.765625 58.199219 93.734375 57.765625 93.167969 C 57.234375 92.398438 57.132812 85.5 57.667969 85.167969 C 57.867188 85.035156 64.300781 84.898438 72 84.867188 C 84.433594 84.765625 86.066406 84.699219 86.800781 84.199219 C 87.734375 83.601562 87.933594 82.632812 87.234375 82.066406 C 86.964844 81.832031 81.867188 81.699219 72.667969 81.632812 C 64.199219 81.601562 58.332031 81.433594 58.101562 81.234375 C 57.800781 81 57.667969 79.765625 57.667969 77.132812 L 57.667969 73.332031 L 59.101562 73.332031 C 65.5 73.332031 85.898438 72.535156 86.265625 72.265625 C 86.800781 71.800781 86.765625 70.832031 86.199219 70.332031 C 85.667969 69.898438 66.867188 69.800781 60.234375 70.199219 C 57 70.398438 56.5 70.535156 55.601562 71.265625 L 54.601562 72.132812 L 54.734375 83.300781 C 54.867188 94.832031 54.964844 95.601562 56.265625 96.300781 C 57.464844 96.933594 80.234375 96.933594 89 96.300781 C 94.464844 95.867188 95.699219 95.5 96.667969 93.933594 C 97.367188 92.867188 97.367188 92.535156 97.199219 84.667969 C 97.101562 79.265625 96.867188 75.667969 96.535156 74.066406 C 95.667969 69.964844 93.332031 62.734375 86.5 43 C 77.332031 16.566406 74.035156 7.5 72.566406 4.933594 C 72.199219 4.199219 71.332031 3.300781 70.667969 2.898438 C 69.5 2.167969 69.367188 2.167969 53.5 2.132812 C 44.699219 2.101562 36.167969 2.199219 34.5 2.300781 Z M 34.5 2.300781",{
     roughness: s.roughness,
     bowing: s.bowing,
     fill: s.fill,
     fillStyle: s.fillstyle,
     hachureGap: 4,
     fillWeight: 0.5,
     stroke: s.color,
     strokeWidth: s.width});

  rc.path("M 47.933594 17 C 42.332031 17.964844 36.5 21.667969 33.667969 26.066406 C 32.167969 28.367188 30.398438 33.632812 30.066406 36.832031 C 29.398438 43.035156 32.066406 50.398438 36.632812 54.964844 C 39.933594 58.265625 44.433594 60.101562 50.332031 60.535156 C 52.832031 60.699219 53.5 60.632812 56 59.832031 C 59.433594 58.734375 62.867188 57.066406 62.464844 56.667969 C 62.300781 56.5 60.699219 56.898438 58.832031 57.566406 C 54.398438 59.132812 51.101562 59.332031 46.667969 58.367188 C 44.933594 57.964844 42.667969 57.265625 41.667969 56.765625 C 39.066406 55.5 36.398438 52.699219 34.765625 49.5 C 32.734375 45.5 32.234375 43.433594 32.234375 39.167969 C 32.234375 35.933594 32.367188 35.101562 33.332031 32.265625 C 34.632812 28.300781 35.933594 26.332031 38.433594 24.300781 C 41.265625 22.035156 43.898438 20.734375 47.234375 20 C 52.300781 18.867188 55.300781 19.234375 59.867188 21.464844 C 64.101562 23.566406 66.898438 26.667969 67.832031 30.234375 C 68.464844 32.601562 68.535156 37.898438 67.964844 40.167969 C 66.699219 45.433594 63.234375 49.265625 58.367188 50.832031 C 54.734375 52 49.699219 50.832031 46.699219 48.132812 C 44.566406 46.234375 44 44.5 44 40.035156 C 44 37.367188 44.132812 36.535156 44.800781 35.132812 C 46.101562 32.367188 48.964844 30.667969 52.398438 30.667969 C 55.464844 30.667969 57.398438 32.167969 58.535156 35.433594 C 59.398438 38.035156 58.167969 40.898438 55.832031 41.667969 C 54.367188 42.132812 53.601562 41.898438 52 40.464844 C 50.566406 39.167969 49.832031 39.5 50.898438 40.933594 C 53.464844 44.398438 57.601562 44.066406 59.566406 40.199219 C 60.734375 37.964844 60.734375 35.765625 59.566406 33.5 C 57.867188 30.167969 55.464844 28.667969 51.898438 28.667969 C 50.199219 28.667969 49.367188 28.867188 47.734375 29.699219 C 45.398438 30.867188 44.265625 32.066406 43.035156 34.667969 C 42.265625 36.265625 42.167969 36.933594 42.167969 40 C 42.167969 44.101562 42.667969 46.167969 44.132812 48.035156 C 46.332031 50.800781 49.667969 52.5 53.800781 53 C 60.066406 53.734375 67.101562 48.933594 69.367188 42.433594 C 70.265625 39.734375 70.734375 35.367188 70.332031 32.632812 C 69.464844 26.632812 66.398438 22.464844 60.332031 19.066406 C 56.398438 16.867188 52.535156 16.234375 47.933594 17 Z M 47.933594 17 ",{
     roughness: s.roughness,
     bowing: s.bowing,
     fill: s.fill,
     fillStyle: s.fillstyle,
     hachureGap: 4,
     fillWeight: 0.5,
     stroke: s.color,
     strokeWidth: s.width});
    ctx.translate(-s.x*100/s.size,-s.y*100/s.size);
    ctx.scale(100/s.size,100/s.size);
}

function drawAir(rc,ctx,s){
  rc.circle(Number(s.x)+0.5*Number(s.size), Number(s.y)+0.5*Number(s.size), 1.3*Number(s.size), {
     roughness: s.roughness,
     bowing: s.bowing,
     fill: "white",
     fillStyle: "solid",
     stroke: s.color,
     strokeWidth: s.width
  });
  ctx.scale(s.size/100,s.size/100);
  ctx.translate(s.x*100/s.size,s.y*100/s.size);

  rc.path("M 26.101562 2.367188 C 17.398438 3.199219 9.132812 7.933594 5.5 14.132812 C 1.601562 20.800781 1.398438 31.898438 5.066406 39.632812 C 6.601562 42.898438 10.566406 46.699219 14.5 48.734375 C 19.199219 51.101562 21.667969 51.832031 25.167969 51.832031 C 30.332031 51.832031 34.234375 50.066406 38.699219 45.667969 C 44.632812 39.800781 45.898438 31.800781 42.167969 23.832031 C 38.867188 16.867188 29.734375 12.964844 22.632812 15.464844 C 20.066406 16.367188 17.066406 18.265625 15.800781 19.765625 C 14.367188 21.464844 12.933594 24.867188 12.566406 27.5 C 11.398438 35.632812 17.398438 42.867188 24.800781 42.234375 C 28.898438 41.898438 32.332031 39.964844 33.734375 37.199219 C 34.734375 35.265625 34.734375 32.5 33.734375 31.101562 C 32.832031 29.832031 30.535156 28.667969 28.964844 28.667969 C 27.601562 28.699219 24.832031 30.035156 24.832031 30.699219 C 24.832031 31.199219 25.332031 31.234375 27.433594 30.832031 C 29.300781 30.464844 30 31.234375 30 33.667969 C 30 35.933594 29.300781 36.765625 26.832031 37.535156 C 20.398438 39.464844 15.632812 34.464844 17 27.234375 C 17.5 24.535156 18.464844 22.800781 20.234375 21.464844 C 23.332031 19.101562 27.132812 18.433594 30.964844 19.632812 C 37 21.5 39.667969 25.566406 39.667969 32.800781 C 39.667969 37.398438 39 39.265625 36.300781 42.167969 C 32.535156 46.167969 28.734375 47.898438 24.367188 47.5 C 19.167969 47.066406 12.464844 43.464844 10.035156 39.765625 C 7.132812 35.367188 5.933594 26.832031 7.398438 20.667969 C 8.535156 15.898438 12 11.867188 17.265625 9.234375 C 21.5 7.101562 25.066406 6.5 32.832031 6.535156 C 38.167969 6.535156 39.234375 6.632812 42.367188 7.398438 C 48.234375 8.867188 52.765625 10.699219 56.765625 13.234375 C 57.601562 13.765625 58.199219 13.933594 58.398438 13.734375 C 58.832031 13.300781 53.132812 9.066406 49.601562 7.167969 C 44.332031 4.367188 35.332031 1.933594 30.699219 2.035156 C 29.667969 2.066406 27.601562 2.199219 26.101562 2.367188 Z M 26.101562 2.367188",{
     roughness: s.roughness,
     bowing: s.bowing,
     fill: s.fill,
     fillStyle: s.fillstyle,
     hachureGap: 4,
     fillWeight: 0.5,
     stroke: s.color,
     strokeWidth: s.width});

  rc.path("M 66.367188 14.167969 C 59.398438 16.132812 53.101562 22.234375 50.898438 29.167969 C 49.898438 32.332031 49.933594 37.367188 50.964844 41.167969 C 53.566406 50.601562 59.601562 54.964844 70.101562 55.035156 C 77.132812 55.101562 81.699219 52.167969 84.800781 45.667969 C 85.699219 43.765625 85.832031 43.167969 85.832031 40.464844 C 85.832031 37.632812 85.765625 37.300781 84.535156 34.867188 C 82.800781 31.367188 79.367188 27.734375 76.398438 26.265625 C 74.5 25.332031 73.933594 25.199219 71.367188 25.199219 C 68.964844 25.167969 68.199219 25.332031 66.667969 26.035156 C 64.101562 27.234375 62.535156 28.699219 61.433594 30.933594 C 60.632812 32.566406 60.5 33.234375 60.535156 35.5 C 60.566406 40 62.332031 42.464844 66.132812 43.332031 C 68.265625 43.800781 69.566406 43.433594 71.199219 41.867188 C 72.867188 40.234375 73.234375 39.167969 72.667969 37.167969 C 72.132812 35.234375 71.433594 34.632812 70.800781 35.5 C 70.535156 35.832031 70.332031 36.5 70.332031 36.933594 C 70.332031 38.832031 68.964844 39.632812 66.667969 39 C 65.066406 38.566406 64.667969 37.535156 65 34.367188 C 65.167969 32.433594 65.300781 32.132812 66.464844 31.132812 C 69.035156 28.933594 73.101562 28.898438 76.199219 31.035156 C 78.101562 32.332031 80.433594 35.464844 81.167969 37.699219 C 82.265625 40.933594 81.167969 44.898438 78.398438 47.765625 C 76.066406 50.199219 75.132812 50.5 69.667969 50.5 C 65.464844 50.464844 64.601562 50.367188 62.933594 49.734375 C 60.132812 48.601562 58.964844 47.699219 57.5 45.5 C 55.832031 43 55.066406 40.734375 54.601562 36.667969 C 54.300781 33.964844 54.332031 33.167969 54.800781 31.332031 C 55.699219 27.832031 56.898438 25.699219 59.464844 23.132812 C 64.464844 18.132812 70.035156 16.898438 77.398438 19.199219 C 83.132812 21 86.734375 23.800781 89.800781 28.933594 C 92.167969 32.898438 92.933594 35.265625 93.167969 39.535156 C 93.433594 43.832031 92.832031 48.167969 91.300781 52.832031 C 89.367188 58.667969 86.398438 62.699219 78.566406 70.199219 C 76.066406 72.601562 74 74.734375 74 74.933594 C 74 75.898438 75.5 75.066406 80.167969 71.601562 C 83 69.5 86.800781 66.265625 88.898438 64.167969 C 92.234375 60.867188 92.800781 60.132812 94.035156 57.535156 C 97.300781 50.535156 98.5 40.632812 96.832031 34.265625 C 95.734375 30 92.066406 24.066406 88.398438 20.601562 C 85.632812 18 81.300781 15.699219 77.167969 14.632812 C 73.535156 13.734375 68.699219 13.5 66.367188 14.167969 Z M 66.367188 14.167969",{
     roughness: s.roughness,
     bowing: s.bowing,
     fill: s.fill,
     fillStyle: s.fillstyle,
     hachureGap: 4,
     fillWeight: 0.5,
     stroke: s.color,
     strokeWidth: s.width});

  rc.path("M 41.566406 52.332031 C 38.398438 53.265625 36.832031 54.132812 34.800781 56.066406 C 31.265625 59.398438 29.734375 63.101562 29.433594 69 C 29.199219 73.132812 29.800781 75.933594 31.367188 78.398438 C 32.699219 80.464844 35.265625 82.734375 37.433594 83.832031 C 41.464844 85.800781 47.433594 86.167969 50.933594 84.667969 C 56.832031 82.132812 59.132812 73.300781 55.5 67.132812 C 53.367188 63.5 47.464844 62.601562 43.535156 65.332031 C 41.699219 66.566406 40.832031 68.300781 40.867188 70.632812 C 40.867188 72.367188 40.933594 72.5 42.5 73.898438 C 43.898438 75.167969 44.167969 75.300781 44.601562 74.898438 C 44.964844 74.535156 44.964844 74.265625 44.699219 73.734375 C 44.132812 72.667969 44.265625 70.964844 45 69.765625 C 45.832031 68.367188 47.734375 67.765625 49.933594 68.199219 C 51.300781 68.464844 51.566406 68.667969 52.132812 69.832031 C 53.167969 71.898438 53.066406 76 51.964844 78.167969 C 50.898438 80.234375 49.601562 81.035156 46.832031 81.265625 C 41.464844 81.667969 36.566406 79.398438 34.601562 75.535156 C 33.265625 72.898438 33.464844 66.234375 35 62.734375 C 36.699219 58.898438 40.433594 56.433594 45.035156 56.101562 C 51.332031 55.667969 58.667969 59.101562 60.964844 63.632812 C 62.867188 67.332031 63.234375 73.066406 61.867188 78.464844 C 59.832031 86.464844 55.933594 90.167969 47.832031 91.832031 C 44.464844 92.5 38.734375 92.5 35.734375 91.832031 C 31.035156 90.734375 26.398438 87.800781 22.066406 83.199219 C 19.566406 80.5 16.832031 76.332031 15.734375 73.5 C 14.332031 69.933594 13 61.601562 13 56.464844 C 13 55.5 12.832031 54.601562 12.667969 54.5 C 11.066406 53.5 10.765625 69.832031 12.265625 75.101562 C 13.566406 79.632812 18.332031 86.066406 23.367188 90.132812 C 26.800781 92.867188 31.964844 95.5 35.265625 96.167969 C 42.398438 97.667969 51.898438 96.199219 57.300781 92.765625 C 64.433594 88.199219 68.632812 76.464844 66.566406 66.765625 C 65.800781 63.167969 64.5 60.832031 61.832031 58.132812 C 58 54.234375 53.035156 52.132812 47 51.832031 C 44.464844 51.699219 43.398438 51.800781 41.566406 52.332031 Z M 41.566406 52.332031",{
     roughness: s.roughness,
     bowing: s.bowing,
     fill: s.fill,
     fillStyle: s.fillstyle,
     hachureGap: 4,
     fillWeight: 0.5,
     stroke: s.color,
     strokeWidth: s.width});

    ctx.translate(-s.x*100/s.size,-s.y*100/s.size);
    ctx.scale(100/s.size,100/s.size);
}


function drawEdge(rc, s) {
   return rc.line(Number(s.x), Number(s.y), Number(s.xend),Number(s.yend),{
     roughness: s.roughness,
     bowing: s.bowing,
     stroke: s.color,
     strokeWidth: s.width
   });
}

function drawText(rc,ctx,s) {
  if(s.pos==="c"){
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(s.label,Number(s.xf), Number(s.yf));
  }
  if(s.pos==="n"){
    ctx.textAlign = "center";
    ctx.textBaseline = "bottom";
    ctx.fillText(s.label,Number(s.xf), Number(s.yf)-0.5 * Number(s.size));
  }
  if(s.pos==="s"){
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.fillText(s.label,Number(s.xf), Number(s.yf)+0.5 * Number(s.size));
  }
  if(s.pos==="e"){
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    ctx.fillText(s.label,Number(s.xf)+0.5 * Number(s.size), Number(s.yf));
  }
    if(s.pos==="w"){
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    ctx.fillText(s.label,Number(s.xf)-0.5 * Number(s.size), Number(s.yf));
  }
}

const HTMLWidgets = {
  widget: ({name, type, factory}) => {
    factory(null, 960, 600).renderValue(data);
  }
};

HTMLWidgets.widget({

  name: 'roughnet',

  type: 'output',

  factory: function(el, width, height) {

    return {
      renderValue: function(x) {

        const svg = document.getElementById('svg');
        // Insert rough canvas in the new canvas element
        const rc = rough.svg(svg);

        // Create context for text shape
        //const c = document.getElementById("svg");
        //var ctx = c.getContext("2d");
        //ctx.font = x.font;

        x.data.map(function(s) {
          if (s.shape === "rectangle") {
            svg.appendChild(drawRect(rc, s));
          }
          if(s.shape === "circle"){
            svg.appendChild(drawCirc(rc,s));
          }
          if(s.shape==="heart"){
            drawHeart(rc,ctx,s);
          }
          if(s.shape==="fire"){
            drawFire(rc,ctx,s);
          }
          if(s.shape==="water"){
            drawWater(rc,ctx,s);
          }
          if(s.shape==="earth"){
            drawEarth(rc,ctx,s);
          }
          if(s.shape==="air"){
            drawAir(rc,ctx,s);
          }

          if(s.shape === "edge"){
            svg.appendChild(drawEdge(rc,s));
          }

          if(s.shape === "text"){
            drawText(rc,ctx,s);
          }

        });
      },
      resize: function(width, height) {
        // TODO
      }
    };
  }
});
