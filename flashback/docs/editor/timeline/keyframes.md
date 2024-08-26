# Keyframes

A keyframe is a point on the timeline which determines the start or end of a transition. There is currently a total of six different keyframe types in Flashback. Each keyframe has it's own transition.

To add a keyframe, press the plus icon adjacent to the [Element](elements.md) title.

## Modifying Keyframes

Moving keyframes along the timeline should be very simple. Drag the keyframe icon with left-click to where you'd like to position the keyframe. You can select multiple keyframes by dragging over them in the timeline. With multiple keyframes selected, you can hold the alt key while dragging to keep their relative distance.

Right-clicking a keyframe icon will open up a small menu where you can edit the values and properties of each keyframe. To change a keyframe type, click the 'Type' drop-down.

To delete a keyframe, select it and press either the backspace key or the delete key. You can also remove keyframes by pressing the 'Remove' button in the keyframe editor popup.

## Keyframe Types

Listed below, are all six keyframes alongside their description.

### Smooth

- The smooth keyframe utilises Catmul-Rom Splines to achieve the smoothest transition possible.

### Linear

- The most basic form of interpolation. Linear has no smooth acceleration or rotation.

### Ease In (Linear Out)

- This transition smoothly slows down until it has stopped and then transitions with linear interpolation. 

### Ease Out (Linear In)

- This transition stops and then transitions with a smooth acceleration.

### Ease In/Out

- The Ease In/Out transition starts and ends with smooth interpolation, after pausing in between.

### Hold

- Smoothly slows down and holds the camera in the same position by not joining the camera path to the next keyframe.