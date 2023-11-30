import React, { PropsWithChildren, useEffect, useRef } from "react";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { bg } from "@/styles";
import type { FlexStyle, StyleProp } from "react-native";

interface SheetProps extends PropsWithChildren {
  backdrop?: boolean;
  open: boolean;
  onClose?: () => void;
  delayClose?: boolean;
  viewStyle?: StyleProp<FlexStyle>;
}

export const BottomSheet: React.FC<SheetProps> = ({
  open,
  onClose,
  backdrop,
  children,
  delayClose,
  viewStyle,
}) => {
  const ref = useRef<BottomSheetModal>(null);

  useEffect(() => {
    if (!ref.current) return;
    if (open) return ref.current.present();
    delayClose ? setTimeout(ref.current?.close, 100) : ref.current.close();
  }, [open]);

  return (
    <BottomSheetModal
      ref={ref}
      enableDynamicSizing
      backgroundStyle={[
        bg.white,
        {
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          shadowColor: "#000",
          shadowRadius: 24,
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.1,
          elevation: 50,
        },
      ]}
      handleIndicatorStyle={[bg.gray300, { width: 80, height: 6 }]}
      backdropComponent={props =>
        backdrop && (
          <BottomSheetBackdrop
            appearsOnIndex={0}
            disappearsOnIndex={-1}
            opacity={0.3}
            enableTouchThrough={false}
            pressBehavior="close"
            {...props}
          />
        )
      }
      onDismiss={onClose}
    >
      <BottomSheetView style={viewStyle}>{children}</BottomSheetView>
    </BottomSheetModal>
  );
};
