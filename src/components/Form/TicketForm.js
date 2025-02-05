// src/components/Form/TicketForm.js
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { db } from '../../firebase';

import { collection, addDoc } from 'firebase/firestore';

const schema = yup.object().shape({
    title: yup.string().required(),
    description: yup.string().required(),
    priority: yup.string().required(),
    category: yup.string().required(),
    contactEmail: yup.string().email().required(),
    phone: yup.string().required(),
});

const TicketForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {
        try {
            await addDoc(collection(db, "tickets"), data);
            alert("Ticket submitted successfully");
        } catch (error) {
            console.error("Error submitting ticket: ", error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('title')} placeholder="Title" />
            {errors.title && <span>{errors.title.message}</span>}
            <textarea {...register('description')} placeholder="Description" />
            {errors.description && <span>{errors.description.message}</span>}
            <select {...register('priority')}>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select>
            {errors.priority && <span>{errors.priority.message}</span>}
            <input {...register('category')} placeholder="Category" />
            {errors.category && <span>{errors.category.message}</span>}
            <input {...register('contactEmail')} placeholder="Email" />
            {errors.contactEmail && <span>{errors.contactEmail.message}</span>}
            <input {...register('phone')} placeholder="Phone" />
            {errors.phone && <span>{errors.phone.message}</span>}
            <button type="submit">Submit</button>
        </form>
    );
};

export default TicketForm;
