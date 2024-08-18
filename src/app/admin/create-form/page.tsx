import FormDetails from '@/app/components/FormCreator/FormDetails'
import Previewer from '@/app/components/FormCreator/Previewer'
import React from 'react'

const CreateForm = () => {
  return (
    <div className='w-screen h-screen grid grid-cols-2'>
        <FormDetails />
        <Previewer />
    </div>
  )
}

export default CreateForm