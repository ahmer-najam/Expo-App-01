import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import AppScreen from "../components/AppScreen";
import AppCategoryPickerItem from "../components/AppCategoryPickerItem";
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  AppSubmitButton,
} from "../components/form";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  { label: "Furniture", value: 1, backgroundColor:'red', icon:'couch' },
  { label: "Cars", value: 2, backgroundColor:'red', icon:'directions_car' },
  { label: "Camera", value: 3, backgroundColor:'blue', icon:'camera_enhance' },
  { label: "Games", value: 4, backgroundColor:'blue', icon:'videogame_asset' },
  { label: "Cloting", value: 5, backgroundColor:'green', icon:'supervisor_account' },
  { label: "Sports", value: 6, backgroundColor:'green', icon:'sports_baseball' },
  { label: "Movies & Music", value: 7, backgroundColor:'green', icon:'movie' },
  { label: "Books", value: 8, backgroundColor:'green', icon:'book' },
  { label: "Others", value: 9, backgroundColor:'green', icon:'apps' },
];

function ListingEditScreen(props) {
  return (
    <AppScreen>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField name="title" maxLength={255} placeholder="Title" />
        <AppFormField
          name="price"
          maxLength={8}
          placeholder="Price"
          keyboardType="numeric"
        />
        <AppFormPicker
          name="category"
          items={categories}
          numberOfColumns={3}
          placeHolder="Category"
          PickerItemComponent={AppCategoryPickerItem}
        />
        <AppFormField
          name="description"
          maxLength={255}
          placeholder="Description"
          multiline
          numberOfLines={3}
        />
        <AppSubmitButton title="Post" />
      </AppForm>
    </AppScreen>
  );
}

const styles = StyleSheet.create({});
export default ListingEditScreen;
