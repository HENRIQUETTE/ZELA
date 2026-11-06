// La liste complète des 30 défis de confiance (fusionnés en quêtes)
const challenges = [
    { w: "Quête 1 : Te reconnecter à toi", d: "Écris 3 choses que tu aimes chez toi, même petites." },
    { w: "Quête 1 : Te reconnecter à toi", d: "Habille-toi proprement comme si tu allais à un grand rendez-vous." },
    { w: "Quête 1 : Te reconnecter à toi", d: "Fais 10 minutes de marche seul, sans téléphone, juste pour respirer." },
    { w: "Quête 1 : Te reconnecter à toi", d: "Prends une photo de toi que tu aimes et garde-la précieusement." },
    { w: "Quête 1 : Te reconnecter à toi", d: "Écris ce que tu veux vraiment dans la vie, sans l'avis des autres." },
    { w: "Quête 1 : Te reconnecter à toi", d: "Coupe les réseaux 2 heures pour couper le bruit extérieur." },
    { w: "Quête 1 : Te reconnecter à toi", d: "Fais une activité que tu adores en solitaire (musique, lecture, cuisine)." },

    { w: "Quête 2 : Petites victoires sociales", d: "Dis bonjour avec le sourire à 3 personnes." },
    { w: "Quête 2 : Petites victoires sociales", d: "Commande ou achète quelque chose toi-même en boutique." },
    { w: "Quête 2 : Petites victoires sociales", d: "Envoie un message amical à quelqu'un à qui tu n'as pas parlé depuis longtemps." },
    { w: "Quête 2 : Petites victoires sociales", d: "Ose dire NON à une sollicitation que tu ne veux pas accepter." },
    { w: "Quête 2 : Petites victoires sociales", d: "Exerce-toi à parler 2 minutes à voix haute devant ton miroir." },
    { w: "Quête 2 : Petites victoires sociales", d: "Pose une question dans un groupe ou en public." },
    { w: "Quête 2 : Petites victoires sociales", d: "Fais un compliment sincère à quelqu'un autour de toi." },

    { w: "Quête 3 : Confiance et discipline", d: "Apprends un mot nouveau et place-le dans une phrase aujourd'hui." },
    { w: "Quête 3 : Confiance et discipline", d: "Fais 15 minutes d'exercice physique à la maison." },
    { w: "Quête 3 : Confiance et discipline", d: "Range un espace de ton lieu de vie que tu repousses sans cesse." },
    { w: "Quête 3 : Confiance et discipline", d: "Exprime une pensée ou une création personnelle en public." },
    { w: "Quête 3 : Confiance et discipline", d: "Demande clairement ce dont tu as besoin (aide ou renseignement)." },
    { w: "Quête 3 : Confiance et discipline", d: "Installe-toi pour manger ou te détendre seul dans un lieu public." },
    { w: "Quête 3 : Confiance et discipline", d: "Consigne tes 5 plus grandes réussites passées et relis-les." },

    { w: "Quête 4 : Oser plus grand", d: "Parle de ton projet personnel ou d'application à une personne." },
    { w: "Quête 4 : Oser plus grand", d: "Transmets un savoir ou apprends quelque chose à quelqu'un." },
    { w: "Quête 4 : Oser plus grand", d: "Explore un endroit complètement nouveau par toi-même." },
    { w: "Quête 4 : Oser plus grand", d: "Enregistre ta voix en train de t'exprimer pendant 1 minute, puis écoute." },
    { w: "Quête 4 : Oser plus grand", d: "Pardonne à quelqu'un en silence dans ton cœur." },
    { w: "Quête 4 : Oser plus grand", d: "Accomplis une petite chose qui te faisait peur jusqu'ici." },
    { w: "Quête 4 : Oser plus grand", d: "Offre ton aide à autrui sans rien attendre en retour." },
    { w: "Quête 4 : Oser plus grand", d: "Rédige une lettre à toi-même pour projeter ton année à venir." },
    { w: "Quête 4 : Oser plus grand", d: "Fais le bilan de ton évolution sur un mois et célèbre ta victoire !" }
];

document.addEventListener("DOMContentLoaded", () => {
    let currentDayIndex = 0;
    let isCompleted = false;
    let timerInterval = null;

    const weekLabel = document.getElementById("week-label");
    const dayLabel = document.getElementById("day-label");
    const challengeText = document.getElementById("challenge-text");
    const btnDone = document.getElementById("btn-done");
    const btnPrev = document.getElementById("btn-prev");
    const btnNext = document.getElementById("btn-next");
    const journalInput = document.getElementById("journal-input");
    const btnSaveJournal = document.getElementById("btn-save-journal");
    const journalList = document.getElementById("journal-list");
    const timerDisplay = document.getElementById("timer");
    const btnTimer = document.getElementById("btn-timer");

    if (!weekLabel || !dayLabel || !challengeText || !btnDone || !btnPrev || !btnNext || !journalInput || !btnSaveJournal || !journalList || !timerDisplay || !btnTimer) {
        return;
    }

    function formatTime(totalSeconds) {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    }

    function updateChallengeView() {
        const c = challenges[currentDayIndex];
        weekLabel.innerText = c.w;
        dayLabel.innerText = `FORMULAIRE N°${currentDayIndex + 1}`;
        challengeText.innerText = c.d;

        isCompleted = false;
        btnDone.style.backgroundColor = "var(--primary)";
        btnDone.innerText = "Tamponner & Valider ✓";
    }

    btnPrev.addEventListener("click", () => {
        if (currentDayIndex > 0) {
            currentDayIndex--;
            updateChallengeView();
        }
    });

    btnNext.addEventListener("click", () => {
        if (currentDayIndex < challenges.length - 1) {
            currentDayIndex++;
            updateChallengeView();
        }
    });

    btnDone.addEventListener("click", () => {
        isCompleted = !isCompleted;
        if (isCompleted) {
            btnDone.style.backgroundColor = "var(--success)";
            btnDone.innerText = "Formulaire Validé ! 🛡️";
        } else {
            btnDone.style.backgroundColor = "var(--primary)";
            btnDone.innerText = "Tamponner & Valider ✓";
        }
    });

    document.querySelectorAll(".nav-tab").forEach(tabBtn => {
        tabBtn.addEventListener("click", () => {
            document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
            document.querySelectorAll(".nav-tab").forEach(b => b.classList.remove("active"));

            const tabId = tabBtn.getAttribute("data-tab");
            const targetTab = document.getElementById(`tab-${tabId}`);
            if (targetTab) {
                targetTab.classList.add("active");
            }
            tabBtn.classList.add("active");
        });
    });

    btnSaveJournal.addEventListener("click", () => {
        const text = journalInput.value.trim();
        if (text !== "") {
            const div = document.createElement("div");
            div.className = "journal-entry";
            const dateStr = new Date().toLocaleDateString("fr-FR");
            div.innerText = `🔒 [${dateStr}] : ${text}`;
            journalList.prepend(div);
            journalInput.value = "";
        }
    });

    btnTimer.addEventListener("click", () => {
        let timeLeft = 120;
        clearInterval(timerInterval);
        btnTimer.disabled = true;
        timerDisplay.innerText = formatTime(timeLeft);

        timerInterval = setInterval(() => {
            timeLeft -= 1;
            timerDisplay.innerText = formatTime(Math.max(timeLeft, 0));

            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                timerDisplay.innerText = "02:00";
                btnTimer.disabled = false;
                alert("Sanctuaire atteint. Reprends ta route l'esprit léger.");
            }
        }, 1000);
    });

    updateChallengeView();
});