"use client";

import FormInput from "@/components/event/FormInput";
import { Button } from "@/components/ui/button";
import useCreateReviews from "@/hooks/api/reviews/useCreateReviews";
import { RootState } from "@/redux/store";
import { IFormCreateReview } from "@/types/reviews.type";
import { useFormik } from "formik";
import { useSelector } from "react-redux";


const FormReviews = () => {
  const { createReview } = useCreateReviews();
  const { id } = useSelector((state: RootState) => state.user);

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    setFieldValue,
    values,
    errors,
    touched,
  } = useFormik<IFormCreateReview>({
    initialValues: {
      review: "",
      rating: 0,
      eventId: 0,
      userId: 0,

    },
    // validationSchema: validationSchemaEvent,
    onSubmit: async (values) => {
      try {
        await createReview({ ...values, userId: id });
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <main className="container mx-auto my-3 px-4">
      <h1 className="mb-10 text-center text-lg font-bold">Create Event</h1>
      <form onSubmit={handleSubmit}>
        <div className="mx-auto max-w-[70%] space-y-1.5">
          {/* REVIEW INPUT */}
          <div className="space-y-5">
            <FormInput
              name="review"
              label="Review"
              error={errors.review}
              isError={!!touched.review&& !!errors.review}
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="Review"
              type="text"
              value={values.review}
            />
            {/* RATING */}
            <FormInput
              name="rating"
              label="Rating"
              error={errors.rating}
              isError={!!touched.rating && !!errors.rating}
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="rating"
              type="number"
              value={values.rating}
            />
            {/* SUBMIT */}
            <div className="mb-4 flex justify-center">
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
};

export default FormReviews;
