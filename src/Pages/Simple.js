import { Button} from '@themesberg/react-bootstrap';
import {Link} from "react-router-dom"
import {Routes} from "Routing/Routes"
import { Form } from '@themesberg/react-bootstrap';

import { useFormik } from "formik";
import * as Yup from "yup";

const validate = Yup.object({
    favoriteFood: Yup.string()
        .required("required"),
    favoritePlace: Yup.string()
    .required("required"),   
})

const Simple = () => {



    //   const {
    //     handleSubmit,
    //     handleChange,
    //     handleBlur,
    //     touched,
    //     values, // use this if you want controlled components
    //     errors,
    //   } = useFormik({
    //     initialValues: {
    //       favoriteFood: "",
    //       favoritePlace: "",
    //     },
    //     validate,
    //     onSubmit: (values) => {
    //       console.log(values.favoriteFood);
    //       // values = {"favoriteFood":"ramen","favoritePlace":"mountains"}
    //     },
    //   });

      const formik = useFormik({

        initialValues: {
          favoriteFood: "",
          favoritePlace: "",
   
        },
   
        validationSchema : validate,
   
        onSubmit: values => {
   
          alert(JSON.stringify(values, null, 2));
   
        },
   
      });

    return(
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="favoriteFood">Favorite Food:</label>
            <input
            type="text"
            name="favoriteFood"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            />
            {formik.touched.favoriteFood && formik.errors.favoriteFood
            ? <div>{formik.errors.favoritePlace}</div>
            : null}
    
            <label htmlFor="favoritePlace">Favorite place:</label>
            <input
            type="text"
            name="favoritePlace"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            />
    
            {formik.touched.favoritePlace && formik.errors.favoritePlace
            ? <div>{formik.errors.favoritePlace}</div>
            : null}
    
            <button type="submit">submit</button>
      </form>    
    );
    
};

export default Simple;