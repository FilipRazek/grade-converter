export const Selector = ({ options }: { options: string[] }) => {
  return (
    <select>
      {options.map((option) => {
        return <option key={option}>{option}</option>;
      })}
    </select>
  );
};
