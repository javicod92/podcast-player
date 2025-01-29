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
![Captura desde 2025-01-29 17-47-41](https://github.com/user-attachments/assets/1015f7c3-31cf-4f4b-900c-1253a7985d2c)
![Captura desde 2025-01-29 17-47-57](https://github.com/user-attachments/assets/5117e4cf-952e-45a3-9228-f147827a14cd)
![Captura desde 2025-01-29 17-48-09](https://github.com/user-attachments/assets/d2cf7860-b7e5-4ddc-a476-4f088b4e2ca2)
![Captura desde 2025-01-29 17-48-15](https://github.com/user-attachments/assets/2be2682d-4b2a-4e9e-a9e6-87a4df0f04df)
![Captura desde 2025-01-29 17-48-47](https://github.com/user-attachments/assets/915d62aa-4f68-4eea-a998-8dbbae1c720f)
![Captura desde 2025-01-29 17-49-02](https://github.com/user-attachments/assets/a5a56723-c9e7-4abd-ad30-101c8291c7e8)
![Captura desde 2025-01-29 17-53-01](https://github.com/user-attachments/assets/5dd66406-15a0-4465-980a-bffba4747d59)
![Captura desde 2025-01-29 17-53-29](https://github.com/user-attachments/assets/574e3069-a1b2-4751-9b73-57eacc4a5c30)
![Captura desde 2025-01-29 17-56-03](https://github.com/user-attachments/assets/c6d39f4d-a73f-425b-bf60-c64c77b9b9bd)
![Captura desde 2025-01-29 17-57-07](https://github.com/user-attachments/assets/b9c912c7-ddcc-494e-a790-57a981e7196c)
![Captura desde 2025-01-29 17-57-23](https://github.com/user-attachments/assets/f6255f0a-7f07-41a1-bdba-56ec0eb17bf9)
![Captura desde 2025-01-29 17-58-04](https://github.com/user-attachments/assets/771184ca-1859-4fe4-a5de-b71e508dd6fb)
![Captura desde 2025-01-29 17-59-01](https://github.com/user-attachments/assets/81703c10-c168-4338-9453-923d0df074c6)
![Captura desde 2025-01-29 17-59-26](https://github.com/user-attachments/assets/e5f7956a-3f6b-4760-bbad-c70f297997f2)
![Captura desde 2025-01-29 17-59-44](https://github.com/user-attachments/assets/7c5c9a34-0e17-486f-b1f6-84fe4839382a)
![Captura desde 2025-01-29 18-00-41](https://github.com/user-attachments/assets/52ad220f-2b04-42bd-815c-afa4b76ccc30)
![375550627-bf09d12b-da3d-4bdf-9bba-13f183128c3f](https://github.com/user-attachments/assets/4d08e035-4f91-4da3-ac84-afcc9eb3907d)



