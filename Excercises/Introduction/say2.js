function say(text) {
  console.log("===" + text);
}

function shout(text = "hello") {
  console.log(text + "!");
}

say('hello');
say('hi');
say('how do you do');
say('quite all right');

shout("Howdy");
shout();