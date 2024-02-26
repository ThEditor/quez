import { Heading } from "@medusajs/ui";
import QuezField, { type QuezFieldProps } from "./QuezField";

export interface QuezProps {
  title: string;
  fields: QuezFieldProps[];
}

export default function Quez({ title, fields }: QuezProps) {
  return (
    <div>
      <form>
        <Heading>{title}</Heading>
        {fields.map((field, index) => (
          <QuezField key={index} {...field} />
        ))}
      </form>
    </div>
  );
}