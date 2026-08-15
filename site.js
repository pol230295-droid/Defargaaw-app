// DefarGaaw — site embarqué dans l'application (généré automatiquement)
// Ne pas modifier à la main : remplacer ce fichier pour mettre le site à jour.
export default `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>DefarGaaw — Dépannage à domicile par des artisans vérifiés · Dakar</title>
<meta name="description" content="Une panne de frigo, d'électricité, de plomberie ? DefarGaaw (« répare vite » en wolof) envoie un artisan vérifié chez vous à Dakar. Diagnostic 3 000 FCFA, devis validé avant réparation, garantie 15 jours.">
<meta property="og:title" content="DefarGaaw — Dépannage à domicile par des artisans vérifiés · Dakar">
<meta property="og:description" content="« Répare vite » : diagnostic 3 000 FCFA · Devis validé avant réparation · Garantie 15 jours · Wave & Orange Money">
<meta property="og:type" content="website">
<meta name="theme-color" content="#0B0F0E">
<meta property="og:locale" content="fr_SN">
<link rel="canonical" href="https://defargaaw.com/">
<meta property="og:url" content="https://defargaaw.com/">
<meta name="referrer" content="strict-origin-when-cross-origin">
<link rel="manifest" href="manifest.webmanifest">
<link rel="apple-touch-icon" href="apple-touch-icon.png">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="DefarGaaw">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%230B0F0E'/%3E%3Cpath d='M20.6 9.4a4.6 4.6 0 0 0-6.2 6.2L7 23v2.5h2.5l7.4-7.4a4.6 4.6 0 0 0 6.2-6.2l-3.1 3.1-2.3-2.3 3.1-3.1Z' fill='%23E0A93B'/%3E%3C/svg%3E">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;700;800;900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css">
<script defer src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js"></script>
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"HomeAndConstructionBusiness","name":"DefarGaaw","url":"https://defargaaw.com",
"description":"Dépannage à domicile par des artisans vérifiés à Dakar : froid, électricité, plomberie, mécanique, électroménager. Diagnostic à prix fixe 3 000 FCFA, devis validé avant réparation, garantie 15 jours.",
"telephone":"+221780190581","email":"defargaaw@gmail.com",
"areaServed":{"@type":"City","name":"Dakar"},"priceRange":"À partir de 3 000 FCFA",
"paymentAccepted":"Wave, Orange Money","openingHours":"Mo-Su 08:00-20:00"}
</script>
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[
{"@type":"Question","name":"Pourquoi payer 3 000 FCFA avant l'arrivée de l'artisan ?","acceptedAnswer":{"@type":"Answer","text":"Ce montant fixe couvre le déplacement et le diagnostic. C'est le seul paiement avant l'intervention ; la réparation n'est payée qu'après votre accord sur le devis."}},
{"@type":"Question","name":"Comment fonctionne la garantie de 15 jours ?","acceptedAnswer":{"@type":"Answer","text":"Si la même panne se reproduit dans les 15 jours, l'artisan revient sous 72 h sans frais de déplacement ni de main-d'œuvre (une reprise gratuite par intervention), hors exclusions détaillées dans nos conditions."}},
{"@type":"Question","name":"Quels moyens de paiement acceptez-vous ?","acceptedAnswer":{"@type":"Answer","text":"Wave et Orange Money. Le lien de paiement du diagnostic est envoyé par WhatsApp après confirmation de votre demande."}}]}
</script>
<style>
:root{
  --bg:#0B0F0E; --panel:#121716; --ink:#0C0C0C;
  --txt:#D7E2EA; --dim:rgba(215,226,234,.68);
  --gold:#E0A93B; --clay:#D96A43; --leaf:#1B5E4F;
  --line:rgba(215,226,234,.14); --wa:#25D366;
  --max:1240px;
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
[id]{scroll-margin-top:80px}
@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}*,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}}
html,body{background:var(--bg)}
body{font-family:'Kanit',sans-serif;color:var(--txt);line-height:1.55;-webkit-font-smoothing:antialiased;overflow-x:clip}
.wrap{max-width:var(--max);margin:0 auto;padding:0 20px}
@media(min-width:640px){.wrap{padding:0 32px}}
a{color:inherit}
button{font-family:inherit}
::selection{background:var(--gold);color:var(--ink)}
:focus-visible{outline:2px solid var(--gold);outline-offset:3px;border-radius:4px}

/* typo géante en dégradé métallique */
.mega{font-weight:900;text-transform:uppercase;letter-spacing:-.02em;line-height:.95;
  background:linear-gradient(180deg,#5E6B64 0%,#E9E4D6 100%);
  -webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;color:transparent}
.mega-dark{font-weight:900;text-transform:uppercase;letter-spacing:-.02em;line-height:.95;color:var(--ink)}

/* apparitions */
.fx{opacity:0;transform:translate(var(--fx-x,0),var(--fx-y,30px));transition:opacity .8s cubic-bezier(.25,.1,.25,1),transform .8s cubic-bezier(.25,.1,.25,1);transition-delay:var(--fx-d,0s)}
.fx.in{opacity:1;transform:none}

/* ---------- boutons ---------- */
.btn{display:inline-flex;align-items:center;justify-content:center;gap:9px;border:none;cursor:pointer;border-radius:999px;font-weight:500;text-transform:uppercase;letter-spacing:.14em;transition:transform .18s,opacity .2s,background .2s;text-decoration:none}
.btn:active{transform:translateY(1px)}
.btn-contact{color:#fff;padding:13px 34px;font-size:13px;
  background:linear-gradient(123deg,#1F0A02 7%,#D96A43 37%,#8E3A1B 72%,#E0A93B 100%);
  box-shadow:0 4px 4px rgba(217,106,67,.25),4px 4px 12px #B84A22 inset;
  outline:2px solid #fff;outline-offset:-3px}
.btn-contact:hover{opacity:.92}
@media(min-width:768px){.btn-contact{padding:15px 44px;font-size:15px}}
.btn-ghost{border:2px solid var(--txt);color:var(--txt);padding:12px 30px;font-size:13.5px;background:transparent}
.btn-ghost:hover{background:rgba(215,226,234,.1)}
.btn-wa{background:var(--wa);color:#06341d;padding:15px 26px;font-size:14px;font-weight:700;letter-spacing:.06em}
.btn-wa:hover{background:#3ae07a}

/* ---------- HERO ---------- */
.hero{height:100svh;display:flex;flex-direction:column;position:relative;overflow-x:clip}
.hero nav{display:flex;justify-content:space-between;align-items:center;padding:26px 24px 0}
@media(min-width:768px){.hero nav{padding:32px 40px 0}}
.hero nav a{text-decoration:none;color:var(--txt);font-weight:500;text-transform:uppercase;letter-spacing:.12em;font-size:12.5px;transition:opacity .2s}
@media(min-width:768px){.hero nav a{font-size:16px}}
@media(min-width:1024px){.hero nav a{font-size:1.15rem}}
.hero nav a:hover{opacity:.7}
.hero-title{overflow:hidden;width:100%}
.hero-title h1{font-size:15.5vw;white-space:nowrap;width:100%;text-align:center;margin-top:14px}
@media(min-width:768px){.hero-title h1{margin-top:-6px}}
.hero-bottom{margin-top:auto;display:flex;justify-content:space-between;align-items:flex-end;padding:0 24px 30px;gap:16px}
@media(min-width:768px){.hero-bottom{padding:0 40px 40px}}
.hero-tag{color:var(--txt);font-weight:300;text-transform:uppercase;letter-spacing:.08em;line-height:1.35;font-size:clamp(.72rem,1.4vw,1.35rem);max-width:170px}
@media(min-width:640px){.hero-tag{max-width:240px}}
@media(min-width:768px){.hero-tag{max-width:280px}}
.hero-tag b{font-weight:500;color:var(--gold)}

/* emblème 3D magnétique */
.emblem-zone{position:absolute;left:50%;transform:translateX(-50%);z-index:10;top:50%;translate:0 -50%;pointer-events:none}
@media(min-width:640px){.emblem-zone{top:auto;translate:0 0;bottom:6svh}}
.emblem{position:relative;width:270px;height:270px;will-change:transform;pointer-events:auto}
@media(hover:none){.emblem{pointer-events:none}}
@media(min-width:640px){.emblem{width:340px;height:340px}}
@media(min-width:1024px){.emblem{width:420px;height:420px}}
.orb3d{position:absolute;inset:0;border-radius:50%;
  background:radial-gradient(circle at 32% 26%,#F7D98B 0%,#E0A93B 34%,#8A5F14 72%,#3A2A08 100%);
  box-shadow:0 60px 120px -30px rgba(224,169,59,.45),inset -18px -24px 60px rgba(0,0,0,.45),inset 14px 18px 40px rgba(255,244,214,.35);
  animation:floaty 7s ease-in-out infinite}
.ring3d{position:absolute;inset:-9%;border-radius:50%;border:2px solid rgba(215,226,234,.28);transform:rotateX(68deg);animation:spin 14s linear infinite}
.ring3d.b{inset:-16%;border-color:rgba(217,106,67,.35);animation-duration:22s;animation-direction:reverse}
@keyframes spin{to{transform:rotateX(68deg) rotate(360deg)}}
@keyframes floaty{0%,100%{translate:0 0}50%{translate:0 -16px}}
.emblem svg{position:absolute;inset:0;margin:auto;width:46%;height:46%;color:#0B0F0E;
  filter:drop-shadow(0 10px 18px rgba(0,0,0,.45)) drop-shadow(0 2px 0 rgba(255,244,214,.5))}
.hero-fade{position:absolute;inset:auto 0 0 0;height:26svh;background:linear-gradient(transparent,var(--bg));pointer-events:none;z-index:11}

/* ---------- MARQUEE (piloté par le scroll) ---------- */
.mq-sec{padding:96px 0 40px;overflow:hidden}
@media(min-width:768px){.mq-sec{padding:150px 0 44px}}
.mq-row{display:flex;gap:12px;width:max-content;will-change:transform;margin-bottom:12px}
.tile{width:300px;height:190px;border-radius:18px;flex-shrink:0;display:flex;flex-direction:column;justify-content:space-between;padding:20px;
  background:radial-gradient(120% 140% at 20% 0%,#1B2422 0%,#101514 60%);border:1px solid var(--line)}
@media(min-width:768px){.tile{width:420px;height:250px;padding:26px}}
.tile .em{font-size:40px}
@media(min-width:768px){.tile .em{font-size:54px}}
.tile .lb{font-weight:700;text-transform:uppercase;letter-spacing:.08em;font-size:15px}
@media(min-width:768px){.tile .lb{font-size:20px}}
.tile .sb{font-weight:300;font-size:12.5px;color:var(--dim)}
.tile.gold{background:radial-gradient(120% 140% at 20% 0%,#3A2C0E 0%,#161208 60%);border-color:rgba(224,169,59,.35)}
.tile.gold .lb{color:var(--gold)}

/* ---------- À PROPOS ---------- */
.about{min-height:100svh;position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:42px;padding:100px 20px;text-align:center}
@media(min-width:768px){.about{gap:60px}}
.about h2{font-size:clamp(3rem,12vw,160px)}
.about .anim-p{font-weight:500;line-height:1.7;max-width:600px;font-size:clamp(1rem,2vw,1.3rem);color:var(--txt)}
.anim-p .ch{opacity:.2}
.blob{position:absolute;pointer-events:none}
.blob .sph{border-radius:50%;width:100%;height:100%}
.blob-a{width:120px;height:120px;top:5%;left:2%}
.blob-a .sph{background:radial-gradient(circle at 32% 28%,#F7D98B,#E0A93B 40%,#6E4C10 90%);box-shadow:inset -10px -12px 24px rgba(0,0,0,.4)}
.blob-b{width:100px;height:100px;bottom:9%;left:6%}
.blob-b .sph{background:radial-gradient(circle at 32% 28%,#F0A47E,#D96A43 45%,#6E2E14 92%);box-shadow:inset -10px -12px 24px rgba(0,0,0,.4)}
.blob-c{width:130px;height:130px;top:5%;right:2%;border:14px solid transparent;border-radius:50%;
  background:linear-gradient(var(--bg),var(--bg)) padding-box,conic-gradient(#E0A93B,#5E6B64,#D96A43,#E0A93B) border-box;transform:rotate(-18deg)}
.blob-d{width:110px;height:110px;bottom:9%;right:5%}
.blob-d .sph{border-radius:26px;background:linear-gradient(145deg,#2A3A35,#101514 65%);border:1px solid rgba(215,226,234,.25);box-shadow:inset 8px 10px 22px rgba(215,226,234,.12),0 30px 50px -20px rgba(0,0,0,.6);transform:rotate(14deg)}
@media(min-width:768px){.blob-a,.blob-c{width:200px;height:200px}.blob-b{width:160px;height:160px}.blob-d{width:180px;height:180px}.blob-a{left:4%}.blob-b{left:10%}.blob-c{right:4%}.blob-d{right:9%}}
@media(max-width:560px){.blob{opacity:.5}}

/* ---------- SERVICES (section blanche) ---------- */
.services{background:#fff;border-radius:40px 40px 0 0;padding:84px 20px 120px;position:relative}
@media(min-width:640px){.services{border-radius:50px 50px 0 0}}
@media(min-width:768px){.services{border-radius:60px 60px 0 0;padding:120px 40px 160px}}
.services h2{text-align:center;font-size:clamp(3rem,12vw,160px);margin-bottom:18px}
.services .intro{text-align:center;color:rgba(12,12,12,.6);max-width:640px;margin:0 auto 70px;font-weight:400;font-size:clamp(.95rem,1.8vw,1.2rem)}
@media(min-width:768px){.services .intro{margin-bottom:110px}}
.svc{max-width:1000px;margin:0 auto;color:var(--ink)}
.svc-item{display:flex;gap:22px;align-items:flex-start;padding:34px 0;border-bottom:1px solid rgba(12,12,12,.15)}
@media(min-width:768px){.svc-item{gap:44px;padding:48px 0}}
.svc-item:first-child{border-top:1px solid rgba(12,12,12,.15)}
.svc-no{font-weight:900;font-size:clamp(2.6rem,9vw,120px);line-height:.9;flex-shrink:0}
.svc-nm{font-weight:500;text-transform:uppercase;font-size:clamp(1rem,2.2vw,2rem);margin-bottom:8px}
.svc-ds{font-weight:300;line-height:1.65;max-width:640px;font-size:clamp(.85rem,1.6vw,1.2rem);opacity:.6}

/* ---------- PARCOURS (cartes empilées) ---------- */
.stackwrap{background:var(--bg);border-radius:40px 40px 0 0;margin-top:-44px;position:relative;z-index:10;padding:84px 0 60px}
@media(min-width:640px){.stackwrap{border-radius:50px 50px 0 0}}
@media(min-width:768px){.stackwrap{border-radius:60px 60px 0 0;margin-top:-56px;padding:120px 0 80px}}
.stackwrap h2{text-align:center;font-size:clamp(3rem,12vw,160px);margin-bottom:14px}
.stackwrap .intro{text-align:center;color:var(--dim);max-width:600px;margin:0 auto;font-weight:300;font-size:clamp(.95rem,1.8vw,1.2rem);padding:0 20px}
#stack{position:relative;margin-top:40px}
.card-slot{display:flex;justify-content:center}
.pcard{width:min(1120px,calc(100vw - 32px));height:auto;align-self:flex-start;
  border-radius:34px;border:2px solid var(--txt);background:var(--bg);padding:22px;will-change:transform;transform-origin:top center}
/* mobile : liste simple, aucun chevauchement */
@media(max-width:767px){.card-slot{height:auto;margin-bottom:18px}.pcard{position:relative;top:0!important;transform:none!important}}
/* ordinateur : effet d'empilement sticky */
@media(min-width:768px){.card-slot{height:88vh}.pcard{position:sticky}}
@media(min-width:640px){.pcard{border-radius:46px;padding:28px}}
@media(min-width:768px){.pcard{border-radius:60px;padding:34px}}
.pc-top{display:flex;flex-wrap:wrap;align-items:center;gap:14px 26px;margin-bottom:22px}
.pc-no{font-weight:900;font-size:clamp(2.6rem,8vw,110px);line-height:.9}
.pc-cat{font-weight:300;text-transform:uppercase;letter-spacing:.16em;font-size:12px;color:var(--dim)}
.pc-nm{font-weight:700;text-transform:uppercase;font-size:clamp(1.15rem,2.6vw,2.2rem);line-height:1.05}
.pc-btn{margin-left:auto}
.pc-grid{display:grid;grid-template-columns:1fr;gap:14px}
@media(min-width:768px){.pc-grid{grid-template-columns:2fr 3fr}}
.pc-col{display:grid;gap:14px}
.pc-pane{border-radius:26px;background:radial-gradient(130% 150% at 18% 0%,#1B2422 0%,#0F1413 62%);border:1px solid var(--line);padding:22px;display:flex;flex-direction:column;justify-content:center;min-height:120px}
@media(min-width:768px){.pc-pane{border-radius:40px;padding:28px;min-height:150px}}
.pc-pane .k{font-weight:300;text-transform:uppercase;letter-spacing:.14em;font-size:11.5px;color:var(--dim);margin-bottom:8px}
.pc-pane .v{font-weight:800;font-size:clamp(1.4rem,3.4vw,2.6rem);line-height:1}
.pc-pane .v small{font-weight:400;font-size:.45em;color:var(--dim)}
.pc-pane p{font-weight:300;color:var(--dim);font-size:clamp(.85rem,1.5vw,1.05rem);line-height:1.6}
.pc-pane ul{list-style:none;display:grid;gap:9px}
.pc-pane li{font-weight:300;font-size:clamp(.85rem,1.5vw,1.05rem);color:var(--dim);display:flex;gap:10px}
.pc-pane li::before{content:"✓";color:var(--gold);font-weight:700}
.pc-pane.gold{background:radial-gradient(130% 150% at 18% 0%,#3A2C0E 0%,#141008 62%);border-color:rgba(224,169,59,.4)}
.pc-pane.gold .v{color:var(--gold)}

/* ---------- FORMULAIRES ---------- */
.funnel{padding:100px 0;border-top:1px solid var(--line)}
.sec-h{font-size:clamp(2.6rem,9vw,120px);margin-bottom:14px}
.sec-p{color:var(--dim);font-weight:300;max-width:620px;font-size:clamp(.95rem,1.8vw,1.2rem)}
.funnel-grid{display:grid;grid-template-columns:1fr;gap:44px;margin-top:52px;align-items:start}
@media(min-width:960px){.funnel-grid{grid-template-columns:.9fr 1.1fr;gap:56px}}
.form-card{border:1px solid var(--line);border-radius:34px;background:var(--panel);padding:26px}
@media(min-width:640px){.form-card{padding:32px;border-radius:40px}}
.flabel{display:block;font-size:13px;font-weight:500;text-transform:uppercase;letter-spacing:.1em;margin:20px 0 8px}
.flabel:first-of-type{margin-top:0}
.field{width:100%;font-family:inherit;font-size:16px;color:var(--txt);border:1.5px solid var(--line);border-radius:14px;padding:13px 14px;background:rgba(215,226,234,.05);outline:none;transition:border .2s}
.field:focus{border-color:var(--gold)}
.field.err{border-color:var(--clay)}
select.field option{color:#0C0C0C}
.field::placeholder{color:rgba(215,226,234,.45)}
textarea.field{resize:vertical;min-height:96px}
.metier-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:9px}
@media(max-width:420px){.metier-grid{grid-template-columns:repeat(2,1fr)}}
.mpick{border:1.5px solid var(--line);background:rgba(215,226,234,.04);border-radius:14px;padding:12px 6px;text-align:center;cursor:pointer;transition:.18s;color:var(--dim);font-weight:500;font-size:12px;text-transform:uppercase;letter-spacing:.04em;display:flex;flex-direction:column;gap:5px;align-items:center}
.mpick .em{font-size:19px}
.mpick:hover{border-color:rgba(224,169,59,.5)}
.mpick.sel{border-color:var(--gold);background:rgba(224,169,59,.12);color:var(--txt)}
.form-note{font-size:12.5px;font-weight:300;color:var(--dim);margin-top:14px;line-height:1.55}
.success{border:1.5px solid rgba(37,211,102,.5);background:rgba(37,211,102,.08);border-radius:18px;padding:18px;margin-top:16px;font-size:14px;font-weight:300;display:none}
.success.on{display:block}
.success b{font-weight:600}
.how-side h3{font-weight:700;text-transform:uppercase;font-size:clamp(1.1rem,2vw,1.6rem);margin-bottom:16px}
.how-side ol{list-style:none;display:grid;gap:16px;counter-reset:h}
.how-side li{display:flex;gap:14px;font-weight:300;font-size:14.5px;color:var(--dim)}
.how-side li::before{counter-increment:h;content:counter(h);font-weight:800;color:var(--ink);background:var(--txt);width:28px;height:28px;border-radius:50%;display:grid;place-items:center;flex-shrink:0;font-size:13px}
.how-side b{color:var(--txt);font-weight:500}
.zones-static{display:flex;flex-wrap:wrap;gap:8px;margin-top:18px}
.zchip{font-size:12px;font-weight:500;border:1px solid var(--line);color:var(--dim);padding:7px 13px;border-radius:999px;text-transform:uppercase;letter-spacing:.03em}
.zchip.on{border-color:rgba(224,169,59,.6);color:var(--txt);background:rgba(224,169,59,.08)}

/* ---------- carte ---------- */
.map-card{border:1px solid var(--line);border-radius:34px;overflow:hidden;margin-top:52px;background:#10201C}
@media(min-width:768px){.map-card{border-radius:48px}}
#map{height:460px;width:100%;background:#10201C}
.map-legend{display:flex;gap:22px;flex-wrap:wrap;padding:15px 22px;border-top:1px solid var(--line);font-size:12.5px;font-weight:400;color:var(--dim);text-transform:uppercase;letter-spacing:.05em}
.dotl{display:inline-block;width:12px;height:12px;border-radius:50%;margin-right:8px;vertical-align:-1px}
.leaflet-container{font-family:'Kanit',sans-serif}
.leaflet-popup-content{font-size:13.5px;line-height:1.5}
.map-fallback{padding:40px 22px;text-align:center;font-size:14px;font-weight:300;color:var(--dim)}

/* ---------- FAQ / engagements ---------- */
.pillars{display:grid;grid-template-columns:1fr;gap:22px;margin-top:52px}
@media(min-width:880px){.pillars{grid-template-columns:repeat(3,1fr)}}
.pillar{border-top:2px solid var(--gold);padding-top:22px}
.pillar h3{font-weight:700;text-transform:uppercase;font-size:clamp(1rem,1.8vw,1.35rem);margin-bottom:9px}
.pillar p{font-weight:300;font-size:14.5px;color:var(--dim)}
.faq{max-width:780px;margin:52px auto 0}
.faq details{border:1px solid var(--line);border-radius:18px;background:var(--panel);margin-bottom:12px;overflow:hidden}
.faq summary{cursor:pointer;padding:19px 22px;font-weight:500;font-size:15px;list-style:none;display:flex;justify-content:space-between;align-items:center;gap:14px}
.faq summary::-webkit-details-marker{display:none}
.faq summary::after{content:"+";font-weight:300;font-size:24px;color:var(--gold);transition:transform .3s}
.faq details[open] summary::after{transform:rotate(45deg)}
.faq .a{padding:0 22px 20px;font-weight:300;font-size:14.5px;color:var(--dim);line-height:1.65}

/* ---------- institutions ---------- */
.inst-points{display:grid;grid-template-columns:1fr;gap:16px;margin-top:44px}
@media(min-width:760px){.inst-points{grid-template-columns:repeat(2,1fr)}}
.inst-point{border:1px solid var(--line);border-radius:22px;padding:24px;background:var(--panel)}
.inst-point h3{font-weight:700;text-transform:uppercase;font-size:15.5px;color:var(--gold);margin-bottom:8px;letter-spacing:.04em}
.inst-point p{font-weight:300;font-size:14px;color:var(--dim)}

/* ---------- footer ---------- */
footer{border-top:1px solid var(--line);padding:60px 0 40px}
.foot-grid{display:grid;grid-template-columns:1fr;gap:36px;margin-bottom:36px}
@media(min-width:760px){.foot-grid{grid-template-columns:1.2fr 1fr 1fr}}
.foot-brand{font-weight:900;text-transform:uppercase;font-size:clamp(1.8rem,4vw,2.6rem)}
.foot-note{font-size:13px;font-weight:300;color:var(--dim);max-width:340px;margin-top:12px}
.foot-grid h4{font-size:12.5px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--dim);margin-bottom:14px}
.foot-grid a{display:block;text-decoration:none;color:var(--dim);font-weight:300;font-size:14px;margin-bottom:9px}
.foot-grid a:hover{color:var(--gold)}
.paychips{display:flex;gap:9px;margin-top:16px}
.paychip{font-size:11.5px;font-weight:600;border:1px solid var(--line);color:var(--dim);padding:7px 13px;border-radius:9px;text-transform:uppercase;letter-spacing:.06em}
.legal{border-top:1px solid var(--line);padding-top:26px}
.legal details{margin-bottom:10px}
.legal summary{cursor:pointer;font-size:13px;font-weight:500;color:var(--dim);text-transform:uppercase;letter-spacing:.06em}
.legal summary:hover{color:var(--txt)}
.legal .a{font-size:13px;font-weight:300;color:var(--dim);padding:10px 0 6px;max-width:780px;line-height:1.6}
.copy{margin-top:22px;font-size:12.5px;font-weight:300;color:var(--dim)}

/* ---------- installer + barre mobile ---------- */
.install-chip{position:fixed;right:16px;bottom:86px;z-index:95;display:none;align-items:center;gap:9px;background:var(--gold);color:var(--ink);border:none;border-radius:999px;padding:12px 18px;font-weight:700;font-size:13px;letter-spacing:.04em;cursor:pointer;box-shadow:0 14px 34px -10px rgba(224,169,59,.6)}
.install-chip.on{display:inline-flex}
@media(min-width:761px){.install-chip{bottom:22px}}
.mobilebar{position:fixed;bottom:0;left:0;right:0;z-index:90;background:rgba(11,15,14,.95);backdrop-filter:blur(10px);border-top:1px solid var(--line);padding:10px 14px calc(10px + env(safe-area-inset-bottom));display:none;gap:10px}
.mobilebar .btn{flex:1;padding:13px;font-size:13px}
@media(max-width:760px){.mobilebar{display:flex}footer{padding-bottom:100px}}
</style>
</head>
<body>

<main style="overflow-x:clip">

<!-- ============ HERO ============ -->
<header class="hero" id="top">
  <nav class="fx" style="--fx-y:-20px">
    <a href="#services">Services</a>
    <a href="#parcours">Parcours</a>
    <a href="#demande">Demander</a>
    <a href="#artisans">Artisans</a>
  </nav>
  <div class="hero-title fx" style="--fx-d:.15s;--fx-y:40px">
    <h1 class="mega">DefarGaaw</h1>
  </div>

  <div class="emblem-zone fx" style="--fx-d:.6s">
    <div class="emblem" id="magnet">
      <span class="ring3d b"></span>
      <span class="orb3d"></span>
      <span class="ring3d"></span>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.7 2.7-2-2 2.7-2.7Z"/></svg>
    </div>
  </div>

  <div class="hero-bottom">
    <p class="hero-tag fx" style="--fx-d:.35s;--fx-y:20px"><b>« répare vite »</b> en wolof — artisans vérifiés, prix fixes, travail garanti à Dakar</p>
    <span class="fx" style="--fx-d:.5s;--fx-y:20px"><a class="btn btn-contact" id="heroContact" href="#">Nous contacter</a></span>
  </div>
  <div class="hero-fade"></div>
</header>

<!-- ============ MARQUEE ============ -->
<section class="mq-sec" id="mqsec" aria-hidden="true">
  <div class="mq-row" id="mqr1"></div>
  <div class="mq-row" id="mqr2" style="margin-bottom:0"></div>
</section>

<!-- ============ À PROPOS ============ -->
<section class="about" id="apropos">
  <span class="blob blob-a fx" style="--fx-x:-80px;--fx-y:0;--fx-d:.1s"><span class="sph"></span></span>
  <span class="blob blob-b fx" style="--fx-x:-80px;--fx-y:0;--fx-d:.25s"><span class="sph"></span></span>
  <span class="blob blob-c fx" style="--fx-x:80px;--fx-y:0;--fx-d:.15s"></span>
  <span class="blob blob-d fx" style="--fx-x:80px;--fx-y:0;--fx-d:.3s"><span class="sph"></span></span>

  <h2 class="mega fx">Defar gaaw ?</h2>
  <p class="anim-p" id="anim">À Dakar, une panne n'attend pas. DefarGaaw envoie chez vous un artisan vérifié — froid, électricité, plomberie, mécanique — au prix annoncé d'avance : 3 000 FCFA le diagnostic, réparation sur devis validé par vous, et 15 jours de garantie écrite. Construisons un quotidien qui ne tombe plus en panne.</p>
  <span class="fx"><a class="btn btn-contact" id="aboutContact" href="#demande">Demander une intervention</a></span>
</section>

<!-- ============ SERVICES (blanc) ============ -->
<section class="services" id="services">
  <h2 class="mega-dark fx">Services</h2>
  <p class="intro fx" style="--fx-d:.1s">Six métiers du quotidien, un seul standard : déplacement + diagnostic à <b>3 000 FCFA</b>, réparation uniquement sur devis validé.</p>
  <div class="svc">
    <div class="svc-item fx"><span class="svc-no">01</span><div><div class="svc-nm">Froid &amp; climatisation</div><p class="svc-ds">Réfrigérateurs, congélateurs et climatiseurs : recharge de gaz, compresseurs, thermostats — le froid qui revient, vite.</p></div></div>
    <div class="svc-item fx" style="--fx-d:.1s"><span class="svc-no">02</span><div><div class="svc-nm">Électricité</div><p class="svc-ds">Pannes de courant, prises, tableaux, installations : un travail aux normes qui protège votre maison et vos appareils.</p></div></div>
    <div class="svc-item fx" style="--fx-d:.2s"><span class="svc-no">03</span><div><div class="svc-nm">Plomberie</div><p class="svc-ds">Fuites, robinetterie, sanitaires, chauffe-eau : des réparations propres et durables, sans dégât ni surprise.</p></div></div>
    <div class="svc-item fx" style="--fx-d:.3s"><span class="svc-no">04</span><div><div class="svc-nm">Mécanique</div><p class="svc-ds">Dépannage de véhicules et groupes électrogènes à domicile : diagnostic honnête, remise en route rapide.</p></div></div>
    <div class="svc-item fx" style="--fx-d:.4s"><span class="svc-no">05</span><div><div class="svc-nm">Électroménager</div><p class="svc-ds">Machines à laver, téléviseurs, micro-ondes : on prolonge la vie de vos appareils quand ça en vaut la peine — et on vous le dit quand non.</p></div></div>
    <div class="svc-item fx" style="--fx-d:.5s"><span class="svc-no">06</span><div><div class="svc-nm">Menuiserie</div><p class="svc-ds">Portes, serrures, meubles, ajustements : les finitions qui rendent la maison sûre et agréable.</p></div></div>
  </div>
</section>

<!-- ============ PARCOURS (cartes empilées) ============ -->
<section class="stackwrap" id="parcours">
  <h2 class="mega fx">Parcours</h2>
  <p class="intro fx" style="--fx-d:.1s">Trois étapes, zéro mauvaise surprise. Les cartes s'empilent — comme les garanties.</p>

  <div id="stack">
    <div class="card-slot"><article class="pcard" style="top:calc(84px + 0px)">
      <div class="pc-top"><span class="pc-no mega">01</span><div><div class="pc-cat">Étape</div><div class="pc-nm">La demande</div></div><span class="pc-btn"><a class="btn btn-ghost" href="#demande">Demander</a></span></div>
      <div class="pc-grid">
        <div class="pc-col">
          <div class="pc-pane"><span class="k">Canal</span><p>Formulaire du site, WhatsApp ou téléphone : décrivez la panne, le quartier et le créneau souhaité. Une minute suffit.</p></div>
          <div class="pc-pane gold"><span class="k">Diagnostic — prix fixe</span><span class="v">3 000 <small>FCFA</small></span></div>
        </div>
        <div class="pc-col">
          <div class="pc-pane" style="height:100%"><span class="k">Ce qui est inclus</span><ul>
            <li>Confirmation de l'artisan vérifié disponible et de l'heure d'arrivée</li>
            <li>Paiement sécurisé par Wave ou Orange Money</li>
            <li>Le seul montant demandé avant l'intervention — il couvre le déplacement et le diagnostic</li>
          </ul></div>
        </div>
      </div>
    </article></div>

    <div class="card-slot"><article class="pcard" style="top:calc(84px + 28px)">
      <div class="pc-top"><span class="pc-no mega">02</span><div><div class="pc-cat">Étape</div><div class="pc-nm">Le devis, validé par vous</div></div><span class="pc-btn"><a class="btn btn-ghost" href="#demande">Demander</a></span></div>
      <div class="pc-grid">
        <div class="pc-col">
          <div class="pc-pane"><span class="k">Sur place</span><p>L'artisan diagnostique et vous propose un devis écrit. Si la panne réelle diffère de votre description, il vous explique et redevise.</p></div>
          <div class="pc-pane"><span class="k">La règle</span><span class="v" style="font-size:clamp(1.05rem,2.2vw,1.6rem)">Aucun travail sans votre accord</span></div>
        </div>
        <div class="pc-col">
          <div class="pc-pane" style="height:100%"><span class="k">Vous gardez la main</span><ul>
            <li>Devis détaillé avant tout travail, réparation payée après</li>
            <li>Libre d'accepter ou de refuser — seul le diagnostic reste acquis</li>
            <li>Réserves éventuelles (pièce d'occasion, appareil en fin de vie) notées noir sur blanc</li>
          </ul></div>
        </div>
      </div>
    </article></div>

    <div class="card-slot"><article class="pcard" style="top:calc(84px + 56px)">
      <div class="pc-top"><span class="pc-no mega">03</span><div><div class="pc-cat">Étape</div><div class="pc-nm">Réparé &amp; garanti</div></div><span class="pc-btn"><a class="btn btn-ghost" href="#demande">Demander</a></span></div>
      <div class="pc-grid">
        <div class="pc-col">
          <div class="pc-pane gold"><span class="k">Garantie écrite</span><span class="v">15 <small>jours</small></span></div>
          <div class="pc-pane"><span class="k">Si la même panne revient</span><p>L'artisan repasse sous 72 h, sans frais de déplacement ni de main-d'œuvre — une reprise gratuite par intervention.</p></div>
        </div>
        <div class="pc-col">
          <div class="pc-pane" style="height:100%"><span class="k">Après l'intervention</span><ul>
            <li>Paiement du solde par Wave ou Orange Money</li>
            <li>Votre note construit la réputation de l'artisan</li>
            <li>Cas couverts et exclus détaillés dans les conditions en bas de page — DefarGaaw arbitre</li>
          </ul></div>
        </div>
      </div>
    </article></div>
  </div>
</section>

<!-- ============ DEMANDE ============ -->
<section class="funnel" id="demande">
  <div class="wrap">
    <h2 class="sec-h mega fx">Demander</h2>
    <p class="sec-p fx" style="--fx-d:.1s">Remplissez le formulaire : votre demande nous parvient sur WhatsApp, et notre équipe vous répond pour confirmer l'artisan et le créneau.</p>

    <div class="funnel-grid">
      <div class="how-side fx">
        <h3>Ce qui se passe ensuite</h3>
        <ol>
          <li><span><b>Vous envoyez</b> le formulaire — il s'ouvre dans WhatsApp avec votre demande déjà rédigée. Un clic pour envoyer.</span></li>
          <li><span><b>On vous confirme</b> l'artisan disponible et l'heure d'arrivée, puis on vous envoie le lien de paiement du diagnostic (3 000 F).</span></li>
          <li><span><b>L'artisan intervient</b>, vous validez le devis, la réparation est faite et garantie 15 jours.</span></li>
        </ol>
        <h3 style="margin-top:34px">Quartiers couverts au lancement</h3>
        <p style="font-size:13.5px;font-weight:300;color:var(--dim)">Nous démarrons volontairement sur quelques quartiers pour garantir des délais courts. Votre quartier n'y est pas ? Envoyez quand même : on vous prévient dès qu'on arrive chez vous.</p>
        <div class="zones-static" id="zonesStatic"></div>
      </div>

      <form class="form-card fx" style="--fx-d:.15s" id="reqForm" novalidate>
        <label class="flabel">Quel service ?</label>
        <div class="metier-grid" id="metierPick"></div>

        <label class="flabel" for="fQuartier">Votre quartier</label>
        <select class="field" id="fQuartier"></select>

        <label class="flabel" for="fDesc">Décrivez la panne</label>
        <textarea class="field" id="fDesc" placeholder="Ex : mon réfrigérateur ne refroidit plus depuis hier, le moteur tourne mais ne gèle pas…"></textarea>

        <label class="flabel" for="fQuand">Quand souhaitez-vous l'intervention ?</label>
        <select class="field" id="fQuand">
          <option>Dès que possible</option><option>Aujourd'hui</option>
          <option>Demain matin</option><option>Demain après-midi</option><option>Cette semaine</option>
        </select>

        <label class="flabel" for="fNom">Votre nom</label>
        <input class="field" id="fNom" placeholder="Ex : Awa Diallo" autocomplete="name">

        <label class="flabel" for="fTel">Votre téléphone (pour vous rappeler)</label>
        <input class="field" id="fTel" placeholder="77 123 45 67" inputmode="tel" autocomplete="tel">

        <div style="margin-top:24px;display:grid;gap:10px">
          <button type="submit" class="btn btn-wa" id="waBtn">
            <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.4 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.4-.7-2.9-1.2-4.7-4.1-4.9-4.3-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5s.8 1.9.8 2c.1.1.1.3 0 .5-.3.6-.7.9-.5 1.2.7 1.2 1.6 2 2.8 2.6.3.2.5.1.7-.1l.9-1c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.6.3 0 .1 0 .8-.2 1.4Z"/></svg>
            Envoyer ma demande sur WhatsApp
          </button>
          <a class="btn btn-ghost" id="callBtn" href="#">📞 Ou appelez-nous directement</a>
        </div>
        <p class="form-note">En envoyant votre demande, vous acceptez d'être recontacté par DefarGaaw au sujet de votre panne. Vos informations ne sont jamais partagées à des tiers (voir Confidentialité en bas de page).</p>
        <div class="success" id="okBox" role="status">✅ <b>Votre demande est prête dans WhatsApp.</b> Appuyez sur « Envoyer » pour la transmettre — réponse rapide de 8h à 20h, 7j/7. <a id="okBoxLink" href="#" target="_blank" rel="noopener" style="font-weight:600;color:var(--gold);display:inline-block;margin-top:6px">WhatsApp ne s'est pas ouvert ? Cliquez ici ›</a></div>
      </form>
    </div>

    <div id="carte">
      <div class="map-card fx">
        <div id="map" role="application" aria-label="Carte interactive des communes et quartiers de Dakar couverts par DefarGaaw">
          <div class="map-fallback">Carte disponible avec une connexion internet. Hors connexion, la liste complète des quartiers couverts figure ci-dessus.</div>
        </div>
        <div class="map-legend">
          <span><span class="dotl" style="background:#E0A93B"></span>Couvert dès maintenant</span>
          <span><span class="dotl" style="background:#22332E;border:2px solid #5B7A72"></span>Ouverture prochaine</span>
          <span>Positions indicatives</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ============ ARTISANS ============ -->
<section class="funnel" id="artisans" style="padding-top:80px">
  <div class="wrap">
    <h2 class="sec-h mega fx">Artisans</h2>
    <p class="sec-p fx" style="--fx-d:.1s">Rejoignez le réseau DefarGaaw : des clients réguliers dans votre zone, sans démarchage — et vous êtes payé à coup sûr.</p>
    <div class="funnel-grid">
      <div class="fx">
        <div class="pillars" style="grid-template-columns:1fr;margin-top:0;gap:20px">
          <div class="pillar"><h3>Gratuit à l'inscription</h3><p>Aucun abonnement, aucun frais d'entrée. DefarGaaw prélève 15 % par intervention réussie — vous ne payez que lorsque vous gagnez.</p></div>
          <div class="pillar"><h3>Payé à coup sûr</h3><p>Le diagnostic est encaissé avant votre déplacement, la réparation après validation du devis par le client. Fini les impayés et les déplacements pour rien.</p></div>
          <div class="pillar"><h3>Vérification sérieuse</h3><p>Un entretien, une vérification d'identité et des références. C'est exigeant — c'est aussi ce qui donne de la valeur au badge « artisan vérifié DefarGaaw » auprès des clients.</p></div>
        </div>
      </div>
      <form class="form-card fx" style="--fx-d:.15s" id="artForm" novalidate>
        <label class="flabel" for="aNom">Votre nom</label>
        <input class="field" id="aNom" placeholder="Ex : Mamadou Sow" autocomplete="name">
        <label class="flabel" for="aMetier">Votre métier principal</label>
        <select class="field" id="aMetier"></select>
        <label class="flabel" for="aZone">Quartier où vous travaillez le plus</label>
        <select class="field" id="aZone"></select>
        <label class="flabel" for="aExp">Votre expérience, en une phrase</label>
        <input class="field" id="aExp" placeholder="Ex : 8 ans en froid et climatisation, atelier à Grand Yoff">
        <label class="flabel" for="aTel">Votre téléphone</label>
        <input class="field" id="aTel" placeholder="77 123 45 67" inputmode="tel" autocomplete="tel">
        <div style="margin-top:24px">
          <button type="submit" class="btn btn-wa" style="width:100%">
            <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.4 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.4-.7-2.9-1.2-4.7-4.1-4.9-4.3-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5s.8 1.9.8 2c.1.1.1.3 0 .5-.3.6-.7.9-.5 1.2.7 1.2 1.6 2 2.8 2.6.3.2.5.1.7-.1l.9-1c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.6.3 0 .1 0 .8-.2 1.4Z"/></svg>
            Postuler via WhatsApp
          </button>
        </div>
        <p class="form-note">Après votre candidature, notre équipe vous contacte pour un entretien de vérification (identité, compétences, références). C'est l'étape qui protège tout le réseau.</p>
        <div class="success" id="okArt" role="status">✅ <b>Votre candidature est prête dans WhatsApp.</b> Appuyez sur « Envoyer » — on vous recontacte pour l'entretien de vérification. <a id="okArtLink" href="#" target="_blank" rel="noopener" style="font-weight:600;color:var(--gold);display:inline-block;margin-top:6px">WhatsApp ne s'est pas ouvert ? Cliquez ici ›</a></div>
      </form>
    </div>
  </div>
</section>

<!-- ============ ENGAGEMENTS + FAQ ============ -->
<section class="funnel" id="faq" style="padding-top:80px">
  <div class="wrap">
    <h2 class="sec-h mega fx">Confiance</h2>
    <p class="sec-p fx" style="--fx-d:.1s">Nos engagements, écrits noir sur blanc.</p>
    <div class="pillars">
      <div class="pillar fx"><h3>🛡️ Artisans vérifiés, un par un</h3><p>Identité contrôlée, compétences évaluées, références vérifiées auprès d'anciens clients — avant la première mission. Aucun artisan n'entre dans le réseau autrement.</p></div>
      <div class="pillar fx" style="--fx-d:.1s"><h3>📋 Devis avant travaux, toujours</h3><p>Aucune réparation ne démarre sans votre accord écrit sur le montant. Si la panne réelle diffère de votre description, on vous explique et on redevise — vous restez libre de refuser.</p></div>
      <div class="pillar fx" style="--fx-d:.2s"><h3>🔧 Garantie 15 jours</h3><p>Si la même panne revient dans les 15 jours, l'artisan repasse sous 72 h sans frais de déplacement ni de main-d'œuvre. Cas couverts et exclus détaillés en bas de page — DefarGaaw arbitre en cas de désaccord.</p></div>
    </div>

    <div class="faq fx">
      <details>
        <summary>Pourquoi payer 3 000 FCFA avant l'arrivée de l'artisan ?</summary>
        <div class="a">Ce montant couvre le déplacement et le diagnostic de l'artisan — son temps et son transport, qu'il y ait réparation ou non. C'est ce qui nous permet de vous envoyer un professionnel sérieux rapidement, et c'est le <b>seul</b> paiement demandé avant l'intervention. La réparation, elle, n'est payée qu'après votre accord sur le devis.</div>
      </details>
      <details>
        <summary>Et si la panne n'est pas celle que j'ai décrite ?</summary>
        <div class="a">Ça arrive souvent — et c'est prévu. L'artisan fait le diagnostic sur place, vous explique la panne réelle et vous propose un devis correspondant. Vous êtes libre de l'accepter ou de le refuser. Si vous refusez, vous ne payez que le diagnostic déjà réglé, rien de plus.</div>
      </details>
      <details>
        <summary>Comment payez-vous les artisans ? Combien prend DefarGaaw ?</summary>
        <div class="a">DefarGaaw prélève une commission de 15 % sur chaque intervention réussie ; l'artisan reçoit les 85 % restants. L'inscription est gratuite pour les artisans : ils ne paient que lorsqu'ils gagnent. Cette commission finance la vérification des artisans, la mise en relation, le paiement sécurisé et la garantie.</div>
      </details>
      <details>
        <summary>Comment fonctionne la garantie de 15 jours ?</summary>
        <div class="a">Si la <b>même panne</b> se reproduit dans les 15 jours, signalez-le nous : l'artisan revient sous 72 h, sans frais de déplacement ni de main-d'œuvre (une reprise gratuite par intervention). Sont couverts les défauts de main-d'œuvre et les pièces neuves défectueuses. Ne sont pas couverts : une panne différente, les dommages survenus après l'intervention (surtension, choc, dégât des eaux), l'intervention d'un tiers, les pièces d'occasion choisies pour réduire le coût, et les réparations « de prolongation » signalées sur le devis. Le détail complet figure dans « Conditions de la garantie » en bas de page. En cas de désaccord, DefarGaaw arbitre.</div>
      </details>
      <details>
        <summary>Quels moyens de paiement acceptez-vous ?</summary>
        <div class="a">Wave et Orange Money, les deux moyens les plus utilisés à Dakar. Le lien de paiement du diagnostic vous est envoyé par WhatsApp après confirmation de votre demande ; le solde de la réparation se règle après votre validation du devis.</div>
      </details>
      <details>
        <summary>Puis-je annuler une demande ?</summary>
        <div class="a">Oui. Avant le départ de l'artisan, l'annulation est gratuite et le diagnostic payé vous est remboursé. Une fois l'artisan en route, le diagnostic reste dû (il couvre son déplacement), mais vous ne payez évidemment aucune réparation.</div>
      </details>
      <details>
        <summary>Mon quartier n'est pas encore couvert. Que faire ?</summary>
        <div class="a">Envoyez quand même votre demande en précisant votre quartier : si un artisan du réseau peut s'y rendre, on vous le confirme ; sinon, vous serez averti en priorité dès l'ouverture de votre zone. C'est aussi comme ça qu'on décide où étendre le réseau.</div>
      </details>
    </div>
  </div>
</section>

<!-- ============ INSTITUTIONS ============ -->
<section class="funnel" id="etat" style="padding-top:80px">
  <div class="wrap">
    <h2 class="sec-h mega fx">Institutions</h2>
    <p class="sec-p fx" style="--fx-d:.1s">Un outil de formalisation du secteur informel : DefarGaaw recense et qualifie les artisans, trace chaque transaction par mobile money et construit pour chacun un historique d'activité — la première marche vers la formalisation, l'inclusion financière et la protection sociale.</p>
    <div class="inst-points">
      <div class="inst-point fx"><h3>Recensement &amp; qualification</h3><p>Chaque artisan vérifié est identifié, rattaché à un métier et à une zone : des données structurées sur un secteur qui en manque cruellement.</p></div>
      <div class="inst-point fx" style="--fx-d:.1s"><h3>Traçabilité des revenus</h3><p>Les paiements passent par mobile money : l'activité devient mesurable, ouvrant l'accès au crédit et au statut de l'entreprenant.</p></div>
      <div class="inst-point fx" style="--fx-d:.2s"><h3>Montée en compétences</h3><p>La notation et la garantie tirent la qualité vers le haut ; le réseau est un canal naturel pour la formation professionnelle continue.</p></div>
      <div class="inst-point fx" style="--fx-d:.3s"><h3>Emploi des jeunes</h3><p>Un flux de clients régulier rend les métiers techniques attractifs et viables pour la nouvelle génération d'artisans.</p></div>
    </div>
    <div class="fx" style="margin-top:36px">
      <a class="btn btn-ghost" id="instBtn" href="#">📄 Écrire à l'équipe (partenariats institutionnels)</a>
    </div>
  </div>
</section>

</main>

<!-- ============ FOOTER ============ -->
<footer>
  <div class="wrap">
    <div class="foot-grid">
      <div>
        <div class="foot-brand mega">DefarGaaw</div>
        <p class="foot-note">DefarGaaw — « répare vite » en wolof. Le dépannage à domicile par des artisans vérifiés du secteur informel. Dakar, Sénégal.</p>
        <div class="paychips"><span class="paychip">Wave</span><span class="paychip">Orange Money</span></div>
      </div>
      <div>
        <h4>Service</h4>
        <a href="#demande">Demander une intervention</a>
        <a href="#services">Services &amp; prix</a>
        <a href="#faq">Questions fréquentes</a>
        <a href="#artisans">Devenir artisan</a>
      </div>
      <div>
        <h4>Contact</h4>
        <a href="#" id="footWa">WhatsApp</a>
        <a href="#" id="footTel">Téléphone</a>
        <a href="#" id="footMail">Email</a>
        <a href="#etat">Partenariats institutionnels</a>
      </div>
    </div>
    <div class="legal">
      <details>
        <summary>Mentions légales</summary>
        <div class="a"><b>DefarGaaw</b> — service de mise en relation entre particuliers et artisans indépendants, opéré depuis Dakar, Sénégal. Éditeur : [Nom / structure juridique à compléter — ex. entreprise individuelle sous statut de l'entreprenant]. Contact : voir la rubrique Contact ci-dessus. Les artisans référencés sont des professionnels indépendants ; DefarGaaw agit comme intermédiaire de mise en relation, organise la vérification, le paiement et la garantie décrits sur ce site.</div>
      </details>
      <details>
        <summary>Confidentialité &amp; données personnelles</summary>
        <div class="a">Les informations transmises via les formulaires de ce site (nom, téléphone, quartier, description de panne) servent uniquement à traiter votre demande d'intervention ou votre candidature d'artisan. Elles ne sont ni vendues ni partagées à des tiers. Conformément à la loi sénégalaise n° 2008-12 sur la protection des données à caractère personnel et aux règles de la CDP, vous pouvez demander la consultation, la rectification ou la suppression de vos données en nous contactant via la rubrique Contact.</div>
      </details>
      <details>
        <summary>Conditions de la garantie (cas couverts et exclus)</summary>
        <div class="a">
        <b>Durée :</b> 15 jours à compter de la fin de l'intervention, pour la panne réparée, sur le même appareil ou la même installation.<br><br>
        <b>Ce qui est couvert :</b> la réapparition de la même panne ; un défaut de main-d'œuvre (raccord, soudure, montage, réglage) ; une pièce neuve fournie par l'artisan qui s'avère défectueuse (remplacée selon la garantie du fournisseur). Dans ces cas, l'artisan revient sans frais de déplacement ni de main-d'œuvre, une reprise gratuite par intervention.<br><br>
        <b>Ce qui n'est pas couvert :</b> une panne différente ou sur un autre équipement ; un dommage survenu après l'intervention (choc, mauvaise utilisation, dégât des eaux) ; les surtensions, coupures de courant ou foudre ; l'intervention d'un tiers sur l'équipement entre-temps ; l'usure normale ; les pièces d'occasion choisies par le client pour réduire le coût (signalées comme telles sur le devis) ; les réparations dites « de prolongation » sur un appareil en fin de vie, lorsque cette réserve est mentionnée sur le devis validé.<br><br>
        <b>Procédure :</b> signalez la panne à DefarGaaw (WhatsApp ou téléphone) dans le délai de 15 jours ; l'artisan repasse sous 72 heures ouvrées ; en cas de désaccord sur la cause, DefarGaaw arbitre sur la base du devis validé et du constat, et peut solliciter un second avis technique.
        </div>
      </details>
    </div>
    <p class="copy">© 2026 DefarGaaw · Dakar, Sénégal</p>
  </div>
</footer>

<button class="install-chip" id="installChip" aria-label="Installer l'application DefarGaaw">📲 Installer l'appli</button>

<div class="mobilebar">
  <a class="btn btn-contact" href="#demande" style="outline:none;box-shadow:none">Demander</a>
  <a class="btn btn-wa" id="mobWa" href="#">WhatsApp</a>
</div>

<script>
/* ============================================================
   CONFIGURATION — source unique de vérité
   ============================================================ */
const CONFIG = {
  whatsapp: "221780190581",           // Numéro WhatsApp Business DefarGaaw
  tel:      "+221780190581",           // Numéro d'appel
  email:    "defargaaw@gmail.com",     // Adresse Gmail DefarGaaw
};

const METIERS=[["froid","❄️","Froid & clim"],["elec","⚡","Électricité"],["plomb","🚿","Plomberie"],["meca","🔧","Mécanique"],["em","📺","Électroménager"],["menu","🪚","Menuiserie"]];
const ZCOORDS={
  "Mermoz":[14.7076,-17.4736],"Sacré-Cœur":[14.7137,-17.4623],"Point E":[14.6934,-17.4614],
  "Ouakam":[14.7217,-17.4889],"Yoff":[14.7469,-17.4849],"Liberté 6":[14.7228,-17.4571],
  "Plateau":[14.6708,-17.4395],"Médina":[14.6785,-17.4525],"Fann":[14.6889,-17.4703],
  "Grand Dakar":[14.7133,-17.4460],"HLM":[14.7043,-17.4392],"Grand Yoff":[14.7343,-17.4520],
  "Almadies":[14.7397,-17.5089],"Ngor":[14.7500,-17.5150],"Hann Bel-Air":[14.7050,-17.4260],
  "Parcelles Assainies":[14.7614,-17.4340],"Cambérène":[14.7717,-17.4260],"Pikine":[14.7550,-17.3900],
  "Guédiawaye":[14.7690,-17.4030],"Keur Massar":[14.7790,-17.3160],"Rufisque":[14.7167,-17.2667]
};
const ZONES=Object.keys(ZCOORDS);
const ZONES_OUVERTES=["Mermoz","Sacré-Cœur","Point E","Ouakam","Yoff","Liberté 6"]; // ← ajustez selon votre réalité

const reduceMotion=(typeof matchMedia==='function')&&matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- liens de contact ---------- */
const waLink=msg=>"https://wa.me/"+CONFIG.whatsapp+(msg?"?text="+encodeURIComponent(msg):"");
document.getElementById('callBtn').href="tel:"+CONFIG.tel;
document.getElementById('heroContact').href=waLink("Bonjour DefarGaaw !");
document.getElementById('footWa').href=waLink("Bonjour DefarGaaw !");
document.getElementById('footTel').href="tel:"+CONFIG.tel;
document.getElementById('footTel').textContent="Téléphone · "+CONFIG.tel.replace(/^\\+221(\\d{2})(\\d{3})(\\d{2})(\\d{2})$/,"+221 $1 $2 $3 $4");
document.getElementById('footMail').href="mailto:"+CONFIG.email;
document.getElementById('footMail').textContent=CONFIG.email;
document.getElementById('mobWa').href=waLink("Bonjour DefarGaaw, j'ai une panne.");
document.getElementById('instBtn').href="mailto:"+CONFIG.email+"?subject="+encodeURIComponent("Partenariat institutionnel — DefarGaaw");

/* ---------- apparitions (FadeIn) ---------- */
if('IntersectionObserver' in window){
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}}),{rootMargin:'50px',threshold:0});
  document.querySelectorAll('.fx').forEach(el=>io.observe(el));
}else{
  document.querySelectorAll('.fx').forEach(el=>el.classList.add('in'));
}

/* ---------- marquee piloté par le scroll ---------- */
const TILES1=METIERS.map(m=>({em:m[1],lb:m[2],sb:"Artisans vérifiés · Dakar"}));
const TILES2=[
  {em:"💛",lb:"3 000 FCFA",sb:"Diagnostic à prix fixe",g:1},
  {em:"📋",lb:"Devis validé",sb:"Avant toute réparation"},
  {em:"🛡️",lb:"Garantie 15 j",sb:"Une reprise gratuite",g:1},
  {em:"📱",lb:"Wave · OM",sb:"Paiement mobile money"},
  {em:"⭐",lb:"Notation",sb:"Après chaque mission",g:1},
  {em:"📍",lb:"6 quartiers",sb:"Au lancement, puis +"},
];
function tile(t){return '<div class="tile'+(t.g?' gold':'')+'"><span class="em">'+t.em+'</span><div><div class="lb">'+t.lb+'</div><div class="sb">'+t.sb+'</div></div></div>';}
const r1=document.getElementById('mqr1'),r2=document.getElementById('mqr2');
r1.innerHTML=[...TILES1,...TILES1,...TILES1].map(tile).join('');
r2.innerHTML=[...TILES2,...TILES2,...TILES2].map(tile).join('');
const mqSec=document.getElementById('mqsec');
let mqTick=false;
function mqUpdate(){
  mqTick=false;
  if(!mqSec)return;
  const rect=mqSec.getBoundingClientRect();
  const off=((window.innerHeight||0)-rect.top)*0.3;
  if(!isFinite(off))return;
  r1.style.transform='translateX('+(-(off))+'px)';
  r2.style.transform='translateX('+((off)-560)+'px)';
}
function onScrollMq(){if(!mqTick){mqTick=true;requestAnimationFrame(mqUpdate);}}
if(!reduceMotion){addEventListener('scroll',onScrollMq,{passive:true});mqUpdate();}

/* ---------- révélation lettre par lettre ---------- */
const anim=document.getElementById('anim');
let chars=[];
if(anim){
  const txt=anim.textContent;
  anim.textContent='';
  txt.split('').forEach(c=>{
    const s=document.createElement('span');
    s.className='ch';s.textContent=c;
    anim.appendChild(s);chars.push(s);
  });
}
let chTick=false;
function chUpdate(){
  chTick=false;
  if(!anim||!chars.length)return;
  const vh=window.innerHeight||0;
  const rect=anim.getBoundingClientRect();
  const span=(rect.height||1)+vh*0.6;
  const p=Math.min(1,Math.max(0,(vh*0.8-rect.top)/span));
  const idx=Math.floor(p*chars.length*1.15);
  chars.forEach((c,i)=>{c.style.opacity=i<idx?1:.2;});
}
function onScrollCh(){if(!chTick){chTick=true;requestAnimationFrame(chUpdate);}}
if(!reduceMotion){addEventListener('scroll',onScrollCh,{passive:true});chUpdate();}
else{chars.forEach(c=>c.style.opacity=1);}

/* ---------- cartes empilées (scale au scroll) ---------- */
const stack=document.getElementById('stack');
const cards=[...document.querySelectorAll('.pcard')];
let stTick=false;
function stUpdate(){
  stTick=false;
  if(!stack||!cards.length)return;
  if((window.innerWidth||0)<768){cards.forEach(c=>c.style.transform='');return;}
  const vh=window.innerHeight||0;
  const rect=stack.getBoundingClientRect();
  const denom=(rect.height||0)-vh;
  const t=denom>0?Math.min(1,Math.max(0,-rect.top/denom)):0;
  const n=cards.length;
  cards.forEach((c,i)=>{
    const target=1-(n-1-i)*0.04;
    const local=Math.min(1,Math.max(0,t*n-i));
    const s=1-local*(1-target);
    c.style.transform='scale('+s.toFixed(4)+')';
  });
}
function onScrollSt(){if(!stTick){stTick=true;requestAnimationFrame(stUpdate);}}
if(!reduceMotion){addEventListener('scroll',onScrollSt,{passive:true});stUpdate();}

/* ---------- effet magnétique (souris, ordinateur uniquement) ---------- */
const mag=document.getElementById('magnet');
const finePointer=(typeof matchMedia==='function')&&matchMedia('(pointer: fine)').matches;
if(mag&&finePointer&&!reduceMotion){
  addEventListener('mousemove',e=>{
    const r=mag.getBoundingClientRect();
    if(!r.width)return;
    const cx=r.left+r.width/2,cy=r.top+r.height/2;
    const dx=e.clientX-cx,dy=e.clientY-cy;
    const pad=150;
    if(Math.abs(dx)<r.width/2+pad&&Math.abs(dy)<r.height/2+pad){
      mag.style.transition='transform .3s ease-out';
      mag.style.transform='translate3d('+(dx/3)+'px,'+(dy/3)+'px,0)';
    }else{
      mag.style.transition='transform .6s ease-in-out';
      mag.style.transform='translate3d(0,0,0)';
    }
  },{passive:true});
}

/* ---------- zones & métiers ---------- */
document.getElementById('zonesStatic').innerHTML=
  ZONES.map(z=>'<span class="zchip'+(ZONES_OUVERTES.includes(z)?' on':'')+'">'+z+(ZONES_OUVERTES.includes(z)?' ✓':'')+'</span>').join('');
const selQ=document.getElementById('fQuartier');
selQ.innerHTML=ZONES.map(z=>'<option'+(z==="Mermoz"?' selected':'')+'>'+z+(ZONES_OUVERTES.includes(z)?'':' (bientôt)')+'</option>').join('');
const mp=document.getElementById('metierPick');
mp.innerHTML=METIERS.map((m,i)=>'<button type="button" class="mpick'+(i===0?' sel':'')+'" data-m="'+m[2]+'"><span class="em">'+m[1]+'</span>'+m[2]+'</button>').join('');
let selMetier=METIERS[0][2];
mp.querySelectorAll('.mpick').forEach(b=>b.addEventListener('click',()=>{
  mp.querySelectorAll('.mpick').forEach(x=>x.classList.remove('sel'));b.classList.add('sel');selMetier=b.dataset.m;
}));
document.getElementById('aMetier').innerHTML=METIERS.map(m=>'<option>'+m[1]+' '+m[2]+'</option>').join('');
document.getElementById('aZone').innerHTML=ZONES.map(z=>'<option>'+z+'</option>').join('');

/* ---------- validation & envoi WhatsApp ---------- */
function need(el,ok){el.classList.toggle('err',!ok);return ok;}
document.getElementById('reqForm').addEventListener('submit',e=>{
  e.preventDefault();
  const d=document.getElementById('fDesc'),n=document.getElementById('fNom'),t=document.getElementById('fTel');
  const okAll=[need(d,d.value.trim().length>=8),need(n,!!n.value.trim()),need(t,t.value.replace(/\\D/g,'').length>=7)].every(Boolean);
  if(!okAll)return;
  const msg=
"🔧 NOUVELLE DEMANDE — DefarGaaw\\n"+
"Service : "+selMetier+"\\n"+
"Quartier : "+selQ.value.replace(' (bientôt)','')+"\\n"+
"Panne : "+d.value.trim()+"\\n"+
"Quand : "+document.getElementById('fQuand').value+"\\n"+
"Nom : "+n.value.trim()+"\\n"+
"Téléphone : "+t.value.trim();
  const url=waLink(msg);
  document.getElementById('okBoxLink').href=url;
  window.open(url,'_blank','noopener');
  document.getElementById('okBox').classList.add('on');
});
document.getElementById('artForm').addEventListener('submit',e=>{
  e.preventDefault();
  const n=document.getElementById('aNom'),x=document.getElementById('aExp'),t=document.getElementById('aTel');
  const okAll=[need(n,!!n.value.trim()),need(x,!!x.value.trim()),need(t,t.value.replace(/\\D/g,'').length>=7)].every(Boolean);
  if(!okAll)return;
  const msg=
"🧰 CANDIDATURE ARTISAN — DefarGaaw\\n"+
"Nom : "+n.value.trim()+"\\n"+
"Métier : "+document.getElementById('aMetier').value+"\\n"+
"Zone : "+document.getElementById('aZone').value+"\\n"+
"Expérience : "+x.value.trim()+"\\n"+
"Téléphone : "+t.value.trim();
  const url=waLink(msg);
  document.getElementById('okArtLink').href=url;
  window.open(url,'_blank','noopener');
  document.getElementById('okArt').classList.add('on');
});

/* ---------- navigation interne garantie ---------- */
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const id=(a.getAttribute('href')||'').slice(1);
    if(!id)return;
    const t=document.getElementById(id);
    if(!t)return;
    e.preventDefault();
    t.scrollIntoView({behavior:reduceMotion?'auto':'smooth',block:'start'});
    if(history.replaceState)history.replaceState(null,'','#'+id);
  });
});

/* ---------- application installable (PWA) ---------- */
if('serviceWorker' in navigator && location.protocol==='https:'){
  window.addEventListener('load',()=>{navigator.serviceWorker.register('sw.js').catch(()=>{});});
}
let deferredInstall=null;
const chip=document.getElementById('installChip');
window.addEventListener('beforeinstallprompt',(e)=>{
  e.preventDefault();deferredInstall=e;
  if(chip && !(typeof matchMedia==='function'&&matchMedia('(display-mode: standalone)').matches))chip.classList.add('on');
});
if(chip)chip.addEventListener('click',async()=>{
  if(!deferredInstall)return;
  deferredInstall.prompt();
  await deferredInstall.userChoice;
  deferredInstall=null;chip.classList.remove('on');
});
window.addEventListener('appinstalled',()=>{if(chip)chip.classList.remove('on');});

/* ---------- carte interactive de Dakar (chargement différé) ---------- */
function initMap(){
  const el=document.getElementById('map');
  if(!el||typeof L==='undefined')return;
  el.innerHTML='';
  const map=L.map('map',{scrollWheelZoom:false});
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:18,attribution:'© OpenStreetMap'}).addTo(map);
  const pts=[];
  ZONES.forEach(z=>{
    const c=ZCOORDS[z];if(!c)return;pts.push(c);
    const open=ZONES_OUVERTES.includes(z);
    const mk=L.circleMarker(c,{radius:open?11:8,color:open?'#E0A93B':'#5B7A72',fillColor:open?'#E0A93B':'#22332E',fillOpacity:open?.85:.55,weight:2}).addTo(map);
    mk.bindPopup('<b style="font-size:14px">'+z+'</b><br>'+(open?'✅ Couvert dès maintenant':'🕓 Ouverture prochaine')+'<br><a href="#demande" class="map-go" data-z="'+z+'" style="font-weight:700;color:#D96A43">Demander ici ›</a>');
  });
  map.fitBounds(L.latLngBounds(pts),{padding:[28,28]});
  map.on('popupopen',e=>{
    const a=e.popup.getElement().querySelector('.map-go');
    if(!a)return;
    a.addEventListener('click',()=>{
      const z=a.dataset.z;
      [...selQ.options].forEach(o=>{if(o.textContent.replace(' (bientôt)','')===z)o.selected=true;});
      map.closePopup();
    });
  });
}
let mapDone=false;
function lazyMap(){if(mapDone)return;mapDone=true;initMap();}
if('IntersectionObserver' in window){
  const mio=new IntersectionObserver(es=>{if(es.some(e=>e.isIntersecting)){mio.disconnect();lazyMap();}},{rootMargin:'400px'});
  const target=document.getElementById('carte');
  if(target)mio.observe(target);else window.addEventListener('load',lazyMap);
}else{
  window.addEventListener('load',lazyMap);
}
</script>
</body>
</html>
`;
