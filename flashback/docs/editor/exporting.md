# Exporting

To export a replay, press the 'Export' button located on the main menu bar. This will open a new window to input the following options.

## Capture Options

The Capture Options section contains the most essential options for exporting. The first options are for the resolution and by default they're set to the current game window size. 

If you're using the [In/Out](timeline/index.md#inout-positions) positions, the 'Start/end tick' inputs can be left as they are. The framerate option allows for custom framerates.

The last two options are 'Reset RNG' and 'SSAA'. Reset RNG is useful for [Batch Renders](#start-export--add-to-queue) to make sure things like particles across multiple renders. The SSAA option removes the harsh edges and smoothes out the image by doubling the resolution and then downscaling to average the pixel colour.

## Video Options

This section of the export menu contains the options for how the video is stored and encoded. Each Container has its own Codec, and each Codec has its own Encoder. Below are all Containers, Codecs and Encoders available for flashback.

### Containers

- [MP4](https://en.wikipedia.org/wiki/MP4_file_format)
- [MKV](https://en.wikipedia.org/wiki/Matroska)
- [AVI](https://en.wikipedia.org/wiki/Audio_Video_Interleave)
- [MOV](https://en.wikipedia.org/wiki/QuickTime_File_Format)

### Codecs

- [H264 (AVC)](https://en.wikipedia.org/wiki/Advanced_Video_Coding)
- [H265 (HEVC)](https://en.wikipedia.org/wiki/High_Efficiency_Video_Coding)
- [AV1](https://en.wikipedia.org/wiki/AV1)
- [VP9](https://en.wikipedia.org/wiki/VP9)
- [Apple ProRes](https://en.wikipedia.org/wiki/Apple_ProRes)
- [QuickTime](https://en.wikipedia.org/wiki/QuickTime)

### Encoders

- [h264_nvenc](https://en.wikipedia.org/wiki/Nvidia_NVENC)
- [libopenh264](http://www.openh264.org/)
- [hevc_nvenc](https://en.wikipedia.org/wiki/Nvidia_NVENC)
- [hevc_mf](https://trac.ffmpeg.org/wiki/Hardware/AMF)
- [libsvtav1](https://trac.ffmpeg.org/wiki/Encode/AV1)
- [libaom-av1](https://trac.ffmpeg.org/wiki/Encode/AV1)
- [prores/prores_aw/prores_ks](https://en.wikipedia.org/wiki/Apple_ProRes)

The 'Use Maximum Bitrate' option calculates the maximum bitrate for the provided [resolution](#capture-options). Below this toggle, you can manually enter the bitrate using the 'm' suffix.

## Audio Options

To use in-game audio, enabling the 'Record Audio' toggle will include game sounds in the replay. When the toggle is enabled, the following audio codecs can be used.

- [AAC](https://en.wikipedia.org/wiki/Advanced_Audio_Coding)
- [FLAC](https://en.wikipedia.org/wiki/FLAC)
- [MP3](https://en.wikipedia.org/wiki/MP3)
- [Opus](https://en.wikipedia.org/wiki/Opus_(audio_format))

## Start Export / Add to Queue

To render and export the replay, press the 'Start Export' button on the bottom left of the window. This will apply the above options to your video and show the video being rendered live. Pressing the F3 key during the render will show extra debugging information and holding the escape key for 3 seconds during the render will stop the export at the current frame and save the video.

The 'Add to Queue' button will save the export settings and allows for naming the replay to be queued. A new menu on the main menu bar will appear titled 'Export Queue'. Clicking this button will open the export queue window with each export listed. You can render each replay or render all in order. 

::: tip
The export queue persists between replays.
:::