import React from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import {type RegistratioFormData } from './types';

export const RegisterForm: React.FC = () => {
  // 1. useForm hook generic type 
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<RegistratioFormData>({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPasseword: '',
      gender: '',
      terms: false,
    },
  });

  // Password cross-checking 
  const password = watch('password');

  // 2. Strongly typed submit handler
  const onSubmit: SubmitHandler<RegistratioFormData> = async (data) => {
    console.log('Submitted Data:', data);
    
    // API call simulation
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    alert('Registration Successful!');
    reset();
  };

  return (
    <div style={{ maxWidth: '450px', margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h2>Create an Account</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Full Name */}
        <div style={{ marginBottom: '15px' }}>
          <label>Full Name</label>
          <input
            type="text"
            {...register('fullName', {
              required: 'Naam likhna lazmi hai',
              minLength: {
                value: 3,
                message: 'Minumum 3 characters are required',
              },
            })}
            placeholder="Ali Ahmed"
            style={{ width: '100%', padding: '8px', marginTop: '4px' }}
          />
          {errors.fullName && (
            <p style={{ color: 'red', fontSize: '12px', margin: '4px 0 0' }}>
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div style={{ marginBottom: '15px' }}>
          <label>Email Address</label>
          <input
            type="email"
            {...register('email', {
              required: 'Email must be required',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'invalid email sign @ are required',
              },
            })}
            placeholder="ali@example.com"
            style={{ width: '100%', padding: '8px', marginTop: '4px' }}
          />
          {errors.email && (
            <p style={{ color: 'red', fontSize: '12px', margin: '4px 0 0' }}>
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div style={{ marginBottom: '15px' }}>
          <label>Password</label>
          <input
            type="password"
            {...register('password', {
              required: 'Password must be required',
              minLength: {
                value: 6,
                message: 'Minimum 3 characters are required',
              },
            })}
            style={{ width: '100%', padding: '8px', marginTop: '4px' }}
          />
          {errors.password && (
            <p style={{ color: 'red', fontSize: '12px', margin: '4px 0 0' }}>
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Confirm Password */}
        <div style={{ marginBottom: '15px' }}>
          <label>Confirm Password</label>
          <input
            type="password"
            {...register('confirmPasseword', {
              required: 'Password confirm are required',
              validate: (value) =>
                value === password || 'Passwords not match',
            })}
            style={{ width: '100%', padding: '8px', marginTop: '4px' }}
          />
          {errors.confirmPasseword && (
            <p style={{ color: 'red', fontSize: '12px', margin: '4px 0 0' }}>
              {errors.confirmPasseword.message}
            </p>
          )}
        </div>

        {/* Gender Dropdown */}
        <div style={{ marginBottom: '15px' }}>
          <label>Gender</label>
          <select
            {...register('gender', {
              required: 'Gender select must required',
            })}
            style={{ width: '100%', padding: '8px', marginTop: '4px' }}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && (
            <p style={{ color: 'red', fontSize: '12px', margin: '4px 0 0' }}>
              {errors.gender.message}
            </p>
          )}
        </div>

        {/* Terms Checkbox */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <input
              type="checkbox"
              {...register('terms', {
                required: 'Terms and conditions accept are compulsary',
              })}
            />
            I accept Terms & Conditions
          </label>
          {errors.terms && (
            <p style={{ color: 'red', fontSize: '12px', margin: '4px 0 0' }}>
              {errors.terms.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#0070f3',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          {isSubmitting ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  );
};