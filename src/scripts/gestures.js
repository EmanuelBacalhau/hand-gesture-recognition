const { GestureDescription, Finger, FingerDirection, FingerCurl } = window.fp;
  
const RockGesture = new GestureDescription('rock'); // ✊️
const PaperGesture = new GestureDescription('paper'); // 🖐
const ScissorsGesture = new GestureDescription('scissors'); // ✌️
const DontGesture = new GestureDescription('dont') // 🙅‍♂️
const OkGesture = new GestureDescription('ok') // 👌
  
// Rock ✊️
// -----------------------------------------------------------------------------
  
// thumb: half curled
// accept no curl with a bit lower confidence
RockGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
RockGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);

// all other fingers: curled
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
    RockGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
    RockGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9);
}

// Paper 🖐
// -----------------------------------------------------------------------------
  
// no finger should be curled
for(let finger of Finger.all) {
    PaperGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
}

// Scissors ✌️
//------------------------------------------------------------------------------
  
// index and middle finger: stretched out
ScissorsGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
ScissorsGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
  
// ring: curled
ScissorsGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
ScissorsGesture.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9);

// pinky: curled
ScissorsGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
ScissorsGesture.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.9);

// Dont 🙅‍♂️
//------------------------------------------------------------------------------

for (const finger of Finger.all) {
  DontGesture.addCurl(finger, FingerCurl.NoCurl, 1.0)
  DontGesture.addCurl(finger, FingerCurl.HalfCurl, 0.8)

  DontGesture.addDirection(finger, FingerDirection.DiagonalUpRight, 1.0)
  DontGesture.addDirection(finger, FingerDirection.DiagonalUpLeft, 1.0)
  
  DontGesture.addDirection(finger, FingerDirection.HorizontaRight, 1.0)
  DontGesture.addDirection(finger, FingerDirection.HorizontaLeft, 1.0)
}

// OK 👌
//------------------------------------------------------------------------------
OkGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
OkGesture.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);
OkGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
OkGesture.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
OkGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);

const gestures = [
  RockGesture, 
  PaperGesture, 
  ScissorsGesture, 
  DontGesture, 
  OkGesture,
]

export {
  gestures
}