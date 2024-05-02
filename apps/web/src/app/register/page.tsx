'use client';
import FormInput from '@/components/FormInput';
import { FormikHandlers, useFormik } from 'formik';
import { RegisterValidationSchema } from './RegisterValidationSchema';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';

const Register = () => {
  const {
    errors,
    handleBlur,
    handleChange,
    handleReset,
    handleSubmit,
    touched,
    values,
  } = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      password: '',
    },
    validationSchema: RegisterValidationSchema,
    onSubmit: async (values) => {
      // register(values);
    },
  });

  return (
    <div className="bg-black h-screen py-5">
      <Tabs defaultValue="register" className="w-[370px] mx-auto">
        <TabsContent value="register">
          <Card className="bg-[#18171C] text-white">
            <CardHeader>
              <CardTitle>Register</CardTitle>
              <CardDescription className="text-[#9F9FA8]">
                Create your account here. Let's explore all the events.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <FormInput
                  labelName="Username"
                  name="fullName"
                  error={errors.fullName}
                  isError={!!touched.fullName && !!errors.fullName}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Name"
                  type="text"
                  value={values.fullName}
                />
              </div>
              <div className="space-y-1">
                <FormInput
                  labelName="Username"
                  name="fullName"
                  error={errors.fullName}
                  isError={!!touched.fullName && !!errors.fullName}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Name"
                  type="text"
                  value={values.fullName}
                />
              </div>
              <div className="space-y-1">
                <FormInput
                  labelName="Username"
                  name="fullName"
                  error={errors.fullName}
                  isError={!!touched.fullName && !!errors.fullName}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Name"
                  type="text"
                  value={values.fullName}
                />
              </div>
              <div className="space-y-1">
                <FormInput
                  labelName="Username"
                  name="fullName"
                  error={errors.fullName}
                  isError={!!touched.fullName && !!errors.fullName}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Name"
                  type="text"
                  value={values.fullName}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-[#215AD4]">Register</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Register;
