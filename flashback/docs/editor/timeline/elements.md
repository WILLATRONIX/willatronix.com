# Elements

Elements allow you to control a specific feature of the replay. To add an element, press the 'Add Element' button located under the [Playback Controls](index.md).

## Element Types

The following element types are listed in the same order as the list shown in the 'Add Element' menu.

All elements can be added more than once. If two of the same element has overlapping [keyframes](keyframes.md), the higher element in the list will have a higher priority.

### Camera

The Camera element allows you to manipulate the camera position and rotation. The current camera position, yaw, pitch and [roll](/flashback/docs/editor/visuals.md#overrides) are captured when adding a new keyframe. These values can be modified by [Modifying the Keyframe](keyframes.md#modifying-keyframes) 


### Camera Orbit

The Camera Orbit element rotates around the provided coordinate. This element requires two keyframes for the start position and an end position. Both the start and end positions should have at least one different value to achieve some form of rotation.

#### Position 

 - The position value determines where the orbit should centre. The current editor position is used as the default values.

#### Distance

 - Determines how far the camera is from the centre.

#### Yaw / Pitch

 - The Yaw and Pitch values are used to rotate around the position. Make sure the start keyframe has different values to the end to achieve the effect of rotation. 

### Camera Shake

The Camera Shake element allows for a realistic handheld camera effect.

The following effects can be separated for both X and Y by enabling the 'Split Y/X' toggle.

#### Frequency

 - The frequency value effects how 'fast' the Camera Shake effect is.

#### Amplitude

 - The Amplitude value determines how much the camera should be offset.

### FOV

The FOV element allows for inputting a specific Field of View value. The minimum FOV is 1 and the maximum value is 110.

### Speed

The Speed element controls how fast the replay is played back. The minimum value is 0.1 and the maximum is 10

### Timelapse

Unlike the Speed element, Timelapse controls the play header directly. This element also requires two [keyframes](keyframes.md) for the start and end.

::: warning
The start keyframe must have a higher value than the end keyframe.
:::

To create a Timelapse, add two Timelapse keyframes and set the second keyframe to a higher value. The difference between the two keyframe values determine the duration it takes for the play header to reach each keyframe. Once the keyframes have their values set, the duration will be displayed between each Timelapse keyframe. An unsuccessful setup will highlight the second keyframe orange.

For example, a Timelapse keyframe at 00:00 with a value of 0s and a Timelapse keyframe at 01:00 with a value of 5s will play a minute's worth of replay in 5 seconds.

### Time of Day

Allows for inputting a time value measured in ticks.
