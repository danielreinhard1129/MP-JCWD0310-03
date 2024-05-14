'use client';

import Dropzone from '@/components/event/Dropzone';
import FormInput from '@/components/event/FormInput';
import FormTextArea from '@/components/event/FormTextArea';
import PreviewImages from '@/components/event/PreviewImages';
import { Button } from '@/components/ui/button';
import useCreateEvent from '@/hooks/api/events/useCreateEvent';
import { IFromCreateEvent } from '@/types/event.type';
import { useFormik } from 'formik';
// import { validationSchema } from './validationSchema';

const Page = () => {
  const { createEvent } = useCreateEvent();
//   const { id } = useAppSelector((state) => state.user);
  const {
    handleSubmit,
    handleBlur,
    handleChange,
    setFieldValue,
    values,
    errors,
    touched,
  } = useFormik<IFromCreateEvent>({
    initialValues: {
      title: '',
      category: '',
      thumbnail: [],
      description: '',
      end_event: new Date(),
      limit: 0,
      location: '',
      price: 0,
      start_event: new Date(),
      
      userId: 0

    
    
    },
    // validationSchema: validationSchema,
    onSubmit: (values) => {
      createEvent({ ...values, userId: 1 });
    },
  });
  return (
    <main className="container mx-auto px-4">
      <form onSubmit={handleSubmit}>
        <div className="mx-auto flex max-w-5xl flex-col gap-4">
          <FormInput
            name="title"
            type="text"
            label="Title"
            placeholder="Title"
            value={values.title}
            error={errors.title}
            isError={!!touched.title && !!errors.title}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />

          <FormInput
            name="category"
            type="text"
            label="Category"
            placeholder="Category"
            value={values.category}
            error={errors.category}
            isError={!!touched.category && !!errors.category}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
          <FormTextArea
            name="description"
            label="Description"
            placeholder="Description"
            value={values.description}
            error={errors.description}
            isError={!!touched.description && !!errors.description}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
           <FormInput
            name="location"
            type="text"
            label="Location"
            placeholder="Location"
            value={values.location}
            error={errors.location}
            isError={!!touched.location && !!errors.location}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
          <FormInput
            name="limit"
            type="number"
            label="Limit"
            placeholder="Limit"
            value={values.limit}
            error={errors.limit}
            isError={!!touched.limit && !!errors.limit}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
          <PreviewImages
            fileImages={values.thumbnail}
            onRemoveImage={(idx: number) =>
              setFieldValue('thumbnail', values.thumbnail?.toSpliced(idx, 1))
            }
          />
          <Dropzone
            isError={Boolean(errors.thumbnail)}
            label="Thumbnail"
            onDrop={(files) =>
              setFieldValue('thumbnail', [
                ...values.thumbnail,
                ...files.map((file) => file),
              ])
            }
          />
          <input type="datetime-local" />
          {/* <FormInput
            name="start_event"
            type="text"
            label="start_event"
            placeholder="start_event"
            value={values.start_event}
            error={errors.start_event as string}
            isError={!!touched.start_event && !!errors.start_event}
            handleChange={handleChange}
            handleBlur={handleBlur}
          /> */}
          {/* <FormInput
            name="end_event"
            type="text"
            label="end_event"
            placeholder="end_event"
            value={values.end_event}
            error={errors.end_event as string}
            isError={!!touched.end_event && !!errors.end_event}
            handleChange={handleChange}
            handleBlur={handleBlur}
          /> */}
          <FormInput
            name="price"
            type="number"
            label="price"
            placeholder="price"
            value={values.price}
            error={errors.price}
            isError={!!touched.price && !!errors.price}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
          <div className="mb-4 flex justify-end">
            <Button type="submit">Submit</Button>
          </div>
        </div>
      </form>
    </main>
  );
};

export default Page;