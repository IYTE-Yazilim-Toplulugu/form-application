import React from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';

const CreateFormButton = () => {
  return (
    <Link
    href="./admin/create-form"
    className='absolute right-8 bottom-8 rounded-xl p-4 bg-blue-500'>
      <Icon icon="ph:plus-bold" color='white' width="20" height="20" />
    </Link>
  )
}

export default CreateFormButton