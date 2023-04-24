// Internationalization 2 https://launchschool.com/exercises/5c51e74f

function extractRegion(locale) {
  return locale.slice(3, 5);
}

function extractLanguage(locale) {
  return locale.slice(0, 2);
}

function greet(lang) {
  switch (lang) {
    case 'en':
      return 'Hi!';
      break;
    case 'fr':
      return 'Salut!';
      break;
    case 'pt':
      return 'Olá!';
      break;
    case 'de':
      return 'Hallo!';
      break;
    case 'sv':
      return 'Hej!';
      break;
    case 'af':
      return 'Haai!';
      break;
  }
}

function localGreet(locale) {
  switch (extractLanguage(locale)) {
    case 'en':
      switch (extractRegion(locale)) {
        case 'US' : return 'Hey!'; 
        case 'GB' : return 'Hello!';
        case 'AU' : return 'Howdy!';
      }
    default : return greet(extractLanguage(locale));
  }
}

localGreet('en_US.UTF-8'); // 'Hey!'
localGreet('en_GB.UTF-8'); // 'Hello!'
localGreet('en_AU.UTF-8'); // 'Howdy!'
localGreet('fr_FR.UTF-8'); // 'Salut!'
localGreet('fr_CA.UTF-8'); // 'Salut!'
localGreet('fr_MA.UTF-8'); // 'Salut!'