(function(e) {
    function t(t) {
        for (var i, s, o = t[0], u = t[1], l = t[2], c = 0, h = []; c < o.length; c++) s = o[c], Object.prototype.hasOwnProperty.call(r, s) && r[s] && h.push(r[s][0]), r[s] = 0;
        for (i in u) Object.prototype.hasOwnProperty.call(u, i) && (e[i] = u[i]);
        d && d(t);
        while (h.length) h.shift()();
        return a.push.apply(a, l || []), n()
    }

    function n() {
        for (var e, t = 0; t < a.length; t++) {
            for (var n = a[t], i = !0, o = 1; o < n.length; o++) {
                var u = n[o];
                0 !== r[u] && (i = !1)
            }
            i && (a.splice(t--, 1), e = s(s.s = n[0]))
        }
        return e
    }
    var i = {},
        r = {
            app: 0
        },
        a = [];

    function s(t) {
        if (i[t]) return i[t].exports;
        var n = i[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, s), n.l = !0, n.exports
    }
    s.m = e, s.c = i, s.d = function(e, t, n) {
        s.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, s.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, s.t = function(e, t) {
        if (1 & t && (e = s(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (s.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var i in e) s.d(n, i, function(t) {
                return e[t]
            }.bind(null, i));
        return n
    }, s.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        } : function() {
            return e
        };
        return s.d(t, "a", t), t
    }, s.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, s.p = "";
    var o = window["webpackJsonp"] = window["webpackJsonp"] || [],
        u = o.push.bind(o);
    o.push = t, o = o.slice();
    for (var l = 0; l < o.length; l++) t(o[l]);
    var d = u;
    a.push([0, "chunk-vendors"]), n()
})({
    0: function(e, t, n) {
        e.exports = n("56d7")
    },
    "08b3": function(e, t, n) {},
    "0bd2": function(e, t, n) {},
    "0e85": function(e, t, n) {},
    "143a": function(e, t, n) {
        "use strict";
        var i = n("08b3");
        n.n(i).a
    },
    "1fb9": function(e, t, n) {},
    2376: function(e, t, n) {
        "use strict";
        var i = n("1fb9");
        n.n(i).a
    },
    2657: function(e, t, n) {
        "use strict";
        var i = n("931e");
        n.n(i).a
    },
    "274a": function(e, t, n) {
        "use strict";
        var i = n("0bd2");
        n.n(i).a
    },
    "2a28": function(e, t, n) {},
    "2c27": function(e, t, n) {
        e.exports = n.p + "img/empty.306f5f3d.svg"
    },
    "440c": function(e, t, n) {
        "use strict";
        var i = n("a435");
        n.n(i).a
    },
    "4b5a": function(e, t, n) {
        "use strict";
        var i = n("f6b5");
        n.n(i).a
    },
    "56d7": function(e, t, n) {
        "use strict";
        n.r(t);
        n("e260"), n("e6cf"), n("cca6"), n("a79d");
        var i = n("2b0e"),
            r = n("5530"),
            a = n("a925");
        i["default"].use(a["a"]);
        var s = {
                en: Object(r["a"])({}, n("5ab8")["default"], {
                    help: {
                        howto: ["The Quiz has several questions. The faster you answer the more points you will earn.", "After you have answered all questions, you get a final score and a rank in the leaderboard.", "When the countdown runs out, the round ends and prizes are assigned to the top players."],
                        claimError: "This prize was already claimed",
                        noprize: ["The Quiz has several questions. The faster you answer the more points you will earn.", "After you have answered all questions, you get a final score and a rank in the leaderboard."],
                        replay: "You can replay the quiz to improve your score on the leaderboard."
                    },
                    intro: {
                        title: "It’s Quiz time!",
                        subtitle: "The quicker you answer, the more points you earn.",
                        placeholder: "Type your name...",
                        button: "Start Quiz",
                        info: "characters left",
                        playerLimitError: "Too many players at the same time. Please reload the page and try again in a few minutes."
                    },
                    friends: {
                        title: "Friends",
                        info: "Add friends to compare your current score with theirs. They will appear on this list after they have played one round.",
                        modal: {
                            title: "Add a friend",
                            subtitle: "Type the name of your friend to see their current score.",
                            placeholder: "Type name#1234",
                            button: "Add"
                        }
                    },
                    quiz: {
                        header: {
                            name: "Your Name",
                            score: "Your Score"
                        },
                        question: "Question"
                    },
                    end: {
                        round: "Round",
                        header: {
                            last: "Latest Score",
                            best: "Best Score",
                            rank: "Your Rank",
                            participants: "Participants",
                            prizeButton: "Your Prize",
                            playButton: "Play Again"
                        },
                        countdown: {
                            title: "Countdown",
                            noprize: "Climb to the top of the leaderboard before the countdown runs out!",
                            prizeTopRanking: "Climb to the <strong>top {num}</strong> of the leaderboard before the countdown runs out!",
                            prizeEnoughPoints: " | | Reach <strong>{num}p</strong> before the countdown runs out!"
                        },
                        leaderboard: {
                            title: "Leaderboard",
                            loading: "Loading top scores",
                            loadingFriends: "Loading friends scores",
                            wait: "Please wait...",
                            updating: "Updating Live",
                            info: "Play again in order to get ranked on the new leaderboard.",
                            empty: "No one played the quiz in this round."
                        }
                    }
                }),
                it: Object(r["a"])({}, n("ccbb")["default"], {
                    help: {
                        howto: ["Il Quiz si compone di diverse domande. Piú velocemente risponderai piú punti guadagnerai.", "In base al punteggio finale, otterrai una posizione nella classifica generale.", "Allo scadere del countdown, i premi verranno assegnati ai primi classificati."],
                        claimError: "Questo premio è già stato assegnato",
                        prize: ["Il Quiz si compone di diverse domande. Piú velocemente risponderai piú punti guadagnerai.", "In base al punteggio finale, otterrai una posizione nella classifica generale."],
                        replay: "Puoi ripetere il quiz più volte per migliorare il tuo punteggio nella classifica generale."
                    },
                    friends: {
                        title: "Preferiti",
                        info: "Aggiungi i tuoi amici per confrontare il tuo punteggio con il loro. Il loro punteggio apparirà nella lista dopo aver partecipato ad un round.",
                        modal: {
                            title: "Aggiungi amici",
                            subtitle: "Scrivi l'username e il codice di un tuo amico per vedere il suo punteggio.",
                            placeholder: "Username#1234",
                            button: "Aggiungi"
                        }
                    },
                    intro: {
                        title: "É Ora di Giocare!",
                        subtitle: "Piú velocemente rispondi, piú punti ottieni.",
                        placeholder: "Inserici il tuo nome...",
                        button: "Inizia il Quiz",
                        info: "lettere rimaste",
                        playerLimitError: "Ci sono troppi giocatori online. Per favore riprova tra qualche minuto."
                    },
                    quiz: {
                        header: {
                            name: "Nome",
                            score: "Punteggio"
                        },
                        question: "Domanda"
                    },
                    end: {
                        round: "Round",
                        header: {
                            last: "Punteggio",
                            best: "Migliore",
                            rank: "Posizione",
                            participants: "Partecipanti",
                            prizeButton: "Vai al Premio",
                            playButton: "Gioca Ancora"
                        },
                        countdown: {
                            title: "Countdown",
                            noprize: "Scala la classifica fino alla vetta prima che finisca il tempo!",
                            prizeTopRanking: "Scala la classifica fino alla <strong>posizione {num}</strong> prima che il tempo finisca!",
                            prizeEnoughPoints: " | | Raggiungi <strong>{num}p</strong> prima che il tempo finisca!"
                        },
                        leaderboard: {
                            title: "Classifica",
                            loading: "Caricamento dei risultati",
                            loadingFriends: "Caricamento degli amici",
                            wait: "Attendere...",
                            updating: "In tempo reale",
                            info: "Partecipa di nuovo al quiz per assicurarti un posto nella classifica.",
                            empty: "Nessuno ha partecipato al quiz in questo round."
                        }
                    }
                }),
                sv: Object(r["a"])({}, n("cdc4")["default"], {
                    help: {
                        howto: ["Quizzen har flera frågor. Ju snabbare du svarar desto fler poäng får du.", "Efter att du besvarat alla frågorna, får du din slutgiltiga poäng och din plats på poängtavlan.", "När nedräkningen är klar, slutar rundan och priser delas ut till vinnarna."],
                        claimError: "Detta pris var redan uthämtat",
                        noprize: ["Quizzen har flera frågor. Ju snabbare du svarar desto fler poäng får du.", "Efter att du besvarat alla frågorna, får du din slutgiltiga poäng och din plats på poängtavlan."],
                        replay: "Du kan spela om quizzen för att förbättra din poäng på resultatlistan."
                    },
                    friends: {
                        title: "Vänner",
                        info: "Lägg till vänner för att jämföra din nuvarande poäng med deras. De kommer synas på denna lista efter att de har spelat en runda.",
                        modal: {
                            title: "Lägg till en vän",
                            subtitle: "Skriv in namnet på din vän för att se dess nuvarande poäng.",
                            placeholder: "Skriv namn#1234",
                            button: "Lägg till"
                        }
                    },
                    intro: {
                        title: "Dags för Quiz!",
                        subtitle: "Ju snabbare du svarar, desto fler poäng får du.",
                        placeholder: "Skriv ditt namn...",
                        button: "Starta Quiz",
                        info: "tecken kvar",
                        playerLimitError: "För många samtidiga användare, kom tillbaka om ett par minuter."
                    },
                    quiz: {
                        header: {
                            name: "Ditt Namn",
                            score: "Dina Poäng"
                        },
                        question: "Fråga"
                    },
                    end: {
                        round: "Omgång ",
                        header: {
                            last: "Senaste Resultat",
                            best: "Bästa Resultat",
                            rank: "Din Ranking",
                            participants: "Deltagare",
                            prizeButton: "Din Vinst",
                            playButton: "Börja Om"
                        },
                        countdown: {
                            title: "Countdown",
                            noprize: "Klättra till toppen av listan innan nedräkningen är över!",
                            prizeTopRanking: "Klättra till <strong>topp {num}</strong> på listan innan nedräkningen är över!",
                            prizeEnoughPoints: " | | Samla <strong>{num}p</strong> innan nedräkningen är över!"
                        },
                        leaderboard: {
                            title: "Topplista",
                            loading: "Laddar topplistan",
                            loadingFriends: "Laddar vänners poäng",
                            wait: "Vänta...",
                            updating: "Uppdateras automatiskt",
                            info: "Spela igen för att ta dig in på resultattavlan",
                            empty: "Ingen har spelat quizzen denna runda."
                        }
                    }
                }),
                de: Object(r["a"])({}, n("6413")["default"], {
                    help: {
                        howto: ["Eine Quizrunde besteht aus mehreren Fragen. Je schneller du sie beantwortest, desto mehr Punkte erhältst du.", "Nachdem du alle Fragen beantwortet hast, platzierst du dich entsprechend deiner Punkteanzahl in der Rangliste.", "Wenn der Countdown endet, werden die Gewinner ermittelt."],
                        claimError: "Dieser Preis wurde bereits beansprucht",
                        noprize: ["Eine Quizrunde besteht aus mehreren Fragen. Je schneller du sie beantwortest, desto mehr Punkte erhältst du.", "Nachdem du alle Fragen beantwortet hast, platzierst du dich entsprechend deiner Punkteanzahl in der Rangliste."],
                        replay: "Du kannst das Quiz erneut spielen, um deine Platzierung in der Rangliste zu verbessern."
                    },
                    friends: {
                        title: "Freunde",
                        info: "Füge deine Freunde hinzu, um deine aktuelle Punktzahl zu vergleichen. Sie erscheinen auf dieser Liste, nachdem sie eine Runde gespielt haben.",
                        modal: {
                            title: "Freund hinzufügen",
                            placeholder: "Tippe Name#1234",
                            subtitle: "Gib den Namen deines Freundes ein, um dessen aktuelle Punktzahl anzuzeigen.",
                            button: "Hinzufügen"
                        }
                    },
                    intro: {
                        title: "Zeit für ein Quiz!",
                        subtitle: "Je schneller du antwortest, desto mehr Punkte erhältst du.",
                        placeholder: "Dein Name",
                        button: "Quiz spielen",
                        info: "Zeichen",
                        playerLimitError: "Zu viele Spieler zur gleichen Zeit. Bitte lade die Seite neu und versuche es in ein paar Minuten noch einmal."
                    },
                    quiz: {
                        header: {
                            name: "Name",
                            score: "Punktzahl"
                        },
                        question: "Frage"
                    },
                    end: {
                        round: "Runde",
                        header: {
                            last: "Letzte Punktzahl",
                            best: "Beste Punktzahl",
                            rank: "Deine Platzierung",
                            participants: "Teilnehmer",
                            prizeButton: "Dein Preis",
                            playButton: "Nochmal spielen"
                        },
                        countdown: {
                            title: "Countdown",
                            noprize: "Erreiche die Spitze der Rangliste bevor der Countdown endet.",
                            prizeTopRanking: "Erreiche die <strong>Top {num}</strong> der Rangliste bevor der Countdown endet.",
                            prizeEnoughPoints: " | | Erziele mindestens <strong>{num}p</strong> bevor der Countdown endet."
                        },
                        leaderboard: {
                            title: "Rangliste",
                            loading: "Lade Top-Platzierungen",
                            loadingFriends: "Lade Platzierungen von Freunden",
                            wait: "Bitte warten...",
                            updating: "Ergebnisse werden aktualisiert",
                            info: "Spiel nochmal, damit du auf der neuen Rangliste erscheinst.",
                            empty: "In dieser Runde hat niemand am Quiz teilgenommen."
                        }
                    }
                }),
                da: Object(r["a"])({}, n("9b57")["default"], {
                    help: {
                        howto: ["Quizzen har flere spørgsmål. Jo hurtigere du besvarer, desto flere point optjener du.", "Når du har besvaret alle spørgsmål, får du en endelig score og en placering på leaderboardet.", "Når nedtællingen løber ud, slutter runden, og præmierne tildeles de bedste spillere."],
                        claimError: "Denne præmie var allerede krævet",
                        noprize: ["Quizzen har flere spørgsmål. Jo hurtigere du besvarer, desto flere point optjener du.", "Når du har besvaret alle spørgsmål, får du en endelig score og en placering på leaderboardet."],
                        replay: "Du kan afspille quizzen igen for at forbedre din score på leaderboardet."
                    },
                    intro: {
                        title: "Det er quiz-tid",
                        subtitle: "Jo hurtigere du svarer, desto flere point optjener du.",
                        placeholder: "Skriv dit navn...",
                        button: "Start quiz",
                        info: "tegn til venstre",
                        playerLimitError: "For mange spillere på samme tid. Indlæs siden igen, og prøv igen om et par minutter."
                    },
                    friends: {
                        title: "Venner",
                        info: "Tilføj venner for at sammenligne din nuværende score med deres. De vises på denne liste, når de har spillet en runde.",
                        modal: {
                            title: "Tilføje en ven",
                            subtitle: "Skriv navnet på din ven for at se deres aktuelle score.",
                            placeholder: "Skriv navn#1234",
                            button: "Tilføj"
                        }
                    },
                    quiz: {
                        header: {
                            name: "Dit navn",
                            score: "Din score"
                        },
                        question: "Spørgsmål"
                    },
                    end: {
                        round: "Runde",
                        header: {
                            last: "Seneste resultat",
                            best: "Bedste resultat",
                            rank: "Din rang",
                            participants: "Deltagere",
                            prizeButton: "Din præmie",
                            playButton: "Afspil igen"
                        },
                        countdown: {
                            title: "Nedtælling",
                            noprize: "Klatre til toppen af ​​leaderboardet, før nedtællingen løber ud!",
                            prizeTopRanking: "Klatre til <strong>top {num}</strong> på leaderboardet, før nedtællingen løber ud!",
                            prizeEnoughPoints: " | | Nå <strong>{num}p</strong> inden nedtællingen løber ud!"
                        },
                        leaderboard: {
                            title: "Leaderboard",
                            loading: "Indlæser topscorer",
                            loadingFriends: "Indlæser venners resultater",
                            wait: "Vent venligst...",
                            updating: "Opdatering Live",
                            info: "Spil igen for at blive rangeret på det nye leaderboard.",
                            empty: "Ingen spillede quizzen i denne runde."
                        }
                    }
                }),
                es: Object(r["a"])({}, n("0503")["default"], {
                    help: {
                        howto: ["El quiz tiene varias preguntas. Mientras más rápido respondas más puntos ganarás.", "Luego de haber contestado todas las preguntas, recibirás un puntaje final y un lugar en el tablero de resultados.", "Cuando la cuenta regresiva se agote, la ronda termina y los premios son asignados a los mejores jugadores."],
                        claimError: "Este premio ya fue reclamado.",
                        noprize: ["El quiz tiene varias preguntas. Mientras más rápido respondas más puntos ganarás.", "Luego de haber contestado todas las preguntas, recibirás un puntaje final y un lugar en el tablero de resultados."],
                        replay: "Puedes volver a tomar el quiz para mejorar tu puntaje en el tablero de resultados."
                    },
                    intro: {
                        title: "¡Es momento del quiz!",
                        subtitle: "Mientras más rápido respondas, más puntos ganas.",
                        placeholder: "Introduce tu nombre...",
                        button: "Start Quiz",
                        info: "caracteres restantes",
                        playerLimitError: "Hay demasiados jugadores al mismo tiempo. Por favor recarga la página e intenta de neuvo en unos minutos."
                    },
                    friends: {
                        title: "Amigos",
                        info: "Agrega amigos para comparar tu puntaje actual con el de ellos. Aparecerán en esta lista una vez hayan jugado una ronda.",
                        modal: {
                            title: "Añade un amigo",
                            subtitle: "Ingresa el nombre de tu amigo para ver us puntaje actual.",
                            placeholder: "Agrega el nombre#1234",
                            button: "Agregar"
                        }
                    },
                    quiz: {
                        header: {
                            name: "Tu nombre",
                            score: "Tu puntaje"
                        },
                        question: "Pregunta"
                    },
                    end: {
                        round: "Ronda",
                        header: {
                            last: "Puntaje más reciente",
                            best: "Mejor puntaje",
                            rank: "Tu rango",
                            participants: "Participantes",
                            prizeButton: "Tu premio",
                            playButton: "Jugar de nuevo"
                        },
                        countdown: {
                            title: "Cuenta regresiva",
                            noprize: "Sube a la cima de la clasificación antes de que se acabe la cuenta atrás.",
                            prizeTopRanking: "Sube al <strong>top {num}</strong> de la clasificación antes de que se acabe la cuenta atrás.",
                            prizeEnoughPoints: " | | Alcanza <strong>{num}p</strong> antes de que acabe la cuenta atrás."
                        },
                        leaderboard: {
                            title: "Tablero de resultados",
                            loading: "Cargando los mejores resultados",
                            loadingFriends: "Cargando el puntaje de los amigos",
                            wait: "Por favor espere...",
                            updating: "Actualizando en vivo",
                            info: "Juega de nuevo para ser ranqueado en el tablero de resultados.",
                            empty: "Nadie ha jugado este quiz en esta ronda."
                        }
                    }
                }),
                ru: Object(r["a"])({}, n("c24f")["default"], {
                    help: {
                        howto: ["В викторине несколько вопросов. Чем быстрее вы ответите, тем больше очков заработаете.", "После того как вы ответите на все вопросы, вы увидите свой финальный результат и рейтинг в таблице лидеров.", "Раунд заканчивается вместе с обратным отсчетом, далее призы распределяются между лучшими игроками."],
                        claimError: "Этот приз уже отдан победителю",
                        noprize: ["В викторине несколько вопросов. Чем быстрее вы ответите, тем больше очков заработаете.", "После того как вы ответите на все вопросы, вы увидите свой финальный результат и рейтинг в таблице лидеров."],
                        replay: "Вы можете повторно пройти викторину, чтобы улучшить свой результат в таблице лидеров."
                    },
                    intro: {
                        title: "Время викторины!",
                        subtitle: "Чем быстрее вы ответите, тем больше очков вы заработаете.",
                        placeholder: "Введите свое имя....",
                        button: "Начать викторину",
                        info: "Осталось символов",
                        playerLimitError: "Слишком много игроков подключилось одновременно. Пожалуйста, перезагрузите страницу и попробуйте зайти еще раз через несколько минут."
                    },
                    friends: {
                        title: "Друзья",
                        info: "Добавьте друзей, чтобы сравнить ваши текущие результаты! Друзья появятся в этом списке после того, как сыграют один раунд.",
                        modal: {
                            title: "Добавить друга",
                            subtitle: "Введите имя друга, чтобы видеть его текущий результат.",
                            placeholder: "Введите имя #1234",
                            button: "Добавить"
                        }
                    },
                    quiz: {
                        header: {
                            name: "Ваше имя",
                            score: "Ваш результат"
                        },
                        question: "Вопрос"
                    },
                    end: {
                        round: "Раунд",
                        header: {
                            last: "Последний результат",
                            best: "Лучший результат",
                            rank: "Ваш рейтинг",
                            participants: "Участники",
                            prizeButton: "Ваш Приз",
                            playButton: "Сыграйте еще раз"
                        },
                        countdown: {
                            title: "Обратный отсчет",
                            prizeVariant: "После подведения итогов мы выберем победителя из всех зарегистрированных участников.",
                            noprize: "Вы еще можете поднять свой рейтинг, пока не закончится обратный отсчет!",
                            prizesFinished: "К сожалению, призов уже не осталось, но вы можете продолжить играть в викторину.",
                            prizes: "После окончания обратного отсчета действия викторины будут определены получатели призов. ",
                            topPlayers: " | <strong>Топ игрок</strong>. |  <strong>Топ {num} игроки</strong>."
                        },
                        leaderboard: {
                            title: "Таблица лидеров",
                            loading: " Загрузка лучших результатов",
                            loadingFriends: "Загрузка результатов друзей",
                            wait: "Пожалуйста, подождите ...",
                            updating: "обновление в прямом эфире",
                            info: "Сыграйте снова, чтобы попасть в новую таблицу лидеров.",
                            empty: "В этом раунде никто не играл в викторину."
                        }
                    }
                }),
                tr: Object(r["a"])({}, n("4a0f")["default"], {
                    help: {
                        howto: ["Bu sayfada birçok soru göreceksiniz. Ne kadar hızlı cevaplarsanız o kadar çok puan kazanırsınız.", "Tüm soruları cevapladıktan sonra ne kadar puan kazandığınızı ve liderler arasındaki sıralamanızı görebileceksiniz.", "Süre sona erdiğinde en çok puan alanlar ödüllendirilecektir."],
                        claimError: "Bu ödül zaten alındı.",
                        noprize: ["Bu sayfada birçok soru göreceksiniz. Ne kadar hızlı cevaplarsanız o kadar çok puan kazanırsınız.", "Tüm soruları cevapladıktan sonra ne kadar puan kazandığınızı ve liderler arasındaki sıralamanızı görebileceksiniz."],
                        replay: "Sıralamanızı yükseltmek için testi tekrar yanıtlayabilirsiniz."
                    },
                    intro: {
                        title: "Şimdi test zamanı!",
                        subtitle: "Hızlı cevaplayın daha çok puan kazanın.",
                        placeholder: "İsminizi yazın...",
                        button: "sınavı başlat",
                        info: "karakter kaldı",
                        playerLimitError: "Şu anda bir yoğunluk var. Lütfen sayfayı tekrar yükleyerek tekrar deneyin."
                    },
                    friends: {
                        title: "Arkadaşlar",
                        info: "Sonucunuzu diğerleri ile kıyaslamak için arkadaşlarınızı ekleyin.Sonuçları tur sonunda görebileceksiniz.",
                        modal: {
                            title: "Arkadaşınızı ekleyin",
                            subtitle: "Arkadaşınızın mecut puanını görmek için adını yazın.",
                            placeholder: "yazın adı#1234",
                            button: "Ekle"
                        }
                    },
                    quiz: {
                        header: {
                            name: "Adınız",
                            score: "Skorunuz"
                        },
                        question: "Soru"
                    },
                    end: {
                        round: "Tur",
                        header: {
                            last: "Son Skor",
                            best: "En İyi Skor",
                            rank: "Sıralamanız",
                            participants: "Katılımcılar",
                            prizeButton: "Sizin ödülünüz",
                            playButton: "Tekrar oyna"
                        },
                        countdown: {
                            title: "Gerisayım",
                            noprize: "Geri sayım bitmeden skor tablosunun en üstüne tırmanın!",
                            prizeTopRanking: " | | Geri sayım bitmeden skor tablosunun ilk  <strong>{num}</strong> tırmanın!",
                            prizeEnoughPoints: " | | Geri sayım bitmeden <strong>{num}</strong> puana ulaşın!"
                        },
                        leaderboard: {
                            title: "Liderlik Sıralaması",
                            loading: "En iyi sonuçlar yükleniyor",
                            loadingFriends: "Arkadaşlarınızın sonuçları yükleniyor.",
                            wait: "Lütfen bekleyiniz...",
                            updating: "Updating Live",
                            info: "Yeni sıralama için tekrar oynayınız.",
                            empty: "Bu turda kimse oynamadı."
                        }
                    }
                }),
                vi: Object(r["a"])({}, n("b0f6")["default"], {
                    help: {
                        howto: ["Phần đố vui này có một số câu hỏi. Bạn trả lời càng nhanh càng được nhiều điểm.", "Sau khi bạn đã trả lời tất cả các câu hỏi, bạn đã đạt được số điểm cuối cùng và ghi danh trên Bảng xếp hạng Leader.", "Khi hết thời gian, vòng kiểm tra này sẽ kết thúc và giải thưởng sẽ được trao cho những người có điểm cao nhất."],
                        claimError: "Giải thưởng đã được công bố.",
                        noprize: ["Phần đố vui này có một số câu hỏi. Bạn trả lời càng nhanh càng được nhiều điểm.", "Sau khi bạn đã trả lời tất cả các câu hỏi, bạn đã đạt được số điểm cuối cùng và ghi danh trên Bảng xếp hạng Leader."],
                        replay: "Bạn có thể chơi lại để cải thiện điểm số của mình."
                    },
                    intro: {
                        title: "Bắt đầu!",
                        subtitle: "Bạn trả lời càng nhanh càng được nhiều điểm.",
                        placeholder: "Gõ tên của bạn...",
                        button: "bắt đầu câu đố",
                        info: "các ký tự còn lại",
                        playerLimitError: "Đang có quá nhiều người tham gia cùng một lúc. Vui lòng tải lại trang và thử lại trong vài phút nữa."
                    },
                    friends: {
                        title: "Bạn bè",
                        info: "Mời bạn bè tham gia để có thể cùng so sánh điểm số. Tên của họ sẽ xuất hiện trong danh sách sau khi họ chơi vòng đầu tiên.",
                        modal: {
                            title: "Thêm bạn",
                            subtitle: "Gõ tên người bạn để có thể thấy điểm số hiện tại của họ.",
                            placeholder: "Gõ tên#1234",
                            button: "Thêm bạn"
                        }
                    },
                    quiz: {
                        header: {
                            name: "Tên của bạn",
                            score: "Điểm của bạn"
                        },
                        question: "Câu hỏi"
                    },
                    end: {
                        round: "Vòng",
                        header: {
                            last: "Số điểm cuối cùng",
                            best: "Số điểm cao nhất",
                            rank: "Xếp hạng của bạn",
                            participants: "Người tham gia",
                            prizeButton: "Giải thưởng của bạn",
                            playButton: "Chơi lại"
                        },
                        countdown: {
                            title: "Đếm ngược",
                            noprize: "Leo lên đầu bảng xếp hạng trước khi hết thời gian đếm ngược!",
                            prizeTopRanking: " | | Leo lên top<strong>{num}</strong> của bảng xếp hạng trước khi hết thời gian đếm ngược!",
                            prizeEnoughPoints: " | | Đạt <strong>{num}</strong> điểm trước khi hết thời gian đếm ngược!"
                        },
                        leaderboard: {
                            title: "Bảng xếp hạng Leader",
                            loading: "Đang tải những điểm số cao nhất",
                            loadingFriends: "Đang tải điểm số của những người bạn",
                            wait: "Vui lòng chờ...",
                            updating: "Updating Live",
                            info: "Chơi lại để ghi danh trên Bảng xếp hạng Leader.",
                            empty: "Không ai chơi lại ở vòng này."
                        }
                    }
                }),
                ar: Object(r["a"])({}, n("7c03")["default"], {
                    help: {
                        howto: ["يحتوي الاختبار على عدة أسئلة. كلما أجبت بشكل أسرع كلما ربحت المزيد من النقاط", "بعد إجابتك على جميع الأسئلة ، تحصل على النتيجة النهائية وترتيب في لوحة الصدارة", "عندما ينتهي العد التنازلي ، تنتهي الجولة ويتم تخصيص الجوائز لأفضل المتسابقين"],
                        claimError: "تم بالفعل المطالبة بهذه الجائزة",
                        noprize: ["يحتوي الاختبار على عدة أسئلة. كلما أجبت بشكل أسرع كلما ربحت المزيد من النقاط", "بعد إجابتك على جميع الأسئلة ، تحصل على النتيجة النهائية وترتيب في لوحة الصدارة"],
                        replay: "يمكنك إعادة الاختبار لتحسين درجاتك على لوحة الصدارة"
                    },
                    intro: {
                        title: "حان وقت الاختبار!",
                        subtitle: "كلما كانت إجابتك أسرع ، زادت النقاط التي تكسبها.",
                        placeholder: "اكتب اسمك ",
                        button: "ابدأ الأختبار ",
                        info: "الحروف الناقصه",
                        playerLimitError: "عدد كبير جدًا من اللاعبين في نفس الوقت. يرجى إعادة تحميل الصفحة والمحاولة مرة أخرى بعد بضع دقائق"
                    },
                    friends: {
                        title: "الأصدقاء",
                        info: "أضف أصدقاء لمقارنة درجاتك الحالية مع درجاتهم. سيظهرون في هذه القائمة بعد أن يلعبوا جولة واحدة.",
                        modal: {
                            title: "أضف صديق",
                            subtitle: "اكتب اسم صديقك لمعرفة درجاته الحالية",
                            placeholder: "أكتب الأسم #1234",
                            button: "اضافه "
                        }
                    },
                    quiz: {
                        header: {
                            name: "اسمك ",
                            score: "الدرجه الخاصه بك "
                        },
                        question: "سؤال "
                    },
                    end: {
                        round: "جوله ",
                        header: {
                            last: "اخر درجه قمت بتحقيقها ",
                            best: "افضل درجه قمت بتحقيقها ",
                            rank: "الترتيب الخاص بك ",
                            participants: "المشتركين ",
                            prizeButton: "الجائزه الخاصه بك ",
                            playButton: "العب مره اخرى "
                        },
                        countdown: {
                            title: "العد التنازلى ",
                            noprize: "اصعد إلى قمة لوحة المتصدرين قبل نفاد العد التنازلي",
                            prizeTopRanking: " | | اصعد إلى أعلى <strong>{num}</strong> في لوحة المتصدرين قبل نفاد العد التنازلي",
                            prizeEnoughPoints: " | | الوصول إلى <strong>{num}</strong> نقطة قبل نفاد العد التنازلي"
                        },
                        leaderboard: {
                            title: "لوحة المتصدرين ",
                            loading: "تحميل أعلى النتائج",
                            loadingFriends: "تحميل نتائج الأصدقاء",
                            wait: "برجاء الأنتظار ",
                            updating: "Updating Live",
                            info: "العب مرة أخرى من أجل الحصول على ترتيب في لوحة المتصدرين الجديدة",
                            empty: "لم يلعب أحد في هذه الجولة"
                        }
                    }
                }),
                fr: Object(r["a"])({}, n("80b1")["default"], {
                    help: {
                        howto: ["Le Quiz comporte plusieurs questions. Plus vous répondez vite, plus vous gagnerez de points. Tous les joueurs sont classés dans le classement.", "Chaque joueur est confronté à la même question en même temps. Un modérateur pourrait commencer la question suivante.", "Lorsque toutes les questions ont été jouées, des prix sont attribués aux meilleurs joueurs."],
                        claimError: "Ce prix a déjà été réclamé",
                        noprize: ["Le Quiz comporte plusieurs questions. Plus vous répondez vite, plus vous gagnerez de points. Tous les joueurs sont classés dans le classement.", "Chaque joueur est confronté à la même question en même temps. Un modérateur pourrait commencer la question suivante."]
                    },
                    intro: {
                        title: "C’est l’heure du Quizz !",
                        subtitle: "Plus vous répondez rapidement, plus vous gagnez de points.",
                        placeholder: "Tapez votre nom...",
                        button: "Démarrer le questionnaire",
                        info: "caractères restants",
                        playerLimitError: "Trop de joueurs en même temps. Veuillez recharger la page et réessayer dans quelques minutes."
                    },
                    quiz: {
                        header: {
                            name: "votre nom",
                            score: "Ton score"
                        },
                        question: "Question",
                        wait: "En attendant que le modérateur lance le quiz",
                        waitLeaderboard: "En attendant que le modérateur lance la question suivante"
                    },
                    end: {
                        header: {
                            last: "Dernière note",
                            best: "Meilleur score",
                            rank: "Ton rang",
                            participants: "Intervenants",
                            prizeButton: "Votre prix",
                            playButton: "Rejouer"
                        },
                        countdown: {
                            title: "Compte à rebours",
                            noprize: "Montez au sommet du classement avant la fin du compte à rebours !",
                            prizeTopRanking: "Montez dans le <strong>top {num}</strong> du classement avant la fin du compte à rebours!",
                            prizeEnoughPoints: " | | Atteignez <strong>{num}p</strong> avant la fin du compte à rebours!"
                        },
                        leaderboard: {
                            title: "Classement",
                            loading: "Chargement des meilleurs scores",
                            wait: "S’il vous plaît, attendez...",
                            updating: "Mise à jour en direct",
                            empty: "Personne n’a joué au quiz dans ce tour."
                        }
                    }
                })
            },
            o = new a["a"]({
                locale: "en",
                fallbackLocale: "en",
                messages: s
            }),
            u = n("632a"),
            l = n.n(u),
            d = (n("2140"), n("d81d"), n("0d03"), n("c0b6"), n("b64b"), n("d3b7"), n("3835")),
            c = n("2909"),
            h = (n("99af"), n("fb6a"), n("b0c0"), n("ac1f"), n("1276"), n("498a"), n("4160"), n("277d"), n("13d5"), n("a434"), n("6b93"), n("b680"), n("e25e"), n("466d"), n("159b"), n("4795"), n("d4ec")),
            p = n("bee2");
        n("53ca");

        function m(e) {
            return Array.isArray(e) && !!e.length
        }

        function f(e) {
            return m(e) ? e[0] : "string" === typeof e && e.length > 0 ? e : null
        }

        function g(e) {
            Object.keys(e).forEach((function(t) {
                document.documentElement.setAttribute(t, e[t])
            }))
        }

        function b(e, t, n) {
            for (var i = parseInt(t) - String(e).length, r = String(e), a = 0; a < i; a++) r = String(n) + r;
            return r
        }
        var v = function() {
                function e() {
                    Object(h["a"])(this, e)
                }
                return Object(p["a"])(e, null, [{
                    key: "initSponsors",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            n = {};
                        return t && m(e.logos) && (n = Object(r["a"])({}, e, {
                            hasSponsors: !0
                        })), n
                    }
                }, {
                    key: "initCta",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            n = {},
                            i = !1;
                        return t && e && ((n = Object.assign({}, e)).createdTimestamp = window.vm.$SDK.activation.activeChangeTs, n.headerImg = f(e.headerImg), i = !0), [n, i]
                    }
                }, {
                    key: "initBranding",
                    value: function(e) {
                        var t = Object.assign({}, e);
                        return t.backgroundImage = f(e.backgroundImage), t.onboardingHeaderImage = f(e.onboardingHeaderImage), t.backgroundColor = f(e.backgroundColor), e.theme && g({
                            theme: e.theme
                        }), t
                    }
                }, {
                    key: "injectStagecastBadge",
                    value: function(e, t) {
                        var n = document.createElement("script");
                        n.src = "https://console.staging.stagecast.io/api/assets/badge.js", n.id = "sc-badge", n.setAttribute("data-theme", e), n.setAttribute("data-enabled", t), document.body.appendChild(n)
                    }
                }]), e
            }(),
            w = {
                name: "IntroBox",
                components: {},
                props: {
                    profile: {
                        type: Object,
                        default: function() {
                            return {}
                        }
                    }
                },
                data: function() {
                    return {
                        name: "",
                        code: "",
                        minLen: 3,
                        maxLen: 20,
                        isDisabled: !0
                    }
                },
                computed: {
                    charsLeft: function() {
                        return this.maxLen - this.name.length
                    }
                },
                watch: {
                    profile: function(e) {
                        if (e && e.name) try {
                            var t = e.name.split("#");
                            this.name = t[0], this.code = t[1]
                        } catch (n) {
                            this.name = "", this.code = ""
                        }
                    }
                },
                methods: {
                    submitName: function() {
                        this.isDisabled = !0;
                        var e = this.code || function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 4;
                                return b(Math.round(Math.random() * (Math.pow(10, parseInt(e)) - 1)), e, "0")
                            }(4),
                            t = this.name.trim();
                        this.$emit("profileUpdates", {
                            name: "".concat(t, "#").concat(e)
                        })
                    },
                    onInputChange: function() {
                        this.isDisabled = this.name.length < this.minLen, this.name.length > this.maxLen && (this.name = this.name.slice(0, this.maxLen))
                    }
                }
            },
            y = (n("cf54"), n("2877")),
            z = Object(y["a"])(w, (function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "intro-box-container"
                }, [n("div", {
                    staticClass: "intro-box"
                }, [n("h1", {
                    staticClass: "intro-title"
                }, [e._v(e._s(e.$t("intro.title")))]), n("p", {
                    staticClass: "intro-subtitle"
                }, [e._v(e._s(e.$t("intro.subtitle")))]), n("div", {
                    staticClass: "input-group"
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.name,
                        expression: "name"
                    }],
                    staticClass: "name-input",
                    attrs: {
                        maxlength: e.maxLen,
                        type: "text",
                        placeholder: e.$t("intro.placeholder")
                    },
                    domProps: {
                        value: e.name
                    },
                    on: {
                        input: [function(t) {
                            t.target.composing || (e.name = t.target.value)
                        }, e.onInputChange]
                    }
                }), n("span", {
                    staticClass: "input-info"
                }, [e._v(e._s(e.charsLeft) + " " + e._s(e.$t("intro.info")))])]), n("button", {
                    staticClass: "custom-button",
                    attrs: {
                        disabled: e.isDisabled
                    },
                    on: {
                        click: e.submitName
                    }
                }, [e._v(e._s(e.$t("intro.button")) + " ")])])])
            }), [], !1, null, "60e6b2d6", null).exports,
            S = (n("caad"), n("a9e3"), n("2532"), n("25f0"), {
                name: "CircularTimer",
                components: {},
                data: function() {
                    return {
                        maskId: 0,
                        stickToEndValue: !0,
                        clockwise: !0,
                        countUp: !1,
                        updateInterval: 100,
                        roundToSeconds: !0,
                        strokeWidth: 15,
                        angle: -Math.PI / 2,
                        fontSize: 28,
                        fontWeight: 600,
                        size: 65,
                        sizeHalf: 32.5,
                        timerValue: 0,
                        timerProgress: 0,
                        percentage: 0,
                        endReached: !1,
                        timerAnimationId: null,
                        startTime: (new Date).getTime() + 3e3
                    }
                },
                props: {
                    duration: {
                        type: Number,
                        required: !1,
                        default: function() {
                            return 20
                        }
                    },
                    status: {
                        type: String,
                        required: !1,
                        default: function() {
                            return null
                        }
                    }
                },
                computed: {
                    getMaskId: function() {
                        return "sc-timer-svg-mask" + this.maskId
                    },
                    getMaskUrl: function() {
                        return "url(#sc-timer-svg-mask".concat(this.maskId, ")")
                    },
                    getPercentage: function() {
                        var e, t, n, i, r = this.timerProgress || 0,
                            a = 0,
                            s = 0;
                        return r < .5 ? (a = 0, s = 1) : r < 1 && (a = 1, s = 1), r >= 1 ? (e = Math.cos(this.angle) * this.sizeHalf, t = Math.sin(this.angle) * this.sizeHalf, "M" + (this.sizeHalf + e) + " " + (this.sizeHalf + t) + " A " + this.sizeHalf + " " + this.sizeHalf + ", 0, " + a + ", " + s + ", " + (this.sizeHalf - e) + " " + (this.sizeHalf - t) + "M" + (this.sizeHalf - e) + " " + (this.sizeHalf - t) + " A " + this.sizeHalf + " " + this.sizeHalf + ", 0, " + a + ", " + s + ", " + (this.sizeHalf + e) + " " + (this.sizeHalf + t) + " Z") : (this.clockwise ? (e = Math.cos(this.angle) * this.sizeHalf, t = Math.sin(this.angle) * this.sizeHalf, n = Math.cos(this.angle - 2 * (1 - r) * Math.PI) * this.sizeHalf, i = Math.sin(this.angle - 2 * (1 - r) * Math.PI) * this.sizeHalf) : (e = Math.cos(this.angle + 2 * (1 - r) * Math.PI) * this.sizeHalf, t = Math.sin(this.angle + 2 * (1 - r) * Math.PI) * this.sizeHalf, n = Math.cos(this.angle) * this.sizeHalf, i = Math.sin(this.angle) * this.sizeHalf), "M" + (this.sizeHalf + e) + " " + (this.sizeHalf + t) + " A " + this.sizeHalf + " " + this.sizeHalf + ", 0, " + a + ", " + s + ", " + (this.sizeHalf + n) + " " + (this.sizeHalf + i) + " L " + this.sizeHalf + " " + this.sizeHalf + " Z")
                    }
                },
                created: function() {
                    this.setProgress(0), this.start((new Date).getTime()), this.maskId = Math.random().toString(36).substr(2, 9)
                },
                beforeDestroy: function() {
                    window.clearInterval(this.timerAnimationId)
                },
                methods: {
                    setProgress: function(e) {
                        this.countUp ? this.setValue(this.duration * e) : this.setValue(this.duration * (1 - e))
                    },
                    setValue: function(e) {
                        var t = this.timerValue,
                            n = 0;
                        (n = this.countUp ? this.roundToSeconds ? Math.floor(e) / this.duration : e / this.duration : this.roundToSeconds ? (this.duration - Math.ceil(e)) / this.duration : (this.duration - e) / this.duration) < 0 && (n = 0), this.stickToEndValue && n > 1 && (n = 1, e = this.countUp ? this.duration : 0);
                        var i = !1;
                        e !== t && t && (i = !0), this.timerValue = this.countUp ? Math.floor(e) : Math.ceil(e), this.timerProgress = 1 - e / this.duration, i && this.$emit("time-change", {
                            time: this.timerValue,
                            progress: this.timerProgress
                        })
                    },
                    start: function(e) {
                        var t = this;
                        this.startTime = e, clearInterval(this.timerAnimationId), this.timerAnimationId = setInterval((function() {
                            var e = ((new Date).getTime() - t.startTime) / 1e3;
                            t.countUp ? t.setValue(e) : t.setValue(t.duration - e), e > t.duration && !t.endReached && (t.endReached = !0, t.$emit("timer-end", !0), clearInterval(t.timerAnimationId))
                        }), this.updateInterval)
                    },
                    stop: function() {
                        clearInterval(this.timerAnimationId)
                    }
                },
                watch: {
                    duration: function(e) {
                        e && (this.duration = e, this.setProgress(0), this.start((new Date).getTime()))
                    }
                }
            }),
            C = (n("ef2a"), Object(y["a"])(S, (function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                    staticClass: "circular-timer",
                    class: {
                        green: "correct" === e.status,
                        red: "wrong" === e.status
                    }
                }, [i("svg", {
                    staticClass: "sc-timer-svg",
                    style: {
                        width: e.size + "px",
                        height: e.size + "px"
                    }
                }, [i("mask", {
                    staticClass: "sc-timer-svg-mask",
                    attrs: {
                        id: e.getMaskId
                    }
                }, [i("circle", {
                    attrs: {
                        id: "sc-timer-svg-mask-circle",
                        cx: e.sizeHalf,
                        cy: e.sizeHalf,
                        r: e.sizeHalf,
                        "stroke-width": e.strokeWidth,
                        fill: "#00000",
                        stroke: "#FFFFFF"
                    }
                })]), i("circle", {
                    staticClass: "sc-timer-svg-circle",
                    attrs: {
                        mask: e.getMaskUrl,
                        cx: e.sizeHalf,
                        cy: e.sizeHalf,
                        r: e.sizeHalf
                    }
                }), i("path", {
                    staticClass: "sc-timer-svg-path",
                    attrs: {
                        mask: e.getMaskUrl,
                        d: e.getPercentage
                    }
                })]), i("transition", {
                    attrs: {
                        name: "bounce"
                    }
                }, ["correct" === e.status ? i("img", {
                    attrs: {
                        src: n("fe77"),
                        alt: "Correct"
                    }
                }) : e._e()]), i("transition", {
                    attrs: {
                        name: "bounce"
                    }
                }, ["wrong" === e.status ? i("img", {
                    attrs: {
                        src: n("a4c5"),
                        alt: "Wrong"
                    }
                }) : e._e()]), "correct" !== e.status && "wrong" !== e.status ? i("p", {
                    staticClass: "sc-timer-text",
                    style: {
                        fontWeight: e.fontWeight,
                        fontSize: e.fontSize + "px"
                    }
                }, [e._v(e._s(e.timerValue))]) : e._e()], 1)
            }), [], !1, null, "00c5710c", null).exports),
            k = {
                name: "CounterAnimator",
                components: {},
                props: {
                    format: {
                        type: String,
                        required: !1
                    },
                    start: {
                        type: Number,
                        required: !1,
                        default: function() {
                            return 0
                        }
                    },
                    finalNumber: {
                        type: Number,
                        required: !1,
                        default: function() {
                            return 0
                        }
                    }
                },
                data: function() {
                    return {
                        displayNumber: 0,
                        interval: -1,
                        duration: 1500,
                        delay: 700
                    }
                },
                mounted: function() {
                    this.displayNumber = this.start ? this.start : 0, this.animateDiff()
                },
                watch: {
                    start: function() {
                        this.displayNumber = this.start ? this.start : 0, this.animateDiff()
                    },
                    finalNumber: function() {
                        this.animateDiff()
                    }
                },
                methods: {
                    animateDiff: function() {
                        if (clearInterval(this.interval), this.finalNumber !== this.displayNumber) {
                            var e = (new Date).getTime() + this.delay,
                                t = this.displayNumber;
                            this.interval = window.setInterval(function() {
                                var n = (new Date).getTime();
                                if (this.displayNumber !== this.finalNumber && n > e) {
                                    var i = this.easeInFunc(this.easeInFunc(this.easeInOutFunc(Math.abs(n - e) / this.duration)));
                                    n - e > this.duration && (clearInterval(this.interval), i = 1);
                                    var r = (this.finalNumber - t) * i;
                                    r = r >= 0 ? Math.ceil(r) : Math.floor(r), this.displayNumber = t + r
                                }
                            }.bind(this), 50)
                        }
                    },
                    easeInFunc: function(e) {
                        return 1 - Math.cos(e * Math.PI / 2)
                    },
                    easeInOutFunc: function(e) {
                        return (Math.cos(Math.PI - e * Math.PI) + 1) / 2
                    }
                }
            },
            q = Object(y["a"])(k, (function() {
                var e = this.$createElement;
                return (this._self._c || e)("span", [this._v(this._s(this.format ? this.displayNumber.toLocaleString(this.format) : this.displayNumber))])
            }), [], !1, null, "12b6ee82", null).exports,
            P = i["default"].observable({
                profile: {},
                quest: {},
                questHandler: null,
                prize: null,
                activationConfig: {},
                enableFriendsWatchlist: !1,
                friends: void 0,
                error: void 0,
                errorMessage: ""
            }),
            x = {
                quizInitialCountdown: 5e3,
                leaderboardRefreshRate: 7e3,
                leaderboardDelay: 1200,
                replayTimeLimit: 6e4,
                pauseRefreshAfterSeries: 4e4,
                delayNewSeriesStart: 5e3,
                backgroundImage: void 0,
                ctaDisplayTimeout: 5e3,
                backgroundColor: "transparent"
            };

        function _(e, t, n) {
            P.error = e, P.errorMessage = t, P.errorType = n
        }
        var $, I = P,
            T = {
                name: "Question",
                components: {
                    CircularTimer: C,
                    CounterAnimator: q
                },
                data: function() {
                    return {
                        status: "",
                        answerId: -1,
                        correctIds: null,
                        questionPoints: 0,
                        totalPoints: 0,
                        showPoints: !1,
                        hasSelected: !1,
                        error: !1,
                        choices: null
                    }
                },
                computed: {
                    getProfileName: function() {
                        return this.profile ? this.profile.name.split("#")[0] : ""
                    },
                    getProfileCode: function() {
                        return this.profile ? this.profile.name.split("#")[1] : "0000"
                    }
                },
                props: {
                    timeToAnswer: Number,
                    randomized: Boolean,
                    profile: {
                        type: Object,
                        required: !0,
                        default: function() {
                            return {
                                name: "unknown#0000",
                                totalPoints: 0
                            }
                        }
                    },
                    index: {
                        type: Number,
                        required: !0,
                        default: function() {
                            return -1
                        }
                    },
                    total: {
                        type: Number,
                        required: !0,
                        default: function() {
                            return -1
                        }
                    },
                    question: {
                        type: Object,
                        required: !0,
                        default: function() {
                            return {
                                id: "",
                                hash: "",
                                challenge: {
                                    text: "",
                                    image: ""
                                },
                                choices: null,
                                group: "general"
                            }
                        }
                    }
                },
                created: function() {
                    this.totalPoints = this.profile.points
                },
                mounted: function() {
                    this.startTime = (new Date).getTime();
                    var e = (this.question.choices || []).map((function(e, t) {
                        return e.realId = t + 1, e
                    }));
                    this.choices = this.randomized ? function(e) {
                        var t, n, i;
                        for (i = e.length - 1; i > 0; i--) t = Math.floor(Math.random() * (i + 1)), n = e[i], e[i] = e[t], e[t] = n;
                        return e
                    }(e) : e
                },
                beforeDestroy: function() {
                    window.clearTimeout(this.nextQuestionTimeout), window.clearTimeout(this.checkAnswerTimeout)
                },
                methods: {
                    onTimerEnd: function() {
                        this.submitAnswer(null, -1)
                    },
                    submitAnswer: function(e, t) {
                        var n = this,
                            i = (new Date).getTime() - this.startTime,
                            r = btoa(e ? e.offsetX + "," + e.offsetY : "-1,-1");
                        if (!this.hasSelected && (this.hasSelected = !0, t > -1 && this.$refs.timer.stop(), this.answerId = t, this.question.id && this.question.hash)) {
                            var a = {
                                data: {
                                    d: i,
                                    c: r
                                }
                            };
                            //Carrios
                            var dateObj = new Date();
                            var month = (dateObj.getUTCMonth() + 1).toString();
                            var day = dateObj.getUTCDate().toString();
                            var year = dateObj.getUTCFullYear().toString();
                            var dateToCheck = (year+'-'+month+'-'+day);
                            
                            if (dateToCheck == '2023-5-5') {
                                this.answerId = [0,3,1,1,1,1,3,3,3,2,3,1,2,1,1,1,2,1,1,2,1,2,1,1,1,1][this.question.id];
                            } else if (dateToCheck == '2023-5-9') {
                                this.answerId = [0,1,1,2,1,2,3,1,2,2,1,3,1,2,3,2,2,3,2,1,1,2,1,1,1,1][this.question.id];
                            } else if (dateToCheck == '2023-5-12') {
                                this.answerId = [0,1,3,1,1,2,3,3,2,2,1,1,1,2,1,2,3,1,3,1,1,2,1,1,1,1][this.question.id];
                            } else if (dateToCheck == '2023-5-16') {
                                this.answerId = [0,1,1,2,1,2,1,1,2,2,1,3,3,2,1,2,3,3,2,1,2,2,1,1,1,1][this.question.id];
                            } else if (dateToCheck == '2023-5-20') {
                                this.answerId = [0,1,1,1,1,1,1,1,1,2,1,3,1,2,3,1,2,2,2,2,1,2,1,1,1,1][this.question.id];
                            } else if (dateToCheck == '2023-5-22') {
                                this.answerId = [0,2,3,1,2,3,3,3,2,2,1,3,1,3,3,2,1,3,2,2,1,2,1,1,1,1][this.question.id];
                            } else if (dateToCheck == '2023-10-10') {
                                this.answerId = [0,3,1,2,1,1,1,1,1,3,2,1,2,2,1,1,1,2,2,1,1,1,1,1,2,1,1,1,1,3,3,1][this.question.id];
                            } else if (dateToCheck == '2023-10-13') {
                                this.answerId = [0,3,2,3,1,2,1,1,1,1,2,1,2,2,1,1,1,2,2,1,1,1,1,1,3,1,3,1,1,3,3,1][this.question.id];
                            } else if (dateToCheck == '2023-10-15') {
                                this.answerId = [0,3,1,2,1,1,1,1,1,3,2,1,2,2,1,1,1,2,2,1,1,1,1,1,3,1,1,1,1,3,3,1][this.question.id];
                            } else if (dateToCheck == '2023-10-20') {
                                this.answerId = [0,3,1,2,1,1,1,1,1,3,2,1,2,2,1,1,1,2,2,1,1,1,1,1,3,1,1,1,1,3,3,1][this.question.id];
                            } else if (dateToCheck == '2023-10-26') {
                                this.answerId = [0,3,1,2,1,1,1,1,1,3,2,1,2,2,1,1,1,2,2,1,1,1,1,1,3,1,1,1,1,3,3,1][this.question.id];
                            } else if (dateToCheck == '2023-11-19') {
                                this.answerId = [0,1,1,3,1,1,1,2,2,1,3,2,1,1,3,3,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1][this.question.id];
                            } else if (dateToCheck == '2024-5-1') {
                                this.answerId = [0,3,1,2,1,2,1,1,1,3,1,1,2,2,1,1,1,2,2,1,3,1,1,1,3,1,2,3,2,2,3,1][this.question.id];
                            } else if (dateToCheck == '2024-5-4') {
                                this.answerId = [0,3,1,2,1,2,1,1,1,2,1,1,2,2,1,1,1,2,2,1,3,1,1,1,3,1,2,3,2,2,3,1][this.question.id];
                            }



                            if ( [].includes(this.question.id) ) {
                                alert(dateToCheck + ': Q=' + this.question.id + ' A=' + this.answerId);
                            }
                            //Carrios
                            this.$SDK.quest.respondToChallenge(this.question.id, this.question.hash, this.answerId, a).then((function(e) {
                                n.checkAnswerTimeout = setTimeout((function() {
                                    n.correctIds = e.correctResponses, n.status = e.correctResponses.includes(n.answerId) ? "correct" : "wrong", n.trackAction(n.status), n.questionPoints = e.challengePoints, n.totalPoints = e.totalPoints, n.showPoints = !0, n.nextQuestionTimeout = setTimeout((function() {
                                        n.$emit("goToNext", {
                                            points: n.totalPoints
                                        })
                                    }), 3e3)
                                    console.log(n);
                                }), 600)
                            }))["catch"]((function(e) {
                                console.log(e), _(e), n.hasSelected = !1, n.error = !0, n.answerId = -1
                            }))
                        }
                    },
                    getClass: function(e) {
                        return this.correctIds ? this.correctIds.includes(e) ? "is-correct" : "is-not-correct" : ""
                    },
                    trackAction: function(e) {
                        var t = "quiz_".concat(e, "_answer"),
                            n = {
                                category: this.question.group ? "quiz_" + this.question.group : "quiz",
                                value: 1,
                                label: this.question.group ? "".concat(e, " answer - ").concat(this.question.group) : "".concat(e, " answer"),
                                bundle: I.activationConfig.bundleId
                            };
                        this.$SDK.analytics.track(t, n)
                    }
                }
            },
            L = (n("4b5a"), Object(y["a"])(T, (function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "question"
                }, [n("div", {
                    staticClass: "question-menu bg-grey border-top-radius"
                }, [n("span", {
                    staticClass: "timer-positioner"
                }, [n("circular-timer", {
                    ref: "timer",
                    attrs: {
                        duration: e.timeToAnswer || 30,
                        status: e.status
                    },
                    on: {
                        "timer-end": e.onTimerEnd
                    }
                })], 1), n("div", {
                    staticClass: "question-menu-box participant-name right-border"
                }, [n("div", {
                    staticClass: "text-grey pb-10"
                }, [e._v(e._s(e.$t("quiz.header.name")))]), n("div", {
                    staticClass: "text-bold"
                }, [e._v(e._s(e.getProfileName))]), n("div", {
                    staticClass: "user-code"
                }, [e._v("#" + e._s(e.getProfileCode))])]), n("div", {
                    staticClass: "question-menu-box participant-score"
                }, [n("div", {
                    staticClass: "text-grey pb-10"
                }, [e._v(e._s(e.$t("quiz.header.score")))]), n("div", {
                    staticClass: "text-bold",
                    class: {
                        "score-increase": "correct" === e.status
                    },
                    attrs: {
                        dir: "auto"
                    }
                }, [n("counter-animator", {
                    attrs: {
                        start: e.profile.points,
                        finalNumber: e.totalPoints,
                        format: "de-DE"
                    }
                }), e._v(" p")], 1), n("transition", {
                    attrs: {
                        name: "bounce"
                    }
                }, [e.showPoints ? n("div", {
                    staticClass: "badge",
                    class: [e.status],
                    attrs: {
                        dir: "auto"
                    }
                }, [e._v("+"), n("counter-animator", {
                    attrs: {
                        start: e.questionPoints,
                        finalNumber: 0,
                        format: "de-DE"
                    }
                }), e._v(" p")], 1) : e._e()])], 1)]), n("div", {
                    staticClass: "question-body"
                }, [n("span", {
                    staticClass: "question-info"
                }, [e._v(e._s(e.$t("quiz.question")) + " " + e._s(e.index + 1) + "/ " + e._s(e.total))]), n("h1", {
                    staticClass: "question-text",
                    attrs: {
                        dir: "auto"
                    }
                }, [e._v(" " + e._s(e.question.challenge.text) + " ")]), e.question.challenge.image ? n("img", {
                    staticClass: "question-image",
                    attrs: {
                        src: e.question.challenge.image,
                        alt: "Question Image"
                    }
                }) : e._e(), n("div", {
                    staticClass: "choices"
                }, e._l(e.choices, (function(t) {
                    return n("div", {
                        key: t.realId,
                        staticClass: "choice",
                        class: [{
                            selected: t.realId === e.answerId,
                            disabled: e.hasSelected
                        }, e.getClass(t.realId)],
                        on: {
                            click: function(n) {
                                return e.submitAnswer(n, t.realId)
                            }
                        }
                    }, [t.text ? n("span", [e._v(" " + e._s(t.text) + " ")]) : e._e(), t.image ? n("img", {
                        attrs: {
                            src: t.image,
                            alt: "Choice Image"
                        }
                    }) : e._e()])
                })), 0)])])
            }), [], !1, null, "1890c1a3", null).exports),
            N = {
                name: "QuizStartCountdown",
                components: {},
                data: function() {
                    return {
                        time: 0,
                        interval: -1
                    }
                },
                props: {
                    startOnMounted: {
                        type: Boolean,
                        default: function() {
                            return !0
                        }
                    },
                    duration: {
                        type: Number,
                        required: !0,
                        default: function() {
                            return 5e3
                        }
                    }
                },
                mounted: function() {
                    this.startOnMounted && this.startCountdown()
                },
                beforeDestroy: function() {
                    window.clearInterval(this.interval)
                },
                methods: {
                    startCountdown: function() {
                        var e = this;
                        this.time = Math.ceil(this.duration / 1e3);
                        var t = (new Date).getTime() + this.duration;
                        this.interval = window.setInterval((function() {
                            var n = (new Date).getTime();
                            t > n ? e.time = Math.floor((t - n) / 1e3) : (window.clearInterval(e.interval), e.$emit("countdownEnd", !0))
                        }), 200)
                    }
                }
            },
            E = (n("c999"), {
                name: "Quiz",
                components: {
                    Question: L,
                    QuizStartCountdown: Object(y["a"])(N, (function() {
                        var e = this.$createElement,
                            t = this._self._c || e;
                        return t("div", {
                            staticClass: "quiz-countdown"
                        }, [t("span", [this._v(this._s(this.time))])])
                    }), [], !1, null, "237cf06a", null).exports
                },
                data: function() {
                    return {
                        activeIndex: -1,
                        startDelay: 300,
                        initialCountdownDuration: x.quizInitialCountdown,
                        quizQuestions: [],
                        quizStarted: !1
                    }
                },
                props: {
                    randomized: Boolean,
                    quest: {
                        type: Object,
                        required: !0,
                        default: function() {
                            return {}
                        }
                    },
                    profile: {
                        type: Object,
                        required: !0,
                        default: function() {
                            return {
                                name: "unknown#0000",
                                points: 0
                            }
                        }
                    },
                    questionIds: {
                        type: Array,
                        required: !0,
                        default: function() {
                            return []
                        }
                    }
                },
                created: function() {},
                mounted: function() {
                    this.exitQuizBound = this.exitQuiz.bind(this), this.$root.$on("app:quizRoundInterrupt", this.exitQuizBound), this.$refs && this.$refs.initialCountdown && this.$refs.initialCountdown.startCountdown()
                },
                beforeDestroy: function() {
                    this.$root.$off("app:quizRoundInterrupt")
                },
                computed: {
                    getTimeToAnswer: function() {
                        return this.quest.challengeDuration / 1e3
                    }
                },
                methods: {
                    startQuiz: function() {
                        this.quizStarted || (this.goToNextQuestion(), this.quizStarted = !0)
                    },
                    exitQuiz: function() {
                        window.clearTimeout(this.startTimeout), this.$emit("quizRoundEnd", this.profile.points)
                    },
                    handleCountdownEnd: function() {
                        this.startTimeout = window.setTimeout(this.startQuiz.bind(this), this.startDelay)
                    },
                    goToNextQuestion: function(e) {
                        var t = this;
                        if (window.scrollTo({
                                top: 0
                            }), e && this.$set(this.profile, "points", e.points), this.questionIds.length > this.activeIndex + 1) {
                            var n = this.activeIndex + 1;
                            this.$SDK.quest.getChallenge(this.questionIds[n]).then((function(e) {
                                e.id = t.questionIds[n], t.quizQuestions.push(e), t.activeIndex = n
                            }))["catch"]((function(e) {
                                _(e)
                            }))
                        } else this.exitQuiz()
                    }
                }
            }),
            O = (n("2376"), Object(y["a"])(E, (function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "quiz"
                }, [n("div", {
                    staticClass: "question-slider"
                }, [n("transition-group", {
                    attrs: {
                        name: "slide-fade",
                        mode: "out-in"
                    }
                }, [-1 === e.activeIndex ? n("div", {
                    key: e.activeIndex,
                    staticClass: "countdown-positioner"
                }, [n("QuizStartCountdown", {
                    ref: "initialCountdown",
                    attrs: {
                        startOnMounted: !1,
                        duration: e.initialCountdownDuration
                    },
                    on: {
                        countdownEnd: e.handleCountdownEnd
                    }
                })], 1) : e._e(), e.activeIndex > -1 ? n("div", {
                    key: e.activeIndex,
                    staticClass: "question-positioner"
                }, [n("Question", {
                    key: e.quizQuestions[e.activeIndex].hash,
                    attrs: {
                        index: e.activeIndex,
                        total: e.questionIds.length,
                        question: e.quizQuestions[e.activeIndex],
                        profile: e.profile,
                        randomized: e.randomized,
                        timeToAnswer: e.getTimeToAnswer
                    },
                    on: {
                        goToNext: function(t) {
                            return e.goToNextQuestion(t)
                        }
                    }
                })], 1) : e._e()])], 1)])
            }), [], !1, null, "9ff8a308", null).exports),
            j = {
                name: "Countdown",
                components: {},
                data: function() {
                    return {
                        interval: -1,
                        timeString: "00:00:00",
                        over: null,
                        endTimestamp: this.endtime
                    }
                },
                props: {
                    options: {
                        type: Object,
                        required: !1,
                        default: function() {
                            return {
                                autoStart: !0
                            }
                        }
                    },
                    endtime: {
                        type: Number,
                        required: !1,
                        default: function() {
                            return -1
                        }
                    }
                },
                mounted: function() {
                    this.options.autoStart && this.start()
                },
                beforeDestroy: function() {
                    window.clearInterval(this.interval)
                },
                watch: {
                    endtime: function(e) {
                        e && (clearInterval(this.interval), this.over = !1, this.endTimestamp = e, (new Date).getTime() <= e && this.options.autoStart ? this.start() : this.timeString = "00:00:00")
                    }
                },
                methods: {
                    start: function(e) {
                        var t = this;
                        e && (this.endTimestamp = e), this.over = !1, this.interval = setInterval((function() {
                            t.checkTime()
                        }), 1e3)
                    },
                    stop: function() {
                        clearInterval(this.interval), this.timeString = "00:00:00", this.$emit("countdownStop", !0)
                    },
                    checkTime: function() {
                        if (this.endTimestamp <= 0) return clearInterval(this.interval), this.timeString = "00:00:00", void(this.over = !0);
                        var e = (new Date).getTime(),
                            t = this.endTimestamp - e,
                            n = Math.floor(t / 864e5),
                            i = Math.floor(t % 864e5 / 36e5),
                            r = Math.floor(t % 36e5 / 6e4),
                            a = Math.floor(t % 6e4 / 1e3);
                        t < 0 ? (this.timeString = "00:00:00", this.over = !0, this.$emit("countdownEnd", !0), clearInterval(this.interval)) : this.timeString = this.timeFormat(i + 24 * n) + ":" + this.timeFormat(r) + ":" + this.timeFormat(a)
                    },
                    timeFormat: function(e) {
                        return e < 10 ? "0" + String(e) : e
                    }
                }
            },
            D = (n("440c"), Object(y["a"])(j, (function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "countdown",
                    attrs: {
                        dir: "ltr"
                    }
                }, e._l(e.timeString, (function(t, i) {
                    return n("div", {
                        key: i,
                        class: {
                            "time-box": ":" !== t,
                            divider: ":" === t
                        }
                    }, [e._v(" " + e._s(t) + " ")])
                })), 0)
            }), [], !1, null, "7f333eb2", null).exports),
            R = (n("3ca3"), n("ddb0"), {
                name: "LeaderboardRowRenderer",
                components: {},
                data: function() {
                    return {
                        default: {
                            name: "unknown",
                            code: "0000"
                        }
                    }
                },
                computed: {
                    getScorerName: function() {
                        return this.scorer.name.split("#")[0] || this["default"].name
                    },
                    getScorerCode: function() {
                        return this.scorer.name.split("#")[1] || this["default"].code
                    },
                    isOddRow: function() {
                        return (this.index + 1) % 2
                    },
                    isCurrentUser: function() {
                        return this.currentUserName === this.scorer.name
                    }
                },
                props: {
                    currentUserName: String,
                    index: {
                        type: Number,
                        required: !0,
                        default: function() {
                            return -1
                        }
                    },
                    scorer: {
                        type: Object,
                        required: !0,
                        default: function() {
                            return {}
                        }
                    }
                },
                created: function() {},
                methods: {}
            }),
            M = (n("e748"), {
                name: "LeaderboardRenderer",
                components: {
                    LeaderboardRowRenderer: Object(y["a"])(R, (function() {
                        var e = this,
                            t = e.$createElement,
                            n = e._self._c || t;
                        return n("div", {
                            staticClass: "leaderboard-row",
                            class: {
                                odd: e.isOddRow,
                                empty: !e.scorer.position
                            }
                        }, [e.isCurrentUser ? n("div", {
                            staticClass: "user-marker"
                        }) : e._e(), n("div", [e.scorer.position ? n("div", {
                            staticClass: "leaderboard-position",
                            attrs: {
                                dir: "auto"
                            }
                        }, [e._v(e._s(e.scorer.position) + ".")]) : e._e(), n("div", {
                            staticClass: "leaderboard-name"
                        }, [e._v(e._s(e.getScorerName)), e.scorer.position ? n("span", [e._v("#" + e._s(e.getScorerCode))]) : e._e()])]), e.scorer.position ? n("div", {
                            staticClass: "leaderboard-points",
                            attrs: {
                                dir: "auto"
                            }
                        }, [e._v(e._s(e.scorer.bestScore.toLocaleString("de-DE")) + " p")]) : e._e()])
                    }), [], !1, null, "be41e386", null).exports
                },
                props: {
                    friends: Boolean,
                    latest: Number,
                    selected: Number,
                    username: String,
                    leaderboard: {
                        type: Array,
                        required: !1,
                        default: function() {
                            return []
                        }
                    }
                },
                data: function() {
                    return {
                        board: this.leaderboard,
                        view: {
                            loading: !0,
                            theme: "light"
                        }
                    }
                },
                created: function() {
                    this.view.theme = document.documentElement.getAttribute("theme"), this.view.loading = !0
                },
                methods: {},
                watch: {
                    leaderboard: function(e) {
                        this.board = e || [], this.view.loading = !e
                    }
                }
            }),
            F = (n("fe62"), Object(y["a"])(M, (function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("transition", {
                    attrs: {
                        name: "round-fade",
                        mode: "out-in"
                    }
                }, [e.board.length && !e.view.loading ? i("div", {
                    key: 0,
                    staticClass: "leaderboard"
                }, e._l(e.board, (function(t, n) {
                    return i("leaderboard-row-renderer", {
                        key: n,
                        attrs: {
                            scorer: t,
                            currentUserName: e.username,
                            index: n
                        }
                    })
                })), 1) : e._e(), e.view.loading || e.board.length ? e._e() : i("div", {
                    key: 1,
                    staticClass: "loading"
                }, [e.friends ? ["light" === e.view.theme ? i("img", {
                    attrs: {
                        src: n("aaca"),
                        alt: "empty friends list"
                    }
                }) : i("img", {
                    attrs: {
                        src: n("a8ab"),
                        alt: "empty list"
                    }
                }), i("p", {
                    staticClass: "text-grey",
                    staticStyle: {
                        "max-width": "320px"
                    }
                }, [e._v(e._s(e.$t("friends.info")))])] : [e.latest === e.selected ? ["light" === e.view.theme ? i("img", {
                    attrs: {
                        src: n("a9251"),
                        alt: "empty list"
                    }
                }) : i("img", {
                    attrs: {
                        src: n("2c27"),
                        alt: "empty list"
                    }
                }), i("p", {
                    staticClass: "text-grey",
                    staticStyle: {
                        "max-width": "260px"
                    }
                }, [e._v(e._s(e.$t("end.leaderboard.info")))])] : [i("img", {
                    attrs: {
                        src: n("8479"),
                        alt: "empty list"
                    }
                }), i("p", {
                    staticClass: "text-grey",
                    staticStyle: {
                        "max-width": "260px"
                    }
                }, [e._v(e._s(e.$t("end.leaderboard.empty")))])]]], 2), e.view.loading ? i("div", {
                    key: 2,
                    staticClass: "loading"
                }, [i("h3", [e._v(e._s(e.friends ? e.$t("end.leaderboard.loadingFriends") : e.$t("end.leaderboard.loading")))]), i("p", [e._v(e._s(e.$t("end.leaderboard.wait")))]), (e.view.theme, i("img", {
                    attrs: {
                        src: n("fc72"),
                        alt: "loading..."
                    }
                }))]) : e._e()])
            }), [], !1, null, "bf316218", null).exports),
            H = {
                name: "Paginator",
                components: {},
                data: function() {
                    return {
                        currentIndex: -1
                    }
                },
                computed: {
                    canGoBack: function() {
                        return this.currentIndex > 0
                    },
                    canGoForward: function() {
                        return this.currentIndex < this.len - 1
                    },
                    slotPassed: function() {
                        return !!this.$slots.menuoption
                    }
                },
                props: {
                    len: {
                        type: Number,
                        required: !0,
                        default: function() {
                            return -1
                        }
                    }
                },
                created: function() {},
                mounted: function() {
                    this.currentIndex = this.len - 1
                },
                methods: {
                    goBack: function() {
                        this.currentIndex - 1 > -1 && (this.currentIndex--, this.$emit("goBack", this.currentIndex))
                    },
                    goForward: function() {
                        this.currentIndex + 1 < this.len && (this.currentIndex++, this.$emit("goForward", this.currentIndex))
                    }
                }
            },
            A = (n("2657"), {
                name: "GlobalLeaderboard",
                components: {
                    LeaderboardRenderer: F,
                    Paginator: Object(y["a"])(H, (function() {
                        var e = this,
                            t = e.$createElement,
                            n = e._self._c || t;
                        return n("div", {
                            staticClass: "paginator"
                        }, [n("div", {
                            staticClass: "paginator-header"
                        }, [n("div", {
                            staticClass: "custom-button arrow-button",
                            class: {
                                hidden: !e.canGoBack
                            },
                            on: {
                                click: function(t) {
                                    return e.goBack(t)
                                }
                            }
                        }, [n("svg", {
                            attrs: {
                                width: "8",
                                height: "14",
                                viewBox: "0 0 8 14",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg"
                            }
                        }, [n("path", {
                            attrs: {
                                d: "M6.6 1.4L1 7L6.6 12.6",
                                stroke: "var(--bg-color-2)",
                                "stroke-width": "1.6",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round"
                            }
                        })])]), e._t("title"), n("div", {
                            staticClass: "custom-button arrow-button",
                            class: {
                                hidden: !e.canGoForward,
                                dnone: !e.canGoForward && e.slotPassed
                            },
                            on: {
                                click: function(t) {
                                    return e.goForward(t)
                                }
                            }
                        }, [n("svg", {
                            attrs: {
                                width: "8",
                                height: "14",
                                viewBox: "0 0 8 14",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg"
                            }
                        }, [n("path", {
                            attrs: {
                                d: "M1.4 12.6L7 7L1.4 1.4",
                                stroke: "var(--bg-color-2)",
                                "stroke-width": "1.6",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round"
                            }
                        })])]), n("div", {
                            class: {
                                dnone: e.canGoForward
                            }
                        }, [e._t("menuoption")], 2)], 2), n("div", {
                            staticClass: "paginator-body"
                        }, [e._t("body")], 2)])
                    }), [], !1, null, "b2df798e", null).exports
                },
                props: {
                    withFriends: Boolean,
                    currentSeriesNumber: Number,
                    username: {
                        type: String,
                        required: !0,
                        default: function() {
                            return ""
                        }
                    },
                    quiz: {
                        type: Object,
                        required: !0,
                        default: function() {
                            return {}
                        }
                    }
                },
                data: function() {
                    return {
                        liveLeaderboard: void 0,
                        leaderboardHistory: [],
                        activeSeries: -1,
                        offset: 0,
                        limit: 50
                    }
                },
                created: function() {
                    window.setTimeout(this.fetchUpdates.bind(this), x.leaderboardDelay)
                },
                mounted: function() {
                    this.activeSeries = this.currentSeriesNumber, (0 === this.quiz.maxSeries || this.quiz.maxSeries >= this.currentSeriesNumber) && this.startRefresh()
                },
                beforeDestroy: function() {
                    window.clearTimeout(this.pauseTimeout), window.clearInterval(this.leaderboardInterval)
                },
                computed: {
                    getLeaderboard: function() {
                        return this.activeSeries === this.currentSeriesNumber ? this.liveLeaderboard : this.leaderboardHistory[this.activeSeries - 1]
                    }
                },
                methods: {
                    handleHistoryNavigation: function(e, t) {
                        var n = null;
                        return function() {
                            clearTimeout(n);
                            var i = arguments,
                                r = this;
                            n = setTimeout((function() {
                                e.apply(r, i)
                            }), t)
                        }
                    }((function(e) {
                        this.activeSeries = e + 1, this.activeSeries === this.currentSeriesNumber ? (this.fetchUpdates(), this.startRefresh()) : (this.stopRefresh(), this.fetchHistory(this.activeSeries))
                    }), 300),
                    startRefresh: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : x.leaderboardRefreshRate;
                        this.leaderboardInterval && window.clearInterval(this.leaderboardInterval), this.leaderboardInterval = window.setInterval(this.fetchUpdates.bind(this), e)
                    },
                    stopRefresh: function() {
                        window.clearTimeout(this.pauseTimeout), window.clearInterval(this.leaderboardInterval)
                    },
                    pauseRefresh: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e4;
                        window.clearInterval(this.leaderboardInterval), this.pauseTimeout = window.setTimeout(this.startRefresh.bind(this), e)
                    },
                    clean: function() {
                        this.liveLeaderboard = null
                    },
                    fetchUpdates: function() {
                        var e = this;
                        this.$SDK ? Promise.all([this.$SDK.quest.getTopScores({
                            query: {
                                offset: this.offset,
                                limit: this.limit
                            }
                        }), this.$SDK.quest.getUserScores()]).then((function(t) {
                            var n = t[0],
                                i = t[1];
                            e.liveLeaderboard = n.leaderboard || [], e.$emit("userScore", {
                                userScore: i,
                                totalParticipants: n.totalParticipants
                            });
                            var r = i.position;
                            if (51 === r && e.liveLeaderboard.push(i), r > 51) return e.$SDK.quest.getTopScores({
                                query: {
                                    offset: r - 2,
                                    limit: 3
                                }
                            })
                        })).then((function(t) {
                            var n;
                            if (t) {
                                var i = [{
                                    name: "..."
                                }].concat(Object(c["a"])(t.leaderboard), [{
                                    name: "..."
                                }]);
                                (n = e.liveLeaderboard).push.apply(n, Object(c["a"])(i))
                            }
                        }))["catch"]((function(e) {
                            console.error(e)
                        })) : this.liveLeaderboard = []
                    },
                    fetchHistory: function(e) {
                        var t = this;
                        this.$SDK ? this.$SDK.quest.getTopScores({
                            query: {
                                offset: 0,
                                limit: 10,
                                series: e
                            }
                        }).then((function(n) {
                            t.$set(t.leaderboardHistory, e - 1, n.leaderboard)
                        }))["catch"]((function(e) {
                            e.status >= 400 && e.status < 600 && 404 !== e.status && _(new Error("Failed to load history"))
                        })) : this.$set(this.leaderboardHistory, e - 1, [])
                    },
                    showFriendsLeaderboard: function() {
                        this.$root.$emit("friends:showFriendsLeaderboard")
                    }
                }
            }),
            B = (n("143a"), Object(y["a"])(A, (function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "box",
                    attrs: {
                        id: "leaderboard-box"
                    }
                }, [n("paginator", {
                    attrs: {
                        len: e.currentSeriesNumber
                    },
                    on: {
                        goBack: function(t) {
                            return e.handleHistoryNavigation(t)
                        },
                        goForward: function(t) {
                            return e.handleHistoryNavigation(t)
                        }
                    },
                    scopedSlots: e._u([{
                        key: "title",
                        fn: function() {
                            return [n("div", {
                                staticClass: "box-title"
                            }, [n("h1", {
                                staticClass: "box-title"
                            }, [e._v(e._s(e.$t("end.leaderboard.title")) + " "), 1 !== e.quiz.maxSeries ? n("span", [e._v("- " + e._s(e.$t("end.round")) + " " + e._s(e.activeSeries))]) : e._e()]), n("div", {
                                staticClass: "live-indicator"
                            }, [n("i", {
                                staticClass: "blink"
                            }), e._v(e._s(e.$t("end.leaderboard.updating")) + " ")])])]
                        },
                        proxy: !0
                    }, e.withFriends ? {
                        key: "menuoption",
                        fn: function() {
                            return [n("div", {
                                staticClass: "custom-button arrow-button",
                                on: {
                                    click: function(t) {
                                        return e.showFriendsLeaderboard(t)
                                    }
                                }
                            }, [n("svg", {
                                attrs: {
                                    width: "17",
                                    height: "13",
                                    viewBox: "0 0 17 13",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg"
                                }
                            }, [n("path", {
                                attrs: {
                                    d: "M12.5373 1.46948C13.8814 1.46948 14.9682 2.55627 14.9682 3.90036C14.9682 5.24446 13.8814 6.33124 12.5373 6.33124C11.1966 6.33124 10.1064 5.24446 10.1064 3.90036C10.1064 2.55627 11.1966 1.46948 12.5373 1.46948Z",
                                    fill: "var(--bg-color-2)"
                                }
                            }), n("path", {
                                attrs: {
                                    d: "M16.7974 9.95023C16.7974 10.5194 16.4284 11.0235 15.8833 11.1928C14.7593 11.5415 13.5878 11.7141 12.413 11.7006C12.501 11.4125 12.5451 11.1118 12.5451 10.8102C12.5451 9.62182 12.1557 8.46733 11.4346 7.51935C12.5417 7.85791 13.7402 7.6717 14.6915 7.01489C15.2366 7.1537 15.7242 7.46518 16.0763 7.90531C16.5435 8.48426 16.7974 9.20573 16.7974 9.95023Z",
                                    fill: "var(--bg-color-2)"
                                }
                            }), n("path", {
                                attrs: {
                                    d: "M5.86934 6.5004C7.66438 6.5004 9.11954 5.04524 9.11954 3.2502C9.11954 1.45516 7.66438 0 5.86934 0C4.07431 0 2.61914 1.45516 2.61914 3.2502C2.61914 5.04524 4.07431 6.5004 5.86934 6.5004Z",
                                    fill: "var(--bg-color-2)"
                                }
                            }), n("path", {
                                attrs: {
                                    d: "M10.2907 8.25753C10.873 8.98205 11.1913 9.88263 11.1913 10.8137C11.1913 11.5247 10.7308 12.1547 10.0503 12.3677C7.32828 13.2107 4.41326 13.2107 1.69122 12.3677C1.01071 12.1547 0.546875 11.5247 0.546875 10.8137C0.546875 9.88263 0.865124 8.98205 1.44745 8.25753C1.92821 7.66166 2.59856 7.25199 3.35017 7.10303C4.88048 8.10517 6.85768 8.10517 8.38799 7.10303C9.1396 7.25233 9.81333 7.662 10.2907 8.25753Z",
                                    fill: "var(--bg-color-2)"
                                }
                            })])])]
                        },
                        proxy: !0
                    } : null, {
                        key: "body",
                        fn: function() {
                            return [n("leaderboard-renderer", {
                                attrs: {
                                    latest: e.currentSeriesNumber,
                                    selected: e.activeSeries,
                                    leaderboard: e.getLeaderboard,
                                    username: e.username
                                }
                            })]
                        },
                        proxy: !0
                    }], null, !0)
                })], 1)
            }), [], !1, null, "435d69fc", null).exports),
            U = (n("4de4"), {
                name: "FriendsLeaderboard",
                components: {
                    LeaderboardRenderer: F
                },
                props: {
                    friends: Object,
                    username: {
                        type: String,
                        required: !0,
                        default: function() {
                            return ""
                        }
                    }
                },
                data: function() {
                    return {
                        liveLeaderboard: void 0,
                        offset: 0,
                        limit: 999999
                    }
                },
                created: function() {
                    window.setTimeout(this.fetchUpdates.bind(this), x.leaderboardDelay)
                },
                mounted: function() {
                    this.friends && this.startRefresh()
                },
                beforeDestroy: function() {
                    window.clearTimeout(this.pauseTimeout), window.clearInterval(this.leaderboardInterval), this.clean()
                },
                computed: {
                    getLeaderboard: function() {
                        return this.liveLeaderboard
                    }
                },
                methods: {
                    startRefresh: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : x.leaderboardRefreshRate + 5e3;
                        this.leaderboardInterval && window.clearInterval(this.leaderboardInterval), this.leaderboardInterval = window.setInterval(this.fetchUpdates.bind(this), e)
                    },
                    stopRefresh: function() {
                        window.clearTimeout(this.pauseTimeout), window.clearInterval(this.leaderboardInterval)
                    },
                    pauseRefresh: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e4;
                        window.clearInterval(this.leaderboardInterval), this.pauseTimeout = window.setTimeout(this.startRefresh.bind(this), e)
                    },
                    clean: function() {
                        this.liveLeaderboard = null
                    },
                    fetchUpdates: function() {
                        var e = this;
                        this.$SDK && Promise.all([this.$SDK.quest.getTopScores({
                            query: {
                                offset: this.offset,
                                limit: this.limit
                            }
                        }), this.$SDK.quest.getUserScores()]).then((function(t) {
                            var n = t[0],
                                i = t[1];
                            e.$emit("userScore", {
                                userScore: i,
                                totalParticipants: n.totalParticipants
                            }), e.friends && 0 === e.friends.getSize() ? e.liveLeaderboard = [] : e.liveLeaderboard = (n.leaderboard || []).filter((function(t) {
                                return t.name === e.username || e.friends.hasFriend(t.name)
                            }))
                        }))["catch"]((function(e) {
                            console.error(e)
                        }))
                    },
                    openAddFriendsModal: function() {
                        this.$root.$emit("friends:showFriendsModal")
                    },
                    goBackToGlobalLeaderboard: function() {
                        this.$root.$emit("friends:showGlobalLeaderboard")
                    }
                }
            }),
            Q = (n("efea"), Object(y["a"])(U, (function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "box",
                    attrs: {
                        id: "friends-leaderboard-box"
                    }
                }, [n("div", {
                    staticClass: "box-header"
                }, [n("div", {
                    staticClass: "custom-button arrow-button",
                    on: {
                        click: function(t) {
                            return e.openAddFriendsModal(t)
                        }
                    }
                }, [n("svg", {
                    attrs: {
                        width: "20",
                        height: "15",
                        viewBox: "0 0 20 15",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [n("path", {
                    attrs: {
                        d: "M5.32247 8.5004C7.1175 8.5004 8.57267 7.04524 8.57267 5.2502C8.57267 3.45516 7.1175 2 5.32247 2C3.52743 2 2.07227 3.45516 2.07227 5.2502C2.07227 7.04524 3.52743 8.5004 5.32247 8.5004Z",
                        fill: "var(--bg-color-2)"
                    }
                }), n("path", {
                    attrs: {
                        d: "M9.74383 10.2575C10.3262 10.9821 10.6444 11.8826 10.6444 12.8137C10.6444 13.5247 10.184 14.1547 9.50345 14.3677C6.78141 15.2107 3.86639 15.2107 1.14434 14.3677C0.463831 14.1547 0 13.5247 0 12.8137C0 11.8826 0.318249 10.9821 0.900577 10.2575C1.38134 9.66166 2.05169 9.25199 2.8033 9.10303C4.3336 10.1052 6.31081 10.1052 7.84111 9.10303C8.59272 9.25233 9.26646 9.662 9.74383 10.2575Z",
                        fill: "var(--bg-color-2)"
                    }
                }), n("rect", {
                    attrs: {
                        x: "11",
                        y: "3.85718",
                        width: "9",
                        height: "1.28571",
                        fill: "var(--bg-color-2)"
                    }
                }), n("rect", {
                    attrs: {
                        x: "16.1426",
                        width: "9",
                        height: "1.28571",
                        transform: "rotate(90 16.1426 0)",
                        fill: "var(--bg-color-2)"
                    }
                })])]), n("div", {
                    staticClass: "box-title"
                }, [n("h1", {
                    staticClass: "box-title"
                }, [e._v(e._s(e.$t("friends.title")))]), n("div", {
                    staticClass: "live-indicator"
                }, [n("i", {
                    staticClass: "blink"
                }), e._v(e._s(e.$t("end.leaderboard.updating")) + " ")])]), n("div", {
                    staticClass: "custom-button arrow-button",
                    on: {
                        click: function(t) {
                            return e.goBackToGlobalLeaderboard(t)
                        }
                    }
                }, [n("svg", {
                    attrs: {
                        width: "20",
                        height: "21",
                        viewBox: "0 0 20 21",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [n("path", {
                    attrs: {
                        d: "M12.9412 18.9312H13.8235V14.8135H18.2353C18.5602 14.8135 18.8235 15.0769 18.8235 15.4018V18.9312H19.7059C19.8683 18.9312 20 19.0629 20 19.2253V19.8135C20 19.976 19.8683 20.1076 19.7059 20.1076H0.294118C0.131681 20.1076 0 19.976 0 19.8135V19.2253C0 19.0629 0.131681 18.9312 0.294118 18.9312H1.17647V13.9312C1.17647 13.6063 1.43983 13.3429 1.76471 13.3429H6.17647V18.9312H7.05882V11.2841C7.05882 10.9592 7.32219 10.6959 7.64706 10.6959H12.3529C12.6778 10.6959 12.9412 10.9592 12.9412 11.2841V18.9312ZM8.6325 7.52056C8.05598 7.82366 7.45909 7.3842 7.56831 6.74738L7.82948 5.22465L6.72315 4.14625C6.25674 3.69161 6.49023 2.98812 7.12964 2.89521L8.65854 2.67305L9.34229 1.28762C9.63055 0.703544 10.3718 0.708227 10.6577 1.28762L11.3415 2.67305L12.8704 2.89521C13.5149 2.98888 13.7395 3.69525 13.2768 4.14625L12.1705 5.22465L12.4317 6.74738C12.5418 7.38935 11.9394 7.82123 11.3675 7.52056L10 6.80163L8.6325 7.52056Z",
                        fill: "var(--bg-color-2)"
                    }
                })])])]), n("div", {
                    staticClass: "box-body"
                }, [n("leaderboard-renderer", {
                    attrs: {
                        friends: !0,
                        leaderboard: e.getLeaderboard,
                        username: e.username
                    }
                })], 1)])
            }), [], !1, null, "76af8d13", null).exports),
            K = {
                name: "EmptyLeaderboard",
                components: {},
                props: {},
                data: function() {
                    return {
                        liveLeaderboard: void 0,
                        offset: 0,
                        limit: 1
                    }
                },
                created: function() {
                    window.setTimeout(this.fetchUpdates.bind(this), x.leaderboardDelay)
                },
                mounted: function() {
                    this.startRefresh()
                },
                beforeDestroy: function() {
                    window.clearTimeout(this.pauseTimeout), window.clearInterval(this.leaderboardInterval)
                },
                computed: {},
                methods: {
                    startRefresh: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : x.leaderboardRefreshRate + 5e3;
                        this.leaderboardInterval && window.clearInterval(this.leaderboardInterval), this.leaderboardInterval = window.setInterval(this.fetchUpdates.bind(this), e)
                    },
                    stopRefresh: function() {
                        window.clearTimeout(this.pauseTimeout), window.clearInterval(this.leaderboardInterval)
                    },
                    pauseRefresh: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e4;
                        window.clearInterval(this.leaderboardInterval), this.pauseTimeout = window.setTimeout(this.startRefresh.bind(this), e)
                    },
                    fetchUpdates: function() {
                        var e = this;
                        this.$SDK && Promise.all([this.$SDK.quest.getTopScores({
                            query: {
                                offset: this.offset,
                                limit: this.limit
                            }
                        }), this.$SDK.quest.getUserScores()]).then((function(t) {
                            var n = t[0],
                                i = t[1];
                            e.$emit("userScore", {
                                userScore: i,
                                totalParticipants: n.totalParticipants
                            })
                        }))["catch"]((function(e) {
                            console.error(e)
                        }))
                    }
                }
            },
            V = (n("274a"), Object(y["a"])(K, (function() {
                var e = this.$createElement;
                return (this._self._c || e)("div", {
                    attrs: {
                        id: "empty-leaderboard-box"
                    }
                })
            }), [], !1, null, "100ac404", null).exports),
            G = {
                name: "AddFriendsModal",
                components: {},
                data: function() {
                    return {
                        name: "",
                        code: "",
                        minLen: 8,
                        maxLen: 25,
                        isDisabled: !0,
                        errorMessage: "",
                        correctNameRegex: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-\d\s]+#\d{4}$/
                    }
                },
                computed: {
                    charsLeft: function() {
                        return this.maxLen - this.name.length
                    }
                },
                methods: {
                    closeModal: function() {
                        this.$emit("closeModal", !0)
                    },
                    submitName: function() {
                        this.isDisabled = !0;
                        var e = this.name.trim();
                        this.$root.$emit("friends:addFriend", e), this.name = "", this.closeModal()
                    },
                    onInputChange: function() {
                        this.isDisabled = this.name.length < this.minLen || !this.correctNameRegex.test(this.name), this.name.length > this.maxLen && (this.name = this.name.slice(0, this.maxLen))
                    }
                }
            },
            W = (n("da37"), {
                name: "QuizSummary",
                components: {
                    Countdown: D,
                    GlobalLeaderboard: B,
                    FriendsLeaderboard: Q,
                    EmptyLeaderboard: V,
                    AddFriendsModal: Object(y["a"])(G, (function() {
                        var e = this,
                            t = e.$createElement,
                            n = e._self._c || t;
                        return n("div", {
                            staticClass: "modal-container"
                        }, [n("div", {
                            staticClass: "modal-backdrop",
                            on: {
                                click: function(t) {
                                    return e.closeModal(t)
                                }
                            }
                        }), n("div", {
                            staticClass: "intro-box-container"
                        }, [n("div", {
                            staticClass: "intro-box"
                        }, [n("button", {
                            staticClass: "close-button",
                            on: {
                                click: function(t) {
                                    return e.closeModal(t)
                                }
                            }
                        }, [n("svg", {
                            attrs: {
                                width: "12",
                                height: "12",
                                viewBox: "0 0 12 12",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg"
                            }
                        }, [n("rect", {
                            attrs: {
                                x: "1.41406",
                                width: "14",
                                height: "2",
                                rx: "1",
                                transform: "rotate(45 1.41406 0)",
                                fill: "#C4C4C4"
                            }
                        }), n("rect", {
                            attrs: {
                                x: "11.3137",
                                y: "1.41431",
                                width: "14",
                                height: "2",
                                rx: "1",
                                transform: "rotate(135 11.3137 1.41431)",
                                fill: "#C4C4C4"
                            }
                        })])]), n("h1", {
                            staticClass: "intro-title"
                        }, [e._v(e._s(e.$t("friends.modal.title")))]), n("p", {
                            staticClass: "intro-subtitle"
                        }, [e._v(e._s(e.$t("friends.modal.subtitle")))]), n("div", {
                            staticClass: "input-group"
                        }, [n("input", {
                            directives: [{
                                name: "model",
                                rawName: "v-model",
                                value: e.name,
                                expression: "name"
                            }],
                            staticClass: "name-input",
                            attrs: {
                                maxlength: e.maxLen,
                                type: "text",
                                placeholder: e.$t("friends.modal.placeholder")
                            },
                            domProps: {
                                value: e.name
                            },
                            on: {
                                input: [function(t) {
                                    t.target.composing || (e.name = t.target.value)
                                }, e.onInputChange]
                            }
                        })]), n("button", {
                            staticClass: "custom-button",
                            attrs: {
                                disabled: e.isDisabled
                            },
                            on: {
                                click: e.submitName
                            }
                        }, [e._v(e._s(e.$t("friends.modal.button")))])])])])
                    }), [], !1, null, "4d00c879", null).exports
                },
                props: {
                    enableFriends: Boolean,
                    enableLeaderboard: Boolean,
                    profile: {
                        type: Object,
                        required: !0,
                        default: function() {
                            return {
                                name: "unknown#0000",
                                points: 0
                            }
                        }
                    },
                    quiz: {
                        type: Object,
                        required: !0,
                        default: function() {
                            return {}
                        }
                    }
                },
                data: function() {
                    return {
                        view: {
                            canReplay: !1,
                            isWinner: !1,
                            animateCountdown: !1,
                            withFriends: this.enableFriends,
                            withLeaderboard: this.enableLeaderboard,
                            showFriends: !1,
                            addFriendsSelected: !1
                        },
                        userPosition: -1,
                        totalParticipants: 0,
                        appState: I
                    }
                },
                computed: {
                    getProfileName: function() {
                        return this.profile.name.split("#")[0]
                    },
                    getProfileCode: function() {
                        return this.profile.name.split("#")[1]
                    },
                    getProfilePosition: function() {
                        return this.profile.position > 0 && this.profile.bestScore > 0 ? this.profile.position + "/" + function(e) {
                            var t = Math.log10(e) / 3 | 0;
                            if (0 === t) return e;
                            var n = ["", "k", "M", "G", "T", "P", "E"][t];
                            return (e / Math.pow(10, 3 * t)).toFixed(1) + n
                        }(this.totalParticipants) : "N/A"
                    },
                    getRoundPoints: function() {
                        return (this.profile.points || 0).toLocaleString("de-DE")
                    },
                    getBestScore: function() {
                        return (this.profile.bestScore || 0).toLocaleString("de-DE")
                    },
                    getCountdownDesc: function() {
                        return this.appState.prizeHandler ? this.appState.prizeHandler.getCountdownDescription() : ""
                    },
                    getSeriesNumber: function() {
                        return this.appState.questHandler ? this.appState.questHandler.currentSeriesNumber : -1
                    },
                    showQuizControls: function() {
                        return this.view.isWinner || this.view.canReplay
                    }
                },
                created: function() {},
                mounted: function() {
                    var e = this;
                    this.$root.$on("app:newSeriesStarted", this.newSeriesStarted.bind(this)), this.$root.$on("friends:showGlobalLeaderboard", this.toggleLeaderboards.bind(this)), this.$root.$on("friends:showFriendsLeaderboard", this.toggleLeaderboards.bind(this)), this.$root.$on("friends:showFriendsModal", this.showFriendsModal.bind(this)), this.replayInterval = window.setInterval(this.updateCanReplay.bind(this), 1e3), I.questHandler.canStillPlay() && this.startCountdown(), this.checkWinner(this.profile) && this.$nextTick((function() {
                        return e.$root.$emit("summary:viewPrize")
                    }))
                },
                beforeDestroy: function() {
                    window.clearInterval(this.replayInterval), this.$root.$off("app:newSeriesStarted"), this.$root.$off("friends:showFriendsModal"), this.$root.$off("friends:showGlobalLeaderboard"), this.$root.$off("friends:showFriendsLeaderboard")
                },
                methods: {
                    newSeriesStarted: function() {
                        this.prepareUserForNewSeries(), this.prepareLeaderboardForNewSeries(), this.updateCanReplay(), this.startCountdown()
                    },
                    handleCountdownEnd: function(e) {
                        var t = this;
                        this.animateCountdownOver(), this.refreshUserProfile()["finally"]((function(e) {
                            t.view.withLeaderboard && t.$refs[t.view.showFriends ? "friends" : "leaderboard"].stopRefresh(), window.setTimeout((function() {
                                t.$root.$emit("summary:startNewSeries")
                            }), x.delayNewSeriesStart)
                        }))
                    },
                    refreshUserProfile: function() {
                        var e = this;
                        return this.$SDK.quest.getUserProfile().then((function(t) {
                            e.$root.$emit("app:patchProfile", t), e.checkWinner(t) && e.$nextTick((function() {
                                return e.$root.$emit("summary:viewPrize")
                            }))
                        }))["catch"](_)
                    },
                    prepareUserForNewSeries: function() {
                        this.$root.$emit("app:patchProfile", {
                            points: 0,
                            bestScore: 0,
                            currentRound: 0,
                            poition: null
                        })
                    },
                    handleUserScoreUpdate: function(e) {
                        this.$root.$emit("app:patchProfile", e.userScore || {}), this.totalParticipants = e.totalParticipants
                    },
                    prepareLeaderboardForNewSeries: function() {
                        var e = this;
                        this.$nextTick((function() {
                            e.view.withLeaderboard && !e.view.showFriends && (e.$refs.leaderboard.fetchHistory(I.questHandler.currentSeriesNumber - 1), e.$refs.leaderboard.clean(), e.$refs.leaderboard.pauseRefresh(x.pauseRefreshAfterSeries))
                        }))
                    },
                    checkWinner: function(e) {
                        return !!I.prizeHandler && (this.view.isWinner = I.prizeHandler.checkWinner(e), this.view.isWinner)
                    },
                    animateCountdownOver: function() {
                        var e = this;
                        this.view.animateCountdown = !0, window.setTimeout((function() {
                            e.view.animateCountdown = !1
                        }), 3e3)
                    },
                    startCountdown: function() {
                        var e = I.questHandler;
                        e && e.canStillPlay() && this.$refs.countdown.start(e.currentSeriesEndTs)
                    },
                    updateCanReplay: function() {
                        I.questHandler && (this.view.canReplay = I.questHandler.canUserReplay(this.profile, x.replayTimeLimit))
                    },
                    toggleLeaderboards: function() {
                        this.view.showFriends = !this.view.showFriends
                    },
                    showFriendsModal: function() {
                        this.view.addFriendsSelected = !0
                    }
                }
            }),
            Z = (n("59e7"), Object(y["a"])(W, (function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "summary-container"
                }, [n("div", {
                    staticClass: "summary-positioner"
                }, [n("div", {
                    staticClass: "box",
                    attrs: {
                        id: "profile-box"
                    }
                }, [n("div", {
                    staticClass: "bg-grey border-top-radius"
                }, [n("h1", {
                    staticClass: "box-title"
                }, [e._v(e._s(e.getProfileName)), n("span", {
                    staticClass: "box-title-sub"
                }, [e._v("#" + e._s(e.getProfileCode))])]), n("div", {
                    staticClass: "info-row"
                }, [n("span", [e._v(e._s(e.$t("end.header.last")) + ":")]), n("span", {
                    staticClass: "right-info"
                }, [e._v(e._s(e.getRoundPoints) + " p")])]), n("div", {
                    staticClass: "info-row"
                }, [n("span", [e._v(e._s(e.$t("end.header.best")) + ":")]), n("span", {
                    staticClass: "right-info"
                }, [e._v(e._s(e.getBestScore) + " p")])]), n("div", {
                    staticClass: "info-row"
                }, [n("span", [e._v(e._s(e.$t("end.header.rank")) + ":")]), n("span", {
                    staticClass: "right-info"
                }, [e._v(e._s(e.getProfilePosition))])])]), e.showQuizControls ? n("div", {
                    staticClass: "button-container"
                }, [e.view.isWinner ? n("button", {
                    staticClass: "custom-button prize-button",
                    on: {
                        click: function(t) {
                            return e.$root.$emit("summary:viewPrize")
                        }
                    }
                }, [e._v(e._s(e.$t("end.header.prizeButton")))]) : e._e(), e.view.canReplay ? n("button", {
                    staticClass: "custom-button",
                    on: {
                        click: function(t) {
                            return e.$root.$emit("summary:playAgain")
                        }
                    }
                }, [e._v(e._s(e.$t("end.header.playButton")) + " ")]) : e._e()]) : e._e()]), n("div", {
                    staticClass: "box",
                    class: {
                        blink: e.view.animateCountdown
                    },
                    attrs: {
                        id: "timer-box"
                    }
                }, [n("h1", {
                    staticClass: "box-title"
                }, [e._v(e._s(e.$t("end.countdown.title")) + " "), 1 !== e.quiz.maxSeries ? n("span", [e._v("- " + e._s(e.$t("end.round")) + " " + e._s(e.getSeriesNumber))]) : e._e()]), n("Countdown", {
                    ref: "countdown",
                    attrs: {
                        options: {
                            autoStart: !1
                        }
                    },
                    on: {
                        countdownEnd: function(t) {
                            return e.handleCountdownEnd(t)
                        }
                    }
                }), n("span", {
                    staticClass: "countdown-desc",
                    domProps: {
                        innerHTML: e._s(e.getCountdownDesc)
                    }
                })], 1), e.view.withLeaderboard && !e.view.showFriends ? n("GlobalLeaderboard", {
                    ref: "leaderboard",
                    attrs: {
                        quiz: e.quiz,
                        currentSeriesNumber: e.getSeriesNumber,
                        withFriends: e.view.withFriends,
                        username: e.profile.name
                    },
                    on: {
                        userScore: function(t) {
                            return e.handleUserScoreUpdate(t)
                        }
                    }
                }) : e._e(), e.view.withLeaderboard && e.view.showFriends ? n("FriendsLeaderboard", {
                    ref: "friends",
                    attrs: {
                        friends: e.appState.friends,
                        username: e.profile.name
                    },
                    on: {
                        userScore: function(t) {
                            return e.handleUserScoreUpdate(t)
                        }
                    }
                }) : e._e(), e.view.withLeaderboard ? e._e() : n("EmptyLeaderboard", {
                    on: {
                        userScore: function(t) {
                            return e.handleUserScoreUpdate(t)
                        }
                    }
                }), e.view.addFriendsSelected ? n("AddFriendsModal", {
                    on: {
                        closeModal: function(t) {
                            e.view.addFriendsSelected = !1
                        }
                    }
                }) : e._e()], 1)])
            }), [], !1, null, "fe37ad1c", null).exports),
            J = {
                name: "AppErrorBanner",
                props: {
                    error: {
                        type: Error,
                        required: !1,
                        default: function() {
                            return null
                        }
                    },
                    message: String,
                    type: String
                }
            },
            Y = (n("6acc"), Object(y["a"])(J, (function() {
                var e = this.$createElement,
                    t = this._self._c || e;
                return this.error ? t("div", {
                    staticClass: "app-error",
                    class: {
                        warn: "warn" === this.type
                    }
                }, [this._v(" " + this._s(this.message ? this.message : "Something went wrong. Check your internet connection and reload the page.") + " ")]) : this._e()
            }), [], !1, null, "3229f5f3", null).exports),
            X = (n("a630"), n("4ec9"), n("ade3")),
            ee = function() {
                function e(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                    Object(h["a"])(this, e), Object(X["a"])(this, "friendsMap", void 0), Object(X["a"])(this, "SDK", void 0);
                    var i = n.reduce((function(e, t) {
                        return e.push([t, !0]), e
                    }), []);
                    this.friendsMap = new Map(i)
                }
                return Object(p["a"])(e, [{
                    key: "hasFriend",
                    value: function(e) {
                        return this.friendsMap.has(e)
                    }
                }, {
                    key: "getSize",
                    value: function() {
                        return this.friendsMap.size
                    }
                }, {
                    key: "getFull",
                    value: function() {
                        return Array.from(this.friendsMap.keys())
                    }
                }, {
                    key: "add",
                    value: function(e) {
                        this.friendsMap.set(e, !0)
                    }
                }, {
                    key: "remove",
                    value: function(e) {
                        this.friendsMap.remove(e)
                    }
                }]), e
            }();

        function te(e, t) {
            return $ || ($ = new ee(e, t)), $
        }
        var ne = {
                ENOUGH_POINTS: "prizeOnEnoughPoints",
                TOP_RANKING: "prizeOnTopRanking"
            },
            ie = function() {
                function e(t, n, i) {
                    Object(h["a"])(this, e), Object(X["a"])(this, "timeout", null), Object(X["a"])(this, "quest", null), Object(X["a"])(this, "startTime", null), Object(X["a"])(this, "currentSeriesEndTs", null), Object(X["a"])(this, "currentSeriesNumber", null), Object(X["a"])(this, "currentSeriesActive", !1), Object(X["a"])(this, "randomizeAnswers", !1), Object(X["a"])(this, "seriesOverHandler", (function() {})), this.quest = t, this.startTime = n, this._initSeries(), i && (this.randomizeAnswers = !!i.randomizeAnswers, i.seriesOverHandler && (this.seriesOverHandler = i.seriesOverHandler))
                }
                return Object(p["a"])(e, [{
                    key: "prepareNewSeries",
                    value: function() {
                        return this.getSeriesLeft() > 0 && this._initSeries()
                    }
                }, {
                    key: "isCurrentSeriesActive",
                    value: function() {
                        return this.currentSeriesEndTs > (new Date).getTime()
                    }
                }, {
                    key: "getSeriesLeft",
                    value: function() {
                        return 0 === this.quest.maxSeries ? 1 / 0 : this.quest.maxSeries - this.currentSeriesNumber
                    }
                }, {
                    key: "getSeriesTimeLeft",
                    value: function() {
                        return this.currentSeriesEndTs - (new Date).getTime()
                    }
                }, {
                    key: "canStillPlay",
                    value: function() {
                        return this.getSeriesLeft() >= 0 && this.isCurrentSeriesActive()
                    }
                }, {
                    key: "canUserReplay",
                    value: function(e, t) {
                        return !(0 !== this.quest.maxRoundsPerSeries && e.currentRound >= this.quest.maxRoundsPerSeries) && this.getSeriesTimeLeft() > t
                    }
                }, {
                    key: "getChallengeIndexes",
                    value: function() {
                        return ae.getChallengeIndexes(this.quest.challengesCount, this.quest.challengesPerRound)
                    }
                }, {
                    key: "_initSeries",
                    value: function() {
                        var e = this;
                        this.currentSeriesEndTs = this._getSeriesEndTs(), this.currentSeriesNumber = this._getSeriesNumber(), this.currentSeriesActive = this.isCurrentSeriesActive();
                        var t = this.currentSeriesEndTs - (new Date).getTime();
                        return t > 0 && (this.timeout = window.setTimeout((function() {
                            e.currentSeriesActive = !1, e.seriesOverHandler && e.seriesOverHandler(e)
                        }), t), !0)
                    }
                }, {
                    key: "_getSeriesEndTs",
                    value: function() {
                        return ae.getQuestSeriesEnd(this.quest, this.startTime)
                    }
                }, {
                    key: "_getSeriesNumber",
                    value: function() {
                        return ae.getQuestSeriesNumber(this.quest, this.startTime)
                    }
                }, {
                    key: "addSeriesOverHandler",
                    value: function(e) {
                        this.seriesOverHandler = e
                    }
                }, {
                    key: "removeSeriesOverHandler",
                    value: function() {
                        this.seriesOverHandler = function() {}
                    }
                }]), e
            }(),
            re = function() {
                function e(t, n) {
                    Object(h["a"])(this, e), this.quest = t, this.prize = n
                }
                return Object(p["a"])(e, [{
                    key: "getCountdownDescription",
                    value: function() {
                        if (!this.prize) return window.vm.$t("end.countdown.noprize");
                        if (this.prize.type === ne.ENOUGH_POINTS) {
                            var e = this.prize.enoughPoints || this.prize.enoughPointsPercentage;
                            return window.vm.$tc("end.countdown.prizeEnoughPoints", e, {
                                num: e
                            })
                        }
                        if (this.prize.type === ne.TOP_RANKING) {
                            var t = this.prize.prizeAvailabilityLimit;
                            return window.vm.$tc("end.countdown.prizeTopRanking", t, {
                                num: t
                            })
                        }
                        return window.vm.$t("end.countdown.noprize")
                    }
                }, {
                    key: "checkWinner",
                    value: function(e) {
                        return this.prize && e.prizes && e.prizes.length > 0
                    }
                }, {
                    key: "hasPrize",
                    get: function() {
                        return !!this.prize
                    }
                }]), e
            }(),
            ae = function() {
                function e() {
                    Object(h["a"])(this, e)
                }
                return Object(p["a"])(e, null, [{
                    key: "getChallengeIndexes",
                    value: function(t, n) {
                        return t > n ? e.getRandomChallenges(t, n) : e.getAllChallenges(t)
                    }
                }, {
                    key: "getAllChallenges",
                    value: function(e) {
                        if (e > 0) {
                            var t = Object(c["a"])(Array(e).keys());
                            return t.splice(0, 1), t.push(e), t
                        }
                        return []
                    }
                }, {
                    key: "getRandomChallenges",
                    value: function(e, t) {
                        var n = Object(c["a"])(Array(e).keys());
                        n.splice(0, 1), n.push(e);
                        for (var i = [], r = 0; r < t; r++) {
                            var a = Math.floor(Math.random() * (e - r));
                            i.push(n[a]), n.splice(a, 1)
                        }
                        return i
                    }
                }, {
                    key: "getQuestSeriesEnd",
                    value: function(t, n) {
                        var i = e.getQuestSeriesNumber(t, n);
                        return n + t.seriesDuration * i
                    }
                }, {
                    key: "getQuestSeriesNumber",
                    value: function(e, t) {
                        var n = (new Date).getTime(),
                            i = Math.ceil((n - t) / e.seriesDuration) || 1;
                        return 0 === e.maxSeries ? i : Math.min(e.maxSeries, i)
                    }
                }]), e
            }(),
            se = {
                name: "App",
                components: {
                    IntroBox: z,
                    Quiz: O,
                    QuizSummary: Z,
                    AppErrorBanner: Y
                },
                created: function() {
                    this.$SDK.onInit(this.initialize), g({
                        theme: this.view.theme
                    })
                },
                data: function() {
                    return {
                        appState: I,
                        custom: {},
                        branding: {},
                        sponsors: {},
                        cta: {},
                        ctaEnabled: !1,
                        shareUrl: void 0,
                        challengeIds: [],
                        now: (new Date).getTime(),
                        view: {
                            loading: !0,
                            pageName: "",
                            theme: "light"
                        }
                    }
                },
                mounted: function() {
                    this.$root.$on("summary:playAgain", this.playNewRound.bind(this)), this.$root.$on("summary:viewPrize", this.viewPrize.bind(this)), this.$root.$on("summary:startNewSeries", this.startNewSeries.bind(this)), this.$root.$on("friends:addFriend", this.addFriend.bind(this)), this.$root.$on("app:patchProfile", this.patchProfileProps.bind(this))
                },
                beforeDestroy: function() {
                    this.$root.$off("summary:playAgain"), this.$root.$off("summary:viewPrize"), this.$root.$off("summary:startNewSeries"), this.$root.$off("friends:addFriend"), this.$root.$off("app:patchProfile")
                },
                computed: {
                    background: function() {
                        return this.branding ? this.branding.backgroundImage ? {
                            backgroundImage: "url(".concat(this.branding.backgroundImage, ")")
                        } : this.branding.backgroundColor ? {
                            backgroundColor: this.branding.backgroundColor
                        } : {
                            backgroundColor: x.backgroundColor
                        } : {
                            backgroundColor: x.backgroundColor
                        }
                    },
                    showSponsors: function() {
                        return !this.view.loading && this.sponsors.hasSponsors
                    },
                    isHelpVisible: function() {
                        return "introbox" === this.view.pageName || "summary" === this.view.pageName
                    },
                    getHelpOptions: function() {
                        return {
                            title: this.$SDK.getActivationName() || "Speed Quiz",
                            headerImg: this.branding.onboardingHeaderImage,
                            openOnLoad: !this.$SDK.isConsoleUser()
                        }
                    },
                    getPrizeOptions: function() {
                        return {
                            manualTrigger: !1
                        }
                    },
                    getHowto: function() {
                        var e = this.appState.prize ? Object(c["a"])(this.$t("help.howto")) : Object(c["a"])(this.$t("help.noprize"));
                        return this.appState.quest && 1 !== this.appState.quest.maxRoundsPerSeries && e.push(this.$t("help.replay")), e
                    }
                },
                methods: {
                    initialize: function() {
                        var e = this,
                            t = this.$SDK.activation.getConfig();
                        this.$set(this.appState, "activationConfig", t), this.shareUrl = t.sharingEnabled ? t.shareUrl : null,
                            function(e) {
                                window.vm.$i18n.locale = e || "en";
                                var t = "ar" === window.vm.$i18n.locale ? "rtl" : "auto";
                                g({
                                    lang: window.vm.$i18n.locale,
                                    dir: t
                                })
                            }(t.language), this.initBranding(t.branding), this.initSponsors(t.sponsor, t.showSponsor), this.initCustomData(t.custom), this.initCta(t.cta, t.showCta), this.initQuest(this.$SDK.activation.activeChangeTs, t.custom).then((function(n) {
                                return e.initPrize(n, t.prize), e.initUserState(t.custom)
                            }))["finally"]((function() {
                                e.view.loading = !1, v.injectStagecastBadge(t.branding.theme, e.$SDK.badgeStatus())
                            }))
                    },
                    initSponsors: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        this.sponsors = v.initSponsors(e, t)
                    },
                    initCta: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            n = v.initCta(e, t),
                            i = Object(d["a"])(n, 2);
                        this.cta = i[0], this.ctaEnabled = i[1]
                    },
                    initBranding: function(e) {
                        this.branding = v.initBranding(e)
                    },
                    initCustomData: function(e) {
                        var t = Object.assign({}, e);
                        m(t.helpHeaderImg) ? t.helpHeaderImg = t.helpHeaderImg[0] : t.helpHeaderImg = null, this.custom = t
                    },
                    initPrize: function(e, t) {
                        t && this.$SDK.prize.enabled ? this.$set(this.appState, "prize", t) : this.appState.prize = null, this.appState.prizeHandler = new re(e, t)
                    },
                    initQuest: function(e, t) {
                        var n = this;
                        return this.$SDK.quest.getQuest().then((function(i) {
                            var r = {
                                randomizeAnswers: t.randomizeAnswers,
                                seriesOverHandler: n.seriesOverHandler.bind(n)
                            };
                            return n.appState.quest = i, n.appState.questHandler = new ie(i, e, r), i
                        }))["catch"]((function(e) {
                            n.showError(new Error("Missing quest configuration"))
                        }))["finally"]((function(e) {
                            n.appState.quest || (n.appState.quest = {})
                        }))
                    },
                    initUserState: function(e) {
                        var t = this;
                        return e.enableFriendsWatchlist && (this.appState.enableFriendsWatchlist = !0, this.$SDK.activation.user.getState().then((function(e) {
                            var n = te(e.friends);
                            t.appState.friends = n
                        }))["catch"]((function(e) {
                            t.appState.friends = te([])
                        }))), this.$SDK.quest.getUserProfile().then((function(e) {
                            t.appState.profile = e, t.showPage(e ? "summary" : "introbox")
                        }))["catch"]((function(e) {
                            console.error(e), t.showPage("introbox")
                        }))
                    },
                    handleUserUpdate: function(e) {
                        var t = this;
                        this.saveUserProfile(e).then((function(e) {
                            t.appState.profile = e, t.appState.questHandler.canStillPlay() ? t.playNewRound() : t.showPage("summary")
                        }))["catch"]((function(e) {
                            console.error(e), t.appState.profile = {}, t.showError(e, t.$t("intro.playerLimitError"), "warn")
                        }))
                    },
                    patchProfileProps: function(e) {
                        var t = Object.assign({}, this.appState.profile);
                        Object.keys(e).map((function(n) {
                            t[n] = e[n]
                        })), this.appState.profile = t
                    },
                    saveUserProfile: function(e) {
                        return function e(t, n) {
                            var i = 0;
                            return t["catch"]((function(r) {
                                return ++i < n ? (console.warn("retry call..."), e(t, n - i)) : Promise.reject(r)
                            }))
                        }(this.$SDK.quest.setUserProfile(e), 3)
                    },
                    startNewSeries: function() {
                        this.appState.questHandler.prepareNewSeries() && this.$root.$emit("app:newSeriesStarted")
                    },
                    seriesOverHandler: function() {
                        this.isPageVisible("quiz") && this.$root.$emit("app:quizRoundInterrupt")
                    },
                    startQuizRound: function() {
                        this.challengeIds = this.appState.questHandler.getChallengeIndexes(), m(this.challengeIds) && this.showPage("quiz")
                    },
                    playNewRound: function() {
                        var e = this;
                        this.hideCtaPopup(), this.$SDK.quest.playNewRound({
                            token: "broken_token"
                        }).then((function(t) {
                            e.appState.profile = t, e.startQuizRound()
                        }))["catch"](_)
                    },
                    handleQuizRoundEnd: function(e) {
                        this.patchProfileProps({
                            points: e,
                            roundsPlayed: this.appState.profile.roundsPlayed + 1
                        }), this.refreshAndRedirectToSummary()
                    },
                    refreshAndRedirectToSummary: function() {
                        var e = this;
                        I.prize && I.prize.type === ne.ENOUGH_POINTS ? this.$SDK.quest.getUserProfile().then((function(t) {
                            e.appState.profile = t, e.showPage("summary"), e.showCtaPopup()
                        }))["catch"]((function() {})) : (this.showPage("summary"), this.showCtaPopup())
                    },
                    showCtaPopup: function() {
                        this.ctaEnabled && this.$refs.ctaPopup.show({
                            delay: x.ctaDisplayTimeout
                        })
                    },
                    hideCtaPopup: function() {
                        this.ctaEnabled && this.$refs.ctaPopup.hide()
                    },
                    addFriend: function(e) {
                        (function(e, t) {
                            te().add(t), e.activation.user.setState({
                                friends: te().getFull()
                            }, {
                                query: {
                                    broadcast: !1
                                }
                            }).then()["catch"]((function(e) {}))
                        })(this.$SDK, e)
                    },
                    viewPrize: function() {
                        this.appState.prize && this.$refs.prizeClaimPopup.show()
                    },
                    showPage: function(e) {
                        this.view.pageName = e
                    },
                    isPageVisible: function(e) {
                        return this.view.pageName === e
                    },
                    showError: function(e, t, n) {
                        _(e, t, n)
                    }
                }
            },
            oe = (n("5c0b"), Object(y["a"])(se, (function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "app-component",
                    attrs: {
                        id: "app"
                    }
                }, [n("div", {
                    staticClass: "app-background",
                    style: e.background
                }), e.custom && !e.view.loading ? n("div", {
                    staticClass: "inner"
                }, [n("AppErrorBanner", {
                    attrs: {
                        error: e.appState.error,
                        message: e.appState.errorMessage,
                        type: e.appState.errorType
                    }
                }), n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.isHelpVisible,
                        expression: "isHelpVisible"
                    }],
                    staticClass: "help-section"
                }, [n("ScOnboardingPopup", {
                    ref: "onboardingPopup",
                    attrs: {
                        share: e.shareUrl,
                        prize: e.appState.prize,
                        howto: e.getHowto,
                        options: e.getHelpOptions
                    }
                }), e.appState.prize ? n("ScPrizeClaimPopup", {
                    ref: "prizeClaimPopup",
                    attrs: {
                        prize: e.appState.prize,
                        profile: e.appState.profile,
                        options: e.getPrizeOptions
                    }
                }) : e._e(), e.ctaEnabled ? n("ScCtaPopup", {
                    ref: "ctaPopup",
                    attrs: {
                        cta: e.cta,
                        storekey: e.cta.createdTimestamp
                    }
                }) : e._e(), n("ScProfileButton", {
                    staticStyle: {
                        float: "right",
                        "margin-left": "8px"
                    }
                }), n("div", {
                    staticStyle: {
                        float: "right"
                    },
                    attrs: {
                        id: "sc-badge-injector"
                    }
                })], 1), e.isPageVisible("introbox") ? n("IntroBox", {
                    attrs: {
                        profile: e.appState.profile
                    },
                    on: {
                        profileUpdates: function(t) {
                            return e.handleUserUpdate(t)
                        }
                    }
                }) : e._e(), e.isPageVisible("quiz") ? n("Quiz", {
                    ref: "quiz",
                    attrs: {
                        quest: e.appState.quest,
                        questionIds: e.challengeIds,
                        randomized: e.custom.randomizeAnswers,
                        profile: e.appState.profile
                    },
                    on: {
                        quizRoundEnd: function(t) {
                            return e.handleQuizRoundEnd(t)
                        }
                    }
                }) : e._e(), e.isPageVisible("summary") ? n("QuizSummary", {
                    ref: "quizSummary",
                    attrs: {
                        quiz: e.appState.quest,
                        profile: e.appState.profile,
                        enableFriends: e.custom.enableFriendsWatchlist,
                        enableLeaderboard: e.custom.enableLeaderboard
                    }
                }) : e._e(), e.showSponsors ? n("ScSponsorBanner", {
                    attrs: {
                        sponsor: e.sponsors
                    }
                }) : e._e(), e.view.loading ? e._e() : n("ScFooter")], 1) : e._e()])
            }), [], !1, null, null, null).exports);
        i["default"].config.productionTip = !1, i["default"].use(l.a, {
            i18n: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return o.t(e, t)
            }
        }), window.Stagecast && (i["default"].prototype.$SDK = new window.Stagecast, window.vm = new i["default"]({
            i18n: o,
            render: function(e) {
                return e(oe)
            }
        }).$mount("#app"))
    },
    "59e7": function(e, t, n) {
        "use strict";
        var i = n("8b61");
        n.n(i).a
    },
    "5c0b": function(e, t, n) {
        "use strict";
        var i = n("9c0c");
        n.n(i).a
    },
    "6acc": function(e, t, n) {
        "use strict";
        var i = n("b559");
        n.n(i).a
    },
    8479: function(e, t, n) {
        e.exports = n.p + "img/empty.91340e49.svg"
    },
    "8b61": function(e, t, n) {},
    "931e": function(e, t, n) {},
    "9c0c": function(e, t, n) {},
    a435: function(e, t, n) {},
    a4c5: function(e, t, n) {
        e.exports = n.p + "img/wrong.icon.60ddea75.svg"
    },
    a8ab: function(e, t, n) {
        e.exports = n.p + "img/empty-friend.9a3e4a63.svg"
    },
    a9251: function(e, t, n) {
        e.exports = n.p + "img/empty.29ff0693.svg"
    },
    aaca: function(e, t, n) {
        e.exports = n.p + "img/empty-friend.844cb0e8.svg"
    },
    b24b: function(e, t, n) {},
    b559: function(e, t, n) {},
    b724: function(e, t, n) {},
    c999: function(e, t, n) {
        "use strict";
        var i = n("e943");
        n.n(i).a
    },
    cdb6: function(e, t, n) {},
    cf54: function(e, t, n) {
        "use strict";
        var i = n("b24b");
        n.n(i).a
    },
    da37: function(e, t, n) {
        "use strict";
        var i = n("2a28");
        n.n(i).a
    },
    e748: function(e, t, n) {
        "use strict";
        var i = n("0e85");
        n.n(i).a
    },
    e943: function(e, t, n) {},
    ea2e: function(e, t, n) {},
    ef2a: function(e, t, n) {
        "use strict";
        var i = n("b724");
        n.n(i).a
    },
    efea: function(e, t, n) {
        "use strict";
        var i = n("cdb6");
        n.n(i).a
    },
    f6b5: function(e, t, n) {},
    fc72: function(e, t, n) {
        e.exports = n.p + "img/preloader.fc7321a1.svg"
    },
    fe62: function(e, t, n) {
        "use strict";
        var i = n("ea2e");
        n.n(i).a
    },
    fe77: function(e, t, n) {
        e.exports = n.p + "img/correct.icon.90ed335b.svg"
    }
});
//# sourceMappingURL=app.53781a90.js.map
