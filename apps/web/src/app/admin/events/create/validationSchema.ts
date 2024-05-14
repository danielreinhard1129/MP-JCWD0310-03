// import * as Yup from "yup"

// export const validationSchema = Yup.object().shape({
//     title: Yup.string().required('Title is required'),
//     description: Yup.string().required('Description is required'),
//     category: Yup.string().required('Category is required'),
//     thumbnail: Yup.array().min(1),
//     location: Yup.string().required('Location is required'),
//     limit: Yup.number().min(10).required('availableSeats is required'),
//     booked: Yup.number().min(1).required('booked is required'),
//     price: Yup.number().min(0).required('price is required'),
//     is_free: Yup.boolean().required('isFree is required'),
//     start_event: Yup.date().required('start date is required'),
//     end_event: Yup.date().required('end date is required'),
//   });