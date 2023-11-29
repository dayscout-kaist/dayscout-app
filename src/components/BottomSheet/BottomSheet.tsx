import React, { forwardRef } from "react";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import type { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";

import { bg, padding, safe } from "@/styles";

export const BottomSheet = forwardRef<
  BottomSheetModalMethods,
  { children: React.ReactNode }
>(({ children }, ref) => (
  <BottomSheetModal
    ref={ref}
    index={-1}
    enablePanDownToClose
    enableDynamicSizing
    animateOnMount
    backgroundStyle={[
      bg.white,
      { borderTopLeftRadius: 24, borderTopRightRadius: 24 },
    ]}
    handleStyle={[padding.top(15), padding.bottom(16)]}
    handleIndicatorStyle={[bg.gray300, { width: 80, height: 6 }]}
    backdropComponent={props => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        enableTouchThrough={false}
        pressBehavior="close"
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "rgba(0, 0, 0, 0.3)",
        }}
      />
    )}
  >
    <BottomSheetView
      style={[padding.horizontal(safe.horizontal), padding.bottom(safe.bottom)]}
    >
      {children}
    </BottomSheetView>
  </BottomSheetModal>
));
