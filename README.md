# CHAT-APPLICATION

*COMPANY*: CODTECH IT SOLUTIONS

*NAME*: ILAMATHI.T

*INTERN ID*: CT04WK76

*DOMAIN*: FULL STACK DEVELOPMENT

*DURATION*: 4 WEEKS

*MENTOR*: NEELA SANTHOSH

#Building a WhatsApp-like real-time chat application involves integrating frontend design with backend logic and WebSocket communication. This project uses Node.js, Express, and Socket.IO to create real-time bi-directional communication between users. The frontend is created using HTML, CSS, and JavaScript, styled to mimic WhatsApp’s clean, responsive UI. Socket.IO is a JavaScript library that enables real-time, event-based communication between the client and server. It uses WebSocket under the hood and falls back to other methods if needed, making it reliable and browser-compatible.The folder structure begins with a root directory (whatsapp-chat) and a public folder that holds the frontend files: index.html, style.css, and script.js. The backend code resides in server.js, while package.json keeps track of installed packages like Express and Socket.IO.The server.js file sets up an HTTP server using Express and integrates Socket.IO. It listens for chat message events from the client, attaches a timestamp using JavaScript’s Date object, and broadcasts the message, sender, and timestamp to all connected clients. The client receives this data using Socket.IO and dynamically displays it in the chat window.The index.html file defines the structure of the chat UI. It includes an input for the username, a text input for the message, and a list to display messages. CSS in style.css mimics WhatsApp’s layout with a green header bar, rounded message bubbles, and clean spacing. The app supports both sender (you) and receiver (other) bubble styles. The use of Flexbox ensures the layout adapts well to screen sizes.Each message shows the sender's name, the content, and a timestamp below the text. The timestamp is added server-side and rendered on the frontend within a small div styled for subtlety. For avatars, the app uses the first letter of each user's name, styled in a circular colored background, replicating WhatsApp’s default user icon behavior.The real-time part is achieved through Socket.IO. When the user submits a message through the form, an event is emitted to the server with the username and message content. The server then adds a timestamp and emits it back to all clients. On receipt, the clients generate a new message element, insert the avatar (initial of the username), message text, and timestamp, and append it to the chat list. This live interaction between users is seamless and immediate.Online resources include the official Socket.IO documentation, MDN Web Docs for JavaScript and HTML references, and CSS references like W3Schools or CSS Tricks for styling guidance. Developers can also find icon libraries like FontAwesome or tools like Google Fonts to enhance design.In summary, the WhatsApp-style chat app combines real-time communication with a clean, mobile-friendly user interface. Socket.IO ensures fast, persistent messaging, while modern HTML/CSS techniques allow for an intuitive user experience, complete with avatars, timestamps, and responsive design. This project offers an excellent foundation for further enhancements like emojis, image sharing, chat rooms, and database integration.#

#OUTPUT

![Image](https://github.com/user-attachments/assets/454f120a-5225-4c4a-abc7-bc89e065eb26)

![Image](https://github.com/user-attachments/assets/e6f82b58-ae85-468f-bc2c-52f5b0161a69)

![Image](https://github.com/user-attachments/assets/1f3d6825-58b6-4251-9379-1e750cff75a2)

![Image](https://github.com/user-attachments/assets/0ca3b992-5f6d-4c53-a4cf-f74f8d68e7db)



