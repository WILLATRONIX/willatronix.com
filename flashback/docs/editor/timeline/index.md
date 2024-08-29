# Timeline

By default, the Timeline window will be shown at the bottom of the screen. 

### Playback Controls

The playback controls are listed on the upper left corner of the timeline window. 

#### Skip backwards / Skip forwards

- Skips to the start or end of the replay

#### Slow down / Fast-forwards

- Changes the speed of the playback in logarithmic increments. This does not affect the final render.

#### Play / Pause

- Plays back the recording starting from the play header position

## Navigating The Timeline

To navigate along the timeline, use the time ruler located at the top of the Timeline window. Clicking on any point of this ruler will move the play header to that position in time, this can also be done by scolling up or down. You can also drag the triangular-shaped top of the play header to drag it across the Timeline.

If you have [keyframes](keyframes.md) set on the timeline, you can use the control key to view them as you're dragging the play header. Pressing shift while dragging the play header will snap to exact keyframe positions on the timeline.

Pressing the up or down arrow key will skip to the next keyframe or In/Out positions. Pressing the left or right arrow key will move the play header in one-tick steps.

## In/Out Positions

The In and Out positions are used to determined what section of the replay is rendered in the [Export](/flashback/docs/editor/exporting.md). To set the start of your replay, move the play header to a desired location and press the 'i' key. To set the end of the replay, press the 'o' key. 

Once both positions are set, a blue highlight will appear over the time ruler, indicating the section of the replay to be rendered.

You can modify the in and out positions by pressing the 'i' or 'o' keys to set the positions to the play header position on the timeline. Dragging the ends of the in and out points is a quicker, but less accurate way to set the positions. 

## Scroll bar

The scroll bar located at the bottom of the timeline is used to navigate along and zoom into the timeline. Dragging either highlighted end of the slider will allow for zooming in and out of the timeline. This can be useful for setting keyframes in precise positions. 