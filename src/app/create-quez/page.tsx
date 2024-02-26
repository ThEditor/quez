"use client"
import { Heading, IconButton } from "@medusajs/ui";
import { PlusMini } from "@medusajs/icons";
import Quez from "~/components/Quez";
import EditableQuezField, { type EditableQuezFieldProps } from "~/components/EditableQuezField";
import { useState } from "react";

export default function CreateQuez() {  
  const [editableQuezFields, setEditableQuezFields] = useState<EditableQuezFieldProps[]>([]);

  const addField = () => {
    setEditableQuezFields([...editableQuezFields, {
      index: editableQuezFields.length,
      label: "Which one of the following is correct?",
      description: "Only one correct",
      options: ["help", "dont help", "kill", "leave"],
      saved: false
    }]);
  }

  return (
    <div className="flex min-h-screen flex-col justify-center items-center">
      <Heading>Create Quez</Heading>
      <div className="flex flex-col items-end gap-4 border border-gray-200 p-8 m-5 rounded-md">
        <Quez title="unknown" fields={[]} />
        {editableQuezFields.map((field, index) => (
          <EditableQuezField key={index} {...field} />
        ))}
        <IconButton onClick={addField}><PlusMini /></IconButton>
      </div>
    </div>
  );
}
