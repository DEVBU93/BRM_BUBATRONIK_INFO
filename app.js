// app.js — tabs, clock, ticker, programs, form handler (AJAX + mailto fallback)
(function(){
  // Tabs
  const tabs = document.querySelectorAll('.main-nav .tab');
  const panels = document.querySelectorAll('.panel');
  tabs.forEach(t => t.addEventListener('click', ()=>{
    tabs.forEach(x=>x.classList.remove('active'));
    t.classList.add('active');
    const id = t.dataset.tab;
    panels.forEach(p=>p.id===id? p.classList.add('active') : p.classList.remove('active'));
    document.getElementById('main').focus();
  }));

  // Clock
  function updateClock(){ const now=new Date(); const el=document.querySelector('.brand .tag'); if(el) el.textContent = 'Radio comunitaria · ' + now.toLocaleDateString(); }
  updateClock(); setInterval(updateClock,60000);

  // Ticker items (small)
  const tickerTrack = document.getElementById('tickerTrack'); if(tickerTrack){ ['Vermut Dominical 12:00','Escucha 128kbps MP3','Archivo de sesiones en Drive'].forEach(i=>{const s=document.createElement('span');s.textContent=i;tickerTrack.appendChild(s);}); }

  // Programs (sample data — replaceable)
  const programs = [
    {name:'Vermut Dominical', time:'Dom 12:00', desc:'Ritual de domingo: clásicos, funk y buena onda', tags:['Vermut','Domingo']},
    {name:'Noche Salvaje', time:'Vie 22:00', desc:'Sets largos de electrónica y techno', tags:['Techno','Sets']},
    {name:'Charlas La Manada', time:'Lun 19:00', desc:'Debates, entrevistas y comunidad', tags:['Debate','Local']},
    {name:'Sesión Archive', time:'Sáb 16:00', desc:'Re-emisión de sesiones históricas', tags:['Archivo','Replay']}
  ];
  const pg = document.getElementById('programsGrid');
  if(pg){ programs.forEach(p=>{
    const c=document.createElement('article'); c.className='program-card';
    c.innerHTML = '<h4>'+p.name+'</h4><div class="meta">'+p.time+'</div><p>'+p.desc+'</p>';
    pg.appendChild(c);
  }); }

  // Toast utility
  const toast = document.getElementById('toast');
  function showToast(msg, timeout=3500){ if(!toast) return; toast.textContent=msg; toast.hidden=false; toast.classList.add('visible'); setTimeout(()=>{ toast.hidden=true; toast.classList.remove('visible'); }, timeout); }

  // Form: AJAX submit to /api/contact with fallback to mailto
  const form = document.getElementById('colaboraForm');
  const mailtoBtn = document.getElementById('mailtoBtn');
  function makeMailto(data){ const subject = encodeURIComponent(data.subject || 'Propuesta BRM'); const body = encodeURIComponent('Nombre: '+(data.name||'')+'\nEmail: '+(data.email||'')+'\n\n'+(data.message||'')); return 'mailto:contacto@brm.world?subject='+subject+'&body='+body; }

  if(form){ form.addEventListener('submit', async (ev)=>{
    ev.preventDefault();
    const formData = new FormData(form);
    const payload = {};
    formData.forEach((v,k)=>payload[k]=v);
    try{
      const res = await fetch(form.action, { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(payload)});
      if(res.ok){ showToast('Propuesta enviada. Gracias — revisaremos y te contactaremos.'); form.reset(); }
      else { throw new Error('server'); }
    }catch(e){
      // fallback: mailto
      const href = makeMailto(payload);
      showToast('No se pudo enviar por AJAX. Abriendo cliente de correo...');
      setTimeout(()=>{ window.location.href = href; }, 700);
    }
  });
  }
  if(mailtoBtn){ mailtoBtn.addEventListener('click', ()=>{
    const fd = new FormData(form); const data = {}; fd.forEach((v,k)=>data[k]=v); window.location.href = makeMailto(data);
  }); }

  // Accessibility: focus first panel when switching handled above
})();
