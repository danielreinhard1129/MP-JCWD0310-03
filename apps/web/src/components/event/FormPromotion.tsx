"use client";

import FormInput from "@/components/event/FormInput";
import { Button } from "@/components/ui/button";
import useCreatePromotion from "@/hooks/api/events/useCreatePromotion";
import { RootState } from "@/redux/store";
import { IFormCreatePromotion } from "@/types/promotion.type";
import { useFormik } from "formik";
import { useSelector } from "react-redux";


const FormPromotion = () => {
  const { createPromotion } = useCreatePromotion();
  const { id } = useSelector((state: RootState) => state.user);

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    setFieldValue,
    values,
    errors,
    touched,
  } = useFormik<IFormCreatePromotion>({
    initialValues: {
        eventId: 0, 
        userId: 0, 
        total: 0, 
        expiredAt: "",
        limit: 0,
    },
    // validationSchema: validationSchemaEvent,
    onSubmit: async (values) => {
      try {
        await createPromotion({ ...values, userId: id });
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <main className="container mx-auto my-3 px-4">
      <h1 className="mb-10 text-center text-lg font-bold">Create Promotion</h1>
      <form onSubmit={handleSubmit}>
        <div className="mx-auto max-w-[70%] space-y-1.5">
          {/* EVENTID INPUT */}
          <div className="space-y-5">
            <FormInput
              name="eventId"
              label="eventId"
              error={errors.eventId}
              isError={!!touched.eventId && !!errors.eventId}
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="eventId"
              type="number"
              value={values.eventId}
            />
            {/* USERID INPUT */}
          <div className="space-y-5">
            <FormInput
              name="userId"
              label="userId"
              error={errors.userId}
              isError={!!touched.userId && !!errors.userId}
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="userId"
              type="number"
              value={values.userId}
            />
            {/* TOTAL */}
            <FormInput
              name="total"
              label="total"
              error={errors.total}
              isError={!!touched.total && !!errors.total}
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="total"
              type="number"
              value={values.total}
            />

             {/* DATE INPUT */}
             <FormInput
              name="expiredAt"
              label="Expired At"
              error={errors.expiredAt}
              isError={!!touched.expiredAt && !!errors.expiredAt}
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="expired At"
              type="datetime-local"
              value={values.expiredAt}
            />
             {/* LIMIT INPUT */}
          <div className="space-y-5">
            <FormInput
              name="limit"
              label="limit"
              error={errors.limit}
              isError={!!touched.limit && !!errors.limit}
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="limit"
              type="number"
              value={values.limit}
             
            />
            {/* SUBMIT */}
            <div className="mb-4 flex justify-center">
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </div>
          </div>
        </div>
        </div>
        </div>
      </form>
    </main>
  )
}

export default FormPromotion;