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

## Project Screenshots
### Loading content:
1) While the page fetches the songs from the Audioboom API, I have implemented a load message from my useFetch hook

![370104683-eb4c74d6-9cfd-4ae5-a607-c3334fe9885e](https://github.com/user-attachments/assets/4cb9a686-e51e-4fcf-830d-e4dd456cb69f)

2) If the data has not been loaded correctly from the external API, the application displays an error message to the user. Otherwise, the page will show the user all the songs obtained

![370105529-48f0ac39-f353-4380-bb35-9a15b0e8e641](https://github.com/user-attachments/assets/bd01c8e7-1016-4473-9ef1-5cf9408e6dc5)

### Sections of the Web Application

1) This picture shows the Category and Listen Again sections

![Captura desde 2025-01-29 17-47-13](https://github.com/user-attachments/assets/ecba9522-56fa-479b-9727-560ba1831702)

2) This image shows the scroll bar present in all sections to allow users to see more songs

![Captura desde 2025-01-29 17-47-41](https://github.com/user-attachments/assets/1015f7c3-31cf-4f4b-900c-1253a7985d2c)

3) This image shows the Similar To section

![Captura desde 2025-01-29 17-47-57](https://github.com/user-attachments/assets/5117e4cf-952e-45a3-9228-f147827a14cd)

4) This image shows the Quick Picks Section

![Captura desde 2025-01-29 17-48-09](https://github.com/user-attachments/assets/d2cf7860-b7e5-4ddc-a476-4f088b4e2ca2)

5) This image shows the Recommended Albums section 

![Captura desde 2025-01-29 17-48-15](https://github.com/user-attachments/assets/2be2682d-4b2a-4e9e-a9e6-87a4df0f04df)

### Adding a New Playlist

1) This image shows how the sidebar expands when the user clicks on the expand icon

![Captura desde 2025-01-29 17-48-47](https://github.com/user-attachments/assets/915d62aa-4f68-4eea-a998-8dbbae1c720f)

2) This image shows the Add new playlist page and the fields to be filled in

![Captura desde 2025-01-29 17-49-02](https://github.com/user-attachments/assets/a5a56723-c9e7-4abd-ad30-101c8291c7e8)

3) This image shows an example of a new playlist created

![Captura desde 2025-01-29 17-53-01](https://github.com/user-attachments/assets/5dd66406-15a0-4465-980a-bffba4747d59)

4) Now, the new playlist appears in the sidebar component

![Captura desde 2025-01-29 17-53-29](https://github.com/user-attachments/assets/574e3069-a1b2-4751-9b73-57eacc4a5c30)

### Playback Bar

1) The playback bar appears when the user selects a song. This component shows the user the title, description and image of the song, it also allows users to control the playback of the songs. The image also shows the pause icon that appears on the song card and allows the user to play or pause the current song

![Captura desde 2025-01-29 17-56-03](https://github.com/user-attachments/assets/c6d39f4d-a73f-425b-bf60-c64c77b9b9bd)

2) the quick pick section also displays a pause icon when playing a song from that section

![Captura desde 2025-01-29 17-57-07](https://github.com/user-attachments/assets/b9c912c7-ddcc-494e-a790-57a981e7196c)

3) Play and pause icons displayed on the song card component

![Captura desde 2025-01-29 17-56-30](https://github.com/user-attachments/assets/97596f39-b8c5-4d06-a6b3-bd7bfcab7576)

![Captura desde 2025-01-29 17-57-23](https://github.com/user-attachments/assets/f6255f0a-7f07-41a1-bdba-56ec0eb17bf9)

4) This image shows the Playbar component. It allows the user to know the title, description and picture of the playlist, it also allows the user to have control of the playback of the songs. This component shows the current time, the elapsed time and the user can manipulate the time

![Captura desde 2025-01-29 17-58-04](https://github.com/user-attachments/assets/771184ca-1859-4fe4-a5de-b71e508dd6fb)

5) User manipulation of song timing

![Captura desde 2025-01-29 17-59-01](https://github.com/user-attachments/assets/81703c10-c168-4338-9453-923d0df074c6)


6) Current and elapsed time of the song

![Captura desde 2025-01-29 17-59-26](https://github.com/user-attachments/assets/e5f7956a-3f6b-4760-bbad-c70f297997f2)

7) Component that show the song description

![Captura desde 2025-01-29 17-59-44](https://github.com/user-attachments/assets/7c5c9a34-0e17-486f-b1f6-84fe4839382a)

8) This image shows a button that allows the user to close the playback bar

![Captura desde 2025-01-29 18-00-41](https://github.com/user-attachments/assets/52ad220f-2b04-42bd-815c-afa4b76ccc30)

### Design

1) I have applied styles to my website to make it responsive to different resolutions

![375550627-bf09d12b-da3d-4bdf-9bba-13f183128c3f](https://github.com/user-attachments/assets/4d08e035-4f91-4da3-ac84-afcc9eb3907d)

## 🥁 What Makes This Project Interesting?
- **Design similat to Youtube Music App**
- **Project developed with modern technologies such as React, Vite and TypeScript**
- **Focuses on modularity and scalability, with well-separated logic**
- **Use of CSS Modules to avoid style conflicts**
- **This project consumes an external Audioboom API**
- **Use custom hooks, such as useFetch, to consume the Audioboom API**
- **Implements Context API and a Provider to handle playback logic globally**
- **Offers functionalities such as play/pause, navigation between songs, fast forward/rewind, etc**
- **Allows to display the time and to show the audio information (title, description and image) in the playback bar**

## How to Use This App?
1) **Clone this repository:** https://github.com/javicod92/podcast-player.git
2) **Install dependencies:** npm install
3) **Use the App**

**This project was deployed in:** https://podcast-player-eight.vercel.app
