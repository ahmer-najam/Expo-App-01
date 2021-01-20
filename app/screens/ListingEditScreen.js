import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import AppScreen from "../components/AppScreen";
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
  { label: "Furniture", value: 1 },
  { label: "Cloting", value: 2 },
  { label: "Camera", value: 3 },
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
          placeHolder="Category"
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
