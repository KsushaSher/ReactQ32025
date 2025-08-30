import { type AdditionalColumns } from '../../store/slices/uiSlice';
import s from './Modal.module.scss';

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
    <div className={s['wrapper-content']}>
      <div>Select additional columns:</div>
      <div>
        {additionalColumns.map((column) => (
          <div key={`additional-${column}`} className={s['additional-column']}>
            <input
              type="checkbox"
              id={`additional-${column}`}
              name={column}
              checked={selectedColumns.includes(column)}
              onChange={() => handleCheckboxChange(column)}
            />
            <label htmlFor={`additional-${column}`}>{column}</label>
          </div>
        ))}
      </div>
    </div>
  );
};
