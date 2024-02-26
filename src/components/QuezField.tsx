export interface QuezFieldProps {
  label: string;
  description: string;
  options: string[];
  imgSrc?: string;
}

export default function QuezField(props: QuezFieldProps) {
  return (
    <div>
      <label>{props.label}</label>
      <input type="text" />
      <p>{props.description}</p>
      {props.options.map((option, index) => (
        <div key={index}>
          <input type="radio" id={option} name={props.label} value={option} />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
    </div>
  );
}
