// Form.js
import { Controller } from 'react-hook-form';
import P from '../ui/typography/paragraph';
import { useSubmitForm } from './hooks';
import Dropzone from 'react-dropzone';
import { FormContainer } from './styles'; // Import the styles

export default function Form() {
  const { register, handleSubmit, errors, onSubmit, setFile, control, file } = useSubmitForm();

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>

        <input className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="text" placeholder="Country" {...register('country', { required: true })} />
        {errors.country && <span>{errors.country.message}</span>}

        <input className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="text" placeholder="City" {...register('city', { required: true })} />
        {errors.city && <span>{errors.city.message}</span>}

        <input className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="date" placeholder="select date" {...register('date')} />

        {/* Add the Dropzone component */}
        <Controller
          name="image"
          control={control}
          // rules={{ required: true }}
          render={({ field }) => (
              <div>
              <Dropzone onDrop={(acceptedFiles) => {
                  field.onChange(acceptedFiles[0])
                  console.log('acceptedFiles', acceptedFiles[0])
                  setFile(acceptedFiles[0])
              }}>
              {({ getRootProps, getInputProps }) => (
                  <div className="h-40" {...getRootProps()}>
                      <input {...getInputProps()} />
                      <p className="text-center">Drag and drop an image or click to select</p>
                  </div>
              )}
              </Dropzone>
              {file && (
                  <div>
                    <h4>Thumbnail:</h4>
                    <img src={URL.createObjectURL(file)} alt={file.name} />
                  </div>
              )}
              </div>
          )}
      />


        <P>Favourite Place</P>
        <div className="group-radio flex">
            
            <label>
            <input {...register('favourite')} type="radio" value="Yes" />
            Yes
            </label>
            <label>
            <input {...register('favourite')} type="radio" value="No" />
            No
            </label>
        </div>

        <input className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600" type="submit" value="Add place" />
        
    </FormContainer>

  );
}