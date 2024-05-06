import List from "@mui/material/List";
import { IMenu } from "../models/menu.interface";
import {
  Camera,
  Comment,
  Compress,
  Construction,
  EnhancedEncryption,
  FindReplace,
  Html,
  Link,
  Mic,
  Palette,
  Pattern,
  QrCode,
  RecordVoiceOver,
  Straighten,
  TextFields,
} from "@mui/icons-material";
import ChildMenu from "./ChildMenu";

const menu: IMenu[] = [
  {
    icon: <TextFields />,
    label: "Text Functions",
    children: [
      {
        path: "/text-length",
        label: "Text Length",
        icon: <Straighten />,
      },
      {
        path: "/text-pattern",
        label: "Text Pattern",
        icon: <Pattern />,
      },
      {
        path: "/html-en-decode",
        label: "HTML Encode & Decode",
        icon: <Html />,
      },
      {
        path: "/url-en-decode",
        label: "URL Encode & Decode",
        icon: <Link />,
      },
      {
        path: "/base64-endecode",
        label: "Base64 Encode & Decode",
        icon: <EnhancedEncryption />,
      },
      {
        path: "/replace-text",
        label: "Replace Text",
        icon: <FindReplace />,
      },
      {
        path: "/minify-text",
        label: "Minify Text",
        icon: <Compress />,
      },
    ],
  },
  {
    icon: <Mic />,
    label: "Speech Functions",
    children: [
      {
        path: "/speech-to-text",
        label: "Speech To Text",
        icon: <Comment />,
      },
      {
        path: "/text-to-speech",
        label: "Text To Speech",
        icon: <RecordVoiceOver />,
      },
    ],
  },
  {
    icon: <Construction />,
    label: "Other Functions",
    children: [
      {
        path: "/qr-code",
        label: "Generate QR Code",
        icon: <QrCode />,
      },
      {
        path: "/color-picker",
        label: "Color Picker",
        icon: <Palette />,
      },
      {
        path: "/webcam",
        label: "Webcam",
        icon: <Camera />,
      },
    ],
  },
] as IMenu[];

export default function LeftMenu() {
  return (
    <>
      <List
        dense={true}
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        {menu.map((item) => (
          <ChildMenu parent={item} key={item.path} />
        ))}
      </List>
    </>
  );
}
