'use client'

import { FormCreatorContext } from '@/context/CreateFormContext'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { useContext } from 'react'

const Editor = () => {
  const { setDescription } = useContext(FormCreatorContext);
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Form Açıklaması Giriniz... 🌎️</p>',
    onUpdate({ editor }) {
        setDescription(editor.getHTML());
    },
  });

  return <EditorContent 
  className='p-4'
  style={{
    backgroundColor: "white",
  }} editor={editor} />
}

export default Editor;
