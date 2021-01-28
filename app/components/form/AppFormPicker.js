import React from "react";
import { useFormikContext } from "formik";

import AppPicker from "../AppPicker";
import MyErrors from "./MyErrors";

function AppFormPicker({ items, name, placeHolder,numberOfColumns, PickerItemComponent, ...otherProps }) {
  const { setFieldValue, errors, touched, values } = useFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        numberOfColumns={numberOfColumns}
        placeholder={placeHolder}
        onSelectItem={(item) => setFieldValue(name, item)}
        selectedItem={values[name]}
        PickerItemComponent={PickerItemComponent}
        {...otherProps}
      />
      <MyErrors error={errors[name]} visiable={touched[name]} />
    </>
  );
}

export default AppFormPicker;
