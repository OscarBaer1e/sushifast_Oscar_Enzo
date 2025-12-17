export default function AnimatedBackground() {
  const emojis = ["🍣", "🍤", "🥢", "🍙", "🍱", "🥟", "🥑"];

  return (
    <div className="sushi-bg">
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="sushi-emoji"
          style={{
            left: Math.random() * 100 + "vw",
            animationDuration: 10 + Math.random() * 10 + "s",
            animationDelay: Math.random() * 5 + "s",
            fontSize: 30 + Math.random() * 30 + "px",
          }}
        >
          {emojis[Math.floor(Math.random() * emojis.length)]}
        </div>
      ))}
    </div>
  );
}
