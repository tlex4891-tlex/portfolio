# Portfolio - Tom Alex

## Přehled
Osobní portfolio website pro Tomáše Alexe - Business Consultant & Project Manager ve fintech/payments.

**Live URL:** https://tomasalex.com
**GitHub:** https://github.com/tlex4891-tlex/portfolio
**Hosting:** GitHub Pages

## Tech Stack
- Vanilla HTML/CSS/JS (bez build nástrojů)
- GitHub Pages hosting
- Formspree pro kontaktní formulář
- Google Analytics 4

## Struktura souborů
```
/home/tomas/portfolio/
├── index.html      # Hlavní HTML s veškerým obsahem
├── css/style.css   # Styly, light/dark theme, responsive
├── js/main.js      # Interaktivita, přepínání jazyků/témat
├── CNAME           # Custom doména (tomasalex.com)
└── CLAUDE.md       # Tento soubor
```

## Klíčové funkce
- **Dvojjazyčnost (CS/EN):** data-cs a data-en atributy, localStorage persistence
- **Light/Dark mode:** CSS custom properties, localStorage persistence
- **Kontaktní formulář:** Formspree (https://formspree.io/f/xaqewnyd), honeypot spam ochrana
- **Analytics:** Google Analytics 4 (G-28DTM9Q3TZ)

## Sekce webu
1. Hero - úvodní představení
2. O mně - profil a statistiky
3. Projekty - referenční projekty (Mastercard, MOL, VISA/AMCO)
4. Dovednosti - skill karty + nástroje/certifikace
5. Zkušenosti - alternující timeline pracovních pozic
6. Koníčky - grid s ikonami
7. Kontakt - info + formulář
8. Footer

## Workflow
```bash
# Editace souborů
code /home/tomas/portfolio/

# Push změn
cd /home/tomas/portfolio
git add .
git commit -m "Popis změny"
git push

# Změny se projeví na webu do ~1 minuty
```

## Důležité poznámky
- Formspree limit: 50 submissions/měsíc (free tier)
- Při změně textu aktualizovat OBĚ jazykové verze (data-cs i data-en)
- CSS proměnné pro barvy jsou v :root a [data-theme="dark"]
