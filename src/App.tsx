import {createBrowserRouter, RouterProvider} from "react-router-dom"
import TextLength from "./app/pages/text/TextLength"
import TextPattern from "./app/pages/text/TextPattern"
import SpeechToText from "./app/pages/speech/SpeechToText"
import TextToSpeech from "./app/pages/speech/TextToSpeech"
import Root from "./app/Root"
import HtmlEnDeCode from "./app/pages/text/HtmlEnDeCode"
import UrlEnDeCode from "./app/pages/text/UrlEnDeCode"
import GenerateQrCode from "./app/pages/others/GenerateQrCode"
import ColorPicker from "./app/pages/others/ColorPicker"
import YourWebcam from "./app/pages/others/YourWebcam"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children:[
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
        },
        {
          path: "/html-en-decode",
          element: <HtmlEnDeCode />
        },
        {
          path: "/url-en-decode",
          element: <UrlEnDeCode />
        },
        {
          path: "/qr-code",
          element: <GenerateQrCode />
        },
        {
          path: "/color-picker",
          element: <ColorPicker />
        },
        {
          path: "/webcam",
          element: <YourWebcam />
        }
      ]
    },
    
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
