# Youtube Music App (clone) 
This project is a Youtube Music clone and was done as a final certification work for the React course at Informatorio Chaco. This project was built with technologies such as <b>React + Vite</b> and client-side rendering to offer the best user experience, also this project consumes an external <b>API</b>

## 🛠️ Used technologies:
- **React:** It is used to build reusable components and provide the best user experience
- **Vite:** Compiler and development tool to deliver a faster and more agile experience
- **TypeScript:** It is used for adding static typing and error prevention
- **CSS Modules:** It is used to avoid errors and style superposition

## 🚀 Main Functions:
- The page was built using modularity concepts and clean code for easy scalability, separating each part of the code according to its function
- To obtain all the songs of the page, I have used an external API like Audioboom
- The application contains a Header component, which has the application logo, a song search bar and user data such as the user's photo
- The application contains a sidebar component that allows users to add new playlists in real time. Users can set the title, description and photo of their playlist
- The main section contains all the songs obtained from the Audioboom API and the user can select any song to play it
- The songs in the main section are structured in several sections: music category, artists, recommended albums and listen again
- In the footer section, I have implemented a playback bar that allows the user to know the duration of the song, know the elapsed time, fast forward or rewind the time of the song, play and pause and switch between songs
- The playback bar shows the user the title, description and picture of the song, also the user can close the playback bar

## 📚 Applied Concepts
### React Hooks
- useState: React hook used to manage simple and complex states to allow handling proper interactivity with the page
- useEffect: React hook used to manage side effects in my React Components
- useRef: React hook used to manipulate domain elements and store data without their value being affected by each re-rendering
- useMemo: React hook used to store in cache memory the result between renderings
- Custom Hook (useFetch): used to obtain song data from the Audioboom API

### Design Patterns
- Separation of Concerns: The code was divided into simple modules and clear responsibilities
- Prop Delegation: Technique that allows to easily add or remove new functions to a component
- Context and Providers: For this app, I have used a context and a provider to separate the song playback logic and apply it globally to my application
