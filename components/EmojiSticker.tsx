import { Image, View } from "react-native";

interface Props {
  stickerSource: any;
  imageSize: number;
}

export default function EmojiSticker({ stickerSource, imageSize }: Props) {
  return (
    <View style={{ top: -350 }}>
      <Image
        source={stickerSource}
        resizeMode="contain"
        style={{ width: imageSize, height: imageSize }}
      />
    </View>
  );
}
