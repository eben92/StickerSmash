import { Image, StyleSheet } from "react-native";

export default function ImageViewer({ placeholder }: { placeholder: any }) {
  return <Image source={placeholder} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
