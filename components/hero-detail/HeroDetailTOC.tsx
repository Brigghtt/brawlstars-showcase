'use client';

const items = [
  { id: 'status', label: '属性' },
  { id: 'gadgets', label: '随身妙具' },
  { id: 'starpowers', label: '星辉之力' },
  { id: 'hypercharge', label: '极限充能' },
  { id: 'gears', label: '随身秒具' },
  { id: 'pins', label: '表情' },
];

export default function HeroDetailTOC() {
  return (
    <nav className="sticky top-20 z-30 hidden xl:flex flex-col gap-2 w-40">
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className="px-4 py-2 rounded-lg bg-white/10 border border-white/10 text-sm font-bold text-white/90 hover:bg-[#FFD500] hover:text-black hover:border-[#FFD500] transition-all"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
