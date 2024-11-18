document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.querySelector(".chat-input textarea");
    const sendButton = document.getElementById("send-btn");
    const chatbotToggler = document.querySelector(".chatbot-toggler");
    const chatbot = document.querySelector(".chatbot");
  
    // Toggle chatbot visibility
    chatbotToggler.addEventListener("click", () => {
      document.body.classList.toggle("show-chatbot");
    });
  
    // Send message on Enter key press
    inputField.addEventListener("keydown", (e) => {
      if (e.code === "Enter" && !e.shiftKey) {
        e.preventDefault(); // Prevents adding a new line
        handleUserInput();
      }
    });
  
    // Send message on Send button click
    sendButton.addEventListener("click", handleUserInput);
  
    function handleUserInput() {
      let input = inputField.value;
      if (input.trim() !== "") {
        inputField.value = "";
        output(input);
      }
    }
  });
  
  function output(input) {
    let product;
  
    let text = input.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();
    text = text
      .replace(/ a /g, " ")   
      .replace(/i feel /g, "")
      .replace(/whats/g, "what is")
      .replace(/please /g, "")
      .replace(/ please/g, "")
      .replace(/r u/g, "are you");
  
    if (compare(prompts, replies, text)) { 
      product = compare(prompts, replies, text);
    } else if (text.match(/thank/gi)) {
      product = "You're welcome!";
    } else if (text.match(/(corona|covid|virus)/gi)) {
      product = coronavirus[Math.floor(Math.random() * coronavirus.length)];
    } else {
      product = alternative[Math.floor(Math.random() * alternative.length)];
    }
  
    addChat(input, product);
  }
  
  function compare(promptsArray, repliesArray, string) {
    let reply;
    let replyFound = false;
    for (let x = 0; x < promptsArray.length; x++) {
      for (let y = 0; y < promptsArray[x].length; y++) {
        if (promptsArray[x][y] === string) {
          let replies = repliesArray[x];
          reply = replies[Math.floor(Math.random() * replies.length)];
          replyFound = true;
          break;
        }
      }
      if (replyFound) {
        break;
      }
    }
    return reply;
  }
  
  function addChat(input, product) {
    const messagesContainer = document.querySelector(".chatbox");
  
    let userDiv = document.createElement("li");
    userDiv.className = "chat incoming";
    userDiv.innerHTML = `<span class="material-symbols-outlined">smart_toy</span><p>${input}</p>`;
    messagesContainer.appendChild(userDiv);
  
    let botDiv = document.createElement("li");
    botDiv.className = "chat outgoing";
    botDiv.innerHTML = `<span class="material-symbols-outlined">smart_toy</span><p>Typing...</p>`;
    messagesContainer.appendChild(botDiv);
  
    messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
  
    setTimeout(() => {
      botDiv.querySelector("p").innerText = `${product}`;
    }, 2000);
  }
  




// document.addEventListener("DOMContentLoaded", () => {
//     const inputField = document.querySelector(".chat-input textarea");
//     const sendButton = document.getElementById("send-btn");
//     const chatbotToggler = document.querySelector(".chatbot-toggler");
//     const chatbot = document.querySelector(".chatbot");
//     const languageSelector = document.getElementById("language-selector");
  
//     let currentLanguage = languageSelector.value;
  
//     // Handle language change
//     languageSelector.addEventListener("change", () => {
//       currentLanguage = languageSelector.value;
//     });
  
//     // Toggle chatbot visibility
//     chatbotToggler.addEventListener("click", () => {
//       document.body.classList.toggle("show-chatbot");
//     });
  
//     // Send message on Enter key press
//     inputField.addEventListener("keydown", (e) => {
//       if (e.code === "Enter" && !e.shiftKey) {
//         e.preventDefault(); // Prevents adding a new line
//         handleUserInput();
//       }
//     });
  
//     // Send message on Send button click
//     sendButton.addEventListener("click", handleUserInput);
  
//     function handleUserInput() {
//       let input = inputField.value;
//       if (input.trim() !== "") {
//         inputField.value = "";
//         output(input);
//       }
//     }
  
//     function output(input) {
//       let product;
  
//       let text = input.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();
//       text = text
//         .replace(/ a /g, " ")   
//         .replace(/i feel /g, "")
//         .replace(/whats/g, "what is")
//         .replace(/please /g, "")
//         .replace(/ please/g, "")
//         .replace(/r u/g, "are you");
  
//       // Respond based on selected language
//       if (currentLanguage === "en") {
//         if (compare(prompts.en, replies.en, text)) { 
//           product = compare(prompts.en, replies.en, text);
//         } else if (text.match(/thank/gi)) {
//           product = "You're welcome!";
//         } else if (text.match(/(corona|covid|virus)/gi)) {
//           product = coronavirus[Math.floor(Math.random() * coronavirus.length)];
//         } else {
//           product = alternative.en[Math.floor(Math.random() * alternative.en.length)];
//         }
//       } else if (currentLanguage === "hi") {
//         if (compare(prompts.hi, replies.hi, text)) { 
//           product = compare(prompts.hi, replies.hi, text);
//         } else if (text.match(/धन्यवाद/gi)) {
//           product = "आपका स्वागत है!";
//         } else if (text.match(/(कोरोना|कोविड|वायरस)/gi)) {
//           product = coronavirusHindi[Math.floor(Math.random() * coronavirusHindi.length)];
//         } else {
//           product = alternative.hi[Math.floor(Math.random() * alternative.hi.length)];
//         }
//       }
  
//       addChat(input, product);
//     }
  
//     function compare(promptsArray, repliesArray, string) {
//       let reply;
//       let replyFound = false;
//       for (let x = 0; x < promptsArray.length; x++) {
//         for (let y = 0; y < promptsArray[x].length; y++) {
//           if (promptsArray[x][y] === string) {
//             let replies = repliesArray[x];
//             reply = replies[Math.floor(Math.random() * replies.length)];
//             replyFound = true;
//             break;
//           }
//         }
//         if (replyFound) {
//           break;
//         }
//       }
//       return reply;
//     }
  
//     function addChat(input, product) {
//       const messagesContainer = document.querySelector(".chatbox");
  
//       let userDiv = document.createElement("li");
//       userDiv.className = "chat incoming";
//       userDiv.innerHTML = `<span class="material-symbols-outlined">smart_toy</span><p>${input}</p>`;
//       messagesContainer.appendChild(userDiv);
  
//       let botDiv = document.createElement("li");
//       botDiv.className = "chat outgoing";
//       botDiv.innerHTML = `<span class="material-symbols-outlined">smart_toy</span><p>Typing...</p>`;
//       messagesContainer.appendChild(botDiv);
  
//       messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
  
//       setTimeout(() => {
//         botDiv.querySelector("p").innerText = `${product}`;
//       }, 2000);
//     }
//   });
  




// document.addEventListener("DOMContentLoaded", () => {
//     const inputField = document.querySelector(".chat-input textarea");
//     const sendButton = document.getElementById("send-btn");
//     const chatbotToggler = document.querySelector(".chatbot-toggler");
//     const chatbot = document.querySelector(".chatbot");
//     const languageSelector = document.getElementById("language-selector");
  
//     let currentLanguage = languageSelector.value;
  
//     // Handle language change
//     languageSelector.addEventListener("change", () => {
//       currentLanguage = languageSelector.value;
//     });
  
//     // Toggle chatbot visibility
//     chatbotToggler.addEventListener("click", () => {
//       document.body.classList.toggle("show-chatbot");
//     });
  
//     // Send message on Enter key press
//     inputField.addEventListener("keydown", (e) => {
//       if (e.code === "Enter" && !e.shiftKey) {
//         e.preventDefault(); // Prevents adding a new line
//         handleUserInput();
//       }
//     });
  
//     // Send message on Send button click
//     sendButton.addEventListener("click", handleUserInput);
  
//     function handleUserInput() {
//       let input = inputField.value;
//       if (input.trim() !== "") {
//         inputField.value = "";
//         output(input);
//       }
//     }
  
//     function output(input) {
//       let product;
  
//       let text = input.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();
//       text = text
//         .replace(/ a /g, " ")   
//         .replace(/i feel /g, "")
//         .replace(/whats/g, "what is")
//         .replace(/please /g, "")
//         .replace(/ please/g, "")
//         .replace(/r u/g, "are you");
  
//       // Respond based on selected language
//       if (currentLanguage === "en") {
//         if (compare(prompts.en, replies.en, text)) { 
//           product = compare(prompts.en, replies.en, text);
//         } else if (text.match(/thank/gi)) {
//           product = "You're welcome!";
//         } else if (text.match(/(corona|covid|virus)/gi)) {
//           product = coronavirus[Math.floor(Math.random() * coronavirus.length)];
//         } else {
//           product = alternative.en[Math.floor(Math.random() * alternative.en.length)];
//         }
//       } else if (currentLanguage === "hi") {
//         if (compare(prompts.hi, replies.hi, text)) { 
//           product = compare(prompts.hi, replies.hi, text);
//         } else if (text.match(/thank/gi) || text.match(/धन्यवाद/gi)) {
//           product = "आपका स्वागत है!";
//         } else if (text.match(/(corona|covid|virus|कोरोना|कोविड|वायरस)/gi)) {
//           product = coronavirusHindi[Math.floor(Math.random() * coronavirusHindi.length)];
//         } else {
//           product = alternative.hi[Math.floor(Math.random() * alternative.hi.length)];
//         }
//       }
  
//       addChat(input, product);
//     }
  
//     function compare(promptsArray, repliesArray, string) {
//       let reply;
//       let replyFound = false;
//       for (let x = 0; x < promptsArray.length; x++) {
//         for (let y = 0; y < promptsArray[x].length; y++) {
//           if (promptsArray[x][y] === string) {
//             let replies = repliesArray[x];
//             reply = replies[Math.floor(Math.random() * replies.length)];
//             replyFound = true;
//             break;
//           }
//         }
//         if (replyFound) {
//           break;
//         }
//       }
//       return reply;
//     }
  
//     function addChat(input, product) {
//       const messagesContainer = document.querySelector(".chatbox");
  
//       let userDiv = document.createElement("li");
//       userDiv.className = "chat incoming";
//       userDiv.innerHTML = `<span class="material-symbols-outlined">smart_toy</span><p>${input}</p>`;
//       messagesContainer.appendChild(userDiv);
  
//       let botDiv = document.createElement("li");
//       botDiv.className = "chat outgoing";
//       botDiv.innerHTML = `<span class="material-symbols-outlined">smart_toy</span><p>Typing...</p>`;
//       messagesContainer.appendChild(botDiv);
  
//       messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
  
//       setTimeout(() => {
//         botDiv.querySelector("p").innerText = `${product}`;
//       }, 2000);
//     }
//   });
  