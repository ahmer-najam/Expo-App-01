import React from "react";
import { StyleSheet } from "react-native";
import { useFormikContext } from "formik";

import AppTextInput from "./AppTextInput";
import MyErrors from "./MyErrors";

function AppFormField({ name, ...otherProps }) {
  const { setFieldTouched, handleChange, touched, errors } = useFormikContext();
  return (
    <>
      <AppTextInput
        {...otherProps}
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
      />
      <MyErrors error={errors[name]} visiable={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({});

export default AppFormField;
