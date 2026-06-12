document.getElementById('slides-container').insertAdjacentHTML('beforeend', `
<!-- S1 — CAPA -->
<section class="slide w-full min-h-screen relative overflow-hidden flex flex-col bg-[#1F2B23]" id="s1" data-i="0">
  <div class="bg-grid"></div>
  <div class="absolute right-0 top-0 w-[60%] h-full pointer-events-none" style="background:radial-gradient(ellipse 60% 70% at 80% 40%, rgba(29,185,84,.07) 0%, transparent 70%)"></div>
  <div class="absolute right-0 bottom-0 w-[70%] h-[85%] pointer-events-none" style="background:radial-gradient(ellipse 80% 75% at 75% 85%, rgba(255,200,30,.18) 0%, rgba(255,180,0,.06) 50%, transparent 70%)"></div>
  <!-- bar -->
  <div class="absolute top-0 left-0 right-0 h-[72px] flex items-center justify-between px-[34px] z-10 overflow-visible">
    <a class="flex items-center no-underline" href="#">
      <img src="assets/images/logo.png" alt="Habii.tech" style="height:28px;width:auto;display:block;margin-left:30px">
    </a>
    <span class="text-[11px] font-bold tracking-[.1em] uppercase text-white/30">Proposta Comercial · 2026</span>
  </div>
  <!-- body -->
  <div class="relative z-[5] flex-1 grid grid-cols-2 gap-0 items-center pt-[88px] px-16 pb-8">
    <div>
      <div class="inline-flex items-center gap-[7px] bg-[rgba(29,185,84,.12)] border border-[rgba(29,185,84,.28)] text-[#1DB954] text-[11px] font-bold px-[14px] py-[6px] rounded-full tracking-[.08em] uppercase mb-7">
        <span class="w-[5px] h-[5px] bg-[#1DB954] rounded-full block"></span>Proposta Comercial · 2026
      </div>
      <h1 class="text-[clamp(52px,6vw,82px)] font-black leading-[.95] tracking-[-0.04em] text-white mb-6">Plataforma<br><em class="text-[#1DB954] not-italic">321 GO!</em><br><span class="text-white/20">Motoboys & Lojistas</span></h1>
      <p class="text-[17px] text-white/45 leading-[1.72] max-w-[460px] mb-[52px]">Desenvolvimento de <strong class="text-white/75 font-semibold">aplicativo mobile para motoboys e lojistas</strong> — marketplace de vagas com rastreamento em tempo real, QR Code e avaliações mútuas.</p>
      <div class="flex items-center gap-4">
        <div class="flex items-center gap-[10px] px-4 py-[10px] bg-white/[0.06] border border-white/[0.10] rounded-[12px]">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1DB954" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
          <span class="text-[12px] text-white/50 font-semibold">Fase 1 · App Motoboy</span>
        </div>
        <div class="flex items-center gap-[10px] px-4 py-[10px] bg-white/[0.04] border border-white/[0.07] rounded-[12px]">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.3)" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
          <span class="text-[12px] text-white/25 font-semibold">Fase 2 · App Guincho</span>
        </div>
      </div>
    </div>
    <!-- Phone mockup — imagem real -->
    <div style="display:flex; justify-content:center; align-items:center; position:relative; z-index:5;">
      <img src="assets/images/mockup_321.png" alt="321 GO! App" style="max-height:540px; width:auto; object-fit:contain; filter:drop-shadow(0 40px 80px rgba(0,0,0,.55));">
    </div>
  </div>
</section>
`);
