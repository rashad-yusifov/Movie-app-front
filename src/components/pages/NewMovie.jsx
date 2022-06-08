import React from "react";
import { Button, Container, Checkbox, Form } from "semantic-ui-react";
import { Formik, ErrorMessage} from "formik";
import {schemaOfMovie} from '../../helpers/index';

function NewMovie() {
  return (
    <Container text style={{ marginTop: "7em", marginBottom: "7em" }}>
      <Formik
        initialValues={{
          title: "",
          description: "",
          cover: ""
        }}
        validationSchema={schemaOfMovie}
        onSubmit={(values) =>{
          
        }}
      >
        {({onSubmit, handleChange, errors, handleBlur, values}) => {
          return (
            <Form>
              <Form.Field error={!!errors.title}>
                <label>Title</label>
                <input onBlur={handleBlur} value={values.title} onChange={handleChange} placeholder="Title" name="title" />
                <ErrorMessage name="title"/>
              </Form.Field>
              <Form.Field error={!!errors.description}> 
                <label>Description</label>
                <input onBlur={handleBlur} value={values.description} onChange={handleChange} placeholder="description" name="description"/>
                <ErrorMessage name="description"/>
              </Form.Field>
              <Form.Field error={!!errors.cover}>
                <label>Cover</label>
                <input onBlur={handleBlur} value={values.cover} onChange={handleChange} placeholder="Cover" name="cover"/>
                <ErrorMessage name="cover"/>
              </Form.Field>
              <Button type="submit">Submit</Button>
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
}

export default NewMovie;
