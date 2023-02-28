const ffmpeg = require('fluent-ffmpeg');

 const  configure_video = async (req, res) => {
  const name = req.params.name;

  try {
    const video = ffmpeg('./input_video.mp4');

    // Add icon over the video
    video.complexFilter([
      {
        filter: 'drawbox',
        options: {
          x: 25,
          y: 25,
          width: 50,
          height: 50,
          color: 'white',
        },
      },
    ]);
    // adding name over the video
    video.complexFilter([
      {
        filter: 'drawtext',
        options: {
          text: name,
          fontfile: './vector-play-icon-symbol-sign.jpg',
          fontsize: 24,
          fontcolor: 'yellow',
          x: '(w/2)-50',
          y: '(h/2)-75',
        },
      },
    ]);

    // Handle 'error' event
    video.on('error', function (err, stdout, stderr) {
      console.error('An error occurred:', err.message);
      console.error('ffmpeg output:', stdout);
      console.error('ffmpeg stderr:', stderr);
    });
    await video.save('./modified_video.gif');

    console.log('Overlay added successfully!');
  } catch (error) {
    console.error(error);
  }
  
};

module.exports = {configure_video};

