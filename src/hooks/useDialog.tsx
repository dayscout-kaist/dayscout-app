import { type ReactNode } from "react";
import { useBottomSheet } from "./useBottomSheet";
import { View } from "react-native";
import { gap, row } from "@/styles";
import { Button } from "@/components/Button";

interface Props {
  title: string;
  contents?: ReactNode;
  confirm?: string;
  cancel?: string;
}

export const useDialog = ({
  title,
  contents,
  confirm = "확안",
  cancel,
}: Props) =>
  useBottomSheet<boolean>(title, resolve => (
    <View>
      {contents}
      <View style={[row, gap(8)]}>
        {cancel && (
          <Button
            title={cancel}
            onPress={() => resolve(false)}
            style="secondary"
          />
        )}
        <Button title={confirm} onPress={() => resolve(true)} style="primary" />
      </View>
    </View>
  ));
