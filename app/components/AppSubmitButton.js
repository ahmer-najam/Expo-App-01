import React from "react";
import { useFormikContext } from "formik";

import colors from "../config/colors";
import AppButton from "./AppButton";
import { View } from "react-native";

function AppSubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();

  return <AppButton title={title} color="primary" onPress={handleSubmit} />;
}

export default AppSubmitButton;
