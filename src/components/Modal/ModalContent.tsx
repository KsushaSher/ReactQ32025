import { type AdditionalColumns } from '../../store/slices/uiSlice';

const additionalColumns: AdditionalColumns[] = [
  'methane',
  'oil_co2',
  'temperature_change_from_co2',
  'nitrous_oxide',
  'total_ghg',
];

interface ModalContentProps {
  selectedColumns: AdditionalColumns[];
  setSelectedColumns: React.Dispatch<React.SetStateAction<AdditionalColumns[]>>;
}

export const ModalContent = ({
  selectedColumns,
  setSelectedColumns,
}: ModalContentProps) => {
  const handleCheckboxChange = (column: AdditionalColumns) => {
    setSelectedColumns((prev) =>
      prev.includes(column)
        ? prev.filter((item) => item !== column)
        : [...prev, column]
    );
  };

  return (
    <div>
      <div>Select additional columns:</div>
      <div>
        {additionalColumns.map((column) => (
          <>
            <label key={column} htmlFor={column}>
              {column}
            </label>
            <input
              type="checkbox"
              id={column}
              name={column}
              checked={selectedColumns.includes(column)}
              onChange={() => handleCheckboxChange(column)}
            />
          </>
        ))}
      </div>
    </div>
  );
};
