import { Button, Input, Label, RadioGroup, Textarea } from "@medusajs/ui";
import { type QuezFieldProps } from "./QuezField";

export interface EditableQuezFieldProps extends QuezFieldProps {
  index: number;
  saved: boolean;
}

export default function EditableQuezField(props: EditableQuezFieldProps) {
  return (
    <div className="flex items-center justify-center gap-4">
      <div className="text-black">{props.index + 1}.</div>
      <div className="flex flex-col gap-4">
        <Input placeholder="Enter question" className="bg-gray-200 hover:bg-gray-300 text-black" type="text" />
        <Textarea placeholder="Enter description..." className="bg-gray-200 hover:bg-gray-300 text-black" />
        <RadioGroup className="accent-gray-200">
          {props.options.map((option, index) => (
              <div key={index} className="flex gap-2">
                <RadioGroup.Item value={option} id={option} />
                <Label htmlFor={option}>{option}</Label>
              </div>
          ))}
        </RadioGroup>
      </div>
      <Button className="max-h-8">Save</Button>
    </div>
  );
}
