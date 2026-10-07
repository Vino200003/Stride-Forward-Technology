type Member = { name: string; role: string; bio: string; image: string }

/** Team member card with photo, name, role, and short bio. */
export default function TeamCard({ member }: { member: Member }) {
  return (
    <article className="card group h-full overflow-hidden transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow">
      <div className="aspect-square overflow-hidden bg-surface-muted">
        <img
          src={member.image}
          alt={`Photo of ${member.name}, ${member.role}`}
          loading="lazy"
          decoding="async"
          width={400}
          height={400}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-fg">{member.name}</h3>
        <p className="mt-0.5 text-sm font-medium text-accent-strong">{member.role}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted">{member.bio}</p>
      </div>
    </article>
  )
}
