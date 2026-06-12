document.getElementById('slides-container').insertAdjacentHTML('beforeend', `
<!-- S4 — ESCOPO -->
<section class="slide w-full min-h-screen relative overflow-hidden flex flex-col bg-white" id="s4" data-i="5">
  <div class="absolute top-0 left-0 right-0 h-[72px] flex items-center justify-between px-[34px] z-10 overflow-visible">
    <img src="assets/images/logotipo_branco.png" alt="Habii.tech" style="height:150px;width:auto;display:block;padding-left:0;">
    <span class="text-[11px] font-bold tracking-[.1em] uppercase text-[#8FA398]">Escopo · 321 GO!</span>
  </div>
  <div class="flex-1 flex flex-col pt-[88px] px-16 pb-6">
    <div class="mb-8 flex items-end justify-between gap-8">
      <div>
        <div class="text-[11px] font-bold tracking-[.1em] uppercase text-[#158A3E] mb-[14px]">O que vamos construir</div>
        <h2 class="text-[clamp(36px,4vw,54px)] font-black leading-none tracking-[-0.03em] text-[#0C1410] mb-0">Escopo<br><em class="text-[#6EBF8B] not-italic">do projeto.</em></h2>
      </div>
      <p class="text-[15px] text-[#5C6E64] max-w-[360px] leading-[1.65] pb-1 flex-shrink-0">App mobile (motoboy) + painel web (lojista) + backend completo com rastreamento em tempo real, QR Code e sistema de avaliações.</p>
    </div>
    <div class="flex-1 grid gap-4" style="grid-template-columns: repeat(3,1fr);">

      <!-- App Motoboy -->
      <div class="sc bg-[#F4F8F5] border border-[#DDE8E2] rounded-[20px] flex flex-col overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,.06)]">
        <div class="sc-head px-7 py-[26px] flex items-center gap-4 relative overflow-hidden" style="background:linear-gradient(135deg,#0D5C2E 0%,#158A3E 100%);">
          <div class="w-11 h-11 bg-white/15 border border-white/20 rounded-[11px] flex items-center justify-center flex-shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="2" width="10" height="20" rx="2"/><line x1="12" y1="18" x2="12" y2="18.5" stroke-width="2.5" stroke-linecap="round"/></svg>
          </div>
          <div class="flex-1">
            <div class="text-[16px] font-extrabold text-white leading-[1.2] tracking-[-0.015em]">App Mobile · Motoboy</div>
            <div class="text-[11px] font-semibold text-white/55 mt-[5px] tracking-[.06em] uppercase">iOS + Android</div>
          </div>
        </div>
        <div class="px-7 py-[22px] flex-1 bg-white">
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Cadastro e perfil do motoboy</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Visualizar e candidatar-se a vagas</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Notificação de aceite / recusa</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Check-in via leitura de QR Code</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Receber e visualizar pedidos de entrega</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Chat interno com lojista</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium leading-[1.35]">Histórico de turnos e avaliações recebidas</div>
        </div>
      </div>

      <!-- App Lojista -->
      <div class="sc bg-[#F4F8F5] border border-[#DDE8E2] rounded-[20px] flex flex-col overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,.06)]">
        <div class="sc-head px-7 py-[26px] flex items-center gap-4 relative overflow-hidden" style="background:linear-gradient(135deg,#0D5C2E 0%,#158A3E 100%);">
          <div class="w-11 h-11 bg-white/15 border border-white/20 rounded-[11px] flex items-center justify-center flex-shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><circle cx="12" cy="10" r="2"/><path d="M2 7h20"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
          </div>
          <div class="flex-1">
            <div class="text-[16px] font-extrabold text-white leading-[1.2] tracking-[-0.015em]">Painel Web · Lojista</div>
            <div class="text-[11px] font-semibold text-white/55 mt-[5px] tracking-[.06em] uppercase">Acesso via navegador</div>
          </div>
        </div>
        <div class="px-7 py-[22px] flex-1 bg-white">
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Cadastro e perfil verificado do lojista</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Publicar vagas com detalhes completos</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Gerenciar candidaturas (aceitar / recusar)</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Gerar QR Code de check-in de turno</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Rastrear motoboys em tempo real (mapa)</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Enviar pedidos com detalhes de entrega</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Chat interno com motoboys</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Avaliar motoboys ao encerrar turno</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium leading-[1.35]">Gerenciar equipe própria de motoboys</div>
        </div>
      </div>

      <!-- Backend & Admin -->
      <div class="sc bg-[#F4F8F5] border border-[#DDE8E2] rounded-[20px] flex flex-col overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,.06)]">
        <div class="sc-head px-7 py-[26px] flex items-center gap-4 relative overflow-hidden" style="background:linear-gradient(135deg,#0D5C2E 0%,#158A3E 100%);">
          <div class="w-11 h-11 bg-white/15 border border-white/20 rounded-[11px] flex items-center justify-center flex-shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8" stroke-linecap="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
          </div>
          <div class="flex-1">
            <div class="text-[16px] font-extrabold text-white leading-[1.2] tracking-[-0.015em]">Backend & Painel Admin</div>
            <div class="text-[11px] font-semibold text-white/55 mt-[5px] tracking-[.06em] uppercase">API + Painel Web</div>
          </div>
        </div>
        <div class="px-7 py-[22px] flex-1 bg-white">
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">API central (autenticação, cadastros, dados)</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Notificações push em tempo real</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Integração com API de mapas (GPS)</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Geração e validação de QR Code</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Sistema de avaliações mútuas</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium leading-[1.35]">Dashboard e relatórios (painel web)</div>
        </div>
      </div>

    </div>
  </div>
</section>
`);
