import { Image, StyleSheet } from "react-native";

interface ImageViewerProps {
  selectedImage: string | null;
  placeholder: any;
}

export default function ImageViewer({
  selectedImage,
  placeholder,
}: ImageViewerProps) {
  const image = selectedImage ? { uri: selectedImage } : placeholder;
  return <Image source={image} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
