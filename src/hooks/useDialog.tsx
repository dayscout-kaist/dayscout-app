import { type ReactNode } from "react";
import { View } from "react-native";

import { Button } from "@/components/Button";
import { fill, gap, row } from "@/styles";

import { useBottomSheet } from "./useBottomSheet";

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
      <View style={[row, gap(12)]}>
        {cancel && (
          <Button
            title={cancel}
            onPress={() => resolve(false)}
            variant="secondary"
            style={fill}
          />
        )}
        <Button
          title={confirm}
          onPress={() => resolve(true)}
          variant="primary"
          style={fill}
        />
      </View>
    </View>
  ));
