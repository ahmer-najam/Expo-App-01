import React from "react";
import { useFormikContext } from "formik";

import MyPicker2 from "../MyPicker2";
import MyErrors from "./MyErrors";

function AppFormPicker({ items, name, placeHolder, ...otherProps }) {
  const { setFieldValue, errors, touched, values } = useFormikContext();
  return (
    <>
      <MyPicker2
        items={items}
        placeholder={placeHolder}
        onSelectItem={(item) => setFieldValue(name, item)}
        selectedItem={values[name]}
        {...otherProps}
        // onBlur={() => setFieldTouched(name)}
        // onChangeText={handleChange(name)}
      />
      <MyErrors error={errors[name]} visiable={touched[name]} />
    </>
  );
}

export default AppFormPicker;
