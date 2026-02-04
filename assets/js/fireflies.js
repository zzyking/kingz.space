(() => {
  const canvas = document.getElementById("fireflies-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const fireflies = [];
  const repulses = [];
  const config = {
    count: 20,
    maxSpeed: 0.35,
    drift: 0.03,
    repulseRadius: 300,
    repulseStrength: 1,
    fadeMs: 500,
  };

  const rand = (min, max) => min + Math.random() * (max - min);

  const resize = () => {
    const dpr = window.devicePixelRatio || 1;
    canvas.width = Math.floor(window.innerWidth * dpr);
    canvas.height = Math.floor(window.innerHeight * dpr);
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  const spawn = () => {
    return {
      x: rand(0, window.innerWidth),
      y: rand(0, window.innerHeight),
      vx: rand(-config.maxSpeed, config.maxSpeed),
      vy: rand(-config.maxSpeed, config.maxSpeed),
      r: rand(0.3, 0.6),
      glow: rand(0.6, 1),
      twinkle: rand(0.002, 0.01),
      phase: rand(0, Math.PI * 2),
    };
  };

  const init = () => {
    fireflies.length = 0;
    for (let i = 0; i < config.count; i++) fireflies.push(spawn());
  };

  const addRepulse = (x, y) => {
    repulses.push({ x, y, t: performance.now() });
  };

  const update = () => {
    const now = performance.now();
    for (let i = repulses.length - 1; i >= 0; i--) {
      if (now - repulses[i].t > config.fadeMs) repulses.splice(i, 1);
    }

    for (const f of fireflies) {
      f.vx += rand(-config.drift, config.drift);
      f.vy += rand(-config.drift, config.drift);

      for (const r of repulses) {
        const dx = f.x - r.x;
        const dy = f.y - r.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist > 0 && dist < config.repulseRadius) {
          const force = (1 - dist / config.repulseRadius) * config.repulseStrength;
          f.vx += (dx / dist) * force;
          f.vy += (dy / dist) * force;
        }
      }

      f.vx = Math.max(-config.maxSpeed, Math.min(config.maxSpeed, f.vx));
      f.vy = Math.max(-config.maxSpeed, Math.min(config.maxSpeed, f.vy));
      f.x += f.vx;
      f.y += f.vy;

      if (f.x < -20) f.x = window.innerWidth + 20;
      if (f.x > window.innerWidth + 20) f.x = -20;
      if (f.y < -20) f.y = window.innerHeight + 20;
      if (f.y > window.innerHeight + 20) f.y = -20;
    }
  };

  const draw = () => {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    ctx.globalCompositeOperation = "lighter";
    for (const f of fireflies) {
      f.phase += f.twinkle;
      const alpha = 0.45 + 0.45 * Math.sin(f.phase);
      const g = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, f.r * 6);
      g.addColorStop(0, `rgba(255, 244, 200, ${alpha * f.glow})`);
      g.addColorStop(1, "rgba(255, 244, 200, 0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(f.x, f.y, f.r * 6, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalCompositeOperation = "source-over";
  };

  const tick = () => {
    update();
    draw();
    requestAnimationFrame(tick);
  };

  window.addEventListener("resize", () => {
    resize();
  });

  window.addEventListener("click", (e) => {
    addRepulse(e.clientX, e.clientY);
  });

  resize();
  init();
  tick();
})();
