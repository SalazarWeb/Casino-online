interface CrashHistoryProps {
  history: number[];
}

export const CrashHistory = ({ history }: CrashHistoryProps) => {
  return (
    <div className="bg-[#252543] p-4 rounded-lg">
      <h3 className="text-white text-lg mb-3">Historial</h3>
      <div className="flex gap-2 flex-wrap">
        {history.map((multiplier, index) => (
          <div
            key={index}
            className="bg-[#1a1a2e] text-white px-3 py-1 rounded"
          >
            {multiplier.toFixed(2)}x
          </div>
        ))}
      </div>
    </div>
  );
};
