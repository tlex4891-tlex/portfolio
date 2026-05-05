# AI Adoption Lead — Programová příručka
## Seyfor | Interní zavedení AI do řízeného fungování firmy

> **Autor:** Tomáš Alex, AI Adoption Lead  
> **Verze:** 2.0 | Květen 2026  
> **Účel:** Živý pracovní dokument pro celý program — od analýzy prostředí po post-adopční mentoring  
> **Metodický rámec:** TOGAF ADM × IPMA ICB4 × Value First, AI Powered

---

## Obsah

**ČÁST A — KONTEXT A ANALÝZA PROSTŘEDÍ**
- A1: Profil Seyfor — co víme, co musíme zjistit
- A2: Architektonická analýza prostředí (TOGAF lens)
- A3: Stakeholder mapa
- A4: As-Is audit AI v organizaci

**ČÁST B — STRATEGIE A GOVERNANCE**
- B1: Strategický přístup — Value First, AI Powered
- B2: AI Governance framework
- B3: AI nástrojový landscape a rozhodnutí
- B4: Bezpečnost, GDPR a EU AI Act

**ČÁST C — PROGRAMOVÝ PLÁN**
- C0: Fáze 0 — Mandát a sponzor
- C1: Fáze 1 — Discovery (analýza prostředí)
- C2: Fáze 2 — Design a prioritizace
- C3: Fáze 3 — Prezentace managementu a schválení
- C4: Fáze 4 — Pilotní projekty
- C5: Fáze 5 — Workshops a enablement
- C6: Fáze 6 — Řízený rollout a change management
- C7: Fáze 7 — Post-adopční mentoring a optimalizace

**ČÁST D — OBSAH A NÁSTROJE**
- D1: Use-case prioritizace pro Seyfor
- D2: Prompt knihovna — jak ji vybudovat
- D3: Měření adopce a ROI

**ČÁST E — SEYFOR-SPECIFICKÉ**
- E1: Interní adopce jako obchodní příležitost
- E2: Multi-country a multi-product aspekty

**PŘÍLOHY**
- P1: Checklist nasazení nového AI nástroje
- P2: RACI matice AI programu
- P3: Šablona use-case registry
- P4: Šablona AI Policy (minimum viable)

---

---

# ČÁST A — KONTEXT A ANALÝZA PROSTŘEDÍ

---

## A1: Profil Seyfor — co víme a co musíme zjistit

### Co víme (veřejné zdroje, k ověření)

Seyfor je česká softwarová a IT firma s 30 lety existence a tržbami 4,66 mld. CZK za rok 2024. Provozuje 34 produktů a aplikací, zaměstnává 2 200 lidí v 7 evropských zemích a obsluhuje přes 260 000 zákazníků. Produktové portfolio pokrývá ERP, HR, CRM, účetní software, pokladní systémy, IT infrastrukturu, kybernetickou bezpečnost, cloud, datovou analytiku a — klíčově — vlastní AI nabídku pro klienty (AI pro firmy, AI agenti, AI chatboti, AI školení, AI hackathony).

Seyfor je členem České asociace umělé inteligence (ČAUI), má zavedené Azure/Microsoft partnerství a interně dokumentovanou 4-krokovou metodiku pro nasazení AI u zákazníků (Inicializace → Experimentování → Standardizace → Optimalizace a škálování).

**Klíčový kontextový paradox:** Seyfor prodává AI adopci svým zákazníkům — ale není jisté, do jaké míry ji sám žije. Toto je výchozí hypotéza programu, nikoliv fakt. Audit ve Fázi 1 ji ověří nebo vyvrátí.

---

### Co musíme zjistit (Discovery agenda)

Níže jsou otázky, na které nemáme veřejné odpovědi a které jsou kritické pro návrh programu:

**Organizační struktura:**
- Jak je firma strukturována — divize, business units, centrální sdílené služby?
- Kdo jsou vedoucí jednotlivých produktových linií a na koho reportují?
- Existuje CTO nebo Chief Product Officer s cross-division mandátem?

**Stávající AI aktivity:**
- Které týmy/produkty již AI nějak využívají nebo integrují?
- Existuje tým, který dodává AI služby zákazníkům — a jakého je složení a lokace?
- Jsou aktivity AI for Business (prodejní stránka) odděleny od interní produktivity AI?
- Kdo jsou interní experti na Azure OpenAI a ML?

**Datová situace:**
- Jaký je stav datové kvality napříč produkty?
- Existuje datová governance? Data katalog?
- Kde jsou uložena firemní data (M365, on-prem, Azure)?

**Technologická infrastruktura:**
- Je firma plně na M365 tenantovi? Jeden tenant nebo více (7 zemí)?
- Jaký je stav Azure Active Directory / Entra ID (SSO základ pro AI nástroje)?
- Jsou nasazeny DLP politiky v M365?

**Kultura a lidé:**
- Jak otevřené je vedení k experimentování?
- Existují interní AI ambasadoři nebo samozvaní experti?
- Jaký je obecný digitální skill level zaměstnanců?

---

## A2: Architektonická analýza prostředí — TOGAF ADM lens

Jako TOGAF Practitioner přistupuješ k programu jako k architektonické iniciativě, nikoliv jako k projektu nasazení nástroje. Toto rozlišení je zásadní: bez pohledu na enterprise architekturu budete nasazovat AI do prázdna a za 12 měsíců budete řešit spaghetti integrací, duplicitní nástroje a governance gap.

### Fáze Preliminary — Příprava

Před spuštěním ADM cyklu definuj:

**Architektonické principy pro AI:**
1. AI jako rozšíření lidských schopností, ne náhrada — všechna AI rozhodnutí mají identifikovatelného lidského vlastníka.
2. Data sovereignty first — žádná firemní data neopouštějí schválený perimetr bez explicitního souhlasu a DPA.
3. Build once, use many — AI schopnosti (modely, integrace, promptové šablony) jsou sdílené aktiva, ne individuální nástroje.
4. Measure before and after — žádný use-case bez předem definovaných success metrics.
5. Interoperabilita — AI nástroje musí respektovat existující IT architekturu, ne ji obcházet.

**Scope programu:**
- In scope: Interní produktivita a procesy 2 200 zaměstnanců v ČR (fáze 1), postupné rozšíření na ostatní země.
- Out of scope: AI v produktech pro zákazníky (to je produktová agenda, nikoliv interní adopce) — ale koordinace je nutná.
- Boundary: Tento program je o interní adopci; AI v zákaznických produktech je sesterská iniciativa se sdílenou governance.

---

### Fáze A — Architecture Vision

**Cíl stavu (To-Be vision):**
Za 18 měsíců je Seyfor firmou, kde:
- AI je integrována do každodenní práce minimálně 70 % zaměstnanců v ČR (aktivní použití, ne pasivní přístup).
- Existuje jasná, jednoduchá governance — každý zaměstnanec ví, co smí, s čím a jak.
- Interní zkušenost s AI je přímou podporou obchodní hodnoty: Seyfor prodává AI adopci zákazníkům a interně ji sám žije. Reference case = legitimita.
- AI use-cases jsou zdokumentovány, měřeny a sdíleny jako interní knowledge base.

**Motivační premisa pro management:**
Firma, která prodává AI zákazníkům, si nemůže dovolit nevědět, jak AI interně funguje. Každý kolega v sales, presales nebo delivery pozici musí být schopen říct: "Sami to takhle používáme."

---

### Fáze B — Business Architecture

**Capability mapa (co musíš zmapovat)**

Primární business capability skupiny relevantní pro AI adopci:

| Capability skupina | Příklady úkolů vhodných pro AI | Priorita |
|---|---|---|
| Prodej a presales | Příprava nabídek, analýza zákazníků, generování obsahu | Vysoká |
| Zákaznická podpora | Triage ticketů, odpovědi na časté dotazy, knowledge base | Vysoká |
| Vývoj a IT | Code review, dokumentace, code generation, testování | Vysoká |
| PM a delivery | Projektová dokumentace, status reporty, Jira management | Střední-Vysoká |
| HR a onboarding | Odpovědi na otázky, analýza pohovorů, JD tvorba | Střední |
| Finance a reporting | Analýza dat, reporting, FP&A podpora | Střední |
| Marketing a obsah | Tvorba blogů, social media, překlady | Střední |
| Inhouse IT operace | Automatizace, monitoring, incident first response | Střední |

**Process Pain Point mapa (sbíráš ve Fázi 1)**

Pro každou capability skupinu identifikuješ:
- Největší časová zátěž (kde stráví lidi nejvíc opakující se práce)
- Bottleneck (kde čekají nebo blokují ostatní)
- Quality gap (kde dělají chyby nebo produkují nekonzistentní výstupy)

---

### Fáze C/D/E — Data, Application, Technology Architecture

**Data Architecture (co musíš ověřit):**
- Kde sídlí firemní znalosti — SharePoint, Confluence, interní wiki, e-maily?
- Jak jsou strukturována projektová data (Jira, CRM)?
- Existují datové silosy mezi business units nebo zeměmi?
- Jsou data ve stavu, kdy je může AI smysluplně konzumovat (strukturovaná, tagovaná, přístupná)?

**Pozor na "Garbage In, Garbage Out":** Pokud Seyfor nemá uklizenou datovou základnu, AI řešení jako Glean nebo M365 Copilot Business Chat budou produkovat nekvalitní výstupy. Data readiness assessment je proto součástí Discovery (viz Fáze 1).

**Application Architecture:**
- Primární ekosystém: M365 (Teams, SharePoint, Outlook) + Azure → přirozené místo pro M365 Copilot a Azure OpenAI integraci.
- Jira + Confluence (Atlassian) → Atlassian Intelligence jako rozšíření stávajících nástrojů.
- CRM systém → AI integrace závisí na konkrétní platformě.

**Technology Architecture:**
- Azure jako pravděpodobná výpočetní platforma → Azure OpenAI Service jako bezpečná cesta pro vlastní modely.
- M365 E3/E5 tenant → ověřit aktuální licenční stav (je E5? Má firma AI add-on?).
- SSO stav → podmínka pro bezpečné nasazení jakéhokoliv enterprise AI nástroje.

---

## A3: Stakeholder mapa

### Primární stakeholdeři (nutné zapojit od Fáze 0)

| Stakeholder | Role v programu | Zájem / Obava | Strategie zapojení |
|---|---|---|---|
| CEO / vedení skupiny | Sponzor (ideální) nebo Approver | Konkurenceschopnost, ROI, reputace | Brief 1:1, ukázka business case, výsledky z pilotů zákazníků |
| CTO / ředitel produktu | Technický garant | Architektura, integrace, bezpečnost | Architekt → partner, ne odpůrce; zahrň ho do design fáze |
| HR ředitel | Stakeholder pro change management a training | Dopad na role, pracovní právo, EU AI Act | Zapoj brzy, jeho/její tým je klíčovým delivery kanálem školení |
| Bezpečnostní ředitel / CISO | Gate-keeper nástrojů | Datová bezpečnost, GDPR, audit trail | Proaktivní bezpečnostní briefy, dej mu/jí DPA dokumentaci dopředu |
| Vedoucí business divisions | Zákazníci programu | Výsledky pro jejich tým, ne overhead | Use-case first — popiš přínos jejich lidem konkrétně |
| AI for Business tým | Interní experti + potenciální ambasadoři | Uznání jejich expertise, synergie | Zapoj jako spolupracovníky, ne konkurenci |
| IT oddělení | Implementační partner | Bezpečnost, integrace, podpora | Definuj RACI jasně — ty navrhuješ, oni schvalují tech stack |
| Zaměstnanci (early adopters) | Ambasadoři a pilotní skupina | Čas, smysluplnost, strach ze ztráty práce | Transparentní komunikace, konkrétní přínos, volná participace |

### Stakeholder engagement plán (IPMA lens)

IPMA ICB4 definuje stakeholder engagement jako kontinuální kompetenci, ne jednorázovou aktivitu. Pro každého klíčového stakeholdera vedeš záznam:
- Aktuální postoj (supporter / neutral / skeptic / blocker)
- Klíčová otázka nebo obava
- Plánovaný touchpoint (kdy, jak, co sdělíš)
- Výsledek posledního touchpointu

Tento záznám je živý dokument, aktualizovaný po každém setkání.

---

## A4: As-Is audit AI v organizaci

### Co auditujeme a jak

**Cíl auditu:** Zjistit faktuální stav, ne předpokládaný. Výstup slouží jako baseline pro měření pokroku a jako argument pro management.

**Metody:**
1. Anonymní průzkum (Teams/Google Forms) — 5–7 otázek, 10 minut, dobrovolný.
2. Strukturované rozhovory s vedoucími týmů — 45 minut, focus na pain pointy, ne AI.
3. IT audit — záznam o nástrojích v síti (proxy logy, SaaS registrace, platby kartou).
4. Rozhovory s AI for Business týmem — co prodávají, jak, jaké jsou nejčastější otázky zákazníků.

**Dotazník pro průzkum:**

```
1. Jaké AI nástroje aktuálně používáš pro práci? (více odpovědí)
   □ Microsoft Copilot  □ ChatGPT  □ Claude  □ Gemini  □ GitHub Copilot
   □ Jiné: ______  □ Nepoužívám žádné

2. Jak často AI nástroj skutečně použiješ?
   □ Denně  □ Několikrát týdně  □ Jednou za čas  □ Zatím vůbec

3. K čemu AI hlavně používáš? (volná odpověď nebo check: psaní textů / analýza / kód / překlady / schůzky / jiné)

4. Co ti na AI vadí nebo co ti chybí? (volná odpověď)

5. Máš pocit, že víš, co se s daty, která zadáváš do AI nástroje, děje?
   □ Ano  □ Částečně  □ Ne  □ Nikdy jsem o tom nepřemýšlel/a

6. Kdyby firma zaplatila a schválila konkrétní AI nástroj, využil/a bys ho?
   □ Určitě ano  □ Pravděpodobně  □ Nevím  □ Pravděpodobně ne
```

**Výstupy auditu:**
- Přehled nástrojů v reálném použití (schválené i Shadow AI)
- Typy úkolů, kde AI pomáhá nebo chybí
- Úroveň digitálního komfortu zaměstnanců
- Identifikované bezpečnostní rizika (Shadow AI nástroje bez DPA)
- Identifikovaní early adopters pro pilotní skupiny
- Data readiness — jsou firemní data strukturovaná a dostupná pro AI?

---

---

# ČÁST B — STRATEGIE A GOVERNANCE

---

## B1: Strategický přístup — Value First, AI Powered

### Proč ne čistý „AI First"

Čistý AI-first přístup ("vše řešíme přes AI") je pro firmu Seyforova profilu nevhodný ze dvou důvodů:

**Provozní důvod:** Firma s 34 produkty a 2 200 zaměstnanci má rozsáhlé spektrum úkolů — od zákaznické podpory přes vývoj kódu po finanční reporting. Ne každý z nich se AI hodí. Blanketní mandát "AI first" vytváří cargo cult adoption: lidi AI začnou používat na nevhodné úlohy, výsledky budou špatné a důvěra se zhroutí.

**Obchodní důvod:** Seyfor zákazníkům prodává pragmatické AI nasazení. Interní chaos nebo přeslechnutí by podrývalo tuto credibility.

### Value First, AI Powered — definice

> Při každém novém procesu nebo řešení problému se ptáme: kde je hodnota a co ji blokuje? AI nasadíme tam, kde jasně odstraní blokaci nebo zrychlí cestu k hodnotě o 40 %+. Jinde ne.

**Test před nasazením AI na libovolný use-case:**
1. Kde je aktuální pain? (čas, chyba, kapacita, rychlost)
2. Je příčina tohoto painu procesní nebo kapacitní?
3. Pokud kapacitní nebo rychlostní — může AI pomoci o ≥40 %?
4. Existuje bezpečný, schválený nástroj?
5. Jak to změříme?

Pokud na otázku 3 nebo 5 nemáme odpověď, nevydáváme zelenou.

**AI-augmented vs. AI-first (z dodaných dokumentů):**

Správný přístup je AI-augmented — porovnáváme práci bez AI vs. s AI na konkrétním úkolu. Člověk zůstává rozhodující vrstvou, AI zrychluje nebo rozšiřuje. Toto je zároveň obhajitelná pozice vůči zaměstnancům (nenahrazuje, pomáhá) i vůči regulátorovi (human oversight u high-risk use-cases).

---

## B2: AI Governance framework

### Struktura governance

**AI Steering Committee**
- Složení: AI Adoption Lead (ty) + zástupce IT Security (CISO nebo jmenovaný) + zástupce businessu (rotující — vedoucí divize, která aktuálně pilotuje) + HR (pro change management a EU AI Act compliance)
- Frekvence: Měsíčně
- Odpovědnost: Schvalování nových nástrojů, review use-case registru, eskalace incidentů, kvartální reporting managementu
- Sekretariát: AI Adoption Lead

**AI Adoption Lead (ty)**
- Operativní vedení programu
- Správa Approved Tools List a use-case registru
- Koordinace AI Champions
- Reporting Steering Committee a managementu
- Facilitace workshopů a trainingu

**AI Champions (jeden na každý tým/divizi)**
- Profil: Early adopter, respektovaný kolega, ne nutně technicky nejzdatnější
- Role: Lokální bod kontaktu, sdílení know-how, sběr feedback, účast na měsíčních AI Champion meetinzích
- Co dostávají: Přístup k nástrojům dříve, přímé konzultace s tebou, uznání a viditelnost

**IT oddělení — delivery partner**
- Technické nasazení schválených nástrojů (SSO, DLP, tenant konfigurace)
- Bezpečnostní review nástrojů před schválením
- Monitoring (usage, bezpečnostní incidenty)
- Nenasazuje nástroje bez schválení Steering Committee

---

### Governance dokumenty — minimální sada

**1. AI Policy (max. 2 strany A4)**
Obsah (viz šablona v Příloze P4):
- Co je povoleno, co zakázáno, s jakými nástroji
- Klasifikace dat: co smí do AI (veřejné, interní nízká citlivost), co nesmí (osobní údaje, finanční výsledky, zdrojový kód proprietary, M&A informace)
- Povinnosti uživatele: ověřit výstupy, neuvádět jako svůj bez revize, hlásit problémy
- Kde najít schválené nástroje a podporu

**2. Approved Tools List (živý SharePoint dokument)**
Pro každý nástroj: název, kategorie, schválená použití, bezpečnostní tier, owner (kdo obnovuje licenci a DPA), datum posledního review.

**3. Use-case registry (živý dokument)**
Viz šablona Příloha P3.

**4. AI Incident Log**
Co, kdy, kdo, dopad, jak bylo vyřešeno, co se změní. Spravuje AI Adoption Lead, sdílí se Steering Committee.

---

### Data klasifikace pro AI použití

```
TŘÍDA A — Nikdy do AI bez schváleného secure prostředí
  - Osobní údaje zaměstnanců nebo zákazníků (GDPR)
  - Finanční výsledky a projekce
  - Zdrojový kód proprietary produktů
  - M&A informace, obchodní tajemství
  - Smluvní podmínky s konkrétními zákazníky

TŘÍDA B — Povoleno pouze ve schválených enterprise nástrojích (DPA podepsáno, EU data residency)
  - Interní projektová dokumentace
  - Procesní dokumenty a metodiky
  - Obchodní prezentace bez cen/smluv
  - HR procesy (JD, onboarding materiály — bez jmen)

TŘÍDA C — Volně použitelné v jakémkoliv schváleném nástroji
  - Veřejně dostupné informace
  - Obecné texty, šablony, brainstorming bez citlivého kontextu
  - Překlady obecného obsahu
  - Anonymizované příklady pro trénink nebo dokumentaci
```

---

## B3: AI nástrojový landscape a rozhodnutí

### Primární platforma — doporučení pro Seyfor

Seyfor je Microsoft/Azure partner s pravděpodobně silnou M365 základnou. Toto určuje přirozenou primární platformu.

**Microsoft 365 Copilot — první volba pro broad adoption**

Argumenty pro nasazení jako primárního nástroje:
- Nativní integrace do Teams, Outlook, SharePoint, Word, Excel, PowerPoint — nulová změna toolingu pro uživatele.
- Data zůstávají v M365 EU Data Boundary tenantu — GDPR compliance nativně.
- SSO přes Microsoft Entra ID — bezpečné, auditovatelné.
- Microsoft jako partner Seyforu → potenciálně výhodnější podmínky.
- Seyfor zákazníkům pravděpodobně M365 Copilot prodává nebo implementuje — interní zkušenost = obchodní argument.

Omezení: Kvalita výstupů závisí na stavu dat v M365 tenantu. Pokud je SharePoint neuspořádaný nebo Teams konverzace nízké kvality, Business Chat bude produkovat slabé výsledky. Data readiness je podmínkou, ne bonusem.

**Claude Enterprise / ChatGPT Enterprise — druhá vrstva pro pokročilé uživatele**

Pro PM, analytiky, vývoj, legal, HR — tam, kde je potřeba hlubší reasoning, práce s dlouhými dokumenty nebo tvorba komplexních výstupů. Nasadit jako doplněk M365 Copilot, ne jako náhradu.

Rozhodnutí mezi Claude a ChatGPT Enterprise: Claude je silnější v přesném instruction-following, long-context dokumentech a strukturovaných výstupech — vhodné pro PM a metodické role. ChatGPT Enterprise má silnější ekosystém pluginů a multimodální schopnosti — vhodné pro marketing, kreativu, Research. Pokud musíš vybrat jeden: Claude pro Seyfor profil (IT/B2B/metodická práce) dává smysl; pokud budget dovolí oba, segmentuj podle role.

**GitHub Copilot Enterprise — povinnost pro vývojový tým**

Jestliže Seyfor vyvíjí 34 produktů, GitHub Copilot Enterprise je nejvyšší ROI AI investicí ve firmě. Code generation, code review, PR summaries, dokumentace. Toto není součást tvého programu jako primární agenda — ale je to use-case, který musíš koordinovat s CTO a vývojovými týmy.

**Azure OpenAI Service — pro vlastní modely a integrace**

Pro interní chatboty (HR bot, IT helpdesk bot), RAG-based knowledge retrieval, automatizace procesů. Seyfor zákazníkům podobná řešení staví (KB Teams chatbot) — vhodné stavět a interně otestovat analogická řešení, než je prodají dalším zákazníkům. Toto je Strategic Bet, ne Quick Win.

**Atlassian Intelligence (Jira/Confluence AI)**

Pokud Seyfor interně používá Jira a Confluence (pravděpodobné pro PM a vývoj), Atlassian Intelligence přidává přímou hodnotu: generování epic/story z popisu, shrnutí stránek, smart search. Nízká náročnost nasazení — je součástí existující Atlassian licence na vyšší tierech.

---

### Rozhodovací framework pro výběr nástroje

Před schválením každého nového AI nástroje odpověz na 5 otázek:

1. **Problem fit:** Je tento nástroj nejlepší řešení tohoto konkrétního use-casu, nebo jen "cool tool"?
2. **Security gate:** DPA podepsáno? EU data residency? Zero training potvrzen?
3. **Integration fit:** Integruje se s existujícím ekosystémem (SSO, audit log), nebo vytváří silo?
4. **Adoption probability:** Bude ho cílová skupina skutečně používat, nebo jen ve chvíli nadšení?
5. **Ownership:** Kdo je owner — kdo obnovuje licenci, kdo školí, kdo řeší incidenty?

Bez kladné odpovědi na všech 5 bodů nástroj neschválíš.

---

## B4: Bezpečnost, GDPR a EU AI Act

### EU AI Act — co se týká Seyforu konkrétně

Seyfor je ve specifické pozici: je zároveň **uživatelem** AI (interní adopce) i **poskytovatelem** AI řešení zákazníkům. Každá z těchto rolí má jiné povinnosti.

**Jako interní uživatel (relevantní pro tvůj program):**

- Většina interních produktivitních use-cases (Copilot, tvorba dokumentů, code generation) = minimální nebo omezené riziko → žádné zvláštní povinnosti mimo transparentnost.
- HR use-cases (hodnocení zaměstnanců, screening životopisů) = potenciálně vysoké riziko → nutná dokumentace, human oversight, a v budoucnu pravděpodobně registrace v EU databázi.
- Interní chatboti dostupní zaměstnancům musí být označeni jako AI (omezené riziko → transparentnost).

**Jako poskytovatel AI řešení zákazníkům (agenda pro koordinaci s produktovým týmem):**

- Systémy pro zákazníky v HR nebo úvěrovém rozhodování = vysoké riziko, přísné povinnosti.
- Toto primárně řeší produktový a legal tým, ale AI Adoption Lead by měl zabezpečit, aby interní governance nepobíhala odděleně.
- Seyfor je členem ČAUI — využij tuto síť pro aktuální interpretace EU AI Act.

### Checklist bezpečnostní readiness (pro každý nový nástroj)

- [ ] DPA (Data Processing Agreement) podepsáno a archivováno
- [ ] Datová rezidence potvrzena písemně (EU nebo odpovídající záruky)
- [ ] Zero training na firemních datech — smluvně ošetřeno
- [ ] SSO integrace přes Entra ID — ano / datum implementace
- [ ] Audit log aktivní — kdo, co, kdy zadával (nutné pro compliance)
- [ ] DLP politika v M365 zahrnuje tento nástroj nebo výstupy z něj
- [ ] Uživatelé proškoleni (data klasifikace, co do nástroje nesmí)
- [ ] Owner jmenován — jméno, kontakt
- [ ] Exit plán — co se stane s daty při ukončení smlouvy

### Shadow AI — akutní riziko

Shadow AI je v 2026 pravděpodobně největší bezpečnostní riziko. Ve firmě s 2 200 zaměstnanci a vyšším technickým profilem je jisté, že desítky nebo stovky lidí ChatGPT nebo podobné nástroje již používají — s firemními daty, bez DPA, bez vědomí IT.

Správná reakce není zákaz, ale substituce: poskytni lidem bezpečný, schválený nástroj, který je alespoň stejně dobrý. Zákaz bez alternativy shadow AI neeliminuje — jen ho přežene pod povrch.

Akce: IT audit Shadow AI (proxy logy) → prezentace výsledků managementu → schválení bezpečných alternativ → komunikace k zaměstnancům → monitoring.

---

---

# ČÁST C — PROGRAMOVÝ PLÁN

Celý program je strukturován do 8 fází. Fáze 0 a 1 jsou sekvenční a kritické. Fáze 2–7 se mohou částečně překrývat, jakmile je základ stabilní. Program se řídí IPMA principy benefits realizace — každá fáze má definované výstupy a měřitelná kritéria přechodu do další fáze.

**Celková časová osa:** 18–24 měsíců pro plnou adopci ČR. Ostatní země dle prioritizace a výsledků ČR pilotu.

---

## C0: Fáze 0 — Mandát a sponzor (Týden 1–2)

### Proč tato fáze existuje

Největší příčina selhání AI adoption programů v mid-size firmách není technologie ani budget — je to nedostatečný mandát. Bez explicitního schválení od nejvyššího vedení jsi konzultant bez pravomocí. Každé rozhodnutí (nástroj, politika, budget, čas zaměstnanců) bude eskalace. Program se zadrhl.

### Co musíš získat v Fázi 0

**1. Jmenování a rozsah pravomocí**
Písemně (e-mail nebo interní memo) od CEO nebo CTO:
- Tvoje role je definována a schválena.
- Program má přidělený budget (byť orientační).
- Vedoucí týmů jsou instruováni ke spolupráci (průzkum, rozhovory, pilotní skupiny).

**2. Jmenování sponzora programu**
Sponzor je člen vedení, který za program ručí na boardu. Ideálně CEO nebo CTO. Realisticky: ten, komu AI přináší osobní benefit (CTO — technická kompetence firmy; Chief Sales Officer — prodejní argument). Bez sponzora jsi bez politické ochrany.

**3. Souhlas s Governance strukturou**
Steering Committee: složení, frekvence, pravomoci. Toto schvaluje management, ne ty.

### Jak Fázi 0 uchopíš

Připrav jednorázový Management Brief (1–2 strany nebo 10 slidů):
- Kde jsme dnes: pravděpodobný stav Shadow AI, příležitost
- Co navrhujeme: program v 8 fázích, timeline, orientační budget
- Co potřebujeme: mandát, sponzor, cooperation commitment
- Co je na stole, pokud ne: competitive risk (zákazníci budou očekávat AI-savvy dodavatele)

Tón: "Toto je obchodní příležitost, ne IT projekt."

**Výstup Fáze 0:**
- [ ] Písemný mandát a rozsah pravomocí
- [ ] Jmenovaný sponzor programu
- [ ] Schválená Governance struktura
- [ ] Orientační budget přidělen nebo proces jeho schválení spuštěn

---

## C1: Fáze 1 — Discovery (Analýza prostředí) (Týden 2–6)

### Co děláš v Discovery

**Průzkum zaměstnanců** — anonymní dotazník (viz A4). Cíl: reálný stav, ne domněnky.

**Rozhovory s vedoucími týmů** — 30–45 minut každý. Otázky cíleny na pain pointy, ne na AI:
- "Kde vaši lidé tráví nejvíc opakující se práce?"
- "Co vás brzdí v dodávání hodnoty zákazníkům nebo interně?"
- "Kde stojíte před bottleneckem — kde jeden člověk blokuje ostatní?"
- AI se ptej až jako třetí krok: "Napadá vás, kde by mohl AI pomoci?"

**IT audit** — s IT bezpečnostním týmem: jaké nástroje jsou aktivní v síti, jaké SaaS je placeno, jaké domény jsou navštěvovány. Shadow AI detekce.

**Rozhovor s AI for Business týmem** — co prodávají, jaké jsou nejčastější zákaznické otázky, co zákazníkům nejvíce brání v adopci. Tyto poznatky jsou gold — zákazníci Seyforu jsou analogie interního prostředí.

**Data readiness assessment** — jak jsou organizovaná firemní data v M365/SharePoint/Confluence? Existuje taxonomy? Je obsah aktuální? (Kritické pro M365 Copilot efektivitu.)

### Výstupy Discovery

1. **As-Is mapa AI** — kdo co používá, co funguje, kde jsou rizika.
2. **Pain point katalog** — seřazený seznam problémů podle frekvence a závažnosti.
3. **Data readiness zpráva** — stav datové základny, co je třeba udělat před M365 Copilot nasazením.
4. **Shadow AI zpráva** — jaké neautorizované nástroje jsou v provozu, jaký je risk.
5. **Stakeholder assessment update** — kdo je supporter, kdo skeptik, kdo blocker.

**Výstup Fáze 1:**
- [ ] Průzkum dokončen, data zpracována
- [ ] Rozhovory s vedoucími proběhly (min. 5–8 rozhovorů)
- [ ] IT audit dokončen
- [ ] 5 dokumentů výše existuje v první verzi
- [ ] Discovery zpráva sdílena se sponzorem

---

## C2: Fáze 2 — Design a prioritizace (Týden 6–10)

### Use-case prioritizace (viz také D1)

Na základě Discovery výstupů sestavíš prioritizovaný use-case backlog. Každý use-case projde RICE-like scoringem:

| Kritérium | Váha | Jak skórovat |
|---|---|---|
| Business dopad (čas/kvalita/objem) | 35 % | 1–5: 1=marginální, 5=transformační |
| Frekvence (jak často se úkol vyskytuje) | 25 % | 1–5: 1=měsíčně, 5=denně |
| Rychlost implementace | 25 % | 1–5: 1=6+ měsíců, 5=do 2 týdnů |
| Datová dostupnost | 15 % | 1–5: 1=data neexistují, 5=čistá a přístupná |

Top 3 skórující use-cases jdou do pilotní fáze. Ostatní do backlogu s plánovanými daty přehodnocení.

### Design pilotů

Pro každý pilotní use-case definuješ:
- **Problém (1 věta):** Co konkrétně bolí a proč.
- **AI řešení (1 věta):** Jaký nástroj, jak použitý.
- **Pilotní skupina:** 5–15 lidí, kdo konkrétně, jaký tým.
- **Baseline měření:** Jak dlouho úkol trvá dnes? Jak je hodnocena kvalita?
- **Success kritérium:** Co musí nastat za 4 týdny, aby byl pilot úspěšný.
- **Risks:** Co může pilot pokazit (kvalita dat, ochota uživatelů, technické bariéry).

### Design governance dokumentů

Fáze 2 je vhodný čas připravit:
- Draft AI Policy (dle šablony P4)
- Draft Approved Tools List (na základě Discovery + prioritizovaných use-cases)
- Draft Data klasifikace

Tyto dokumenty půjdou do Fáze 3 ke schválení managementem.

**Výstup Fáze 2:**
- [ ] Prioritizovaný use-case backlog existuje
- [ ] 3 pilotní use-cases mají plné design dokumenty
- [ ] Draft AI Policy připraven
- [ ] Draft Approved Tools List připraven
- [ ] Pilot skupiny identifikovány (lidé souhlasí)

---

## C3: Fáze 3 — Prezentace managementu a schválení (Týden 10–12)

### Jak Management Presentation strukturovat

Toto je nejdůležitější prezentace celého programu. Má dva cíle: schválení politik a získání aktivní podpory — ne jen tolerance.

**Struktura prezentace (30 minut, max. 12 slidů):**

| Slide | Obsah | Čas |
|---|---|---|
| 1 | Kde jsme (Discovery výsledky — fakta, ne dojmy) | 3 min |
| 2 | Co to stojí (Shadow AI rizika, konkrétní čísla) | 2 min |
| 3 | Příležitost (benchmarky z trhu, zákaznická relevance) | 2 min |
| 4 | Náš přístup (Value First, AI Powered — ne AI chaos) | 2 min |
| 5 | Co schvalujeme dnes (Policy, nástroje, budget, pilotní fáze) | 3 min |
| 6–10 | Pilotní use-cases (1 slide každý — problém, řešení, skupina, měření) | 5 min |
| 11 | Plán a timeline (přehledná roadmapa) | 2 min |
| 12 | Co potřebujeme od vás (konkrétní akce + signoff) | 1 min |

**Klíčové zásady pro tuto prezentaci:**
- Každý slide má 1 konkrétní zprávu, ne 5 odrážek.
- Discovery data mluví za sebe — neinterpretuj, ukázuj fakta.
- Shadow AI zpráva je argumentem pro action, ne pro trest.
- Tón: "Jsme před rozhodnutím, ne v krizi."
- Neukončuj prezentaci otevřenou diskusí — ukončuj konkrétními akcemi ke schválení.

### Co schvalujeme v Fázi 3

Požadavky na schválení:
1. AI Policy (verze 1.0) — závazná pro celou firmu
2. Approved Tools List (verze 1.0) — jaké nástroje jsou povoleny a financovány
3. Budget pro pilotní fázi — konkrétní číslo
4. Uvolnění času pilotních skupin — managers musí vědět, že jejich lidé participují
5. Komunikační mandát — můžeš o programu komunikovat interně pod hlavičkou vedení

### Post-management prezentace

Po schválení okamžitě:
1. Rozešli schválené dokumenty (Policy, Tools List) příslušným kanálem (e-mail od sponzora nebo CTO, nikoliv od tebe).
2. Uspořádej informační session pro vedoucí týmů (30 minut, Teams call) — "co bylo schváleno, co to pro vás znamená, jak vám pomůžeme".
3. Připrav interní komunikaci k zaměstnancům (viz C6 — change management komunikace).

**Výstup Fáze 3:**
- [ ] Management prezentace proběhla
- [ ] AI Policy v1.0 schválena a zveřejněna
- [ ] Approved Tools List v1.0 schválen a zveřejněn
- [ ] Budget pro piloty schválen
- [ ] Interní komunikace rozeslána

---

## C4: Fáze 4 — Pilotní projekty (Týden 12–18)

### Struktura pilotu

Každý pilot trvá 4–5 týdnů. Tři piloty mohou běžet paralelně, pokud jsou v různých týmech.

**Týden 1 pilotu: Setup**
- Onboarding pilotní skupiny (30 minut, živě nebo Teams) — co budeme dělat, jak, proč, jak hlásit problémy.
- Technické zprovoznění (IT: SSO, licence, přístupy) — musí být hotové PŘED kick-offem, ne během.
- Baseline měření — zaznamenej aktuální čas/kvalitu/objem pro pilotní úkol.
- Přidělení AI Champions do každé skupiny — jejich role: sbírat zpětnou vazbu, být první pomocník.

**Týdny 2–4 pilotu: Provoz**
- Týdenní 15-minutový check-in s pilotní skupinou (Co funguje? Co ne? Co jste zkusili?)
- Průběžný záznam: kolikrát nástroj použili, na co, s jakým výsledkem.
- Eskalace technických problémů na IT okamžitě.

**Týden 5 pilotu: Vyhodnocení**
- Kvantitativní: čas po vs. čas před, počet použití, objem zpracovaného.
- Kvalitativní: rozhovor nebo dotazník — "Doporučil/a bys to kolegovi? Co bys změnil/a?"
- Rozhodnutí: Scale up / Upravit a opakovat / Ukončit (důvod zdokumentován).

### Fallback procesy

Pro každý pilotní use-case definuj fallback — co dělá tým, pokud AI nástroj selže, je nedostupný nebo produkuje nepoužitelné výstupy. AI nesmí být single point of failure pro operativu. Toto je zejména důležité u týmů blízko zákazníka nebo u časově kritických procesů.

### Co dělat s výsledky pilotu

Pilotní výsledky jsou vstup pro Management Update (doporučuji po ukončení všech 3 pilotů, 20-minutový briefing):
- Co jsme otestovali a výsledky (konkrétní čísla)
- Co doporučujeme: které use-cases škálovat, které upravit
- Co potřebujeme dále: budget pro rollout, kapacita IT pro nasazení

**Výstup Fáze 4:**
- [ ] 3 piloty proběhly a jsou vyhodnoceny
- [ ] Kvantitativní a kvalitativní výsledky zdokumentovány
- [ ] Rozhodnutí o každém pilotu (scale/adjust/stop) je schváleno sponzorem
- [ ] Management Update proběhl
- [ ] Prompt knihovna začala být budována (z pilotů vzejdou první ověřené prompty)

---

## C5: Fáze 5 — Workshopy a enablement (Průběžně od Fáze 4)

### Principy designu workshopů

Workshopy u Seyforu nesmí být školení o AI. Musí být workshops o konkrétní práci konkrétního týmu s AI.

Špatný workshop: "Jak funguje GPT-4 a jaké jsou jeho možnosti"
Správný workshop: "Jak ušetřit 2 hodiny týdně na statusech pro management — živá ukázka v Jira + Copilot"

Každý workshop je navržen pro specifické publikum a specifický use-case, který je pro ně relevantní.

---

### Workshop menu pro Seyfor

**Workshop A: AI Fundamentals pro netechnické uživatele (90 min)**
- Publikum: Obchod, HR, administrativa, management
- Obsah: Co AI umí a neumí (fakta, ne hype), jak pracovat s nástrojem (live demo), data klasifikace (co nesmíš zadat), 3 konkrétní use-cases pro jejich roli
- Formát: 30 min teorie + 60 min hands-on s reálnými úkoly z jejich práce
- Výstup pro účastníky: Vytvoří vlastní první prompt pro svůj nejčastější úkol

**Workshop B: AI pro PM a projekt delivery (2 hodiny)**
- Publikum: Projektový management, delivery týmy, PM v technických rolích
- Obsah: Generování Jira ticketů z podkladů, tvorba meeting shrnutí a action items, status reporty, scope dokumenty, rizikový log
- Formát: 30 min teorie + 90 min živé práce s reálnými projekty (přinesou vlastní materiály)
- Výstup: Každý odchází s minimálně jedním ověřeným workflow

**Workshop C: AI pro vývoj a technické role (3 hodiny)**
- Publikum: Vývojáři, DevOps, IT architekti
- Obsah: GitHub Copilot workflow, code review, dokumentace kódu, testování, bezpečnostní aspekty AI-generovaného kódu
- Formát: Hands-on, pair programming s AI asistencí

**Workshop D: AI Governance pro vedoucí (60 min)**
- Publikum: Team leads, middle management
- Obsah: Co znamená EU AI Act pro jejich tým, jak spravovat AI použití v týmu, jak reportovat problémy, jak podporovat AI Champions
- Formát: Interaktivní diskuze, case studies, scénáře

**Workshop E: AI pro obchod a presales (90 min)**
- Publikum: Obchodní tým, presales konzultanti
- Obsah: Jak AI pomáhá zákazníkům (znáte to z produktu) vs. jak vám pomáhá v každodenní prodejní práci, příprava nabídek, zákaznický research, follow-up e-maily
- Strategická poznámka: Obchodní tým musí být AI-fluent, protože zákazníci Seyforu se na AI ptají. Toto je obchodní argument pro rychlou adopci u tohoto segmentu.

---

### AI Champions program — struktura

**Výběr AI Champions:**
- Jeden na každou větší divizi nebo produktový tým.
- Kritéria: Zájem o AI (ne nutně expertíza), respektovaný kolega, ochota sdílet a pomáhat, čas pro extra aktivitu (dohodnut s managerem).
- Výběr probíhá spolupracovně s vedoucími — ne shora jmenován, ale navržen a potvrzen.

**Onboarding AI Champions (půldenní workshop + follow-up):**
- Hlubší technický trénink než ostatní zaměstnanci.
- Přístup k nástrojům a pilotním programům dříve.
- Role a odpovědnosti jasně definovány.
- Přímý přístup k tobě (Slack/Teams kanál, pravidelné 1:1).

**Měsíční AI Champions meetingy (60 min):**
- Co se děje v mém týmu — co funguje, co ne.
- Sdílení tipů a use-cases across týmy.
- Preview nových nástrojů nebo use-cases.
- Feedback pro program — co je třeba změnit.

---

## C6: Fáze 6 — Řízený rollout a change management (Měsíc 4–12)

### Rollout strategie — vlnový přístup

Nevyvaluješ M365 Copilot pro všech 2 200 lidí najednou. Rolluješ po vlnách:

**Vlna 1 (měsíc 4–5):** Pilotní skupiny + AI Champions. Hotovo.

**Vlna 2 (měsíc 5–7):** Divize s nejvyšším skóre v use-case prioritizaci (obchod, PM, vývoj). Předpoklad: pilotní výsledky jsou pozitivní, infrastruktura je stabilní.

**Vlna 3 (měsíc 7–10):** Zbývající divize v ČR. Standardizovaný onboarding, dostupné workshopy, prompt knihovna k dispozici.

**Vlna 4 (měsíc 10–18):** Ostatní země — s upravenou dokumentací, respektující lokální legislativu a jazyk.

**Podmínky přechodu mezi vlnami:**
- Technická infrastruktura vlny N je stabilní (min. 2 týdny bez kritických incidentů).
- AI Champions vlny N jsou aktivní a dostupní pro vlnu N+1.
- Governance dokumenty jsou aktualizovány o zkušenosti z vlny N.

---

### Change management komunikační plán

**Segmentace příjemců a klíčová zpráva:**

| Segment | Klíčová zpráva | Formát | Timing |
|---|---|---|---|
| Celá firma | "AI zavádíme řízeně a bezpečně — ne chaos, ale příležitost" | E-mail od sponzora | Před Vlnou 2 |
| Vedoucí týmů | "Tady je konkrétně co to znamená pro váš tým a kdy přijdete na řadu" | Teams call + dokument | Týden před Vlnou jejich týmu |
| Zaměstnanci | "Tady je konkrétně co nového umíte a kde najdete pomoc" | Workshop + Teams kanál | Při onboardingu na nástroje |
| IT tým | "Tady jsou technické specifikace a vaše role v rollout procesu" | Technický brief | Průběžně |

**Trvalé komunikační kanály:**
- **Dedikovaný Teams kanál #ai-adopce** — novinky, tipy, sdílení use-cases, otázky. Spravuje AI Adoption Lead + AI Champions.
- **Měsíční "AI tip of the month"** — sdíleno v interním newsletteru nebo Teams.
- **Prompt knihovna na SharePointu** — živý, veřejně přístupný dokument pro všechny zaměstnance.

### Jak komunikovat zaměstnancům strach ze ztráty práce

Toto téma nevyhneš. Lépe ho otevřít proaktivně než čekat na otázku.

Doporučená zpráva: "AI v Seyforu je navrhována tak, aby vám odebrala rutinní práci, ne zajímavou práci. Cílem je, aby jste víc času trávili tím, co přináší hodnotu — zákazníkům, projektům, kolegům. Pokud máte konkrétní obavy, pojďme si o nich promluvit — otevřeně."

Co nedělat: Slibovat, že AI nikoho nepropustí. To nemůžeš garantovat a pokud to řekneš a situace se změní, credibilita programu se zhroutí.

---

## C7: Fáze 7 — Post-adopční mentoring a optimalizace (Měsíc 12–24+)

### Co se děje po rollout

Rollout není konec programu — je to teprve začátek udržitelné adopce. Bez strukturovaného post-adopčního přístupu typicky nastane:
- Po prvním nadšení klesá použití nástroje (engagement fatigue)
- Nové funkce nástrojů nejsou adoptovány
- Pokročilé use-cases se neobjeví, protože lidé zůstávají u základů
- AI Champions se z iniciativních ambasadorů stanou pasivními "majiteli problémů"

### Mentoring a průběžný rozvoj

**1:1 konzultace na vyžádání**
Zaměstnanci nebo týmy mohou požádat o 30minutový mentoring session — "pomozte mi zefektivnit tento konkrétní workflow s AI." Dostupnost: AI Adoption Lead nebo AI Champion.

**Pokročilé workshopy (měsíce 12–18)**
Po základní adopci připravíš druhou vlnu pokročilých workshopů:
- Prompt engineering — jak z "dobrých" výsledků dělat "skvělé"
- AI workflow design — jak zapojit AI do složitějších procesů (vícekrokové automatizace)
- AI pro data analýzu — Copilot v Excelu, Power BI Copilot
- Agentic AI — první kroky (Power Automate + AI, jednoduché autonomní workflow)

**AI Champions rozvoj**
Každé půlroční AI Champions intensive (půldenní):
- Review výsledků uplynulých 6 měsíců
- Nové schopnosti a nástroje
- Plánování dalšího půlroku
- Zpětná vazba k programu

### Optimalizace na základě dat

Každé čtvrtletí provedeš program review:
- Adoption metriky (kolik lidí aktivně používá, co)
- Outcome metriky (ušetřený čas, kvalita, objem)
- Use-case registry — které use-cases jsou v provozu, které selhaly, co nového
- Governance review — je Policy aktuální? Jsou nástroje stále bezpečné? Přibyly nové regulatorní povinnosti?
- Stakeholder pulse — jak se management dívá na program? Co chce jinak?

Kvartální Management Update (10 minut na steering boardu nebo v pravidelném reportu):
- 3 klíčová čísla (adoption rate, top use-case dopad, bezpečnostní incidenty)
- 1 příkladová success story (konkrétní tým, konkrétní přínos)
- 1 otevřená otázka k rozhodnutí (co dál)

### Identifikace nové vlny use-cases

Každých 6 měsíců spustíš nový mini-Discovery (jednodušší než Fáze 1):
- Co se změnilo ve firmě (nové produkty, nové problémy, nové nástroje)?
- Jaké AI schopnosti jsou nově dostupné na trhu?
- Kde vidí AI Champions nevyužitý potenciál v jejich týmech?

Výsledek: Nové use-cases přidány do backlogu, prioritizovány, pilotovány. Program pokračuje.

---

---

# ČÁST D — OBSAH A NÁSTROJE

---

## D1: Use-case prioritizace pro Seyfor

### Quick Wins — spustit v pilotní fázi

**Automatické meeting summaries (M365 Copilot v Teams)**
- Problém: Každé interní jednání generuje follow-up e-mail nebo Confluence stránku, kterou nikdo nechce psát.
- Řešení: Copilot automaticky generuje shrnutí + action items v Teams.
- Přínos: 20–45 min po každé schůzce ušetřeno, lepší accountability na akcích.
- Podmínka: Teams meeting recording aktivní (ověřit privacy policy a informovat účastníky).

**Jira tickety z e-mailů a přepisů hovorů**
- Problém: Požadavky přicházejí jako e-mail, hovor nebo Teams zpráva — přeložení do strukturovaného Jira ticketu trvá PM 20–40 minut.
- Řešení: Claude nebo ChatGPT Enterprise — strukturovaný prompt, výstup je Jira-ready ticket (title, description, acceptance criteria, priority odhad).
- Přínos: 30–45 minut → 5 minut.
- Poznámka: Tomáš toto osobně používá — je k dispozici jako interní příklad pro onboarding.

**Status reporty z Jira dat**
- Problém: Příprava management status reportu trvá 1–2 hodiny týdně, přestože data jsou v Jira.
- Řešení: M365 Copilot + Jira data export nebo Power Automate pipeline, generování strukturovaného reportu.
- Přínos: Výrazná úspora PM kapacity, konzistentnější formát napříč projekty.

**Sumarizace dlouhých dokumentů (Claude Enterprise)**
- Problém: Technické specifikace, RFP dokumenty, právní podklady — čtení a shrnutí trvá hodiny.
- Řešení: Claude Enterprise dokáže zpracovat 200K+ tokenů — celý dokument na vstupu, strukturované shrnutí na výstupu.
- Přínos: Zejména pro presales, PM onboarding na projekt, legal review.

**Asistovaný vývoj kódu (GitHub Copilot Enterprise)**
- Problém: Rutinní kódovací úkoly, dokumentace, boilerplate.
- Řešení: GitHub Copilot Enterprise — code completion, PR summaries, dokumentace.
- Přínos: Konzistentně reportovaná 20–40% produktivita boost u vývojářů.
- Akce: Koordinovat s CTO a vedoucím vývoje — toto je jejich agenda, ale ty zajistíš governance alignment.

---

### Strategic Bets — plánovat na měsíce 6–18

**Interní knowledge chatbot (Azure OpenAI + RAG)**
- Problém: "Kde najdu X?" je nejčastější otázka na Slacku nebo Teams. Dokumentace je roztříštěná.
- Řešení: RAG-based chatbot nad SharePoint/Confluence data — odpovídá na interní otázky s citacemi zdrojů.
- Přínos: Eliminace opakovaných dotazů, rychlejší onboarding nových zaměstnanců.
- Strategická hodnota: Seyfor toto zákazníkům prodává (KB chatbot na Teams). Interní referenční implementace zvyšuje credibilitu v prodeji.
- Podmínka: Data readiness — SharePoint musí být uklizený před implementací.

**AI-asistovaná tvorba nabídek (Azure OpenAI + CRM)**
- Problém: Obchodní nabídky jsou časově náročné, málo konzistentní.
- Řešení: AI generuje strukturu nabídky z parametrů zákazníka a produktového katalogu.
- Přínos: Kratší sales cycle, konzistentnější kvalita, obchodní tým se soustředí na customizaci, ne na psaní.

**Power Automate + AI pipeline pro reporting**
- Problém: Portfolio reporting pro management je manuálně agregovaný.
- Řešení: Automatický pipeline — data z Jira + AI generovaný narativní komentář → report.

---

## D2: Prompt knihovna — jak ji vybudovat

Prompt knihovna je sdílené aktivum, které se buduje průběžně od Fáze 4. Není to dokument, který vytvoříš a zavřeš — je to živá databáze.

### Struktura každého promptu v knihovně

```
Název: [stručný popis use-case]
Kategorie: [PM / Vývoj / Obchod / HR / Finance / Obecné]
Nástroj: [Claude / Copilot / ChatGPT / GitHub Copilot]
Validován: [datum + jméno validátora]

PROMPT:
[Plný text promptu s instrukcemi]

PŘÍKLAD VSTUPU:
[Ukázka vstupu, ideálně anonymizovaná]

PŘÍKLAD VÝSTUPU:
[Ukázka výstupu — co získáš]

POZNÁMKY:
[Co funguje dobře, kde jsou limity, co upravit pro různé situace]
```

### Jak knihovnu plnit

- Z každého pilotu: 2–5 ověřených promptů.
- Z každého workshopu: účastníci odevzdávají nejlepší prompt, který vytvořili.
- Průběžně: AI Champions přispívají, co funguje v jejich týmu.
- Čtvrtletní review: zastaralé prompty archivovat, aktualizovat, přidávat nové.

### Kde ji hostovat

SharePoint stránka s jednoduchou strukturou (filtrovatelná tabulka dle kategorie/nástroje). Přístupná všem zaměstnancům. Editovatelná AI Adoption Leadem a AI Champions.

---

## D3: Měření adopce a ROI

### Co měřit — tři vrstvy

**Vrstva 1: Aktivita (adoption rate)**
- % zaměstnanců aktivně používajících schválené AI nástroje (min. 3× týdně)
- Počet aktivních use-cases v registry
- Počet absolvovaných workshopů
- Počet příspěvků do prompt knihovny
- Počet AI Champion aktivních aktivit

**Vrstva 2: Výsledky (outcomes)**
- Průměrný čas na klíčové opakující se úkoly (před vs. po — z pilotů)
- Subjektivní spokojenost s AI výstupy (kvartální dotazník, 1–5)
- Počet use-cases v produkčním provozu
- Náklady na nástroje vs. ušetřený čas (ROI výpočet dle vzorce v sekci B)

**Vrstva 3: Rizika**
- Počet AI incidentů (úniky dat, halucinace v produkčních dokumentech, eskalace)
- Počet detekovaných Shadow AI nástrojů (cíl: trend dolů)
- Policy violations hlášené

### Reporting rytmus

| Reporting | Příjemce | Obsah | Frekvence |
|---|---|---|---|
| Program status | Steering Committee | Adoption metriky, use-case status, incidents, open issues | Měsíčně |
| Management briefing | CEO/CTO/sponzor | 3 čísla + 1 success story + 1 rozhodnutí | Kvartálně |
| AI Champions report | AI Champions | Co funguje, co ne, nové use-cases, tipy | Měsíčně |
| Zaměstnanci | Celá firma | Newsletter sekce: AI tip + statistika úspor | Měsíčně |

---

---

# ČÁST E — SEYFOR-SPECIFICKÉ

---

## E1: Interní adopce jako obchodní příležitost

Toto je kritická strategická dimenze, která odlišuje Seyfor od typické firmy zavádějící AI.

**Seyfor prodává AI zákazníkům.** Každý zaměstnanec v obchodní a presales roli musí být schopen glaubwürdig říct: "My to takhle interně používáme." Bez interní adopce je obchodní pozice slabá. S interní adopcí máš živé reference pro zákaznické rozhovory.

**Konkrétní propojení:**

1. **Interní chatbot nad firemními daty = zákaznická reference.** Pokud Seyfor interně nasadí RAG-based Teams chatbot (analog tomu, co stavěl pro Komerční banku), stane se to referenčním projektem. Zákazníci se mohou přijít podívat.

2. **M365 Copilot interní adopce = presales argument.** Pokud zákazník zvažuje Copilot, obchodník Seyforu může říct: "My jsme si tím prošli — tady jsou naše výsledky, tady jsou naše learningy, tady je jak vám s tím pomůžeme."

3. **AI školení pro zaměstnance = produkt, který Seyfor prodává.** Interní školení, která budeš designovat, jsou zároveň pilotními verzemi produktu AI školení pro firmy. Zeptej se AI for Business týmu: co zákazníci chtějí vědět? Co je nejčastější otázka? Zahrň to do interních workshopů — testujete obsah na interní populaci.

4. **Prompt knihovna jako zákaznický deliverable.** Interní prompt knihovna pro PM, vývoj a obchod může být upravenou verzí materiálu, který prodáváš zákazníkům jako součást AI onboarding packagu.

**Akce:** Od počátku koordinuj s AI for Business týmem. Každý čtvrtletní review programu by měl zahrnovat 20minutový brief pro jejich tým: "Co jsme interně zjistili, co vám to říká o zákaznických potřebách."

---

## E2: Multi-country a multi-product aspekty

### Proč je to komplexní

Seyfor operuje v 7 evropských zemích s 34 produkty. Toto přináší:
- Různé jazyky → AI výstupy a prompt knihovny musí být lokalizovány.
- Různé legislativní prostředí → EU AI Act je sice EU-wide, ale implementace se může lišit; lokální pracovní právo pro HR use-cases se liší.
- Různá technická infrastruktura → je jeden M365 tenant nebo každá země svůj?
- Různá kultura a digitální vyspělost → adopce v ČR neproběhne stejně rychle jako v jiné zemi.

### Doporučený přístup pro multi-country rollout

**Fáze 1 program: ČR jako pilotní country**
- Vybuduj model, ověř ho, zdokumentuj výsledky.
- Vše co vytvoříš (Policy, Approved Tools, prompt knihovna, workshop materiály) bude template pro ostatní země.

**Fáze 2: Lokalizace a rollout do dalších zemí**
- Přiřaď lokálního AI Champion koordinátora v každé zemi (senior kolega, který projde AI Champions programem).
- Přeloď governance dokumenty.
- Přizpůsob workshop obsah lokálnímu kontextu (jazyku, lokálním use-casům, kulturnímu stylu komunikace).
- Ověř lokální legislativní požadavky s lokálním legal týmem.
- Neznovuobjevuj kolo — pilotuj ty same use-cases, které fungovaly v ČR, upraven kontext.

### Multi-product specifika

34 produktů = 34 různých produktových týmů s různými AI potřebami. Nebudeš moci navrhovat specifický AI use-case pro každý produkt. Co děláš místo toho:

- Horizontální use-cases (PM, meeting summaries, dokumentace) = stejné pro všechny produktové týmy.
- Vertikální use-cases (AI integrace do samotného produktu) = agenda produktových managerů a CTO, nikoliv AI Adoption Lead programu. Tvoje role: governance alignment a sdílení AI tooling standards.
- AI Champions systém zajistí, že každý produktový tým má interního navigátora, který přizpůsobí horizontální know-how svému kontextu.

---

---

# PŘÍLOHY

---

## P1: Checklist nasazení nového AI nástroje

Před každým schválením nového AI nástroje projdi celý checklist. Bez kladné odpovědi na položky označené ⚠️ nástroj neschvaluješ.

```
SEKCE 1 — BUSINESS FIT
[ ] Jaký konkrétní problém tento nástroj řeší?
[ ] Existuje alternativa v již schváleném ekosystému?
[ ] Kdo jsou primární uživatelé a kolik jich je?

SEKCE 2 — BEZPEČNOST ⚠️
[⚠️] DPA (Data Processing Agreement) podepsáno a archivováno
[⚠️] Datová rezidence potvrzena písemně — EU nebo adekvátní záruky
[⚠️] Zero training na firemních datech — smluvně ošetřeno
[⚠️] Jasné vyjádření k použití dat pro fine-tuning nebo model improvement

SEKCE 3 — INTEGRACE ⚠️
[⚠️] SSO přes Microsoft Entra ID — dostupné nebo v plánu (datum)
[⚠️] Audit log aktivní — kdo, co, kdy (nutné pro compliance)
[ ]  DLP politika pokrývá výstupy z tohoto nástroje
[ ]  Integrace s M365 ekosystémem ověřena (Teams, SharePoint)

SEKCE 4 — ADOPTION A OWNERSHIP
[ ] Owner jmenován — jméno, tým, kontakt
[ ] Training materiály dostupné nebo připraveny
[ ] Feedback kanál definován (jak uživatelé hlásí problémy)
[ ] Renewal datum a podmínky dokumentovány
[ ] Exit plán — co se stane s daty při ukončení smlouvy

SEKCE 5 — COMPLIANCE
[ ] EU AI Act klasifikace ověřena (minimální / omezené / vysoké riziko)
[ ] GDPR: osobní data do nástroje nebudou vkládána bez dalšího posouzení
[ ] Lokální legislativa (pro nasazení mimo ČR): ověřena s lokálním legal týmem
```

---

## P2: RACI matice AI programu

| Oblast rozhodnutí | AI Adoption Lead | Steering Committee | CTO / IT | HR | Sponzor (CEO/CTO) |
|---|---|---|---|---|---|
| AI Policy — schválení | R (připraví) | C (konzultace) | C | C | A (schvaluje) |
| Nový nástroj — schválení | R (připraví, doporučí) | A (schvaluje) | C (tech review) | — | I |
| Budget — schválení | R (navrhne) | R (doporučí) | — | — | A (schvaluje) |
| Use-case prioritizace | R | A | C | C | I |
| Training design | R | I | C | C | I |
| Bezpečnostní incident | R (koordinuje) | A | R (řeší tech) | C (HR dopad) | I |
| Interní komunikace | R (obsah) | I | I | C | A (sign-off klíčových zpráv) |
| AI Champions výběr | R | I | I | C | I |
| Multi-country rollout | R | A | R (tech) | C | A |

*R = Responsible (kdo dělá), A = Accountable (kdo schvaluje), C = Consulted, I = Informed*

---

## P3: Šablona use-case registry

```
ID:           [UC-001, UC-002, ...]
Název:        [stručný popis]
Tým/divize:   
AI nástroj:   
Problém:      [1 věta — co bolí a proč]
Řešení:       [1 věta — jak AI pomáhá]
Stav:         [Nápad / V pilotu / Aktivní / Pozastaveno / Ukončeno]
Owner:        [jméno]
Datum start:  
Success kritérium: [měřitelné]
Baseline:     [čas/kvalita/objem PŘED]
Aktuální výsledek: [čas/kvalita/objem PO — vyplní se po pilotu]
Rizika/poznámky:
```

---

## P4: Šablona AI Policy — minimum viable verze

```
AI POLICY — [Název firmy]
Verze: 1.0 | Datum: [datum] | Schválil: [jméno, funkce]

1. ÚČEL A ROZSAH
Tato politika platí pro všechny zaměstnance [firmy] při použití AI nástrojů 
pro pracovní účely. Nahrazuje jakékoli neformální nebo ústní dohody o AI použití.

2. SCHVÁLENÉ NÁSTROJE
Aktuální seznam schválených nástrojů: [odkaz na Approved Tools List v SharePointu]
Jiné nástroje nesmí být používány pro firemní data bez předchozího schválení.

3. CO NESMÍ DO AI NÁSTROJŮ
Třída A — Nikdy, bez výjimky:
- Osobní údaje zaměstnanců nebo zákazníků
- Finanční výsledky, projekce, M&A informace
- Zdrojový kód proprietary produktů bez schválení CTO
- Smluvní podmínky s konkrétními zákazníky

Třída B — Pouze ve schválených enterprise nástrojích:
- Interní projektová dokumentace
- Obchodní prezentace
- HR procesy (bez osobních jmen)

4. POVINNOSTI UŽIVATELE
- Používat pouze schválené nástroje (viz bod 2)
- Ověřit výstupy AI před předáním nebo finalizací
- Neuvádět AI výstupy jako vlastní bez revize a odpovědnosti za obsah
- Hlásit problémy a incidenty: [kontakt / kanál]

5. HLÁŠENÍ INCIDENTŮ
Jakýkoliv incident (únik dat, halucinace v produkčním dokumentu, bezpečnostní pochybení)
hlásit na: [e-mail / Teams kanál]
Incident je vyšetřen do 48 hodin. Anonymní hlášení je možné přes [kanál].

6. PORUŠENÍ
Porušení této politiky je disciplinárním přestupkem dle pracovního řádu.
Hodnotíme úmysl a dopad — edukativní přístup pro první porušení bez škody, 
formální přestupkové řízení pro opakované nebo závažné porušení.

7. KONTAKTY
AI Adoption Lead: [jméno, e-mail]
IT Security: [kontakt]
Otázky a návrhy: [Teams kanál #ai-adopce]

8. PLATNOST A REVIZE
Tato politika je revidována čtvrtletně. Aktuální verze je vždy dostupná na [SharePoint URL].
```

---

## Závěr — Tvoje role jako průsečík tří světů

Jako AI Adoption Lead v Seyforu nejsi IT manažer, který nasazuje software. Jsi průsečík tří světů:

**Business:** Rozumíš, co firmu pohání, co zákazníci potřebují, kde jsou peníze. AI program musí ukazovat business value — ne technologický výkon.

**Lidé:** IPMA kompetence — stakeholder engagement, change management, komunikace, koučing AI Champions. Technologie selhává tam, kde lidé nejsou připraveni nebo motivováni.

**Architektura:** TOGAF lens — AI není izolovaný nástroj, je to vrstva nad firemní architekturou. Pokud ji nenavrhneš konzistentně s existující infrastrukturou, dat a governance, skončíš za 18 měsíců s AI spaghetti, který nikdo neudržuje.

Seyfor tě dává do výhodné pozice: firma zná AI problematiku zvenčí — prodává ji zákazníkům. Tvůj úkol je zajistit, aby ji znala i zevnitř. A aby to ostatní viděli.

---

*Dokument je živý — každá fáze programu generuje aktualizace. Verze vždy označena datem a číslem.*  
*Vlastník dokumentu: Tomáš Alex, AI Adoption Lead*
