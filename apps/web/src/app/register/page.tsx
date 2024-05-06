'use client';
import FormInput from '@/components/FormInput';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { RegisterValidationSchema } from './RegisterValidationScehma';
import React from 'react';
import { useFormik } from 'formik';
import { Button } from '@/components/ui/button';
import useRegister from '@/hooks/api/auth/useRegister';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const Register = () => {
  const { register } = useRegister();
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      role: '',
    },
    // RegisterValidationSchema,
    validationSchema: RegisterValidationSchema,
    onSubmit: (values) => {
      try {
        register(values);
      } catch (error) {
        console.error('Registration error:', error);
      }
    },
  });
  return (
    <div className="p-3">
      <Card className="w-[350px] md:w-[600px] mx-auto border border-gray-900">
        <CardHeader>
          <h1 className="font-semibold text-xl">Register</h1>
          <h1 className="font-semibold">Sign up and explore the events!</h1>
        </CardHeader>

        <CardContent>
          <form onSubmit={formik.handleSubmit}>
            <div className="grid grid-cols-1 gap-3 text-black">
              <FormInput
                name="username"
                type="text"
                label=" Username"
                placeholder="Username"
                value={formik.values.username}
                error={formik.errors.username}
                isError={!!formik.touched.username && !!formik.errors.username}
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
              />

              <FormInput
                name="email"
                type="email"
                label="Email"
                placeholder="Email"
                value={formik.values.email}
                error={formik.errors.email}
                isError={!!formik.touched.email && !!formik.errors.email}
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
              />

              <FormInput
                name="password"
                type="password"
                label="Password"
                placeholder="Password"
                value={formik.values.password}
                error={formik.errors.password}
                isError={!!formik.touched.password && !!formik.errors.password}
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
              />

              <FormInput
                name="role"
                type="text"
                label="Role"
                placeholder="Role.."
                value={formik.values.role}
                error={formik.errors.role}
                isError={!!formik.touched.role && !!formik.errors.role}
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
              />

              {/* <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="What do you want to be?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Roles</SelectLabel>
                    <SelectItem value="CUSTOMER">Customer</SelectItem>
                    <SelectItem value="ORGANIZER">Organizer</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select> */}

              <Button type="submit">Register</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
