import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from "./app/Home"
import TextLength from "./app/pages/text/TextLength"
import TextPattern from "./app/pages/text/TextPattern"
import SpeechToText from "./app/pages/speech/SpeechToText"
import TextToSpeech from "./app/pages/speech/TextToSpeech"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/text-length",
      element: <TextLength />
    },
    {
      path: "/text-pattern",
      element: <TextPattern />
    },
    {
      path: "/speech-to-text",
      element: <SpeechToText />
    },
    {
      path: "/text-to-speech",
      element: <TextToSpeech />
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
