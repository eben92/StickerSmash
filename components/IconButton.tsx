import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Pressable, PressableProps, StyleSheet, Text } from "react-native";

interface IconButtonProps extends PressableProps {
  icon: keyof (typeof MaterialIcons)["glyphMap"];
  label: string;
}

export default function IconButton({ icon, label, ...props }: IconButtonProps) {
  return (
    <Pressable {...props} style={styles.iconButton}>
      <MaterialIcons name={icon} size={38} color="#fff" />
      <Text style={styles.iconButtonLabel}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconButtonLabel: {
    color: "#fff",
    marginTop: 12,
  },
});
