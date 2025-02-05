interface CrashHistoryProps {
  history: number[];
}

export const CrashHistory = ({ history }: CrashHistoryProps) => {
  return (
    <div className="mt-4">
      <h3 className="text-lg font-medium mb-2">Últimos resultados</h3>
      <div className="flex flex-wrap gap-2">
        {history.map((multiplier, index) => (
          <div
            key={index}
            className={`px-3 py-1 rounded ${
              multiplier >= 2 ? 'bg-green-500' : 'bg-red-500'
            }`}
          >
            {multiplier.toFixed(2)}x
          </div>
        ))}
      </div>
    </div>
  );
};