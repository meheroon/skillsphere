"use client";

export default function ScrollButtons() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed right-4 bottom-5 z-50 flex flex-col gap-3">
      <button
        onClick={scrollTop}
        className="w-11 h-11 rounded-full bg-orange-500 text-white shadow-lg hover:bg-orange-600"
        aria-label="Scroll to top"
      >
        ↑
      </button>
      <button
        onClick={scrollBottom}
        className="w-11 h-11 rounded-full bg-slate-900 text-white shadow-lg hover:bg-slate-800"
        aria-label="Scroll to bottom"
      >
        ↓
      </button>
    </div>
  );
}