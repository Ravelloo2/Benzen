import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";

const PersonalForm = (props) => {
    const validationSchema = Yup.object().shape({
        fNamn: Yup.string().required("Rquired"),
        lNamn: Yup.string().required("Rquired"),
        email: Yup.string()
            .email("Du har lagt in en ogiltig mailadress")
            .required(),
        bKonto: Yup.number()
            .required("Rquired"),
        ;
        nsole.log(props);
        turn (
            
        )
    })
}