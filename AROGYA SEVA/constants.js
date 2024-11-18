// Options the user could type in
const prompts = [
    ["hi", "hey", "hello"],
    ["how can i book my virtual appointment"],
    ["how can i book an appointment"],
    ["how can i do my own daignosis"],
    ["who are you", "are you human", "are you bot", "are you human or bot"],
    ["who created you", "who made you"],
    [
      "your name please",
      "your name",
      "may i know your name",
      "what is your name",
      "what call yourself"
    ],
    ["i need to do diagnosis"],
    ["fever"],
    ["bad", "bored", "tired"],
    ["help me", "tell me story", "tell me joke"],
    ["ah", "yes", "ok", "okay", "nice"],
    ["bye", "good bye", "goodbye", "see you later"],
    ["what should i eat today"],
    ["emergency"],
    ["what", "why", "how", "where", "when"],
    ["no","not sure","maybe","no thanks"],
    [""],
    ["haha","ha","lol","hehe","funny","joke"]
  ]
  
  // Possible responses, in corresponding order
  
  const replies = [
    ["Hi there! How can I help you today? Feel free to ask me anything.       नमस्ते! आज मैं आपकी मदद करने में कैसे सक्षम हूं? आप मुझसे कुछ भी पूछ सकते हैं।", "Hi! How may I help you!!!       नमस्ते! क्या मेरे द्वारा आपकी कोई सहायता हो सकती है!!!", "Hey! How can i be at your service today!!!        मैं आज आपकी सेवा में कैसे उपस्थित हो सकता हूँ!!!"],
    [
      "Step 1: Visit your healthcare section.Step 2: Select the hospital you want to visit. Step 3: Fill all the detail and you will get the confirmation on your mail.    चरण 1: अपने स्वास्थ्य देखभाल अनुभाग पर जाएँ। चरण 2: उस अस्पताल का चयन करें जहाँ आप जाना चाहते हैं। चरण 3: सभी विवरण भरें और आपको आपके मेल पर पुष्टि मिल जाएगी|  "
    ],
    [
      "Nothing much",
      "About to go to sleep",
      "Can you guess?",
      "I don't know actually"
    ],
    ["There and 28 beds available at AIIMS delhi! Do you want to book an appoinment?"],
    ["I am just a bot", "I am a bot. What are you?"],
    ["The one true God, JavaScript"],
    ["I am nameless", "I don't have a name"],
    ["Please visit the knoledge centre"],
    ["Fever symptoms include elevated body temperature above 100.4°F (38°C), chills, sweating, headache, muscle aches, weakness, loss of appetite, irritability, dehydration, and flushed skin.      बुखार के लक्षणों में शरीर का तापमान 100.4°F (38°C) से ऊपर बढ़ना, ठंड लगना, पसीना आना, सिरदर्द, मांसपेशियों में दर्द, कमजोरी, भूख न लगना, चिड़चिड़ापन, निर्जलीकरण और त्वचा का लाल होना शामिल हैं।"],
    ["Why?", "Why? You shouldn't!", "Try watching TV"],
    ["What about?", "Once upon a time..."],
    ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
    ["Bye", "Goodbye", "See you later"],
    ["Sushi", "Pizza"],
    ["Dial anyone of the given numbers.You will be redirected to the help desk of the nearest Hospitals :9384738383,37383938,293843492 "],
    ["Great question"],
    ["That's ok","I understand","What do you want to talk about?"],
    ["Please say something :("],
    ["Haha!","Good one!"]
  ]
  
  // Random for any other user input
  
  const alternative = [
    "Sorry, try again!!",
    "I could not understand you ,kindly rephrase it...",
    "I don't understand , try again:/"
  ]
  
  // Whatever else you want :)
  
  const coronavirus = ["Please stay home", "Wear a mask", "Fortunately, I don't have COVID", "These are uncertain times"]









// const prompts = {
//     en: [
//       ["hi", "hello", "hey"],
//       ["how are you", "how is life"],
//       ["how can i book my virtual appointment?"]
//       // Add more prompts
//     ],
//     hi: [
//       ["नमस्ते", "हैलो", "सुप्रभात"],
//       ["कैसे हो", "आप कैसे हैं"],
//       // Add more prompts
//     ]
//   };
  
//   const replies = {
//     en: [
//       ["Hi there! How can I help you today? Feel free to ask me anything.", "Hi! How may I help you!!!", "Hey! How can i be at your service today!!!"],
//       ["I'm good, thank you!", "Doing well!"],
//       ["Step 1: Visit your healthcare provider's website. Step 2: Download a telehealth app like Practo, Apollo 24|7, DocsApp, or MediBuddy. Step 3: Log in to your insurance company's portal."]
//       // Add more replies
//     ],
//     hi: [
//       ["नमस्ते!", "हैलो!", "सुप्रभात!"],
//       ["मैं अच्छा हूँ, धन्यवाद!", "ठीक हूँ!"],
//       // Add more replies
//     ]
//   };
  
//   const alternative = {
//     en: ["Sorry, I didn't understand that.", "Could you rephrase that?"],
//     // hi: ["मुझे माफ़ करें, मैंने समझा नहीं।", "क्या आप उसे फिर से कह सकते हैं?"]
//     hi: ["नमस्ते!"]

//   };
  
//   const coronavirus = [
//     "Stay safe! Wash your hands regularly.",
//     "Maintain social distancing!",
//     // Add more responses
//   ];
  
//   const coronavirusHindi = [
//     "सुरक्षित रहें! नियमित रूप से हाथ धोएं।",
//     "सामाजिक दूरी बनाए रखें!",
//     // Add more responses
//   ];
  