import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TextLength from "./app/pages/text/TextLength";
import TextPattern from "./app/pages/text/TextPattern";
import SpeechToText from "./app/pages/speech/SpeechToText";
import TextToSpeech from "./app/pages/speech/TextToSpeech";
import Root from "./app/Root";
import HtmlEnDeCode from "./app/pages/text/HtmlEnDeCode";
import UrlEnDeCode from "./app/pages/text/UrlEnDeCode";
import GenerateQrCode from "./app/pages/others/GenerateQrCode";
import ColorPicker from "./app/pages/others/ColorPicker";
import YourWebcam from "./app/pages/others/YourWebcam";
import ReplaceText from "./app/pages/text/ReplaceText";
import MinifyText from "./app/pages/text/MinifyText";
import Base64EnDecode from "./app/pages/text/Base64EnDecode";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/text-length",
          element: <TextLength />,
        },
        {
          path: "/text-pattern",
          element: <TextPattern />,
        },
        {
          path: "/speech-to-text",
          element: <SpeechToText />,
        },
        {
          path: "/text-to-speech",
          element: <TextToSpeech />,
        },
        {
          path: "/html-en-decode",
          element: <HtmlEnDeCode />,
        },
        {
          path: "/url-en-decode",
          element: <UrlEnDeCode />,
        },
        {
          path: "/base64-endecode",
          element: <Base64EnDecode />,
        },
        {
          path: "/qr-code",
          element: <GenerateQrCode />,
        },
        {
          path: "/color-picker",
          element: <ColorPicker />,
        },
        {
          path: "/webcam",
          element: <YourWebcam />,
        },
        {
          path: "/replace-text",
          element: <ReplaceText />,
        },
        {
          path: "/minify-text",
          element: <MinifyText />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
