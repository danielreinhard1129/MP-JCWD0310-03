"use client";

// import Dropzone from '@/components/Dropzone';
import Dropzone from "@/components/event/Dropzone";
// import FormInput from '@/components/FormInput';
import FormInput from "@/components/event/FormInput";
// import FormTextArea from '@/components/FormTextArea';
// import PreviewImages from '@/components/PreviewImages';
import PreviewImages from "@/components/event/PreviewImages";
// import RichTextEditor from '@/components/RichTextEditor';
import { Button } from "@/components/ui/button";
// import { useAppSelector } from '@/redux/hooks';
import { useFormik } from "formik";
// import { validationSchema } from './validationSchema.ts';
import FormTextArea from "@/components/event/FormTextArea";
import useCreateEvent from "@/hooks/api/events/useCreateEvent";
import { IFormCreateEvent } from "@/types/event.type";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import AuthGuard from "@/hoc/AuthGuard";
// import { SelectSingleEventHandler } from 'shadcn';
// import AuthGuard from '@/hoc/AuthGuard';
const Write = () => {
  const { createEvent } = useCreateEvent();
  const { id } = useSelector((state: RootState) => state.user);

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    setFieldValue,
    values,
    errors,
    touched,
  } = useFormik<IFormCreateEvent>({
    initialValues: {
      title: "",
      category: "",
      thumbnail: [],
      description: "",
      limit: 0,
      end_event: new Date(),
      start_event: new Date(),
      location: "",
      price: 0,
      userId: 0,
    },
    // validationSchema: validationSchemaEvent,
    onSubmit: async (values) => {
      try {
        await createEvent({ ...values, userId: id });
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <main className="container mx-auto my-3 px-4">
      <h1 className="my-3 text-center text-lg font-bold">Create Event</h1>
      <form onSubmit={handleSubmit}>
        <div className="mx-auto flex max-w-[50%] flex-col gap-4 space-y-1.5">
          {/* TITLE INPUT */}
          <FormInput
            name="title"
            label="Title"
            error={errors.title}
            isError={!!touched.title && !!errors.title}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="Title"
            type="text"
            value={values.title}
          />
          {/* TICKET LIMIT */}
          <FormInput
            name="limit"
            label="Limit"
            error={errors.limit}
            isError={!!touched.limit && !!errors.limit}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="Limit"
            type="number"
            value={values.limit}
          />
          {/* DATE INPUT */}
          <div className="space-y-2">
            <FormInput
              name="start_event"
              label="Start Date"
              error={errors.start_event}
              isError={!!touched.start_event && !!errors.start_event}
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="Start Date"
              type="date"
              value={values.start_event}
            />
            <FormInput
              name="end_event"
              label="Start Date"
              error={errors.end_event}
              isError={!!touched.end_event && !!errors.end_event}
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="End Date"
              type="date"
              value={values.end_event || 0}
            />
          </div>
          <FormInput
            name="category"
            label="Category"
            error={errors.category}
            isError={!!touched.category && !!errors.category}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="Category"
            type="text"
            value={values.category}
          />
          {/* DESCRIPTION INPUT */}
          <FormTextArea
            name="description"
            error={errors.description}
            isError={!!touched.description && !!errors.description}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="Description"
            value={values.description}
          />
          {/* VENUE INPUT */}

          <FormInput
            name="location"
            label="Location"
            error={errors.location}
            isError={!!touched.location && !!errors.location}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="Location"
            type="text"
            value={values.location}
          />
          <FormInput
            name="price"
            label="Price"
            error={errors.price}
            isError={!!touched.price && !!errors.price}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="Price"
            type="number"
            value={String(values.price)}
          />

          {/* PREVIEW IMAGE */}
          <PreviewImages
            fileImages={values.thumbnail}
            onRemoveImage={(idx: number) =>
              setFieldValue("thumbnail", values.thumbnail?.toSpliced(idx, 1))
            }
          />
          {/* UPLOAD IMAGE */}
          <Dropzone
            isError={Boolean(errors.thumbnail)}
            label="Thumbnail"
            onDrop={(files) =>
              setFieldValue("thumbnail", [
                ...values.thumbnail,
                ...files.map((file) => file),
              ])
            }
          />
          {/* SUBMIT */}
          <div className="mb-4 flex justify-center">
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </div>
        </div>
      </form>
    </main>
  );
};

export default AuthGuard(Write);
