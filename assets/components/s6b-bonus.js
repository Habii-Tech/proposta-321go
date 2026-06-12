document.getElementById('slides-container').insertAdjacentHTML('beforeend', `
<!-- S6B — ESTRATÉGIA DE FASES -->
<section class="slide w-full min-h-screen relative overflow-hidden flex flex-col bg-white" id="s6b" data-i="8">

  <!-- glows decorativos de fundo -->
  <div class="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full pointer-events-none" style="background:radial-gradient(circle,rgba(29,185,84,.08) 0%,transparent 70%);"></div>
  <div class="absolute bottom-0 left-[5%] w-[320px] h-[320px] rounded-full pointer-events-none" style="background:radial-gradient(circle,rgba(29,185,84,.05) 0%,transparent 70%);"></div>

  <!-- header bar -->
  <div class="absolute top-0 left-0 right-0 h-[72px] flex items-center justify-between px-[34px] z-10 overflow-visible">
    <img src="assets/images/logotipo_branco.png" alt="Habii.tech" style="height:150px;width:auto;display:block;padding-left:0;">
    <span class="text-[11px] font-bold tracking-[.1em] uppercase text-[#8FA398]">Estratégia de Desenvolvimento</span>
  </div>

  <div class="flex-1 grid grid-cols-2 gap-0 pt-20">

    <!-- coluna esquerda — Fase 1 -->
    <div class="px-14 py-12 flex flex-col justify-center border-r border-[#DDE8E2]">
      <div class="inline-flex items-center gap-[6px] bg-[#1DB954] text-white text-[10px] font-black tracking-[.1em] uppercase px-3 py-[5px] rounded-full mb-5 w-fit">
        <span class="relative flex h-[8px] w-[8px]">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-40"></span>
          <span class="relative inline-flex h-[8px] w-[8px] rounded-full bg-white"></span>
        </span>
        Fase 1 · Prioridade
      </div>
      <div class="text-[11px] font-bold tracking-[.1em] uppercase text-[#158A3E] mb-[14px]">Por onde começar</div>
      <h2 class="text-[clamp(36px,4vw,54px)] font-black leading-none tracking-[-0.03em] text-[#0C1410] mb-5">App Motoboy<br><em class="text-[#6EBF8B] not-italic">primeiro.</em></h2>
      <p class="text-[16px] text-[#5C6E64] leading-[1.78] mb-8 max-w-[400px]">Priorizamos o marketplace de motoboys e lojistas — atende a demanda imediata, gera receita desde o primeiro dia e valida o modelo antes de escalar.</p>

      <!-- lista de motivos -->
      <div class="flex flex-col gap-3">
        <div class="flex items-center gap-[14px] px-[18px] py-[14px] bg-[#F0FDF4] border border-[#BBF7D0] rounded-[14px]">
          <div class="w-[38px] h-[38px] flex-shrink-0 bg-gradient-to-br from-[#4CAF50] to-[#1B5E20] rounded-[10px] flex items-center justify-center shadow-[0_4px_12px_rgba(27,94,32,.25)]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <div>
            <div class="text-[13px] font-bold text-[#1B5E20]">Demanda imediata validada</div>
            <div class="text-[11.5px] text-[#5C6E64] mt-[2px] leading-[1.4]">Problema real de lojistas e motoboys — mercado existente e ativo</div>
          </div>
        </div>
        <div class="flex items-center gap-[14px] px-[18px] py-[14px] bg-[#F0FDF4] border border-[#BBF7D0] rounded-[14px]">
          <div class="w-[38px] h-[38px] flex-shrink-0 bg-gradient-to-br from-[#4CAF50] to-[#1B5E20] rounded-[10px] flex items-center justify-center shadow-[0_4px_12px_rgba(27,94,32,.25)]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          </div>
          <div>
            <div class="text-[13px] font-bold text-[#1B5E20]">Time-to-market mais curto</div>
            <div class="text-[11.5px] text-[#5C6E64] mt-[2px] leading-[1.4]">Escopo focado permite lançamento mais rápido no mercado</div>
          </div>
        </div>
        <div class="flex items-center gap-[14px] px-[18px] py-[14px] bg-[#F0FDF4] border border-[#BBF7D0] rounded-[14px]">
          <div class="w-[38px] h-[38px] flex-shrink-0 bg-gradient-to-br from-[#4CAF50] to-[#1B5E20] rounded-[10px] flex items-center justify-center shadow-[0_4px_12px_rgba(27,94,32,.25)]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
          </div>
          <div>
            <div class="text-[13px] font-bold text-[#1B5E20]">Monetização clara desde o início</div>
            <div class="text-[11.5px] text-[#5C6E64] mt-[2px] leading-[1.4]">Mensalidade para lojistas e/ou taxa por anúncio de vaga</div>
          </div>
        </div>
      </div>
    </div>

    <!-- coluna direita — Fase 2 -->
    <div class="h-full flex flex-col px-10 py-10 bg-[#F4F8F5]">

      <!-- badge fase 2 -->
      <div class="flex items-center gap-3 mb-6">
        <div class="inline-flex items-center gap-[6px] bg-[#0C1410] text-white/60 text-[10px] font-black tracking-[.1em] uppercase px-3 py-[5px] rounded-full">
          Fase 2 · Expansão futura
        </div>
      </div>

      <div class="text-[11px] font-bold tracking-[.1em] uppercase text-[#8FA398] mb-3">Próximo projeto</div>
      <h3 class="text-[28px] font-black leading-[1.1] tracking-[-0.025em] text-[#0C1410] mb-4">App Guincho<br><span class="text-[#6EBF8B]">estilo Uber</span></h3>
      <p class="text-[14px] text-[#5C6E64] leading-[1.72] mb-6">Após o lançamento e validação do app motoboy, apresentamos orçamento separado para o app de guinchos — atendimento rápido e monitorado, similar ao Uber, para motoristas e solicitantes.</p>

      <!-- features guincho -->
      <div class="flex flex-col gap-[10px]">
        <div class="flex items-center gap-3 px-4 py-[11px] bg-white border border-[#DDE8E2] rounded-[12px]">
          <div class="w-8 h-8 bg-[#F4F8F5] border border-[#DDE8E2] rounded-[8px] flex items-center justify-center flex-shrink-0">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8FA398" stroke-width="1.8" stroke-linecap="round"><path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3m4 7h.01M17 20h.01M3 20h.01M7 20h.01M11 20h.01"/><rect x="9" y="11" width="14" height="10" rx="2"/></svg>
          </div>
          <span class="text-[13px] text-[#374840] font-medium">Solicitação de guincho em tempo real</span>
        </div>
        <div class="flex items-center gap-3 px-4 py-[11px] bg-white border border-[#DDE8E2] rounded-[12px]">
          <div class="w-8 h-8 bg-[#F4F8F5] border border-[#DDE8E2] rounded-[8px] flex items-center justify-center flex-shrink-0">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8FA398" stroke-width="1.8" stroke-linecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          </div>
          <span class="text-[13px] text-[#374840] font-medium">Rastreamento do guincho em rota</span>
        </div>
        <div class="flex items-center gap-3 px-4 py-[11px] bg-white border border-[#DDE8E2] rounded-[12px]">
          <div class="w-8 h-8 bg-[#F4F8F5] border border-[#DDE8E2] rounded-[8px] flex items-center justify-center flex-shrink-0">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8FA398" stroke-width="1.8" stroke-linecap="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
          </div>
          <span class="text-[13px] text-[#374840] font-medium">Orçamento e aprovação no app</span>
        </div>
        <div class="flex items-center gap-3 px-4 py-[11px] bg-white border border-[#DDE8E2] rounded-[12px]">
          <div class="w-8 h-8 bg-[#F4F8F5] border border-[#DDE8E2] rounded-[8px] flex items-center justify-center flex-shrink-0">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8FA398" stroke-width="1.8" stroke-linecap="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          </div>
          <span class="text-[13px] text-[#374840] font-medium">Avaliações de motoristas de guincho</span>
        </div>
      </div>

      <!-- badge orçamento separado -->
      <div class="mt-auto pt-6">
        <div class="flex items-center gap-[10px] bg-[#FFFBEB] border border-[#FDE047] rounded-[12px] px-4 py-[12px]">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D97706" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          <span class="text-[12px] text-[#92400E] font-semibold">Orçamento da Fase 2 apresentado separadamente após aprovação da Fase 1</span>
        </div>
      </div>

    </div>
  </div>
</section>
`);
