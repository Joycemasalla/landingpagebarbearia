export function Watermark() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none">
      <div className="absolute bottom-4 left-4 rounded bg-black/80 px-4 py-2 text-xs font-semibold text-white/80 backdrop-blur-md border border-white/10 shadow-xl pointer-events-auto hover:text-gold transition-colors">
        Desenvolvido por Joyce Masalla
      </div>
    </div>
  );
}
